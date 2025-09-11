import { cn } from "../../src/lib/utils";
import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  id?: string;
}
export function TypographyH1({
  className = "",
  children,
  id,
}: TypographyProps) {
  return (
    <div className="not-prose">
      <h1
        id={id}
        className={cn(
          "font-articulat-semibold text-5xl scroll-m-20",
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
}

export function TypographyH2({
  className = "",
  children,
  id,
}: TypographyProps) {
  return (
    <div className="not-prose">
      <h2
        id={id}
        className={cn(
          "font-articulat-semibold text-3xl scroll-m-20",
          className
        )}
      >
        {children}
      </h2>
    </div>
  );
}
