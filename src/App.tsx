import logoSrc from "./assets/logo.svg"
import { scenes } from "./data/scenes"
import { Hero } from "./components/hero"
import { Header } from "./components/header"
import { ScenePanel, SceneCenterPanel } from "./components/scene-panel"
import { useSceneNavigation } from "./lib/use-scene-navigation"

function App() {
  const { sectionRef, coverProgress, activeIndex } = useSceneNavigation()
  const slideY = (1 - coverProgress) * 100

  return (
    <div className="flex min-h-dvh flex-col">
      <Header coverProgress={coverProgress} />
      <div ref={sectionRef} className="relative pt-14" style={{ height: `calc(${(2 + scenes.length) * 100}vh + 56px)` }}>
        <div className="sticky top-0 h-dvh z-10 bg-background">
          <Hero />
        </div>

        <div
          className="sticky top-0 h-dvh z-20 overflow-y-auto md:overflow-hidden px-4 sm:px-6"
          style={{ transform: `translateY(${slideY}vh)`, willChange: "transform" }}
        >
          <div className="flex h-full flex-col gap-4 overflow-y-auto rounded-base border-4 border-border bg-white p-3 shadow-shadow md:flex-row md:gap-3 md:overflow-visible md:p-5">
            <SceneCenterPanel activeIndex={activeIndex} />
            <ScenePanel activeIndex={activeIndex} cards={(s) => [...s.leftCards, ...s.rightCards]} translateOffset="0.75rem" />
          </div>
        </div>
      </div>

      <footer className="border-t-4 border-border bg-background px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="TOB-I" className="h-6 w-auto" />
            <p className="font-body text-xs text-foreground/50">Hecho en Argentina</p>
          </div>
          <p className="font-body text-xs text-foreground/30">
            Emprende U · UNCuyo · Mendoza, Argentina
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
