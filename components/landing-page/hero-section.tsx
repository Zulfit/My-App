import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, EyeIcon, RocketIcon, SparklesIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import StatsCard from "./stats-card";

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

const statsData = [
    {
        icon: RocketIcon,
        value: "2.5K+",
        label: "Projects Shared",
    },
    {
        icon: UserIcon,
        value: "10K+",
        label: "Active Creators",
        hasBorder: true,
    },
    {
        icon: EyeIcon,
        value: "50K+",
        label: "Monthly Visitors",
    },
]

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
          <Button asChild size="lg" className="text-base px-8 shadow-lg">
            <Link href="/submit">
              <SparklesIcon className="size-5" />
              Share Your Project
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="text-base px-8 shadow-lg"
            variant="secondary"
          >
            <Link href="/explore">
              Explore Projects <ArrowRightIcon className="size-5" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-2xl w-full">
        {statsData.map((stat) => (
            <StatsCard key={stat.label} {...stat} />
        ))}
        </div>
      </div>
    </section>
  );
}
