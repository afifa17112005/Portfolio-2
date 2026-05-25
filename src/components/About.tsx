import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="container" style={{ padding: '4rem 0' }}>
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
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="neo-box" style={{ padding: '2.5rem', fontSize: '1.1rem', lineHeight: '2' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    I am a <span className="highlight bg-yellow">3rd-year Computer Science student</span> focused on solving real-world problems using <span className="highlight bg-pink">data and AI</span>. Through my AI and digital marketing internships, I have worked on practical use cases where technology meets business needs.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                    I have built projects such as a bus tracking system to reduce waiting time and an <span className="highlight bg-green">AI-based nutrition assistant</span> to support better daily decisions. These projects reflect my interest in creating simple, useful solutions rather than complex systems.
                </p>
                <p>
                    Currently, I am strengthening my skills in <span className="highlight bg-blue">SQL and data analytics</span>, with a focus on turning data into meaningful insights that drive better decisions.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
