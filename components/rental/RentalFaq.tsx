"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Posso richiedere qualsiasi marca di auto?",
    answer:
      "Sì. Grazie ai nostri partner possiamo ricercare veicoli di qualsiasi marchio e categoria, compatibilmente con la disponibilità del mercato.",
  },
  {
    question: "Effettuate sia noleggio breve che lungo termine?",
    answer:
      "Sì. Ti aiutiamo a trovare la soluzione più adatta sia per esigenze temporanee che per formule di lungo periodo.",
  },
  {
    question: "Il preventivo è gratuito?",
    answer:
      "Assolutamente sì. La richiesta di informazioni e il preventivo non comportano alcun costo o impegno.",
  },
  {
    question: "Quanto tempo serve per ricevere una risposta?",
    answer:
      "Normalmente ricontattiamo il cliente entro 24 ore lavorative con una proposta o con eventuali richieste di approfondimento.",
  },
];

export default function RentalFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-28">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Domande frequenti
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Hai qualche dubbio?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
          Qui trovi le risposte alle domande che riceviamo più spesso.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-4xl space-y-4">
        {faqs.map((faq, index) => {
          const open = openIndex === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-black text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition duration-300 ${
                    open ? "rotate-180 text-primary" : "text-zinc-400"
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-6 py-5 leading-8 text-zinc-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
