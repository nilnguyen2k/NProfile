import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useScroll, useActiveSection } from '../../hooks';
import { NAV_SECTIONS } from '../../lib/constants';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../lib/utils';
import ThemeToggle from '../ui/ThemeToggle';

function MobileMenu({ isOpen, onClose, activeSection, theme }) {
  if (!isOpen) return null;

  const handleNavClick = (id) => {
    onClose();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return createPortal(
    <div
      className={cn(
        'md:hidden fixed inset-0 z-[99999] overflow-y-auto',
        theme === 'dark'
          ? 'bg-slate-950/98 backdrop-blur-xl'
          : 'bg-white/98 backdrop-blur-xl'
      )}
      style={{ top: '64px' }}
    >
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] gap-8 py-8">
        {NAV_SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={cn(
              'text-2xl font-medium transition-all duration-200 focus:outline-none focus-visible:outline-none active:outline-none relative',
              activeSection === section.id
                ? 'text-primary font-semibold'
                : cn(
                    'text-slate-600 dark:text-slate-400',
                    'hover:text-primary'
                  )
            )}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>,
    document.body
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScroll();
  const { theme } = useTheme();
  const activeSection = useActiveSection(NAV_SECTIONS.map(s => s.id));

  const handleNavClick = (id) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? cn(
                'backdrop-blur-md border-b shadow-sm',
                theme === 'dark'
                  ? 'bg-slate-950/90 border-slate-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                  : 'bg-white/95 border-slate-200 shadow-sm'
              )
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xl font-bold"
            >
              <span className="text-primary">{'<'}</span>
              <span className="text-slate-900 dark:text-slate-100">Nil Nguyen</span>
              <span className="text-primary">{'/>'}</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={cn(
                    'text-sm font-medium transition-all duration-200 hover:text-primary focus:outline-none focus-visible:outline-none active:outline-none px-2 py-1 relative',
                    activeSection === section.id
                      ? 'text-primary font-semibold'
                      : 'text-slate-600 dark:text-slate-400'
                  )}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none focus-visible:outline-none active:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeSection={activeSection}
        theme={theme}
      />
    </>
  );
}

export default Header;
