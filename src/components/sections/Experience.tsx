"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCES } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="bg-surface-alt py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="Practical experience across AI/ML, frontend, and software development."
        />

        <div className="mx-auto max-w-4xl space-y-5">
          {EXPERIENCES.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-accent">
                    {experience.company}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-foreground">
                    {experience.title}
                  </h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-fg-secondary">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {experience.location}
                  </p>
                </div>
                <p className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-fg-secondary">
                  <Briefcase
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />
                  {experience.period}
                </p>
              </div>
              <ul className="mt-5 space-y-3 border-t border-border pt-5">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-6 text-fg-secondary"
                  >
                    <CheckCircle2
                      className="mt-1 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
