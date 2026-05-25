import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const overlayVariants = {
  hidden: { y: '-100%' },
  enter: { y: '0%' },
  exit: { y: '100%' }
};

export default function PageTransition() {
  const [stage, setStage] = useState<'idle' | 'enter' | 'exit'>('idle');
  const [targetHash, setTargetHash] = useState<string | null>(null);

  useEffect(() => {
    const onNavigate = (e: Event) => {
      // CustomEvent with detail = '#about' etc.
      // @ts-ignore
      const detail = e?.detail as string | undefined;
      setTargetHash(detail ?? null);
      setStage('enter');
    };

    window.addEventListener('custom:navigate', onNavigate as EventListener);
    return () => window.removeEventListener('custom:navigate', onNavigate as EventListener);
  }, []);

  return (
    <AnimatePresence>
      {stage !== 'idle' && (
        <motion.div
          key={stage}
          initial="hidden"
          animate={stage === 'enter' ? 'enter' : 'exit'}
          variants={overlayVariants}
          exit="exit"
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'var(--black)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--white)'
          }}
          onAnimationComplete={() => {
            if (stage === 'enter') {
              // after overlay covers, perform the scroll, then animate out
              if (targetHash) {
                try {
                  const el = document.querySelector(targetHash);
                  if (el) (el as HTMLElement).scrollIntoView({ behavior: 'auto' });
                } catch (err) {
                  // ignore
                }
              }
              // small timeout to ensure scroll happened
              setTimeout(() => setStage('exit'), 80);
            } else if (stage === 'exit') {
              // finished exit -> idle
              setStage('idle');
              setTargetHash(null);
            }
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: 8 }}>Loading</h2>
            <div style={{ opacity: 0.85 }}>—</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
