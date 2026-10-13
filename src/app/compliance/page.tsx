"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Scale, FileText, Lock, CheckCircle2, Award, Heart, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

const principles = [
  { 
    title: "Safer Recruitment", 
    desc: "Mandatory Enhanced DBS checks, full employment history verification, identity verification, and face-to-face values-based interviewing.", 
    icon: ShieldCheck 
  },
  { 
    title: "Adult Safeguarding", 
    desc: "Rigorous staff training and immediate reporting protocols with local Multi-Agency Safeguarding Hubs (MASH) under the Care Act 2014.", 
    icon: Lock 
  },
  { 
    title: "Quality & Audits", 
    desc: "Regular care plan reviews, medication record audits, and direct family feedback to maintain high care standards.", 
    icon: Scale 
  },
  { 
    title: "Data Protection & Privacy", 
    desc: "Full compliance with UK GDPR and the Data Protection Act 2018 (Registered with the ICO: ZC026072).", 
    icon: FileText 
  },
];

const complianceAreas = [
  {
    title: "Care Quality Commission (CQC) Preparedness",
    desc: "Lifewell Healthcare Ltd is structured directly around the CQC's five fundamental questions: Is the service Safe, Effective, Caring, Responsive, and Well-led? We maintain high-standard operating procedures as we prepare for regulated operations."
  },
  {
    title: "Adult Safeguarding & Protection",
    desc: "We operate a strict zero-tolerance approach to any form of neglect or abuse. All carers undergo comprehensive safeguarding training, with clear whistleblowing policies and direct reporting to Northamptonshire safeguarding teams."
  },
  {
    title: "Enhanced DBS & Safer Hiring",
    desc: "Every carer undergoes an Enhanced Disclosure and Barring Service (DBS) check with adult barred list screening, right-to-work validation, and at least two verified professional references before entering a client's home."
  },
  {
    title: "Induction & Care Certificate Training",
    desc: "Our care team completes comprehensive induction aligned with the national UK Care Certificate, covering practical moving & handling, infection prevention, dementia awareness, and emergency first aid."
  },
  {
    title: "Medication Prompts & Safety",
    desc: "We follow robust medication management policies. Carers receive dedicated training in safe prompting and administration, maintaining clear Medication Administration Records (MAR) subject to regular audits."
  },
  {
    title: "Confidentiality & GDPR (ICO: ZC026072)",
    desc: "Client records, medical information, and family contact details are stored securely in compliance with the Data Protection Act 2018. We maintain strict access controls and confidentiality agreements."
  },
  {
    title: "Listening to Feedback & Complaints",
    desc: "We encourage open, regular feedback from clients and their families. Any concern is acknowledged promptly, investigated thoroughly with complete candour, and resolved with care."
  },
  {
    title: "Environmental & Home Risk Assessments",
    desc: "Before any care begins, an assessment is conducted to identify trip hazards, mobility obstacles, and equipment requirements, ensuring both client and carer safety."
  },
  {
    title: "Clinical Leadership Oversight",
    desc: "Our clinical policies and reablement practices are supervised by Ida Acquah, HCPC-registered Occupational Therapist, ensuring clinical safety and evidence-based guidance in every care routine."
  },
  {
    title: "Person-Centred Care Planning",
    desc: "Care plans are never one-size-fits-all. Every routine is co-created with the client and their family, capturing personal preferences, daily habits, dietary needs, and cultural values."
  }
];

export default function CompliancePage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2.5">
            Clinical Governance &amp; Safeguarding Standards
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2438] mb-4">
            Safe, accountable, and transparent home care
          </h1>
          <p className="text-base md:text-lg text-[#4e6074] leading-relaxed">
            At Lifewell Healthcare Ltd, safety is the foundation of everything we do. We adhere to rigorous UK standards of clinical governance, safer recruitment, and person-centred care planning.
          </p>
        </div>
      </section>

      {/* CQC Alignment Banner */}
      <section className="container mx-auto px-6 mb-16 max-w-5xl">
        <div className="bg-[#0f2438] text-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-3">
              Regulatory Standards
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Structured around CQC fundamental standards
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
              We design our policies, carer training, and clinical oversight around the Care Quality Commission&apos;s key lines of enquiry: Safe, Effective, Caring, Responsive, and Well-led.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm text-white/90">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b48a3c] shrink-0" />
                <span>Evidence-based clinical guidance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b48a3c] shrink-0" />
                <span>UK Care Certificate aligned induction</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b48a3c] shrink-0" />
                <span>Enhanced DBS checks for all care staff</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b48a3c] shrink-0" />
                <span>Regular care plan reviews &amp; MAR audits</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Governance */}
      <section className="container mx-auto px-6 mb-16 max-w-5xl">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
            Governance Pillars
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438]">
            How We Protect Those We Care For
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-[#e6e5dd] shadow-sm">
              <div className="w-11 h-11 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center text-[#b48a3c] mb-5">
                <item.icon size={20} />
              </div>
              <h3 className="text-base font-bold mb-2 text-[#0f2438]">{item.title}</h3>
              <p className="text-xs text-[#4e6074] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Standards Grid */}
      <section className="container mx-auto px-6 mb-20 max-w-5xl">
        <div className="bg-white rounded-2xl border border-[#e6e5dd] p-8 md:p-12 shadow-sm">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
              Standard Operating Procedures
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438] mb-3">
              Our Safety &amp; Quality Commitments
            </h2>
            <p className="text-xs md:text-sm text-[#4e6074]">
              How we translate UK healthcare legislation and best practice into day-to-day visiting care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {complianceAreas.map((area, index) => (
              <div key={index} className="p-5 rounded-xl bg-[#faf9f6] border border-[#e6e5dd]">
                <h4 className="text-sm md:text-base font-bold text-[#0f2438] mb-2 flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-[#b48a3c] shrink-0 mt-0.5" />
                  <span>{area.title}</span>
                </h4>
                <p className="text-xs text-[#4e6074] leading-relaxed pl-6">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duty of Candour */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="bg-white rounded-2xl border border-[#e6e5dd] p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-16 h-16 rounded-2xl bg-[#faf9f6] border border-[#e6e5dd] flex items-center justify-center text-[#b48a3c] shrink-0">
            <Scale size={32} />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-1">
              Openness &amp; Candour
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-[#0f2438] mb-2">
              The Duty of Candour
            </h3>
            <p className="text-xs md:text-sm text-[#4e6074] leading-relaxed">
              We practice complete honesty and openness with clients and their families. If ever something does not go entirely as planned, we inform you immediately, investigate constructively, and take decisive steps to put things right. Open communication is essential to genuine care.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
