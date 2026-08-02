import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse" />

      {/* Floating elements — kept small enough to avoid horizontal bleed */}
      <div className="absolute top-20 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-0 w-56 h-56 sm:w-96 sm:h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card border border-primary/30 text-xs sm:text-sm font-medium">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            Ruflo v3.5
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card border border-primary/30 text-xs sm:text-sm font-medium">
            ✓ 215+ Herramientas MCP
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card border border-primary/30 text-xs sm:text-sm font-medium">
            ✓ Beads + GitNexus
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card border border-primary/30 text-xs sm:text-sm font-medium">
            ✓ DevPod Listo
          </span>
        </div>

        {/* Version tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-semibold tracking-widest uppercase">
          v4.0 — La Migración a Ruflo
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="gradient-text">TURBO FLOW</span>
        </h1>

        {/* Subtitle — smaller on mobile to prevent overflow */}
        <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 max-w-4xl mx-auto leading-snug">
          Entorno Completo de Desarrollo Agéntico —{" "}
          <span className="whitespace-nowrap">Ruflo v3.5</span> + Beads + Worktrees + Equipos de Agentes
        </p>

        <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <span className="text-primary font-semibold">10 pasos automatizados</span>.{" "}
          Un comando. Cero frustración. Ruflo v3.5 reemplaza 4 instalaciones separadas y añade
          memoria entre sesiones, grafo de conocimiento del código base y aislamiento por agente con{" "}
          <span className="text-primary font-semibold">Git Worktrees</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
          <Button
            size="lg"
            className="group w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow-primary"
            asChild
          >
            <a href="https://github.com/marcuspat/turbo-flow" target="_blank" rel="noopener noreferrer">
              Comenzar Ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group w-full sm:w-auto border-primary/50 hover:bg-primary/10 font-semibold px-8 py-6 text-lg"
            asChild
          >
            <a href="https://github.com/marcuspat/turbo-flow" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-5 h-5" />
              Ver en GitHub
            </a>
          </Button>
        </div>

        {/* Command line — min-w-0 prevents flex child from expanding past container */}
        <div className="pt-4 sm:pt-8 max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm md:text-base flex items-center gap-2 sm:gap-4 overflow-hidden">
            <code className="text-primary flex-1 text-left overflow-x-auto whitespace-nowrap min-w-0">
              devpod up https://github.com/marcuspat/turbo-flow --ide vscode
            </code>
            <Button size="sm" variant="ghost" className="shrink-0 hover:bg-primary/10 text-xs sm:text-sm">
              Copiar
            </Button>
          </div>
        </div>

        {/* Stats — 2×2 on mobile, 4 columns on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-4xl mx-auto">
          <div className="space-y-1 sm:space-y-2 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">215+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Herramientas MCP</div>
          </div>
          <div className="space-y-1 sm:space-y-2 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">60+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Agentes IA</div>
          </div>
          <div className="space-y-1 sm:space-y-2 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">10x</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Más Productivo</div>
          </div>
          <div className="space-y-1 sm:space-y-2 text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">$0</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Open Source</div>
          </div>
        </div>

        {/* Built by */}
        <p className="text-xs sm:text-sm text-muted-foreground pt-2 sm:pt-4">
          Construido y Presentado por{" "}
          <a
            href="https://github.com/marcuspat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Creando Tu Matrix Labs
          </a>
        </p>
      </div>
    </section>
  );
};
