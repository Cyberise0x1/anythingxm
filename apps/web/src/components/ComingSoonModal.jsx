import React, { useState } from "react";
import { Rocket, X, Coins, Wallet, RefreshCw } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "motion/react";

export default function ComingSoonModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");

  const notifyMutation = useMutation({
    mutationFn: async (email) => {
      const response = await fetch("/api/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Subscription failed");
      return response.json();
    },
    onSuccess: () => {
      alert("Thank you! You'll be the first to know when we launch.");
      setEmail("");
      onClose();
    },
    onError: () => {
      alert("Something went wrong. Please try again.");
    },
  });

  const handleNotify = () => {
    if (email && email.includes("@")) {
      notifyMutation.mutate(email);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-gradient-to-br from-[#0d1f33] to-[#0A1929] border border-[#00D4AA]/20 rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-emerald-500/20 flex items-center justify-center border border-yellow-500/30">
              <Rocket className="w-8 h-8 text-yellow-400" />
            </div>

            <h3 className="font-display text-2xl font-bold mb-2 text-white">
              Coming Soon!
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We're building something incredible. Blockchain-powered property
              investments are launching soon. Be the first to know when we go
              live.
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  icon: Coins,
                  text: "Tokenized Property Ownership",
                  color: "text-yellow-400",
                },
                {
                  icon: Wallet,
                  text: "Wallet Connect & On-Chain Payments",
                  color: "text-emerald-400",
                },
                {
                  icon: RefreshCw,
                  text: "Secondary Market Token Trading",
                  color: "text-blue-400",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-left p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <item.icon
                    className={`w-5 h-5 ${item.color} flex-shrink-0`}
                  />
                  <span className="text-sm text-gray-300">{item.text}</span>
                  <span className="ml-auto">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-yellow-500/35 bg-yellow-500/10 text-[10px] font-bold text-yellow-500 uppercase tracking-wider">
                      Soon
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold">
              Get notified when we launch
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#00D4AA] focus:ring-1 focus:ring-[#00D4AA] transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleNotify}
                disabled={notifyMutation.isPending}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 transition-all font-semibold text-sm whitespace-nowrap text-white disabled:opacity-50"
              >
                {notifyMutation.isPending ? "Joining..." : "Notify Me"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
