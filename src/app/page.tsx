import Hero from '@/components/sections/Hero';
import Features from "@/components/sections/Features";
import CallToAction from "@/components/sections/CallToAction";

export default function HomePage() {
  return (
      <main className="bg-[#f8f9fa] text-[#2D2D2D] min-h-screen">
        <Hero />
        <Features />
        <CallToAction />
      </main>
  );
}