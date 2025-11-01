import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Smartphone, Cloud, Download, Plug } from "lucide-react";
import { SiMqtt } from "react-icons/si";

const integrations = [
  {
    icon: Plug,
    name: "ISOBUS",
    description: "Agni communicates directly with ISOBUS-enabled farm machinery, enabling precision seeding, irrigation, and fertilization control straight from your tractor interface.",
  },
  {
    icon: Cloud,
    name: "REST API",
    description: "Full access for custom integrations and analytics.",
  },
  {
    icon: Smartphone,
    name: "Saathi App",
    description: "Available on iOS and Android, the Saathi App provides real-time insights, alerts, and recommendations — all in your local language, powered by Megha AI and our own LLM model(Mitti LLM).",
  },
  {
    icon: Download,
    name: "CSV & Data Export",
    description: "Instantly export soil data in PDF format for advanced analytics using Python — ideal for researchers and agronomists.",
  },
  {
    icon: SiMqtt,
    name: "MQTT/IoT Integration",
    description: "Connect to existing farm IoT infrastructure seamlessly",
  },
  {
    icon: Cloud,
    name: "Megha Platform",
    description: "Serves as the unified AI + database core for Agni and Saathi.",
  },
];

export default function Integrations() {
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
            Integrates with <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Everything</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agni fits seamlessly into your existing farm ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card 
                className="p-6 h-full hover-elevate active-elevate-2 border-border/50 bg-card/50 backdrop-blur-sm group"
                data-testid={`card-integration-${index}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4"
                >
                  <integration.icon className="w-7 h-7 text-primary" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2">{integration.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {integration.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
