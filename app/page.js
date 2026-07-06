'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const services = [
    {
      title: 'Web Development',
      desc: 'High-performance websites and web apps built with modern frameworks and clean architecture.',
      icon: '💻',
    },
    {
      title: 'UI/UX Design',
      desc: 'Elegant interfaces designed for clarity, conversion, and a memorable user experience.',
      icon: '✨',
    },
    {
      title: 'Digital Growth',
      desc: 'Smart marketing and strategy systems that help your brand reach the right audience faster.',
      icon: '🚀',
    },
  ];

  const highlights = ['Fast performance', 'Modern design', 'Reliable support'];

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.13),transparent_35%),linear-gradient(135deg,#020617,#111827)] text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col px-6 pb-20 pt-20">
        <motion.div
          initial={mounted ? { opacity: 0, y: 24 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center self-center"
        >
          <span className="mb-6 inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            Future-Ready Digital Agency
          </span>
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            We build modern digital experiences that move your business forward.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
            From high-impact landing pages to full-scale web systems, we design solutions that feel premium, perform fast, and convert better.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact" className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-8 py-4 font-semibold text-slate-950 shadow-lg shadow-amber-600/20 transition hover:scale-[1.02]">
              Start Your Project
            </a>
            <a href="/about" className="rounded-xl border border-slate-700 bg-slate-900/60 px-8 py-4 font-semibold text-slate-200 transition hover:border-amber-500/40 hover:bg-slate-800">
              Explore Our Approach
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={mounted ? { opacity: 0, y: 28 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {highlights.map((item, index) => (
            <div key={item} className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-5 shadow-lg shadow-black/20">
              <p className="text-sm text-slate-400">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{item}</h3>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">What we do best</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">We combine strategy, design, and technology to create experiences your audience will remember.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={mounted ? { opacity: 0, y: 24 } : false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-amber-500/30"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-500/10 bg-amber-500/10 text-3xl">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-amber-400">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        initial={mounted ? { opacity: 0, y: 18 } : false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 flex max-w-6xl flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-8 text-center shadow-2xl shadow-black/20 sm:flex-row sm:items-center sm:justify-between sm:text-left"
      >
        <div>
          <h3 className="text-2xl font-semibold text-white">Ready to launch something remarkable?</h3>
          <p className="mt-2 text-slate-400">Let’s turn your ideas into a polished digital experience.</p>
        </div>
        <a href="/contact" className="rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400">
          Book a Consultation
        </a>
      </motion.section>

      <footer className="border-t border-slate-900/80 py-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} SK SOLUTION. All rights reserved.
      </footer>
    </main>
  );
}