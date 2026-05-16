import type { Metadata } from "next";
import { Archivo_Black, Inter, Sail, Yellowtail } from "next/font/google";
import "./globals.css";

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const sail = Sail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sail",
  display: "swap",
});
const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-yellowtail",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Risca Agustine - Financial Consultant & Career Opportunity | Peluang Bisnis untuk Ibu",
  description:
    "Bergabung dengan Tim Risca Agustine. Peluang karir sebagai Financial Consultant khusus untuk ibu rumah tangga yang ingin mengoptimalkan waktu dan meraih penghasilan tambahan. Program mentoring dan training eksklusif.",
  keywords:
    "risca agustine, financial consultant, business partner, peluang bisnis ibu rumah tangga, konsultan keuangan jakarta, penghasilan tambahan ibu, mentoring bisnis jakarta, bisnis sambilan ibu, tim bisnis jakarta, ibu produktif jakarta",
  openGraph: {
    title:
      "Risca Agustine - Financial Consultant & Career Opportunity | Peluang Bisnis untuk Ibu",
    description:
      "Bergabung dengan Tim Risca Agustine. Peluang karir sebagai Financial Consultant untuk ibu rumah tangga di Jakarta yang ingin penghasilan tambahan.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${archivo.variable} ${inter.variable} ${sail.variable} ${yellowtail.variable}`}
    >
      <body className="bg-brick text-cream font-body antialiased">
        {children}
      </body>
    </html>
  );
}
