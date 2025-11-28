import Layout from '../components/layout/Layout';
import SEO from '../components/seo/SEO';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About UpSpace - Your Source for Tech & Business Insights"
        description="Learn about UpSpace, our mission, and our team of writers."
      />

      <div className={styles.about}>
        <div className="container">
          <h1>About UpSpace</h1>
          
          <section className={styles.mission}>
            <h2>Our Mission</h2>
            <p>
              UpSpace is dedicated to bringing you the latest insights in technology, 
              business, and innovation. We believe in empowering professionals and 
              entrepreneurs with knowledge that drives success.
            </p>
          </section>

          <section className={styles.values}>
            <h2>What We Stand For</h2>
            <div className={styles.valueGrid}>
              <div className={styles.value}>
                <h3>🎯 Quality Content</h3>
                <p>Every article is researched, fact-checked, and crafted by industry experts.</p>
              </div>
              <div className={styles.value}>
                <h3>🚀 Innovation</h3>
                <p>We cover cutting-edge topics that matter to forward-thinking professionals.</p>
              </div>
              <div className={styles.value}>
                <h3>🌍 Global Perspective</h3>
                <p>Our content reflects insights from markets and innovators worldwide.</p>
              </div>
              <div className={styles.value}>
                <h3>💡 Practical Insights</h3>
                <p>We focus on actionable advice you can implement immediately.</p>
              </div>
            </div>
          </section>

          <section className={styles.team}>
            <h2>Our Team</h2>
            <p>
              UpSpace is powered by a diverse team of writers, editors, and contributors 
              who are passionate about technology and business. Our contributors include 
              industry veterans, startup founders, and thought leaders.
            </p>
          </section>

          <section className={styles.cta}>
            <h2>Join Our Community</h2>
            <p>
              Stay updated with our latest articles and insights. Subscribe to our 
              newsletter and never miss a story.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}