"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PROJECTS, type Project } from "@/lib/constants";

const FILTERS = ["All", "AI", "Full-stack", "Developer Tools", "Deployment"];

function isConfiguredUrl(url: string): boolean {
  return /^https?:\/\//.test(url);
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Selected Projects"
          subtitle="A selection of AI, full-stack, and developer-tool work."
        />

        <div
          className="mb-10 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Project category filters"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                activeFilter === filter
                  ? "bg-accent text-accent-fg"
                  : "border border-border bg-surface text-fg-secondary hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-accent">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  {project.featured && (
                    <span className="shrink-0 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-fg-secondary">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-fg-secondary"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 self-start text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`View details for ${project.title}`}
                >
                  Project details
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-border text-fg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close project details"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {selectedProject.category}
              </p>
              <h3
                id="project-dialog-title"
                className="mt-2 pr-10 text-2xl font-semibold text-foreground"
              >
                {selectedProject.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-fg-secondary">
                {selectedProject.description}
              </p>
              <h4 className="mt-6 text-sm font-semibold text-foreground">
                Problem
              </h4>
              <p className="mt-2 text-sm leading-6 text-fg-secondary">
                {selectedProject.problem}
              </p>
              {selectedProject.details && (
                <>
                  <h4 className="mt-6 text-sm font-semibold text-foreground">
                    Implementation
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-fg-secondary">
                    {selectedProject.details}
                  </p>
                </>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs text-fg-secondary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
              {(isConfiguredUrl(selectedProject.githubUrl) ||
                isConfiguredUrl(selectedProject.liveUrl)) && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {isConfiguredUrl(selectedProject.githubUrl) && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={selectedProject.githubUrl}
                      target="_blank"
                      icon={<GithubIcon className="h-4 w-4" />}
                    >
                      GitHub
                    </Button>
                  )}
                  {isConfiguredUrl(selectedProject.liveUrl) && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={selectedProject.liveUrl}
                      target="_blank"
                      icon={<ExternalLink className="h-4 w-4" />}
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
