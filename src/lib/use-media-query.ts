import { useEffect, useState } from "react"

const MOBILE_QUERY = "(max-width: 767px)"

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches)
    }
    handleChange(mql)
    mql.addEventListener("change", handleChange)
    return () => mql.removeEventListener("change", handleChange)
  }, [])

  return isMobile
}
