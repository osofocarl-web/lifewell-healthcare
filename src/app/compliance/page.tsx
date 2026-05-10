"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, Lock, Users, CheckCircle } from "lucide-react";

const principles = [
  { 
    title: "Safe Recruitment", 
    desc: "Rigorous DBS checks, professional referencing, and values-based interviewing for all staff.", 
    icon: ShieldCheck 
  },
  { 
    title: "Safeguarding", 
    desc: "Robust policies and continuous training to protect all individuals from harm or abuse.", 
    icon: Lock 
  },
  { 
    title: "Quality Assurance", 
    desc: "Regular audits, client feedback loops, and internal monitoring to ensure service excellence.", 
    icon: Scale 
  },
  { 
    title: "Privacy & Dignity", 
    desc: "Full compliance with GDPR and a core commitment to maintaining the dignity of those we serve.", 
    icon: FileText 
  },
];

export default function CompliancePage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Professional Integrity</span>
          <h1 className="text-6xl md:text-8xl font-outfit mb-10 text-brand-blue-dark leading-tight">
            Governance, <span className="text-brand-blue">Safety</span> & Excellence
          </h1>
          <p className="text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed font-medium">
            Lifewell Healthcare Ltd is built on a foundation of uncompromising safety. We are currently preparing for CQC-regulated operations, adhering to the highest UK standards of clinical governance.
          </p>
        </motion.div>
      </section>

      {/* CQC Banner */}
      <section className="container mx-auto px-6 mb-32">
        <div className="bg-brand-blue-dark rounded-[5rem] p-16 lg:p-28 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,45,89,0.3)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-4xl">
            <span className="text-brand-gold-soft font-black uppercase tracking-[0.3em] text-sm mb-6 block">Our Regulatory Commitment</span>
            <h2 className="text-5xl md:text-6xl font-outfit mb-10 leading-tight">Right Support, Right Care, <span className="text-brand-gold-soft">Right Culture</span></h2>
            <p className="text-xl text-blue-50/90 mb-14 leading-relaxed font-medium">
              We align every operation with the Care Quality Commission (CQC) fundamental standards. Our executive governance framework ensures that our care is safe, effective, caring, responsive, and exceptionally well-led.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                "Evidence-based clinical practices",
                "Continuous staff professional development",
                "Rigorous executive risk management",
                "Person-centred outcome auditing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 text-blue-50">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 border border-brand-gold/30">
                    <CheckCircle className="text-brand-gold-soft" size={20} />
                  </div>
                  <span className="text-lg font-bold tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="container mx-auto px-6 py-12 mb-24">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-outfit mb-6 text-brand-blue-dark">Compliance Framework</h2>
          <p className="text-xl text-text-muted font-medium">The pillars of our professional credibility and community trust.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {principles.map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm card-hover-premium transition-premium">
              <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-blue mb-8 shadow-inner">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-5 text-brand-blue-dark">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Duty of Candour */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-white rounded-[4rem] p-16 lg:p-24 border border-gray-100 shadow-xl flex flex-col lg:flex-row items-center gap-20">
           <div className="lg:w-1/3 text-brand-blue flex justify-center">
             <div className="w-40 h-40 bg-brand-bg rounded-full flex items-center justify-center shadow-inner">
               <Scale size={80} strokeWidth={1.5} className="text-brand-gold" />
             </div>
           </div>
           <div className="lg:w-2/3 text-center lg:text-left">
             <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">Radical Transparency</span>
             <h3 className="text-4xl md:text-5xl font-bold mb-8 text-brand-blue-dark">The Duty of Candour</h3>
             <p className="text-xl text-text-muted leading-relaxed font-medium">
               At Lifewell Healthcare, we believe in radical transparency as a clinical imperative. Our Duty of Candour policy ensures absolute honesty with our clients and families, fostering a culture of trust, accountability, and continuous improvement. This is how we build lasting, safe, and professional partnerships.
             </p>
           </div>
        </div>
      </section>
    </div>
  );
}
