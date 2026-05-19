"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall,
  Activity,
  UserPlus,
  Target,
  Shield,
  Clock,
  ThumbsUp,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/Button";



const trustReasons = [
  { title: "Compassionate Support", desc: "Care that goes beyond tasks to focus on emotional connection.", icon: Heart },
  { title: "Dignity-First Care", desc: "Every interaction is rooted in respect for the individual.", icon: ThumbsUp },
  { title: "Emotionally Intelligent", desc: "Staff trained in empathy and person-centred support.", icon: Activity },
  { title: "Culturally Sensitive", desc: "Respecting diverse faiths and cultural backgrounds.", icon: ShieldCheck },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Compassionate Domiciliary Care"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0A1118]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1118]/95 via-[#0A1118]/60 to-transparent w-[85%]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/50 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[720px]"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-gold/30 border border-brand-gold/50 text-white font-bold text-sm mb-8 backdrop-blur-xl shadow-2xl">
              <ShieldCheck size={18} className="text-brand-gold-soft" />
              <span className="tracking-wide">Building care systems around quality, safety, and dignity</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-outfit mb-6 leading-[1.2] md:leading-[1.15] tracking-tight [text-shadow:_0_2px_15px_rgba(0,0,0,0.2)]" style={{ color: '#F8FAFC' }}>
              Supporting Lives with <br className="hidden md:inline" />
              <span className="font-black italic" style={{ color: '#D4AF37' }}>Compassion</span>, Dignity, <br className="hidden md:inline" />
              and <span className="font-black italic" style={{ color: '#D4AF37' }}>Wellbeing</span>.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-xl leading-relaxed font-medium [text-shadow:_0_2px_10px_rgba(0,0,0,0.2)]" style={{ color: '#F8FAFC' }}>
              Premium domiciliary care where clinical Occupational Therapy expertise meets the heart of family-centred support.
            </p>
            
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 md:mt-12">
              <Link href="/contact">
                <Button className="px-8 py-5 text-base sm:text-lg flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#E6CD7D] text-[#002D59] font-black hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border-0 rounded-full">
                  Request Care <ArrowRight size={20} />
                </Button>
              </Link>
              <Link href="/about#clinical-leadership">
                <Button className="px-8 py-5 text-base sm:text-lg flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/30 text-white backdrop-blur-md rounded-full hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 font-bold">
                  Our Clinical Lead
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-bg to-transparent z-10"></div>
      </section>

      {/* Trust Badges Strip */}
      <section className="bg-white py-8 border-y border-gray-100 shadow-sm relative z-20">
        <div className="container mx-auto px-6 flex flex-wrap justify-center lg:justify-between items-center gap-8">
          <div className="flex items-center gap-3 text-brand-blue-dark/70 font-bold uppercase tracking-widest text-xs">
            <CheckCircle2 className="text-brand-gold" size={20} />
            <span>Partnership Readiness</span>
          </div>
          <div className="flex items-center gap-3 text-brand-blue-dark/70 font-bold uppercase tracking-widest text-xs">
            <CheckCircle2 className="text-brand-gold" size={20} />
            <span>Governance-Led Care</span>
          </div>
          <div className="flex items-center gap-3 text-brand-blue-dark/70 font-bold uppercase tracking-widest text-xs">
            <CheckCircle2 className="text-brand-gold" size={20} />
            <span>Preparing for CQC Registration</span>
          </div>
          <div className="h-10 w-[1px] bg-gray-200 hidden lg:block"></div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-brand-gold uppercase font-black tracking-tighter">Clinical Support Line</span>
              <span className="text-brand-blue-dark font-black text-xl">07836 681415</span>
            </div>
            <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white shadow-lg animate-pulse">
              <PhoneCall size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Why Families Trust Lifewell */}
      <section className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-sm mb-4 block">The Lifewell Difference</span>
              <h2 className="text-5xl md:text-6xl font-outfit text-brand-blue-dark leading-tight">Why Families Trust Our Professional Care</h2>
            </div>
            <p className="text-text-muted text-xl max-w-md leading-relaxed pb-2 font-medium">
              We provide domiciliary care that feels personal, professional, and deeply rooted in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustReasons.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-premium group"
              >
                <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-premium">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-blue-dark">{item.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 2: Care That Feels Personal */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-brand-bg bg-brand-bg">
                <Image
                  src="/images/wellbeing.png"
                  alt="Personalised Community Care"
                  width={600}
                  height={700}
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"></div>
            </div>
            <div className="flex-1">
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-sm mb-6 block">Personalised Wellbeing</span>
              <h2 className="text-5xl md:text-6xl font-outfit mb-8 leading-tight text-brand-blue-dark">Care That Feels Like <span className="text-brand-gold italic">Family</span></h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium">
                We believe community care should be as unique as the individual. Our approach focuses on emotional wellbeing, companionship, and maintaining independence.
              </p>
              <div className="space-y-6 mb-12">
                {[
                  "Family reassurance & regular updates",
                  "Holistic emotional support systems",
                  "Dedicated companionship matching",
                  "Safe & empowering home environments"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="text-brand-blue" size={16} />
                    </div>
                    <span className="font-bold text-brand-blue-dark/80 tracking-wide">{text}</span>
                  </div>
                ))}
              </div>
              <Link href="/services">
                <Button variant="primary" className="px-10 py-4">Explore Our Approach</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Supporting Independent Living */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue-dark/5 -skew-x-12 transform translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="flex-1">
               <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col items-center text-center">
                   <Target className="text-brand-gold mb-4" size={40} />
                   <h4 className="font-bold text-brand-blue-dark mb-2">Empowerment</h4>
                   <p className="text-xs text-text-muted font-bold">FOCUS ON ABILITY</p>
                 </div>
                 <div className="bg-brand-blue-dark p-8 rounded-[2rem] shadow-lg text-white flex flex-col items-center text-center mt-12">
                   <Award className="text-brand-gold-soft mb-4" size={40} />
                   <h4 className="font-bold mb-2">Rehabilitation</h4>
                   <p className="text-xs text-brand-gold-soft font-bold">REGAINING SKILLS</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col items-center text-center">
                   <Users className="text-brand-gold mb-4" size={40} />
                   <h4 className="font-bold text-brand-blue-dark mb-2">Inclusion</h4>
                   <p className="text-xs text-text-muted font-bold">COMMUNITY FOCUS</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 flex flex-col items-center text-center mt-12">
                   <Heart className="text-brand-gold mb-4" size={40} />
                   <h4 className="font-bold text-brand-blue-dark mb-2">Dignity</h4>
                   <p className="text-xs text-text-muted font-bold">RESTORING SELF-WORTH</p>
                 </div>
               </div>
            </div>
            <div className="flex-1">
              <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-sm mb-6 block">Rehabilitative Care</span>
              <h2 className="text-5xl md:text-6xl font-outfit mb-8 leading-tight text-brand-blue-dark">Supporting Independent Living</h2>
              <p className="text-xl text-text-muted mb-10 leading-relaxed font-medium">
                Our rehabilitation assistance is led by Occupational Therapy expertise. We don&apos;t just provide care; we build confidence and help restore the skills needed for a dignified, independent life.
              </p>
              <Link href="/services">
                <Button variant="outline" className="px-10 py-4 border-brand-blue text-brand-blue">View Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Our Commitment to Quality (Governance) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-brand-blue-dark rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5"></div>
            <div className="relative z-10">
              <div className="max-w-3xl mb-16">
                <span className="text-brand-gold-soft font-black uppercase tracking-[0.3em] text-sm mb-6 block">Executive Governance</span>
                <h2 className="text-5xl md:text-6xl font-outfit mb-8 leading-tight">Our Commitment to Quality & Safety</h2>
                <p className="text-xl text-blue-100/70 leading-relaxed font-medium">
                  Lifewell Healthcare is built around a rigorous governance-led framework, ensuring that quality, safety, and accountability are at the heart of every domiciliary care decision.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  { title: "Professional Safeguarding", desc: "A robust culture of protection and safety for all individuals.", icon: Shield },
                  { title: "Safer Recruitment", desc: "Stringent DBS and values-based vetting for all staff.", icon: UserPlus },
                  { title: "Accountability", desc: "Transparent reporting and professional quality assurance systems.", icon: Clock },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-premium">
                    <item.icon className="text-brand-gold-soft" size={40} />
                    <div>
                      <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                      <p className="text-sm text-blue-100/60 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Trust Section */}
      <section className="py-24 bg-brand-bg border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-sm mb-4 block">Trust & Governance</span>
            <h2 className="text-4xl md:text-5xl font-outfit text-brand-blue-dark leading-tight max-w-3xl">
              Setting the Standard for Community Care
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Built Around Quality & Safety", icon: ShieldCheck },
              { title: "Preparing for CQC Registration", icon: Target },
              { title: "Clinical Occupational Therapy Leadership", icon: Activity },
              { title: "Person-Centred Community Care", icon: Heart }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group transition-premium"
              >
                <div className="w-16 h-16 rounded-full bg-brand-blue/5 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-premium">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-brand-blue-dark">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Join Our Team CTA */}
      <section className="py-20 bg-brand-blue-dark">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-brand-gold-soft font-black uppercase tracking-[0.3em] text-sm mb-4 block">Join the Lifewell Family</span>
            <h2 className="text-4xl md:text-5xl font-outfit text-white leading-tight">We&apos;re Looking for Compassionate People</h2>
            <p className="text-blue-100/80 mt-4 text-lg leading-relaxed font-medium">
              If you have a passion for supporting others with dignity and care, we&apos;d love to hear from you.
            </p>
          </div>
          <Link href="/careers">
            <Button variant="secondary" className="px-10 py-5 text-lg flex items-center gap-3 whitespace-nowrap shadow-2xl">
              <UserPlus size={22} /> Join Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
