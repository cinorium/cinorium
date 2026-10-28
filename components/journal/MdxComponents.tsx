import React from "react";
import Link from "next/link";
import { slugifyHeading } from "@/lib/journal";

function getTextContent(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (React.isValidElement(children) && children.props && (children.props as { children?: React.ReactNode }).children) {
    return getTextContent((children.props as { children: React.ReactNode }).children);
  }
  return "";
}

export const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = getTextContent(children);
    const id = slugifyHeading(text);
    return (
      <h2
        id={id}
        className="group relative mb-4 mt-12 scroll-mt-28 font-serif text-2xl font-bold leading-tight text-gray-900 sm:text-3xl border-b border-black/10 pb-2.5"
        {...props}
      >
        <a
          href={`#${id}`}
          className="no-underline hover:text-amber-800 transition-colors"
        >
          {children}
        </a>
      </h2>
    );
  },

  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = getTextContent(children);
    const id = slugifyHeading(text);
    return (
      <h3
        id={id}
        className="group mb-3 mt-8 scroll-mt-28 font-serif text-xl font-bold text-gray-900 sm:text-2xl"
        {...props}
      >
        <a
          href={`#${id}`}
          className="no-underline hover:text-amber-800 transition-colors"
        >
          {children}
        </a>
      </h3>
    );
  },

  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-6 text-base leading-relaxed text-gray-700 sm:text-lg" {...props}>
      {children}
    </p>
  ),

  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-base leading-relaxed text-gray-700 sm:text-lg" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-base leading-relaxed text-gray-700 sm:text-lg" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="pl-1 text-gray-700" {...props}>
      {children}
    </li>
  ),

  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-8 rounded-r-2xl border-l-4 border-amber-400 bg-amber-50/60 p-5 text-base leading-relaxed text-gray-800 italic sm:text-lg sm:p-6"
      {...props}
    >
      {children}
    </blockquote>
  ),

  table: ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-8 w-full overflow-x-auto rounded-2xl border-2 border-black bg-white shadow-xs">
      <table className="w-full min-w-[500px] border-collapse text-left text-sm" {...props}>
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="border-b-2 border-black bg-amber-50 font-serif font-bold text-gray-900" {...props}>
      {children}
    </thead>
  ),

  tbody: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <tbody className="divide-y divide-gray-200" {...props}>
      {children}
    </tbody>
  ),

  tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="transition-colors hover:bg-gray-50/70" {...props}>
      {children}
    </tr>
  ),

  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="p-3.5 font-semibold text-gray-900" {...props}>
      {children}
    </th>
  ),

  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="p-3.5 text-gray-700 leading-normal" {...props}>
      {children}
    </td>
  ),

  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <div className="my-6 overflow-x-auto rounded-2xl border-2 border-black bg-[#0b131e] p-5 text-gray-100 shadow-xs">
      <pre className="font-mono text-xs sm:text-sm" {...props}>
        {children}
      </pre>
    </div>
  ),

  code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // If it's inside a pre block, let pre handle styling
    const isInline = !className?.includes("language-");
    if (isInline) {
      return (
        <code
          className="rounded-md border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-xs sm:text-sm text-amber-950 font-medium"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },

  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="font-semibold text-gray-900 underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors hover:text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xs"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
        className="font-semibold text-gray-900 underline decoration-amber-400 decoration-2 underline-offset-4 transition-colors hover:text-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xs"
        {...props}
      >
        {children}
      </a>
    );
  },

  hr: () => <hr className="my-10 border-black/10" />,
};

