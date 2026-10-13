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
    description: "Our visiting home care enables individuals to remain comfortable, safe, and independent in their own familiar surroundings. Whether you need a short morning call to assist with getting up and preparing breakfast, or regular calls throughout the day, we work strictly around your family's routine.",
    includes: [
      "Assistance with morning routines, washing, and getting dressed",
      "Preparation of fresh, nutritious meals and hydration reminders",
      "Safe prompting and administration of prescribed medication",
      "Light housekeeping, laundry, and maintaining a tidy living space",
      "Assistance with safe mobility and transfers around the home"
    ],
    familyNote: "We keep family members regularly updated on their loved one's appetite, wellbeing, and daily comfort.",
  },
  {
    id: "personal-care",
    title: "Dignified Personal Care",
    icon: UserRound,
    description: "Support with intimate daily tasks is delivered with the utmost discretion, patience, and warmth. We understand that accepting personal care is a vulnerable step, which is why our carers work at your pace, ensuring you remain in control of your privacy at all times.",
    includes: [
      "Gentle assistance with bathing, showering, or bed washes",
      "Morning grooming, hair care, shaving, and oral hygiene",
      "Sensitive continence management and bathroom support",
      "Skin care monitoring and pressure area prevention"
    ],
    familyNote: "Every carer is Enhanced DBS checked and trained in dignified, unhurried personal care techniques.",
  },
  {
    id: "dementia",
    title: "Dementia & Memory Support",
    icon: Brain,
    description: "Living with cognitive decline is easiest when routines are familiar and calm. We take the time to learn your loved one's personal history, favourite music, and treasured memories, reducing anxiety and disorientation through patient companionship.",
    includes: [
      "Unhurried support with morning and bedtime routines",
      "Gentle memory prompts, reminiscence, and familiar hobbies",
      "Regular encouragement with drinking fluids and warm meals",
      "Calming presence during periods of restlessness or sundowning",
      "Sensory and environmental checks to prevent confusion"
    ],
    familyNote: "Provides dependable respite so family carers can rest, knowing their relative is in gentle, experienced hands.",
  },
  {
    id: "discharge",
    title: "Hospital Discharge & Reablement",
    icon: LogOut,
    description: "The transition from hospital to home requires careful coordination. Under the guidance of our Occupational Therapy lead, we prepare your home, unpack essentials, and provide daily rehabilitative support to regain everyday mobility and prevent readmission.",
    includes: [
      "Preparing the home before arrival (heating, food stocking, clear walkways)",
      "Settling-in visit on the day of return home to unpack and ensure comfort",
      "Reablement support to restore independent cooking, washing, and mobility",
      "Liaison with hospital discharge teams, community physiotherapists, and your GP",
      "Medication verification and collection of discharge prescriptions"
    ],
    familyNote: "Substantially lowers the risk of unplanned readmission by ensuring physical recovery is supported safely.",
  },
  {
    id: "companionship",
    title: "Companionship & Social Support",
    icon: HeartHandshake,
    description: "Loneliness can take a heavy toll on health. Our companionship visits offer friendly conversation, shared cups of tea, and accompaniment on walks or visits to the high street, rebuilding social confidence and joy in daily life.",
    includes: [
      "Warm conversation, storytelling, and shared hobbies or crafts",
      "Accompanied walks in local parks, gardens, or community centres",
      "Help with reading letters, organizing correspondence, and appointments",
      "Support to attend local clubs, memory cafes, or church services"
    ],
    familyNote: "We carefully pair carers and clients based on shared interests, background, and conversational chemistry.",
  },
  {
    id: "respite-care",
    title: "Respite Support for Family Carers",
    icon: Coffee,
    description: "Caring for a relative is rewarding but physically and emotionally demanding. Our respite care allows primary carers to take scheduled breaks, attend appointments, or recharge, knowing daily care routines will continue uninterrupted.",
    includes: [
      "Seamless takeover of daily domestic and personal care routines",
      "Daytime sitting service or scheduled multi-hour visits",
      "Nutritious meal preparation and companionship while you are away",
      "Structured handovers before and after the respite period"
    ],
    familyNote: "We mirror your established family care routines so your relative feels relaxed throughout your break.",
  },
  {
    id: "rehabilitation",
    title: "Occupational Therapy Led Rehabilitation",
    icon: Stethoscope,
    description: "Supervised by Lead Occupational Therapist Ida Acquah, this service bridges clinical hospital advice and practical daily home life, helping individuals recovering from strokes, joint replacements, or falls regain functional independence.",
    includes: [
      "In-home functional living skills assessment",
      "Guided practice with daily living tasks (kitchen access, transfers, dressing)",
      "Recommendations for adaptive aids, grab rails, and home safety modifications",
      "Falls risk reduction and movement ergonomics",
      "Coordination with NHS community rehabilitation teams"
    ],
    familyNote: "Focuses on restoring what you can do for yourself, building strength and confidence step-by-step.",
  },
  {
    id: "community-access",
    title: "Community Access & Errands",
    icon: MapPin,
    description: "Staying connected to the local community is essential for emotional health. Our team assists clients with travel, shopping, and attending vital healthcare appointments with complete peace of mind.",
    includes: [
      "Accompaniment and transfer assistance to GP or hospital appointments",
      "Support with weekly food shopping, pharmacy visits, and errands",
      "Assistance attending social groups, family events, or community centres",
      "Safe walking and mobility assistance in public spaces"
    ],
    familyNote: "Our carers are trained in safe outdoor transfers and mobility, giving total reassurance while out.",
  },
  {
    id: "live-in",
    title: "Live-In Care (In Preparation)",
    icon: Sun,
    description: "For individuals requiring round-the-clock peace of mind as an alternative to moving into residential care, a dedicated care worker resides in the home to provide continuous safety, companionship, and support.",
    includes: [
      "A dedicated care worker residing in your home",
      "Round-the-clock reassurance, meal preparation, and personal care",
      "Care routines co-produced around your personal rhythm and lifestyle",
      "Ongoing clinical oversight by our Lead Occupational Therapist"
    ],
    familyNote: "We are currently developing this service in alignment with our CQC registration pathway. Enquiries welcome for forward planning.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-wider font-bold text-[#b48a3c] block mb-2">
            Northamptonshire Home Care Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2438] mb-4">
            Care shaped around your family&apos;s routine
          </h1>
          <p className="text-base text-[#4e6074] leading-relaxed">
            From daily visiting care and companionship to specialist dementia support and hospital recovery, we provide reliable, unhurried assistance to help you or your loved one live safely and comfortably at home.
          </p>
        </div>
      </section>

      {/* Anchor Navigation */}
      <section className="container mx-auto px-6 mb-14">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-2 p-2 bg-white rounded-xl border border-[#e6e5dd]">
          {servicesData.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0f2438] hover:bg-[#faf9f6] hover:text-[#b48a3c] transition-colors"
            >
              {service.title}
            </a>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="container mx-auto px-6 mb-20 flex flex-col gap-8 max-w-5xl">
        {servicesData.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              id={service.id}
              key={service.id}
              className="bg-white rounded-2xl border border-[#e6e5dd] p-7 md:p-9 shadow-sm scroll-mt-28"
            >
              {/* Title & Action */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#e6e5dd] mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center text-[#b48a3c] shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0f2438]">{service.title}</h2>
                    {service.id === "live-in" && (
                      <span className="text-[11px] text-[#b48a3c] font-semibold block mt-0.5">
                        Planned service • Register interest for forward planning
                      </span>
                    )}
                  </div>
                </div>

                <Link href={`/contact?service=${service.id}`} className="shrink-0">
                  <Button variant="outline" className="text-xs px-3.5 py-2">
                    Enquire About This Care &rarr;
                  </Button>
                </Link>
              </div>

              {/* Overview paragraph */}
              <p className="text-sm md:text-base text-[#4e6074] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* What We Assist With */}
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0f2438] mb-3">
                  What our carers assist with:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {service.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[#b48a3c] shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-[#182430] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Family Reassurance Note */}
              <div className="pt-4 border-t border-[#e6e5dd] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs text-[#536479]">
                <p>
                  <strong>Family Reassurance:</strong> {service.familyNote}
                </p>
                <Link href={`/contact?service=${service.id}`} className="text-[#0f2438] font-bold hover:text-[#b48a3c] shrink-0">
                  Arrange an assessment &rarr;
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bespoke Care Consultation Callout */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#0f2438] text-white rounded-2xl p-8 md:p-10 text-center">
          <span className="text-xs uppercase tracking-wider font-bold text-[#c89d4e] block mb-2">
            Free Care Consultation
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Not sure which level of care is right?
          </h2>
          <p className="text-white/80 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            Every family&apos;s situation is unique. Call Ida Acquah and our care coordination team for a friendly, unhurried discussion. We can visit your home to carry out a free initial assessment and advise you with complete transparency.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact">
              <Button variant="secondary" className="px-5 py-2.5 text-sm">
                Book a Free Consultation
              </Button>
            </Link>
            <a href="tel:07836681415">
              <Button variant="outline" className="px-5 py-2.5 text-sm bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#0f2438]">
                <PhoneCall size={15} /> Call 07836 681415
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
