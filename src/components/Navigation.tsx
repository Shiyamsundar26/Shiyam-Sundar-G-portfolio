import { motion } from 'motion/react';

interface NavigationProps {
  currentPage: number;
  navigateToPage: (page: number) => void;
}

export default function Navigation({ currentPage, navigateToPage }: NavigationProps) {
  const pages = [
    { num: 1, label: 'Home' },
    { num: 2, label: 'About' },
    { num: 3, label: 'Skills' },
    { num: 4, label: 'Projects' },
    { num: 5, label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 space-y-4"
    >
      {pages.map((page) => (
        <motion.button
          key={page.num}
          onClick={() => navigateToPage(page.num)}
          className="group relative block"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative">
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentPage === page.num
                  ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.8)]'
                  : 'bg-transparent border-violet-400/50 hover:border-cyan-400'
              }`}
              animate={
                currentPage === page.num
                  ? {
                      scale: [1, 1.3, 1],
                      boxShadow: [
                        '0 0 20px rgba(6,182,212,0.8)',
                        '0 0 30px rgba(6,182,212,1)',
                        '0 0 20px rgba(6,182,212,0.8)',
                      ],
                    }
                  : {}
              }
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Label on hover - always visible on hover */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 px-4 py-2 bg-violet-900/90 backdrop-blur-xl border border-cyan-400/40 rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-cyan-500/20">
              <span className="text-cyan-300">{page.label}</span>
            </div>
          </div>
        </motion.button>
      ))}
    </motion.nav>
  );
}