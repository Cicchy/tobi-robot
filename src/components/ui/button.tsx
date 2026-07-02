import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-foreground bg-[#ffeb3b] border-4 border-border shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_0px_#0a0a0a]",
        noShadow: "text-foreground bg-main border-4 border-border",
        neutral:
          "bg-white text-foreground border-4 border-border shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_0px_#0a0a0a]",
        reverse:
          "text-foreground bg-[#ff4081] border-4 border-border shadow-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_0px_#0a0a0a]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
