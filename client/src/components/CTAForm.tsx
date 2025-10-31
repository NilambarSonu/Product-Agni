import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface CTAFormProps {
  onSubmit?: (data: { email: string; farmArea: string; requestType: string }) => void;
}

export default function CTAForm({ onSubmit }: CTAFormProps) {
  const [email, setEmail] = useState("");
  const [farmArea, setFarmArea] = useState("");
  const [requestType, setRequestType] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !farmArea || !requestType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    console.log('Form submitted:', { email, farmArea, requestType });
    
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    if (onSubmit) {
      onSubmit({ email, farmArea, requestType });
    }

    setEmail("");
    setFarmArea("");
    setRequestType("");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50" data-testid="card-cta-form">
            <div className="text-center mb-8">
              <h2 className="font-headline text-3xl md:text-5xl font-black mb-4">
                Ready to Transform Your <span className="text-primary">Farm</span>?
              </h2>
              <p className="text-lg text-muted-foreground">
                Get started with Agni today. Fill out the form below and we'll reach out within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="farmer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-background/50 border-border/50"
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmArea" className="text-sm font-semibold">
                  Farm Area (acres)
                </Label>
                <Input
                  id="farmArea"
                  type="text"
                  placeholder="e.g., 50 acres"
                  value={farmArea}
                  onChange={(e) => setFarmArea(e.target.value)}
                  className="h-12 bg-background/50 border-border/50"
                  data-testid="input-farm-area"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requestType" className="text-sm font-semibold">
                  I'm Interested In
                </Label>
                <Select value={requestType} onValueChange={setRequestType}>
                  <SelectTrigger 
                    className="h-12 bg-background/50 border-border/50"
                    data-testid="select-request-type"
                  >
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo" data-testid="option-demo">Live Demo</SelectItem>
                    <SelectItem value="quote" data-testid="option-quote">Price Quote</SelectItem>
                    <SelectItem value="support" data-testid="option-support">Technical Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 text-lg bg-accent hover:bg-accent/90 hover-elevate active-elevate-2 shadow-lg shadow-accent/20"
                data-testid="button-submit-request"
              >
                Submit Request
              </Button>

              <p className="text-xs text-center text-muted-foreground pt-4">
                By submitting this form, you agree to our privacy policy. We respect your data — farmers own their data.
              </p>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
