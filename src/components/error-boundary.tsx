import { Component, type ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-dvh items-center justify-center bg-background p-8">
          <div className="text-center">
            <h1 className="font-display text-2xl font-black text-foreground">Algo salió mal</h1>
            <p className="mt-2 font-body text-foreground/60">Error al cargar la página. Intentá recargar.</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
