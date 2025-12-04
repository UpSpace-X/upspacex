import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({
  title = 'UpSpaceX - Your daily space for everything that matters.',
  description = 'Your daily space for everything that matters.',
  image = '/images/og-image.jpg',
  article = false
}) => {
  const router = useRouter();
  
  // ✅ Use environment variables instead of hardcoding
  const siteURL = process.env.NEXT_PUBLIC_SITE_URL;
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const canonicalURL = `${siteURL}${router.asPath}`;
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalURL} />

      {/* Open Graph */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:image" content={`${siteURL}${image}`} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteURL}${image}`} />

      {/* Additional */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
  );
};

export default SEO;