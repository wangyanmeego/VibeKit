import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ServiceShowcase } from "@/components/home/ServiceShowcase";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 全局背景渐变 */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#1a0a2e] to-[#0a1a2e] -z-10" />
      <div className="fixed inset-0 bg-gradient-to-t from-[#0a0a1a] via-transparent to-[#1a0a2e] -z-10" />
      
      <Navbar />
      <main className="flex-1 relative z-10">
        <Hero />
        <ServiceShowcase />
      </main>
      <Footer />
    </div>
  );
}
