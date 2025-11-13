import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Desarrolladora de Nivel Medio",
    image: "👩‍💻",
    before: "Pasé 3 días intentando configurar Claude AI. Me frustré y me rendí.",
    after: "Configuración en 5 minutos. En 2 semanas, aplastando mi backlog.",
    quote: "Pasé de pensar que me estaba quedando atrás a sentir que tengo superpoderes. La estructura de SPARC hizo que todo encajara para mí.",
    metric: "3x más productiva"
  },
  {
    name: "Marcus R.",
    role: "Ingeniero Senior, 15 años de experiencia",
    image: "👨‍💻",
    before: "Pensaba que la programación con IA era 'hacer trampa' y no produciría código de calidad.",
    after: "Ahora usa IA para explorar 3-4 enfoques de solución antes de elegir.",
    quote: "Estaba equivocado. Esto no está reemplazando desarrolladores—es como tener un equipo de desarrolladores junior haciendo el trabajo pesado mientras yo me enfoco en los problemas interesantes.",
    metric: "Más productivo que nunca"
  },
  {
    name: "Jennifer L.",
    role: "Líder de Equipo de 12 personas",
    image: "👩‍💼",
    before: "Equipo ahogándose. 10 posiciones abiertas. Desarrolladores quemados. Proyectos atrasados.",
    after: "Todo el equipo incorporado en una semana. Canceló 6 de 10 posiciones abiertas.",
    quote: "Turbo Flow no solo nos hizo más rápidos—salvó a mi equipo del agotamiento. Realmente están disfrutando el trabajo de nuevo porque no se están ahogando en tareas tediosas.",
    metric: "2x velocidad del equipo"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-4">
            <Quote className="w-4 h-4" />
            Historias de Éxito
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Transformaciones Reales</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Desarrolladores reales. Resultados reales. Cambios de carrera reales.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur-sm flex flex-col">
              <CardContent className="p-6 space-y-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{testimonial.image}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Before/After */}
                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-destructive">Antes:</p>
                    <p className="text-sm text-muted-foreground">{testimonial.before}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Después:</p>
                    <p className="text-sm text-muted-foreground">{testimonial.after}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative bg-muted/30 rounded-lg p-4 border border-primary/20">
                  <Quote className="absolute top-2 left-2 w-6 h-6 text-primary/30" />
                  <p className="text-sm italic text-muted-foreground pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Metric */}
                <div className="pt-4 border-t border-border">
                  <p className="text-center font-bold text-primary text-lg">
                    {testimonial.metric}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">80-90%</div>
            <div className="text-sm text-muted-foreground">Tasa de Adopción Activa en 3 Meses</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">3-10x</div>
            <div className="text-sm text-muted-foreground">Mejora de Productividad</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold gradient-text">100%</div>
            <div className="text-sm text-muted-foreground">No Quieren Volver Atrás</div>
          </div>
        </div>
      </div>
    </section>
  );
};
