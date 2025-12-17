import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

const recentlyLaunchedProducts = [
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
  //   {
  //     id: 3,
  //     name: "ProffyBubble",
  //     description:
  //       "Social proof notifications that converts visitors to customers",
  //     tags: ["Marketing", "SaaS", "Conversion"],
  //     votes: 535,
  //     isFeatured: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Developer to Leader",
  //     description: "A course for developers to become leaders",
  //     tags: ["Leadership", "Course"],
  //     votes: 506,
  //     isFeatured: false,
  //   },
];

export default function RecentlyLaunchedProducts() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-4">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products we've launched recently."
        />
</div>
        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon!"
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}
