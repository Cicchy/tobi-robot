import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import logoSrc from "../assets/logo.svg"
import tobiImg from "../assets/tobi.png"

export function Hero() {
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollBtn(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative flex min-h-dvh items-center justify-center bg-background px-6">
      <div className="flex w-full max-w-6xl items-center gap-12">
        <div className="flex flex-1 flex-col items-start text-left">
          <img src={logoSrc} alt="TOB-I" className="h-20 w-auto sm:h-24" />

          <h1 className="mt-8 font-display text-4xl font-black leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
            Robótica educativa<br />
            <span className="inline-block rounded-base border-4 border-border bg-[#e54833] px-3 py-1 shadow-shadow text-[#0a0a0a]">
              hecha accesible
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-base text-foreground sm:text-lg font-body">
            TOB-I es un robot cuadrúpedo programable, armable y fabricado en Argentina.
            {" "}<strong className="text-foreground">Hasta 10x más barato</strong> que cualquier alternativa importada.
          </p>

          <Button size="lg" className="mt-8 px-10 py-6 text-base">Quiero sumarme!</Button>
        </div>

        <div className="relative flex flex-1 items-end justify-center">
          <img src={tobiImg} alt="TOB-I robot" className="h-auto w-full scale-[2] origin-center drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)] [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]" />
        </div>
      </div>

      <div className="absolute inset-x-0 flex justify-center bottom-[clamp(80px,12vh,140px)]">
        <button
          className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-border bg-[#ece4d5] shadow-shadow transition-[opacity,transform] duration-700 ${
            showScrollBtn ? "opacity-100 animate-bounce" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </section>
  )
}
