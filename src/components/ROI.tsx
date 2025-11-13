import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, Clock, Users } from "lucide-react";

export const ROI = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-4">
            <DollarSign className="w-4 h-4" />
            ROI Transparente
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Inversión: $0</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Código abierto. Sin tarifas de licencia. Sin cargos por usuario. Sin costos ocultos.
          </p>
        </div>

        {/* ROI Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
          {/* Cost Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/30">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Costos</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Licencia de Software</span>
                  <span className="font-bold text-primary text-xl">$0</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Cargos por Usuario</span>
                  <span className="font-bold text-primary text-xl">$0</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Costos Ocultos</span>
                  <span className="font-bold text-primary text-xl">$0</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t-2 border-primary/30">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="font-bold text-primary text-3xl">$0</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                * Tus únicos costos son recursos de nube que probablemente ya tienes
              </p>
            </CardContent>
          </Card>

          {/* Value Card */}
          <Card className="bg-gradient-primary border-none text-primary-foreground shadow-glow-primary">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary-foreground/10">
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Valor Entregado</h3>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Equipo de 10 Desarrolladores</span>
                    <span className="font-bold text-xl">Anual</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-primary-foreground/20">
                    <span className="text-sm opacity-90">Conservador (3x productividad)</span>
                    <span className="font-bold text-xl">$500K</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-primary-foreground/20">
                    <span className="text-sm opacity-90">Moderado (5x productividad)</span>
                    <span className="font-bold text-xl">$1M</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-primary-foreground/20">
                    <span className="text-sm opacity-90">Agresivo (10x productividad)</span>
                    <span className="font-bold text-xl">$1.5M</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t-2 border-primary-foreground/30">
                  <span className="text-lg font-semibold">ROI</span>
                  <span className="font-bold text-3xl">∞</span>
                </div>
              </div>
              <p className="text-sm opacity-90 italic">
                * No puedes dividir por cero, pero entiendes la idea
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6 text-center space-y-3">
              <Clock className="w-8 h-8 text-primary mx-auto" />
              <div className="space-y-1">
                <div className="text-2xl font-bold gradient-text">Inmediato</div>
                <div className="text-sm text-muted-foreground">Período de Recuperación</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6 text-center space-y-3">
              <Users className="w-8 h-8 text-primary mx-auto" />
              <div className="space-y-1">
                <div className="text-2xl font-bold gradient-text">$30K-$75K</div>
                <div className="text-sm text-muted-foreground">Ahorros Semana 1 (Equipo de 10)</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6 text-center space-y-3">
              <TrendingUp className="w-8 h-8 text-primary mx-auto" />
              <div className="space-y-1">
                <div className="text-2xl font-bold gradient-text">99%</div>
                <div className="text-sm text-muted-foreground">Reducción Tiempo Configuración</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardContent className="p-6 text-center space-y-3">
              <DollarSign className="w-8 h-8 text-primary mx-auto" />
              <div className="space-y-1">
                <div className="text-2xl font-bold gradient-text">$50K-$125K</div>
                <div className="text-sm text-muted-foreground">Valor por Desarrollador/Año</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
