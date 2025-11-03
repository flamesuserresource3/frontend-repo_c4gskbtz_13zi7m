import React from 'react';
import { Phone, Calendar, Mic, MessageSquare, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Phone,
    title: 'Instant Call Answering',
    desc: 'Pick up every call in under a second, greet with your brand voice, and route smartly.'
  },
  {
    icon: Calendar,
    title: 'Live Appointment Booking',
    desc: 'Real-time calendar sync to book, reschedule, and confirm without human intervention.'
  },
  {
    icon: Mic,
    title: 'Call Recording + Summaries',
    desc: 'Record, transcribe, and summarize each conversation with key outcomes and next steps.'
  },
  {
    icon: MessageSquare,
    title: 'Auto SMS Follow‑Ups',
    desc: 'Send confirmations, reminders, and nurture texts so no lead slips through the cracks.'
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    desc: 'Enterprise-grade security, permission controls, and audit trails for peace of mind.'
  },
  {
    icon: Zap,
    title: 'CRM Updates On Autopilot',
    desc: 'Push notes, recordings, and outcomes into your CRM instantly after each call.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-white to-orange-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built for high‑intent, call‑driven businesses
          </h2>
          <p className="mt-4 text-slate-600">
            A premium AI receptionist that never sleeps. Purpose‑built for home services, healthcare, legal, and any team that wins on fast response.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-orange-200/60 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-amber-500/5 to-orange-600/5 pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 text-white shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-slate-600">{desc}</p>
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
              <div className="mt-4 text-sm text-slate-500">
                <span className="font-medium text-orange-700">Included</span> in all plans
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
