import { FeaturesSection } from "@/components/landing/features-section";
import { Footer } from "@/components/landing/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { LanguagesSection } from "@/components/landing/languages-section";
import { Navbar } from "@/components/landing/navbar";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <LanguagesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
