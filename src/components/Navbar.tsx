import { useState, useEffect } from 'react';
import { useScroll } from '../hooks/useScroll';
import { navigationLinks } from '../data/navigation';
import { cn } from '../utils/cn';

export function Navbar() {
  const isScrolled = useScroll(10);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-brand-bg/95 backdrop-blur-md shadow-sm py-4 border-b border-brand-mint/50'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 font-bold text-xl tracking-tight focus:outline-none focus:ring-2 focus:ring-brand-hover rounded-lg p-1"
            aria-label="NextGen AI Home"
          >
            <svg
              className="h-8 w-8 text-brand-text transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
            <span className="font-extrabold text-brand-text">
              NextGen AI
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-hover after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus:ring-2 focus:ring-brand-hover rounded-md px-1",
                  "text-brand-text/80 hover:text-brand-text"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-brand-text/80 hover:text-brand-text hover:bg-card-bg/50 focus:outline-none focus:ring-2 focus:ring-brand-hover transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )}
            </button>
            <a
              href="#login"
              className="text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-hover rounded-lg px-4 py-2 text-brand-text/80 hover:text-brand-text"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="text-sm font-semibold rounded-lg px-5 py-2.5 bg-brand-cta hover:bg-brand-hover text-brand-text shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-hover"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button & Mobile Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-brand-text/80 hover:text-brand-text hover:bg-card-bg/50 focus:outline-none focus:ring-2 focus:ring-brand-hover transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={cn(
                "p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-hover transition-colors",
                "text-brand-text hover:bg-card-bg/50"
              )}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle main menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className={cn(
            "md:hidden absolute top-full left-0 right-0 border-b transition-all duration-300 ease-in-out animate-fade-in-down",
            isScrolled
              ? "bg-brand-bg border-brand-mint text-brand-text shadow-lg"
              : "bg-brand-bg/98 border-brand-mint/80 text-brand-text shadow-xl"
          )}
        >
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium transition-colors duration-200 text-brand-text/80 hover:bg-card-bg hover:text-brand-text"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-3 border-t border-brand-mint/60">
              <a
                href="#login"
                onClick={() => setIsOpen(false)}
                className="text-center py-2.5 text-base font-medium rounded-lg transition-colors text-brand-text/80 hover:bg-card-bg"
              >
                Sign In
              </a>
              <a
                href="#signup"
                onClick={() => setIsOpen(false)}
                className="text-center py-2.5 text-base font-semibold rounded-lg shadow-sm transition-colors bg-brand-cta hover:bg-brand-hover text-brand-text"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
export default Navbar;
