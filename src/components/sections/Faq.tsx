"use client"; // Diperlukan untuk komponen interaktif (Accordion)

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data FAQ dari App.jsx baris 60-70
const faqs = [
  {
    question: 'What technologies do you work with?',
    answer: 'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.'
  },
  {
    question: 'Do you work on freelance or remote projects?',
    answer: 'Yes, I am available for both freelance and remote projects.'
  },
  {
    question: 'Can you convert Figma or Sketch designs into code?',
    answer: 'Absolutely! I specialize in converting designs into pixel-perfect, responsive code.'
  },
  {
    question: 'Do you collaborate with backend developers or teams?',
    answer: 'Yes, I work seamlessly with backend developers and cross-functional teams.'
  },
  {
    question: 'Are you available for full-time roles?',
    answer: 'I am open to discussing full-time opportunities that align with my skills and interests.'
  }
];

export default function Faq() {
  return (
    // JSX dari App.jsx baris 654-706
    <section className="py-12 md:py-16 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30"></div>

      <div className="container mx-auto max-w-md md:max-w-4xl relative z-10">
        <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-3">
          <div className="bg-white rounded-3xl p-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-3">
                <span className="text-sm font-bold text-gray-900">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
                Need More Info? Start Here
              </h2>
            </div>

            {/* Ganti div manual dengan ShadCN Accordion */}
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  value={`item-${idx}`} 
                  key={idx} 
                  className="border border-gray-300 rounded-3xl p-3 mb-4 data-[state=open]:shadow-lg"
                >
                  <AccordionTrigger className="w-full flex items-center justify-between gap-4 text-left font-bold text-gray-900 hover:no-underline p-0">
                    {faq.question}
                    {/* Ikon plus/minus ditangani secara otomatis oleh AccordionTrigger */}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-sm font-medium pt-3">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}