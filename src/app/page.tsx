import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/ui/floating-input";
import { HeroSection } from "@/components/custom/HeroSection";
import { TrendingSection } from "@/components/custom/TrendingSection";
import { ReasonsSection } from "@/components/custom/ReasonsSection";
import { FAQ } from "@/components/custom/FAQ";
import { Footer } from "@/components/nav/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      {/* Netflix Curve Container */}
      <div className="curve-container">
        <div className="netflix-curve"></div>
      </div>
      <TrendingSection />
      <ReasonsSection />
      <FAQ />
    </div>
  );
}
