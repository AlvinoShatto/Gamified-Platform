import { Link } from 'react-router-dom';
import { Sprout, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Sprout className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground">VisionX</span>
                <span className="text-xs text-muted-foreground">SIH 2025</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              Gamifying sustainable farming practices to create a better future for agriculture. 
              Empowering farmers through community, rewards, and technology.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Community', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              {['Help Center', 'Privacy Policy', 'Terms of Service', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 VisionX - SIH 2025. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Built for Smart India Hackathon 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}