import React from "react";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-brand-blue-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <Heart className="text-brand-blue w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  LIFEWELL
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold-soft font-bold">
                  Healthcare
                </span>
              </div>
            </Link>
            <p className="text-blue-100/70 leading-relaxed">
              Supporting lives with compassion, dignity, and wellbeing. Premium UK healthcare and holistic support for your loved ones.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/447836681815"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-gold transition-premium"
              >
                <Heart size={18} />
              </a>
              <a
                href="mailto:info@lifewellhealthcare.org"
                aria-label="Email us"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-gold transition-premium"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:07836681815"
                aria-label="Call us"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-gold transition-premium"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://www.lifewellhealthcare.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="bg-white/10 p-2 rounded-full hover:bg-brand-gold transition-premium"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold-soft">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-blue-100/70">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Careers", href: "/careers" },
                { name: "Wellbeing", href: "/wellbeing" },
                { name: "Compliance", href: "/compliance" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-gold transition-premium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold-soft">Our Services</h4>
            <ul className="flex flex-col gap-4 text-blue-100/70">
              {["Domiciliary Care", "Dementia Support", "Mental Health", "Elderly Support", "Companionship", "Respite Care"].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-brand-gold transition-premium">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-brand-gold-soft">Get in Touch</h4>
            <ul className="flex flex-col gap-6 text-blue-100/70">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-gold-soft shrink-0" size={20} />
                <span>37 Billing Road,<br />Northampton, NN1 5DQ</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-gold-soft shrink-0" size={20} />
                <a href="tel:07836681815" className="hover:text-brand-gold transition-premium">07836 681815</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-gold-soft shrink-0" size={20} />
                <a href="mailto:info@lifewellhealthcare.org" className="hover:text-brand-gold transition-premium">info@lifewellhealthcare.org</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-10 text-xs text-blue-100/40 font-medium">
            <p>&copy; {new Date().getFullYear()} Lifewell Healthcare Ltd.</p>
            <p>Company No: 14638409</p>
            <p>ICO Registered: ZC026072</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-premium">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-premium">Terms of Service</Link>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-2 bg-white/5 rounded-full border border-white/10">
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-blue-100/60">Preparing for CQC-regulated operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
