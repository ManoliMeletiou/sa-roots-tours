import { cn } from "@/lib/cn";

export function Photo({
  src,
  alt,
  className,
  imgClassName,
  outline = true,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  outline?: boolean;
}) {
  return (
    <div className={cn("overflow-hidden bg-paper-3", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "h-full w-full object-cover",
          !outline && "no-outline",
          imgClassName,
        )}
      />
    </div>
  );
}
