import { Button } from "@/components/ui/button"
import { scenes, type Scene, type SceneCard } from "@/data/scenes"

function Card({ value, label, color }: SceneCard & { color: string }) {
  return (
    <div className="flex flex-1 items-center justify-center rounded-base border-4 border-border shadow-shadow text-center" style={{ backgroundColor: color }}>
      <div className="px-4">
        <p className="font-display text-2xl font-black text-foreground">{value}</p>
        <p className="font-body text-xs uppercase tracking-widest text-foreground/60">{label}</p>
      </div>
    </div>
  )
}

interface ScenePanelProps {
  activeIndex: number
  cards: (scene: Scene) => SceneCard[]
  scrollAnimation: "scroll-down" | "scroll-up"
  translateOffset: string
}

export function ScenePanel({ activeIndex, cards, scrollAnimation, translateOffset }: ScenePanelProps) {
  return (
    <div className="relative flex-1">
      {scenes.map((scene, i) => (
        <div
          key={scene.id}
          className="absolute inset-0 transition-[opacity,transform] duration-700 ease-in-out"
          style={{
            opacity: activeIndex === i ? 1 : 0,
            transform: activeIndex === i ? "translateY(0)" : `translateY(${translateOffset})`,
            pointerEvents: activeIndex === i ? "auto" : "none",
          }}
        >
          <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_8%,black_92%,transparent_100%)]">
            <div className={`flex flex-col h-[200%] animate-${scrollAnimation} will-change-transform`}>
              <div className="flex flex-col gap-3 h-[calc(50%-0.375rem)]">
                {cards(scene).map((card, j) => (
                  <Card key={j} {...card} color={scene.color} />
                ))}
              </div>
              <div className="h-3" />
              <div className="flex flex-col gap-3 h-[calc(50%-0.375rem)]">
                {cards(scene).map((card, j) => (
                  <Card key={j} {...card} color={scene.color} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function SceneCenterPanel({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative flex w-1/2 items-center justify-center">
      {scenes.map((scene, i) => (
        <div
          key={scene.id}
          className="absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-700 ease-in-out"
          style={{
            opacity: activeIndex === i ? 1 : 0,
            transform: activeIndex === i ? "translateY(0)" : "translateY(1rem)",
            pointerEvents: activeIndex === i ? "auto" : "none",
          }}
        >
          <div className="flex w-full max-w-xl flex-col items-center" style={{ "--scene-color": scene.color } as React.CSSProperties}>
            <span
              className="inline-flex items-center gap-1.5 rounded-base border-4 border-border px-3 py-1 shadow-shadow font-body text-[10px] font-bold uppercase tracking-widest text-foreground"
              style={{ backgroundColor: scene.color }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
              {scene.subtitle}
            </span>
            <h2 className="mt-5 text-center font-display text-4xl font-black leading-[1.1] text-foreground sm:text-5xl">
              {scene.title}
            </h2>
            <div className="mt-8 w-full">
              <div className="space-y-4 text-center">
                <p className="text-foreground font-body leading-relaxed">{scene.content.description}</p>
                {scene.content.highlight && (
                  <p className="font-display text-lg font-bold text-[var(--scene-color)]">{scene.content.highlight}</p>
                )}
                {scene.content.buttons && (
                  <div className="flex flex-wrap justify-center gap-3">
                    {scene.content.buttons.map((btn, j) => (
                      <Button key={j} variant={btn.variant} size={btn.size}>{btn.label}</Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
