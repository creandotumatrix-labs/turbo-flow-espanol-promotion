import { Github } from "lucide-react";

const GITHUB = "https://github.com/creandotumatrixlabs/turbo-flow";
const ORG_GITHUB = "https://github.com/creandotumatrixlabs";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">TURBO FLOW</h3>
            <p className="text-xs text-accent font-semibold tracking-wider uppercase mb-1">v4.0 — La Migración a Ruflo</p>
            <p className="text-sm text-muted-foreground">
              Entorno Completo de Desarrollo Agéntico — Ruflo v3.5 + Beads + GitNexus + Worktrees + Equipos de Agentes.
            </p>
            <p className="text-xs text-muted-foreground">
              Construido por{" "}
              <a href={ORG_GITHUB} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Creando Tu Matrix Labs
              </a>
            </p>
          </div>

          {/* Recursos */}
          <div className="space-y-4">
            <h4 className="font-semibold">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Documentación v4.0</a></li>
              <li><a href={`${GITHUB}#-inicio-rápido`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Inicio Rápido</a></li>
              <li><a href="https://github.com/ruvnet/ruflo" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Ruflo v3.5</a></li>
              <li><a href="https://npmjs.com/package/@fission-ai/openspec" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">OpenSpec</a></li>
              <li><a href="https://npmjs.com/package/agentic-qe" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Agentic QE</a></li>
            </ul>
          </div>

          {/* Comunidad */}
          <div className="space-y-4">
            <h4 className="font-semibold">Comunidad</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={ORG_GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Creando Tu Matrix Labs</a></li>
              <li><a href={`${GITHUB}/discussions`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Discusiones</a></li>
              <li><a href={`${GITHUB}/blob/main/README-ES.MD`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">README en Español</a></li>
              <li><a href={`${GITHUB}/issues`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Reporte de Errores</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href={`${GITHUB}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Licencia MIT</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025–2026 Creando Tu Matrix Labs. Turbo Flow v4.0. Código Abierto bajo licencia MIT.
          </p>
          <div className="flex items-center gap-6">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
