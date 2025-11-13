import { AlertCircle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    title: "El Factor de Miedo #1",
    subtitle: "\"Voy a Romper Algo\"",
    description: "Los desarrolladores temen introducir errores y verse mal en revisiones de código. Sin barreras de protección, este miedo está justificado.",
    impact: "40% de los desarrolladores evitan las herramientas de IA por completo"
  },
  {
    title: "El Factor de Miedo #2",
    subtitle: "\"Es Muy Complicado\"",
    description: "La configuración típica requiere instalar 5-10 herramientas, configurar APIs, y solucionar problemas constantes.",
    impact: "3-5 días de tiempo perdido por desarrollador"
  },
  {
    title: "El Factor de Miedo #3",
    subtitle: "\"No Quiero Ser Reemplazado\"",
    description: "Los desarrolladores temen que dominar la IA señale a la gerencia que no son necesarios.",
    impact: "50% de los desarrolladores luchan con la configuración en silencio"
  },
  {
    title: "El Factor de Miedo #4",
    subtitle: "\"No Sé Lo Que No Sé\"",
    description: "Sin estructura o metodología, los desarrolladores enfrentan parálisis por análisis y prueba-error infinito.",
    impact: "Solo el 10-15% logra usar IA efectivamente"
  }
];

export const Problem = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 text-destructive text-sm font-medium mb-4">
            <AlertCircle className="w-4 h-4" />
            La Crisis Oculta
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">La Verdad que Nadie Dice</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tus competidores están construyendo 10 veces más rápido con IA. 
            Tu equipo está luchando con ella o evitándola completamente.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="group border-destructive/20 hover:border-destructive/40 transition-all hover:shadow-lg hover:shadow-destructive/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-destructive/10 shrink-0">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-lg font-semibold">{problem.title}</h3>
                    <p className="text-xl font-bold text-primary">{problem.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-semibold text-destructive">
                    ⚠️ {problem.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-card/50 backdrop-blur-sm border border-primary/30 rounded-lg p-8 max-w-4xl mx-auto">
          <p className="text-2xl font-bold mb-2">
            ¿El resultado?
          </p>
          <p className="text-lg text-muted-foreground">
            Tu inversión en IA está entregando tal vez <span className="text-destructive font-semibold">15-20% de su valor potencial</span>, 
            mientras tus competidores avanzan rápidamente.
          </p>
        </div>
      </div>
    </section>
  );
};
