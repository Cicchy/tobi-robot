import { useState, useEffect, useRef } from "react"
import { Menu } from "lucide-react"
import logoSrc from "../assets/logo.svg"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { useIsMobile } from "@/lib/use-media-query"

const tabs = [
  { label: "Inicio", href: "#" },
  { label: "Producto", href: "#producto" },
  { label: "Características", href: "#caracteristicas" },
  { label: "Contacto", href: "#contacto" },
]

export function Header({ coverProgress }: { coverProgress: number }) {
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const lastY = useRef(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastY.current && currentY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastY.current = currentY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scenesVisible = coverProgress >= 1

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-center bg-background px-4 py-3 transition-transform duration-300 sm:px-6 ${
        scenesVisible || hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex w-full max-w-6xl items-center justify-between gap-8">
        <a href="#">
          <img src={logoSrc} alt="TOB-I" className="h-8 w-auto" />
        </a>

        {!isMobile && (
          <div className="flex items-center gap-6">
            {tabs.map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="font-body text-sm font-bold text-foreground/60 transition-colors hover:text-foreground"
              >
                {tab.label}
              </a>
            ))}
          </div>
        )}

        {isMobile && (
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-base border-2 border-border bg-background text-foreground shadow-shadow transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#0a0a0a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#0a0a0a]"
            >
              <Menu className="h-5 w-5" />
            </button>
            <SheetContent side="right" className="flex flex-col gap-2 p-6">
              <SheetTitle className="mb-2">Menú</SheetTitle>
              <SheetDescription className="sr-only">Navegación principal</SheetDescription>
              <nav className="flex flex-col gap-3">
                {tabs.map((tab) => (
                  <a
                    key={tab.href}
                    href={tab.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-base border-2 border-border bg-background px-4 py-3 font-display text-base font-bold text-foreground shadow-shadow transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#0a0a0a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#0a0a0a]"
                  >
                    {tab.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </nav>
    </header>
  )
}
