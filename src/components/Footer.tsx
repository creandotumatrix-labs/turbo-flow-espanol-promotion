import { Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">TURBO FLOW</h3>
            <p className="text-sm text-muted-foreground">
              Entorno de Desarrollo Agéntico Avanzado para equipos que quieren liderar en la era de la IA.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Recursos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentación</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Guías de Inicio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Metodología SPARC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">610+ Agentes</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Comunidad</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discusiones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contribuir</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reporte de Errores</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Licencia MIT</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos de Uso</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Turbo Flow. Código Abierto bajo licencia MIT.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/marcuspat/turbo-flow-claude" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.turboflow.space" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              turboflow.space
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
