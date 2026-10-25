"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

interface EmailActionsProps {
  variant?: "hero" | "contact" | "footer";
  showMailLink?: boolean;
}

export function EmailActions({
  variant = "hero",
  showMailLink = true,
}: EmailActionsProps) {
  const [message, setMessage] = useState("");
  const isContact = variant === "contact";
  const isFooter = variant === "footer";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setMessage("Email address copied");
    } catch {
      setMessage("Copy unavailable. Select the email address to copy it.");
    }
  };

  const sharedClass = isFooter
    ? "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    : isContact
    ? "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-fg-secondary transition-colors hover:bg-surface-alt hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    : "inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <div className={isContact || isFooter ? "flex flex-wrap items-center gap-3" : "flex flex-wrap items-center gap-x-5 gap-y-3"}>
      {showMailLink && (
        <a
          href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent("Portfolio inquiry")}`}
          className={sharedClass}
          aria-label={isFooter ? "Email Rishika" : undefined}
          title={isFooter ? "Email Rishika" : undefined}
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {!isFooter && "Email me"}
        </a>
      )}
      <button
        type="button"
        onClick={copyEmail}
        className={sharedClass}
        aria-label="Copy email address"
        title={isFooter ? "Copy email address" : undefined}
      >
        {message === "Email address copied" ? (
          <Check className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="h-4 w-4" aria-hidden="true" />
        )}
        {!isFooter && "Copy email"}
      </button>
      {message && (
        <span
          className="basis-full text-xs text-fg-secondary"
          role={message === "Email address copied" ? "status" : "alert"}
        >
          {message}
        </span>
      )}
    </div>
  );
}
