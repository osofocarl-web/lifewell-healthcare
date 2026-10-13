"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Heart, 
  ShieldCheck, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall,
  Activity,
  UserPlus,
  Clock,
  Home,
  Brain,
  Stethoscope,
  Smile,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const coreServices = [
  {
    title: "Visiting Domiciliary Care",
    desc: "Compassionate help with morning routines, personal care, medication prompts, and healthy meal preparation in the comfort of home.",
    icon: Home,
    href: "/services#domiciliary",
  },
  {
    title: "Dementia & Memory Care",
    desc: "Patient, consistent care that respects personal history, reduces disorientation, and supports independence in familiar surroundings.",
    icon: Brain,
    href: "/services#dementia",
  },
  {
    title: "Hospital Discharge Recovery",
    desc: "Occupational Therapy led rehabilitation to help individuals transition safely from hospital back to confident daily living.",
    icon: Stethoscope,
    href: "/services#discharge",
  },
  {
    title: "Companionship & Wellbeing",
    desc: "Meaningful social interaction, accompanied walks, conversation, and emotional support to prevent isolation.",
    icon: Smile,
    href: "/services#companionship",
  }
];

const pillars = [
  {
    title: "Consistent, Familiar Carers",
    desc: "We prioritise continuity of care, ensuring you see the same friendly, dependable faces rather than constantly changing staff.",
    icon: Users
  },
  {
    title: "Occupational Therapy Led",
    desc: "Our clinical leadership provides professional insight into home safety, mobility adaptations, and practical independence.",
    icon: Activity
  },
  {
    title: "Family Peace of Mind",
    desc: "Transparent notes and regular updates keep family members fully informed about their loved one's wellness and day-to-day comfort.",
    icon: ShieldCheck
  },
  {
    title: "Unhurried, Dignified Visits",
    desc: "We never rush personal care. Every visit is tailored around the client's own pace, preferences, and personal dignity.",
    icon: Clock
  }
];

const steps = [
  {
    title: "Friendly initial conversation",
    desc: "Call us on 07836 681415 or send an online enquiry. We listen to what you need and discuss the best care options without pressure."
  },
  {
    title: "Free in-home assessment",
    desc: "Our clinical lead visits your home to meet you and your family, review daily routines, assess mobility safety, and co-design a care plan."
  },
  {
    title: "Care begins at your pace",
    desc: "We introduce your matched care workers, ensuring you feel completely comfortable, respected, and supported from day one."
  },
  {
    title: "Ongoing reviews & updates",
    desc: "We maintain close contact with family, conducting regular check-ins and adjusting support as needs naturally evolve."
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col bg-[#faf9f6]">

      {/* 1. HERO SECTION - WARM, REASSURING & ORGANIC */}
      <section className="relative bg-[#0f2438] text-white overflow-hidden pt-12 pb-20 md:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/images/hero.png"
            alt="Compassionate home care support in Northamptonshire"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2438] via-[#0f2438]/95 to-[#0f2438]/70 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            {/* Natural Editorial Eyebrow */}
            <div className="text-xs md:text-sm font-semibold tracking-wider uppercase text-[#c89d4e] mb-4">
              Visiting Home Care &amp; Clinical Occupational Therapy • Northamptonshire
            </div>

            {/* Main Title */}
            <h1 
              style={{ color: '#ffffff' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight tracking-tight"
            >
              Personalised, compassionate care in the comfort of your own home.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 md:mb-10 leading-relaxed font-normal max-w-2xl">
              Led by an experienced NHS Occupational Therapist, Lifewell Healthcare provides dependable visiting home care, dementia support, and rehabilitation shaped around your family&apos;s unique routines.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="/contact">
                <Button variant="secondary" className="px-6 py-3.5 text-base">
                  Speak With Our Care Team <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="/about#clinical-leadership">
                <Button variant="outline" className="px-6 py-3.5 text-base bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#0f2438]">
                  Meet Our Clinical Lead
                </Button>
              </Link>
            </div>

            {/* Reassurance points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/15 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#c89d4e] shrink-0" />
                <span>Visiting care from 64 Broadway, NN1 4SQ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#c89d4e] shrink-0" />
                <span>HCPC Registered Occupational Therapist Lead</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#c89d4e] shrink-0" />
                <span>Enhanced DBS checked &amp; values-vetted carers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#c89d4e] shrink-0" />
                <span>Free in-home initial assessment &amp; guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REASSURANCE BAR */}
      <section className="bg-white border-b border-[#e6e5dd] py-4">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#0f2438] font-semibold">
            <CheckCircle2 size={16} className="text-[#b48a3c]" />
            <span>Serving Northampton, Towcester, Wellingborough &amp; surrounding villages</span>
          </div>
          <div className="flex items-center gap-2 text-[#0f2438] font-semibold">
            <CheckCircle2 size={16} className="text-[#b48a3c]" />
            <span>HCPC Registered Clinical Leadership</span>
          </div>
          <div className="flex items-center gap-2 text-[#0f2438] font-semibold">
            <CheckCircle2 size={16} className="text-[#b48a3c]" />
            <span>Preparing for CQC registration</span>
          </div>
          <div className="flex items-center gap-2 text-[#0f2438]">
            <PhoneCall size={15} className="text-[#b48a3c]" />
            <span className="text-[#536479]">Care Enquiries:</span>
            <a href="tel:07836681415" className="font-bold text-[#0f2438] hover:text-[#b48a3c]">
              07836 681415
            </a>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES */}
      <section className="py-16 md:py-20 bg-[#faf9f6]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#b48a3c] block mb-2">
              Our Visiting Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2438] mb-3">
              Care shaped around your family&apos;s routine
            </h2>
            <p className="text-sm md:text-base text-[#4e6074] leading-relaxed">
              Whether you need regular morning visits, companionship, or sensitive dementia guidance, we tailor our assistance to help you feel safe and in control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white p-7 rounded-2xl border border-[#e6e5dd] shadow-sm hover:shadow-md hover:border-[#cbd0d8] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#faf9f6] border border-[#e6e5dd] flex items-center justify-center text-[#b48a3c] mb-5">
                    <service.icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0f2438] mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#4e6074] leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>
                <Link 
                  href={service.href} 
                  className="text-xs font-bold text-[#0f2438] hover:text-[#b48a3c] inline-flex items-center gap-1 transition-colors"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE FOUR PILLARS */}
      <section className="py-16 md:py-20 bg-white border-y border-[#e6e5dd]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#b48a3c] block mb-2">
              Our Care Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2438] mb-3">
              Care built on dignity, trust, and unhurried kindness
            </h2>
            <p className="text-sm md:text-base text-[#4e6074] leading-relaxed">
              Inviting a care worker into your home is a major step. Our service is founded on dependable standards, clinical insight, and deep respect for your choices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-[#faf9f6] border border-[#e6e5dd]"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#e6e5dd] flex items-center justify-center text-[#b48a3c] mb-4">
                  <pillar.icon size={18} />
                </div>
                <h3 className="text-base font-bold text-[#0f2438] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#4e6074] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLINICAL LEADERSHIP SPOTLIGHT (IDA ACQUAH) */}
      <section className="py-16 md:py-20 bg-[#faf9f6]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-white rounded-2xl border border-[#e6e5dd] p-8 md:p-12 shadow-sm">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              
              {/* Photo */}
              <div className="w-full lg:w-5/12 max-w-[340px] shrink-0">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#e6e5dd] shadow-sm">
                  <Image
                    src="/images/ida_acquah.jpg"
                    alt="Ida Acquah - Clinical Lead and Lead Occupational Therapist"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Bio and Credentials */}
              <div className="flex-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#b48a3c] block mb-1">
                  Clinical Practice Leadership
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438] mb-1.5">
                  Ida Acquah
                </h2>
                <p className="text-xs md:text-sm font-semibold text-[#b48a3c] mb-5">
                  Clinical Lead • HCPC Registered Occupational Therapist (RCOT Member since 2010)
                </p>

                <p className="text-xs md:text-sm text-[#4e6074] leading-relaxed mb-4">
                  With over a decade of clinical experience across NHS intermediate care and adult social services, Ida brings a practical, rehabilitative focus to our home care provision. Her expertise ensures our care goes beyond routine chores to actively support mobility, home safety, and functional recovery.
                </p>

                <p className="text-xs md:text-sm text-[#4e6074] leading-relaxed mb-6 italic">
                  &ldquo;Our aim is to support individuals in maintaining their dignity and independence. We work alongside our clients, listening carefully to what matters most to their daily comfort.&rdquo;
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-[#e6e5dd] text-xs text-[#0f2438] mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#b48a3c]" />
                    <span>HCPC &amp; RCOT Registered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#b48a3c]" />
                    <span>Functional Living Assessments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#b48a3c]" />
                    <span>Moving, Handling &amp; Home Safety</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#b48a3c]" />
                    <span>Hospital Discharge Care Planning</span>
                  </div>
                </div>

                <Link href="/about#clinical-leadership">
                  <Button variant="outline" className="text-xs">
                    Read More About Clinical Governance &rarr;
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW WE ARRANGE CARE */}
      <section className="py-16 md:py-20 bg-white border-t border-[#e6e5dd]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-[#b48a3c] block mb-2">
              Getting Started
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2438] mb-3">
              Arranging care without stress or confusion
            </h2>
            <p className="text-sm md:text-base text-[#4e6074] leading-relaxed">
              We guide you through every step gently and clearly, ensuring you and your loved one feel informed and completely in control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div 
                key={idx} 
                className="bg-[#faf9f6] p-6 rounded-2xl border border-[#e6e5dd] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-[#b48a3c] block mb-2">Step {idx + 1}</span>
                  <h3 className="text-base font-bold text-[#0f2438] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#4e6074] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/contact">
              <Button variant="primary" className="px-6 py-3 text-sm">
                Book a Free In-Home Consultation &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. LOCAL NORTHAMPTON HUB BANNER */}
      <section className="py-16 md:py-20 bg-[#faf9f6] border-t border-[#e6e5dd]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-[#0f2438] text-white rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-[#c89d4e] block mb-2">
                  Northamptonshire Office
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Based in Northampton, serving families locally
                </h2>
                <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-6">
                  Our registered office and coordination team are located at <strong>64 Broadway, Northampton, NN1 4SQ</strong>. We provide domiciliary care and wellbeing visits across Northampton, Towcester, Wellingborough, Daventry, and surrounding villages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-xs text-white/90">
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-[#c89d4e]" />
                    <span>64 Broadway, Northampton, NN1 4SQ</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall size={15} className="text-[#c89d4e]" />
                    <span>07836 681415</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-lg-end items-center">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto px-6 py-3 text-sm">
                    Contact Our Office
                  </Button>
                </Link>
                <Link href="/careers" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto px-6 py-3 text-sm bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#0f2438]">
                    Join Our Care Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
