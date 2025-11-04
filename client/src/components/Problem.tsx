import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Eye, TrendingDown, Target } from "lucide-react";

const problems = [
  {
    icon: Eye,
    title: "Blind Decisions",
    description: "Farmers use same quantiry of chemical fertilizer every year in their farmland without knowing what's actually their soil need.",
    stat: "inconsistent yields, unnecessary costs, and declining soil fertility.",
  },
  {
    icon: TrendingDown,
    title: "The Resource Waste",
    description: "Without accurate soil metrics, water and nutrient are often over-applied, leading to significant waste and environmental harm.",
    stat: "Reduced yields, higher input costs, and ecosystem damage.",
  },
  {
    icon: Target,
    title: "The Guesswork Farming Trap",
    description: "Traditional pratices can't detect micro-variations in soil moisture,nutrients, or pH --leaving farmers to rely on guesswork instead of precision data.",
    stat: "Lost income, inefficient planning, and unsustainable farming.",
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
            When The <span className="text-secondary">Soil</span> — <br className="hidden md:block" />
            Is a <span className="text-primary">Black BoX</span>.
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
                  <div className="text-sm text-muted-foreground mb-1">Impact</div>
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
