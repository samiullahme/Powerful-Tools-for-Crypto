/** Shared Tailwind class strings — replaces former globals.css utilities */

export const shell = 'w-full max-w-7xl mx-auto px-4 sm:px-6';
export const heroShell = 'w-full max-w-4xl mx-auto px-4';
export const ctaShell = 'w-full max-w-4xl mx-auto px-4';

export const glassNav =
  'bg-white/80 backdrop-blur-xl border-b border-black/[0.07] shadow-[0_2px_16px_rgba(0,0,0,0.06)]';

export const glassCard =
  'bg-white/72 backdrop-blur-md border border-white/85 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08),0_12px_48px_rgba(0,0,0,0.12)]';

export const glassCardStatic =
  'bg-white/72 backdrop-blur-md border border-white/85 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_32px_rgba(0,0,0,0.10)]';

export const glassPill =
  'bg-white/72 backdrop-blur-md border border-white/85 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)]';

export const dotPattern =
  'bg-[radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:16px_16px]';

export const headerBar =
  'grid grid-cols-[auto_1fr_auto] items-center gap-3 min-h-16 w-full';

export const headerNav =
  'hidden md:flex items-center justify-center gap-6 lg:gap-8 min-w-0 flex-nowrap';

export const navLinkActive =
  "relative text-sm font-medium whitespace-nowrap text-[#FF9500] after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#FF9500] after:rounded-full";

export const navLinkIdle =
  "relative text-sm font-normal text-[#64748B] hover:text-[#FF9500] transition-colors whitespace-nowrap after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-[#FF9500] after:rounded-full after:opacity-0 hover:after:opacity-100 after:transition-opacity";

export const toolSurfaceCard =
  'rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-lg p-6 md:p-8';

export const formGroup = 'flex flex-col gap-2 mb-[18px]';
export const formLabel = 'text-xs font-semibold text-slate-700';
export const formInput =
  'w-full px-3.5 py-3 bg-white/80 border border-slate-300/25 rounded-xl text-[#0F172A] text-sm outline-none transition-[border-color,box-shadow,background-color] focus:border-[#FF9500] focus:bg-white/95 focus:shadow-[0_0_0_3px_rgba(255,149,0,0.15)] placeholder:text-slate-400';
export const formSelect =
  'w-full px-3.5 py-3 bg-white/80 border border-slate-300/25 rounded-xl text-[#0F172A] text-sm outline-none cursor-pointer transition-[border-color,box-shadow,background-color] focus:border-[#FF9500] focus:bg-white/95 focus:shadow-[0_0_0_3px_rgba(255,149,0,0.15)]';
export const formTextarea =
  'w-full min-h-[120px] px-3.5 py-3 bg-white/80 border border-slate-300/25 rounded-xl text-[#0F172A] text-[0.82rem] leading-relaxed font-mono outline-none resize-y transition-[border-color,box-shadow,background-color] focus:border-[#FF9500] focus:bg-white/95 focus:shadow-[0_0_0_3px_rgba(255,149,0,0.15)] placeholder:text-slate-400';
export const formRow =
  'grid grid-cols-1 sm:grid-cols-2 gap-4 items-start mb-[18px] [&>div]:mb-0';

export const resultBox =
  'rounded-2xl border border-white/80 bg-white/72 px-6 py-5 mt-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]';
export const resultBoxSuccess =
  'rounded-2xl border border-emerald-500/30 bg-emerald-500/5 px-6 py-5 mt-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]';
export const resultBoxDanger =
  'rounded-2xl border border-red-500/30 bg-red-500/5 px-6 py-5 mt-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]';
export const resultLabel =
  'text-[0.72rem] font-semibold uppercase tracking-widest text-slate-400 mb-1';
export const resultValue =
  'text-[2rem] font-extrabold text-[#0F172A] tracking-tight';
export const resultGrid =
  'grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-3';
export const resultItem =
  'rounded-xl border border-white/80 bg-white/72 p-4';

export const btn =
  'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border-none outline-none whitespace-nowrap';
export const btnPrimary =
  'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer border-none outline-none whitespace-nowrap bg-[#FF9500] text-white shadow-[0_8px_22px_rgba(255,149,0,0.28)] hover:bg-[#e88600] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(255,149,0,0.34)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0';
export const btnSecondary =
  'inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer outline-none whitespace-nowrap bg-white/75 text-[#0F172A] border border-white/80 shadow-[0_4px_14px_rgba(15,23,42,0.05)] hover:bg-white/90 hover:border-black/15';
export const btnSm =
  'inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-[0.82rem] font-semibold transition-all duration-200 cursor-pointer outline-none whitespace-nowrap bg-white/75 text-[#0F172A] border border-white/80 shadow-sm hover:bg-white/90 hover:border-black/15';
export const btnCopy =
  'px-3.5 py-1.5 bg-white/70 border border-slate-300/25 rounded-[10px] text-xs font-semibold text-slate-500 cursor-pointer transition-all hover:text-[#0F172A] hover:border-black/15';

export const outputArea =
  'w-full min-h-[140px] p-3.5 bg-slate-50/90 border border-slate-300/25 rounded-xl text-slate-800 font-mono text-[0.82rem] leading-relaxed resize-y outline-none whitespace-pre-wrap break-all focus:border-[#FF9500] focus:shadow-[0_0_0_3px_rgba(255,149,0,0.15)]';

export const sectionLabel =
  'inline-block text-[0.7rem] font-bold tracking-widest uppercase text-[#FF9500] mb-2';

export const container = 'w-full max-w-[1200px] mx-auto px-6';

export const divider = 'h-px bg-black/[0.07] my-5';

export const sidebarCard =
  'rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-lg p-5';

export const tabs = 'flex flex-wrap gap-2 mb-6';

export const tabBtn =
  'px-4 py-2 rounded-xl text-sm font-medium border border-slate-200/80 bg-white/70 text-slate-600 transition-all hover:border-[#FF9500]/30 cursor-pointer';

export const tabBtnActive =
  'px-4 py-2 rounded-xl text-sm font-semibold border border-[#FF9500]/40 bg-[#FF9500]/10 text-[#FF9500] cursor-pointer';

export const infoBanner =
  'rounded-xl border border-[#FF9500]/20 bg-[#FF9500]/8 px-4 py-3.5 text-sm text-slate-500 mt-4';

export const btnIcon =
  'inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/75 border border-white/80 text-slate-500 hover:text-[#0F172A] cursor-pointer transition-colors';
