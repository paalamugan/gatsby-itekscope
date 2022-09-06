import { Link, PageProps } from "gatsby";
import React from "react";

import SEO from "../components/SEO";

import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import Layout from "../components/Layout";

interface NotFoundPageProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}
const NotFoundPage: React.FC<PageProps<NotFoundPageProps>> = ({ path }) => {
  return (
    <Layout>
      <Stack w="full" h="full" justify="center">
        <Box textAlign="center" py={10} px={6}>
          <Heading
            display="inline-block"
            as="h2"
            size="2xl"
            bgGradient="linear(to-r, teal.400, teal.600)"
            backgroundClip="text"
          >
            404
          </Heading>
          <Text fontSize="2xl" mt={3} mb={4}>
            Page Not Found
          </Text>
          <Text color={"gray.500"} mb={2}>
            The page you're looking for does not seem to exist.
          </Text>
          <Text color={"gray.500"} mb={6}>
            This is the path that you tried to access:{" "}
            <Text as="span" fontWeight="semibold">
              {path}
            </Text>
          </Text>

          <Button
            as={Link}
            to="/"
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            color="white"
            variant="solid"
          >
            Go to Home
          </Button>
        </Box>
      </Stack>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => {
  return <SEO title="404: Not found" />;
};
