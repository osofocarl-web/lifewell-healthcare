"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, Lock, CheckCircle, Award, ShieldAlert, Heart, GraduationCap } from "lucide-react";

const principles = [
  { 
    title: "Safer Recruitment", 
    desc: "Rigorous DBS checks, professional referencing, identity verification, and values-based interviewing for all staff.", 
    icon: ShieldCheck 
  },
  { 
    title: "Adult Safeguarding", 
    desc: "Mandatory training and immediate reporting protocols to protect all individuals from any form of harm or neglect.", 
    icon: Lock 
  },
  { 
    title: "Quality Assurance", 
    desc: "Regular audits, client feedback loops, and internal monitoring systems to ensure service excellence.", 
    icon: Scale 
  },
  { 
    title: "Privacy & GDPR", 
    desc: "Full compliance with GDPR (ICO: ZC026072) and a core commitment to maintaining the confidentiality of those we serve.", 
    icon: FileText 
  },
];

const complianceAreas = [
  {
    title: "Preparing for CQC Registration",
    desc: "Lifewell Healthcare Ltd is structured around the five key questions asked by the Care Quality Commission (CQC): Is the service Safe, Effective, Caring, Responsive, and Well-led? We are systematically preparing our registration pathways with rigorous governance planning and high-standard administrative policy writing."
  },
  {
    title: "Safeguarding Adults",
    desc: "We enforce a zero-tolerance policy toward any form of abuse or neglect. All staff undergo mandatory safeguarding training, and we maintain immediate, transparent reporting pathways to local multi-agency safeguarding hubs (MASH) in strict compliance with the Care Act 2014."
  },
  {
    title: "Safer Recruitment",
    desc: "Our safer recruitment pipeline requires Enhanced DBS disclosures, full identity validation, a detailed employment gap analysis, and at least two verified professional references. We hire based on clinical competence and core human values."
  },
  {
    title: "Staff Training & Development",
    desc: "Our care professionals complete a comprehensive induction aligned with the UK Care Certificate. This is followed by continuous professional development (CPD) including moving and handling, dementia care, and mental health support guidance."
  },
  {
    title: "Medication Safety & Administration",
    desc: "We operate a meticulous medication administration framework. Staff undergo rigorous training and practical assessments, utilizing precise Medication Administration Records (MAR) and regular audits to ensure absolute safety."
  },
  {
    title: "Confidentiality & Data Protection",
    desc: "We are fully registered with the Information Commissioner's Office (ICO: ZC026072). We strictly adhere to GDPR and UK Data Protection legislation, ensuring all electronic and physical personal health records are securely stored and processed."
  },
  {
    title: "Complaints & Transparent Feedback",
    desc: "We view feedback as a crucial mechanism for growth. We maintain a clear, transparent, and structured complaints procedure, ensuring all feedback is acknowledged immediately, investigated thoroughly, and resolved with care and candour."
  },
  {
    title: "Quality Assurance & Internal Audits",
    desc: "Our clinical governance requires monthly and quarterly audits of care plans, medication sheets, and staff files. These internal audits are combined with regular client satisfaction surveys to foster a culture of continuous improvement."
  },
  {
    title: "Proactive Risk Management",
    desc: "Before any care begins, we perform detailed environmental and physical risk assessments. These assessments are designed to maximize personal independence while managing safety, fall risks, and mobility hazards proactively."
  },
  {
    title: "Person-Centred Care Planning",
    desc: "Every individual receives a bespoke care package co-produced with them and their family. Our care plans recognize personal preferences, life stories, dietary choices, and religious routines, ensuring support remains personal."
  },
  {
    title: "Clinical Oversight",
    desc: "Under the leadership of Ida Acquah, our HCPC-registered Lead Occupational Therapist, all care plans are developed and reviewed with clinical precision. We focus on physical rehabilitation, cognitive stimulation, and functional independence."
  }
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
          <p className="text-xl text-text-muted max-w-4xl mx-auto leading-relaxed font-medium">
            Lifewell Healthcare Ltd is built on a foundation of uncompromising safety. We are currently preparing for CQC-regulated operations, adhering to the highest UK standards of clinical governance and professional transparency.
          </p>
        </motion.div>
      </section>

      {/* CQC Banner */}
      <section className="container mx-auto px-6 mb-24">
        <div className="bg-brand-blue-dark rounded-[5rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,45,89,0.3)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-4xl">
            <span className="text-brand-gold-soft font-black uppercase tracking-[0.3em] text-sm mb-6 block">Our Regulatory Commitment</span>
            <h2 className="text-4xl md:text-5xl font-outfit mb-10 leading-tight">Right Support, Right Care, <span className="text-brand-gold-soft">Right Culture</span></h2>
            <p className="text-lg text-blue-50/90 mb-12 leading-relaxed font-medium">
              We align every operation with the Care Quality Commission (CQC) fundamental standards. Our executive governance framework ensures that our care is safe, effective, caring, responsive, and exceptionally well-led.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Evidence-based clinical practices",
                "Continuous staff professional development",
                "Rigorous executive risk management",
                "Person-centred outcome auditing"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 text-blue-50">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 border border-brand-gold/30">
                    <CheckCircle className="text-brand-gold-soft" size={16} />
                  </div>
                  <span className="text-base font-bold tracking-wide">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="container mx-auto px-6 py-12 mb-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-outfit mb-4 text-brand-blue-dark">Compliance Framework</h2>
          <p className="text-lg text-text-muted font-medium">The pillars of our professional credibility and community trust.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm card-hover-premium transition-premium">
              <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-blue mb-8 shadow-inner">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-blue-dark">{item.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Standards */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">Standard Operating Procedures</span>
            <h2 className="text-4xl md:text-5xl font-outfit text-brand-blue-dark">Our Core Compliance Standards</h2>
            <p className="text-lg text-text-muted mt-4 font-medium">A thorough breakdown of how we align our care delivery with safety legislation and CQC regulations.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {complianceAreas.map((area, index) => (
              <div key={index} className="p-8 rounded-3xl bg-brand-bg border border-gray-100 hover:shadow-lg transition-premium">
                <h4 className="text-lg font-bold text-brand-blue-dark mb-3 flex items-center gap-2">
                  <CheckCircle size={18} className="text-brand-gold shrink-0" />
                  {area.title}
                </h4>
                <p className="text-xs text-text-muted leading-relaxed font-medium">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duty of Candour */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-white rounded-[4rem] p-12 lg:p-24 border border-gray-100 shadow-xl flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 text-brand-blue flex justify-center">
            <div className="w-36 h-36 bg-brand-bg rounded-full flex items-center justify-center shadow-inner">
              <Scale size={72} strokeWidth={1.5} className="text-brand-gold" />
            </div>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs mb-4 block">Radical Transparency</span>
            <h3 className="text-4xl font-bold mb-6 text-brand-blue-dark">The Duty of Candour</h3>
            <p className="text-lg text-text-muted leading-relaxed font-medium">
              At Lifewell Healthcare, we believe in radical transparency as a clinical imperative. Our Duty of Candour policy ensures absolute honesty with our clients and families, fostering a culture of trust, accountability, and continuous improvement. This is how we build lasting, safe, and professional partnerships.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
