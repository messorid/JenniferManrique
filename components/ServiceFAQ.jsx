"use client";

import { useState } from "react";

export default function ServiceFAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-malva-100 rounded-3xl border border-malva-100 overflow-hidden">
      {faqs.map((f, i) => {
        const open = i === openIndex;
        return (
          <div key={f.q} className="bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="w-full flex items-start gap-4 px-6 py-5 text-left hover:bg-malva-50/50 transition-colors"
              aria-expanded={open}
            >
              <span className={`shrink-0 mt-0.5 w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${open ? "bg-dorado border-dorado text-white" : "border-malva-200 text-malva-500"}`}>
                <svg viewBox="0 0 24 24" className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
              <span className="flex-1 text-base font-semibold text-malva-900 leading-snug">
                {f.q}
              </span>
            </button>
            <div className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <p className="px-6 pb-5 pl-16 text-base leading-relaxed text-texto-suave">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
