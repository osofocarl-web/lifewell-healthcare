"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Calendar, User, ArrowRight, BookOpen, Clock, Heart, ArrowLeft, Send } from "lucide-react";
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
    title: "Understanding Domiciliary Care: A Complete Guide for Families",
    category: "Care Guidance",
    date: "May 18, 2026",
    readTime: "8 min read",
    author: "Clinical Leadership Team",
    excerpt: "An in-depth look at how home support works, how to evaluate care needs, and how to maintain personal independence safely.",
    sections: [
      {
        heading: "1. What is Domiciliary Care?",
        content: "Domiciliary care—often referred to as home care—is a service that allows individuals to receive personalized support and care in the comfort of their own homes. Unlike residential care, domiciliary care is highly adaptable, ranging from brief morning visits to support with personal hygiene, to comprehensive round-the-clock live-in support. At Lifewell Healthcare Ltd, we design our domiciliary services around the core belief that your home is the best environment for healing, dignity, and personal growth."
      },
      {
        heading: "2. Assessing Personal and Health Needs",
        content: "The foundation of safe domiciliary care lies in a meticulous assessment process. This assessment is not simply a checklist of physical limitations; it is a holistic exploration of an individual's life, daily routines, social preferences, and functional abilities. We evaluate mobility, dietary needs, medication requirements, and cognitive health. Crucially, we invite family members and primary healthcare practitioners to participate, ensuring the care plan covers every medical and social detail."
      },
      {
        heading: "3. Designing the Support Plan",
        content: "Every domiciliary care package is customized. Our care plans outline the exact times of visits, specific tasks required, medication schedules, and nutritional guidelines. We pay close attention to personal preferences—such as preferred morning routines, food choices, and cultural practices. This clinical precision prevents errors, ensures consistency, and provides families with peace of mind."
      },
      {
        heading: "4. Preserving Personal Independence",
        content: "A common misconception is that home care reduces an individual's independence. In practice, professional domiciliary care is designed to maximize autonomy. Under the guidance of our Lead Occupational Therapist, Ida Acquah, our care professionals are trained in 'reablement' techniques. Rather than simply performing tasks *for* a client, we work *with* them, encouraging them to maintain their physical strength, daily skills, and personal routines."
      }
    ],
    checklistTitle: "Checklist for Families: Evaluating Domiciliary Care Needs",
    checklistItems: [
      "Is your loved one experiencing difficulties with personal hygiene or morning routines?",
      "Are there visible gaps in nutritional intake or struggles with preparing warm meals?",
      "Has there been a history of near-miss slips or recent falls in the home environment?",
      "Is managing medication schedules becoming stressful or inconsistent?",
      "Does your loved one express feelings of isolation or a desire for companionship?"
    ],
    clinicalSignOff: "Reviewed and approved by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  },
  {
    id: "hospital-discharge",
    title: "Supporting a Loved One After Hospital Discharge: A Transition Blueprint",
    category: "Transitions",
    date: "May 15, 2026",
    readTime: "6 min read",
    author: "Hospital Discharge Team",
    excerpt: "Crucial home-safety checklists, environmental modifications, and immediate routines to ensure safe recovery and prevent re-admission.",
    sections: [
      {
        heading: "1. The Crucial Transition Window",
        content: "The first 72 hours following a hospital discharge represent a high-risk window for patients, particularly the elderly. The sudden transition from a fully staffed clinical environment to a quiet home can lead to medication confusion, physical fatigue, and anxiety. Having a structured, proactive care system in place before the patient leaves the hospital ward significantly reduces the risk of emergency re-admission."
      },
      {
        heading: "2. Performing a Home Environmental Assessment",
        content: "Before your loved one arrives home, the physical environment must be audited for safety. Falls are the leading cause of injury-related hospital re-admissions. We recommend checking that all pathways are free of clutter and loose rugs, ensuring lighting is bright and easily accessible (especially near the bed and bathroom), and verifying that essential handrails are secure. A professional environmental assessment by an Occupational Therapist is the safest way to identify hidden hazards."
      },
      {
        heading: "3. Organizing Medication and Equipment",
        content: "Hospital discharges often come with changes to medication regimes, new prescriptions, or specialized equipment (such as mobility frames, commodes, or slide sheets). It is vital to cross-reference the hospital's discharge summary with the GP's records. Caregivers must be fully briefed on new dosages, side effects, and correct equipment usage. We recommend setting up a clear, physical Medication Administration Record (MAR) chart to avoid double-dosing or missed medication."
      },
      {
        heading: "4. Creating Post-Discharge Routines",
        content: "Re-establishing normal daily routines is key to physical and psychological recovery. This includes organizing structured, light physical exercises to restore functional strength, ensuring consistent hydration, and arranging nourishing, easy-to-digest meals. Our transition support packages are specifically designed to bridge this gap, offering dedicated care professionals to manage the physical demands of recovery while your loved one regains their strength."
      }
    ],
    checklistTitle: "Crucial Checklist Before Discharge Day",
    checklistItems: [
      "Obtain a copy of the formal Discharge Summary and a minimum of 7 days of take-home medication.",
      "Schedule a GP follow-up appointment within 7 days of discharge to review new medications.",
      "Clear all main walking routes in the home, ensuring at least a 1-meter clearance width.",
      "Ensure essential groceries, fresh water, and clean linen are prepared in the home.",
      "Arrange for a professional support worker to be present for the first return home."
    ],
    clinicalSignOff: "Reviewed and approved by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  },
  {
    id: "dementia-support",
    title: "Dementia Support at Home: Creating Safe and Reassuring Routines",
    category: "Dementia Support",
    date: "May 12, 2026",
    readTime: "10 min read",
    author: "Dementia Specialist Team",
    excerpt: "Practical behavioral strategies and structured cognitive exercises designed to reduce anxiety and sustain memory engagement.",
    sections: [
      {
        heading: "1. The Power of Structure in Cognitive Support",
        content: "Dementia affects memory, orientation, and processing speed, which can make a constantly changing environment feel stressful and disorienting. Establishing a consistent, predictable daily routine is one of the most effective ways to reduce anxiety and prevent distress. Waking up, eating meals, engaging in physical activity, and going to bed at the same times every day helps anchor individuals, providing a comforting sense of safety."
      },
      {
        heading: "2. Managing Behavioral Changes with Gentle Guidance",
        content: "As dementia progresses, individuals may experience behavioral changes such as restlessness, sun-downing, or repetitive questioning. It is essential to recognize that these behaviors are often attempts to communicate unmet needs—such as physical discomfort, boredom, or fear. Rather than correcting or arguing, caregivers should practice validation, reassurance, and gentle redirection, guiding focus toward comfort and safe, calming activities."
      },
      {
        heading: "3. Designing a Sensory-Friendly Environment",
        content: "A home environment can easily become sensory-overloading for someone with dementia. High-contrast colors, busy patterns on carpets, harsh glare, and loud television noise can cause confusion and distress. We recommend maximizing natural daylight, using solid-colored floor coverings to prevent misjudging steps, and playing soft, familiar music. Removing large mirrors can also help prevent distress if a client no longer recognizes their own reflection."
      },
      {
        heading: "4. Engaging in Purposeful Cognitive Activities",
        content: "Sustaining cognitive health involves active, enjoyable mental engagement. This is not about memory tests; it is about shared, meaningful experiences. Reminiscence therapy—such as looking through vintage photo albums, listening to music from their youth, or discussing familiar life events—can bring immense joy and restore a sense of identity. Simple, failure-free sorting tasks or gentle sensory activities also provide a positive sense of accomplishment."
      }
    ],
    checklistTitle: "Practical Dementia Home Care Tips",
    checklistItems: [
      "Keep a clear, large-print daily calendar visible in the living room.",
      "Label cupboards and drawers with simple words or icons showing their contents.",
      "Ensure hallways and bathrooms are softly lit overnight to prevent falls.",
      "Avoid complex, multi-step questions; offer simple binary choices (e.g., 'Would you like tea or water?').",
      "Ensure quiet periods in the afternoon to minimize sun-downing fatigue."
    ],
    clinicalSignOff: "Reviewed and approved by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  },
  {
    id: "companionship-longevity",
    title: "How Companionship & Connection Elevates Longevity in Older Adults",
    category: "Wellbeing & Inclusion",
    date: "May 08, 2026",
    readTime: "5 min read",
    author: "Wellbeing Coordination Team",
    excerpt: "Exploring the clinical links between social connection, loneliness reduction, and physical health in older adults.",
    sections: [
      {
        heading: "1. The Silent Epidemic: Elderly Isolation",
        content: "Loneliness in older adults is far more than an emotional challenge; it is a major public health concern. Clinical studies show that chronic loneliness has a health impact equivalent to smoking 15 cigarettes a day, and is linked to increased risks of cardiovascular disease, cognitive decline, and depression. At Lifewell Healthcare Ltd, we treat social isolation as a critical clinical issue that requires active, compassionate support."
      },
      {
        heading: "2. The Clinical Links Between Companionship and Health",
        content: "Regular, meaningful social interaction releases positive neurotransmitters, lowers cortisol (stress hormone) levels, and helps regulate blood pressure. Having someone to talk to encourages mental engagement, keeps language pathways active, and prompts better self-care—such as eating regular meals and staying hydrated. Companionship provides a vital safety net, ensuring subtle changes in physical or cognitive health are noticed early."
      },
      {
        heading: "3. Rebuilding Social Bridges",
        content: "Our companionship services are built around shared interests, life stories, and mutual respect. We do not simply send a visitor; we match clients with care professionals who share their hobbies, whether that is gardening, discussing history, playing board games, or enjoying walks in local parks. We focus on rebuilding connections with the local community, helping clients access social events, church services, and family gatherings safely."
      },
      {
        heading: "4. Companionship as a Catalyst for Active Living",
        content: "Having a companion provides the confidence needed to stay active. Walking, visiting local shops, or preparing a meal together turns routine physical movement into an enjoyable social activity. Under the guidance of our clinical lead, we integrate mobility support with companionship, turning physical rehabilitation into a natural, uplifting part of the day."
      }
    ],
    checklistTitle: "Recognizing Signs of Social Isolation",
    checklistItems: [
      "Has your loved one stopped participating in hobbies or activities they once enjoyed?",
      "Are there noticeable changes in sleep patterns or physical energy levels?",
      "Has there been a decline in personal grooming or home cleanliness?",
      "Do telephone conversations sound less frequent, shorter, or more anxious?",
      "Are they exhibiting signs of poor nutrition or a lack of interest in food?"
    ],
    clinicalSignOff: "Reviewed and approved by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  },
  {
    id: "ot-in-care",
    title: "The Critical Role of Occupational Therapy in Community Care",
    category: "Clinical Leadership",
    date: "May 04, 2026",
    readTime: "7 min read",
    author: "Lead Occupational Therapist",
    excerpt: "How OT functional assessments, equipment provision, and rehabilitation help individuals live on their own terms.",
    sections: [
      {
        heading: "1. What is Occupational Therapy in Home Care?",
        content: "Occupational Therapy (OT) is a healthcare profession focused on enabling individuals to perform the everyday activities that give their lives meaning—referred to as 'occupations'. In domiciliary care, OT is the cornerstone of clinical rehabilitation. It goes beyond medical treatment to focus on functional capability, asking: 'What is preventing this person from safely bathing, dressing, cooking, or walking, and how can we adapt the task or environment to help them succeed?'"
      },
      {
        heading: "2. Overcoming Physical Obstacles",
        content: "An OT assessment evaluates how an individual's physical abilities interact with their home environment. By analyzing movement, balance, and spatial layouts, we identify specific adaptations that can restore independence. This may include recommending grab rails in the bathroom, installing tap turners, recommending specialized seating, or advising on step-free access. These precise, practical adjustments dramatically reduce the need for constant hands-on care, preserving personal dignity."
      },
      {
        heading: "3. Cognitive Rehabilitation and Ability Retention",
        content: "Occupational Therapy is equally vital for cognitive challenges, such as recovery from a stroke or living with dementia. We design functional cognitive rehabilitation programs that utilize task breakdown, visual prompts, and structured routines to help clients regain or preserve their daily living skills. By adapting tasks to fit a client's cognitive strengths, we help them continue participating in household routines and personal care safely."
      },
      {
        heading: "4. Collaborative Support with Families and Caregivers",
        content: "A key aspect of our OT leadership is supporting families and caregivers. We provide comprehensive training in safe moving and handling techniques, ergonomic support, and stress management strategies. This ensures that the care provided at home is not only safe for the client but also sustainable and positive for family members."
      }
    ],
    checklistTitle: "When to Request an OT Assessment",
    checklistItems: [
      "When a loved one struggles to stand up safely from a standard toilet or low chair.",
      "When managing steps or thresholds at home becomes unsafe or causes anxiety.",
      "When bathing or showering independently becomes physically difficult or brings a risk of falls.",
      "When cognitive changes make completing multi-step tasks (like making a meal) confusing.",
      "Following a stroke or major surgery where physical rehabilitation is the primary goal."
    ],
    clinicalSignOff: "Reviewed and approved by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  },
  {
    id: "choosing-provider",
    title: "Choosing a Domiciliary Care Provider Safely in the UK",
    category: "Standards & Safety",
    date: "April 29, 2026",
    readTime: "9 min read",
    author: "Compliance & Safety Director",
    excerpt: "A framework covering values-based recruitment, CQC-preparedness indicators, safeguarding checks, and service contracts.",
    sections: [
      {
        heading: "1. The Standard of Excellence",
        content: "Selecting a domiciliary care provider is one of the most important decisions a family can make. The right provider should deliver much more than basic assistance; they should be a source of safety, clinical excellence, and deep reassurance. In the UK, domiciliary care is a regulated activity. Understanding the quality indicators, safety checks, and regulatory standards is essential to making a safe, informed choice."
      },
      {
        heading: "2. Safer Recruitment and Values-Based Hiring",
        content: "A care agency is only as strong as its staff. High-quality providers enforce a rigorous recruitment pipeline. This includes mandatory Enhanced DBS checks, complete employment history gap analysis, and at least two verified professional references. Crucially, leading agencies utilize values-based interviewing to ensure that care staff possess genuine empathy, respect, and a commitment to personal dignity."
      },
      {
        heading: "3. Verifying CQC-Readiness Indicators",
        content: "When evaluating a care provider, ask about their regulatory status and governance frameworks. If they are in the pre-registration phase, like Lifewell Healthcare Ltd, ensure they are actively building their systems around the CQC's five key questions: Is the service Safe, Effective, Caring, Responsive, and Well-led? Ask to see their standard policies on safeguarding, medication audits, and clinical leadership."
      },
      {
        heading: "4. Understanding Service Level Contracts and Care Fees",
        content: "A reputable provider will always offer complete transparency regarding pricing, contract terms, and care plans. Avoid agencies that propose vague verbal agreements or have hidden surcharges. Ensure you receive a clear, written Service Level Agreement outlining visit durations, exact costs, notice periods, and a formal complaints procedure. This transparency is the foundation of a trust-based partnership."
      }
    ],
    checklistTitle: "5 Key Questions to Ask a Care Provider",
    checklistItems: [
      "What clinical leadership and oversight do you have in place for developing care plans?",
      "How do you train your care staff in safeguarding, medication safety, and dementia care?",
      "Can you provide a clear, transparent breakdown of your fees and notice periods?",
      "How do you gather feedback from clients and families to ensure quality?",
      "What is your formal process for responding to concerns or complaints?"
    ],
    clinicalSignOff: "Reviewed and approved by Ida Acquah, HCPC-registered Lead Occupational Therapist."
  }
];

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
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
                  <span className="text-brand-gold font-black uppercase tracking-widest text-xs block mb-2">Resource Library</span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-brand-blue-dark mb-4">Supporting Families, Carers & Professionals</h2>
                  <p className="text-base text-text-muted leading-relaxed font-medium max-w-4xl mb-6">
                    Welcome to the Lifewell Insights Library. Our clinical leadership team has prepared comprehensive articles, checklists, and safety guidelines to support families and healthcare professionals navigating community care. Click on any article below to read it in full.
                  </p>
                </div>
              </div>
            </section>

            {/* Blog Grid */}
            <section className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articlesData.map((topic) => (
                  <motion.div
                    key={topic.id}
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
                      {topic.excerpt}
                    </p>

                    {/* Action row */}
                    <div className="flex justify-between items-center pt-6 border-t border-gray-50 mt-auto">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-[9px] uppercase font-black tracking-widest rounded-full border border-green-100">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Full Article
                      </span>
                      <button
                        onClick={() => setSelectedArticle(topic)}
                        className="text-[10px] uppercase tracking-widest font-black text-brand-blue hover:text-brand-gold transition-premium flex items-center gap-1"
                      >
                        Read Article <ArrowRight size={12} />
                      </button>
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
          </motion.div>
        ) : (
          <motion.div
            key="reader"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container mx-auto px-6 max-w-4xl"
          >
            {/* Back Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-sm font-black text-brand-blue hover:text-brand-gold transition-premium mb-12 uppercase tracking-widest"
            >
              <ArrowLeft size={16} /> Back to Library
            </button>

            {/* Article Container */}
            <article className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100">
              {/* Category & Read Time */}
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-6">
                <span className="px-4 py-1.5 bg-brand-gold/10 text-brand-gold text-[10px] uppercase font-black tracking-widest rounded-full">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-text-muted font-medium flex items-center gap-1.5">
                  <Clock size={14} className="text-brand-gold" /> {selectedArticle.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-outfit text-brand-blue-dark font-black mb-8 leading-tight">
                {selectedArticle.title}
              </h1>

              {/* Author & Date info */}
              <div className="flex items-center gap-6 mb-12 text-sm text-text-muted">
                <div className="flex items-center gap-2 font-bold">
                  <Calendar size={16} className="text-brand-gold" /> {selectedArticle.date}
                </div>
                <div className="flex items-center gap-2 font-bold">
                  <User size={16} className="text-brand-gold" /> Written by {selectedArticle.author}
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-brand-blue-dark font-medium italic mb-12 leading-relaxed pl-4 border-l-4 border-brand-gold bg-brand-bg py-4 pr-4 rounded-r-2xl">
                &ldquo;{selectedArticle.excerpt}&rdquo;
              </p>

              {/* Sections */}
              <div className="space-y-12 mb-16">
                {selectedArticle.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-brand-blue-dark">
                      {sec.heading}
                    </h2>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed font-medium">
                      {sec.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Checklist */}
              {selectedArticle.checklistTitle && selectedArticle.checklistItems && (
                <div className="bg-brand-bg rounded-[2rem] p-8 md:p-12 border border-gray-100 mb-16 shadow-inner">
                  <h3 className="text-lg md:text-xl font-bold text-brand-blue-dark mb-6 flex items-center gap-2">
                    <Heart size={20} className="text-brand-gold" /> {selectedArticle.checklistTitle}
                  </h3>
                  <ul className="space-y-4">
                    {selectedArticle.checklistItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-text-muted font-medium leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-brand-gold/15 text-brand-gold font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sign Off */}
              <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-xs text-text-muted font-bold italic leading-relaxed text-center md:text-left">
                  🛡️ {selectedArticle.clinicalSignOff}
                </div>
                <Link href={`/contact?subject=Consultation%20on%20Insight:%20${encodeURIComponent(selectedArticle.title)}`}>
                  <Button variant="primary" className="px-6 py-3 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    Request Consultation <Send size={12} />
                  </Button>
                </Link>
              </div>
            </article>

            {/* Back Button Bottom */}
            <div className="mt-12 text-center">
              <button
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center gap-2 text-sm font-black text-brand-blue hover:text-brand-gold transition-premium uppercase tracking-widest"
              >
                <ArrowLeft size={16} /> Back to Insights Library
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
