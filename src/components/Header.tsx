import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}

const Header = ({ isDark, toggleDark }: HeaderProps) => {
  return (
    <header className="header" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      backgroundColor: 'var(--yellow)',
      borderBottom: 'var(--border-width) solid var(--black)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="logo neo-box" style={{
        padding: '0.25rem 0.75rem',
        backgroundColor: 'var(--blue)',
        fontWeight: '900',
        fontSize: '1.5rem',
        cursor: 'pointer'
      }}>
        AA
      </div>

      <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontWeight: 'bold' }}>
        {/** Intercept clicks to run page transition before scrolling */}
        <a href="#home" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('custom:navigate', { detail: '#home' })); }} style={{ color: 'var(--black)', textDecoration: 'none' }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('custom:navigate', { detail: '#about' })); }} style={{ color: 'var(--black)', textDecoration: 'none' }}>About</a>
        <a href="#journey" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('custom:navigate', { detail: '#journey' })); }} style={{ color: 'var(--black)', textDecoration: 'none' }}>Journey</a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('custom:navigate', { detail: '#projects' })); }} style={{ color: 'var(--black)', textDecoration: 'none' }}>Projects</a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('custom:navigate', { detail: '#skills' })); }} style={{ color: 'var(--black)', textDecoration: 'none' }}>Skills</a>
        <a href="#certifications" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('custom:navigate', { detail: '#certifications' })); }} style={{ color: 'var(--black)', textDecoration: 'none' }}>Certifications</a>

        <div className="neo-box" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--white)',
          fontSize: '0.9rem'
        }}>
          <span role="img" aria-label="sparkles">✨</span> Data Analytics • Applied AI • SQL Learner
        </div>

        <a href="#contact" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('custom:navigate', { detail: '#contact' })); }} className="neo-btn bg-blue" style={{ textDecoration: 'none' }}>
          Get in Touch!
        </a>

        <button onClick={toggleDark} className="neo-box" style={{
          padding: '0.5rem',
          backgroundColor: 'var(--blue)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {isDark ? <Sun size={20} color="var(--black)" /> : <Moon size={20} color="var(--black)" />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
