import { createElement } from "react"
import "@google/model-viewer"

interface ModelViewerProps {
  src: string
  className?: string
}

export function ModelViewer({ src, className }: ModelViewerProps) {
  return (
    <div
      className={`h-full w-full ${className ?? ""}`}
      style={{
        filter:
          "drop-shadow(0 0 0 #0a0a0a) drop-shadow(2px 0 0 #0a0a0a) drop-shadow(-2px 0 0 #0a0a0a) drop-shadow(0 2px 0 #0a0a0a) drop-shadow(0 -2px 0 #0a0a0a)",
      }}
    >
      {createElement("model-viewer", {
        src,
        "auto-rotate": "",
        "camera-orbit": "45deg 55deg 2.5m",
        orientation: "0deg 90deg 0deg",
        "interaction-prompt": "none",
        "shadow-intensity": "1",
        "ar-status": "not-presenting",
        style: { width: "100%", height: "100%", backgroundColor: "transparent" },
      })}
    </div>
  )
}
