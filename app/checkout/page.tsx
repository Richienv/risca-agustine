"use client";

import { useState } from "react";
import Link from "next/link";

const PACKAGE = {
  name: "Business Partner",
  desc: "Akses penuh ke sistem bisnis dengan percepatan, mentoring intensif, dan jaminan keberhasilan.",
  items: [
    "Ingin percepatan income & karir",
    "Siap mengikuti mentoring intensif",
    "Fokus mengejar hasil cepat",
    "Komitmen tinggi untuk sukses",
    "Potensi Income: Unlimited",
    "Bonus Referral: 25%",
    "Reward Trip: Jalan-jalan Gratis",
    "Mentoring: Intensif & Full Support",
    "Kecepatan: Fast Track (3 Bulan)",
    "Guarantee: Uang Kembali 100%",
  ],
  price: "Rp 10.000.000",
};

function CardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? <path d="M18 15l-6-6-6 6" /> : <path d="M6 9l6 6 6-6" />}
    </svg>
  );
}

function CheckMark() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-amber-400">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M12 5l-7 7 7 7" />
    </svg>
  );
}

export default function CheckoutPage() {
  const [summaryOpen, setSummaryOpen] = useState(true);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "radial-gradient(ellipse at 20% 50%, rgba(80,40,20,0.4) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(40,20,60,0.3) 0%, transparent 55%), #0d0d0d",
      }}
    >
      {/* Header */}
      <div className="px-5 py-5 flex items-center gap-3 max-w-xl mx-auto w-full">
        <Link href="/" className="text-white/50 hover:text-white transition-colors">
          <BackIcon />
        </Link>
        <h1 className="text-white font-semibold text-lg tracking-tight">Checkout</h1>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-start justify-center px-4 pb-16 pt-2">
        <div
          className="w-full max-w-[500px] rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.09)",
            backdropFilter: "blur(12px)",
          }}
        >
          {/* Section title */}
          <div className="px-6 pt-6 pb-5 flex items-center gap-2.5" style={{ color: "#F5A623" }}>
            <CardIcon />
            <span className="font-semibold text-[15px]">Informasi Pembayaran</span>
          </div>

          {/* Order summary accordion */}
          <div className="mx-5 mb-4 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
            <button
              onClick={() => setSummaryOpen((o) => !o)}
              className="w-full flex items-center justify-between px-4 py-3.5 text-left"
            >
              <div className="flex items-center gap-2" style={{ color: "#F5A623" }}>
                <ShieldIcon />
                <span className="font-medium text-[13.5px]">Ringkasan Pesanan</span>
              </div>
              <span className="text-white/50">
                <ChevronIcon open={summaryOpen} />
              </span>
            </button>

            {summaryOpen && (
              <div className="px-4 pb-4">
                <div
                  className="rounded-xl p-4"
                  style={{ background: "rgba(245,166,35,0.06)", border: "1px solid rgba(245,166,35,0.18)" }}
                >
                  <div className="font-semibold text-[13.5px] mb-1" style={{ color: "#F5A623" }}>
                    {PACKAGE.name}
                  </div>
                  <div className="text-white/55 text-[12px] leading-relaxed mb-3">
                    {PACKAGE.desc}
                  </div>
                  <div className="space-y-1.5">
                    {PACKAGE.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-white/70 text-[12px]">
                        <CheckMark />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Total */}
          <div
            className="mx-5 mb-4 flex items-center justify-between px-4 py-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <span className="text-white font-semibold text-[14px]">Total</span>
            <span className="font-bold text-[17px]" style={{ color: "#F5A623" }}>
              {PACKAGE.price}
            </span>
          </div>

          {/* Trust badge */}
          <div className="mx-5 mb-5 flex items-center gap-1.5 text-white/35 text-[11.5px]">
            <ShieldIcon />
            Pembayaran aman dengan Midtrans SSL
          </div>

          {/* Form */}
          <div className="mx-5 mb-5 space-y-3.5">
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Nama Depan *", name: "firstName", placeholder: "John" },
                { label: "Nama Belakang", name: "lastName", placeholder: "Doe" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-white/55 text-[11.5px] mb-1.5">{f.label}</label>
                  <input
                    type="text"
                    name={f.name}
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full rounded-lg px-3.5 py-2.5 text-white text-[13px] placeholder-white/20 focus:outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(245,166,35,0.28)",
                    }}
                  />
                </div>
              ))}
            </div>

            {[
              { label: "Email *", name: "email", type: "email", placeholder: "john@example.com" },
              { label: "Nomor Telepon *", name: "phone", type: "tel", placeholder: "08123456789" },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-white/55 text-[11.5px] mb-1.5">{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  value={form[f.name as keyof typeof form]}
                  onChange={handleChange}
                  className="w-full rounded-lg px-3.5 py-2.5 text-white text-[13px] placeholder-white/20 focus:outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(245,166,35,0.28)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mx-5 mb-4">
            <button
              className="w-full py-3.5 rounded-xl font-semibold text-[13.5px] flex items-center justify-center gap-2 transition-opacity hover:opacity-90 active:opacity-80"
              style={{ background: "#1a1a1a", color: "#fff", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <CardIcon />
              Bayar Sekarang
            </button>
          </div>

          {/* Legal */}
          <div className="mx-5 mb-6 text-center text-[11px] text-white/30 leading-relaxed">
            Dengan melanjutkan pembayaran, Anda menyetujui{" "}
            <a href="#" className="text-white/50 underline underline-offset-2 hover:text-white/70">
              syarat dan ketentuan
            </a>{" "}
            serta{" "}
            <a href="#" className="text-white/50 underline underline-offset-2 hover:text-white/70">
              kebijakan privasi
            </a>{" "}
            kami.
          </div>
        </div>
      </div>
    </div>
  );
}
