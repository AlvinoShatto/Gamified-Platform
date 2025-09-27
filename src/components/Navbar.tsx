import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Community', href: '/community' },
  { name: 'Admin', href: '/admin' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Sprout className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">VisionX</span>
              <span className="text-xs text-muted-foreground">SIH 2025</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors duration-200',
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-4 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  />
                )}
              </Link>
            ))}
            <Button variant="default" size="sm" className="ml-4">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-border"
          >
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors duration-200',
                    location.pathname === item.href
                      ? 'text-primary bg-primary/10 rounded-lg'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="default" size="sm" className="mt-4 mx-3">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}