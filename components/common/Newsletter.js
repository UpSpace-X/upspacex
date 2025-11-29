import { useState } from 'react';
import styles from '../../styles/Newsletter.module.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className={styles.newsletter}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Stay Updated</h2>
        <p className={styles.subtitle}>
          Get the latest articles and insights delivered to your inbox
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
            disabled={status === 'loading'}
          />
          <button 
            type="submit" 
            className={styles.button}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>

        {status === 'success' && (
          <p className={styles.success}>✓ Successfully subscribed!</p>
        )}
        {status === 'error' && (
          <p className={styles.error}>✗ Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;