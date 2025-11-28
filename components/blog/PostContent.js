import Image from 'next/image';
import PostMeta from './PostMeta';
import ShareButtons from './ShareButtons';
import styles from '../../styles/PostContent.module.css';

const PostContent = ({ post }) => {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <PostMeta post={post} />
        <h1 className={styles.title}>{post.title}</h1>
        
        {post.coverImage && (
          <div className={styles.coverImage}>
            <Image 
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={600}
              priority
            />
          </div>
        )}
      </header>

      <div className={styles.content}>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.body}>
          {post.content}
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.tags}>
          {post.tags && post.tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <ShareButtons post={post} />
      </footer>
    </article>
  );
};

export default PostContent;