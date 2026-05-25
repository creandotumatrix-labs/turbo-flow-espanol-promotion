import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 text-sm font-medium">
            <Zap className="w-4 h-4 text-primary" />
            Ruflo v3.5
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 text-sm font-medium">
            ✓ 215+ Herramientas MCP
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 text-sm font-medium">
            ✓ Beads + GitNexus
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 text-sm font-medium">
            ✓ DevPod Listo
          </span>
        </div>

        {/* Version tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-semibold tracking-widest uppercase">
          v4.0 — La Migración a Ruflo
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="gradient-text">TURBO FLOW</span>
        </h1>

        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 max-w-4xl mx-auto">
          Entorno Completo de Desarrollo Agéntico — Ruflo v3.5 + Beads + Worktrees + Equipos de Agentes
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          <span className="text-primary font-semibold">10 pasos automatizados</span>.
          Un comando. Cero frustración. Ruflo v3.5 reemplaza 4 instalaciones separadas y añade memoria entre sesiones,
          grafo de conocimiento del código base y aislamiento por agente con{" "}
          <span className="text-primary font-semibold">Git Worktrees</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow-primary" asChild>
            <a href="https://github.com/creandotumatrixlabs/turbo-flow" target="_blank" rel="noopener noreferrer">
              Comenzar Ahora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="group border-primary/50 hover:bg-primary/10 font-semibold px-8 py-6 text-lg" asChild>
            <a href="https://github.com/creandotumatrixlabs/turbo-flow" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-5 h-5" />
              Ver en GitHub
            </a>
          </Button>
        </div>

        {/* Command line */}
        <div className="pt-8 max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-4 font-mono text-sm md:text-base flex items-center justify-between gap-4">
            <code className="text-primary flex-1 text-left overflow-x-auto">
              devpod up https://github.com/creandotumatrixlabs/turbo-flow --ide vscode
            </code>
            <Button size="sm" variant="ghost" className="shrink-0 hover:bg-primary/10">
              Copiar
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">215+</div>
            <div className="text-sm text-muted-foreground">Herramientas MCP</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">60+</div>
            <div className="text-sm text-muted-foreground">Agentes IA</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">10x</div>
            <div className="text-sm text-muted-foreground">Más Productivo</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold gradient-text">$0</div>
            <div className="text-sm text-muted-foreground">Gratis y Open Source</div>
          </div>
        </div>

        {/* Built by */}
        <p className="text-sm text-muted-foreground pt-4">
          Construido y Presentado por{" "}
          <a href="https://github.com/creandotumatrixlabs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
            Creando Tu Matrix Labs
          </a>
        </p>
      </div>
    </section>
  );
};
