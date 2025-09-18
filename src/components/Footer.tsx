import { Heart, Facebook, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from "../assets/images/team/Logo.png";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
 const teamMembers = [
  { name: "Acer, John Astley A.", link: "https://www.facebook.com/JohnAstleyAcer" },
  { name: "Abad, Kennedy A.", link: "https://www.facebook.com/abad.ken.94" },
  { name: "Adorna, Jaby Mae A.", link: "https://www.facebook.com/jbmae.adorna" },
  { name: "Lacson, Fernando J.", link: "https://www.facebook.com/aldrin.lacson.17" },
  { name: "Vargas, Kenji B.", link: "https://www.facebook.com/KBV29" },
];

  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                <span className="text-primary-foreground font-bold"> <img 
                    src={logo} 
                    alt="CT1 Logo" 
                    className="h-6 w-auto" 
                  /> </span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Core Transaction 1</h3>
                <p className="text-sm text-muted-foreground">Patient Access & Frontline Services</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Revolutionizing healthcare delivery through intelligent patient management systems 
              and integrated care solutions.
            </p>
            
            {/* System Link */}
            <Button 
              variant="outline" 
              className="w-full"
              asChild
            >
              <a 
                href="https://corehms.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit Live System
              </a>
            </Button>
          </div>

          {/* Development Team */}
          <div>
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-primary" />
                Development Team
              </h4>
              <ul className="space-y-2">
                {teamMembers.map((member, index) => (
                  <li key={index}>
                    <a
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {member.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-2 mb-4">
              <a 
                href="https://www.facebook.com/LynxDevelopmentTeam/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
              </a>
              <a 
                href="mailto:lynxdevelopmentteam@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Mail className="w-4 h-4" />
              </Button> </a>
            </div>
            
            {/* Quick Stats */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Modules</span>
                <span className="font-medium">5 Integrated</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Uptime</span>
                <span className="font-medium">24/7 Available</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Support</span>
                <span className="font-medium">Always Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Core Transaction 1. Healthcare Technology Innovation.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Built with passion for better patient care.
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <button className="hover:text-primary transition-colors">Support</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;