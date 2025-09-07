import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    hbspt: any;
  }
}

const Waitlist = () => {
  useEffect(() => {
    // Load HubSpot form when component mounts
    if (window.hbspt) {
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
  }, []);

  useEffect(() => {
    // Add custom styles for HubSpot form using website's design system
    const style = document.createElement('style');
    style.textContent = `
      /* Hide HubSpot branding and unwanted elements */
      .custom-hubspot-form .hs-form-booleancheckbox-display,
      .custom-hubspot-form .hs-richtext,
      .custom-hubspot-form .hs-dependent-field,
      .custom-hubspot-form .hs-form__field__label__required::after,
      .custom-hubspot-form .hubspot-link__container,
      .custom-hubspot-form .hs-form-iframe-footer,
      .custom-hubspot-form .hs_cos_wrapper_widget,
      .custom-hubspot-form .legal-consent-container {
        display: none !important;
      }
      
      /* Form container styling */
      .custom-hubspot-form .hs-form {
        max-width: none !important;
        font-family: inherit !important;
      }
      
      /* Input field styling using design system colors */
      .custom-hubspot-form .hs-input,
      .custom-hubspot-form .hs-fieldtype-select select {
        background-color: hsl(0 0% 100%) !important;
        border: 1px solid hsl(0 0% 85%) !important;
        border-radius: 6px !important;
        padding: 12px 16px !important;
        font-size: 14px !important;
        width: 100% !important;
        color: hsl(0 0% 9%) !important;
        transition: all 0.2s ease !important;
        font-family: inherit !important;
      }
      
      /* Input focus state */
      .custom-hubspot-form .hs-input:focus,
      .custom-hubspot-form .hs-fieldtype-select select:focus {
        border-color: hsl(0 0% 9%) !important;
        outline: none !important;
        box-shadow: 0 0 0 2px hsl(0 0% 9% / 0.1) !important;
      }
      
      /* Label styling */
      .custom-hubspot-form .hs-form-field label {
        color: hsl(0 0% 9%) !important;
        font-weight: 500 !important;
        margin-bottom: 8px !important;
        display: block !important;
        font-size: 14px !important;
        font-family: inherit !important;
      }
      
      /* Required indicator styling */
      .custom-hubspot-form .hs-form-field label .hs-form__field__label__required {
        color: hsl(0 0% 45%) !important;
        margin-left: 2px !important;
      }
      
      /* Form field spacing */
      .custom-hubspot-form .hs-form-field {
        margin-bottom: 20px !important;
      }
      
      /* Submit button styling using primary colors */
      .custom-hubspot-form .hs_submit .hs-button {
        background-color: hsl(0 0% 9%) !important;
        color: hsl(0 0% 100%) !important;
        border: none !important;
        padding: 14px 32px !important;
        border-radius: 6px !important;
        font-weight: 600 !important;
        font-size: 16px !important;
        transition: all 0.2s ease !important;
        cursor: pointer !important;
        width: 100% !important;
        font-family: inherit !important;
      }
      
      /* Submit button hover state */
      .custom-hubspot-form .hs_submit .hs-button:hover {
        background-color: hsl(0 0% 15%) !important;
        transform: translateY(-1px) !important;
      }
      
      /* Submit container */
      .custom-hubspot-form .hs_submit {
        text-align: center !important;
        margin-top: 24px !important;
      }
      
      /* Error message styling */
      .custom-hubspot-form .hs-error-msgs {
        color: hsl(0 65% 51%) !important;
        font-size: 13px !important;
        margin-top: 4px !important;
        font-family: inherit !important;
      }
      
      /* Form row and group spacing */
      .custom-hubspot-form .hs-form__row {
        margin-bottom: 0 !important;
      }
      
      /* Input placeholder styling */
      .custom-hubspot-form .hs-input::placeholder {
        color: hsl(0 0% 45%) !important;
        opacity: 1 !important;
      }
      
      /* Remove any default margins/padding from form elements */
      .custom-hubspot-form .hs-form-field__group,
      .custom-hubspot-form .hs-form__group {
        margin: 0 !important;
        padding: 0 !important;
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with back button */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="group">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Join Our Waitlist
            </h1>
            <p className="text-muted-foreground">
              Be the first to experience the smarter way to send money to Africa. 
              Get early access and unlock your welcome bonus!
            </p>
          </div>

          {/* Form container */}
          <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
            <div id="hubspot-form-container" />
          </div>

          {/* Benefits */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p className="mb-2">✓ Early access to Metusa platform</p>
            <p className="mb-2">✓ Exclusive welcome bonus</p>
            <p>✓ No spam, unsubscribe anytime</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Waitlist;