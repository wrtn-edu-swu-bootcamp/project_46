"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        initial={{ y: 12 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.25,
          ease: [0.33, 1, 0.68, 1], // easeOutCubic
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
