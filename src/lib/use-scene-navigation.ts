import { useState, useEffect, useRef } from "react"
import { scenes } from "@/data/scenes"

interface SceneNavigation {
  sectionRef: React.RefObject<HTMLDivElement | null>
  coverProgress: number
  activeIndex: number
}

export function useSceneNavigation(): SceneNavigation {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [coverProgress, setCoverProgress] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
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
  }, [])

  return { sectionRef, coverProgress, activeIndex }
}
