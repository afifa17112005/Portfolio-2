import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: 'Junior Cybersecurity Analyst Career Path',
            issuer: 'Cisco Networking Academy',
            date: 'May 2026',
            link: 'https://www.credly.com/badges/d9afb54b-de34-463a-a6c4-39cddf3edf0a'
        },
        {
            title: 'AWS Cloud Solutions Architect Specialization',
            issuer: 'Amazon Web Services (AWS)',
            date: 'May 2025',
            link: 'https://www.coursera.org/account/accomplishments/specialization/29IGE4D4M30Z'
        },
        {
            title: 'Data Analytics Job Simulation',
            issuer: 'Deloitte (via Forage)',
            date: 'April 2026',
            link: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_FgyCX8JMDZSEznk7u_1776960912604_completion_certificate.pdf'
        }
    ];

    return (
        <section id="certifications" className="container" style={{ padding: '4rem 0' }}>
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
                Certifications
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {certs.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        whileHover={{ y: -4, boxShadow: '6px 6px 0px 0px var(--black)' }}
                        className="neo-box bg-white"
                        style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', transition: 'none' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
                            <div className="neo-box bg-yellow" style={{ width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <Award size={22} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{cert.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--blue)', fontWeight: '600' }}>{cert.issuer}</p>
                                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.2rem' }}>{cert.date}</p>
                            </div>
                        </div>
                        {cert.link ? (
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="neo-box bg-blue"
                                style={{ padding: '0.5rem 1rem', textDecoration: 'none', color: 'var(--black)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 'bold', fontSize: '0.85rem', flexShrink: 0 }}
                            >
                                <ExternalLink size={14} /> View
                            </a>
                        ) : (
                            <span className="neo-box" style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', fontWeight: 'bold', backgroundColor: 'var(--green)', flexShrink: 0 }}>
                                ✓ Verified
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
