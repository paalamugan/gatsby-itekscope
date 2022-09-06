import React, { useState } from "react";
import { PageProps } from "gatsby";

import SEO from "../components/SEO";

import ThemeProvider from "../providers/ThemeProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { HERO_LISTS } from "../constants";
import useScroll from "../hooks/useScroll";
import { useSiteMetaData } from "../hooks/useSiteMetaData";

const IndexPage: React.FC<PageProps> = () => {
  const { title } = useSiteMetaData();
  const [isScrolling, setIsScrolling] = useState(false);

  useScroll(() => {
    setIsScrolling(isScrolling => !isScrolling);
  }, 1000);

  return (
    <ThemeProvider>
      <Navbar siteTitle={title} isFixedNavbar />
      {HERO_LISTS.map(({ id, title, description, src }, index) => {
        return (
          <Hero
            key={id}
            index={index}
            id={id}
            title={title}
            description={description}
            src={src}
            isScrolling={isScrolling}
          />
        );
      })}
      <Footer
        siteTitle={title}
        sx={{
          position: "absolute",
          bottom: 0,
          w: "full",
          color: "white",
          bg: "transparent",
        }}
      />
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEO />;
};
