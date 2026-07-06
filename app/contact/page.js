'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.16),transparent_30%),linear-gradient(135deg,#020617,#111827)] px-6 py-16 text-slate-100">
      <motion.div
        initial={mounted ? { opacity: 0, y: 24 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl rounded-4xl border border-slate-800/80 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-md md:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Contact us</p>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Let’s create something unforgettable.</h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Tell us about your idea, your audience, and your goals. We’ll help shape it into a polished digital experience.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-sm text-slate-300">
              <p className="font-semibold text-white">Email</p>
              <p className="mt-2 text-slate-400">info@sksolution.dev</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/70 p-6">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Name</label>
              <input type="text" className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-amber-500" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Email</label>
              <input type="email" className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-amber-500" placeholder="name@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">Project details</label>
              <textarea rows="4" className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-amber-500" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full rounded-xl bg-amber-600 px-4 py-3 font-bold text-slate-950 transition hover:bg-amber-500">
              Send Message
            </button>
            {submitted && <p className="text-sm text-emerald-400">Thanks! Your message has been received.</p>}
          </form>
        </div>
      </motion.div>
    </main>
  );
}