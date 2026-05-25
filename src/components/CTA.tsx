import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Zap } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-gradient-primary rounded-2xl p-8 md:p-12 overflow-hidden shadow-glow-primary">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                Listo para Transformar Tu Equipo
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                Empieza en 5 Minutos
              </h2>
              
              <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                Un comando. Cinco minutos. Transforma tu equipo de desarrolladores 
                con IA agéntica sin costo, sin riesgo, sin configuración compleja.
              </p>
            </div>

            {/* Command */}
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4 font-mono text-sm md:text-base max-w-3xl mx-auto">
              <code className="text-primary-foreground">
                devpod up https://github.com/creandotumatrixlabs/turbo-flow --ide vscode
              </code>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg">
                Comenzar Ahora
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="group border-primary-foreground/50 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground font-semibold px-8 py-6 text-lg">
                <Github className="mr-2 w-5 h-5" />
                Ver en GitHub
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Sin Contratos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Sin Compromisos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Sin Costo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Código Abierto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground italic">
            El futuro del desarrollo de software es IA agéntica. La pregunta es si tu equipo 
            liderará, seguirá o se quedará atrás. <span className="text-primary font-semibold">Turbo Flow asegura que lideres.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
