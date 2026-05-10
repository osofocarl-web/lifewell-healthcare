"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Heart, Coffee, Globe, BookOpen, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

const initiatives = [
  { 
    title: "Men's Wellbeing Network", 
    desc: "A dedicated space for men to discuss mental health, share experiences, and find support.", 
    icon: UserCheck 
  },
  { 
    title: "Cultural Inclusion", 
    desc: "Faith-sensitive care and support tailored to the diverse cultural landscape of the UK.", 
    icon: Globe 
  },
  { 
    title: "Wellbeing Workshops", 
    desc: "Educational sessions on stress management, emotional resilience, and holistic health.", 
    icon: BookOpen 
  },
  { 
    title: "Social Inclusion", 
    desc: "Combatting loneliness through community events, coffee mornings, and group outings.", 
    icon: Coffee 
  },
];

export default function WellbeingPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-16">
        <div className="bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch border border-gray-100">
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm mb-6">
              <Users size={18} />
              <span>Community Restoration</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-outfit mb-8 text-brand-blue-dark">
              Community <span className="text-brand-gold">Wellbeing</span> & Support
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-10">
              Beyond traditional healthcare, we focus on the emotional and social fabric of our communities. Our initiatives are designed to foster connection, resilience, and dignity.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button variant="secondary" className="px-10">Join an Initiative</Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative min-h-[400px]">
            <Image
              src="/images/wellbeing.png"
              alt="Community Support"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-outfit mb-4">Our Wellbeing Initiatives</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Focused on restoring dignity and emotional health through community-led support.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm flex gap-8 items-start"
            >
              <div className="shrink-0 w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-blue">
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-brand-blue-dark">{item.title}</h3>
                <p className="text-text-muted leading-relaxed mb-6">{item.desc}</p>
                <Link href="/contact">
                  <button className="text-brand-gold font-bold text-sm uppercase tracking-widest hover:text-brand-blue transition-premium">
                    Learn More &rarr;
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Faith & Culture */}
      <section className="bg-brand-blue-dark py-24 mt-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 text-white">
          <div className="flex-1">
             <div className="grid grid-cols-2 gap-4">
               <div className="bg-white/5 aspect-square rounded-2xl border border-white/10 flex items-center justify-center">
                 <Heart className="text-brand-gold-soft" size={48} />
               </div>
               <div className="bg-white/5 aspect-square rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center p-6">
                 <span className="text-3xl font-bold text-brand-gold-soft mb-2">100%</span>
                 <span className="text-xs uppercase font-bold tracking-widest">Culturally Sensitive</span>
               </div>
             </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-outfit mb-8 text-brand-gold-soft">Faith-Sensitive & Culturally Intelligent Support</h2>
            <p className="text-lg text-blue-50/90 leading-relaxed mb-10 font-medium">
              We understand that true wellbeing involves respecting an individual's faith, cultural background, and identity. Our team is trained in cultural intelligence to ensure care that is not only professional but deeply respectful of your heritage and beliefs.
            </p>
            <Link href="/about">
              <Button variant="secondary" className="px-10">Our Approach</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
