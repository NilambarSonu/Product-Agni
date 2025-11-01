import { Separator } from "@/components/ui/separator";

interface FooterProps {
  onLinkClick: (type: 'scroll' | 'modal', target: string) => void;
}

export default function Footer({ onLinkClick }: FooterProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, type: 'scroll' | 'modal', target: string) => {
    e.preventDefault();
    onLinkClick(type, target);
  };

  return (
    <footer className="py-12 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-headline text-2xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Agni
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Laboratory-grade soil intelligence for precision agriculture.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              By Mitti-AI
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => handleClick(e, 'scroll', 'features')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-features"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#specifications" 
                  onClick={(e) => handleClick(e, 'scroll', 'specifications')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-specifications"
                >
                  Specifications
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleClick(e, 'modal', 'pricing')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#demo" 
                  onClick={(e) => handleClick(e, 'scroll', 'demo-form')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-demo"
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleClick(e, 'modal', 'about')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleClick(e, 'scroll', 'demo-form')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#careers" 
                  onClick={(e) => handleClick(e, 'modal', 'careers')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  onClick={(e) => handleClick(e, 'modal', 'blog')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="#privacy" 
                  onClick={(e) => handleClick(e, 'modal', 'privacy')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-privacy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#terms" 
                  onClick={(e) => handleClick(e, 'modal', 'terms')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-terms"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#data" 
                  onClick={(e) => handleClick(e, 'modal', 'data')}
                  className="hover:text-primary transition-colors cursor-pointer" 
                  data-testid="link-data"
                >
                  Data Ownership
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Mitti-AI. All rights reserved.</p>
          <p className="text-xs">
            Agni — intellectual property of Mitti-AI.
          </p>
          <p className="text-xs font-semibold text-primary">
            @nilambarsonubehera
          </p>
        </div>
      </div>
    </footer>
  );
}
