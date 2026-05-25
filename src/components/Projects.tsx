import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Where Is The Bus',
            description: 'A real-time bus tracking web app built to reduce student waiting time at college. Displays live bus locations and estimated arrival times using geolocation and REST APIs.',
            tags: ['React', 'REST APIs', 'Geolocation', 'Node.js'],
            github: 'https://github.com/afifa17112005/where-is-the-bus',
            demo: 'https://where-is-the-bus.vercel.app/'
        },
        {
            title: 'IPL Win Probability Predictor',
            description: 'An ML-powered predictor built under Infosys Springboard that estimates live win probabilities for IPL matches. Trained on historical IPL data to deliver real-time predictions based on match conditions.',
            tags: ['Python', 'Machine Learning', 'Data Analytics', 'Infosys Springboard'],
            github: '',
            githubFrontend: 'https://github.com/afifa17112005/ipl-frontend',
            githubBackend: 'https://github.com/afifa17112005/ipl-backend',
            demo: 'https://drive.google.com/file/d/1_ZWvtAw1qwhzzFyFenbH65pL0rHTRdrs/view'
        },
        {
            title: 'Heart Disease Predictor',
            description: 'An ML model that predicts the likelihood of heart disease based on patient health parameters. Built to demonstrate how data-driven insights can support early medical decision-making.',
            tags: ['Python', 'Machine Learning', 'Data Analytics', 'Healthcare AI'],
            github: 'https://github.com/afifa17112005/Heart-Disease-Prediction-System',
            demo: 'https://heart-disease-prediction-system-ppd3e3bfwwfb4wezdtbngo.streamlit.app/'
        },
        {
            title: 'Smart Parking System',
            description: 'A smart parking solution that detects real-time slot availability and helps users find and reserve parking spaces efficiently, reducing time spent searching for parking.',
            tags: ['IoT', 'Python', 'Data Analytics', 'Real-Time'],
            github: '',
            demo: ''
        },
        {
            title: 'NutriCare – AI Nutrition Assistant',
            description: 'An AI-powered nutrition assistant that analyzes user health data and generates personalized meal plans. Built to make daily dietary decisions simpler and more data-driven.',
            tags: ['Python', 'AI', 'Next.js', 'FastAPI'],
            github: '',
            demo: '',
            comingSoon: true
        },

        {
            title: 'AI Preventive Health Assistant',
            description: 'An intelligent AI-powered assistant designed to help users track health metrics, provide personalized preventive wellness insights, and simplify daily health management.',
            tags: ['AI', 'HealthTech', 'Python', 'Streamlit'],
            github: 'https://github.com/afifa17112005/AI-Preventive-Health-Assistant',
            demo: 'https://ai-preventive-health-assistant-bkdgenznpyk2ncsumpp5hu.streamlit.app/'
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="projects" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
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
                Featured Projects
            </motion.h2>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ y: -5, boxShadow: '6px 6px 0px 0px var(--black)' }}
                        className="neo-box bg-white"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '1.5rem',
                            transition: 'all 0.2s ease',
                            height: '100%'
                        }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '2px solid var(--black)', paddingBottom: '0.5rem' }}>
                            {project.title}
                        </h3>
                        <p style={{ flex: 1, marginBottom: '1.5rem', lineHeight: '1.6' }}>
                            {project.description}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            {project.tags.map((tag, i) => (
                                <span key={i} className="neo-box" style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem', backgroundColor: 'var(--yellow)', fontWeight: 'bold' }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            {(project as any).comingSoon ? (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span className="neo-box" style={{ padding: '0.5rem 1.2rem', backgroundColor: 'var(--pink)', fontWeight: 'bold', fontSize: '0.95rem', letterSpacing: '0.5px' }}>🚧 Coming Soon</span>
                                </div>
                            ) : (
                                <>
                                    {project.demo ? (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="neo-btn bg-blue" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', textDecoration: 'none' }}>
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                    ) : (
                                        <button className="neo-btn bg-blue" style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.5rem', opacity: 0.5, cursor: 'not-allowed' }} disabled>
                                            <ExternalLink size={16} /> Live Demo
                                        </button>
                                    )}
                                    {(project as any).githubFrontend ? (
                                        <a href={(project as any).githubFrontend} target="_blank" rel="noopener noreferrer" className="neo-box bg-white" style={{ padding: '0.4rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', border: 'var(--border-width) solid var(--black)', textDecoration: 'none', color: 'var(--black)', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                            <Github size={14} /> Frontend
                                        </a>
                                    ) : null}
                                    {(project as any).githubBackend ? (
                                        <a href={(project as any).githubBackend} target="_blank" rel="noopener noreferrer" className="neo-box bg-white" style={{ padding: '0.4rem 0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem', border: 'var(--border-width) solid var(--black)', textDecoration: 'none', color: 'var(--black)', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                            <Github size={14} /> Backend
                                        </a>
                                    ) : null}
                                    {!((project as any).githubFrontend) && !((project as any).githubBackend) && project.github ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="neo-box bg-white" style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'var(--border-width) solid var(--black)', textDecoration: 'none', color: 'var(--black)' }}>
                                            <Github size={16} />
                                        </a>
                                    ) : null}
                                    {!((project as any).githubFrontend) && !((project as any).githubBackend) && !project.github ? (
                                        <button className="neo-box bg-white" style={{ padding: '0.5rem', cursor: 'not-allowed', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'var(--border-width) solid var(--black)', opacity: 0.5 }} disabled>
                                            <Github size={16} />
                                        </button>
                                    ) : null}
                                </>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
