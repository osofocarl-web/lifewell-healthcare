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
  ArrowRight,
  PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const servicesData = [
  {
    id: "domiciliary",
    title: "Visiting Domiciliary Care",
    icon: Home,
    whoIsItFor: "Individuals who need practical, everyday help with daily routines to remain safe, comfortable, and independent in their own home.",
    includes: [
      "Assistance with morning and bedtime routines",
      "Nutritious meal preparation and hydration support",
      "Prompting and safe assistance with prescribed medication",
      "Light household tasks, laundry, and tidy-up support",
      "Safe transfers and mobility assistance around the home"
    ],
    benefits: [
      "Stay in familiar, comfortable surroundings close to memories and pets",
      "Dedicated, familiar carers who understand personal habits",
      "Flexible call durations ranging from 30 minutes to extended day sits"
    ],
    reassurance: "We maintain close communication with family members, keeping you informed on daily wellness, appetite, and any changes in comfort.",
    dignityMessage: "Our carers are guests in your home. We provide support with discretion, good humour, and total respect for personal privacy.",
  },
  {
    id: "personal-care",
    title: "Dignified Personal Care",
    icon: UserRound,
    whoIsItFor: "Individuals requiring compassionate support with intimate daily tasks such as bathing, washing, dressing, and personal hygiene.",
    includes: [
      "Gentle assistance with bathing, showering, or washing",
      "Dressing, morning grooming, hair care, and oral hygiene",
      "Sensitive continence care and bathroom assistance",
      "Skin care checks and pressure area awareness"
    ],
    benefits: [
      "Maintains personal dignity, freshness, and comfort each day",
      "Reduces physical strain and fall risk during bathing and transfers",
      "Relieves family members of stressful, physically demanding tasks"
    ],
    reassurance: "Every member of our team is Enhanced DBS checked and trained in dignified, unhurried personal care techniques.",
    dignityMessage: "We work strictly at your own pace. Personal care is never rushed, ensuring you remain in total control of how and when care happens.",
  },
  {
    id: "dementia",
    title: "Dementia & Memory Support",
    icon: Brain,
    whoIsItFor: "Individuals living with Alzheimer's or other forms of dementia who benefit from consistent, calm, and reassuring routines at home.",
    includes: [
      "Patient, unhurried support with familiar morning routines",
      "Memory prompts, reminiscence, and gentle cognitive activities",
      "Encouragement with regular hydration and nutritious meals",
      "Calm redirection and reassurance during periods of anxiety or sundowning",
      "Home safety awareness to reduce confusion and fall risks"
    ],
    benefits: [
      "Reduces disorientation by keeping individuals in their familiar setting",
      "Builds genuine rapport through regular, consistent carer matching",
      "Offers invaluable respite and emotional reassurance for family carers"
    ],
    reassurance: "We work collaboratively with families to learn life histories, favourite music, and personal interests, tailoring visits around what brings peace and joy.",
    dignityMessage: "We always see the person, not the diagnosis. We validate feelings, protect self-worth, and celebrate retained abilities.",
  },
  {
    id: "discharge",
    title: "Hospital Discharge & Reablement",
    icon: LogOut,
    whoIsItFor: "Individuals returning home after a hospital stay or illness who need practical rehabilitation support to regain their footing safely.",
    includes: [
      "Preparation of the home before discharge (heating, food, safe pathways)",
      "Settling-in visit on arrival day to unpack and ensure comfort",
      "Reablement support to restore independent cooking, washing, and mobility",
      "Coordination with NHS ward staff, community physiotherapists, and GPs",
      "Medication verification and collection of discharge prescriptions"
    ],
    benefits: [
      "Substantially lowers the risk of emergency hospital readmission",
      "Restores confidence and physical stamina in everyday home tasks",
      "Provides family with immediate relief during a stressful hospital transition"
    ],
    reassurance: "Led by our Lead Occupational Therapist Ida Acquah, our reablement approach focuses on practical recovery so clients regain autonomy faster.",
    dignityMessage: "Our goal is to help you do things for yourself again safely, encouraging small steps of daily progress with clinical safety.",
  },
  {
    id: "companionship",
    title: "Companionship & Social Support",
    icon: HeartHandshake,
    whoIsItFor: "Older adults or individuals living alone who would welcome friendly conversation, shared hobbies, or accompaniment on outings.",
    includes: [
      "Warm, unhurried conversation, shared cups of tea, and companionship",
      "Accompanied walks in the local park, garden strolls, or high-street visits",
      "Assistance with hobbies, puzzles, reading, or craft activities",
      "Help with reading letters, correspondence, and organizing appointments",
      "Support to attend local community groups, clubs, or church gatherings"
    ],
    benefits: [
      "Counteracts loneliness and situational depression effectively",
      "Maintains cognitive vitality through stimulating conversation",
      "Provides reassurance to family members living at a distance"
    ],
    reassurance: "We carefully pair carers and clients based on shared interests, background, and conversational chemistry.",
    dignityMessage: "Companionship is based on equal human connection and mutual respect. We are here as trusted friends and dependable companions.",
  },
  {
    id: "respite-care",
    title: "Respite Support for Family Carers",
    icon: Coffee,
    whoIsItFor: "Family caregivers who need regular scheduled breaks or short-term relief to rest, recharge, or attend to personal commitments.",
    includes: [
      "Seamless takeover of daily domestic and personal care routines",
      "Daytime sitting service or scheduled multi-hour visits",
      "Nutritious meal preparation and companionship while you are away",
      "Structured handovers before and after the respite period"
    ],
    benefits: [
      "Prevents family caregiver burnout and protects physical and mental wellbeing",
      "Ensures zero disruption to your relative's familiar routines",
      "Gives complete peace of mind while you take time for yourself"
    ],
    reassurance: "We carefully mirror your existing family routine so your loved one feels secure, relaxed, and well-cared-for throughout your break.",
    dignityMessage: "We view family carers as partners. We step in with warmth, humility, and meticulous attention to your relative's comfort.",
  },
  {
    id: "rehabilitation",
    title: "Occupational Therapy Led Rehabilitation",
    icon: Stethoscope,
    whoIsItFor: "Individuals recovering from strokes, joint replacements, falls, or mobility loss who require clinically guided rehabilitation at home.",
    includes: [
      "Functional living skills assessments conducted in your home",
      "OT-guided daily activity practice (kitchen tasks, transfers, dressing)",
      "Assessment for adaptive equipment, grab rails, and mobility aids",
      "Falls risk reduction and ergonomic environment adaptations",
      "Tracking functional milestones and coordination with NHS community teams"
    ],
    benefits: [
      "Bridges the gap between clinical hospital advice and practical home life",
      "Accelerates recovery of physical independence and movement confidence",
      "Reduces dependency on long-term full care where rehabilitation is possible"
    ],
    reassurance: "Ida Acquah brings over 10 years of NHS intermediate care experience to supervise assessments and practical rehabilitative care plans.",
    dignityMessage: "We focus on what you can do, providing gentle encouragement and safe methods so you can reclaim your daily life.",
  },
  {
    id: "community-access",
    title: "Community Access & Errands",
    icon: MapPin,
    whoIsItFor: "Individuals who need reliable physical assistance to run errands, visit the shops, or attend hospital and GP appointments.",
    includes: [
      "Accompaniment and safe transport support to medical appointments",
      "Assistance with weekly food shopping, pharmacy visits, and errands",
      "Support attending family events, social clubs, or community centers",
      "Safe walking and transfer assistance in public spaces"
    ],
    benefits: [
      "Keeps individuals connected to the wider community and high street",
      "Removes anxiety around negotiating transport and busy public areas",
      "Ensures important healthcare appointments are attended punctually"
    ],
    reassurance: "Our carers are trained in safe outdoor mobility and transfer support, keeping clients safe and confident at all times.",
    dignityMessage: "Staying part of your local community is essential to wellbeing. We help you stay out and about with dignity.",
  },
  {
    id: "live-in",
    title: "Live-In Care (In Preparation)",
    icon: Sun,
    whoIsItFor: "Individuals who require round-the-clock reassurance and 24-hour presence in their home as an alternative to moving into a care home.",
    includes: [
      "A dedicated, professional care worker living in your home",
      "Round-the-clock presence for safety, companionship, and support",
      "Complete management of household meals, light housekeeping, and routines",
      "Regular clinical oversight and family coordination"
    ],
    benefits: [
      "Allows individuals to stay in their beloved family home for life",
      "Continuity of one-to-one attention that residential homes cannot match",
      "Reassurance for family knowing their loved one is never alone"
    ],
    reassurance: "We are developing this service in alignment with our CQC registration pathway. Please get in touch to discuss forward planning.",
    dignityMessage: "A live-in service co-produced around your personal rhythm, dietary choices, and home traditions.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2.5">
            Home Care &amp; Support Services • Northamptonshire
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2438] mb-4">
            Care shaped around your family&apos;s routine
          </h1>
          <p className="text-base md:text-lg text-[#4e6074] leading-relaxed">
            From daily visiting care and companionship to specialist dementia support and hospital recovery, we provide reliable, unhurried assistance to help you or your loved one live safely and comfortably at home.
          </p>
        </div>
      </section>

      {/* Anchor Navigation */}
      <section className="container mx-auto px-6 mb-14">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 p-2.5 bg-white rounded-xl border border-[#e6e5dd] shadow-sm">
          {servicesData.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#0f2438] hover:bg-[#faf9f6] hover:text-[#b48a3c] transition-colors"
            >
              {service.title}
            </a>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 mb-20 flex flex-col gap-10 max-w-5xl">
        {servicesData.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              id={service.id}
              key={service.id}
              className="bg-white rounded-2xl border border-[#e6e5dd] p-7 md:p-10 shadow-sm scroll-mt-28"
            >
              {/* Title Strip */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e6e5dd] mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center text-[#b48a3c] shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0f2438]">{service.title}</h2>
                    {service.id === "live-in" && (
                      <span className="inline-block px-2.5 py-0.5 bg-[#fbf7ee] text-[#b48a3c] border border-[#e6d8b5] text-[10px] uppercase font-bold tracking-wider rounded-md mt-1">
                        Service in Preparation
                      </span>
                    )}
                  </div>
                </div>

                <Link href={`/contact?service=${service.id}`} className="shrink-0">
                  <Button variant="outline" className="text-xs px-4 py-2">
                    Enquire About This Care &rarr;
                  </Button>
                </Link>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Left Column: Who & What */}
                <div>
                  <div className="mb-6">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#b48a3c] block mb-2">
                      Who this is for
                    </span>
                    <p className="text-[#4e6074] text-sm md:text-base leading-relaxed">
                      {service.whoIsItFor}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#b48a3c] block mb-3">
                      What our support includes
                    </span>
                    <div className="space-y-2.5">
                      {service.includes.map((item, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-[#b48a3c] shrink-0 mt-0.5" />
                          <span className="text-xs md:text-sm text-[#182430] leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Benefits, Reassurance & Dignity */}
                <div className="border-t lg:border-t-0 lg:border-l border-[#e6e5dd] pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#b48a3c] block mb-2">
                      Key family benefits
                    </span>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="text-xs md:text-sm text-[#4e6074] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0f2438] shrink-0 mt-2" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e6e5dd]">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#0f2438] block mb-1">
                      Family peace of mind
                    </span>
                    <p className="text-xs text-[#4e6074] leading-relaxed">
                      {service.reassurance}
                    </p>
                  </div>

                  <div className="text-xs text-[#536479] italic">
                    &ldquo;{service.dignityMessage}&rdquo;
                  </div>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-5 border-t border-[#e6e5dd] text-xs text-[#4e6074]">
                <span>All care visits planned in accordance with professional clinical standards.</span>
                <Link href={`/contact?service=${service.id}`} className="font-semibold text-[#0f2438] hover:text-[#b48a3c] flex items-center gap-1">
                  Start an assessment enquiry <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bespoke Care Consultation Callout */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#0f2438] text-white rounded-2xl p-8 md:p-12 text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2.5">
            Free Care Consultation
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Not sure which level of care is needed?
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Every family&apos;s situation is unique. Call Ida Acquah and our care coordination team for a friendly, unhurried discussion. We can visit your home to carry out a free initial assessment and advise you with complete transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" className="px-6 py-3 text-sm">
                Book a Free Consultation
              </Button>
            </Link>
            <a href="tel:07836681415">
              <Button variant="outline" className="px-6 py-3 text-sm bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#0f2438]">
                <PhoneCall size={16} /> Call 07836 681415
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
