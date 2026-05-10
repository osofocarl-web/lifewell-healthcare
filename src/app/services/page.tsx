"use client";

import React from "react";
import { 
  Home, 
  UserRound, 
  Brain, 
  Smile, 
  HeartHandshake, 
  LogOut, 
  MapPin, 
  Stethoscope, 
  Coffee,
  Sun
} from "lucide-react";
import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";

const allServices = [
  {
    title: "Domiciliary Care",
    description: "Expert assistance with daily living tasks, personal care, and medication management in your own home.",
    icon: Home,
    benefits: ["Personalised Care Plans", "Medication Management", "Dignity Focused"],
  },
  {
    title: "Elderly Support",
    description: "Dedicated support for seniors to maintain independence, safety, and a high quality of life.",
    icon: UserRound,
    benefits: ["Fall Prevention", "Mobility Assistance", "Daily Routine Support"],
  },
  {
    title: "Dementia Support",
    description: "Specialised memory care and emotional support for individuals living with dementia and their families.",
    icon: Brain,
    benefits: ["Cognitive Stimulation", "Safe Environment", "Family Guidance"],
  },
  {
    title: "Mental Health Support",
    description: "Holistic emotional and mental wellbeing assistance, integrating counselling principles and compassionate listening.",
    icon: Smile,
    benefits: ["Emotional Resilience", "Crisis Support", "Therapeutic Approach"],
  },
  {
    title: "Companionship",
    description: "Reducing isolation through meaningful social interaction, shared hobbies, and community engagement.",
    icon: HeartHandshake,
    benefits: ["Social Inclusion", "Shared Activities", "Emotional Bonding"],
  },
  {
    title: "Hospital Discharge",
    description: "Ensuring a safe and smooth transition from hospital to home with necessary medical and physical support.",
    icon: LogOut,
    benefits: ["Rehabilitation Support", "Home Safety Check", "Recovery Monitoring"],
  },
  {
    title: "Community Access",
    description: "Assisting individuals in accessing local services, appointments, and social events safely.",
    icon: MapPin,
    benefits: ["Travel Assistance", "Social Integration", "Appointment Support"],
  },
  {
    title: "Rehabilitation",
    description: "Physical and emotional assistance to help individuals regain skills and independence after illness or injury.",
    icon: Stethoscope,
    benefits: ["Skill Recovery", "Physical Motivation", "Independence Focus"],
  },
  {
    title: "Respite Care",
    description: "Temporary relief for primary caregivers, ensuring their loved ones receive high-quality care while they rest.",
    icon: Coffee,
    benefits: ["Short-term Stays", "Caregiver Support", "Emergency Respite"],
  },
  {
    title: "Live-In Care",
    description: "24/7 dedicated support for those requiring constant assistance and companionship. (Coming Soon)",
    icon: Sun,
    benefits: ["Round-the-clock Care", "Total Independence", "Constant Companion"],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Professional Suite</span>
          <h1 className="text-6xl md:text-8xl font-outfit mb-10 text-brand-blue-dark leading-tight">World-Class <span className="text-brand-blue">Healthcare Services</span></h1>
          <p className="text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed font-medium">
            Comprehensive, compassionate, and professional healthcare solutions tailored to every stage of life. We bridge clinical excellence with the emotional warmth of person-centred support.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allServices.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-section-soft py-32 border-y border-brand-blue/5">
        <div className="container mx-auto px-6">
          <div className="bg-brand-blue-dark rounded-[5rem] p-16 lg:p-28 text-white text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,45,89,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-transparent to-brand-gold/10 opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-outfit mb-8 leading-tight">Need a Bespoke Care Plan?</h2>
              <p className="text-blue-100/70 text-2xl mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
                Every individual is unique. We provide comprehensive consultations to design a care package that perfectly aligns with your family's specific needs and clinical requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact">
                  <Button variant="secondary" className="px-12 py-6 text-xl shadow-2xl">
                    Book Clinical Consultation
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-12 py-6 text-xl border-white/40 text-white hover:bg-white hover:text-brand-blue">
                    Download Prospectus
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
