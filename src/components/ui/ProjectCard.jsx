import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onOpen }) => {
  return (
    <motion.article
      layout
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 230, damping: 22 }}
      className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition dark:border-white/10 dark:bg-slate-900"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-label={`Open details for ${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover"
        />
      </button>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
          >
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-sky-600 px-3 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-500"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
