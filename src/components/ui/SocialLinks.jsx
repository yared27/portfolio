import React from 'react';

const SocialLinks = ({ links }) => {
  return (
    <ul className="flex flex-wrap gap-3" aria-label="Social media links">
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.url}
            target={link.url.startsWith('mailto:') ? undefined : '_blank'}
            rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}
            className="inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-sky-300 dark:hover:text-sky-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
