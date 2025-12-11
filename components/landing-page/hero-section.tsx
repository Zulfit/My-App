import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LiveBadge = () => {
  return (
    <Badge variant="outline" className="bg-white text-black">
      <span className="relative flex h-2 w-2">
        <span className="absolute left-0 top-0 h-full w-full rounded-full bg-black"></span>
      </span>
      <span className="text-muted-foreground">
        Join thousands of creators sharing their work
      </span>
    </Badge>
  );
};

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <LiveBadge />
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
          Share What You&apos;ve Built, Discover What&apos;ve Launching
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          A community platform for creators to showcase their apps, AI tools,
          SaaS products, and creative projects. Authentic launches, real
          builders, genuine feedback.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button asChild size="lg">Share Your Project</Button>
          <Button asChild size="lg">Explore Projects</Button>
        </div>
      </div>
    </section>
  );
}
