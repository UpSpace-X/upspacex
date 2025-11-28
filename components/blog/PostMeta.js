import { format } from 'date-fns';
import CategoryBadge from './CategoryBadge';
import styles from '../../styles/PostContent.module.css';

const PostMeta = ({ post }) => {
  return (
    <div className={styles.meta}>
      <CategoryBadge category={post.category} />
      
      <div className={styles.authorInfo}>
        <div className={styles.authorAvatar}>
          {post.author.charAt(0).toUpperCase()}
        </div>
        <div className={styles.authorDetails}>
          <p className={styles.authorName}>{post.author}</p>
          <p className={styles.date}>
            {format(new Date(post.date), 'MMMM dd, yyyy')} · {post.readTime} min read
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostMeta;