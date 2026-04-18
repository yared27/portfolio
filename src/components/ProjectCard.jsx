import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, onSelect }) => {
  return (
    <motion.article
      layout
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group overflow-hidden rounded-xl border border-white/10 bg-slate-900/80 shadow-lg shadow-black/20 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => onSelect(project)}
        className="block w-full text-left"
      >
        <div className="relative h-52 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        <div className="space-y-4 p-6">
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.description}
            </p>
          </div>
        </div>
      </button>

      <div className="space-y-4 px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition-colors duration-300 hover:border-yellow-500/40 hover:text-yellow-300"
          >
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-yellow-400"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;