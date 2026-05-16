import { ScrollEffects } from "@/components/scroll-effects";
import {
  Founder,
  Hero,
  Marquee,
  TransformingNav,
  TrustBar,
} from "@/components/sections-top";
import { BattlePass, Reasons } from "@/components/sections-mid";
import {
  BuildYourDream,
  FAQ,
  Footer,
  HighEarners,
  IncomeBreakdown,
  Pricing,
  ProofGallery,
  TestimonialsCarousel,
} from "@/components/sections-end";

export default function Page() {
  return (
    <>
      <ScrollEffects />
      <TransformingNav />
      <Hero />
      <TrustBar />
      <Marquee />
      <Founder />
      <Reasons />
      <BattlePass />
      <ProofGallery />
      <TestimonialsCarousel />
      <HighEarners />
      <IncomeBreakdown />
      <Pricing />
      <FAQ />
      <BuildYourDream />
      <Footer />
    </>
  );
}
