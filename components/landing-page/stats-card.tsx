import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function StatsCard({
  icon: Icon,
  value,
  label,
  hasBorder,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  hasBorder?: boolean;
}) {
  return (
    <div className={cn("space-y-2", hasBorder && "border-x border-border/70")}>
      <div className="flex items-center gap-2 justify-center">
        <Icon className="size-5 text-primary/70" />
        <p className="text-3xl sm:text-4xl font-bold">{value}</p>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
}
