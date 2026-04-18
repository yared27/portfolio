import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { personalInfo } from '../data/siteData';
import { strengths } from '../data/skills';

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="About Me"
          description="I build modern web experiences that are clear, fast, and reliable."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 md:grid-cols-2 md:p-8"
        >
          <article className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {personalInfo.role}
            </p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {personalInfo.name}
            </h3>

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{personalInfo.shortBio}</p>

            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              Based in {personalInfo.location}, I focus on building reusable components, clean UI systems, and responsive experiences that scale.
            </p>

            <a
              href="#contact"
              className="inline-flex rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-sky-500"
            >
              Let&apos;s Work Together
            </a>
          </article>

          <aside className="space-y-5 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Core strengths
            </h4>

            <ul className="space-y-2">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
