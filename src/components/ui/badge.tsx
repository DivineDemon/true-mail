import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  children?: React.ReactNode;
}

const Badge = ({ className, children }: BadgeProps) => {
  return (
    <span
      className={cn(
        "bg-primary/50 border-primary text-primary flex items-center justify-center gap-2.5 rounded-full border px-3 py-1.5 text-xs font-medium",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
