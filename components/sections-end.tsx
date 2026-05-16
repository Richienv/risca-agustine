"use client";

import { useRef, useState } from "react";
import {
  CheckIcon,
  ChevronLeft,
  ChevronRight,
  FadeUp,
  ImgRise,
  InstagramIcon,
  Logo,
  MinusIcon,
  PlusIcon,
  WhatsappIcon,
  WordsPullUp,
} from "./primitives";

/* ─── Proof Gallery ───────────────────────────────────────────────────── */
const PROOF_TILES = [
  { tone: "occ-figs", label: "wins · screenshot · jul" },
  { tone: "occ-table", label: "wins · screenshot · aug" },
  { tone: "occ-pour", label: "wins · screenshot · sep" },
  { tone: "occ-cocktail", label: "wins · screenshot · oct" },
  { tone: "occ-night", label: "wins · screenshot · nov" },
  { tone: "occ-figs", label: "wins · screenshot · dec" },
  { tone: "occ-table", label: "wins · trip · taiwan" },
  { tone: "occ-pour", label: "wins · trip · paris" },
];

export function ProofGallery() {
  return (
    <section
      className="bg-cream py-16 md:py-24 px-5 md:px-10"
      data-screen-label="07 Proof"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <div className="text-red-deep/70 text-[10px] uppercase tracking-[0.28em] mb-2.5">
              Progress real, bukan janji
            </div>
            <WordsPullUp
              text={"Bukti Bareng Tim\n@risca.agustine"}
              className="font-display text-red-deep uppercase leading-[0.95] text-[1.85rem] md:text-[2.5rem] lg:text-[3rem]"
            />
          </div>
          <FadeUp delay={250}>
            <p className="text-red-deep/85 max-w-md text-[13px] md:text-[14px] leading-relaxed">
              Inilah kisah mereka yang memilih mencoba, tetap konsisten, dan
              akhirnya menemukan versi terbaik diri mereka.
            </p>
          </FadeUp>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3">
          {PROOF_TILES.map((t, i) => (
            <ImgRise key={i} delay={i * 40}>
              <div
                className={`relative aspect-square rounded-lg md:rounded-xl overflow-hidden ${t.tone} group cursor-pointer`}
              >
                <span className="ph-label">{t.label}</span>
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors" />
              </div>
            </ImgRise>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    name: "Jojo",
    role: "Ex Mahasiswa",
    quote:
      "Awalnya aku pilih Risca sebagai mentor karena dia yang pertama mengenalkan aku ke peluang ini.",
    story:
      "Sabar, bisa menyesuaikan tempo belajar aku yang kadang lambat. Sekarang bisa beli apartemen, mobil baru, bahkan umroh pakai uang sendiri.",
    tone: "occ-figs",
  },
  {
    name: "Jessica Suwarsono",
    role: "Ex Karyawan Korporat",
    quote:
      "Sebagai mantan karyawan korporat, saya benar-benar merasakan perubahan hidup.",
    story:
      "Penghasilan selama 4 tahun menjalankan bisnis ini sudah dua kali lipat dari gaji terakhir saya di perusahaan.",
    tone: "occ-cocktail",
  },
  {
    name: "Sheila Tang",
    role: "Property Investor",
    quote:
      "Akselerasi sangat cepat — anak ke sekolah internasional, beli aset properti.",
    story:
      "Semua hasil kerja keras dan membantu orang lain. Sejak tahun ketiga, tim semakin besar dan berkembang pesat.",
    tone: "occ-table",
  },
  {
    name: "Rafi Ahmad",
    role: "Ex Karyawan 9-5",
    quote: "Dulu karyawan 9-5 yang stuck banget. Income cuma 5 juta sebulan.",
    story:
      "Setelah ikut sistem ini, dalam 4 bulan udah bisa 12 juta per bulan. Sekarang traveling sambil kerja, freedom banget!",
    tone: "occ-pour",
  },
  {
    name: "SAM",
    role: "Entrepreneur",
    quote: "Membangun karier sendiri sejak lulus kuliah.",
    story:
      "Jalur mandiri memberi ruang lebih besar untuk berkembang. Dari mahasiswa, sekarang running bisnis dimana saja. Earn ~175jt sejak Agustus.",
    tone: "occ-cocktail",
  },
];

export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild?.firstElementChild;
    const w = card ? card.getBoundingClientRect().width + 20 : 360;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };
  return (
    <section className="bg-brick py-20 md:py-28" data-screen-label="08 Testimonials">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <div className="text-cream/75 text-[10px] uppercase tracking-[0.28em] mb-2.5">
              Kata - kata
            </div>
            <WordsPullUp
              text={"Mereka Udah Mulai."}
              className="font-display text-cream uppercase leading-[0.95] text-[2.1rem] md:text-[3rem] lg:text-[3.5rem]"
            />
          </div>
          <FadeUp delay={250}>
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="prev"
                className="w-10 h-10 rounded-full border border-cream/40 text-cream flex items-center justify-center hover:bg-cream hover:text-brick transition"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="next"
                className="w-10 h-10 rounded-full border border-cream/40 text-cream flex items-center justify-center hover:bg-cream hover:text-brick transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </FadeUp>
        </div>
      </div>
      <div
        ref={trackRef}
        className="mt-9 flex gap-5 overflow-x-auto scrollbar-hide px-5 md:px-10 snap-x snap-mandatory"
      >
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            className="snap-start shrink-0 w-[82%] sm:w-[52%] md:w-[40%] lg:w-[30%]"
          >
            <ImgRise delay={(i % 4) * 60}>
              <div>
                <div className={`${t.tone} aspect-[5/6] rounded-2xl relative`}>
                  <span className="ph-label">
                    portrait · {t.name.toLowerCase()}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-italic-script text-cream text-xl md:text-2xl leading-snug">
                    &quot;{t.quote}&quot;
                  </div>
                  <p className="text-cream/80 text-[13px] leading-relaxed mt-2.5">
                    {t.story}
                  </p>
                  <div className="mt-3.5 flex items-center gap-2.5 pt-3.5 border-t border-cream/15">
                    <div className="font-display text-cream text-sm uppercase">
                      {t.name}
                    </div>
                    <span className="text-cream/30">·</span>
                    <div className="text-cream/65 text-[9.5px] uppercase tracking-[0.22em]">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </ImgRise>
          </div>
        ))}
        <div className="shrink-0 w-px" />
      </div>
    </section>
  );
}

/* ─── High Earners ────────────────────────────────────────────────────── */
const HIGH_EARNERS = [
  {
    name: "Bambang + Silfianty",
    bg: "Ex-Purchasing PT. Pepsi Cola",
    tone: "occ-table",
    quote:
      "Siapapun dan apapun kondisi kita saat ini, jangan pernah takut untuk bermimpi besar.",
    story:
      "Percaya, fokus, dan konsisten. Sejak bergabung tahun 2003, perjalanan luar biasa dari nol hingga puncak — dengan dedikasi yang tidak pernah surut.",
    income: "Rp 1 Milyar/bulan",
  },
  {
    name: "Vicki Aditya",
    bg: "Joined 2018",
    tone: "occ-figs",
    quote: "Ora et Labora — inilah panggilan hidup saya.",
    story:
      "Asuransi tidak hanya membantu memenuhi impian pribadi, tetapi juga memberi kehormatan untuk mendidik dan memberdayakan sesama.",
    income: "Rp 100+ jt/bulan",
  },
  {
    name: "Marshel Yap",
    bg: "Ex-Marketing",
    tone: "occ-night",
    quote:
      "Dulu ga pernah nyangka — dari keluarga yang bahkan ga punya rumah sendiri.",
    story:
      "Latar belakang tidak menentukan masa depan. Dari yang dulu tidak punya rumah, kini menikmati Asia & Eropa setiap tahun.",
    income: "Rp 120 jt/bulan",
  },
];

export function HighEarners() {
  return (
    <section
      className="bg-cream py-20 md:py-28 px-5 md:px-10"
      data-screen-label="09 High Earners"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-red-deep/70 text-[10px] uppercase tracking-[0.28em] mb-4 text-center">
          Bukan janji, ini bukti
        </div>
        <WordsPullUp
          text={"Jangan Cuman\nPercaya Kata Saya."}
          className="font-display text-red-deep uppercase leading-[0.94] text-center text-[2.1rem] md:text-[3rem] lg:text-[3.5rem]"
        />
        <FadeUp delay={300}>
          <p className="text-red-deep/85 mt-5 max-w-xl mx-auto text-center text-[13px] md:text-[14px] leading-relaxed">
            Mereka yang merubah karir mereka — dari pekerja biasa jadi pengusaha
            dengan passive income puluhan, ratusan, hingga milyaran rupiah per
            bulan.
          </p>
        </FadeUp>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-9">
          {HIGH_EARNERS.map((h, i) => (
            <ImgRise key={h.name} delay={i * 110}>
              <div>
                <div className={`${h.tone} aspect-[4/5] rounded-2xl relative`}>
                  <span className="ph-label">
                    portrait · {h.name.toLowerCase()}
                  </span>
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-cream/95 text-red-deep text-[9.5px] uppercase tracking-[0.18em] font-bold">
                    {h.income}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="font-display text-red-deep text-base md:text-lg uppercase">
                    {h.name}
                  </div>
                  <div className="text-red-deep/60 text-[9.5px] uppercase tracking-[0.22em] mt-1">
                    {h.bg}
                  </div>
                  <div className="font-italic-script text-red-deep text-lg md:text-xl mt-3 leading-snug">
                    &quot;{h.quote}&quot;
                  </div>
                  <p className="text-red-deep/85 text-[13px] leading-relaxed mt-2.5">
                    {h.story}
                  </p>
                </div>
              </div>
            </ImgRise>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Income Breakdown ────────────────────────────────────────────────── */
export function IncomeBreakdown() {
  return (
    <section
      className="bg-brick py-20 md:py-28 px-5 md:px-10"
      data-screen-label="10 Income"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="text-cream/75 text-[10px] uppercase tracking-[0.28em] mb-4">
            Financial breakdown
          </div>
          <WordsPullUp
            text={"Berapa Yang\nBisa Kamu Dapat?"}
            className="font-display text-cream uppercase leading-[0.95] text-[2.1rem] md:text-[2.75rem] lg:text-[3.25rem]"
          />
          <FadeUp delay={350}>
            <p className="text-cream/85 mt-5 text-[13px] md:text-[14px] leading-relaxed max-w-md">
              Hitungan transparan tanpa ada yang ditutup-tutupi. Simulasi 3
              bulan untuk target produksi Rp 300 juta.
            </p>
          </FadeUp>
          <FadeUp delay={550}>
            <div className="mt-7 ph aspect-[4/5] rounded-2xl" data-tone="terra">
              <span className="ph-label">
                photo · papan impian / vision board · placeholder
              </span>
            </div>
          </FadeUp>
        </div>
        <div className="lg:col-span-7">
          <FadeUp>
            <div className="grid grid-cols-3 gap-2.5 md:gap-3">
              {[
                ["Target 3 Bulan", "300 Jt"],
                ["Per Bulan", "100 Jt"],
                ["Per Minggu", "25 Jt"],
              ].map(([l, v]) => (
                <div
                  key={l}
                  className="rounded-xl bg-cream/[0.08] border border-cream/20 p-4 md:p-5"
                >
                  <div className="text-cream/65 text-[9.5px] uppercase tracking-[0.22em]">
                    {l}
                  </div>
                  <div className="font-display text-cream text-xl md:text-2xl mt-1.5">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={150}>
            <div className="mt-5 rounded-2xl bg-brick-dark/40 border border-cream/15 p-5 md:p-6">
              <div className="text-cream/75 text-[9.5px] uppercase tracking-[0.28em] mb-3">
                Perhitungan income
              </div>
              <div className="flex items-center justify-between py-2.5 border-b border-cream/15">
                <span className="text-cream/85 text-[13px] md:text-sm">
                  Komisi (Rate 25%)
                </span>
                <span className="text-cream font-medium text-[13px] md:text-sm">
                  300 Jt × 25%
                </span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-cream/85 text-[13px] md:text-sm">
                  Total Komisi
                </span>
                <span className="font-display text-cream text-base md:text-lg">
                  Rp 75.000.000
                </span>
              </div>
              <div className="mt-3 rounded-lg bg-cream text-brick p-4 flex items-center justify-between gap-3">
                <span className="font-display text-[13px] md:text-sm uppercase">
                  Total Income (3 Bln)
                </span>
                <span className="font-display text-lg md:text-2xl">
                  Rp 75.000.000
                </span>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={250}>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {[
                {
                  h: "Komisi Closing",
                  b: "Setiap closing → komisi diterima dalam 1–2 bulan. Transparan dan pasti.",
                },
                {
                  h: "Undian per Case",
                  b: "Setiap 1 case ada undian senilai Rp 100.000 atau 100 USD.",
                },
                {
                  h: "Bonus Komisi Besar",
                  b: "Jualan 5 juta ke 5 keluarga → komisi hingga 75 juta. Bisa diulang setiap 3 bulan.",
                },
                {
                  h: "Bonus Referral Tim",
                  b: "25% overriding dari setiap closing tim. Passive income yang mengalir.",
                },
              ].map((c) => (
                <div
                  key={c.h}
                  className="rounded-xl bg-cream/[0.08] border border-cream/15 p-4"
                >
                  <div className="font-display text-cream uppercase text-[13px]">
                    {c.h}
                  </div>
                  <p className="text-cream/80 text-[12.5px] leading-relaxed mt-1.5">
                    {c.b}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-cream/60 text-[11px] italic">
              *Hasil nyata bergantung pada kerja keras, konsistensi, dan
              penerapan sistem.
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ─── Pricing ─────────────────────────────────────────────────────────── */
const PKG = [
  {
    badge: null as string | null,
    name: "Starter Partner",
    price: "GRATIS",
    priceSub: "",
    desc: "Mulai perjalanan karir sebagai Financial Consultant dengan ritme yang fleksibel.",
    criteria: [
      "Wanita / Pria",
      "Usia 17–35 tahun",
      "Min. pendidikan SMA/D1",
      "Lokasi di Jabodetabek",
    ],
    benefits: [
      ["Potensi Income", "Unlimited"],
      ["Bonus Referral", "25%"],
      ["Reward Trip", "Jalan-jalan Gratis"],
      ["Mentoring", "Intensif & Full Support"],
      ["Kecepatan", "Tergantung Diri Sendiri"],
      ["Guarantee", "Tidak Ada Resiko"],
    ],
    cta: "Daftar Gratis",
    dark: false,
  },
  {
    badge: "MOST POPULAR" as string | null,
    name: "Business Partner",
    price: "Rp 10.000.000",
    priceSub: "*Fee dikembalikan 100% jika capai target",
    desc: "Akses penuh ke sistem bisnis dengan percepatan, mentoring intensif, dan jaminan keberhasilan.",
    criteria: [
      "Ingin percepatan income & karir",
      "Siap mengikuti mentoring intensif",
      "Fokus mengejar hasil cepat",
      "Komitmen tinggi untuk sukses",
    ],
    benefits: [
      ["Potensi Income", "Unlimited"],
      ["Bonus Referral", "25%"],
      ["Reward Trip", "Jalan-jalan Gratis"],
      ["Mentoring", "Intensif & Full Support"],
      ["Kecepatan", "Fast Track (3 Bulan)"],
      ["Guarantee", "Uang Kembali 100%"],
    ],
    cta: "Join Business Partner",
    dark: true,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-cream py-20 md:py-28 px-5 md:px-10"
      data-screen-label="13 Pricing"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-red-deep/70 text-[10px] uppercase tracking-[0.28em] mb-4 text-center">
          Join the movement
        </div>
        <WordsPullUp
          text={"Pilihan Bergabung\nDengan Kami."}
          className="font-display text-red-deep uppercase leading-[0.94] text-center text-[2.1rem] md:text-[3rem] lg:text-[3.5rem]"
        />
        <FadeUp delay={300}>
          <p className="text-red-deep/85 mt-5 max-w-xl mx-auto text-center text-[13px] md:text-[14px] leading-relaxed">
            Dua jalur berbeda untuk memulai perjalanan sukses Anda. Pilih yang
            sesuai dengan visi dan komitmen Anda hari ini.
          </p>
        </FadeUp>
        <div className="mt-11 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {PKG.map((p, i) => (
            <ImgRise key={p.name} delay={i * 130}>
              <div
                className={`relative rounded-2xl p-6 md:p-8 h-full flex flex-col ${p.dark ? "bg-red-deep text-cream" : "bg-white/60 border-2 border-red-deep/20 text-red-deep"}`}
              >
                {p.badge && (
                  <div className="absolute -top-2.5 left-6 px-2.5 py-1 rounded-full bg-cream text-red-deep text-[9.5px] uppercase tracking-[0.22em] font-bold border border-red-deep">
                    {p.badge}
                  </div>
                )}
                <div
                  className={`text-[9.5px] uppercase tracking-[0.28em] ${p.dark ? "text-cream/65" : "text-red-deep/55"}`}
                >
                  {p.name}
                </div>
                <div className="font-display text-3xl md:text-4xl mt-2">
                  {p.price}
                </div>
                <p
                  className={`text-[13px] md:text-[14px] leading-relaxed mt-2.5 ${p.dark ? "text-cream/80" : "text-red-deep/85"}`}
                >
                  {p.desc}
                </p>
                <div className="mt-5">
                  <div
                    className={`text-[9.5px] uppercase tracking-[0.22em] ${p.dark ? "text-cream/65" : "text-red-deep/55"}`}
                  >
                    Kriteria
                  </div>
                  <ul className="mt-2.5 space-y-1.5">
                    {p.criteria.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-[13px] leading-relaxed"
                      >
                        <span
                          className={`mt-0.5 ${p.dark ? "text-cream" : "text-red-deep"}`}
                        >
                          <CheckIcon size={13} />
                        </span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5">
                  <div
                    className={`text-[9.5px] uppercase tracking-[0.22em] ${p.dark ? "text-cream/65" : "text-red-deep/55"}`}
                  >
                    Benefit
                  </div>
                  <ul
                    className={`mt-2.5 divide-y ${p.dark ? "divide-cream/15" : "divide-red-deep/15"}`}
                  >
                    {p.benefits.map(([k, v]) => (
                      <li
                        key={k}
                        className="flex items-center justify-between gap-3 py-2 text-[13px]"
                      >
                        <span
                          className={`${p.dark ? "text-cream/70" : "text-red-deep/65"}`}
                        >
                          {k}
                        </span>
                        <span className="font-medium text-right">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-7">
                  <button
                    className={`pill w-full justify-center ${p.dark ? "" : "pill-red"}`}
                    style={
                      p.dark
                        ? {
                            background: "#F2E7CC",
                            color: "#A83228",
                            borderColor: "#F2E7CC",
                          }
                        : {}
                    }
                  >
                    {p.cta}
                  </button>
                  {p.priceSub && (
                    <p
                      className={`text-[11px] mt-2.5 italic ${p.dark ? "text-cream/65" : "text-red-deep/55"}`}
                    >
                      {p.priceSub}
                    </p>
                  )}
                </div>
              </div>
            </ImgRise>
          ))}
        </div>
        <FadeUp delay={400}>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <div className="font-italic-script text-red-deep text-2xl md:text-3xl leading-snug">
              &quot;Bayangin hidupmu 1–5 tahun kedepan menjadi apa? … semua
              mulai dari satu keputusan hari ini.&quot;
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "Saya nggak punya background keuangan, bisa ikut?",
    a: "Bisa banget. Mayoritas member kami justru bukan dari background asuransi — ada yang ex-mahasiswa, ibu rumah tangga, fresh graduate, dan ex-corporate. Sistem, materi, dan mentoring sudah disiapkan dari nol.",
  },
  {
    q: "Berapa lama sampai bisa dapat income pertama?",
    a: "87% member kami capai income pertama dalam waktu kurang dari 21 hari, asalkan ikuti pola kerja harian dan mentoring yang sudah disiapkan.",
  },
  {
    q: "Apakah harus full-time atau bisa sambilan?",
    a: "Bisa sambilan. Banyak member kami menjalankannya sambil tetap bekerja, kuliah, atau mengurus keluarga. Fleksibilitas penuh sesuai ritme hidupmu.",
  },
  {
    q: "Apakah ini MLM atau skema piramida?",
    a: "Bukan. Ini karier sebagai Financial Consultant resmi di bawah Agency Network Manulife — kamu wajib lulus ujian AAJI dan punya lisensi profesional. Komisi datang dari produk asuransi yang dijual, bukan dari merekrut.",
  },
  {
    q: "Apa bedanya Starter Partner vs Business Partner?",
    a: "Starter Partner gratis, cocok untuk yang ingin mulai dengan ritme fleksibel. Business Partner Rp 10jt dengan fast-track 3 bulan, mentoring intensif, dan jaminan uang kembali 100% jika target tidak tercapai.",
  },
  {
    q: "Kalau saya gagal, fee Business Partner hangus?",
    a: "Tidak. Jika kamu sudah ikuti seluruh sistem dan tetap belum capai target, fee Rp 10jt dikembalikan 100%. Kami percaya pada sistem yang kami berikan.",
  },
  {
    q: "Apakah hanya untuk yang di Jakarta?",
    a: "Untuk Starter Partner, prioritas Jabodetabek karena pertemuan tatap muka dengan mentor. Untuk Business Partner, terbuka lebih luas dengan sesi mentoring online + offline.",
  },
  {
    q: "Bagaimana cara mulai?",
    a: 'Klik "Saya Mau Perubahan" atau hubungi langsung via WhatsApp di +62 812-6000-6303. Tim akan jadwalkan sesi konsultasi gratis untuk menjelaskan langkah selanjutnya.',
  },
];

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(idx === 0);
  return (
    <div className="border-b border-cream/20">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-5 py-5 text-left"
      >
        <span className="font-display text-cream text-sm md:text-base uppercase">
          {q}
        </span>
        <span className="text-cream shrink-0">
          {open ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
        </span>
      </button>
      {open && (
        <p className="text-cream/80 text-[13px] md:text-sm leading-relaxed pb-5 pr-9 max-w-3xl">
          {a}
        </p>
      )}
    </div>
  );
}

export function FAQ() {
  return (
    <section
      className="bg-brick py-20 md:py-28 px-5 md:px-10"
      data-screen-label="14 FAQ"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-cream/75 text-[10px] uppercase tracking-[0.28em] mb-4">
          Masih ada yang ditanyain?
        </div>
        <WordsPullUp
          text={"Pertanyaan\nYang Sering Muncul."}
          className="font-display text-cream uppercase leading-[0.94] text-[2.1rem] md:text-[3rem] lg:text-[3.5rem]"
        />
        <div className="mt-11 border-t border-cream/20">
          {FAQS.map((f, i) => (
            <FAQItem key={i} idx={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ───────────────────────────────────────────────────────── */
export function BuildYourDream() {
  return (
    <section
      id="kontak"
      className="relative bg-cream py-24 md:py-32 px-5 md:px-10 text-center overflow-hidden"
      data-screen-label="15 CTA"
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-red-deep/70 text-[10px] uppercase tracking-[0.28em]">
          Udah siap?
        </div>
        <WordsPullUp
          text={"Jadi Yang Berhasil\nSelanjutnya."}
          className="font-display text-red-deep uppercase leading-[0.94] mt-4 text-[2.1rem] md:text-[3.5rem] lg:text-[4.5rem]"
        />
        <FadeUp delay={400}>
          <div className="mt-8 inline-flex">
            <a
              href="https://wa.me/6281260006303"
              target="_blank"
              rel="noreferrer"
              className="pill pill-red inline-flex items-center gap-2.5"
              style={{ padding: "12px 26px", fontSize: 12 }}
            >
              <WhatsappIcon size={16} /> Hubungi Kami via WhatsApp
            </a>
          </div>
        </FadeUp>
        <FadeUp delay={550}>
          <div className="mt-7 font-italic-script text-red-deep text-2xl md:text-3xl">
            2000+ Gen-Z udah breakout.
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      className="bg-charcoal text-cream pt-14 pb-8 px-5 md:px-10"
      data-screen-label="16 Footer"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-9">
          <div className="md:col-span-5">
            <Logo size="lg" />
            <p className="text-cream/70 text-[13px] leading-relaxed mt-5 max-w-sm">
              Join community bisnis proteksi finansial yang tumbuh pesat.
              Belajar, berkembang, dan sukses bersama melalui mentorship &
              support system yang sudah terbukti.
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="text-cream/55 text-[9.5px] uppercase tracking-[0.28em]">
              Brand
            </div>
            <div className="font-display text-cream text-base uppercase mt-2.5">
              Risca Agustine
            </div>
            <div className="text-cream/75 text-[13px] mt-1.5">
              Life & Health Business Unit – Jakarta
            </div>
            <div className="text-cream/55 text-[12px] mt-1">
              Bagian dari Agency Network Manulife
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="text-cream/55 text-[9.5px] uppercase tracking-[0.28em]">
              Hubungi
            </div>
            <div className="mt-3 flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/risca.agustine"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-cream hover:text-cream-light transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-cream/30 inline-flex items-center justify-center">
                  <InstagramIcon size={14} />
                </span>
                <span className="text-[13px]">@risca.agustine</span>
              </a>
              <a
                href="https://wa.me/6281260006303"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-cream hover:text-cream-light transition-colors"
              >
                <span className="w-8 h-8 rounded-full border border-cream/30 inline-flex items-center justify-center">
                  <WhatsappIcon size={14} />
                </span>
                <span className="text-[13px]">+62 812-6000-6303</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-5 border-t border-cream/15 flex flex-col md:flex-row gap-2.5 md:items-center md:justify-between">
          <div className="text-cream/55 text-[11px]">
            © 2026 Risca Insurance Community.
          </div>
          <div className="text-cream/45 text-[9.5px] uppercase tracking-[0.22em]">
            Built with intention · Jakarta
          </div>
        </div>
      </div>
    </footer>
  );
}
