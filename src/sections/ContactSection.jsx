import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionHeading from '../components/ui/SectionHeading';
import { personalInfo, socialLinks } from '../data/siteData';
import SocialLinks from '../components/ui/SocialLinks';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError('Missing EmailJS environment variables. Check VITE_SERVICE_ID, VITE_TEMPLATE_ID, and VITE_PUBLIC_KEY.');
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('submitting');
    setSubmitError('');

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formElement,
        publicKey
      );

      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS send failed:', error);
      const detailedError =
        error && typeof error === 'object' && 'text' in error
          ? error.text
          : error instanceof Error
            ? error.message
            : String(error);

      setSubmitError(detailedError);
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let us build something meaningful"
          description="Send a message and I will get back to you. This form is frontend-only and ready for backend integration."
        />

        <div className="grid gap-6 md:grid-cols-5">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 md:col-span-2"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Direct contact</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{personalInfo.email}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{personalInfo.location}</p>

            <div className="mt-6">
              <SocialLinks links={socialLinks} />
            </div>
          </motion.article>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 md:col-span-3"
          >
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-white/15 dark:text-white dark:focus:ring-sky-900"
            />

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-white/15 dark:text-white dark:focus:ring-sky-900"
            />

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-white/15 dark:text-white dark:focus:ring-sky-900"
            />

            <input type="hidden" name="from_name" value={formState.name} readOnly />
            <input type="hidden" name="user_name" value={formState.name} readOnly />
            <input type="hidden" name="user_email" value={formState.email} readOnly />

            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-500"
            >
              {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' ? (
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-300">
                Thank you. Your message has been sent.
              </p>
            ) : null}

            {submitStatus === 'error' ? (
              <p className="text-sm font-medium text-rose-600 dark:text-rose-300">
                Could not send your message: {submitError || 'Unknown EmailJS error.'}
              </p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
