import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import tobiImg from "../assets/tobi.png"

export function Hero() {
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollBtn(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-dvh items-center justify-center bg-[#ECEEF1] px-4 md:px-6">
      <div className="flex w-full max-w-6xl flex-col items-center gap-6 md:flex-row md:items-center md:gap-12">
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <h1 className="mt-12 font-display text-5xl font-bold leading-[1.1] sm:text-6xl md:text-8xl">
            <span className="inline-block rounded-base border-4 border-border bg-[#ea4335] px-3 py-1 text-foreground shadow-shadow">
              Robótica
            </span>{" "}
            <span className="inline-block rounded-base border-4 border-border bg-[#fbbc04] px-3 py-1 text-foreground shadow-shadow">
              educativa
            </span>{" "}
            <span className="inline-block rounded-base border-4 border-border bg-[#2ca567] px-3 py-1 text-foreground shadow-shadow">
              accesible
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-foreground/60 sm:text-lg font-body">
            TOB-I es un robot cuadrúpedo programable, armable y fabricado en Argentina. Hasta 10x más barato que cualquier alternativa importada.
          </p>

          <a href="tobi-onepager.pdf" download>
            <Button size="lg" className="mt-8 px-10 py-6 text-base bg-[#4285f4]">
              <Download className="mr-2 h-5 w-5" />
              Descargar one pager
            </Button>
          </a>
        </div>

        <div className="relative flex flex-1 items-end justify-center">
          <img src={tobiImg} alt="TOB-I robot" className="h-auto w-full max-h-[40vh] origin-center drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)] [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)] scale-100 md:max-h-none md:scale-[2]" />
        </div>
      </div>

      <div className="absolute inset-x-0 flex justify-center bottom-[clamp(80px,12vh,140px)]">
        <button
          className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-border bg-white text-foreground shadow-shadow transition-[opacity,transform] duration-700 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[2px_2px_0px_0px_#0a0a0a] ${
            showScrollBtn ? "opacity-100 animate-bounce" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
