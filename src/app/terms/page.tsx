import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Lifewell Healthcare Ltd",
  description: "Terms and conditions of website use and care enquiries for Lifewell Healthcare Ltd, Northampton.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen py-10 md:py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-[#0f2438] hover:text-[#b48a3c] mb-8">
          <ArrowLeft size={16} /> Back to Homepage
        </Link>

        <article className="bg-white rounded-2xl border border-[#e6e5dd] p-8 md:p-12 shadow-sm">
          <div className="pb-6 border-b border-[#e6e5dd] mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#b48a3c] block mb-2">
              Website &amp; Services Terms
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2438] mb-3">
              Terms of Service
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#536479]">
              <span>Lifewell Healthcare Ltd</span>
              <span>•</span>
              <span>Company Registration: 14638409</span>
              <span>•</span>
              <span>Last Updated: October 2026</span>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-[#4e6074] leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website ([lifewellhealthcare.org](https://www.lifewellhealthcare.org)), you agree to be bound by these Terms of Service and all applicable laws and regulations of England and Wales. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">2. Company Information</h2>
              <p>
                This website is operated by <strong>Lifewell Healthcare Ltd</strong>, a private limited company registered in England and Wales under Company Number <strong>14638409</strong>, with its registered office at:
              </p>
              <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e6e5dd] my-3 text-xs md:text-sm text-[#0f2438]">
                <strong>64 Broadway, Northampton, NN1 4SQ</strong><br />
                Telephone: 07836 681415<br />
                Email: <a href="mailto:contact@lifewellhealthcare.org" className="underline font-semibold">contact@lifewellhealthcare.org</a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">3. Medical &amp; Emergency Disclaimer</h2>
              <p>
                The information provided on this website is for general educational and informational guidance regarding home care, reablement, and wellbeing support. It is not intended as medical advice or as a substitute for professional clinical diagnosis.
              </p>
              <div className="p-4 bg-[#faf9f6] rounded-xl border border-[#e6e5dd] mt-3 text-xs md:text-sm text-[#0f2438]">
                <strong>Emergency Notice:</strong> Lifewell Healthcare Ltd does not provide emergency medical services. In the event of a medical emergency or immediate threat to life, you must immediately dial <strong>999</strong> or contact NHS <strong>111</strong>.
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">4. Care Enquiries &amp; Service Contracts</h2>
              <p>
                Submitting an enquiry through this website does not form a binding contract for care provision. Formal care delivery begins only after:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm">
                <li>An in-home needs assessment and risk evaluation has been completed by our clinical leadership.</li>
                <li>A formal, written Care Plan and Service Level Agreement (SLA) has been signed by both parties.</li>
                <li>Agreed terms on call durations, notice periods, and care fees are documented in writing.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">5. Intellectual Property</h2>
              <p>
                All content on this website, including text, photographs, graphics, logos, and layout, is the intellectual property of Lifewell Healthcare Ltd or used under licence. You may not copy, reproduce, or republish content without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">6. Governing Law</h2>
              <p>
                These terms and any dispute arising from the use of this website or our services shall be governed by and construed in accordance with the laws of England and Wales, subject to the exclusive jurisdiction of the English courts.
              </p>
            </section>

          </div>
        </article>

      </div>
    </div>
  );
}
