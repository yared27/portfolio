import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { navItems } from '../../data/siteData';
import { useActiveSection } from '../../hooks/useActiveSection';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);
  const [selectedSection, setSelectedSection] = useState(activeSection);

  useEffect(() => {
    setSelectedSection(activeSection);
  }, [activeSection]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/70 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="text-sm font-semibold tracking-wide text-slate-900 transition hover:text-sky-600 dark:text-white dark:hover:text-sky-300"
        >
          Yared Alemayehu
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = selectedSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedSection(item.id);
                  scrollToSection(item.id);
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-sky-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:shadow md:hidden dark:border-white/15 dark:text-slate-200"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? '×' : '☰'}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-200 bg-white p-3 shadow-sm md:hidden dark:border-white/10 dark:bg-slate-950"
          >
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = selectedSection === item.id;

                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedSection(item.id);
                        scrollToSection(item.id);
                        setIsOpen(false);
                      }}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                        isActive
                          ? 'bg-sky-600 text-white'
                          : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
