import { motion } from "framer-motion";
import { MapPin, Smartphone, Brain, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Deploy",
    description: "Push the Agni probe into the soil — that’s it.Its compact, weatherproof design is ready for the field, requiring no calibration or technical skill.",
    color: "from-primary to-primary/50",
  },
  {
    icon: Smartphone,
    title: "Capture",
    description: "Connect Agni to the Saathi App via Bluetooth.The ESP32-S3 powered system captures 14+ soil parameters — including moisture, pH, NPK, EC, and organic carbon — all with lab-grade accuracy",
    color: "from-[#6DE8FF] to-primary",
  },
  {
    icon: Brain,
    title: "Analyze",
    description: "Your data travels to Megha Engine, our cloud-based AI system.It studies your soil health, crop profile, and local weather data — providing deep, personalized recomadation.",
    color: "from-secondary to-[#6DE8FF]",
  },
  {
    icon: MessageSquare,
    title: "Act",
    description: "Within seconds, the Saathi App delivers AI-powered advice in your local language — clear, simple, and immediately useful. (\"Add 20kg less Urea, saving you ₹400\").",
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
            How Agni Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From Soil to Solution — in Four Intelligent Steps.
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
