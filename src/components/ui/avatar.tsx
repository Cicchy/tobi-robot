import { cn } from "@/lib/utils"
import { type ComponentProps, useState } from "react"

function Avatar({
  src,
  alt,
  fallback,
  className,
  ...props
}: ComponentProps<"div"> & {
  src?: string
  alt?: string
  fallback: string
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className={cn(
        "relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-4 border-border shadow-shadow",
        className,
      )}
      {...props}
    >
      {src && !imgError ? (
        <img
          src={src}
          alt={alt ?? fallback}
          className="h-full w-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="font-display text-xl font-black text-foreground">
          {fallback.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  )
}

export { Avatar }
