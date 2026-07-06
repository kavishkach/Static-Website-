 'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const values = [
    {
      title: 'Clarity first',
      text: 'We translate complex ideas into simple, thoughtful digital experiences.',
    },
    {
      title: 'Built for growth',
      text: 'Every project is designed to be fast, scalable, and ready for the next stage.',
    },
    {
      title: 'Premium execution',
      text: 'We care about details, performance, and long-term beauty as much as launch speed.',
    },
  ];

  const timeline = [
    'Discovery and strategy',
    'Visual design and prototyping',
    'Development and refinement',
    'Launch and ongoing support',
  ];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.16),transparent_30%),linear-gradient(135deg,#020617,#111827)] px-6 py-16 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <motion.section
          initial={mounted ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-4xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-2xl shadow-black/20 md:p-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">About SK SOLUTION</p>
          <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">We create polished digital products that feel effortless and perform beautifully.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            SK SOLUTION is a creative digital studio focused on modern websites, thoughtful interfaces, and dependable development. We make technology feel simple, elegant, and effective for your brand.
          </p>
        </motion.section>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.section
            initial={mounted ? { opacity: 0, x: -20 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-4xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-2xl shadow-black/20"
          >
            <h2 className="text-2xl font-semibold text-white">Our values</h2>
            <div className="mt-6 grid gap-5">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <h3 className="text-lg font-semibold text-amber-400">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{value.text}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={mounted ? { opacity: 0, x: 20 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="rounded-4xl border border-slate-800/80 bg-slate-900/60 p-8 shadow-2xl shadow-black/20"
          >
            <h2 className="text-2xl font-semibold text-white">How we work</h2>
            <ul className="mt-6 space-y-4">
              {timeline.map((item, index) => (
                <li key={item} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 text-sm font-semibold text-amber-400">0{index + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </main>
  );
}