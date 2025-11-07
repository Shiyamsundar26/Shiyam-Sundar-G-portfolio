import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Page1Hero from './pages/Page1Hero';
import Page2About from './pages/Page2About';
import Page3Skills from './pages/Page3Skills';
import Page4Projects from './pages/Page4Projects';
import Page5Contact from './pages/Page5Contact';
import PageTransition from './components/PageTransition';
import Navigation from './components/Navigation';
import CursorTrail from './components/CursorTrail';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateToPage = (pageNumber: number) => {
    if (pageNumber === currentPage || isTransitioning) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => setIsTransitioning(false), 800);
    }, 600);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentPage < 5) {
        navigateToPage(currentPage + 1);
      } else if (e.key === 'ArrowLeft' && currentPage > 1) {
        navigateToPage(currentPage - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return <Page1Hero navigateToPage={navigateToPage} />;
      case 2:
        return <Page2About navigateToPage={navigateToPage} />;
      case 3:
        return <Page3Skills navigateToPage={navigateToPage} />;
      case 4:
        return <Page4Projects navigateToPage={navigateToPage} />;
      case 5:
        return <Page5Contact navigateToPage={navigateToPage} />;
      default:
        return <Page1Hero navigateToPage={navigateToPage} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-violet-50 text-slate-900 overflow-hidden">
      {/* Ambient background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(125,211,252,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(196,181,253,0.1),transparent_50%)]" />
      </div>

      <CursorTrail />
      <Navigation currentPage={currentPage} navigateToPage={navigateToPage} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {isTransitioning && <PageTransition />}
    </div>
  );
}