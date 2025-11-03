import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden flex items-center">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ShS6h2HOKd20s1py/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="py-24">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-orange-700 bg-orange-50 ring-1 ring-orange-200 px-3 py-1 rounded-full">
            DFY inbound call AI • For businesses that thrive on calls
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-b from-amber-500 via-orange-500 to-amber-700 bg-clip-text text-transparent">
              Never miss a lead again
            </span>
          </h1>
          <p className="mt-5 text-lg text-slate-700 max-w-xl">
            Inquire Flow AI answers, qualifies, and books your callers 24/7. It records conversations, updates your CRM, and follows up by SMS — so every opportunity is captured, even after hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-6 text-base font-semibold text-white shadow-lg shadow-orange-200/50 hover:opacity-95 transition">
              Start Free Setup Call
            </a>
            <a href="#demo" className="inline-flex h-12 items-center justify-center rounded-md border border-orange-300 bg-white/70 px-6 text-base font-medium text-orange-700 hover:bg-orange-50 transition">
              See Live Demo
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> 24/7 AI Agent</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-orange-500" /> CRM-ready</div>
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-500" /> HIPAA-friendly</div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="relative mx-auto w-full max-w-md rounded-2xl border border-white/50 bg-white/60 backdrop-blur p-6 shadow-xl">
            <div className="text-sm font-semibold text-orange-700">What it does</div>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                Answers and routes calls instantly
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-orange-400 to-amber-600" />
                Books appointments directly to your calendar
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
                Records and summarizes every conversation
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-5 w-5 rounded-full bg-gradient-to-r from-amber-500 to-amber-700" />
                Updates your CRM and sends SMS follow-ups
              </li>
            </ul>
            <div className="mt-6 rounded-lg bg-gradient-to-br from-amber-500/10 to-orange-600/10 p-4 text-sm text-slate-700">
              “It feels like a premium receptionist who never sleeps.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
