import React, { FC } from "react";
import { Box, Link } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import { GalleryGridProps } from "./GalleryGrid";
import { motion } from "framer-motion";

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

export default GalleryGridItem;
