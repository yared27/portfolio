import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = useMemo(() => {
    const allTech = new Set();

    projects.forEach((project) => {
      project.stack.forEach((tech) => allTech.add(tech));
    });

    const preferred = ['React', 'Node', 'ML'];
    const ordered = preferred.filter((item) => allTech.has(item));
    const rest = [...allTech].filter((item) => !preferred.includes(item)).sort();

    return ['All', ...ordered, ...rest];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.stack.includes(activeFilter));
  }, [activeFilter]);

  const openProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
  }, []);

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', onEscape);

    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  return (
    <section id="projects" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Recent work and selected case studies"
          description="Cards are reusable and data-driven for easy scaling as you add more projects."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'border-sky-600 bg-sky-600 text-white'
                    : 'border-slate-300 text-slate-700 hover:border-sky-500 hover:text-sky-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-sky-300 dark:hover:text-sky-300'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
                <ProjectCard project={project} onOpen={openProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.article
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-white/10 dark:bg-slate-900"
            >
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} detail preview`}
                className="h-64 w-full object-cover sm:h-80"
              />
              <div className="space-y-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{selectedProject.title}</h3>
                  <button
                    type="button"
                    onClick={closeProject}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
                  >
                    Close
                  </button>
                </div>

                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{selectedProject.description}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
