import Layout from '../components/layout/Layout';
import styles from '../styles/Home.module.css';
import PostCard from '../components/blog/PostCard';
import { getFeaturedPosts } from '../data/posts'; // ✅ use CMS-ready helper

export default function Home({ featuredPosts }) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.brand}>UpSpaceX</span>
        </h1>
        <p className={styles.subtitle}>
          A modern blog and content platform built with Next.js.
        </p>
      </section>

      {/* Featured Posts */}
      <section className={styles.featured}>
        <h2 className={styles.sectionTitle}>Featured Posts</h2>
        <div className={styles.grid}>
          {featuredPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

// ✅ Fetch posts dynamically at build time (CMS or fallback)
export async function getStaticProps() {
  const featuredPosts = await getFeaturedPosts(3);

  return {
    props: {
      featuredPosts,
    },
    revalidate: 60, // ✅ ISR: refresh every 60s
  };
}