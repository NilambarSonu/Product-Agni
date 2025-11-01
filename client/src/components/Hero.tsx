import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import agniDevice3DModel from "@assets/Copilot3D-0ec922cd-8d80-402d-9e95-a9db3218554e_1761927687647.gif";

interface HeroProps {
  onRequestDemo: () => void;
  onSeeLiveDemo: () => void;
}

export default function Hero({ onRequestDemo, onSeeLiveDemo }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />
      
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="font-headline text-5xl md:text-7xl font-black tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Most decisions on farms happen <span className="text-secondary">blind</span>. <br className="hidden md:block" />
                Agni makes the soil <span className="bg-gradient-to-r from-primary via-[#6DE8FF] to-accent bg-clip-text text-transparent">speak</span>.
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Our Agni IoT scanner delivers lab-grade soil analysis in just 30 seconds. Our <span className="font-semibold text-primary">Saathi AI app</span> analyze the soil data and provide simple and actionable advice in your local language.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                onClick={onRequestDemo}
                className="text-lg px-5 py-6 bg-accent hover:bg-accent/90 text-accent-foreground hover-elevate active-elevate-2 shadow-lg shadow-accent/20"
                data-testid="button-request-demo"
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={onSeeLiveDemo}
                className="text-lg px-8 py-6 border-primary/30 hover-elevate active-elevate-2 backdrop-blur-sm bg-card/50"
                data-testid="button-see-live-demo"
              >
                <Play className="mr-2 h-5 w-5" />
                See Live Demo
              </Button>
            </motion.div>

            <motion.p
              className="text-sm text-muted-foreground pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Our platform facilitates precision farming through three tightly integrated components---the Agni IoT Soil Scanner, the Saathi AI Mobile App, and the Megha Cloud Database.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[
                { label: "Moisture", value: "±0.5%", icon: "💧" },
                { label: "pH Level", value: "±0.1", icon: "⚗️" },
                { label: "Nutrients", value: "N-P-K", icon: "🌱" },
                { label: "Maps", value: "SateliteView", icon: "🗺️" },
              ].map((feature, i) => (
                <motion.div
                  key={feature.label}
                  className="text-center p-4 rounded-lg bg-card/30 border border-border/50 backdrop-blur-sm hover-elevate"
                  whileHover={{ scale: 1.05 }}
                  data-testid={`feature-${feature.label.toLowerCase()}`}
                >
                  <div className="text-2xl mb-1">{feature.icon}</div>
                  <div className="text-xs text-muted-foreground">{feature.label}</div>
                  <div className="text-sm font-semibold text-primary">{feature.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              
              <motion.img
                src={agniDevice3DModel}
                alt="Agni Soil Scanner Device - 3D Rotating Model"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                data-testid="img-hero-device"
              />

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
