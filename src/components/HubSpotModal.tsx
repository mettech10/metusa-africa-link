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
        target: '#hubspot-form-container',
        css: '',
        cssClass: 'custom-hubspot-form'
      });
    }
  }, [isOpen]);

  useEffect(() => {
    // Add custom styles for HubSpot form
    const style = document.createElement('style');
    style.textContent = `
      .custom-hubspot-form .hs-form-booleancheckbox-display > span,
      .custom-hubspot-form .hs_submit .hs-button {
        background-color: #000000 !important;
        color: white !important;
        border: none !important;
        padding: 12px 24px !important;
        border-radius: 6px !important;
        font-weight: 600 !important;
        transition: all 0.2s ease !important;
      }
      
      .custom-hubspot-form .hs_submit .hs-button:hover {
        background-color: #333333 !important;
      }
      
      .custom-hubspot-form .hs-input {
        border: 1px solid #e5e5e5 !important;
        border-radius: 6px !important;
        padding: 12px !important;
        font-size: 14px !important;
        width: 100% !important;
        background-color: white !important;
      }
      
      .custom-hubspot-form .hs-input:focus {
        border-color: #000000 !important;
        outline: none !important;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1) !important;
      }
      
      .custom-hubspot-form .hs-form-field label {
        color: #333333 !important;
        font-weight: 500 !important;
        margin-bottom: 6px !important;
        display: block !important;
      }
      
      .custom-hubspot-form .hs-form-field {
        margin-bottom: 16px !important;
      }
      
      .custom-hubspot-form .hs-richtext,
      .custom-hubspot-form .hs-form-booleancheckbox-display,
      .custom-hubspot-form .hs-dependent-field {
        display: none !important;
      }
      
      .custom-hubspot-form .hs_submit {
        text-align: center !important;
        margin-top: 20px !important;
      }
      
      .custom-hubspot-form .hs-form {
        max-width: none !important;
      }
      
      .custom-hubspot-form .hs-error-msgs {
        color: #dc2626 !important;
        font-size: 12px !important;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Join Our Waitlist</DialogTitle>
        </DialogHeader>
        <div id="hubspot-form-container" className="mt-6" />
      </DialogContent>
    </Dialog>
  );
};

export default HubSpotModal;