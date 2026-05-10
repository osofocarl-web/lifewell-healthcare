"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-outfit mb-6 text-brand-blue-dark">Get in <span className="text-brand-blue">Touch</span></h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed font-medium">
          Whether you're looking for professional care for a loved one or have questions about our services, our clinically led team is here to help.
        </p>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 h-full">
              <h3 className="text-2xl font-bold mb-8 text-brand-blue-dark">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue-dark">Call Us</h5>
                    <p className="text-text-muted text-sm">07836 681815</p>
                    <p className="text-brand-gold text-xs font-bold mt-1">Available 24/7 for Emergencies</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue-dark">Email Us</h5>
                    <p className="text-text-muted text-sm">lifewellhealthcare@outlook.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue-dark">Visit Us</h5>
                    <p className="text-text-muted text-sm">37 Billing Road,<br />Northampton, NN1 5DQ</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue-dark">Office Hours</h5>
                    <p className="text-text-muted text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-text-muted text-sm">Sat - Sun: Appointment Only</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-gray-100">
                <a href="https://wa.me/447836681815" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                    <MessageCircle size={20} /> Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold mb-10 text-brand-blue-dark">Send a Message</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-brand-blue ml-2">Full Name</label>
                    <input type="text" className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main" placeholder="How should we address you?" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-brand-blue ml-2">Email Address</label>
                    <input type="email" className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main" placeholder="Where can we reach you?" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-brand-blue ml-2">Phone Number</label>
                    <input type="tel" className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main" placeholder="Optional" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm font-bold text-brand-blue ml-2">Interested Service</label>
                    <select className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main appearance-none">
                      <option>General Enquiry</option>
                      <option>Domiciliary Care</option>
                      <option>Mental Health Support</option>
                      <option>Dementia Support</option>
                      <option>Join the Team</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-brand-blue ml-2">Your Message</label>
                  <textarea rows={6} className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main resize-none" placeholder="Tell us how we can help..."></textarea>
                </div>
                <Button variant="primary" className="w-full py-5 text-lg flex items-center justify-center gap-3">
                  Send Message <Send size={20} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-6 mt-24">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 h-[400px] flex flex-col items-center justify-center text-brand-blue/20">
           <MapPin size={60} strokeWidth={1} className="mb-4" />
           <p className="font-bold uppercase tracking-[0.3em] text-sm">Interactive Map Integration</p>
        </div>
      </section>
    </div>
  );
}
