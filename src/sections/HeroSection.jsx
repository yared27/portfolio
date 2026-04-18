import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../data/siteData';
import SocialLinks from '../components/ui/SocialLinks';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-36 sm:px-6 lg:px-8">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-500/20" />
      <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-indigo-100/80 blur-3xl dark:bg-indigo-500/15" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <p className="inline-flex rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
            {personalInfo.role}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {personalInfo.headline}
          </h1>

          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            {personalInfo.shortBio}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-500"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-white/15 dark:text-slate-100 dark:hover:border-sky-300 dark:hover:text-sky-300"
            >
              View Projects
            </a>
          </div>

          <SocialLinks links={socialLinks} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-300/40 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30">
            <img
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} profile`}
              loading="lazy"
              decoding="async"
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
