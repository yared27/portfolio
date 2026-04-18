import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { skillCategoryDescriptions, skills } from '../data/skills';

const SkillsSection = () => {
  const skillGroups = useMemo(
    () => [
      { title: 'Frontend', values: skills.frontend },
      { title: 'Backend', values: skills.backend },
      { title: 'Tools', values: skills.tools },
    ],
    []
  );

  return (
    <section id="skills" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Core capabilities"
          description="A concise overview of the areas I use to design, build, and ship production-ready products."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-slate-900"
            >
              <div className="mb-5 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:bg-sky-400/15 dark:text-sky-200">
                {group.values.length} Technologies
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{group.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {skillCategoryDescriptions[group.title]}
              </p>

              <div className="mt-4 border-t border-slate-200 pt-4 dark:border-white/10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                  Stack highlights
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
                  {group.values.join(' • ')}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
