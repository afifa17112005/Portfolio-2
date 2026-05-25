import { Monitor, Code, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
    const categories = [
        {
            title: 'LANGUAGES',
            color: 'bg-yellow',
            icon: <Code size={20} />,
            skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'SQL']
        },
        {
            title: 'FRONTEND',
            color: 'bg-blue',
            icon: <Monitor size={20} />,
            skills: ['React', 'Next.js', 'Tailwind CSS']
        },
        {
            title: 'BACKEND & APIs',
            color: 'bg-green',
            icon: <Cloud size={20} />,
            skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs']
        },
        {
            title: 'DATA / AI',
            color: 'bg-pink',
            icon: <Monitor size={20} />,
            skills: ['SQL', 'Machine Learning', 'Data Analytics', 'Streamlit', 'Generative AI']
        },
        {
            title: 'TOOLS & PLATFORMS',
            color: 'bg-blue',
            icon: <Code size={20} />,
            skills: ['Git', 'GitHub', 'Vercel', 'Supabase', 'Figma', 'IoT Basics']
        }
    ];

    return (
        <section id="skills" className="container" style={{ padding: '4rem 0' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="neo-box bg-pink" style={{
                    textAlign: 'center',
                    padding: '1rem',
                    marginBottom: '3rem',
                    fontSize: '2rem',
                    display: 'block',
                    width: '100%',
                    boxSizing: 'border-box'
                }}>
                Skills
            </motion.h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.1
                        }
                    }
                }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                {categories.map((category, idx) => (
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        whileHover={{ y: -5, boxShadow: '6px 6px 0px 0px var(--black)' }}
                        key={idx} className="neo-box" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', transition: 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '2px solid var(--black)' }}>
                            <div className={`neo-box ${category.color}`} style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {category.icon}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>{category.title}</h3>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {category.skills.map((skill, sIdx) => (
                                <motion.div
                                    whileHover={{ scale: 1.05, x: -2, y: -2, boxShadow: '6px 6px 0px var(--black)' }}
                                    whileTap={{ scale: 0.95, x: 2, y: 2, boxShadow: '0px 0px 0px var(--black)' }}
                                    key={sIdx} className="neo-box" style={{
                                        padding: '0.5rem 1rem',
                                        fontSize: '0.9rem',
                                        backgroundColor: 'var(--white)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        cursor: 'pointer',
                                        transition: 'none' // override css transition to let framer motion handle it smoothly
                                    }}>
                                    <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>★</span>
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
