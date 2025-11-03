import React from 'react';

export default function NavBar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 shadow-lg" />
          <span className="text-xl font-semibold tracking-tight bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
            Inquire Flow AI
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          <a className="hover:text-slate-900" href="#features">Features</a>
          <a className="hover:text-slate-900" href="#process">How it works</a>
          <a className="hover:text-slate-900" href="#pricing">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#demo" className="hidden sm:inline-flex h-10 items-center rounded-md border border-orange-300 px-4 text-sm font-medium text-orange-700 hover:bg-orange-50 transition">
            Watch demo
          </a>
          <a href="#get-started" className="inline-flex h-10 items-center rounded-md bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-4 text-sm font-semibold text-white shadow hover:opacity-95 transition">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
