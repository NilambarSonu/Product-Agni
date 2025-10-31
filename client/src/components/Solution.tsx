import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Shield, Smartphone, MapPin } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Precision Sensor Suite",
    description: "Get lab-grade accuracy on all key parameters. Our advanced electrochemical and NIR (Near-Infrared) sensors provide real-time data you can trust.",
    specs: ["±0.5% moisture", "±0.1 pH accuracy", "14+ parameters"],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Shield,
    title: "Field-Hardened Design",
    description: "Built for the real world. The Agni device is IP67-rated (weatherproof and dustproof), with a 24-hour battery life and durable construction.",
    specs: ["IP67 rated", "24-hour battery", "ESP32-S3 powered"],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Smartphone,
    title: "AI-Powered Saathi App",
    description: "The real magic. Agni provides the data, but the Saathi App provides the wisdom. It's the only platform that gives you a simple, AI-generated action plan.",
    specs: ["Local language support", "Instant advice", "Profit-focused"],
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: MapPin,
    title: "GPS Geolocation",
    description: "Every scan is automatically tagged with GPS coordinates. This allows the Saathi App to build a \"Field Heatmap\", showing you exactly which zones need more or less water and fertilizer.",
    specs: ["Auto GPS tagging", "Field heatmaps", "Zone-based insights"],
    color: "from-primary/20 via-secondary/10 to-accent/20",
  },
];

export default function Solution() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 text-sm" data-testid="badge-solution">
            The Agni Solution
          </Badge>
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-6">
            Laboratory precision. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Field-ready durability.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Developed for Indian soils — field-calibrated, rugged, and ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="p-8 h-full hover-elevate active-elevate-2 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden relative group"
                data-testid={`card-feature-${index}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center"
                    >
                      <feature.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {feature.specs.map((spec) => (
                      <Badge 
                        key={spec} 
                        variant="outline" 
                        className="text-xs border-primary/30 bg-card/50 backdrop-blur-sm"
                        data-testid={`badge-spec-${spec}`}
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
