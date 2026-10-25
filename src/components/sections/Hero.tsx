"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { EmailActions } from "@/components/ui/EmailActions";
import { PERSONAL_INFO } from "@/lib/constants";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const ROLES = [
  "I am an AI/ML Developer",
  "I am a Full-Stack Developer",
  "I am a Frontend Developer",
];

export function Hero() {
  const typedRole = useTypingEffect(ROLES, 90, 45, 1800);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-accent">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            AI/ML · Python · Full-stack
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {PERSONAL_INFO.name}
          </h1>
          <p
            className="mt-5 min-h-8 text-xl font-medium text-foreground sm:text-2xl"
            aria-label="AI/ML Developer, Full-Stack Developer, Frontend Developer"
          >
            <span aria-hidden="true">
              <span className="text-accent">{typedRole}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-0.5 inline-block h-6 w-0.5 translate-y-1 bg-accent"
              />
            </span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-fg-secondary sm:text-lg sm:leading-8">
            I build AI-powered applications, intelligent workflows, and reliable
            backend systems using Python, Generative AI, and modern software
            engineering.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg" href="#projects">
              View Projects
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={PERSONAL_INFO.resumePath}
              download
              icon={<Download className="h-4 w-4" />}
            >
              Download Resume
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-fg-secondary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <EmailActions />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, x: 16 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-surface shadow-xl shadow-slate-900/10">
            <Image
              src={PERSONAL_INFO.profileImage}
              alt="Rishika Vishwakarma"
              fill
              priority
              sizes="(max-width: 1023px) 80vw, 400px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 text-xs font-medium text-fg-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </a>
    </section>
  );
}
