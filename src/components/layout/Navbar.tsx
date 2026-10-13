"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ChevronDown, Phone, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";

interface DropdownItem {
  title: string;
  description: string;
  href: string;
}

const servicesDropdown: DropdownItem[] = [
  { title: "Domiciliary Care", description: "Personal care and practical support at home", href: "/services#domiciliary" },
  { title: "Dementia Support", description: "Gentle, structured support for memory and independence", href: "/services#dementia" },
  { title: "Mental Wellbeing", description: "Emotional support and confidence-building", href: "/wellbeing" },
  { title: "Hospital Discharge", description: "Support to return home safely after hospital", href: "/services#discharge" },
  { title: "Companionship", description: "Reducing isolation through meaningful connection", href: "/services#companionship" },
];

const careersDropdown: DropdownItem[] = [
  { title: "Care Workers", description: "Join our compassionate home care team", href: "/careers#roles" },
  { title: "Support Workers", description: "Help people live with confidence and dignity", href: "/careers#roles" },
  { title: "Clinical Roles", description: "OT-led care, assessments and wellbeing support", href: "/careers#roles" },
  { title: "Training & Development", description: "Grow within a values-led organisation", href: "/careers#training" },
];

const complianceDropdown: DropdownItem[] = [
  { title: "CQC Preparation", description: "Building systems around safety and quality", href: "/compliance#cqc" },
  { title: "Safeguarding", description: "Protecting adults through clear reporting and prevention", href: "/compliance#safeguarding" },
  { title: "Quality Assurance", description: "Audits, feedback and continuous improvement", href: "/compliance#quality" },
  { title: "Safer Recruitment", description: "Values-based hiring and background checks", href: "/compliance#recruitment" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", dropdown: servicesDropdown },
  { name: "Wellbeing", href: "/wellbeing" },
  { name: "Careers", href: "/careers", dropdown: careersDropdown },
  { name: "Compliance", href: "/compliance", dropdown: complianceDropdown },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Clinical & Contact Bar */}
      <div className="bg-[#0f2438] text-white text-xs py-2 px-6 border-b border-white/10 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <MapPin size={13} className="text-[#b48a3c]" />
              <span>64 Broadway, Northampton, NN1 4SQ</span>
            </div>
            <span className="text-white/30">|</span>
            <div className="flex items-center gap-2 text-white/80">
              <ShieldCheck size={13} className="text-[#b48a3c]" />
              <span>HCPC Registered Occupational Therapy Leadership</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">Family Enquiries &amp; Referrals:</span>
            <a href="tel:07836681415" className="font-bold text-white hover:text-[#b48a3c] transition-colors flex items-center gap-1.5">
              <Phone size={13} /> 07836 681415
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#e6e5dd] shadow-sm py-3.5">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0f2438] flex items-center justify-center text-white transition-colors group-hover:bg-[#1b3a56]">
              <Heart size={20} className="text-[#b48a3c]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0f2438] leading-tight">
                LIFEWELL
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#b48a3c] font-bold">
                Healthcare Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.name} className="relative group py-2">
                    <button
                      className={`flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[#b48a3c] outline-none ${
                        pathname.startsWith(link.href) ? "text-[#b48a3c]" : "text-[#182430]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 opacity-60" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-white rounded-xl shadow-lg border border-[#e6e5dd] p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="flex flex-col gap-1">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className="p-2.5 rounded-lg hover:bg-[#faf9f6] transition-colors"
                          >
                            <span className="text-sm font-semibold text-[#0f2438] block">{sub.title}</span>
                            <span className="text-xs text-[#536479] mt-0.5 block">{sub.description}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-[#b48a3c] ${
                    pathname === link.href ? "text-[#b48a3c]" : "text-[#182430]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contact">
              <Button variant="primary" className="py-2.5 px-5 text-sm">
                Request Care
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#0f2438] hover:text-[#b48a3c]"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-[#e6e5dd] px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold block py-1 ${
                    pathname === link.href ? "text-[#b48a3c]" : "text-[#0f2438]"
                  }`}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-[#e6e5dd]">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="text-xs text-[#536479] py-0.5 block hover:text-[#b48a3c]"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-[#e6e5dd] flex flex-col gap-3">
              <a href="tel:07836681415" className="text-sm font-bold text-[#0f2438] flex items-center gap-2">
                <Phone size={16} className="text-[#b48a3c]" /> 07836 681415
              </a>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full justify-center">
                  Request Care Assessment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
