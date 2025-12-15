import { ArrowRightIcon, StarIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";

const featuredProducts = [
  {
    id: 1,
    name: "ParityKit",
    description: "A toolkit for creating parity products",
    tags: ["SaaS", "Pricing", "Global"],
    votes: 65,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Modern Full Stack Next.js App",
    description: "Learn how to build a modern full stack Next.js app",
    tags: ["Next.js", "Full Stack", "Course"],
    votes: 124,
    isFeatured: false,
  },
  {
    id: 3,
    name: "ProffyBubble",
    description: "Social proof notifications that converts visitors to customers",
    tags: ["Marketing", "SaaS", "Conversion"],
    votes: 535,
    isFeatured: false,
  },
  {
    id: 4,
    name: "Developer to Leader",
    description: "A course for developers to become leaders",
    tags: ["Leadership", "Course"],
    votes: 506,
    isFeatured: false,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-4">
          <SectionHeader
            title="Featured Products"
            icon={StarIcon}
            description="Top picks from our community this week."
          />
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/explore">
              View All <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
