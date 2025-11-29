import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo/SEO';
import PostCard from '../../components/blog/PostCard';
import Pagination from '../../components/common/Pagination';
import { posts } from '../../data/posts';
import styles from '../../styles/Blog.module.css';

const POSTS_PER_PAGE = 9;

export default function Blog() {
  const router = useRouter();
  const { search, page = '1' } = router.query;
  
  const [currentPage, setCurrentPage] = useState(parseInt(page));

  // Filter posts by search query
  const filteredPosts = search
    ? posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase())
      )
    : posts;

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <SEO 
        title="Blog - UpSpace | Latest Technology & Business Insights"
        description="Read the latest articles on technology, business, innovation, and startups."
      />

      <div className={styles.blog}>
        <div className="container">
          <header className={styles.header}>
            <h1>Latest Articles</h1>
            <p>Discover insights on technology, business, and innovation</p>
            {search && (
              <p className={styles.searchInfo}>
                Showing results for: <strong>"{search}"</strong>
              </p>
            )}
          </header>

          {currentPosts.length > 0 ? (
            <>
              <div className={styles.grid}>
                {currentPosts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className={styles.noResults}>
              <p>No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}