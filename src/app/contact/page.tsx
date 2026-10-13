"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "e552de22-2e44-44b4-a40b-e23973d5ebea");
    formData.append("subject", `New Lifewell Care Enquiry from ${formData.get("name")}`);
    formData.append("from_name", "Lifewell Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        alert("Enquiry submission failed: " + data.message);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please check your connection or call our office directly on 07836 681415.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      
      {/* Header */}
      <section className="container mx-auto px-6 mb-12 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2.5">
            Care Consultations &amp; Enquiries
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2438] mb-4">
            Speak with our care coordination team
          </h1>
          <p className="text-base md:text-lg text-[#4e6074] leading-relaxed">
            Whether you are exploring care options for a relative, making a healthcare referral, or seeking advice on hospital discharge, we are here with friendly, transparent support.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-7 md:p-8 rounded-2xl border border-[#e6e5dd] shadow-sm flex flex-col justify-between h-full">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#0f2438] pb-3 border-b border-[#e6e5dd]">
                  Our Contact Details
                </h3>
                
                <div className="flex gap-3.5">
                  <div className="w-10 h-10 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center text-[#b48a3c] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0f2438] text-sm">Direct Phone</h5>
                    <a href="tel:07836681415" className="text-sm font-semibold text-[#0f2438] hover:text-[#b48a3c]">
                      07836 681415
                    </a>
                    <span className="text-[11px] text-[#536479] block">Calls answered 9am - 6pm</span>
                  </div>
                </div>

                <div className="flex gap-3.5 min-w-0">
                  <div className="w-10 h-10 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center text-[#b48a3c] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-bold text-[#0f2438] text-sm">Email Office</h5>
                    <a href="mailto:contact@lifewellhealthcare.org" className="text-xs font-semibold text-[#0f2438] hover:text-[#b48a3c] break-all block">
                      contact@lifewellhealthcare.org
                    </a>
                    <span className="text-[11px] text-[#536479] block">Responses within 24 hours</span>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-10 h-10 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center text-[#b48a3c] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0f2438] text-sm">Registered Office</h5>
                    <p className="text-xs text-[#4e6074] leading-relaxed">
                      64 Broadway,<br />Northampton, NN1 4SQ
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="w-10 h-10 bg-[#faf9f6] border border-[#e6e5dd] rounded-xl flex items-center justify-center text-[#b48a3c] shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[#0f2438] text-sm">Office Hours</h5>
                    <p className="text-xs text-[#4e6074]">Monday – Friday: 9:00am – 6:00pm</p>
                    <p className="text-xs text-[#4e6074]">Saturday – Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e6e5dd]">
                <a href="https://wa.me/447836681415" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="outline" className="w-full text-xs py-2.5">
                    <MessageCircle size={16} /> Chat via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-7 md:p-10 rounded-2xl border border-[#e6e5dd] shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full flex items-center justify-center text-[#166534] mx-auto mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f2438] mb-2">Thank you for your enquiry</h3>
                  <p className="text-sm text-[#4e6074] max-w-md mx-auto mb-6 leading-relaxed">
                    We have received your message. A member of our clinical and care coordination team will contact you shortly to discuss your enquiry.
                  </p>
                  <p className="text-xs text-[#536479]">
                    If your enquiry is urgent, please call us directly on <a href="tel:07836681415" className="font-bold text-[#0f2438] underline">07836 681415</a>.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6 p-4 bg-[#faf9f6] rounded-xl border border-[#e6e5dd] flex items-start gap-3">
                    <ShieldAlert size={18} className="text-[#b48a3c] shrink-0 mt-0.5" />
                    <p className="text-xs text-[#4e6074] leading-relaxed">
                      <strong>Medical Notice:</strong> Lifewell Healthcare Ltd provides planned home care services and is not an emergency medical service. In an emergency, please call <strong>999</strong> or contact NHS <strong>111</strong>.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f2438] mb-6">
                    Send an Online Care Enquiry
                  </h3>
                  
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-1.5">Your Full Name</label>
                        <input type="text" name="name" required className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none" placeholder="e.g. David Campbell" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-1.5">Email Address</label>
                        <input type="email" name="email" required className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none" placeholder="e.g. david@example.co.uk" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-1.5">Phone Number</label>
                        <input type="tel" name="phone" required className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none" placeholder="e.g. 07836 123456" />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-1.5">Enquiry Type</label>
                        <select name="referral_type" required className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none">
                          <option value="Family Enquiry">Family Enquiry for a Relative</option>
                          <option value="Self-Referral">Self-Referral (Care for Myself)</option>
                          <option value="Hospital Discharge">Hospital Discharge / Reablement</option>
                          <option value="Professional Referral">Professional / Social Worker Referral</option>
                          <option value="Careers">Careers &amp; Employment</option>
                          <option value="General">General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-1.5">Service of Primary Interest</label>
                      <select name="service" required className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none">
                        <option>Visiting Domiciliary Care</option>
                        <option>Dignified Personal Care</option>
                        <option>Dementia &amp; Memory Support</option>
                        <option>Hospital Discharge &amp; Reablement</option>
                        <option>Companionship &amp; Social Sitting</option>
                        <option>Occupational Therapy Home Assessment</option>
                        <option>Respite Care for Family Carers</option>
                        <option>Community Access &amp; Errands</option>
                        <option>General Support / Not Sure Yet</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0f2438] uppercase tracking-wider block mb-1.5">How Can We Help?</label>
                      <textarea rows={5} name="message" required className="w-full bg-[#faf9f6] border border-[#e6e5dd] rounded-xl p-3 text-sm text-[#0f2438] focus:border-[#0f2438] outline-none resize-none" placeholder="Please describe the support needed, any mobility or clinical considerations, and preferred visiting times..."></textarea>
                    </div>

                    <Button type="submit" variant="primary" className="w-full py-3.5 text-sm flex items-center justify-center gap-2" disabled={isSubmitting}>
                      {isSubmitting ? "Sending enquiry..." : "Submit Care Enquiry"} <Send size={16} />
                    </Button>

                    <p className="text-[11px] text-[#536479] text-center leading-normal">
                      We treat all enquiry details with strict clinical confidentiality in compliance with the Data Protection Act 2018 (ICO: ZC026072).
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Office Map Section */}
      <section className="container mx-auto px-6 mt-16 max-w-6xl">
        <div className="bg-white rounded-2xl overflow-hidden border border-[#e6e5dd] shadow-sm">
          <div className="p-4 bg-[#faf9f6] border-b border-[#e6e5dd] flex items-center justify-between text-xs text-[#0f2438] font-semibold">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#b48a3c]" />
              <span>Office Location: 64 Broadway, Northampton, NN1 4SQ</span>
            </div>
            <a 
              href="https://maps.google.com/?q=64+Broadway,+Northampton+NN1+4SQ" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#b48a3c] hover:underline"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
          <div className="h-[380px] w-full">
            <iframe
              src="https://maps.google.com/maps?q=64+Broadway,+Northampton+NN1+4SQ&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lifewell Healthcare Northampton Office Map"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
