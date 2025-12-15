"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDownIcon, ChevronUpIcon, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [voteCount, setVoteCount] = useState(product.votes);

  const handleUpvote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!hasVoted) {
      setHasVoted(true);
      setVoteCount(voteCount + 1);
    }
  };

  const handleDownvote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (hasVoted) {
      setHasVoted(false);
      setVoteCount(voteCount - 1);
    }
  };

  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-[180px] h-full min-w-[350px]">
        <CardHeader className="flex-1">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
                {product.isFeatured && (
                  <Badge className="gap-1 bg-primary text-primary-foreground">
                    <StarIcon className="size-3 fill-current" />
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>
            <div className="flex flex-col items-center gap-1 shrink-0">
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleUpvote}
                className={cn(
                  "h-8 w-8",
                  hasVoted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                )}
              >
                <ChevronUpIcon className="size-5" />
              </Button>
              <span className="text-sm font-semibold transition-colors text-foreground">
                {voteCount}
              </span>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={handleDownvote}
                disabled={!hasVoted}
                className={cn(
                  "h-8 w-8 text-primary",
                  hasVoted
                    ? "hover:bg-destructive/10 hover:text-destructive"
                    : "opacity-50 cursor-not-allowed"
                )}
              >
                <ChevronDownIcon className="size-5" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardFooter>
          <div className="flex items-center gap-2">
            {product.tags.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
