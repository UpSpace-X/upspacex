import { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import Button from '../components/common/Button';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <Layout>
      <SEO 
        title="Contact Us - UpSpaceX"
        description="Get in touch with the UpSpaceX team. We'd love to hear from you."
      />

      {/* ✅ Apply section utility */}
      <section className={`${styles.section} ${styles.contact}`}>
        <div className="container">
          <div className={styles.content}>
            {/* ✅ Info Block */}
            <div className={styles.info}>
              <h1>Get in Touch</h1>
              <p>
                Have a question, suggestion, or just want to say hello? 
                We'd love to hear from you!
              </p>

              <div className={styles.contactMethods}>
                <div className={styles.method}>
                  <h3>📧 Email</h3>
                  <p>hello.upspacex@outlook.com</p>
                </div>
                <div className={styles.method}>
                  <h3>💼 Business Inquiries</h3>
                  <p>business@upspacex@outlook.com</p>
                </div>
                <div className={styles.method}>
                  <h3>✍️ Write for Us</h3>
                  <p>contributors@upspacex@outlook.com</p>
                </div>
              </div>
            </div>

            {/* ✅ Contact Form */}
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button 
                type="submit" 
                disabled={status === 'loading'}
                fullWidth
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <p className={styles.success}>✓ Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className={styles.error}>⚠️ Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}