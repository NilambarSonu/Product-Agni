import { useState } from 'react';
import FooterModal from '../FooterModal';
import { Button } from '@/components/ui/button';

export default function FooterModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>
        Open Footer Modal
      </Button>
      
      <FooterModal
        open={open}
        onOpenChange={setOpen}
        title="About Mitti-AI"
        content="Mitti-AI was founded on a simple mission: to bring data-driven, scientific precision to every farmer. We believe that by making advanced technology accessible and easy to use, we can help farmers increase profitability, reduce waste, and secure a sustainable future."
      />
    </div>
  );
}
