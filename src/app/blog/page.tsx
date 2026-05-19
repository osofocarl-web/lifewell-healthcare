"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight, BookOpen, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";

const previewTopics = [
  {
    title: "Understanding Domiciliary Care: A Complete Guide",
    category: "Care Guidance",
    description: "An in-depth look at how home support works, how to evaluate care needs, and how to maintain personal independence safely.",
    readTime: "8 min read",
    id: "domiciliary-guide"
  },
  {
    title: "Supporting a Loved One After Hospital Discharge",
    category: "Transitions",
    description: "Crucial home-safety checklists, environmental modifications, and immediate routines to ensure safe recovery and prevent re-admission.",
    readTime: "6 min read",
    id: "hospital-discharge"
  },
  {
    title: "Dementia Support at Home: Creating Safe Routines",
    category: "Dementia Support",
    description: "Practical behavioral strategies and structured cognitive exercises designed to reduce anxiety and sustain memory engagement.",
    readTime: "10 min read",
    id: "dementia-support"
  },
  {
    title: "How Companionship & Connection Elevates Longevity",
    category: "Wellbeing & Inclusion",
    description: "Exploring the clinical links between social connection, loneliness reduction, and physical health in older adults.",
    readTime: "5 min read",
    id: "companionship-longevity"
  },
  {
    title: "The Critical Role of Occupational Therapy in Care",
    category: "Clinical Leadership",
    description: "How OT functional assessments, equipment provision, and rehabilitation help individuals live on their own terms.",
    readTime: "7 min read",
    id: "ot-in-care"
  },
  {
    title: "Choosing a Domiciliary Care Provider Safely in the UK",
    category: "Standards & Safety",
    description: "A framework covering values-based recruitment, CQC-preparedness indicators, safeguarding checks, and service contracts.",
    readTime: "9 min read",
    id: "choosing-provider"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Clinical & Family Knowledge</span>
        <h1 className="text-5xl md:text-6xl font-outfit mb-6 text-brand-blue-dark tracking-tight">Healthcare <span className="text-brand-blue">Insights & Guidance</span></h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed font-medium">
          Professional advice, transition support guides, and care checklists curated by our Clinical Leadership team.
        </p>
      </section>

      {/* Editorial Announcement Box */}
      <section className="container mx-auto px-6 mb-20">
        <div className="bg-white rounded-[3rem] p-10 lg:p-16 border border-gray-100 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 bg-brand-bg rounded-[2rem] flex items-center justify-center text-brand-blue shrink-0">
            <BookOpen size={40} />
          </div>
          <div>
            <span className="text-brand-gold font-black uppercase tracking-widest text-xs block mb-2">Editorial Hub Coming Soon</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue-dark mb-4">Supporting Families, Carers & Professionals</h2>
            <p className="text-base text-text-muted leading-relaxed font-medium max-w-4xl mb-6">
              Our insights hub is currently being developed to support families, carers, and health professionals with practical healthcare guidance, dementia resources, hospital transition protocols, and home safety strategies. Explore our planned topics below and register your interest to receive them first.
            </p>
            <Link href="/contact?subject=Register%20Interest%20for%20Insights%20Hub">
              <Button variant="primary" className="px-6 py-3 text-sm">
                Register for Article Previews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewTopics.map((topic, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col p-8 group transition-premium"
            >
              {/* Category and Read time row */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-brand-gold font-black text-[10px] uppercase tracking-widest">{topic.category}</span>
                <span className="flex items-center gap-1 text-[10px] text-text-muted font-bold uppercase tracking-wider">
                  <Clock size={12} className="text-brand-gold" /> {topic.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-brand-blue-dark leading-tight group-hover:text-brand-blue transition-premium">
                {topic.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-text-muted mb-8 leading-relaxed flex-grow font-medium">
                {topic.description}
              </p>

              {/* Action row */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-50 mt-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 text-brand-gold text-[9px] uppercase font-black tracking-widest rounded-full">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse"></span>
                  In Clinical Review
                </span>
                <Link href={`/contact?subject=Interest%20in%20article:%20${encodeURIComponent(topic.title)}`}>
                  <button className="text-[10px] uppercase tracking-widest font-black text-brand-blue hover:text-brand-gold transition-premium flex items-center gap-1">
                    Preview Topic <ArrowRight size={12} />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center max-w-xl mx-auto p-8 rounded-3xl bg-white border border-gray-100">
          <Heart size={32} className="text-brand-gold mx-auto mb-4" />
          <p className="text-xs text-text-muted font-bold leading-relaxed">
            All Lifewell Healthcare publications undergo thorough review by Ida Acquah (Lead Occupational Therapist) and our compliance managers before public release to ensure accuracy, clinical reliability, and strict compliance with care guidelines.
          </p>
        </div>
      </section>
    </div>
  );
}
