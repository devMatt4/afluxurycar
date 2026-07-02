"use client";

import { Calculator } from "lucide-react";
import { useMemo, useState } from "react";

type VehicleFinanceProps = {
  price: number;
};

function formatCurrency(value: number) {
  return `€${new Intl.NumberFormat("it-IT", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}

export default function VehicleFinance({ price }: VehicleFinanceProps) {
  const [deposit, setDeposit] = useState(Math.round(price * 0.2));
  const [months, setMonths] = useState(60);

  const monthlyPayment = useMemo(() => {
    const financedAmount = Math.max(price - deposit, 0);
    const annualRate = 0.079;
    const monthlyRate = annualRate / 12;

    if (financedAmount <= 0) return 0;

    const payment =
      (financedAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));

    return Math.round(payment);
  }, [price, deposit, months]);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <Calculator size={22} />
        </div>

        <div>
          <h2 className="text-2xl font-black text-white">
            Simula il finanziamento
          </h2>
          <p className="mt-1 text-sm text-zinc-400">
            Calcolo indicativo, non vincolante.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-bold text-zinc-300">Anticipo</span>
          <input
            type="number"
            min={0}
            max={price}
            value={deposit}
            onChange={(event) => setDeposit(Number(event.target.value))}
            className="mt-2 h-13 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-white outline-none transition focus:border-primary"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-zinc-300">Durata</span>
          <select
            value={months}
            onChange={(event) => setMonths(Number(event.target.value))}
            className="mt-2 h-13 w-full rounded-2xl border border-white/10 bg-black/35 px-4 text-white outline-none transition focus:border-primary"
          >
            <option value={24}>24 mesi</option>
            <option value={36}>36 mesi</option>
            <option value={48}>48 mesi</option>
            <option value={60}>60 mesi</option>
            <option value={72}>72 mesi</option>
            <option value={84}>84 mesi</option>
          </select>
        </label>
      </div>

      <div className="mt-8 rounded-[2rem] border border-primary/30 bg-primary/10 p-6">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
          Rata stimata
        </p>

        <p className="mt-3 text-5xl font-black text-white">
          {formatCurrency(monthlyPayment)}
          <span className="text-lg font-bold text-zinc-400"> / mese</span>
        </p>

        <p className="mt-4 text-sm leading-6 text-zinc-400">
          Importo finanziato:{" "}
          <span className="font-bold text-white">
            {formatCurrency(Math.max(price - deposit, 0))}
          </span>{" "}
          su {months} mesi.
        </p>
      </div>

      <p className="mt-5 text-xs leading-6 text-zinc-500">
        La simulazione è puramente indicativa e non costituisce proposta
        contrattuale. Tassi, condizioni e approvazione dipendono dall’ente
        finanziario.
      </p>
    </section>
  );
}
