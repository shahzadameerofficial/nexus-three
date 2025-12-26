import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import nexusLogo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Web Development", path: "/services/web-development" },
    { name: "UI/UX Design", path: "/services/ui-ux-design" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Business Development", path: "/services/business-development" },
    { name: "Amazon Services", path: "/services/amazon-services" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const socials = [
    { icon: Linkedin, href: `${import.meta.env.VITE_LINKEDIN}`, label: "LinkedIn" },
    { icon: Twitter, href: `${import.meta.env.VITE_TWITTER}`, label: "Twitter" },
    { icon: Instagram, href: `${import.meta.env.VITE_INSTAGRAM}`, label: "Instagram" },
    { icon: Facebook, href: `${import.meta.env.VITE_FACEBOOK}`, label: "Facebook" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={nexusLogo} alt="Nexus Three" className="h-12 brightness-0 invert" />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Connecting you smarter... We transform businesses through innovative digital solutions and strategic growth.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-background/60 text-sm">
                  {import.meta.env.VITE_ADDRESS}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="text-background/60 hover:text-background text-sm">
                  {import.meta.env.VITE_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href={`tel:${import.meta.env.VITE_PHONE}`} className="text-background/60 hover:text-background text-sm">
                  {import.meta.env.VITE_PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {currentYear} Nexus Three. All rights reserved.
          </p>
          <p className="text-background/40 text-sm">
            Connecting you smarter...
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
