import { Check, Shield, Zap, Users, Database, GitBranch, Brain, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  {
    icon: Zap,
    title: "Ruflo v3.5 — Un Comando",
    description: "Un solo `npx ruflo@latest init` reemplaza 4 instalaciones separadas. Incluye 215+ herramientas MCP, 60+ agentes, sistema de habilidades y ruteo de modelos en 3 niveles."
  },
  {
    icon: Database,
    title: "Beads — Memoria Entre Sesiones",
    description: "Memoria de proyecto JSONL nativa de git. Registra issues, decisiones y bloqueos que persisten entre sesiones y entre agentes del equipo."
  },
  {
    icon: Brain,
    title: "GitNexus — Grafo de Conocimiento",
    description: "Indexa dependencias, cadenas de llamadas y flujos de ejecución de tu código base. Detección de radio de impacto vía servidor MCP integrado."
  },
  {
    icon: GitBranch,
    title: "Git Worktrees — Aislamiento Total",
    description: "Cada agente trabaja en su propio worktree aislado con namespacing automático de esquemas PG Vector. Sin conflictos, sin interferencias."
  },
  {
    icon: Users,
    title: "Equipos de Agentes Nativos",
    description: "Generación multi-agente experimental de Anthropic habilitada por defecto. Máximo 3 compañeros, profundidad de recursión 2, con ruteo semántico."
  },
  {
    icon: Shield,
    title: "6 Plugins Enfocados",
    description: "Agentic QE, Code Intelligence, Test Intelligence, Perf Optimizer, Teammate Plugin y Gastown Bridge — sin plugins redundantes ni específicos de dominio."
  }
];

const v3vsV4 = {
  before: [
    { label: "Pasos de instalación", value: "15 pasos manuales" },
    { label: "Paquetes principales", value: "4 instalaciones separadas" },
    { label: "Herramientas MCP", value: "175+" },
    { label: "Memoria entre sesiones", value: "Ninguna" },
    { label: "Aislamiento de agentes", value: "Ninguno" },
    { label: "Grafo de código base", value: "Ninguno" },
  ],
  after: [
    { label: "Pasos de instalación", value: "10 automatizados" },
    { label: "Paquetes principales", value: "1 (Ruflo v3.5)" },
    { label: "Herramientas MCP", value: "215+ (+23%)" },
    { label: "Memoria entre sesiones", value: "Beads (JSONL git)" },
    { label: "Aislamiento de agentes", value: "Git Worktrees" },
    { label: "Grafo de código base", value: "GitNexus + MCP" },
  ],
};

export const Solution = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <Check className="w-4 h-4" />
            Turbo Flow v4.0
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Lo Que <span className="gradient-text">v4.0</span> Añade
          </h2>
          <p className="text-xl text-muted-foreground">
            La migración a Ruflo v3.5 no es solo una actualización — es una arquitectura completamente nueva
            con memoria, aislamiento e inteligencia de código base.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card key={index} className="group border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* v3 vs v4 Comparison */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-destructive flex items-center gap-2">
                <span className="text-3xl">❌</span>
                Turbo Flow v3.4.1
              </h3>
              <ul className="space-y-3">
                {v3vsV4.before.map((item, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 pb-2 border-b border-border/40 last:border-0">
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                    <span className="text-destructive font-semibold text-sm text-right shrink-0">{item.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-3xl">✅</span>
                Turbo Flow v4.0.0
              </h3>
              <ul className="space-y-3">
                {v3vsV4.after.map((item, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 pb-2 border-b border-border/40 last:border-0">
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                    <span className="text-primary font-semibold text-sm text-right shrink-0">{item.value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Architecture callout */}
        <div className="mt-10 max-w-6xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-accent/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Target className="w-5 h-5 text-accent shrink-0 mt-1" />
                <h3 className="text-lg font-semibold text-accent">Arquitectura de 3 Niveles de Memoria</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Beads (proyecto/git)</p>
                  <p>Issues, decisiones y bloqueos persistentes entre sesiones vía JSONL nativo de git</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Tareas Nativas (sesión)</p>
                  <p>Contexto de sesión activa en <code className="text-primary">~/.claude/</code> gestionado por Claude Code</p>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">AgentDB + RuVector WASM</p>
                  <p>Base de conocimiento vectorial acelerada por WASM para búsqueda semántica entre agentes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
