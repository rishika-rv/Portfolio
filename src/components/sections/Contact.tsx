"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { EmailActions } from "@/components/ui/EmailActions";
import { PERSONAL_INFO } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="bg-surface-alt py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="For opportunities, collaboration, or a conversation about building useful software."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-6 sm:p-10"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex flex-wrap items-center justify-between gap-4"
          >
            <span className="inline-flex items-center gap-3 text-base font-medium text-foreground sm:text-lg">
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              {PERSONAL_INFO.email}
            </span>
            <ArrowUpRight
              className="h-5 w-5 text-fg-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <div className="mt-7 flex flex-wrap gap-3 border-t border-border pt-6">
            <EmailActions variant="contact" showMailLink={false} />
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-fg-secondary transition-colors hover:bg-surface-alt hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-fg-secondary transition-colors hover:bg-surface-alt hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
