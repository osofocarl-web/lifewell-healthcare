"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Understanding Dementia: A Guide for Families",
    excerpt: "Practical tips and emotional support strategies for families navigating a dementia diagnosis.",
    category: "Dementia Support",
    date: "May 10, 2026",
    author: "Clinical Team",
  },
  {
    title: "The Importance of Emotional Wellbeing in Care",
    excerpt: "Why holistic care must include mental health and emotional support for both clients and carers.",
    category: "Wellbeing",
    date: "May 05, 2026",
    author: "Clinical Lead",
  },
  {
    title: "Navigating Hospital Discharge Safely",
    excerpt: "A checklist for a smooth transition from hospital to home healthcare support.",
    category: "Health Tips",
    date: "April 28, 2026",
    author: "Care Manager",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-outfit mb-6 text-brand-blue-dark tracking-tight">Healthcare <span className="text-brand-blue">Insights</span></h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed font-medium">
          Expert advice, community stories, and the latest updates from our Clinical Leadership team.
        </p>
      </section>

      {/* Featured Post Placeholder */}
      <section className="container mx-auto px-6 mb-24">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-1/2 relative aspect-video lg:aspect-auto">
            <Image
              src="/images/blog_featured.png"
              alt="Social Inclusion for the Elderly"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
            <span className="text-brand-gold font-bold text-sm uppercase tracking-widest mb-4">Latest Insight</span>
            <h2 className="text-4xl font-outfit mb-6 text-brand-blue-dark">Promoting Social Inclusion for the Elderly</h2>
            <p className="text-lg text-text-main mb-10 leading-relaxed font-medium">
              Loneliness can be a significant health risk. Learn how Lifewell&apos;s companionship services are rebuilding social bridges in our communities.
            </p>
            <div className="flex items-center gap-6 text-sm text-text-muted mb-10">
              <div className="flex items-center gap-2 font-bold">
                <Calendar size={16} className="text-brand-gold" /> May 12, 2026
              </div>
              <div className="flex items-center gap-2 font-bold">
                <User size={16} className="text-brand-gold" /> Clinical Team
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-5 py-2 rounded-full text-sm font-bold">
                Coming Soon — Full article launching shortly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col"
            >
              <div className="bg-brand-bg aspect-[4/3] flex items-center justify-center text-brand-blue/20 font-bold text-xs uppercase tracking-widest">
                Article Image
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-brand-gold font-bold text-[10px] uppercase tracking-widest mb-3">{post.category}</span>
                <h3 className="text-xl font-bold mb-4 text-brand-blue-dark leading-tight">{post.title}</h3>
                <p className="text-sm text-text-muted mb-8 leading-relaxed flex-grow">
                   {post.excerpt}
                </p>
                <span className="flex items-center gap-2 text-brand-blue/50 font-bold text-sm cursor-default">
                  Coming Soon <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-text-muted font-medium text-lg">More insights are being prepared by our Clinical Team — check back soon.</p>
        </div>
      </section>
    </div>
  );
}
