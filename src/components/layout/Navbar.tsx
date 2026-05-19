"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-premium ${
        scrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-100/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-blue p-2 rounded-lg group-hover:bg-brand-gold transition-premium">
            <Heart className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-brand-blue leading-none">
              LIFEWELL
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold">
              Healthcare
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.name} className="relative group py-2">
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-premium hover:text-brand-gold outline-none ${
                      pathname.startsWith(link.href) ? "text-brand-gold" : "text-brand-blue"
                    }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[340px] bg-white rounded-2xl shadow-xl border border-gray-100/50 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 origin-top z-50">
                    <div className="flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="flex flex-col p-3 rounded-xl hover:bg-brand-bg transition-premium group/item"
                        >
                          <span className="text-sm font-bold text-brand-blue-dark group-hover/item:text-brand-blue">
                            {item.title}
                          </span>
                          <span className="text-xs text-text-muted mt-0.5 leading-normal">
                            {item.description}
                          </span>
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
                className={`text-sm font-medium transition-premium hover:text-brand-gold ${
                  pathname === link.href ? "text-brand-gold" : "text-brand-blue"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href="/contact">
            <Button variant="primary" className="text-sm px-5 py-2">
              Request Care
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-brand-blue"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-1">
                  {link.dropdown ? (
                    <>
                      <span className="text-xs uppercase tracking-wider font-extrabold text-brand-gold mt-1 px-1">
                        {link.name}
                      </span>
                      <div className="flex flex-col pl-4 border-l border-gray-100 gap-3 mt-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex flex-col group py-1"
                          >
                            <span className="text-sm font-bold text-brand-blue-dark active:text-brand-blue">
                              {item.title}
                            </span>
                            <span className="text-xs text-text-muted leading-normal">
                              {item.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-bold py-1 ${
                        pathname === link.href ? "text-brand-gold" : "text-brand-blue"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full mt-2">
                  Request Care
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
