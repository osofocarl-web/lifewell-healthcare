import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Lifewell Healthcare Ltd",
  description: "Privacy and Data Protection Policy for Lifewell Healthcare Ltd, registered with the Information Commissioner's Office (ICO: ZC026072).",
};

export default function PrivacyPage() {
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
              Data Protection &amp; Confidentiality
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f2438] mb-3">
              Privacy Policy
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#536479]">
              <span>Lifewell Healthcare Ltd (Company No: 14638409)</span>
              <span>•</span>
              <span>ICO Registration: ZC026072</span>
              <span>•</span>
              <span>Last Updated: October 2026</span>
            </div>
          </div>

          <div className="space-y-8 text-sm md:text-base text-[#4e6074] leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">1. Introduction</h2>
              <p>
                Lifewell Healthcare Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting and respecting your personal data and privacy. We are registered with the Information Commissioner&apos;s Office (ICO) under registration reference <strong>ZC026072</strong>.
              </p>
              <p className="mt-2">
                This Privacy Policy explains how we collect, process, store, and share personal information when you use our website ([lifewellhealthcare.org](https://www.lifewellhealthcare.org)), make care enquiries, or access our domiciliary care and wellbeing services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">2. Data Controller</h2>
              <p>
                The data controller responsible for your personal data is:
              </p>
              <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e6e5dd] my-3 text-xs md:text-sm text-[#0f2438]">
                <strong>Lifewell Healthcare Ltd</strong><br />
                64 Broadway, Northampton, NN1 4SQ<br />
                Email: <a href="mailto:contact@lifewellhealthcare.org" className="underline font-semibold">contact@lifewellhealthcare.org</a><br />
                Telephone: 07836 681415
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">3. Information We Collect</h2>
              <p>We may collect and process the following categories of information:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm">
                <li><strong>Contact details:</strong> Name, address, telephone number, and email address.</li>
                <li><strong>Care Enquiry Information:</strong> Details of support requested, service user requirements, emergency contact details, and family relationships.</li>
                <li><strong>Special Category Data (Health Data):</strong> Medical history, mobility requirements, medication schedules, and dietary preferences necessary to safely plan and deliver healthcare and home support.</li>
                <li><strong>Employment Information:</strong> For job applicants, CVs, employment histories, professional references, and right-to-work / DBS documentation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">4. Lawful Basis for Processing</h2>
              <p>We process your data under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018 under the following legal bases:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm">
                <li><strong>Performance of a Contract:</strong> To assess, plan, and deliver care services requested by you or your representative.</li>
                <li><strong>Legitimate Interests:</strong> To respond to enquiries, improve service delivery, and maintain communication.</li>
                <li><strong>Legal Obligation:</strong> Complying with healthcare regulation, safeguarding protocols, and CQC requirements.</li>
                <li><strong>Special Category Conditions:</strong> Processing health data under Article 9(2)(h) for the provision of health or social care treatment.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">5. How We Store and Protect Your Data</h2>
              <p>
                All electronic records and health data are stored securely with encryption, strict role-based access control, and adherence to UK clinical record-keeping standards. We retain care records only for as long as required by UK healthcare retention schedules and statutory obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">6. Your Rights</h2>
              <p>Under UK data protection legislation, you have the right to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm">
                <li>Request access to the personal data we hold about you (Subject Access Request).</li>
                <li>Request correction of inaccurate or incomplete information.</li>
                <li>Request erasure of your personal data where there is no lawful reason for continued processing.</li>
                <li>Object to or restrict processing of your personal data in certain circumstances.</li>
              </ul>
              <p className="mt-2 text-xs md:text-sm">
                To exercise any of these rights, please contact our Data Protection Lead at <a href="mailto:contact@lifewellhealthcare.org" className="font-bold underline text-[#0f2438]">contact@lifewellhealthcare.org</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0f2438] mb-3">7. Complaints &amp; the ICO</h2>
              <p>
                If you have concerns about how we handle your personal data, we encourage you to contact us first so we can resolve the issue promptly. You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#0f2438]">ico.org.uk</a> or by calling 0303 123 1113.
              </p>
            </section>

          </div>
        </article>

      </div>
    </div>
  );
}
