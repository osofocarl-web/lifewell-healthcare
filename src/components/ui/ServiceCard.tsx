"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Button } from "./Button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

export const ServiceCard = ({ title, description, icon: Icon, benefits }: ServiceCardProps) => {
  return (
    <motion.div
      className="bg-white p-12 rounded-[2.5rem] shadow-sm card-hover-premium transition-premium border border-gray-100 flex flex-col h-full group"
    >
      <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center mb-10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-premium shadow-inner">
        <Icon size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-5 text-brand-blue-dark leading-tight">{title}</h3>
      <p className="text-text-muted mb-8 leading-relaxed font-medium">
        {description}
      </p>
      
      <div className="space-y-4 mb-12 flex-grow">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-brand-blue-dark/70 font-bold tracking-wide">
            <div className="w-2 h-2 rounded-full bg-brand-gold-soft" />
            {benefit}
          </div>
        ))}
      </div>

      <Link href="/contact" className="mt-auto">
        <Button variant="outline" className="w-full flex items-center justify-center gap-3 group border-brand-blue/20 hover:border-brand-blue text-brand-blue">
          Enquire Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
        </Button>
      </Link>
    </motion.div>
  );
};
