// pages/api/posts/[slug].js
import { localPosts } from '../../../data/posts';

export default function handler(req, res) {
  const { slug } = req.query;
  const post = localPosts.find((p) => p.slug === slug);

  if (post) {
    res.status(200).json({ post });
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
}