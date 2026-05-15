"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
  CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const perks = [
  { title: "Staff Wellbeing", desc: "Access to professional counselling and mental health support for our team.", icon: Heart },
  { title: "Growth Pathways", desc: "Clearly defined career progression from care assistant to management.", icon: GraduationCap },
  { title: "Flexible Working", desc: "Bespoke shift patterns that respect your personal life and commitments.", icon: Clock },
  { title: "Values-Based Pay", desc: "Premium remuneration packages that reflect your professional value.", icon: Briefcase },
];

const roles = [
  { title: "Care Professionals", type: "Full-Time / Part-Time", icon: Heart },
  { title: "Support Workers", type: "Full-Time / Part-Time", icon: UserCheck },
  { title: "Mental Health Workers", type: "Specialised Roles", icon: Search },
  { title: "Wellbeing Assistants", type: "Community Focused", icon: MessageSquare },
];

const processSteps = [
  { step: "01", title: "Apply Online", desc: "Submit your CV and values-based questionnaire." },
  { step: "02", title: "Clinical Review", desc: "Our leadership team reviews your clinical experience." },
  { step: "03", title: "Values Interview", desc: "A face-to-face meeting to ensure cultural alignment." },
  { step: "04", title: "Safer Recruitment", desc: "Rigorous DBS and professional reference checks." },
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
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-sm mb-6 block">Join Our Mission</span>
            <h1 className="text-5xl md:text-7xl font-outfit mb-8 text-brand-blue-dark leading-tight">
              Join a Team That <span className="text-brand-blue italic">Truly Cares</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-10">
              Lifewell Healthcare is more than an employer; we are a community of compassionate professionals dedicated to restoring wellbeing and dignity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="primary" className="px-10 py-5">View Current Openings</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="px-10 py-5 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-premium">Our Values</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <Image
                src="/images/team.png"
                alt="Lifewell Healthcare Team"
                width={600}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values & Perks */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-outfit mb-6 text-brand-blue-dark">Nurturing Those Who Care</h2>
            <p className="text-lg text-text-muted">We believe that to provide the best care for our clients, we must provide the best care for our staff. Our culture is built on emotional intelligence and mutual support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-brand-bg border border-gray-100 hover:shadow-xl transition-premium group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-premium shadow-sm">
                  <perk.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-4 text-brand-blue-dark">{perk.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-outfit mb-4 text-brand-blue-dark">Opportunities to Shine</h2>
          <p className="text-text-muted">We are looking for professionals across various care disciplines.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6">
                <role.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-brand-blue-dark mb-1">{role.title}</h4>
              <p className="text-xs text-text-muted font-medium mb-6 uppercase tracking-widest">{role.type}</p>
              <Link href="/contact" className="w-full">
                <Button variant="ghost" className="w-full text-sm border-0 bg-brand-bg hover:bg-brand-blue hover:text-white">Learn More</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="bg-brand-blue-dark py-24 text-white overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-outfit mb-8 leading-tight">Our Values-Driven <span className="text-brand-gold-soft">Recruitment</span> Process</h2>
              <p className="text-xl text-blue-50/90 leading-relaxed mb-10 font-medium">
                To ensure we maintain our high standards of care, we follow a rigorous recruitment process designed to find individuals who share our heart and clinical professionalism.
              </p>
              <div className="space-y-4">
                 {["DBS Enhanced Disclosure", "Professional Referencing", "Clinical Competency Audit"].map((text, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="text-brand-gold-soft" size={20} />
                     <span className="font-bold tracking-wide">{text}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-premium">
                  <span className="text-4xl font-black text-brand-gold-soft/20 block mb-4">{step.step}</span>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-sm text-blue-100/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto bg-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          <div className="bg-brand-blue text-white p-16 md:w-2/5 flex flex-col justify-center">
            <h3 className="text-4xl font-outfit mb-8 text-brand-gold-soft leading-tight">Ready to Start Your Journey?</h3>
            <p className="text-blue-50/80 mb-10 leading-relaxed text-lg">
              Submit your CV today and join a team that prioritises your wellbeing as much as our clients&apos;.
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white font-bold">1</div>
                <span className="text-sm font-bold uppercase tracking-widest">Apply Now</span>
              </div>
              <div className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">2</div>
                <span className="text-sm font-bold uppercase tracking-widest opacity-50">Interview</span>
              </div>
            </div>
          </div>
          <div className="p-16 md:w-3/5">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-black text-brand-blue uppercase tracking-widest">Full Name</label>
                  <input type="text" required className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-black text-brand-blue uppercase tracking-widest">Email</label>
                  <input type="email" required className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-brand-blue uppercase tracking-widest">Interested Position</label>
                <select className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none appearance-none">
                  <option>Care Professional</option>
                  <option>Support Worker</option>
                  <option>Mental Health Specialist</option>
                  <option>Wellbeing Assistant</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-black text-brand-blue uppercase tracking-widest">Upload CV</label>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden" 
                  accept=".pdf,.docx"
                />
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-4 border-dashed rounded-[2rem] p-12 text-center transition-premium cursor-pointer group ${file ? 'border-brand-gold bg-brand-gold/5' : 'border-brand-bg bg-brand-bg hover:border-brand-gold'}`}
                >
                  <Upload className={`mx-auto mb-6 ${file ? 'text-brand-gold' : 'text-brand-blue/30 group-hover:text-brand-gold'}`} size={48} />
                  <p className="text-lg font-bold text-brand-blue-dark">
                    {file ? file.name : "Click to upload CV"}
                  </p>
                  <p className="text-sm text-text-muted mt-2">
                    {file ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` : "PDF, DOCX (Max 5MB)"}
                  </p>
                </div>
              </div>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                  <h4 className="text-green-800 font-bold mb-2">Ready to Submit!</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Your details are ready. To finalize your application, please email your CV directly to <a href="mailto:careers@lifewellhealthcare.org" className="font-bold underline">careers@lifewellhealthcare.org</a> or contact our clinical lead.
                  </p>
                </div>
              ) : (
                <Button type="submit" variant="primary" className="w-full py-6 text-xl flex items-center justify-center gap-3">
                  Prepare Application <Send size={24} />
                </Button>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
