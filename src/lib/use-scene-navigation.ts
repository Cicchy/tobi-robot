import { useState, useEffect, useRef } from "react"
import { scenes } from "@/data/scenes"
import { useIsMobile } from "./use-media-query"

interface SceneNavigation {
  sectionRef: React.RefObject<HTMLDivElement | null>
  coverProgress: number
  activeIndex: number
}

export function useSceneNavigation(): SceneNavigation {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [coverProgress, setCoverProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!sectionRef.current) return

    if (isMobile) {
      // Mobile: cover always shown (1) so sticky stays revealed, and
      // active scene is determined by which scene div is most visible.
      setCoverProgress(1)

      const observer = new IntersectionObserver(
        (entries) => {
          // Pick the entry with the largest intersection ratio.
          let bestIndex = 0
          let bestRatio = 0
          for (const entry of entries) {
            if (entry.intersectionRatio > bestRatio) {
              const idx = scenes.findIndex((s) => s.id === entry.target.id)
              if (idx >= 0) {
                bestRatio = entry.intersectionRatio
                bestIndex = idx
              }
            }
          }
          if (bestRatio > 0) setActiveIndex(bestIndex)
        },
        {
          // Trigger when a scene is roughly centered in the viewport.
          rootMargin: "-30% 0px -30% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        },
      )

      for (const scene of scenes) {
        const el = document.getElementById(scene.id)
        if (el) observer.observe(el)
      }

      return () => observer.disconnect()
    }

    // Desktop: scroll-based progress over the whole scenes section.
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const headerHeight = 0
      const totalScroll = sectionRef.current.offsetHeight - window.innerHeight

      if (rect.top > headerHeight) {
        setCoverProgress(0)
        setActiveIndex(0)
        return
      }

      const scrolled = -(rect.top - headerHeight)
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll))
      const n = scenes.length
      const rawProgress = progress * (1 + n)

      setCoverProgress(Math.min(1, rawProgress))

      if (rawProgress > 1) {
        const sceneProgress = Math.min(1, (rawProgress - 1) / n)
        setActiveIndex(Math.min(n - 1, Math.floor(sceneProgress * n)))
      } else {
        setActiveIndex(0)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  return { sectionRef, coverProgress, activeIndex }
}
