import type { FC } from "react";
import React, { useMemo, useState } from "react";
import { Box, Button, Flex, Heading, Link, Stack } from "@chakra-ui/react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { GALLERY_LIMIT } from "../../constants";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

export interface GalleryGridProps {
  gridColumn?: number;
  image: {
    edges: {
      node: {
        name: string;
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
    }[];
  };
}

const range = (length: number): Array<number> => {
  return Array.from({ length: length }, (_, i) => i);
};

interface GalleryGridItemProps {
  edge: GalleryGridProps["image"]["edges"][0];
}

const GalleryGridItem: FC<GalleryGridItemProps> = ({ edge }) => {
  const image = edge.node.childImageSharp?.gatsbyImageData;
  const alt = edge.node.name;
  if (!image) return null;
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ y: [-10, 0], opacity: [0, 1] }}
      viewport={{ once: false }}
    >
      <Box borderRadius="lg" overflow="hidden">
        <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
          <GatsbyImage image={image} alt={alt} className="scale-up" objectPosition="center" />
        </Link>
      </Box>
    </motion.div>
  );
};

const GalleryGrid: FC<GalleryGridProps> = ({ image, gridColumn = 3 }) => {
  const [page, setPage] = useState(1);
  const allImages = image.edges || [];
  const totalCount = allImages.length;

  const rows = useMemo(() => allImages.slice(0, page * GALLERY_LIMIT), [page]);
  const count = rows.length;
  const gridRow = Math.ceil(count / gridColumn);

  if (!totalCount) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="md" color={"gray.500"} mt={6} mb={2}>
          No Result Found.
        </Heading>
      </Box>
    );
  }

  return (
    <Stack>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={{ base: "nowrap", md: "wrap" }}
        gap={4}
      >
        {range(gridColumn).map(index => {
          const images = rows.slice(gridRow * index, gridRow * (index + 1));
          return (
            <Stack flex="1" key={index} spacing={4}>
              <AnimatePresence>
                {images.map((edge, i) => {
                  return <GalleryGridItem key={i} edge={edge} />;
                })}
              </AnimatePresence>
            </Stack>
          );
        })}
      </Flex>
      <Flex justify="center" gap={4}>
        {count > GALLERY_LIMIT && (
          <Button
            colorScheme="teal"
            variant="outline"
            mt={8}
            onClick={() => setPage(page - 1)}
            rightIcon={<ChevronUpIcon fontSize={22} />}
          >
            Show Less
          </Button>
        )}
        {totalCount > GALLERY_LIMIT && (
          <Button
            colorScheme="teal"
            variant="outline"
            mt={8}
            onClick={() => setPage(page + 1)}
            disabled={count >= totalCount}
            rightIcon={<ChevronDownIcon fontSize={22} />}
          >
            Show More
          </Button>
        )}
      </Flex>
    </Stack>
  );
};
export default GalleryGrid;
