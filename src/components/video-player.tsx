import { type ComponentProps } from "react"

interface VideoPlayerProps extends ComponentProps<"video"> {
  src: string
  poster?: string
}

export function VideoPlayer({ src, poster, className, ...props }: VideoPlayerProps) {
  return (
    <video
      src={src}
      poster={poster}
      controls
      playsInline
      className={`h-full w-full object-cover ${className ?? ""}`}
      {...props}
    />
  )
}
