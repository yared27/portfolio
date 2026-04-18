import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects as projectData } from '../data/projects';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const ProjectsSection = ({ projects = projectData, title = 'Projects', subtitle = 'Selected work across interfaces, backends, and data-driven ideas.' }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = useMemo(() => {
    const techSet = new Set();

    projects.forEach((project) => {
      project.stack.forEach((tech) => techSet.add(tech));
    });

    const preferredOrder = ['React', 'Node', 'ML'];
    const orderedFilters = preferredOrder.filter((tech) => techSet.has(tech));

    return ['All', ...orderedFilters, ...Array.from(techSet).filter((tech) => !preferredOrder.includes(tech)).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.stack.includes(activeFilter));
  }, [activeFilter, projects]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative mx-auto max-w-7xl"
      >
        <motion.div variants={itemVariants} className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-300/80">Featured work</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
            {subtitle}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-yellow-500 bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/20'
                    : 'border-white/10 bg-white/5 text-slate-300 hover:border-yellow-500/30 hover:text-white'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} layout>
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {selectedProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40"
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative min-h-72">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="space-y-5 p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-yellow-300/80">Project details</p>
                      <h3 className="mt-2 text-2xl font-semibold text-white">{selectedProject.title}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300 transition-colors hover:border-yellow-500/40 hover:text-white"
                    >
                      Close
                    </button>
                  </div>

                  <p className="text-sm leading-7 text-slate-300">
                    {selectedProject.description}
                  </p>

                  <div>
                    <p className="mb-3 text-sm font-medium text-slate-100">Tech stack</p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-yellow-500/40 hover:text-yellow-300"
                    >
                      View GitHub
                    </a>
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-yellow-400"
                    >
                      Open Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;