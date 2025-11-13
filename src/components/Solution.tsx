import { Check, Shield, Zap, Users, BookOpen, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  {
    icon: Shield,
    title: "Entorno de Aprendizaje Seguro",
    description: "Practica sin miedo a romper producción. Entornos aislados con verificaciones de calidad integradas."
  },
  {
    icon: Zap,
    title: "Cero Frustración de Configuración",
    description: "Entorno funcionando en 5 minutos, no 5 días. Un comando y estás listo para programar."
  },
  {
    icon: BookOpen,
    title: "Metodología SPARC Estructurada",
    description: "Proceso claro paso a paso para saber exactamente qué hacer en cada etapa del desarrollo."
  },
  {
    icon: Users,
    title: "610+ Guías Especializadas",
    description: "Como tener mentores expertos para cada tipo de tarea. El experto correcto, siempre."
  },
  {
    icon: Target,
    title: "Compuertas de Calidad Integradas",
    description: "Pruebas automatizadas y verificaciones atrapan errores antes de que lleguen a producción."
  },
  {
    icon: TrendingUp,
    title: "Confianza A Través del Éxito",
    description: "Victorias rápidas que construyen impulso y eliminan el miedo desde el día uno."
  }
];

export const Solution = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <Check className="w-4 h-4" />
            La Solución
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Lo Que <span className="gradient-text">Turbo Flow</span> Realmente Resuelve
          </h2>
          <p className="text-xl text-muted-foreground">
            Piensa en Turbo Flow como "Ruedas de Entrenamiento de IA" que se convierten 
            en una bicicleta de alto rendimiento.
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

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="bg-destructive/5 border-destructive/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-destructive flex items-center gap-2">
                <span className="text-3xl">❌</span>
                Antes de Turbo Flow
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  3-5 días de tiempo de configuración por desarrollador
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  60% del tiempo gastado solucionando problemas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  Resultados inconsistentes en todo el equipo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive">•</span>
                  Conocimiento atrapado en unos pocos "expertos"
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8 space-y-4">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
                <span className="text-3xl">✅</span>
                Después de Turbo Flow
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  5 minutos de tiempo de configuración (99% de reducción)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  95% del tiempo gastado en desarrollo real
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Todos tienen el mismo entorno poderoso
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Todo el equipo se vuelve competente en IA
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
