import React from "react";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0a1b2c] text-white pt-16 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="bg-white/10 p-2 rounded-xl text-white">
                <Heart className="w-5 h-5 text-[#c89d4e]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white leading-tight">
                  LIFEWELL
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#c89d4e] font-bold">
                  Healthcare Ltd
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Providing dependable, unhurried visiting care, dementia support, and Occupational Therapy rehabilitation across Northamptonshire.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/447836681415"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-colors"
              >
                <Heart size={15} />
              </a>
              <a
                href="mailto:contact@lifewellhealthcare.org"
                aria-label="Email"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-colors"
              >
                <Mail size={15} />
              </a>
              <a
                href="tel:07836681415"
                aria-label="Phone"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-colors"
              >
                <Phone size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-[#c89d4e] uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {[
                { name: "Home", href: "/" },
                { name: "About Our Practice", href: "/about" },
                { name: "Care Services", href: "/services" },
                { name: "Community Wellbeing", href: "/wellbeing" },
                { name: "Care Careers", href: "/careers" },
                { name: "Governance & Safety", href: "/compliance" },
                { name: "Care Guides & Resources", href: "/blog" },
                { name: "Contact & Referrals", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-[#c89d4e] uppercase tracking-wider">Our Services</h4>
            <ul className="flex flex-col gap-2.5 text-sm text-white/70">
              {[
                { name: "Visiting Domiciliary Care", href: "/services#domiciliary" },
                { name: "Dignified Personal Care", href: "/services#personal-care" },
                { name: "Dementia & Memory Support", href: "/services#dementia" },
                { name: "Hospital Discharge Recovery", href: "/services#discharge" },
                { name: "Companionship & Sitting", href: "/services#companionship" },
                { name: "OT Rehabilitation Support", href: "/services#rehabilitation" },
                { name: "Respite for Family Carers", href: "/services#respite-care" }
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-[#c89d4e] uppercase tracking-wider">Registered Office</h4>
            <ul className="flex flex-col gap-3.5 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="text-[#c89d4e] shrink-0 mt-0.5" size={17} />
                <span>64 Broadway,<br />Northampton, NN1 4SQ</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="text-[#c89d4e] shrink-0" size={17} />
                <a href="tel:07836681415" className="hover:text-white transition-colors font-semibold text-white">
                  07836 681415
                </a>
              </li>
              <li className="flex items-center gap-2.5 min-w-0">
                <Mail className="text-[#c89d4e] shrink-0" size={17} />
                <a href="mailto:contact@lifewellhealthcare.org" className="hover:text-white transition-colors break-all">
                  contact@lifewellhealthcare.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical / Safety Notice */}
        <div className="mb-8 p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-white/60 leading-relaxed max-w-4xl">
          <strong className="text-white">Emergency Notice:</strong> Lifewell Healthcare Ltd provides planned community home care. If someone is in immediate medical danger, please call <strong>999</strong> or contact NHS <strong>111</strong>.
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <span>&copy; {new Date().getFullYear()} Lifewell Healthcare Ltd</span>
            <span>Company No: 14638409</span>
            <span>ICO: ZC026072</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="text-white/60 text-xs">
            Preparing for CQC-regulated operations • Health and Social Care Act 2008
          </div>
        </div>
      </div>
    </footer>
  );
};
