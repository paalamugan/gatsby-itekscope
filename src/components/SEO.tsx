/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

interface SEOProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({ title, description = "", children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author
          }
        }
      }
    `
  );

  const metaTitle = title || site.siteMetadata?.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaImage = site.siteMetadata.siteUrl + "/icons/icon-512x512.png";

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={`website`} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      {children}
    </>
  );
};

export default SEO;
