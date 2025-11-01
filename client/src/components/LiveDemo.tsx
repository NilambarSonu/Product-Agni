import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const mockTimeSeriesData = [
  { time: "08:00", moisture: 28.5, ph: 6.5, temperature: 22.1 },
  { time: "09:00", moisture: 30.2, ph: 6.6, temperature: 23.0 },
  { time: "10:00", moisture: 32.5, ph: 6.8, temperature: 24.3 },
  { time: "11:00", moisture: 33.8, ph: 7.0, temperature: 24.5 },
  { time: "12:00", moisture: 34.5, ph: 7.0, temperature: 25.2 },
  { time: "13:00", moisture: 33.1, ph: 6.9, temperature: 26.0 },
  { time: "14:00", moisture: 31.4, ph: 6.7, temperature: 26.5 },
  { time: "15:00", moisture: 29.8, ph: 6.6, temperature: 26.2 },
];

const heatmapData = [
  { zone: "A", moisture: 28.3, recommendation: "Increase irrigation by 15%" },
  { zone: "B", moisture: 35.7, recommendation: "Optimal - maintain current rate" },
  { zone: "C", moisture: 30.1, recommendation: "Slight increase needed (+8%)" },
  { zone: "D", moisture: 27.5, recommendation: "Critical - increase by 20%" },
  { zone: "E", moisture: 36.2, recommendation: "Reduce irrigation by 10%" },
  { zone: "F", moisture: 32.0, recommendation: "Optimal - maintain current rate" },
];

export default function LiveDemo() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const getMoistureColor = (moisture: number) => {
    if (moisture < 29) return "from-secondary/60 to-secondary/30";
    if (moisture < 32) return "from-[#6DE8FF]/60 to-primary/30";
    if (moisture < 35) return "from-primary/60 to-accent/30";
    return "from-accent/60 to-accent/30";
  };

  return (
    <section className="py-24 relative overflow-hidden" id="live-demo">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 text-sm" data-testid="badge-live-demo">
            Live Demo
          </Badge>
          <h2 className="font-headline text-4xl md:text-6xl font-black mb-6">
            See Agni in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-time soil data visualization with actionable insights
          </p>
        </motion.div>

        <Tabs defaultValue="charts" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8" data-testid="tabs-demo">
            <TabsTrigger value="charts" data-testid="tab-charts">Time Series</TabsTrigger>
            <TabsTrigger value="heatmap" data-testid="tab-heatmap">Field Heatmap</TabsTrigger>
          </TabsList>
          
          <TabsContent value="charts" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50" data-testid="card-moisture-chart">
                  <h3 className="text-xl font-bold mb-4">Soil Moisture Over Time</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={mockTimeSeriesData}>
                      <defs>
                        <linearGradient id="moistureGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="time" 
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        domain={[25, 36]}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '0.5rem',
                        }}
                        labelStyle={{ color: 'hsl(var(--foreground))' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="moisture" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        fill="url(#moistureGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Average moisture: <span className="text-primary font-semibold">31.7%</span>
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50" data-testid="card-ph-chart">
                  <h3 className="text-xl font-bold mb-4">pH Levels</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockTimeSeriesData}>
                      <XAxis 
                        dataKey="time" 
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                      />
                      <YAxis 
                        stroke="hsl(var(--muted-foreground))"
                        fontSize={12}
                        domain={[6.4, 7.2]}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '0.5rem',
                        }}
                        labelStyle={{ color: 'hsl(var(--foreground))' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="ph" 
                        stroke="hsl(var(--secondary))" 
                        strokeWidth={3}
                        dot={{ fill: 'hsl(var(--secondary))', r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    Average pH: <span className="text-secondary font-semibold">6.76</span>
                  </p>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="heatmap">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50" data-testid="card-heatmap">
                <h3 className="text-2xl font-bold mb-6">Field Moisture Heatmap</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {heatmapData.map((zone) => (
                    <motion.div
                      key={zone.zone}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedZone(zone.zone === selectedZone ? null : zone.zone)}
                      className={`p-6 rounded-lg cursor-pointer transition-all ${
                        selectedZone === zone.zone ? 'ring-2 ring-primary' : ''
                      } bg-gradient-to-br ${getMoistureColor(zone.moisture)} hover-elevate active-elevate-2`}
                      data-testid={`zone-${zone.zone}`}
                    >
                      <div className="text-center">
                        <div className="text-sm text-foreground/80 font-semibold mb-2">Zone {zone.zone}</div>
                        <div className="text-3xl font-black text-foreground mb-1">{zone.moisture}%</div>
                        <div className="text-xs text-foreground/70">Moisture</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {selectedZone && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30"
                    data-testid="recommendation-panel"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">💡</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Zone {selectedZone} Recommendation</h4>
                        <p className="text-muted-foreground">
                          {heatmapData.find(z => z.zone === selectedZone)?.recommendation}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="mt-8 flex items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-r from-secondary/60 to-secondary/30" />
                    <span className="text-muted-foreground">Low (&lt;29%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-r from-primary/60 to-primary/30" />
                    <span className="text-muted-foreground">Optimal (32-35%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-r from-accent/60 to-accent/30" />
                    <span className="text-muted-foreground">High (&gt;35%)</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
