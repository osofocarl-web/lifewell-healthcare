"use client";

import React from "react";
import Link from "next/link";
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
  Sun,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const servicesData = [
  {
    id: "domiciliary",
    title: "Domiciliary Care",
    icon: Home,
    whoIsItFor: "Individuals who need practical help with everyday tasks to remain safe, comfortable, and independent in their own homes.",
    includes: [
      "Assistance with morning and evening routines",
      "Light housekeeping, laundry, and meal preparation",
      "Medication reminders and safe management assistance",
      "Support with daily mobility and safe transfers"
    ],
    benefits: [
      "Maintain the comfort and safety of your own home",
      "One-on-one tailored attention from consistent care staff",
      "Safe, structured daily routines that prevent isolation"
    ],
    reassurance: "We work closely with family members to establish transparent communication channels, providing regular check-ins and updates on their loved one's wellness.",
    dignityMessage: "Our staff are trained to work in your home as guests, delivering help with absolute discretion, respect for your privacy, and personal choice.",
  },
  {
    id: "personal-care",
    title: "Personal Care",
    icon: UserRound,
    whoIsItFor: "Individuals requiring support with highly private tasks such as bathing, dressing, grooming, and continence care.",
    includes: [
      "Bathing, showering, and hair washing",
      "Assistance with dressing, grooming, and oral hygiene",
      "Continence management and dignified personal care support",
      "Skin care and pressure sore prevention awareness"
    ],
    benefits: [
      "Restores physical hygiene and personal self-esteem",
      "Reduces infection risks through routine physical hygiene support",
      "Empowers individuals to face the day with physical comfort"
    ],
    reassurance: "Every member of our team is fully vetted and values-screened, ensuring that highly personal tasks are performed only by caregivers who display deep empathy and professionalism.",
    dignityMessage: "Dignity is our core operating principle. We ensure that personal care is never rushed, allowing individuals to maintain control over their choices at all times.",
  },
  {
    id: "dementia",
    title: "Dementia Support",
    icon: Brain,
    whoIsItFor: "Individuals diagnosed with Alzheimer's or other forms of cognitive decline, who require familiar, structured support to live safely.",
    includes: [
      "Cognitive stimulation activities and memory support",
      "Gentle reassurance and positive behavior reinforcement",
      "Establishing safe home environments to prevent wandering",
      "Assistance with maintaining healthy eating and hydration"
    ],
    benefits: [
      "Sustains cognitive function through tailored engagement",
      "Reduces anxiety and confusion through routine consistency",
      "Prevents dangerous wandering or household accidents"
    ],
    reassurance: "We understand that dementia affects the entire family. We offer support sessions and educational resources for primary carers, ensuring they never feel isolated in this journey.",
    dignityMessage: "We see the person behind the diagnosis. Our dementia support is based on active listening, validating feelings, and celebrating retained abilities.",
  },
  {
    id: "mental-health",
    title: "Mental Health & Emotional Wellbeing",
    icon: Smile,
    whoIsItFor: "Individuals managing depression, anxiety, or emotional recovery who need structured companionship, confidence-building, and therapeutic support.",
    includes: [
      "Compassionate, active listening and emotional support",
      "Confidence-building and guided goal-setting",
      "Support in establishing healthy daily habits and routines",
      "Co-producing wellness plans with clinical and community teams"
    ],
    benefits: [
      "Reduces isolation and restores social self-confidence",
      "Encourages routine stability and proactive self-care",
      "Builds emotional resilience in a non-judgmental environment"
    ],
    reassurance: "We collaborate closely with mental health coordinators and families, ensuring that our visits align with and reinforce broader therapeutic goals.",
    dignityMessage: "We approach mental health with profound sensitivity, respect for personal boundaries, and absolute confidentiality.",
  },
  {
    id: "companionship",
    title: "Companionship & Social Connection",
    icon: HeartHandshake,
    whoIsItFor: "Older adults or individuals living alone who are at risk of loneliness and desire meaningful connection, conversation, and shared activities.",
    includes: [
      "Shared conversations, reading, and storytelling",
      "Assistance with hobbies, puzzles, and creative crafts",
      "Accompaniment on gentle walks or local community outings",
      "Help with reading mail and keeping in touch with friends"
    ],
    benefits: [
      "Significantly reduces isolation and situational depression",
      "Keeps the mind active through shared cognitive tasks",
      "Restores joy and connection through human friendship"
    ],
    reassurance: "We perform careful interest-matching, ensuring that your companion caregiver shares similar passions, background, or conversational preferences.",
    dignityMessage: "We honor your stories and life experience. Our companionship is built on mutual respect and genuine, heart-to-heart equality.",
  },
  {
    id: "discharge",
    title: "Hospital Discharge Support",
    icon: LogOut,
    whoIsItFor: "Individuals returning home after a hospital stay who require immediate support to manage their recovery safely and prevent re-admission.",
    includes: [
      "Pre-discharge home environment safety checks",
      "Settling-in support, including food stocking and warm welcome",
      "Immediate assistance with mobility and medication pickup",
      "Liaison with hospital discharge teams and primary care GP"
    ],
    benefits: [
      "Drastically reduces the risk of unplanned hospital re-admission",
      "Ensures the physical space is immediately safe for recovery",
      "Relieves families of sudden and complex care logistics"
    ],
    reassurance: "Our teams coordinate directly with NHS intermediate teams and ward managers to ensure care starts the precise moment you step through your front door.",
    dignityMessage: "We aim to make your return home as comfortable and stress-free as possible, ensuring you feel completely secure and supported.",
  },
  {
    id: "rehabilitation",
    title: "Rehabilitation Assistance",
    icon: Stethoscope,
    whoIsItFor: "Individuals recovering from strokes, fractures, or major surgery who need Occupational Therapy-guided physical and functional reinforcement.",
    includes: [
      "Assistance with therapeutic physical exercises",
      "OT-guided training in daily living tasks and functional mobility",
      "Safe introduction of adaptive aids and grab rails",
      "Tracking and celebrating functional progress over time"
    ],
    benefits: [
      "Accelerates physical strength and range of motion",
      "Builds lasting confidence in performing self-care independently",
      "Maximizes natural ability through targeted goal-tracking"
    ],
    reassurance: "Led by our Lead Occupational Therapist Ida Acquah, our rehabilitation care translates clinical advice into practical, safe, daily actions in your home.",
    dignityMessage: "We focus on what you can do, empowering you to reclaim your independence step-by-step with safety and confidence.",
  },
  {
    id: "community-access",
    title: "Community Access & Integration",
    icon: MapPin,
    whoIsItFor: "Individuals who need reliable physical assistance to attend appointments, visit social centers, or engage in civic life.",
    includes: [
      "Accompaniment and safe transport to medical appointments",
      "Support with grocery shopping and local high street errands",
      "Assistance attending local support groups or community hubs",
      "Encouraging active engagement in spiritual or faith gatherings"
    ],
    benefits: [
      "Combats physical isolation by keeping community doors open",
      "Ensures vital health and social appointments are never missed",
      "Re-integrates individuals into familiar social settings"
    ],
    reassurance: "Our staff are fully trained in travel safety and transfer techniques, giving you and your family total confidence while out in public.",
    dignityMessage: "We facilitate your active inclusion in society, ensuring you can participate in public life with self-esteem and ease.",
  },
  {
    id: "respite-care",
    title: "Respite Care & Carer Support",
    icon: Coffee,
    whoIsItFor: "Family caregivers who need a temporary break to rest, recharge, or attend to personal commitments, knowing their relative is safe.",
    includes: [
      "Seamless takeover of existing domestic care routines",
      "Full professional coverage of personal care and medications",
      "Continual reassurance and emergency response availability",
      "Structured handovers before and after the respite period"
    ],
    benefits: [
      "Allows primary carers to avoid burnout and rest deeply",
      "Ensures the client experiences zero disruption in care quality",
      "Provides peace of mind with vetted, professional caregivers"
    ],
    reassurance: "We respect your established care routines and family boundaries, committing to mirror them exactly so your relative feels comfortable in your absence.",
    dignityMessage: "We step in with humility and absolute respect, ensuring that your relative's daily preferences and autonomy are maintained intact.",
  },
  {
    id: "live-in",
    title: "Future Live-In Care",
    icon: Sun,
    whoIsItFor: "Individuals who require round-the-clock peace of mind and live-in assistance, but prefer to remain in their own home rather than move to residential care.",
    includes: [
      "A dedicated, professional caregiver residing in your home",
      "Continuous 24-hour presence for safety and daily assistance",
      "Total management of nutrition, medication, and household care",
      "Ongoing clinical oversight by our Lead Occupational Therapist"
    ],
    benefits: [
      "Complete, 24/7 security and assistance in a familiar place",
      "A highly cost-effective and dignified alternative to care homes",
      "Deep personal companionship and consistent clinical supervision"
    ],
    reassurance: "We are currently designed around professional governance and are preparing for CQC registration to expand our capability. Register your interest to be notified as these services develop.",
    dignityMessage: "We co-create a live-in care routine that completely revolves around your personal rhythm, life choices, and physical comfort.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our Professional Suite</span>
          <h1 className="text-6xl md:text-8xl font-outfit mb-10 text-brand-blue-dark leading-tight">World-Class <span className="text-brand-blue">Healthcare Services</span></h1>
          <p className="text-xl text-text-muted max-w-4xl mx-auto leading-relaxed font-medium">
            Comprehensive, compassionate, and professional healthcare solutions tailored to every stage of life. We bridge clinical excellence with the emotional warmth of person-centred support.
          </p>
        </motion.div>
      </section>

      {/* Anchor Navigation */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-3 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm">
          {servicesData.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="px-4 py-2 rounded-xl text-xs font-bold text-brand-blue hover:bg-brand-gold hover:text-white transition-premium"
            >
              {service.title}
            </a>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 mb-32 flex flex-col gap-16">
        {servicesData.map((service, i) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              id={service.id}
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-[3rem] shadow-sm border border-gray-100 p-8 lg:p-16 relative overflow-hidden"
            >
              {/* Decorative background icon */}
              <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 text-gray-50/50 -z-0 pointer-events-none">
                <IconComponent size={240} />
              </div>

              <div className="relative z-10">
                {/* Title Strip */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-blue">
                    <IconComponent size={28} />
                  </div>
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-brand-blue-dark">{service.title}</h2>
                    {service.id === "live-in" && (
                      <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] uppercase font-black tracking-widest rounded-full mt-1">Preparing to Launch</span>
                    )}
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
                  {/* Left Column: Who & What */}
                  <div>
                    <div className="mb-6">
                      <span className="text-[10px] uppercase tracking-widest font-black text-brand-gold block mb-2">Who It Is For</span>
                      <p className="text-text-muted text-base leading-relaxed font-medium">{service.whoIsItFor}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-brand-gold block mb-3">What Our Support Includes</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.includes.map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                            <span className="text-xs text-text-muted leading-relaxed font-bold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Benefits, Reassurance & Dignity */}
                  <div className="border-t lg:border-t-0 lg:border-l border-gray-100 pt-8 lg:pt-0 lg:pl-12 flex flex-col gap-6">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-brand-gold block mb-2">Key Health & Daily Benefits</span>
                      <ul className="list-disc pl-4 text-xs text-text-muted space-y-2 leading-relaxed font-medium">
                        {service.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-brand-gold block mb-1">Family Reassurance</span>
                      <p className="text-xs text-text-muted leading-relaxed font-medium">{service.reassurance}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-black text-brand-gold block mb-1">Our Dignity & Safety Standard</span>
                      <p className="text-xs text-text-muted leading-relaxed font-medium">{service.dignityMessage}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-100">
                  <p className="text-xs text-text-muted font-medium">
                    * Committed to quality, safety and dignity under governance-led planning.
                  </p>
                  <Link href={`/contact?service=${service.id}`}>
                    <Button variant="primary" className="px-6 py-3 text-sm flex items-center gap-2">
                      Speak With Our Team <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Bespoke Care CTA */}
      <section className="bg-section-soft py-32 border-y border-brand-blue/5">
        <div className="container mx-auto px-6">
          <div className="bg-brand-blue-dark rounded-[5rem] p-16 lg:p-28 text-white text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,45,89,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-transparent to-brand-gold/10 opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-outfit mb-8 leading-tight">Need a Bespoke Care Plan?</h2>
              <p className="text-blue-100/70 text-2xl mb-14 max-w-3xl mx-auto font-medium leading-relaxed">
                Every individual is unique. We provide comprehensive consultations to design a care package that perfectly aligns with your family&apos;s specific needs and clinical requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact">
                  <Button variant="secondary" className="px-12 py-6 text-xl shadow-2xl">
                    Speak With Our Team
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="px-12 py-6 text-xl border-white/40 text-white hover:bg-white hover:text-brand-blue">
                    Start a Care Enquiry
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
