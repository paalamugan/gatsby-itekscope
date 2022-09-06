import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { StaticImage } from "gatsby-plugin-image";
import { useSiteMetaData } from "../hooks/useSiteMetaData";

const AboutUsPage = () => {
  const { title } = useSiteMetaData();
  return (
    <Layout
      headerBgImage={{
        src: "about-us-background.jpg",
        alt: "AboutUs Background",
        title: "About Us",
      }}
    >
      <Container maxW={"7xl"} p="12">
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Box display="flex" flex="1" marginRight="3" alignItems="center">
            <Box width={{ base: "100%", md: "85%" }} marginLeft={{ base: "0", md: "5%" }}>
              <StaticImage
                imgStyle={{ borderRadius: "1rem" }}
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="about us image"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="start"
            marginTop={{ base: "4", md: "0" }}
          >
            <Heading mb="2">{title}</Heading>
            <Text as="p" marginTop="2" color={"gray.700"} fontSize={{ base: "md", md: "lg" }}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
            </Text>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default AboutUsPage;

export const Head = () => {
  return <SEO title="About Us" />;
};
