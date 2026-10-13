"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, CheckCircle2, Mail, Phone, MapPin, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      {/* Header */}
      <section className="container mx-auto px-6 mb-14 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2.5">
            About Lifewell Healthcare Ltd
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2438] mb-4">
            Combining clinical insight with heartfelt personal care
          </h1>
          <p className="text-base md:text-lg text-[#4e6074] leading-relaxed">
            Based at 64 Broadway in Northampton, Lifewell Healthcare Ltd is an independent domiciliary care provider founded to deliver unhurried, dignity-first support shaped by registered Occupational Therapy leadership.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="container mx-auto px-6 mb-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#e6e5dd] shadow-sm">
            <div className="w-12 h-12 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-[#b48a3c]" size={24} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#0f2438]">Our Vision</h2>
            <p className="text-sm md:text-base text-[#4e6074] leading-relaxed">
              To be Northamptonshire&apos;s most trusted home care partner, recognized for dependable, unrushed visits, continuity of familiar faces, and empowering individuals to remain safe and fulfilled in their own homes.
            </p>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-2xl border border-[#e6e5dd] shadow-sm">
            <div className="w-12 h-12 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center mb-6">
              <Target className="text-[#b48a3c]" size={24} />
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-[#0f2438]">Our Mission</h2>
            <p className="text-sm md:text-base text-[#4e6074] leading-relaxed">
              To provide thoughtful, person-centred care that listens closely to each person&apos;s life story, respects their dignity and choices, and gives families absolute confidence in the safety and wellbeing of their relatives.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical Leadership (Ida Acquah) */}
      <section id="clinical-leadership" className="container mx-auto px-6 mb-20 max-w-5xl">
        <div className="bg-white rounded-2xl border border-[#e6e5dd] p-8 md:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            
            {/* Lead Photo */}
            <div className="w-full lg:w-5/12 max-w-[340px] shrink-0">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#e6e5dd] shadow-sm">
                <Image
                  src="/images/ida_acquah.jpg"
                  alt="Ida Acquah - Clinical Lead and Lead Occupational Therapist"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="mt-4 p-3.5 bg-[#faf9f6] rounded-xl border border-[#e6e5dd] text-center">
                <span className="text-xs font-bold text-[#0f2438] block">Ida Acquah</span>
                <span className="text-[11px] text-[#b48a3c] font-semibold block">HCPC Reg: OT • RCOT Member since 2010</span>
              </div>
            </div>

            {/* Biography */}
            <div className="flex-1">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
                Clinical Governance &amp; Leadership
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438] mb-2">
                Ida Acquah
              </h2>
              <p className="text-sm font-semibold text-[#b48a3c] mb-5">
                Clinical Lead &amp; Lead Occupational Therapist
              </p>

              <div className="space-y-4 text-sm md:text-base text-[#4e6074] leading-relaxed mb-6">
                <p>
                  Ida Acquah is a registered Occupational Therapist with the Health and Care Professions Council (HCPC) and a continuous member of the Royal College of Occupational Therapists (RCOT) since 2010. She brings over a decade of clinical experience gained across NHS intermediate care, adult social services, and rehabilitation wards.
                </p>
                <p>
                  Under Ida&apos;s guidance, Lifewell Healthcare blends hands-on domestic warmth with clinical expertise in reablement. We don&apos;t just complete tasks on behalf of clients; we evaluate home environments, recommend practical adaptations, and help individuals maintain their daily living skills safely.
                </p>
                <p>
                  &ldquo;Home is where people heal best. Our job is to give families the reassurance that their loved one is safe, respected, and supported by a team that genuinely cares.&rdquo;
                </p>
              </div>

              {/* Clinical competency tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#e6e5dd] text-xs text-[#0f2438] mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#b48a3c] shrink-0" />
                  <span>Functional Living Assessments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#b48a3c] shrink-0" />
                  <span>Moving &amp; Handling Protocols</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#b48a3c] shrink-0" />
                  <span>Dementia &amp; Memory Reassurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-[#b48a3c] shrink-0" />
                  <span>NHS Hospital Discharge Coordination</span>
                </div>
              </div>

              {/* Contact direct */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#e6e5dd]">
                <a href="tel:07836681415" className="text-xs font-bold text-[#0f2438] hover:text-[#b48a3c] flex items-center gap-1.5">
                  <Phone size={14} className="text-[#b48a3c]" /> 07836 681415
                </a>
                <span className="text-[#e6e5dd]">•</span>
                <a href="mailto:contact@lifewellhealthcare.org" className="text-xs font-bold text-[#0f2438] hover:text-[#b48a3c] flex items-center gap-1.5">
                  <Mail size={14} className="text-[#b48a3c]" /> contact@lifewellhealthcare.org
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 mb-20 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2.5">
            Our Foundation
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438] mb-3">
            Core Principles That Guide Every Visit
          </h2>
          <p className="text-sm md:text-base text-[#4e6074] max-w-2xl mx-auto">
            These non-negotiable standards define how we recruit staff, conduct visits, and communicate with families.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { 
              title: "Dignity", 
              desc: "Treating every person with deep personal respect, working at their pace, and protecting their privacy at all times." 
            },
            { 
              title: "Transparency", 
              desc: "Clear notes, open communication with family, honest pricing, and full candour in everything we do." 
            },
            { 
              title: "Compassion", 
              desc: "Warm, unhurried care delivered by kind carers who take the time to listen and build genuine trust." 
            },
            { 
              title: "Safety", 
              desc: "Rigorous Enhanced DBS checks, safer recruitment, and robust adult safeguarding policies." 
            },
          ].map((val, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-[#e6e5dd] shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-[#0f2438]">{val.title}</h3>
              <p className="text-xs md:text-sm text-[#4e6074] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Office Hub Strip */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="bg-[#0f2438] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-1">
              Registered Office
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Lifewell Healthcare Ltd • Northampton Hub
            </h3>
            <p className="text-white/80 text-xs md:text-sm">
              64 Broadway, Northampton, NN1 4SQ • Company No: 14638409 • ICO: ZC026072
            </p>
          </div>
          <Link href="/contact" className="shrink-0">
            <Button variant="secondary" className="px-6 py-3 text-sm">
              Get in Touch With Our Office
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
