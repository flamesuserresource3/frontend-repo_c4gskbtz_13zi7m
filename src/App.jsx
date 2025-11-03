import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <section id="process" className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1 sticky top-24">
                <h2 className="text-3xl font-bold">How it works</h2>
                <p className="mt-3 text-slate-600">
                  Four steps to a never‑miss‑a‑lead workflow. We do it all for you.
                </p>
              </div>
              <ol className="lg:col-span-2 space-y-8">
                {[1,2,3,4].map((n, i) => (
                  <li key={n} className="relative rounded-2xl border border-orange-200 bg-white p-6 shadow-sm">
                    <div className="absolute -left-3 -top-3 h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-white grid place-items-center font-bold shadow">
                      {n}
                    </div>
                    <h3 className="ml-8 text-xl font-semibold">
                      {[
                        'Connect your number, calendar, and CRM',
                        'Train the agent on your brand voice and FAQs',
                        'Go live — we answer, qualify, and book 24/7',
                        'Receive recordings, summaries, and CRM updates'
                      ][i]}
                    </h3>
                    <p className="ml-8 mt-2 text-slate-600">
                      {[
                        'We integrate with major providers and ensure routing is seamless for your team.',
                        'Provide a brief doc or call — we craft prompts and flows that mirror your best rep.',
                        'Your AI receptionist handles calls instantly, even after hours and on weekends.',
                        'Every conversation is captured with outcomes pushed to your systems in real time.'
                      ][i]}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <footer className="border-t border-orange-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600" />
            <span className="text-sm font-semibold">Inquire Flow AI</span>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Inquire Flow AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
