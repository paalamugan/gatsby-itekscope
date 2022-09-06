/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import ThemeProvider from "../providers/ThemeProvider";
import { HeaderBgImageProps } from "../types";
import { Box } from "@chakra-ui/react";

interface LayoutProps {
  headerBgImage?: HeaderBgImageProps;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, headerBgImage }) => {
  const { site } = useStaticQuery(graphql`
    query SiteLayoutTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const title = site.siteMetadata.title;
  return (
    <ThemeProvider>
      <div className="app">
        <Header siteTitle={title} headerBgImage={headerBgImage} />
        <Box as="main">{children}</Box>
        <Footer siteTitle={title} />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
