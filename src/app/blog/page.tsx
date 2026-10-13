"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, User, ArrowRight, BookOpen, Clock, Heart, ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  sections: { heading: string; content: string }[];
  checklistTitle?: string;
  checklistItems?: string[];
  clinicalSignOff: string;
}

const articlesData: Article[] = [
  {
    id: "domiciliary-guide",
    title: "Understanding Domiciliary Care: A Practical Guide for Families",
    category: "Care Guidance",
    date: "May 2026",
    readTime: "7 min read",
    author: "Clinical Leadership Team",
    excerpt: "An in-depth look at how home care works, how to evaluate personal needs, and how to maintain independence safely.",
    sections: [
      {
        heading: "1. What is Domiciliary Care?",
        content: "Domiciliary care—often referred to as visiting home care—is a service that allows individuals to receive personalized support and care in the comfort of their own homes. Unlike moving into a care home, visiting care is tailored around your established routines, ranging from brief morning calls to comprehensive daily visits. At Lifewell Healthcare Ltd, we believe home is where people heal and flourish best."
      },
      {
        heading: "2. Assessing Personal and Health Needs",
        content: "Safe home care begins with a thoughtful, holistic assessment. This is not a rushed tick-box exercise, but a conversation about habits, mobility, medication schedules, and personal preferences. We actively involve family members to ensure every practical and emotional detail is respected."
      },
      {
        heading: "3. Designing the Support Plan",
        content: "Every care plan is tailored. We document exact visit times, specific support required, dietary preferences, and personal routines. This precision ensures consistency across every visit and provides family members with complete peace of mind."
      },
      {
        heading: "4. Preserving Personal Independence",
        content: "A common concern is that care might reduce an individual's autonomy. In practice, good care does the opposite. Led by our Lead Occupational Therapist Ida Acquah, our carers practice reablement techniques—working alongside individuals to encourage retained abilities and mobility rather than doing everything for them."
      }
    ],
    checklistTitle: "Family Checklist: Evaluating Care Needs",
    checklistItems: [
      "Is personal washing or dressing becoming tiring or risky?",
      "Are warm meals or daily hydration being missed?",
      "Have there been near-miss slips or recent falls at home?",
      "Is managing prescribed medications becoming confusing?",
      "Does your loved one express feelings of loneliness or isolation?"
    ],
    clinicalSignOff: "Reviewed and approved by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  },
  {
    id: "hospital-discharge",
    title: "Safe Transition Home After Hospital Discharge",
    category: "Hospital Recovery",
    date: "May 2026",
    readTime: "6 min read",
    author: "Hospital Discharge Team",
    excerpt: "Essential safety checks, home modifications, and routines to support recovery and prevent hospital readmission.",
    sections: [
      {
        heading: "1. The First 72 Hours at Home",
        content: "The first three days following discharge from hospital are the most crucial. The sudden transition from a 24-hour ward to a quiet home can lead to medication confusion and physical fatigue. Having a structured care visit scheduled for the day of arrival dramatically reduces stress and readmission risks."
      },
      {
        heading: "2. Preparing the Living Space",
        content: "Before returning home, walkways should be cleared of rugs and clutter, heating checked, and essential lighting verified. Where appropriate, grab rails or raised toilet seats recommended by hospital therapists should be installed in advance."
      },
      {
        heading: "3. Organizing Medication and Equipment",
        content: "Discharge prescriptions and dosage instructions must be cross-checked carefully. Setting up a structured Medication Administration Record (MAR) prevents missed doses and provides reassurance."
      },
      {
        heading: "4. Re-establishing Daily Confidence",
        content: "Gentle physical routines, nutritious meals, and structured rest periods help restore stamina. Our carers work alongside hospital discharge guidance to ensure recovery is safe and steady."
      }
    ],
    checklistTitle: "Checklist for Discharge Day",
    checklistItems: [
      "Obtain formal hospital discharge summary and at least 7 days of take-home medication.",
      "Clear all key walking routes in the home (minimum 1-meter clearance width).",
      "Ensure fresh groceries, drinking water, and clean bedding are prepared.",
      "Arrange for a care worker or family member to be present on arrival."
    ],
    clinicalSignOff: "Reviewed and approved by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  },
  {
    id: "dementia-support",
    title: "Dementia Support at Home: Reassuring Daily Routines",
    category: "Dementia Care",
    date: "May 2026",
    readTime: "8 min read",
    author: "Dementia Care Team",
    excerpt: "Practical guidance on communication, reducing anxiety, and creating safe, predictable home environments.",
    sections: [
      {
        heading: "1. Routine and Familiarity",
        content: "Living with dementia is made significantly easier when daily life follows predictable, calming rhythms. Keeping wake-up times, meals, and favourite activities consistent creates a sense of comfort and reduces confusion."
      },
      {
        heading: "2. Communication with Patience",
        content: "Speak calmly, maintain gentle eye contact, and give ample time for your relative to process and respond. Validate their feelings rather than correcting memory lapses, protecting their emotional wellbeing."
      },
      {
        heading: "3. Nutrition, Hydration, and Evening Rest",
        content: "Finger foods and regular drink prompts help maintain nutrition and hydration. Preparing a calm evening routine helps ease 'sundowning' and encourages restful sleep."
      }
    ],
    checklistTitle: "Creating a Dementia-Friendly Home",
    checklistItems: [
      "Use clear signage or familiar cues on key doors (bathroom, bedroom).",
      "Maintain consistent, warm lighting to eliminate disorienting shadows.",
      "Keep treasured family photographs and familiar items in easy view.",
      "Reduce background television or radio noise during conversations and meals."
    ],
    clinicalSignOff: "Reviewed and approved by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  },
  {
    id: "occupational-therapy",
    title: "The Role of Occupational Therapy in Home Care",
    category: "Clinical Leadership",
    date: "May 2026",
    readTime: "6 min read",
    author: "Lead Occupational Therapist",
    excerpt: "How OT assessments, equipment adaptations, and reablement help individuals live comfortably on their own terms.",
    sections: [
      {
        heading: "1. What Occupational Therapy Brings to Care",
        content: "Occupational Therapy (OT) focuses on helping people perform the everyday activities that matter to them. In domiciliary care, OT provides the clinical foundation for safe movement, home adaptations, and functional recovery."
      },
      {
        heading: "2. Practical Environmental Adaptations",
        content: "An OT assessment evaluates how a person moves in their own space. By identifying simple adjustments—such as grab rails, bed levers, or stair rails—we enable individuals to carry out daily tasks safely and with less physical strain."
      },
      {
        heading: "3. Reablement Over Dependence",
        content: "Rather than doing everything on behalf of a client, our care workers are coached to encourage participation. This preserves muscle strength, maintains cognitive confidence, and respects personal dignity."
      }
    ],
    checklistTitle: "When to Consider an OT Home Assessment",
    checklistItems: [
      "Struggling to stand up safely from a favourite armchair or bed.",
      "Anxiety or instability when negotiating door thresholds or garden steps.",
      "Difficulty getting in or out of the bath or shower safely.",
      "Following a fall, illness, or surgery where confidence has been knocked."
    ],
    clinicalSignOff: "Authored by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  }
];

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      {!selectedArticle ? (
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header */}
          <section className="mb-12 text-center">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2.5">
              Care Guidance &amp; Family Resources
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2438] mb-4">
              Practical guides and clinical insights
            </h1>
            <p className="text-base md:text-lg text-[#4e6074] max-w-2xl mx-auto leading-relaxed">
              Clear, practical advice curated by our clinical leadership team to help families navigate home care, hospital discharge, and dementia support.
            </p>
          </section>

          {/* Article List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {articlesData.map((topic) => (
              <div
                key={topic.id}
                className="bg-white rounded-2xl border border-[#e6e5dd] p-7 shadow-sm flex flex-col justify-between hover:border-[#cbd0d8] transition-colors"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#b48a3c] bg-[#faf9f6] px-2.5 py-1 rounded-md border border-[#e6e5dd]">
                      {topic.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#536479]">
                      <Clock size={13} /> {topic.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 text-[#0f2438] leading-snug">
                    {topic.title}
                  </h2>

                  <p className="text-xs md:text-sm text-[#4e6074] leading-relaxed mb-6">
                    {topic.excerpt}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#e6e5dd] flex justify-between items-center">
                  <span className="text-xs text-[#536479]">{topic.date}</span>
                  <button
                    onClick={() => setSelectedArticle(topic)}
                    className="text-xs font-bold text-[#0f2438] hover:text-[#b48a3c] inline-flex items-center gap-1"
                  >
                    Read article &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Clinical Sign-off Note */}
          <div className="bg-white rounded-xl border border-[#e6e5dd] p-6 text-center max-w-2xl mx-auto text-xs text-[#4e6074]">
            All guides are prepared and reviewed by Ida Acquah (HCPC-registered Occupational Therapist) and our care management team in accordance with UK health and social care standards.
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-6 max-w-3xl">
          {/* Back button */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0f2438] hover:text-[#b48a3c] mb-8"
          >
            <ArrowLeft size={16} /> Back to Care Guides
          </button>

          {/* Article Card */}
          <article className="bg-white rounded-2xl border border-[#e6e5dd] p-8 md:p-12 shadow-sm">
            <div className="flex justify-between items-center pb-4 border-b border-[#e6e5dd] mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#b48a3c]">
                {selectedArticle.category}
              </span>
              <span className="text-xs text-[#536479] flex items-center gap-1">
                <Clock size={13} /> {selectedArticle.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2438] mb-4 leading-tight">
              {selectedArticle.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-[#536479] mb-8">
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.author}</span>
            </div>

            <div className="p-4 bg-[#faf9f6] rounded-xl border border-[#e6e5dd] mb-8 text-sm italic text-[#0f2438]">
              &ldquo;{selectedArticle.excerpt}&rdquo;
            </div>

            <div className="space-y-6 text-sm md:text-base text-[#4e6074] leading-relaxed mb-10">
              {selectedArticle.sections.map((sec, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-lg font-bold text-[#0f2438]">
                    {sec.heading}
                  </h3>
                  <p>{sec.content}</p>
                </div>
              ))}
            </div>

            {selectedArticle.checklistTitle && selectedArticle.checklistItems && (
              <div className="bg-[#faf9f6] rounded-xl p-6 border border-[#e6e5dd] mb-8">
                <h4 className="text-sm font-bold text-[#0f2438] mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#b48a3c]" />
                  {selectedArticle.checklistTitle}
                </h4>
                <ul className="space-y-2.5">
                  {selectedArticle.checklistItems.map((item, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-[#4e6074] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#b48a3c] shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6 border-t border-[#e6e5dd] flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-[#536479] italic">
                {selectedArticle.clinicalSignOff}
              </span>
              <Link href="/contact">
                <Button variant="primary" className="text-xs px-4 py-2">
                  Discuss Care Options &rarr;
                </Button>
              </Link>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
