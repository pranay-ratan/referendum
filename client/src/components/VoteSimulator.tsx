import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";

export function VoteSimulator() {
  const [fee, setFee] = useState([8]);
  const amount = fee[0];

  const getStatus = (val: number) => {
    if (val < 4) return { text: "CRITICAL CUTS", color: "text-red-600", bg: "bg-red-100" };
    if (val < 8) return { text: "REDUCED SERVICES", color: "text-orange-500", bg: "bg-orange-100" };
    return { text: "FULL FUNDING", color: "text-green-600", bg: "bg-green-100" };
  };

  const status = getStatus(amount);

  return (
    <div className="w-full max-w-3xl mx-auto bg-card rounded-3xl p-8 shadow-xl border border-border/50">
      <h3 className="text-2xl font-bold mb-6 text-center font-display uppercase tracking-wider">
        Impact Simulator
      </h3>
      
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold uppercase text-muted-foreground">Proposed Fee Increase</span>
          <span className="text-3xl font-bold text-primary">${amount}</span>
        </div>
        
        <Slider
          defaultValue={[8]}
          max={12}
          step={1}
          onValueChange={setFee}
          className="py-4"
        />
        
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>$0 (Current)</span>
          <span>$8 (Proposed)</span>
          <span>$12</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${amount >= 8 ? 'border-primary bg-primary/5' : 'border-border'}`}>
          <h4 className="text-lg font-bold mb-2">Campus Life</h4>
          <AnimatePresence mode="wait">
            <motion.p 
              key={amount >= 8 ? "good" : "bad"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm text-foreground/80 leading-relaxed"
            >
              {amount >= 8 
                ? "Vibrant campus with funded clubs, social events, and active student unions. The full student experience."
                : "Significant budget cuts. Fewer events, reduced club funding, and potential closure of student services."}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="p-6 rounded-xl bg-secondary/5 border border-border">
          <h4 className="text-lg font-bold mb-2">Outcome</h4>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${status.color} ${status.bg}`}>
            {status.text}
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            At ${amount}, we {amount >= 8 ? "secure" : "risk"} the future of student engagement.
          </p>
        </div>
      </div>
    </div>
  );
}
