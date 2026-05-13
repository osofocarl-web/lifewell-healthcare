"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, CheckCircle2, Mail, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Clinical Legacy</span>
          <h1 className="text-6xl md:text-8xl font-outfit mb-8 text-brand-blue-dark leading-tight">
            Restoring <span className="text-brand-blue">Wellbeing</span> with Dignity
          </h1>
          <p className="text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed font-medium">
            Lifewell Healthcare Ltd is an executive-grade domiciliary care provider dedicated to world-class support for families and communities. Built on a foundation of clinical excellence and radical compassion.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white p-16 rounded-[3rem] shadow-sm border border-gray-100 card-hover-premium transition-premium"
          >
            <div className="w-20 h-20 bg-brand-blue/5 rounded-2xl flex items-center justify-center mb-10">
              <Eye className="text-brand-blue" size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-8 text-brand-blue-dark">Our Vision</h2>
            <p className="text-text-muted text-xl leading-relaxed font-medium">
              To be the benchmark for holistic, governance-led community care in the UK, recognized for our uncompromising commitment to emotional wellbeing, social restoration, and professional accountability.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white p-16 rounded-[3rem] shadow-sm border border-gray-100 card-hover-premium transition-premium"
          >
            <div className="w-20 h-20 bg-brand-gold/5 rounded-2xl flex items-center justify-center mb-10">
              <Target className="text-brand-gold" size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-8 text-brand-blue-dark">Our Mission</h2>
            <p className="text-text-muted text-xl leading-relaxed font-medium">
              To deliver compassionate, person-centred care that ensures every individual is treated with the executive-level respect, clinical safety, and human dignity they deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clinical Leadership */}
      <section id="clinical-leadership" className="py-24 border-y border-brand-bg bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-sm mb-6 block">Professional Governance</span>
            <h2 className="text-5xl md:text-6xl font-outfit text-brand-blue-dark">Clinical Leadership</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Ida Acquah */}
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1 relative">
                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(197,160,40,0.2)] border-[16px] border-brand-bg bg-brand-bg">
                  <Image
                    src="/images/ida_acquah.jpg"
                    alt="Ida Acquah - Clinical Lead"
                    fill
                    className="object-cover object-top hover:scale-105 transition-premium duration-1000"
                    priority
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-brand-gold rounded-full flex flex-col items-center justify-center text-white font-black shadow-2xl border-8 border-white">
                  <span className="text-xs uppercase tracking-widest mb-1">Clinical Lead</span>
                  <CheckCircle2 size={24} />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-5xl font-outfit mb-4 leading-tight text-brand-blue-dark">Ida Acquah</h2>
                <p className="text-brand-gold font-black mb-8 uppercase tracking-widest text-sm">Clinical Lead / Lead Occupational Therapist</p>
                
                <div className="space-y-6 text-text-muted text-lg leading-relaxed mb-10">
                  <p>
                    Ida Acquah is a HCPC-registered Occupational Therapist and member of the Royal College of Occupational Therapists (RCOT) since 2010, with over 10 years’ experience across NHS intermediate care and adult social services.
                  </p>
                  <p>
                    Known for her calm, compassionate, and practical approach, she specializes in person-centred care that empowers individuals to regain confidence and quality of life.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                    {[
                      "Functional Assessments",
                      "Moving and Handling",
                      "Cognitive Screening",
                      "Equipment Provision",
                      "Hospital Discharge Planning",
                      "NHS Intermediate Care"
                    ].map((skill, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span className="font-bold text-brand-blue-dark text-sm tracking-wide">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6">
                    <div className="px-5 py-2 bg-brand-blue/5 rounded-full text-[10px] font-black text-brand-blue uppercase tracking-widest border border-brand-blue/10">
                      HCPC Registered
                    </div>
                    <div className="px-5 py-2 bg-brand-blue/5 rounded-full text-[10px] font-black text-brand-blue uppercase tracking-widest border border-brand-blue/10">
                      RCOT Member Since 2010
                    </div>
                  </div>
                </div>

                <div className="bg-brand-bg p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black text-brand-blue uppercase tracking-widest mb-4">Clinical Contact</h4>
                    <div className="flex flex-col gap-3">
                      <a href="mailto:info@lifewellhealthcare.org" className="flex items-center gap-3 text-brand-blue hover:text-brand-gold transition-premium font-bold">
                        <Mail size={18} /> info@lifewellhealthcare.org
                      </a>
                      <a href="tel:+447836681815" className="flex items-center gap-3 text-brand-blue hover:text-brand-gold transition-premium font-bold">
                        <Phone size={18} /> 07836 681815
                      </a>
                    </div>
                  </div>
                  <div className="hidden md:block h-12 w-[1px] bg-gray-200"></div>
                  <div className="text-center md:text-left">
                    <span className="text-[10px] text-brand-gold font-black uppercase tracking-widest block mb-2">Clinical Expertise</span>
                    <span className="text-brand-blue-dark font-bold text-sm">HCPC & RCOT Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">The Lifewell Core</span>
          <h2 className="text-5xl font-outfit mb-6 text-brand-blue-dark">Governance-Led Values</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto font-medium">The non-negotiable principles that ensure we deliver safe, effective, and compassionate care.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: "Dignity", desc: "Upholding the self-worth of every individual in our care." },
            { title: "Accountability", desc: "Full transparency in our clinical and operational actions." },
            { title: "Compassion", desc: "Deeply human care delivered with clinical precision." },
            { title: "Safety", desc: "Rigorous safeguarding and safer recruitment protocols." },
          ].map((val, i) => (
            <div key={i} className="text-center p-12 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-premium">
              <h4 className="text-2xl font-black mb-4 text-brand-blue tracking-tight">{val.title}</h4>
              <p className="text-sm text-text-muted leading-relaxed font-medium">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
