"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="About"
          subtitle="A computer science graduate focused on useful AI systems and reliable software."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-base leading-7 text-fg-secondary"
          >
            <p>
              My work spans AI/ML, frontend development, and software
              development. I have built practical solutions involving RAG
              pipelines, agentic AI workflows, machine learning, REST APIs, and
              full-stack applications.
            </p>
            <p>
              I am interested in developing useful AI applications and
              dependable software, bringing together thoughtful product
              workflows, maintainable code, and modern engineering tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-surface p-6 sm:p-7"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Education
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  Gyan Ganga Institute of Technology and Sciences
                </h3>
                <p className="mt-1 text-sm text-fg-secondary">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="mt-3 text-sm text-fg-muted">
                  July 2022 – July 2026 · Jabalpur, Madhya Pradesh
                </p>
                <p className="mt-4 text-sm font-medium text-foreground">
                  CGPA: 8.12
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
