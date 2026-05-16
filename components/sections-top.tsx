"use client";

import { Fragment, useEffect, useState } from "react";
import { FadeUp, ImgRise, Logo, PillButton, WordsPullUp } from "./primitives";

/* ─── Transforming Nav ────────────────────────────────────────────────── */
export function TransformingNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const linkCls =
    "text-cream text-[10px] md:text-[11px] font-medium uppercase tracking-[0.18em] hover:text-cream-light transition-colors whitespace-nowrap";
  return (
    <nav
      className={`nav-base fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-5 md:gap-9 px-2 ${scrolled ? "nav-floating" : ""}`}
    >
      <a href="#tentang" className={linkCls + " hidden md:inline"}>
        Tentang
      </a>
      <a href="#cerita" className={linkCls + " hidden md:inline"}>
        Cerita
      </a>
      <a href="#top" className="flex items-center">
        <Logo size={scrolled ? "sm" : "md"} />
      </a>
      <a href="#pricing" className={linkCls + " hidden md:inline"}>
        Bergabung
      </a>
      <a href="#kontak" className={linkCls + " hidden md:inline"}>
        Kontak
      </a>
    </nav>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────── */
export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden hero-bg"
      data-screen-label="01 Hero"
    >
      <div
        className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 pt-24 md:pt-28 text-center"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(18px)",
          transition: "opacity .9s ease .1s, transform .9s ease .1s",
        }}
      >
        <div className="inline-flex items-center gap-3 text-cream/85 text-[9px] md:text-[10px] uppercase tracking-[0.32em]">
          <span className="w-6 md:w-9 h-px bg-cream/55" />
          <span>Side career · jakarta · since 2018</span>
          <span className="w-6 md:w-9 h-px bg-cream/55" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-10 mt-6 md:mt-9 text-center">
        <h1
          className="font-display text-cream uppercase"
          style={{
            fontSize: "clamp(1.75rem, 4.6vw, 3.2rem)",
            lineHeight: 0.98,
            letterSpacing: "-0.01em",
            textWrap: "balance",
          }}
        >
          <WordsPullUp
            text={"Mulai Side Career\nDengan Sistem yang"}
            className="block"
          />
          <FadeUp delay={500}>
            <span
              className="font-italic-script normal-case text-cream block mt-2 md:mt-2.5"
              style={{ fontSize: "1.05em", lineHeight: 0.95 }}
            >
              nggak bikin kamu nyasar.
            </span>
          </FadeUp>
        </h1>

        <FadeUp delay={750}>
          <p className="text-cream/85 mt-5 md:mt-6 max-w-md mx-auto text-[12.5px] md:text-[13.5px] leading-relaxed">
            Bisnis mulia untuk pengembangan diri — bukan untuk semua orang, tapi
            untuk yang siap belajar, dibimbing, dan tumbuh. Bisa dijalankan
            tanpa meninggalkan pekerjaan saat ini.
          </p>
        </FadeUp>

        <FadeUp delay={950}>
          <div className="mt-6 md:mt-7 flex flex-wrap items-center justify-center gap-2.5">
            <PillButton variant="cream">Saya Mau Perubahan</PillButton>
            <button
              className="pill"
              style={{
                borderColor: "transparent",
                color: "#F2E7CC",
                textDecoration: "underline",
                textUnderlineOffset: 5,
              }}
            >
              Gabung Komunitas
            </button>
          </div>
        </FadeUp>
      </div>

      <div className="relative z-10 max-w-sm mx-auto px-5 md:px-10 mt-10 md:mt-14 pb-16 md:pb-20">
        <ImgRise>
          <div className="relative aspect-[9/16] rounded-xl md:rounded-2xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-cream/15">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/risca-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />
          </div>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-cream/70 text-[9px] md:text-[10px] uppercase tracking-[0.22em]">
            <span>Cerita singkat dari Risca</span>
            <span>87% member · income &lt; 21 hari</span>
          </div>
        </ImgRise>
      </div>
    </section>
  );
}

/* ─── Trust Bar ───────────────────────────────────────────────────────── */
export function TrustBar() {
  const items = [
    { k: "2000+", v: "Gen-Z udah breakout" },
    { k: "87%", v: "income < 21 hari" },
    { k: "AAJI", v: "lisensi profesional" },
    { k: "Manulife", v: "agency network" },
  ];
  return (
    <section
      className="bg-cream border-y border-red-deep/10 py-7 md:py-9 px-5 md:px-10"
      aria-label="Trust"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-5 items-center">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center md:border-r md:last:border-r-0 border-red-deep/15 px-2"
          >
            <div className="font-display text-red-deep text-2xl md:text-3xl uppercase leading-none">
              {it.k}
            </div>
            <div className="text-red-deep/65 text-[10px] uppercase tracking-[0.22em] mt-2">
              {it.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Marquee ─────────────────────────────────────────────────────────── */
export function Marquee() {
  const Row = ({ ariaHidden }: { ariaHidden?: boolean }) => (
    <div
      className="flex gap-7 md:gap-10 whitespace-nowrap pr-7 md:pr-10 items-center"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <Fragment key={i}>
          <span className="font-italic-script text-cream text-3xl md:text-5xl">
            Kerja Keras.
          </span>
          <span className="text-cream text-base md:text-xl">✦</span>
          <span className="font-italic-script text-cream text-3xl md:text-5xl">
            Reward Besar.
          </span>
          <span className="text-cream text-base md:text-xl">✦</span>
          <span className="font-italic-script text-cream text-3xl md:text-5xl">
            Mimpi Nyata.
          </span>
          <span className="text-cream text-base md:text-xl">✦</span>
        </Fragment>
      ))}
    </div>
  );
  return (
    <section className="relative bg-brick py-4 md:py-6 overflow-hidden border-y border-cream/15">
      <div className="marquee-track animate-marquee">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}

/* ─── Founder ─────────────────────────────────────────────────────────── */
export function Founder() {
  return (
    <section
      id="tentang"
      className="bg-cream py-16 md:py-24 px-5 md:px-10"
      data-screen-label="03 Founder"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-9 lg:gap-12 items-center">
        <div className="lg:col-span-5">
          <div className="text-red-deep/70 text-[10px] uppercase tracking-[0.28em] mb-3.5">
            Kenalan dengan
          </div>
          <WordsPullUp
            text={"Mentor Yang\nNggak Cuma Ngomong."}
            className="font-display text-red-deep uppercase leading-[0.95] text-[2.1rem] md:text-[2.75rem] lg:text-[3.25rem]"
          />
          <FadeUp delay={350}>
            <p className="text-red-deep/85 mt-5 text-[13px] md:text-[14px] leading-relaxed">
              Risca Agustine memimpin tim Financial Consultant di bawah Agency
              Network Manulife — dan sebagian besar member-nya bukan dari
              background asuransi. Mahasiswa, ibu, fresh graduate, ex-corporate.
              Sistemnya satu, hasilnya berbeda-beda.
            </p>
            <p className="text-red-deep/85 mt-3 text-[13px] md:text-[14px] leading-relaxed">
              Yang dia jaga di tim cuma tiga: konsistensi pola kerja, kejujuran
              ke nasabah, dan bimbingan satu lawan satu sampai kamu bisa.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <PillButton variant="red">Baca Cerita Lengkap</PillButton>
              <span className="font-italic-script text-red-deep text-lg md:text-xl">
                &quot;satu keputusan, satu sistem.&quot;
              </span>
            </div>
          </FadeUp>
        </div>
        <ImgRise className="lg:col-span-7">
          <div className="ph aspect-[16/10] rounded-xl md:rounded-2xl" data-tone="dust">
            <span className="ph-label">
              portrait · risca agustine · candid in office · placeholder
            </span>
          </div>
        </ImgRise>
      </div>
    </section>
  );
}
