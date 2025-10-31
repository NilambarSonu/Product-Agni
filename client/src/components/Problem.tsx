import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Eye, TrendingDown, Target } from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "Blind Decisions",
    description: "Farmers make critical choices without knowing what's beneath the surface.",
    stat: "70% of farms lack soil data",
  },
  {
    icon: TrendingDown,
    title: "Resource Waste",
    description: "Over-application of water and nutrients leads to runoff and reduced yields.",
    stat: "30% resource waste avg",
  },
  {
    icon: Target,
    title: "Guesswork Farming",
    description: "Traditional methods can't capture meter-by-meter soil variability.",
    stat: "Variable yields by 40%+",
  },
];

export default function Problem() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-6">
            Most decisions on farms happen <span className="text-secondary">blind</span> — <br className="hidden md:block" />
            Agni makes the soil <span className="text-primary">speak</span>.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Without precise soil data, farmers operate in the dark, wasting resources and missing opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card 
                className="p-8 h-full hover-elevate active-elevate-2 border-border/50 bg-card/50 backdrop-blur-sm group"
                data-testid={`card-problem-${index}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <problem.icon className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {problem.description}
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="text-sm text-muted-foreground mb-1">Industry Average</div>
                  <div className="text-xl font-bold text-secondary">{problem.stat}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
