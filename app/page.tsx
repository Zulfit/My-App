import HeroSection from "@/components/landing-page/hero-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
    </div>
  );
}
