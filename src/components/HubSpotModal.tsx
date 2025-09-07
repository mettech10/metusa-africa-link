import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface HubSpotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

declare global {
  interface Window {
    hbspt: any;
  }
}

const HubSpotModal = ({ isOpen, onClose }: HubSpotModalProps) => {
  useEffect(() => {
    if (isOpen && window.hbspt) {
      // Clear any existing form
      const formContainer = document.getElementById('hubspot-form-container');
      if (formContainer) {
        formContainer.innerHTML = '';
      }

      // Create the form
      window.hbspt.forms.create({
        portalId: "145904416",
        formId: "9e240047-eda1-478a-b22e-425750c34703",
        region: "eu1",
        target: '#hubspot-form-container'
      });
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Join Our Waitlist</DialogTitle>
        </DialogHeader>
        <div id="hubspot-form-container" className="mt-4" />
      </DialogContent>
    </Dialog>
  );
};

export default HubSpotModal;