import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Droplets, Sprout, BarChart3, Download } from "lucide-react";

const useCases = [
  {
    icon: Droplets,
    title: "Precision Irrigation",
    description: "Agni enables zone-specific irrigation by mapping real-time soil moisture variability. Farmers can cut 20–30% water usage while maintaining optimal crop health.",
    roi: "₹45,000/yr saved",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Sprout,
    title: "Variable Rate Fertilization",
    description: "Agni’s soil analytics guide fertilizer application only where required, reducing costs and preventing soil stress.",
    roi: "₹60,000/yr saved",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: TrendingUp,
    title: "Yield Optimization",
    description: "With accurate soil data and AI-driven recommendations, farmers experience 15–20% yield increases in just one growing cycle.",
    roi: "+₹1.2L/yr revenue",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: BarChart3,
    title: "Soil Health & Longevity",
    description: "Continuous soil monitoring prevents long-term degradation, preserves fertility, and builds resilience against climate uncertainty.",
    roi: "Long-term ecosystem value and soil security",
    color: "from-primary/20 via-secondary/10 to-accent/10",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-6">
            Real ROI, <span className="text-accent">Real Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From saving water to boosting yields-- Agni pays for itself
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="p-6 h-full hover-elevate active-elevate-2 border-border/50 bg-card/50 backdrop-blur-sm group relative overflow-hidden"
                data-testid={`card-usecase-${index}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mb-4"
                  >
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border/30">
                    <div className="text-xs text-muted-foreground mb-1">Estimated ROI</div>
                    <div className="text-lg font-bold text-accent">{useCase.roi}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="inline-block p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-primary/30" data-testid="card-cta-datasheet">
            <h3 className="text-2xl font-bold mb-4">Want detailed ROI calculations?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Download our comprehensive datasheet with case studies, technical specs, and ROI models for different crop types.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 hover-elevate active-elevate-2"
              onClick={() => console.log('Download datasheet')}
              data-testid="button-download-datasheet"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Datasheet
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
