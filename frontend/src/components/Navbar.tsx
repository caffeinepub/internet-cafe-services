import { useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-base/95 backdrop-blur-md border-b border-cyber-cyan/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/assets/generated/cafe-logo.dim_256x256.png"
                alt="Internet Cafe Services Logo"
                className="h-10 w-10 rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-cyber-cyan/10 group-hover:bg-cyber-cyan/20 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight text-foreground group-hover:text-cyber-cyan transition-colors">
                Internet Cafe
              </span>
              <span className="text-xs text-cyber-cyan font-medium tracking-widest uppercase">
                Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 font-heading ${
                  isActive(link.path)
                    ? 'text-cyber-cyan'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {isActive(link.path) && (
                  <span className="absolute inset-0 rounded-md bg-cyber-cyan/10 border border-cyber-cyan/30" />
                )}
                <span className="relative">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact">
              <Button
                className="bg-cyber-cyan text-dark-base hover:bg-cyber-cyan/90 font-heading font-semibold glow-cyan transition-all duration-200"
                size="sm"
              >
                <Wifi className="w-4 h-4 mr-2" />
                Get Connected
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 bg-dark-base/98 backdrop-blur-md">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-3 rounded-md font-heading font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-cyber-cyan bg-cyber-cyan/10 border-l-2 border-cyber-cyan'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-cyber-cyan text-dark-base hover:bg-cyber-cyan/90 font-heading font-semibold">
                    <Wifi className="w-4 h-4 mr-2" />
                    Get Connected
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
