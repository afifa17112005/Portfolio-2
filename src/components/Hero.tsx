import { Code, Terminal, Github, Linkedin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Hero = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState(['$ portfolio --help']);
    const [showCursor, setShowCursor] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const [terminalGlow, setTerminalGlow] = useState(0);
    const terminalRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    useEffect(() => {
        const glowInterval = setInterval(() => {
            setTerminalGlow(prev => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(glowInterval);
    }, []);

    const triggerSpeechBubbleHi = () => {
        setHistory(prev => [
            ...prev,
            '$ hi',
            'Hi there! I am Afifa. Welcome to my digital space! Feel free to run commands like "projects" or "skills" to learn more about my work. 🚀'
        ]);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const command = input.trim().toLowerCase();
            setHistory(prev => [...prev, `$ ${command}`]);

            const commands: Record<string, { response: string; link: string | null }> = {
                'projects': { response: 'Navigating to Projects section...', link: '#projects' },
                'journey': { response: 'Navigating to Journey section...', link: '#journey' },
                'skills': { response: 'Navigating to Skills section...', link: '#skills' },
                'contact': { response: 'Navigating to Contact section...', link: '#contact' },
                'help': { response: 'Available commands: projects | journey | skills | contact | clear | hi', link: null },
                'clear': { response: 'CLEAR', link: null },
                'hi': { response: 'Hi there! I am Afifa. Welcome to my digital space! Feel free to run commands like "projects" or "skills" to learn more about my work. 🚀', link: null },
                'hello': { response: 'Hello! I am Afifa. Welcome to my digital space! Feel free to run commands like "projects" or "skills" to learn more about my work. 🚀', link: null },
            };

            if (command === 'clear') {
                setHistory(['$ portfolio --help']);
            } else if (commands[command]) {
                setTimeout(() => {
                    setHistory(prev => [...prev, commands[command].response]);
                    if (commands[command].link) {
                        setTimeout(() => {
                            window.dispatchEvent(new CustomEvent('custom:navigate', { detail: commands[command].link }));
                        }, 500);
                    }
                }, 300);
            } else if (command) {
                setHistory(prev => [...prev, `Command not found: ${command}. Type 'help' for available commands.`]);
            }

            setInput('');
        }
    };

    const getGlowColor = () => {
        const colors = ['#ADD8E6', '#D8B3FF', '#FFB3D9'];
        return colors[terminalGlow];
    };

    // Cleaned up unused helper functions to ensure successful bundle compilation

    return (
        <section id="home" style={{
            padding: '4rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '80vh'
        }}>
            <div style={{ flex: 1, paddingRight: '2rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ fontSize: '4.5rem', marginBottom: '1.5rem', letterSpacing: '-0.05em' }}
                >
                    I'm Afifa A.
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--black)' }}
                >
                    Building Data-Driven Solutions with AI
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.18 }}
                    style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--blue)', marginBottom: '1.5rem' }}
                >
                    Aspiring Data Analyst • Applied AI Enthusiast • Problem Solver
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ fontSize: '1.1rem', lineHeight: '2', marginBottom: '2rem', maxWidth: '600px' }}
                >
                    <p>
                        I'm Afifa A., a <span className="highlight bg-yellow">Computer Science student</span> passionate about transforming data into <span className="highlight bg-pink">meaningful insights</span> and building practical <span className="highlight bg-green">AI-powered solutions</span>. I enjoy solving real-world challenges by combining analytical thinking with technology to create impactful and user-focused outcomes. Through internships and hands-on experience, I have explored AI, data analytics, and digital technologies while continuously strengthening my problem-solving mindset and technical skills.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--black)', marginBottom: '2rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
                >
                    <span className="neo-box bg-yellow" style={{ padding: '0.5rem 1rem' }}>5+ Projects</span>
                    <span className="neo-box bg-pink" style={{ padding: '0.5rem 1rem' }}>AI & Data Enthusiast</span>
                    <span className="neo-box bg-blue" style={{ padding: '0.5rem 1rem' }}>Internship Experience</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}
                >
                    <motion.a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('custom:navigate', { detail: '#contact' })); }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="neo-btn bg-blue"
                        style={{ fontSize: '1.1rem', padding: '1rem 2rem', textDecoration: 'none', display: 'inline-block' }}
                    >
                        Get in Touch
                    </motion.a>

                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <motion.a 
                            href="https://drive.google.com/file/d/1BbYzAys2MDaNGG0SstFTKqi3_k32giTW/view?usp=drive_link" 
                            target="_blank" rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--black)', fontWeight: 'bold' }}
                        >
                            <FileText size={20} /> Resume
                        </motion.a>
                        <motion.a 
                            href="https://www.linkedin.com/in/afifa-a-7788362a7/" 
                            target="_blank" rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--black)', fontWeight: 'bold' }}
                        >
                            <Linkedin size={20} /> LinkedIn
                        </motion.a>
                        <motion.a 
                            href="https://github.com/afifa17112005" 
                            target="_blank" rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--black)', fontWeight: 'bold' }}
                        >
                            <Github size={20} /> GitHub
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
                {/* Floating Icons */}
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [-10, -5, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="neo-box bg-blue" style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '20px',
                        padding: '0.75rem',
                        zIndex: 10,
                    }}>
                    <Code size={32} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [15, 20, 15] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="neo-box bg-yellow" style={{
                        position: 'absolute',
                        top: '40px',
                        right: '-20px',
                        padding: '0.75rem',
                        zIndex: 10,
                    }}>
                    <Terminal size={32} />
                </motion.div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="neo-box bg-green" style={{
                        position: 'absolute',
                        bottom: '10px',
                        left: '-10px',
                        padding: '0.5rem 1rem',
                        zIndex: 10,
                        fontWeight: 'bold'
                    }}>
                    AI Enthusiast
                </motion.div>

                {/* Avatar Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="neo-box bg-blue" style={{
                        width: '400px',
                        height: '400px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        marginTop: '-250px'
                    }}>
                    <img
                        src="/avatar.png"
                        alt="Afifa Avatar"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </motion.div>

                {/* "Hi!" Speech Bubble */}
                <motion.div
                    initial={{ scale: 0, opacity: 0, x: '-50%' }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        x: '-50%',
                        y: [0, -8, 0]
                    }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={triggerSpeechBubbleHi}
                    transition={{
                        scale: { type: 'spring', stiffness: 260, damping: 15, delay: 2.2 },
                        opacity: { duration: 0.3, delay: 2.2 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 2.7
                        }
                    }}
                    style={{
                        position: 'absolute',
                        top: '-320px',
                        left: '50%',
                        zIndex: 20,
                        cursor: 'pointer'
                    }}
                >
                    <div className="neo-box bg-yellow" style={{
                        padding: '0.6rem 1.2rem',
                        fontWeight: '800',
                        fontSize: '1.4rem',
                        color: 'var(--black)',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        whiteSpace: 'nowrap',
                        boxShadow: 'var(--shadow-offset) var(--shadow-offset) 0px var(--shadow-color)'
                    }}>
                        Hi! <motion.span
                            animate={{ rotate: [0, 20, -10, 20, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
                            style={{ display: 'inline-block', originX: 0.7, originY: 0.8 }}
                        >👋</motion.span>
                        
                        {/* Speech bubble arrow/pointer */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-14px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '0',
                            height: '0',
                            borderLeft: '12px solid transparent',
                            borderRight: '12px solid transparent',
                            borderTop: '14px solid var(--black)',
                            zIndex: -1
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '0',
                            height: '0',
                            borderLeft: '10px solid transparent',
                            borderRight: '10px solid transparent',
                            borderTop: '10px solid var(--yellow)',
                            zIndex: 1
                        }} />
                    </div>
                </motion.div>

                {/* Interactive Terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: isFocused ? 1.08 : 1,
                        x: isFocused ? -20 : 0
                    }}
                    transition={{ duration: 0.7, delay: 0.6, type: 'spring', stiffness: 100 }}
                    className="neo-box terminal-container" style={{
                        position: 'absolute',
                        bottom: '-320px',
                        right: '-100px',
                        width: '500px',
                        height: '280px',
                        backgroundColor: '#0d0d0d',
                        border: `3px solid ${getGlowColor()}`,
                        borderRadius: '12px',
                        padding: '1.5rem',
                        fontFamily: 'monospace',
                        fontSize: '1rem',
                        color: '#B0D4FF',
                        zIndex: 15,
                        boxShadow: `0 0 15px ${getGlowColor()}30, 0 0 30px ${getGlowColor()}20, 0 12px 30px rgba(0,0,0,0.5)`,
                        transition: 'all 0.3s ease',
                        background: 'linear-gradient(135deg, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.98) 100%)',
                        backdropFilter: 'blur(10px)'
                    }}
                    onClick={() => inputRef.current?.focus()}
                    whileHover={{
                        boxShadow: `0 0 25px ${getGlowColor()}40, 0 0 40px ${getGlowColor()}30, 0 15px 40px rgba(0,0,0,0.6)`
                    }}
                >
                    {/* Animated Glow Background */}
                    <motion.div
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            borderRadius: '12px',
                            opacity: 0.08,
                            pointerEvents: 'none'
                        }}
                        animate={{
                            background: [
                                `radial-gradient(circle at 0% 0%, #ADD8E6 0%, transparent 50%)`,
                                `radial-gradient(circle at 100% 100%, #D8B3FF 0%, transparent 50%)`,
                                `radial-gradient(circle at 50% 50%, #FFB3D9 0%, transparent 50%)`
                            ]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Terminal Header */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        style={{ 
                            marginBottom: '1rem', 
                            color: '#ADD8E6',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            textShadow: '0 0 8px rgba(173, 216, 230, 0.4)',
                            borderBottom: '1px solid #ADD8E6',
                            paddingBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            zIndex: 1,
                            position: 'relative'
                        }}
                    >
                        <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ●
                        </motion.span>
                        $ afifa@portfolio ~
                    </motion.div>

                    {/* Terminal Output */}
                    <div
                        ref={terminalRef}
                        style={{
                            maxHeight: '160px',
                            overflowY: 'auto',
                            marginBottom: '1rem',
                            paddingRight: '0.5rem',
                            color: '#ADD8E6',
                            textShadow: '0 0 5px rgba(173, 216, 230, 0.3)',
                            lineHeight: '1.8',
                            fontSize: '0.95rem',
                            zIndex: 1,
                            position: 'relative'
                        }}
                    >
                        {history.map((line, idx) => (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                                style={{ 
                                    marginBottom: '0.4rem', 
                                    color: line.startsWith('$') ? '#ADD8E6' : '#D8B3FF',
                                    textShadow: line.startsWith('$') ? '0 0 8px rgba(173, 216, 230, 0.4)' : '0 0 8px rgba(216, 179, 255, 0.5)',
                                    fontWeight: line.startsWith('$') ? '600' : '500'
                                }}
                            >
                                {line.startsWith('$') ? '▸ ' : '✓ '}{line}
                            </motion.div>
                        ))}
                    </div>

                    {/* Terminal Input */}
                    <motion.div 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            borderTop: '1px solid #ADD8E6', 
                            paddingTop: '0.8rem',
                            zIndex: 1,
                            position: 'relative'
                        }}
                        animate={{ 
                            boxShadow: [
                                '0 0 5px rgba(173, 216, 230, 0.1)',
                                '0 0 20px rgba(173, 216, 230, 0.2)',
                                '0 0 5px rgba(173, 216, 230, 0.1)'
                            ] 
                        }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    >
                        <span style={{ marginRight: '0.5rem', color: '#ADD8E6', fontWeight: 'bold' }}>$</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            placeholder="Type command..."
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                border: 'none',
                                color: '#ADD8E6',
                                outline: 'none',
                                fontFamily: 'monospace',
                                fontSize: '1rem',
                                textShadow: '0 0 8px rgba(173, 216, 230, 0.3)',
                                caretColor: '#ADD8E6',
                                transition: 'all 0.2s ease',
                                letterSpacing: '0.05em'
                            }}
                            autoFocus
                        />
                        <motion.span 
                            style={{
                                marginLeft: '0.2rem',
                                display: showCursor ? 'inline-block' : 'none',
                                color: '#ADD8E6',
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                                textShadow: '0 0 8px rgba(173, 216, 230, 0.4)'
                            }}
                            animate={{ 
                                opacity: [1, 0],
                                boxShadow: ['0 0 8px rgba(173,216,230,0.1)', '0 0 15px rgba(173,216,230,0.3)', '0 0 8px rgba(173,216,230,0.1)']
                            }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        >
                            ▌
                        </motion.span>
                    </motion.div>

                    {/* Floating Particles */}
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={`particle-${i}`}
                            style={{
                                position: 'absolute',
                                width: '2px',
                                height: '2px',
                                backgroundColor: ['#ADD8E6', '#D8B3FF', '#FFB3D9'][i],
                                borderRadius: '50%',
                                zIndex: 0,
                                opacity: 0.5,
                                boxShadow: `0 0 6px ${['#ADD8E6', '#D8B3FF', '#FFB3D9'][i]}`
                            }}
                            animate={{
                                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                                duration: 4 + i * 0.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: i * 0.3
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                
                @keyframes glow {
                    0% { text-shadow: 0 0 5px rgba(0, 255, 0, 0.3); }
                    50% { text-shadow: 0 0 15px rgba(0, 255, 0, 0.6); }
                    100% { text-shadow: 0 0 5px rgba(0, 255, 0, 0.3); }
                }
                
                @keyframes scanlines {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(10px); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
