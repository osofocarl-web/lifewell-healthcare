"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Briefcase, 
  Heart, 
  GraduationCap, 
  Clock, 
  Upload, 
  Send, 
  UserCheck, 
  Search, 
  MessageSquare, 
  CheckCircle2,
  PhoneCall,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const perks = [
  { 
    title: "Supportive Culture", 
    desc: "A friendly, unhurried working environment where you are listened to, respected, and never asked to rush visits.", 
    icon: Heart 
  },
  { 
    title: "Clinical Mentorship", 
    desc: "Direct guidance and learning from HCPC registered Occupational Therapist Ida Acquah, developing your practical skills.", 
    icon: GraduationCap 
  },
  { 
    title: "Realistic Schedules", 
    desc: "Thoughtfully planned visit schedules across Northamptonshire with proper travel time between appointments.", 
    icon: Clock 
  },
  { 
    title: "Fair, Reliable Pay", 
    desc: "Competitive hourly pay with transparent terms, paid induction training, and milestone recognition.", 
    icon: Briefcase 
  },
];

const roles = [
  { 
    title: "Visiting Care Assistant", 
    type: "Full-Time / Part-Time", 
    desc: "Providing morning routines, personal care, meal preparation, and companionship to clients in Northampton."
  },
  { 
    title: "Dementia Support Worker", 
    type: "Full-Time / Part-Time", 
    desc: "Delivering patient, reassuring memory care routines and respite support for local families."
  },
  { 
    title: "Reablement Care Worker", 
    type: "Specialist Support", 
    desc: "Working alongside Occupational Therapy plans to help individuals transition home safely from hospital."
  },
  { 
    title: "Companionship & Sitting Carer", 
    type: "Flexible Hours", 
    desc: "Providing conversational support, accompaniment on walks and social outings, and daytime sitting breaks."
  },
];

const processSteps = [
  { step: "01", title: "Submit CV", desc: "Send your details and care experience online or via email." },
  { step: "02", title: "Friendly Phone Chat", desc: "A brief conversation to discuss your availability and values." },
  { step: "03", title: "Face-to-Face Meeting", desc: "Meeting our clinical lead at 64 Broadway to discuss the role in detail." },
  { step: "04", title: "Vetting & Induction", desc: "Enhanced DBS check, references, and UK Care Certificate training." },
];

export default function CareersPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2.5">
              Care Careers in Northampton
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2438] mb-4">
              Join a care team that values your time and heart
            </h1>
            <p className="text-base text-[#4e6074] leading-relaxed mb-6">
              At Lifewell Healthcare Ltd, we believe exceptional care begins with supporting our carers. We provide unhurried visits, genuine mentorship from our Occupational Therapy lead, and a friendly, respectful culture.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#apply">
                <Button variant="primary" className="px-6 py-3 text-sm">
                  Apply for a Role
                </Button>
              </a>
              <a href="tel:07836681415">
                <Button variant="outline" className="px-6 py-3 text-sm">
                  <PhoneCall size={16} /> Call 07836 681415
                </Button>
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e6e5dd] shadow-sm">
            <Image
              src="/images/team.png"
              alt="Lifewell Healthcare Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why Care With Lifewell */}
      <section className="container mx-auto px-6 mb-16 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
            Why Lifewell
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438]">
            What You Can Expect As Part of Our Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((perk, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-[#e6e5dd] shadow-sm">
              <div className="w-11 h-11 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center text-[#b48a3c] mb-4">
                <perk.icon size={20} />
              </div>
              <h3 className="text-base font-bold mb-2 text-[#0f2438]">{perk.title}</h3>
              <p className="text-xs text-[#4e6074] leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available Opportunities */}
      <section className="container mx-auto px-6 mb-16 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
            Current Roles
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438]">
            Open Positions in Northamptonshire
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {roles.map((role, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-[#e6e5dd] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg font-bold text-[#0f2438]">{role.title}</h3>
                  <span className="text-xs text-[#536479] font-medium shrink-0">
                    {role.type}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[#4e6074] leading-relaxed mb-6">
                  {role.desc}
                </p>
              </div>
              <a href="#apply" className="text-xs font-bold text-[#0f2438] hover:text-[#b48a3c] inline-flex items-center gap-1">
                Apply for this role &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Hiring Pathway */}
      <section className="container mx-auto px-6 mb-16 max-w-5xl">
        <div className="bg-[#0f2438] text-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
              Safer Recruitment
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Our 4-Step Joining Process
            </h2>
            <p className="text-white/80 text-xs md:text-sm">
              We look for genuine empathy and dependability. Here is what to expect from initial application to your first visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((st, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <span className="text-xs font-semibold text-[#c89d4e] block mb-1.5">Step {i + 1}</span>
                <h4 className="text-sm font-bold text-white mb-1.5">{st.title}</h4>
                <p className="text-xs text-white/70 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="container mx-auto px-6 max-w-4xl scroll-mt-28">
        <div className="bg-white rounded-2xl border border-[#e6e5dd] p-8 md:p-12 shadow-sm">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
              Direct Application
            </span>
            <h3 className="text-2xl font-bold text-[#0f2438] mb-2">
              Apply to Join Lifewell Healthcare
            </h3>
            <p className="text-xs md:text-sm text-[#4e6074]">
              Fill in your details below or email your CV directly to <a href="mailto:careers@lifewellhealthcare.org" className="text-[#0f2438] font-bold underline">careers@lifewellhealthcare.org</a>.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-2">Full Name</label>
                <input type="text" required className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3.5 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none" placeholder="e.g. Sarah Jenkins" />
              </div>
              <div>
                <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-2">Email Address</label>
                <input type="email" required className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3.5 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none" placeholder="e.g. sarah@example.co.uk" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-2">Phone Number</label>
                <input type="tel" required className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3.5 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none" placeholder="e.g. 07123 456789" />
              </div>
              <div>
                <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-2">Role of Interest</label>
                <select className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3.5 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none">
                  <option>Visiting Care Assistant</option>
                  <option>Dementia Support Worker</option>
                  <option>Reablement Care Worker</option>
                  <option>Companionship & Sitting Carer</option>
                  <option>General Care Enquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-2">Attach CV (Optional)</label>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden" 
                accept=".pdf,.docx"
              />
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${file ? 'border-[#b48a3c] bg-[#fbf7ee]' : 'border-[#e6e5dd] bg-[#faf9f6] hover:border-[#0f2438]'}`}
              >
                <Upload className="mx-auto mb-3 text-[#b48a3c]" size={28} />
                <p className="text-sm font-bold text-[#0f2438]">
                  {file ? file.name : "Click to select CV document"}
                </p>
                <p className="text-xs text-[#536479] mt-1">
                  Accepted formats: PDF, DOCX
                </p>
              </div>
            </div>
            
            {isSubmitted ? (
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-5 text-center">
                <h4 className="text-[#166534] font-bold text-sm mb-1">Thank you for your application!</h4>
                <p className="text-[#166534] text-xs leading-relaxed">
                  Our recruitment team will review your details. You can also send your CV directly to <a href="mailto:careers@lifewellhealthcare.org" className="font-bold underline">careers@lifewellhealthcare.org</a> or call our office at 07836 681415.
                </p>
              </div>
            ) : (
              <Button type="submit" variant="primary" className="w-full py-3.5 text-sm flex items-center justify-center gap-2">
                Submit Application <Send size={16} />
              </Button>
            )}
          </form>
        </div>
      </section>

    </div>
  );
}
