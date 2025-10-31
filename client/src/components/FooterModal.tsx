import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FooterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: string;
}

export default function FooterModal({ open, onOpenChange, title, content }: FooterModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto" data-testid="modal-footer-content">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline font-black">
            {title}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-base text-foreground leading-relaxed whitespace-pre-line">
          {content}
        </DialogDescription>
        <div className="flex justify-end pt-4">
          <Button
            onClick={() => onOpenChange(false)}
            variant="outline"
            className="hover-elevate active-elevate-2"
            data-testid="button-close-modal"
          >
            <X className="w-4 h-4 mr-2" />
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
