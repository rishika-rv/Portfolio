"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CERTIFICATIONS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Certifications() {
  return (
    <section id="certifications" className="bg-surface-alt py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Selected training in programming and full-stack development."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-fg">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-base font-medium text-foreground">
                {cert.title}
              </h3>
              {cert.issuer && (
                <p className="mt-1 text-sm text-accent">{cert.issuer}</p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-fg-secondary">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
