import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm('xqejdgpa');

    return (
        <section id="contact" className="container" style={{ padding: '4rem 0' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="neo-box bg-yellow"
                style={{
                    textAlign: 'center',
                    padding: '1rem',
                    marginBottom: '3rem',
                    fontSize: '2rem',
                    display: 'block',
                    width: '100%',
                    boxSizing: 'border-box'
                }}
            >
                Get in Touch
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="neo-box bg-white"
                style={{ padding: '2.5rem', maxWidth: '600px', margin: '0 auto' }}
            >
                {state.succeeded ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <h3>Thanks — message sent!</h3>
                        <p>I will get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Honeypot field for spam bots */}
                        <input type="text" name="_gotcha" style={{ display: 'none' }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ fontWeight: 'bold' }}>Name</label>
                            <input name="name" type="text" id="name" placeholder="John Doe" required className="neo-box" style={{ padding: '0.8rem', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="email" style={{ fontWeight: 'bold' }}>Email</label>
                            <input name="email" type="email" id="email" placeholder="john@example.com" required className="neo-box" style={{ padding: '0.8rem', outline: 'none', width: '100%', boxSizing: 'border-box' }} />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="message" style={{ fontWeight: 'bold' }}>Message</label>
                            <textarea name="message" id="message" rows={5} placeholder="Hello!" required className="neo-box" style={{ padding: '0.8rem', outline: 'none', width: '100%', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <button type="submit" disabled={state.submitting} className="neo-btn bg-blue" style={{ fontSize: '1.1rem', padding: '1rem', marginTop: '1rem', cursor: 'pointer' }}>
                            {state.submitting ? 'Sending…' : 'Send Message'}
                        </button>
                        {state.errors && (
                            <div style={{ color: 'red', marginTop: 8 }}>Submission failed. Please try again.</div>
                        )}
                    </form>
                )}
            </motion.div>
        </section>
    );
}

export default Contact;
