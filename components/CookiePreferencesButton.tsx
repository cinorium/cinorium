"use client";

import { useCallback } from "react";

declare global {
  interface Window {
    __tcfapi?: (
      command: string,
      version: number,
      callback: (tcData: any, success: boolean) => void,
      parameter?: any,
    ) => void;
    __cmp?: (command: string, parameter?: any, callback?: any) => void;
    choice?: {
      cmp?: {
        displayUI?: () => void;
        open?: () => void;
      };
    };
  }
}

export default function CookiePreferencesButton() {
  const openPreferences = useCallback(() => {
    // 1. Primary: IAB TCF v2 API standard supported by InMobi Choice
    if (typeof window.__tcfapi === "function") {
      try {
        window.__tcfapi("displayConsent", 2, () => {});
        return;
      } catch (err) {
        console.warn("Error invoking __tcfapi displayConsent", err);
      }
    }

    // 2. Secondary fallback: __cmp displayConsent
    if (typeof window.__cmp === "function") {
      try {
        window.__cmp("displayConsent");
        return;
      } catch (err) {
        console.warn("Error invoking __cmp displayConsent", err);
      }
    }

    // 3. Fallback: Choice CMP direct UI method if exposed
    if (window.choice?.cmp?.displayUI) {
      window.choice.cmp.displayUI();
      return;
    }
    if (window.choice?.cmp?.open) {
      window.choice.cmp.open();
      return;
    }

    // 4. Fallback: trigger click on any hidden CMP preference trigger if available
    const cmpTrigger = document.querySelector<HTMLElement>(
      "[data-cmp-open], .sd-cmp-open, #choice-consent-trigger",
    );
    if (cmpTrigger) {
      cmpTrigger.click();
    }
  }, []);

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="hover:text-amber-400 transition-colors cursor-pointer bg-transparent border-0 p-0 text-xs text-gray-400 font-light"
    >
      Cookie Preferences
    </button>
  );
}

