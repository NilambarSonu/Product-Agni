import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const specs = [
  {
    sensor: "Moisture Sensor",
    range: "0-100%",
    accuracy: "±0.5%",
    resolution: "0.1%",
  },
  {
    sensor: "pH Probe",
    range: "3.5-9.0 pH",
    accuracy: "±0.1 pH",
    resolution: "0.01 pH",
  },
  {
    sensor: "EC Sensor",
    range: "0-20 dS/m",
    accuracy: "±2%",
    resolution: "0.01 dS/m",
  },
  {
    sensor: "Temperature",
    range: "-20°C to 60°C",
    accuracy: "±0.3°C",
    resolution: "0.1°C",
  },
  {
    sensor: "NPK (NIR)",
    range: "0-999 ppm",
    accuracy: "±5%",
    resolution: "1 ppm",
  },
];

export default function SpecsTable() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 text-sm" data-testid="badge-specs">
            Technical Specifications
          </Badge>
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-6">
            Lab-Grade <span className="text-primary">Precision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every sensor calibrated for accuracy you can trust
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50" data-testid="card-specs-table">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50 bg-muted/30">
                    <th className="text-left p-6 font-bold text-sm uppercase tracking-wide">Sensor Type</th>
                    <th className="text-left p-6 font-bold text-sm uppercase tracking-wide">Range</th>
                    <th className="text-left p-6 font-bold text-sm uppercase tracking-wide">Accuracy</th>
                    <th className="text-left p-6 font-bold text-sm uppercase tracking-wide">Resolution</th>
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec, index) => (
                    <motion.tr
                      key={spec.sensor}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-border/30 hover-elevate transition-colors"
                      data-testid={`row-spec-${index}`}
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="font-semibold">{spec.sensor}</span>
                        </div>
                      </td>
                      <td className="p-6 text-muted-foreground">{spec.range}</td>
                      <td className="p-6">
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                          {spec.accuracy}
                        </Badge>
                      </td>
                      <td className="p-6 text-muted-foreground">{spec.resolution}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <Card className="p-6 text-center bg-card/30 border-border/50" data-testid="card-additional-spec-0">
              <div className="text-3xl font-black text-primary mb-2">IP67</div>
              <div className="text-sm text-muted-foreground">Weatherproof Rating</div>
            </Card>
            <Card className="p-6 text-center bg-card/30 border-border/50" data-testid="card-additional-spec-1">
              <div className="text-3xl font-black text-secondary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Battery Life</div>
            </Card>
            <Card className="p-6 text-center bg-card/30 border-border/50" data-testid="card-additional-spec-2">
              <div className="text-3xl font-black text-accent mb-2">5yr</div>
              <div className="text-sm text-muted-foreground">Warranty Period</div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
