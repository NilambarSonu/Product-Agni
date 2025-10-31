import { motion } from "framer-motion";
import { MapPin, Radio, Brain, Tractor } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Deploy",
    description: "Insert Agni probe into the soil at designated grid points across your field.",
    color: "from-primary to-primary/50",
  },
  {
    icon: Radio,
    title: "Capture",
    description: "Real-time sensors measure moisture, pH, nutrients, and EC at each location.",
    color: "from-[#6DE8FF] to-primary",
  },
  {
    icon: Brain,
    title: "Analyze",
    description: "AI processes data to create variability maps and identify optimization zones.",
    color: "from-secondary to-[#6DE8FF]",
  },
  {
    icon: Tractor,
    title: "Act",
    description: "Receive precise variable-rate recommendations for irrigation and fertilization.",
    color: "from-accent to-secondary",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From deployment to actionable insights in four simple steps
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative mb-6"
                  >
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center relative z-10`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl" />
                    
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">{index + 1}</span>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary/50 to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
