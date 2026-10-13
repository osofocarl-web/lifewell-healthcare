"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, Heart, Coffee, Globe, BookOpen, UserCheck, ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";

const initiatives = [
  { 
    title: "Gentlemen's Wellbeing & Social Network", 
    desc: "A supportive, peer-led initiative encouraging open discussion around emotional health, loneliness, and life transitions among older men in Northamptonshire.", 
    icon: UserCheck 
  },
  { 
    title: "Cultural & Faith-Sensitive Care", 
    desc: "Thoughtful, tailored care plans that respect dietary needs (Halal, Kosher, vegetarian), prayer times, cultural traditions, and language preferences across diverse communities.", 
    icon: Globe 
  },
  { 
    title: "Mobility & Home Confidence Workshops", 
    desc: "Occupational Therapy guided guidance for clients and families on safe home transfers, reducing fall risks, and gentle daily mobility exercises.", 
    icon: BookOpen 
  },
  { 
    title: "Community Social Inclusion", 
    desc: "Accompanied visits to local community groups, church or faith gatherings, memory cafes, and high-street outings to keep individuals socially connected.", 
    icon: Coffee 
  },
];

export default function WellbeingPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2.5">
              Community Wellbeing Support
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2438] mb-4">
              Care that extends beyond the home door
            </h1>
            <p className="text-base text-[#4e6074] leading-relaxed mb-6">
              True wellbeing is more than physical support—it is about feeling connected, valued, and part of a community. Our initiatives are designed to reduce loneliness and foster genuine friendship across Northamptonshire.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact">
                <Button variant="primary" className="px-6 py-3 text-sm">
                  Join or Enquire
                </Button>
              </Link>
              <a href="tel:07836681415">
                <Button variant="outline" className="px-6 py-3 text-sm">
                  <PhoneCall size={16} /> Call 07836 681415
                </Button>
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#e6e5dd] shadow-sm">
            <Image
              src="/images/wellbeing.png"
              alt="Community Wellbeing and Support"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="container mx-auto px-6 mb-16 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
            Local Initiatives
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438]">
            Wellbeing Programmes &amp; Community Support
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initiatives.map((item, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-2xl border border-[#e6e5dd] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center text-[#b48a3c] mb-5">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-[#0f2438]">{item.title}</h3>
                <p className="text-xs md:text-sm text-[#4e6074] leading-relaxed mb-6">{item.desc}</p>
              </div>
              <Link href="/contact" className="text-xs font-bold text-[#0f2438] hover:text-[#b48a3c] inline-flex items-center gap-1">
                Learn more or register interest <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Faith & Culture Callout */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="bg-[#0f2438] text-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
              Inclusive Care
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Faith-Sensitive &amp; Culturally Aware Care
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
              We understand that personal identity, faith practices, and cultural background are central to a person&apos;s dignity. Our carers are trained to respect specific dietary customs, prayer schedules, and family values with warmth and understanding.
            </p>
            <Link href="/contact">
              <Button variant="secondary" className="px-6 py-3 text-sm">
                Discuss Your Family&apos;s Preferences
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
