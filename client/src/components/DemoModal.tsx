import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import CTAForm from "./CTAForm";

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DemoModal({ open, onOpenChange }: DemoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="modal-demo">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline font-black">
            Request a Demo
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and our team will contact you within 24 hours to schedule your personalized Agni demo.
          </DialogDescription>
        </DialogHeader>
        <CTAForm onSubmit={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
