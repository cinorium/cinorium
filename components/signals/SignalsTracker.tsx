"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const TOKEN_KEY = "cinorium_signals_token";

export function getOrCreateSessionToken(): string {
  if (typeof window === "undefined") return "";
  let token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    token = `sig_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    localStorage.setItem(TOKEN_KEY, token);
  }
  return token;
}

export default function SignalsTracker() {
  const pathname = usePathname();
  const scrollTrackedRef = useRef<boolean>(false);
  const currentPathRef = useRef<string>(pathname);

  // Send first-party event to backend
  const trackEvent = async (
    eventType: string,
    metadata?: Record<string, unknown>
  ) => {
    try {
      const sessionToken = getOrCreateSessionToken();
      if (!sessionToken) return;

      const res = await fetch("/api/signals/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionToken,
          eventType,
          pagePath: window.location.pathname,
          metadata: metadata || {},
        }),
      });

      if (res.ok) {
        const data = await res.json();
        // Dispatch custom event for the capture modal to consume
        window.dispatchEvent(
          new CustomEvent("signals_evaluation_update", { detail: data })
        );
      }
    } catch {
      // Fail silently to never disrupt visitor navigation
    }
  };

  // Track page views on route changes (deferred to browser idle time to avoid blocking LCP/FCP)
  useEffect(() => {
    currentPathRef.current = pathname;
    scrollTrackedRef.current = false;

    const scheduleTrack = () => {
      let eventType = "page_view";
      if (
        pathname.startsWith("/web-development") ||
        pathname.startsWith("/seo-services") ||
        pathname.startsWith("/services")
      ) {
        eventType = "service_page_view";
      } else if (pathname.startsWith("/contact")) {
        eventType = "contact_page_view";
      }

      trackEvent(eventType, { title: document.title });
    };

    let idleId: number | null = null;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = (window as any).requestIdleCallback(scheduleTrack, {
        timeout: 3000,
      });
    } else {
      timerId = setTimeout(scheduleTrack, 2500);
    }

    return () => {
      if (idleId && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as any).cancelIdleCallback(idleId);
      }
      if (timerId) clearTimeout(timerId);
    };
  }, [pathname]);

  // Track 70% scroll depth once per page (throttled with requestAnimationFrame)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (scrollTrackedRef.current || ticking) return;

      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        if (scrollTrackedRef.current) return;

        const scrollY = window.scrollY || window.pageYOffset;
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;

        const scrollPercent = (scrollY / docHeight) * 100;
        if (scrollPercent >= 70) {
          scrollTrackedRef.current = true;
          trackEvent("scroll_depth", { scrollPercent: Math.round(scrollPercent) });
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Track clicks on primary action CTAs
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const isCta =
        target.hasAttribute("data-signals-cta") ||
        href.includes("/contact") ||
        href.includes("wa.me") ||
        target.classList.contains("bg-black") ||
        target.classList.contains("bg-amber-400");

      if (isCta) {
        trackEvent("primary_cta_click", {
          text: target.textContent?.trim().slice(0, 50),
          href: href.slice(0, 100),
        });
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

