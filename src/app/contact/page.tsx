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
    formData.append("subject", `New Lifewell Enquiry from ${formData.get("name")}`);
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
      alert("Something went wrong. Please check your network and try again, or call us directly at 07836 681415.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-bg min-h-screen pt-4 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <span className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs mb-6 block">Direct Consultation</span>
        <h1 className="text-5xl md:text-6xl font-outfit mb-6 text-brand-blue-dark">Get in <span className="text-brand-blue">Touch</span></h1>
        <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed font-medium">
          Whether you are looking for professional care for a loved one, making a professional referral, or exploring career opportunities, our team is here to support you.
        </p>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 h-full flex flex-col justify-between">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold mb-4 text-brand-blue-dark">Contact Information</h3>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue-dark">Call Us</h5>
                    <p className="text-text-muted text-sm font-semibold">07836 681415</p>
                    <p className="text-brand-gold text-[10px] font-black uppercase tracking-widest mt-1">Care & Wellbeing Support</p>
                  </div>
                </div>

                <div className="flex gap-4 min-w-0">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <h5 className="font-bold text-brand-blue-dark">Email Us</h5>
                    <p className="text-text-muted text-sm break-all">
                      <a href="mailto:contact@lifewellhealthcare.org" className="hover:text-brand-gold transition-premium font-bold break-all">contact@lifewellhealthcare.org</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue-dark">Visit Us</h5>
                    <p className="text-text-muted text-sm leading-relaxed">
                      37 Billing Road,<br />Northampton, NN1 5DQ
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-blue-dark">Office Hours</h5>
                    <p className="text-text-muted text-sm font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-text-muted text-sm font-medium">Sat - Sun: Appointment Only</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <a href="https://wa.me/447836681415" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white rounded-2xl py-4 font-bold">
                    <MessageCircle size={20} /> Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 lg:p-16 rounded-[2.5rem] shadow-xl border border-gray-100 min-h-[550px] flex flex-col justify-center">
              {isSubmitted ? (
                <div className="text-center flex flex-col items-center justify-center py-8">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-8 border border-green-100 shadow-sm">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-outfit text-brand-blue-dark font-bold mb-4">Message Sent Successfully</h3>
                  <p className="text-lg text-text-muted leading-relaxed max-w-lg mb-8 font-medium">
                    Thank you for contacting Lifewell Healthcare. Our team will review your enquiry and respond with care, confidentiality, and professionalism. We aim to respond to enquiries as promptly as possible during working hours.
                  </p>
                  <div className="bg-brand-bg border border-gray-100 rounded-2xl p-6 max-w-md w-full">
                    <span className="text-[10px] text-brand-gold uppercase font-black tracking-widest block mb-2">Support & Enquiries Line</span>
                    <a href="tel:07836681415" className="text-brand-blue-dark font-black text-xl hover:text-brand-gold transition-premium block">07836 681415</a>
                    <span className="text-[10px] text-text-muted block mt-2">Speak with our team about the right support for you or your loved one.</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8 flex items-start gap-4 p-5 bg-brand-bg rounded-2xl border border-gray-100">
                    <ShieldAlert size={24} className="text-brand-gold shrink-0 mt-1" />
                    <div>
                      <span className="text-[10px] text-brand-gold uppercase font-black tracking-widest block mb-1">Emergency Medical Notice</span>
                      <p className="text-xs text-text-muted leading-relaxed font-semibold">
                        Lifewell Healthcare Ltd is not an emergency service. If someone is in immediate danger or requires urgent medical help, please call <strong className="text-brand-blue-dark">999</strong> or contact NHS <strong className="text-brand-blue-dark">111</strong> immediately.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-8 text-brand-blue-dark">Send a Message</h3>
                  
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                        <label className="text-sm font-black text-brand-blue ml-2 uppercase tracking-widest">Full Name</label>
                        <input type="text" name="name" required className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main font-medium" placeholder="Your full name" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-sm font-black text-brand-blue ml-2 uppercase tracking-widest">Email Address</label>
                        <input type="email" name="email" required className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main font-medium" placeholder="Your email address" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                        <label className="text-sm font-black text-brand-blue ml-2 uppercase tracking-widest">Phone Number</label>
                        <input type="tel" name="phone" required className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main font-medium" placeholder="Best number for our team to contact you" />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-sm font-black text-brand-blue ml-2 uppercase tracking-widest">Enquiry / Referral Type</label>
                        <select name="referral_type" required className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main font-bold appearance-none">
                          <option value="">Self-referral, family enquiry, professional referral, careers, general enquiry</option>
                          <option>Self-referral</option>
                          <option>Family enquiry</option>
                          <option>Professional referral</option>
                          <option>Careers</option>
                          <option>General enquiry</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-black text-brand-blue ml-2 uppercase tracking-widest">Select Type of Support</label>
                      <select name="service" required className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main font-bold appearance-none">
                        <option value="">Select the type of support you are enquiring about</option>
                        <option>Domiciliary Care</option>
                        <option>Personal Care</option>
                        <option>Dementia Support</option>
                        <option>Mental Health & Wellbeing</option>
                        <option>Companionship</option>
                        <option>Hospital Discharge Support</option>
                        <option>Rehabilitation Assistance</option>
                        <option>Community Access</option>
                        <option>Respite Care</option>
                        <option>Future Live-In Care</option>
                        <option>General / Other Support</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-3">
                      <label className="text-sm font-black text-brand-blue ml-2 uppercase tracking-widest">Your Enquiry</label>
                      <textarea rows={6} name="message" required className="bg-brand-bg border-0 rounded-2xl p-5 focus:ring-2 focus:ring-brand-gold outline-none text-text-main resize-none font-medium" placeholder="Please tell us how Lifewell Healthcare can support you"></textarea>
                    </div>

                    <Button type="submit" variant="primary" className="w-full py-5 text-xl flex items-center justify-center gap-3 font-bold" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"} <Send size={20} />
                    </Button>

                    <p className="text-[11px] text-text-muted text-center leading-normal font-medium mt-4">
                      * By submitting, you agree to our privacy guidelines. We treat all personal and medical referral information with strict clinical confidentiality.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-6 mt-24">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-gray-100 h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2454.606828555239!2d-0.8876406233496355!3d52.239328571991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48770ed4293f773f%3A0x6339f417e813f36a!2s37%20Billing%20Rd%2C%20Northampton%20NN1%205DQ%2C%20UK!5e0!3m2!1sen!2sus!4v1715760000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lifewell Healthcare Northampton Office"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
