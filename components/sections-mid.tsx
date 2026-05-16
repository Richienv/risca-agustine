"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { FadeUp, ImgRise, WordsPullUp } from "./primitives";

/* ─── Reasons ─────────────────────────────────────────────────────────── */
function ReasonCard({
  idx,
  eyebrow,
  title,
  desc,
  dash,
}: {
  idx: number;
  eyebrow: string;
  title: string;
  desc: string;
  dash: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            io.disconnect();
          }
        }),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <ImgRise delay={idx * 90}>
      <div ref={ref} className={`dash-card lift ${seen ? "in" : ""}`}>
        <div className="flex items-center justify-between">
          <span className="dc-tag">{eyebrow}</span>
          <span className="font-display text-red-deep/35 text-sm">
            0{idx + 1}
          </span>
        </div>
        <div
          className="font-display uppercase text-red-deep text-base md:text-lg mt-3 leading-snug"
          style={{ textWrap: "balance" }}
        >
          {title}
        </div>
        {dash}
        <p className="text-charcoal/75 text-[12.5px] leading-relaxed mt-3">
          {desc}
        </p>
      </div>
    </ImgRise>
  );
}

function DashBars({ pct = "85%" }: { pct?: string }) {
  return (
    <div className="bal mt-3.5">
      <div className="bal-row">
        <div>
          <div className="text-[11px] text-charcoal/60">Progress Member</div>
          <div className="bal-amt">{pct}</div>
        </div>
        <span className="dc-tag">Monthly</span>
      </div>
      <div className="bars">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

function DashGauge({ pct = 80 }: { pct?: number }) {
  const segs = 14;
  return (
    <div className="bal mt-3.5">
      <div className="bal-row">
        <div>
          <div className="text-[11px] text-charcoal/60">Member Aktif</div>
          <div className="bal-amt">87%</div>
        </div>
        <span className="dc-tag">21 hari</span>
      </div>
      <div className="gauge">
        <div className="gauge-segs">
          {Array.from({ length: segs }).map((_, i) => {
            const angle = -90 + (i / (segs - 1)) * 180;
            const active = i / (segs - 1) <= pct / 100;
            return (
              <span
                key={i}
                data-active={String(active)}
                style={
                  {
                    "--rot": `rotate(${angle}deg)`,
                    animationDelay: `${i * 60}ms`,
                  } as CSSProperties
                }
              />
            );
          })}
        </div>
        <div className="gauge-pct">{pct}%</div>
      </div>
    </div>
  );
}

function DashLine() {
  return (
    <div className="bal mt-3.5">
      <div className="bal-row">
        <div>
          <div className="text-[11px] text-charcoal/60">Income Trend</div>
          <div className="bal-amt">Rp 75jt</div>
        </div>
        <span className="dc-tag">↑ 25%</span>
      </div>
      <div className="dc-line">
        <svg viewBox="0 0 300 36" preserveAspectRatio="none">
          <path
            className="trail"
            d="M0,28 C40,20 70,30 110,18 C150,8 190,22 230,14 C260,8 285,4 300,2"
          />
          <path
            className="live"
            d="M0,28 C40,20 70,30 110,18 C150,8 190,22 230,14 C260,8 285,4 300,2"
          />
        </svg>
      </div>
      <div className="bal-mini-bars">
        {[28, 42, 18, 55, 68, 40, 72, 85].map((h, i) => (
          <span key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export function Reasons() {
  const data = [
    {
      eyebrow: "MENTORING",
      title: "Dibimbing Sampai Bisa",
      desc: "Mentoring 1-on-1 dari aku dan tim. Strategi, arahan, dan materi sudah disiapkan dari nol — kamu tinggal ikuti alurnya.",
      dash: <DashBars pct="85%" />,
    },
    {
      eyebrow: "FAST TRACK",
      title: "Income Besar + Waktu Fleksibel",
      desc: "Bisa dijalankan tanpa meninggalkan pekerjaan, kuliah, atau keluargamu. Sesuai ritme hidupmu sendiri.",
      dash: <DashGauge pct={80} />,
    },
    {
      eyebrow: "LEGACY",
      title: "Kerja yang Bermakna",
      desc: "Bantu keluarga punya perencanaan keuangan, dana pendidikan, dan dana pensiun. Bukan cuma cuan — berdampak.",
      dash: <DashLine />,
    },
  ];
  return (
    <section
      className="bg-brick py-20 md:py-28 px-5 md:px-10"
      data-screen-label="04 Reasons"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-cream/75 text-[10px] uppercase tracking-[0.28em] mb-4 text-center">
          Kenapa kamu di sini
        </div>
        <WordsPullUp
          text={"Untuk Setiap Alasan,\natau Tidak Sama Sekali."}
          className="font-display text-cream uppercase leading-[0.95] text-center text-[2.1rem] md:text-[3rem] lg:text-[3.5rem]"
        />
        <FadeUp delay={350}>
          <p className="text-cream/85 mt-5 max-w-xl mx-auto text-center text-[13px] md:text-[14px] leading-relaxed">
            Tiga alasan kenapa orang yang dulu skeptis sekarang ada di tim ini.
          </p>
        </FadeUp>
        <div className="mt-12 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {data.map((r, i) => (
            <ReasonCard key={i} idx={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Battle Pass ─────────────────────────────────────────────────────── */
const STEPS = [
  {
    tag: "Hari ke 1–7",
    title: "Lisensi AAJI & Sistem Profesional",
    body: "Daftar ujian AAJI (Rp 258.000). Pelajari materi dasar asuransi via HP — cara kerja polis & manfaat — untuk unlock tahap berikutnya.",
  },
  {
    tag: "Hari ke 8–15",
    title: "Paket Pengetahuan Bisnis",
    body: "Sharing produk keuangan ke keluarga terdekat. Terima materi presentasi & script 'Super Boost' untuk closing. Roleplay dengan mentor.",
  },
  {
    tag: "Hari ke 16–30",
    title: "Kit Storytelling & Branding",
    body: "Unlock setelah closing pertama. Panduan menyusun cerita personal yang kuat untuk meyakinkan calon nasabah dengan elegan.",
  },
  {
    tag: "Hari ke 31–45",
    title: "Bootcamp Eksklusif",
    body: "Akses training eksklusif strategi 'Advanced Selling' & mindset sukses dari praktisi ahli — hanya untuk yang mencapai milestone awal.",
  },
  {
    tag: "Hari ke 46–60",
    title: "Komisi & Incentive",
    body: "Setiap closing, kamu menerima komisi dalam 1–2 bulan. Setiap 1 case ada undian Rp 100rb atau 100 USD. Simpel, transparan.",
  },
  {
    tag: "Hari ke 61–70",
    title: "Bonus Referral Tim",
    body: "Dapatkan 25% setiap tim kamu closing. Bangun tim solid untuk melipatgandakan penghasilan pasifmu.",
  },
  {
    tag: "Hari ke 81–90",
    title: "Trip Perjalanan Dunia",
    body: "Bonus trip Asia + Eropa. Reward spesial untuk performa luar biasa — Moscow, Paris, Korea, Taiwan.",
  },
];

export function BattlePass() {
  return (
    <section
      className="bg-brick py-20 md:py-28 px-5 md:px-10"
      data-screen-label="06 Battle Pass"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-cream/75 text-[10px] uppercase tracking-[0.28em] mb-4 text-center">
          90 hari · battle pass
        </div>
        <WordsPullUp
          text={"Apa yang Bakal\nKamu Dapatkan."}
          className="font-display text-cream uppercase leading-[0.94] text-center text-[2.1rem] md:text-[3rem] lg:text-[3.5rem]"
        />
        <FadeUp delay={300}>
          <p className="text-cream/85 mt-5 max-w-xl mx-auto text-center text-[13px] md:text-[14px] leading-relaxed">
            Step-by-step sesuai milestone bisnis. Reward ditempatkan di titik
            besar — sesuai alur asuransi.
          </p>
        </FadeUp>

        <div className="mt-12 md:mt-14 relative">
          <div className="absolute left-[14px] md:left-1/2 top-2 bottom-2 w-px bg-cream/20 md:-translate-x-px" />
          <ol className="space-y-7 md:space-y-10">
            {STEPS.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <li
                  key={i}
                  className="relative md:grid md:grid-cols-2 md:gap-9 items-center"
                >
                  <span className="absolute left-[8px] md:left-1/2 top-2 w-2.5 h-2.5 rounded-full bg-cream md:-translate-x-1/2 ring-4 ring-brick" />
                  <FadeUp
                    delay={i * 60}
                    className={`${right ? "md:col-start-2" : ""} pl-9 md:pl-0`}
                  >
                    <div
                      className={`${right ? "md:pl-9" : "md:pr-9 md:text-right"}`}
                    >
                      <div className="text-cream/60 text-[10px] uppercase tracking-[0.28em]">
                        {s.tag}
                      </div>
                      <div className="font-display text-cream text-lg md:text-xl uppercase mt-1.5 leading-snug">
                        {s.title}
                      </div>
                      <p className="text-cream/80 text-[13px] md:text-[14px] leading-relaxed mt-2 max-w-md md:inline-block">
                        {s.body}
                      </p>
                    </div>
                  </FadeUp>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
