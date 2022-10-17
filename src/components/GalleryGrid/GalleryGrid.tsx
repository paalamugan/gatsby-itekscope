import React, { useMemo, useState } from "react";
import type { FC } from "react";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { GALLERY_LIMIT } from "../../constants";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { AnimatePresence } from "framer-motion";
import NoDataFound from "../NoDataFound";
import GalleryGridItem from "./GalleryGridItem";

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

const GalleryGrid: FC<GalleryGridProps> = ({ image, gridColumn = 3 }) => {
  const [page, setPage] = useState(1);
  const allImages = image.edges || [];
  const totalCount = allImages.length;

  const rows = useMemo(() => allImages.slice(0, page * GALLERY_LIMIT), [page]);
  const count = rows.length;
  const gridRow = Math.ceil(count / gridColumn);

  if (!totalCount) {
    return <NoDataFound />;
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
