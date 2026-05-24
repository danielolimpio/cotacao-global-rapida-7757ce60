import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoData } from '@/utils/seoData';

interface SEOProps {
  path: string;
}

const SEO = ({ path }: SEOProps) => {
  const location = useLocation();
  const currentPath = location.pathname || '/';
  // Normalize: strip legacy "-hoje" suffix from the last URL segment so the
  // canonical matches the actual route defined in App.tsx.
  const normalizedPath = path.replace(/-hoje(\/?$)/, '$1');
  const data = seoData[currentPath] || seoData[normalizedPath] || seoData[path] || seoData['/'];
  const fullTitle = data.title.includes('Cotação') ? data.title : `${data.title} | Cotação de Hoje`;
  const url = `https://cotacaodehoje.com${currentPath}`;


  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={data.description} />
      {data.keywords && <meta name="keywords" content={data.keywords} />}
      {data.noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={data.ogType || 'website'} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.ogImage || 'https://cotacaodehoje.com/og-image.webp'} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Cotação de Hoje" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.ogImage || 'https://cotacaodehoje.com/og-image.webp'} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Cotação de Hoje" />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="1 day" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Schema.org structured data */}
      {data.schema && (
        <script type="application/ld+json">
          {JSON.stringify(data.schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
