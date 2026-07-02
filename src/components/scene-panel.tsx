import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { scenes, type Scene, type SceneCard } from "@/data/scenes"
import { ModelViewer } from "./model-viewer"
import { VideoPlayer } from "./video-player"
import {
  DollarSign, Wrench, Globe, Monitor, Cpu, Code, Shield, TrendingUp,
  GraduationCap, MapPin, Award, Palette, Briefcase,
  type LucideIcon,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from "recharts"

const iconMap: Record<string, LucideIcon> = {
  DollarSign, Wrench, Globe, Monitor, Cpu, Code, Shield, TrendingUp,
  GraduationCap, MapPin, Award, Palette, Briefcase,
}

const avatarColors = ["#e54833", "#3e7ce4", "#f9cc48", "#2d8c47"]

function lighten(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16)
  const r = Math.min(255, ((num >> 16) & 0xFF) + Math.round((255 - ((num >> 16) & 0xFF)) * amount))
  const g = Math.min(255, ((num >> 8) & 0xFF) + Math.round((255 - ((num >> 8) & 0xFF)) * amount))
  const b = Math.min(255, (num & 0xFF) + Math.round((255 - (num & 0xFF)) * amount))
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`
}

function StandardCard({ title, body, icon, color, index }: SceneCard & { color: string; index: number }) {
  const isColorBg = index % 2 === 0
  const bgColor = isColorBg ? color : lighten(color, 0.55)
  const IconComponent = icon ? iconMap[icon] : null

  return (
    <div
      className="flex flex-col justify-center rounded-base border-[3px] border-border p-4 shadow-shadow transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#0a0a0a] h-full cursor-default md:border-4 md:p-6"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center gap-2">
        {IconComponent && (
          <span className="flex h-7 w-7 items-center justify-center rounded-base border-2 border-border" style={{ backgroundColor: isColorBg ? "rgba(0,0,0,0.15)" : color }}>
            <IconComponent className="h-4 w-4 text-foreground" />
          </span>
        )}
        <p className="font-display text-base font-bold leading-tight text-foreground">{title}</p>
      </div>
      <hr className="border-t-2 border-border my-2" />
      <p className="font-body text-sm leading-relaxed text-left text-foreground md:text-justify">{body}</p>
    </div>
  )
}

function MetricCard({ title, body, icon, value, color, index }: SceneCard & { color: string; index: number }) {
  const isColorBg = index % 2 === 0
  const bgColor = isColorBg ? color : lighten(color, 0.55)
  const IconComponent = icon ? iconMap[icon] : null

  return (
    <div
      className="flex flex-col rounded-base border-[3px] border-border p-4 shadow-shadow transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#0a0a0a] h-full cursor-default md:border-4 md:p-6"
      style={{ backgroundColor: bgColor }}
    >
      <p className="font-display text-4xl font-black leading-none text-foreground">
        {value}
      </p>
      <div className="flex items-center gap-2 mt-2">
        {IconComponent && <IconComponent className="h-4 w-4 shrink-0 text-foreground" />}
        <p className="font-body text-[11px] font-bold uppercase tracking-wider text-foreground">{title}</p>
      </div>
      <hr className="border-t-2 border-border my-2" />
      <p className="font-body text-sm leading-relaxed text-left text-foreground md:text-justify">{body}</p>
    </div>
  )
}

function QuoteCard({ title, body, color, index }: SceneCard & { color: string; index: number }) {
  const isColorBg = index % 2 === 0
  const bgColor = isColorBg ? color : lighten(color, 0.55)

  return (
    <div
      className="flex flex-col rounded-base border-[3px] border-border p-4 shadow-shadow transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#0a0a0a] h-full cursor-default md:border-4 md:p-6"
      style={{ backgroundColor: bgColor }}
    >
      <p className="font-body text-xl leading-relaxed font-bold text-foreground">{body}</p>
      <hr className="border-t-2 border-border my-3" />
      <p className="font-display text-xs font-bold text-foreground opacity-60">— {title}</p>
    </div>
  )
}

function CtaCard({ title, body, icon, buttons, color, index }: SceneCard & { color: string; index: number }) {
  const isColorBg = index % 2 === 0
  const bgColor = isColorBg ? color : lighten(color, 0.55)
  const IconComponent = icon ? iconMap[icon] : null

  return (
    <div
      className="flex flex-col rounded-base border-[3px] border-border p-4 shadow-shadow transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#0a0a0a] h-full cursor-default md:border-4 md:p-6"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-center gap-2">
        {IconComponent && (
          <span className="flex h-7 w-7 items-center justify-center rounded-base border-2 border-border" style={{ backgroundColor: isColorBg ? "rgba(0,0,0,0.15)" : color }}>
            <IconComponent className="h-4 w-4 text-foreground" />
          </span>
        )}
        <p className="font-display text-base font-bold leading-tight text-foreground">{title}</p>
      </div>
      <hr className="border-t-2 border-border my-2" />
      <p className="font-body text-sm leading-relaxed text-left text-foreground mb-3 md:text-justify md:mb-3">{body}</p>
      {buttons && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {buttons.map((btn, j) => (
            <Button key={j} variant={btn.variant} size={btn.size ?? "sm"}>{btn.label}</Button>
          ))}
        </div>
      )}
    </div>
  )
}

function ProfileCard({ title, body, icon, role, image, color, index }: SceneCard & { color: string; index: number }) {
  const isColorBg = index % 2 === 0
  const bgColor = isColorBg ? color : lighten(color, 0.55)
  const RoleIcon = icon ? iconMap[icon] : null
  const c = avatarColors[index % avatarColors.length]
  const initials = title.split(" ").map((w: string) => w[0]).join("").slice(0, 2).toUpperCase()

  return (
    <div
      className="flex flex-col items-center justify-center gap-2 rounded-base border-[3px] border-border p-4 shadow-shadow transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#0a0a0a] h-full cursor-default md:border-4 md:p-6"
      style={{ backgroundColor: bgColor }}
    >
      <Avatar
        src={image}
        alt={title}
        fallback={initials}
        className="h-14 w-14 text-xl"
        style={{ backgroundColor: c, color: c === "#f9cc48" ? "#0a0a0a" : "#fff" }}
      />
      <p className="font-display text-base font-bold leading-tight text-foreground text-center">{title}</p>
      <span
        className="inline-flex items-center gap-1 rounded-base border-2 border-border px-2 py-0.5 font-body text-[9px] font-bold uppercase tracking-widest text-foreground shadow-shadow"
        style={{ backgroundColor: c, color: c === "#f9cc48" ? "#0a0a0a" : "#fff" }}
      >
        {RoleIcon && <RoleIcon className="h-3 w-3" />}
        {role}
      </span>
      <p className="text-center font-body text-xs leading-relaxed text-foreground">{body}</p>
    </div>
  )
}

function ChartCard({ title, chartData, color, index }: SceneCard & { color: string; index: number }) {
  const isColorBg = index % 2 === 0
  const bgColor = isColorBg ? color : lighten(color, 0.55)
  const inactiveColor = lighten(color, 0.7)

  return (
    <div
      className="flex flex-col rounded-base border-[3px] border-border p-4 shadow-shadow transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#0a0a0a] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0px_0px_#0a0a0a] cursor-default md:border-4 md:p-6"
      style={{ backgroundColor: bgColor }}
    >
      <p className="font-display text-base font-bold leading-tight text-foreground">{title}</p>
      <hr className="border-t-2 border-border mt-2 mb-3" />
      <div className="aspect-[2/1] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#80808080" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: "#0a0a0a", fontWeight: 700 }}
              axisLine={{ stroke: "#0a0a0a", strokeWidth: 2 }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#0a0a0a", fontWeight: 700 }}
              axisLine={{ stroke: "#0a0a0a", strokeWidth: 2 }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 0,
                border: "3px solid #0a0a0a",
                boxShadow: "5px 5px 0px 0px #0a0a0a",
                fontSize: 12,
                fontWeight: 700,
                background: "var(--background)",
              }}
            />
            <Bar dataKey="value" radius={[12, 12, 12, 12]}>
              {chartData?.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.name === "Cumplen con la ley" ? color : inactiveColor}
                  stroke="#0a0a0a"
                  strokeWidth={2}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function Card(props: SceneCard & { color: string; index: number }) {
  const type = props.type ?? "standard"

  switch (type) {
    case "metric":
      return <MetricCard {...props} />
    case "quote":
      return <QuoteCard {...props} />
    case "cta":
      return <CtaCard {...props} />
    case "profile":
      return <ProfileCard {...props} />
    case "chart":
      return <ChartCard {...props} />
    default:
      return <StandardCard {...props} />
  }
}

interface ScenePanelProps {
  activeIndex: number
  cards: (scene: Scene) => SceneCard[]
  translateOffset: string
}

export function ScenePanel({ activeIndex, cards, translateOffset }: ScenePanelProps) {
  return (
    <div className="relative flex-1 max-h-[50vh] overflow-y-auto md:max-h-none md:flex-[1.3] md:overflow-visible">
      {scenes.map((scene, i) => (
        <div
          key={scene.id}
          id={scene.id}
          className="absolute inset-0 transition-[opacity,transform] duration-700 ease-in-out"
          style={{
            opacity: activeIndex === i ? 1 : 0,
            transform: activeIndex === i ? "translateY(0)" : `translateY(${translateOffset})`,
            pointerEvents: activeIndex === i ? "auto" : "none",
          }}
        >
          <div className="flex h-full flex-col gap-3">
              {cards(scene).map((card, j) => (
                <div
                  key={j}
                  className={`${card.type === "chart" ? "" : "flex-1"} min-h-0 transition-all duration-500 ease-out`}
                  style={{
                    opacity: activeIndex === i ? 1 : 0,
                    transform: activeIndex === i ? "translateY(0)" : "translateY(0.5rem)",
                    transitionDelay: activeIndex === i ? `${j * 80}ms` : "0ms",
                  }}
                >
                  <Card {...card} color={scene.color} index={j} />
                </div>
              ))}
            </div>
        </div>
      ))}
    </div>
  )
}

export function SceneCenterPanel({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="relative flex flex-1 flex-col max-h-[50vh] min-h-0 md:max-h-none md:flex-[2] md:items-center md:justify-center">
      {scenes.map((scene, i) => (
        <div
          key={scene.id}
          id={scene.id}
          className="absolute inset-0 flex items-center justify-center overflow-y-auto transition-all duration-700 ease-in-out md:overflow-visible"
          style={{
            opacity: activeIndex === i ? 1 : 0,
            transform: activeIndex === i ? "translateY(0)" : "translateY(1rem)",
            pointerEvents: activeIndex === i ? "auto" : "none",
            transitionDelay: activeIndex === i ? "80ms" : "0ms",
          }}
        >
          {scene.content.media ? (
            <div className="flex w-full max-w-xl flex-col" style={{ "--scene-color": scene.color } as React.CSSProperties}>
              <div className="flex flex-col items-center">
                <span
                  className="inline-flex items-center gap-1.5 rounded-base border-4 border-border px-3 py-1 shadow-shadow font-body text-[10px] font-bold uppercase tracking-widest text-foreground"
                  style={{ backgroundColor: scene.color }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
                  {scene.subtitle}
                </span>
              </div>
              <h2 className="mt-5 text-center font-display text-3xl font-black leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
                {scene.title}
              </h2>
              <p className="mt-4 text-center font-body text-sm leading-relaxed text-foreground">
                {scene.content.description}
              </p>
              {scene.content.highlight && (
                <p className="mt-2 text-center font-display text-sm font-bold text-foreground">{scene.content.highlight}</p>
              )}
              <div className="mt-5 flex w-full flex-col gap-3">
                {scene.content.media.type === "model" || scene.content.media.type === "both" ? (
                  <div className="h-[300px] overflow-hidden sm:h-[400px] md:h-[500px]">
                    <ModelViewer src={scene.content.media.modelSrc ?? ""} />
                  </div>
                ) : null}
                {scene.content.media.type === "video" || scene.content.media.type === "both" ? (
                  <div className="aspect-video rounded-base border-4 border-border shadow-shadow overflow-hidden">
                    <VideoPlayer src={scene.content.media.videoSrc ?? ""} poster={scene.content.media.videoPoster} />
                  </div>
                ) : null}
              </div>
              {scene.content.buttons && (
                <div className="mt-4 flex flex-wrap justify-center gap-3">
                  {scene.content.buttons.map((btn, j) => (
                    <Button key={j} variant={btn.variant} size={btn.size}>{btn.label}</Button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex w-full max-w-xl flex-col items-center" style={{ "--scene-color": scene.color } as React.CSSProperties}>
              <span
                className="inline-flex items-center gap-1.5 rounded-base border-4 border-border px-3 py-1 shadow-shadow font-body text-[10px] font-bold uppercase tracking-widest text-foreground"
                style={{ backgroundColor: scene.color }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/60" />
                {scene.subtitle}
              </span>
              <h2 className="mt-5 text-center font-display text-3xl font-black leading-[1.1] text-foreground sm:text-4xl md:text-5xl">
                {scene.title}
              </h2>
              <div className="mt-8 w-full">
                <div className="space-y-4 text-center">
                  <p className="text-foreground font-body leading-relaxed">{scene.content.description}</p>
                  {scene.content.highlight && (
                    <p className="font-display text-lg font-bold text-foreground">{scene.content.highlight}</p>
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
          )}
        </div>
      ))}
    </div>
  )
}
