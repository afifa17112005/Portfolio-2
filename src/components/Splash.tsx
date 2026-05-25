import { motion } from 'framer-motion';
import { Terminal, Code, Save } from 'lucide-react';

const Splash = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--yellow)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            {/* Background floating icons */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [-10, 5, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="neo-box bg-blue"
                style={{ position: 'absolute', top: '20%', left: '15%', padding: '0.5rem' }}
            >
                <Code size={32} />
            </motion.div>

            <motion.div
                animate={{ y: [0, 20, 0], rotate: [10, -5, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="neo-box bg-yellow"
                style={{ position: 'absolute', top: '25%', right: '20%', padding: '0.5rem' }}
            >
                <Terminal size={32} />
            </motion.div>

            <motion.div
                animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="neo-box bg-green"
                style={{ position: 'absolute', bottom: '25%', left: '20%', padding: '0.5rem' }}
            >
                <Save size={32} />
            </motion.div>

            {/* Center Logo */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 0.8
                        }}
                        className="neo-box bg-blue"
                        style={{
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            fontWeight: '900',
                            fontFamily: "'Space Grotesk', sans-serif"
                        }}
                    >
                        A
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            duration: 0.8,
                            delay: 0.2
                        }}
                        className="neo-box bg-pink"
                        style={{
                            width: '80px',
                            height: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            fontWeight: '900',
                            fontFamily: "'Space Grotesk', sans-serif"
                        }}
                    >
                        A
                    </motion.div>
                </div>
                {/* Animated underline */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
                    className="neo-box bg-yellow"
                    style={{
                        height: '10px',
                        marginTop: '0.5rem'
                    }}
                />
            </div>
        </motion.div>
    );
};

export default Splash;
