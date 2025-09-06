const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-primary text-primary-foreground" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          {/* Copyright */}
          <p className="text-sm opacity-90">
            © 2025 Metusa. All rights reserved.
          </p>
          
          {/* Company Info */}
          <p className="text-sm opacity-75">
            Metusa Ltd – Registered in the UK.
          </p>
          
          {/* Links */}
          <div className="flex justify-center space-x-6 text-sm">
            <a 
              href="#" 
              className="opacity-75 hover:opacity-100 transition-opacity"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="opacity-75 hover:opacity-100 transition-opacity"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="opacity-75 hover:opacity-100 transition-opacity"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;