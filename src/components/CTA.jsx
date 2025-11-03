import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-amber-100/60 via-orange-100/60 to-amber-100/60" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-200 bg-white/80 backdrop-blur px-6 py-10 sm:px-10 shadow-xl">
          <div className="grid gap-6 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold">
                Ready to capture every call and convert more leads?
              </h3>
              <p className="mt-2 text-slate-600">
                Get a free concierge setup. We’ll connect your calendars, CRM, and phone system — you’ll go live in under 48 hours.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a href="#" className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 px-6 text-base font-semibold text-white shadow-lg hover:opacity-95 transition">
                Book Setup Call
              </a>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          No credit card required • Cancel anytime • White‑glove support
        </p>
      </div>
    </section>
  );
}
