import { motion } from 'framer-motion';
import { Activity, ArrowUpRight, Camera, Cpu, Folder, GitBranch, Play, Terminal as TerminalIcon } from 'lucide-react';
import heroImage from '../../assets/hero.png';

function TechVisualization() {
  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b12] p-5 sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_55%)]" />
      <div className="relative flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-primary">Workstation 01</p>
          <p className="text-sm text-gray-400 mt-1">Ideas, assembled into systems</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
          ONLINE
        </div>
      </div>

      <div className="relative min-h-[390px] overflow-hidden rounded-xl border border-white/10 bg-[#08080d] px-4 pt-5 font-mono text-[10px] sm:px-8 sm:text-xs">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_50%_20%,rgba(99,102,241,0.3),transparent_60%)]" />
        <div className="relative flex items-end justify-center gap-3 sm:gap-5 pt-2">
          <div className="relative w-[68%] max-w-[330px]">
            <div className="relative aspect-[16/10] rounded-lg border-4 border-[#303044] bg-[#0d0d17] p-1 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
              <div className="h-full overflow-hidden rounded bg-[#08080d]">
                <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-2 py-1.5">
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-300/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                  </div>
                  <div className="flex items-center gap-1 text-[8px] text-gray-500"><TerminalIcon size={9} /> utkarsh@portfolio</div>
                </div>
                <div className="grid grid-cols-[58px_1fr] sm:grid-cols-[76px_1fr] h-full">
                  <aside className="border-r border-white/10 bg-white/[0.025] p-2 text-[8px] text-gray-500">
                    <div className="flex items-center gap-1 text-gray-300 mb-3"><Folder size={9} className="text-primary" /> src</div>
                    <div className="space-y-2 pl-1"><p className="text-primary">App.jsx</p><p>models/</p><p>data/</p><p>README</p></div>
                  </aside>
                  <div className="relative p-2 text-[8px] sm:text-[9px] leading-relaxed">
                    <div className="flex gap-2 border-b border-white/10 pb-1.5 mb-2 text-gray-500"><span className="text-white">App.jsx</span><span>model.py</span></div>
                    <p><span className="text-gray-600">01</span> <span className="text-secondary">const</span> <span className="text-cyan-300">system</span> = {'{'}</p>
                    <p className="pl-2"><span className="text-gray-600">02</span> <span className="text-primary">model</span>: <span className="text-emerald-300">&quot;curiosity&quot;</span>,</p>
                    <p className="pl-2"><span className="text-gray-600">03</span> <span className="text-primary">output</span>: <span className="text-emerald-300">&quot;real value&quot;</span></p>
                    <p><span className="text-gray-600">04</span> {'}'};</p>
                    <motion.p animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.8, repeat: Infinity }} className="text-accent mt-2"><Activity size={9} className="inline" /> pipeline.ready();</motion.p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto h-10 w-5 bg-gradient-to-r from-[#242438] via-[#454565] to-[#242438]" />
            <div className="mx-auto h-2 w-28 rounded-full bg-[#35354f] shadow-[0_4px_8px_rgba(0,0,0,0.5)]" />
          </div>

          <div className="relative w-[22%] max-w-[100px] aspect-[3/5] rounded-lg border-4 border-[#303044] bg-gradient-to-br from-[#171729] to-[#08080d] p-2 shadow-[0_0_24px_rgba(6,182,212,0.14)]">
            <div className="flex h-full flex-col items-center gap-3 rounded border border-white/10 bg-black/20 pt-5">
              <div className="h-12 w-12 rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center"><Cpu className="h-5 w-5 text-primary" /></div>
              <span className="h-1 w-8 rounded bg-accent shadow-[0_0_8px_#06b6d4]" />
              <span className="h-1 w-8 rounded bg-emerald-300/80" />
              <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.2, repeat: Infinity }} className="mt-auto mb-4 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_#6ee7b7]" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-2 h-8 w-[76%] max-w-[390px] rounded border border-white/10 bg-gradient-to-b from-[#26263a] to-[#11111d] p-1">
          <div className="grid h-full grid-cols-12 gap-1 opacity-80">
            {Array.from({ length: 48 }, (_, index) => <span key={index} className="rounded-sm bg-white/[0.12]" />)}
          </div>
        </div>
        <div className="relative mx-auto flex w-[82%] max-w-[420px] items-center justify-between mt-3">
          <div className="h-1.5 w-[78%] rounded-full bg-gradient-to-r from-primary/50 via-white/20 to-primary/50" />
          <div className="h-7 w-8 rounded-md border border-white/10 bg-[#171729] shadow-lg" />
        </div>
        <div className="relative flex items-center justify-between border-t border-white/10 bg-white/[0.03] px-1 py-2 mt-4 text-gray-500">
          <span className="flex items-center gap-1.5"><GitBranch size={11} /> main</span>
          <span className="flex items-center gap-1.5 text-emerald-300"><Play size={10} fill="currentColor" /> build passing</span>
          <span>v1.0.4</span>
        </div>
      </div>

      <div className="relative flex items-center justify-between mt-4 text-[11px] font-mono text-gray-500">
        <span>focus: creating</span>
        <span>runtime: ready</span>
        <span className="text-accent">v1.0.4</span>
      </div>
    </div>
  );
}

export default function PhotoSection() {
  return (
    <section id="photos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 text-primary mb-5">
              <Camera size={20} />
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">Visual identity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-5">
              Ideas deserve a <span className="gradient-text">clear shape.</span>
            </h2>
            <p className="text-gray-400 max-w-lg leading-relaxed">
              A small visual pause between the work: thoughtful systems, focused details, and technology shaped into something people can use.
            </p>
            <a
              href="#contact"
              onClick={(event) => {
                event.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 mt-8 text-white hover:text-primary transition-colors"
            >
              Start a conversation
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-3"
          >
            <div className="absolute inset-3 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-cyan-400/10 pointer-events-none" />
            <img
              src={heroImage}
              alt="Abstract layered form representing a software system"
              className="relative w-full aspect-[16/10] object-contain rounded-xl bg-[#0b0b12] p-8 sm:p-14"
            />
            <figcaption className="relative flex items-center justify-between gap-4 px-2 pt-4 text-sm text-gray-400">
              <span>Build. Refine. Repeat.</span>
              <span className="font-mono text-primary">/ 01</span>
            </figcaption>
            <TechVisualization />
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
