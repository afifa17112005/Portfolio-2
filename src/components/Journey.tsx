import { MapPin, Award, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Journey = () => {
    const education = [
        {
            id: 'college',
            degree: 'Bachelor of Engineering (B.E. / B.Tech)',
            major: 'Computer Science & Engineering',
            institution: 'Undergraduate College',
            date: '2023 - Present',
            domain: 'college',
            highlights: [
                'Strengthening core fundamentals in Data Structures & Algorithms, Operating Systems, and Object-Oriented Programming.',
                'Specializing in Data Analytics & Applied AI, leveraging SQL and Python for modeling and analytics use-cases.',
                'Active participant in technical community events, building full-stack and machine learning applications.'
            ],
            skills: ['Database Management (SQL)', 'Machine Learning', 'Python', 'React.js', 'Data Structures', 'Data Analytics'],
            location: 'On-Campus Studies',
            grade: '3rd Year Student'
        },
        {
            id: 'school',
            degree: 'Senior Secondary Education (Class XII)',
            major: 'Science Stream (Physics, Chemistry & Mathematics)',
            institution: 'High School',
            date: '2021 - 2023',
            domain: 'school',
            highlights: [
                'Developed rigorous analytical skills in quantitative mathematics, calculus, physics, and logical reasoning.',
                'Built a strong foundation in mathematics and critical thinking, preparing for future engineering studies.'
            ],
            skills: ['Mathematics', 'Physics', 'Chemistry', 'Analytical Logic', 'Problem Solving'],
            location: 'High School Board',
            grade: 'Class XII'
        }
    ];

    const experiences = [
        {
            id: 'pragati',
            role: 'Pragati - Path to Future',
            company: 'Infosys Springboard',
            date: 'Apr 2026 - Present',
            domain: 'fullstack',
            highlights: [
                'Selected for a highly competitive professional certification pathway for top-performing engineers.',
                'Undergoing enterprise-aligned training focusing on advanced cloud technologies and systems engineering.',
                'Juggling academic modules while achieving top scores in strategic industry placement preparation.'
            ],
            skills: ['Enterprise Systems', 'Cloud Architecture', 'Placement Strategy', 'Professional Development'],
            location: 'Virtual',
            impact: 'Top Tier Selection'
        },
        {
            id: 'ai-intern',
            role: 'AI Intern',
            company: 'Infosys Springboard',
            date: 'Nov 2025 - Jan 2026',
            domain: 'ai-data',
            highlights: [
                'Architected high-fidelity web interfaces using React, optimizing component trees and local caching.',
                'Designed and integrated secure, normalized backend APIs with RESTful routing and authentication.',
                'Slashed DOM rendering latency and load times by 35% through modular lazy loading and query tuning.',
                'Spearheaded full-stack schema design, normalizations, and database container integrations.'
            ],
            skills: ['React', 'Node.js', 'Express', 'REST APIs', 'SQL Database Design', 'Performance Tuning'],
            location: 'Virtual',
            impact: '35% Latency Reduction'
        },
        {
            id: 'marketing-intern',
            role: 'Digital Marketing Intern',
            company: 'Myna Seva Foundation (AICTE)',
            date: 'Sept 2025 - Oct 2025',
            domain: 'marketing',
            highlights: [
                'Orchestrated multi-channel data-driven campaigns under AICTE-sponsored community programs.',
                'Boosted digital reach and user engagement by 45% using rigorous analytics and marketing funnels.',
                'A/B tested campaign designs, banner creatives, and social copy to optimize traffic conversions.',
                'Designed behavioral analytics workflows to understand community outreach bottlenecks.'
            ],
            skills: ['Data Analytics', 'Growth Marketing', 'A/B Testing', 'Funnel Optimization', 'Outreach Strategy'],
            location: 'Remote',
            impact: '45% Engagement Growth'
        },
        {
            id: 'ds-intern',
            role: 'AI & Data Science Intern',
            company: 'Arjun Vision Tech',
            date: 'Jan 2025 - Feb 2025',
            domain: 'ai-data',
            highlights: [
                'Engineered scalable data pre-processing and pipeline pipelines for machine learning modeling.',
                'Designed normalized database structures, optimizing queries for massive, high-dimensional datasets.',
                'Integrated reliable, modular payment and third-party APIs into clean product deployments.',
                'Configured automated CI/CD workflows and tests, decreasing deployment delivery cycles by 40%.'
            ],
            skills: ['Machine Learning', 'Python', 'CI/CD Automation', 'API Integrations', 'Data Pipelines', 'Git Workflows'],
            location: 'Chennai',
            impact: '40% Faster Deployment'
        }
    ];

    return (
        <section id="journey" className="container" style={{ padding: '4rem 0' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="neo-box bg-pink" style={{
                    textAlign: 'center',
                    padding: '1.2rem',
                    marginBottom: '2.5rem',
                    fontSize: '2.2rem',
                    display: 'block',
                    width: '100%',
                    boxSizing: 'border-box',
                    letterSpacing: '-0.5px'
                }}>
                My Professional Journey
            </motion.h2>

            {/* Timeline Column */}
            <div className="neo-box" style={{ 
                width: '100%', 
                padding: '2rem', 
                borderRadius: '4px', 
                boxSizing: 'border-box',
                backgroundColor: '#FFFFFF',
                border: '3px solid var(--black)',
                boxShadow: '4px 4px 0px var(--black)'
            }}>
                <h3 style={{ 
                    marginBottom: '2rem', 
                    borderBottom: '2.5px solid var(--black)', 
                    paddingBottom: '0.75rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.6rem',
                    fontSize: '1.4rem',
                    fontWeight: '900',
                    color: 'var(--black)'
                }}>
                    <Award size={22} />
                    Experience Timeline
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#64748B', marginLeft: 'auto' }}>
                        Showing {experiences.length} milestones
                    </span>
                </h3>

                <div style={{ position: 'relative', borderLeft: '3px solid var(--black)', marginLeft: '1rem', paddingLeft: '2rem' }}>
                    {experiences.map((exp, idx) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                key={exp.id} 
                                className="neo-box experience-card"
                                style={{ 
                                    marginBottom: '2.5rem', 
                                    position: 'relative', 
                                    cursor: 'default', 
                                    padding: '1.5rem', 
                                    backgroundColor: '#FFFFFF', 
                                    border: '3px solid var(--black)',
                                    borderRadius: '8px',
                                    boxShadow: '4px 4px 0px var(--black)'
                                }}
                            >
                                {/* Timeline Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-2.7rem',
                                    top: '1.5rem',
                                    width: '1.3rem',
                                    height: '1.3rem',
                                    backgroundColor: 'var(--black)',
                                    borderRadius: '50%',
                                    border: '3px solid var(--black)',
                                    zIndex: 3
                                }} />

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '1rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--black)' }}>
                                            {exp.role} 
                                        </h4>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontWeight: '600', fontSize: '0.95rem' }}>
                                            <span>{exp.company}</span>
                                            <span style={{ opacity: 0.5 }}>•</span>
                                            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{exp.date}</span>
                                        </div>
                                    </div>
                                    <div 
                                        className="neo-box"
                                        style={{
                                            backgroundColor: exp.domain === 'ai-data' ? '#7DD3FC' : exp.domain === 'fullstack' ? '#D8B3FF' : '#FFB3D9',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '4px',
                                            fontSize: '0.75rem',
                                            fontWeight: '800',
                                            border: '2px solid var(--black)',
                                            boxShadow: '1px 1px 0px var(--black)',
                                            letterSpacing: '0.5px',
                                            color: 'var(--black)'
                                        }}>
                                        {exp.impact}
                                    </div>
                                </div>

                                {/* Highlights list */}
                                <div style={{ marginBottom: '1.2rem', marginTop: '1rem' }}>
                                    {exp.highlights.map((highlight, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.5rem', fontSize: '0.95rem', lineHeight: '1.45', color: '#334155' }}>
                                            <span style={{ color: '#64748B', fontWeight: 'bold', minWidth: '1rem' }}>▸</span>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Skills Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem', marginBottom: '1.2rem' }}>
                                    {exp.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                backgroundColor: '#F1F5F9',
                                                padding: '0.3rem 0.6rem',
                                                borderRadius: '4px',
                                                fontSize: '0.75rem',
                                                fontWeight: '700',
                                                border: '1.5px solid var(--black)',
                                                color: 'var(--black)'
                                            }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Location detail */}
                                <div style={{ borderTop: '2px solid var(--black)', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0F172A', fontWeight: 'bold', fontSize: '0.85rem' }}>
                                    <MapPin size={16} color="var(--black)" />
                                    <span>{exp.location} Location</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Education Timeline */}
            <div className="neo-box" style={{ 
                width: '100%', 
                padding: '2rem', 
                borderRadius: '4px', 
                boxSizing: 'border-box',
                backgroundColor: '#FFFFFF',
                border: '3px solid var(--black)',
                boxShadow: '4px 4px 0px var(--black)',
                marginTop: '3rem'
            }}>
                <h3 style={{ 
                    marginBottom: '2rem', 
                    borderBottom: '2.5px solid var(--black)', 
                    paddingBottom: '0.75rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.6rem',
                    fontSize: '1.4rem',
                    fontWeight: '900',
                    color: 'var(--black)'
                }}>
                    <GraduationCap size={22} />
                    Educational Journey
                    <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#64748B', marginLeft: 'auto' }}>
                        Academic Background
                    </span>
                </h3>

                <div style={{ position: 'relative', borderLeft: '3px solid var(--black)', marginLeft: '1rem', paddingLeft: '2rem' }}>
                    {education.map((edu, idx) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.08 }}
                                key={edu.id} 
                                className="neo-box education-card"
                                style={{ 
                                    marginBottom: '2.5rem', 
                                    position: 'relative', 
                                    cursor: 'default', 
                                    padding: '1.5rem', 
                                    backgroundColor: '#FFFFFF', 
                                    border: '3px solid var(--black)',
                                    borderRadius: '8px',
                                    boxShadow: '4px 4px 0px var(--black)'
                                }}
                            >
                                {/* Timeline Dot */}
                                <div style={{
                                    position: 'absolute',
                                    left: '-2.7rem',
                                    top: '1.5rem',
                                    width: '1.3rem',
                                    height: '1.3rem',
                                    backgroundColor: 'var(--black)',
                                    borderRadius: '50%',
                                    border: '3px solid var(--black)',
                                    zIndex: 3
                                }} />

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '1rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.25rem', marginBottom: '0.2rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--black)' }}>
                                            {edu.degree} 
                                        </h4>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569', fontWeight: '600', fontSize: '0.95rem' }}>
                                            <span>{edu.major}</span>
                                            <span style={{ opacity: 0.5 }}>•</span>
                                            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>{edu.institution}</span>
                                        </div>
                                    </div>
                                    <div 
                                        className="neo-box"
                                        style={{
                                            backgroundColor: edu.domain === 'college' ? 'var(--blue)' : 'var(--green)',
                                            padding: '0.4rem 0.8rem',
                                            borderRadius: '4px',
                                            fontSize: '0.75rem',
                                            fontWeight: '800',
                                            border: '2px solid var(--black)',
                                            boxShadow: '1px 1px 0px var(--black)',
                                            letterSpacing: '0.5px',
                                            color: 'var(--black)'
                                        }}>
                                        {edu.grade}
                                    </div>
                                </div>

                                {/* Highlights list */}
                                <div style={{ marginBottom: '1.2rem', marginTop: '1rem' }}>
                                    {edu.highlights.map((highlight, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.5rem', fontSize: '0.95rem', lineHeight: '1.45', color: '#334155' }}>
                                            <span style={{ color: '#64748B', fontWeight: 'bold', minWidth: '1rem' }}>▸</span>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Skills Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem', marginBottom: '1.2rem' }}>
                                    {edu.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                backgroundColor: '#F1F5F9',
                                                padding: '0.3rem 0.6rem',
                                                borderRadius: '4px',
                                                fontSize: '0.75rem',
                                                fontWeight: '700',
                                                border: '1.5px solid var(--black)',
                                                color: 'var(--black)'
                                            }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Date/Location detail */}
                                <div style={{ borderTop: '2px solid var(--black)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#0F172A', fontWeight: 'bold', fontSize: '0.85rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                        <MapPin size={16} color="var(--black)" />
                                        <span>{edu.location}</span>
                                    </div>
                                    <div style={{ color: '#475569' }}>
                                        <span>{edu.date}</span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Journey;
