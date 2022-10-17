import React, { useEffect, useMemo } from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { GALLERY_LISTS } from "../constants";
import GalleryGrid, { GalleryGridProps } from "../components/GalleryGrid/GalleryGrid";

interface GalleryQueryProps {
  allImage: GalleryGridProps["image"];
  vectorImage: GalleryGridProps["image"];
  websiteImage: GalleryGridProps["image"];
  softwareImage: GalleryGridProps["image"];
  embroideryImage: GalleryGridProps["image"];
}

const GalleryPage: React.FC<PageProps<GalleryQueryProps>> = ({ data, location }) => {
  const { allImage, vectorImage, websiteImage, softwareImage, embroideryImage } = data;

  const mappingGallery = useMemo(
    () => ({
      all: allImage,
      "vector-art": vectorImage,
      "embroidery-digitizing": embroideryImage,
      "website-design": websiteImage,
      "software-development": softwareImage,
    }),
    []
  );

  const [tabIndex, setTabIndex] = React.useState(0);
  const [tag, setTag] = React.useState("all");

  useEffect(() => {
    const tag = new URL(location.href).searchParams.get("tag") || "all";
    setTag(tag);
  }, []);

  useEffect(() => {
    const findIndex = GALLERY_LISTS.findIndex(list => list.id === tag);
    setTabIndex(findIndex === -1 ? 0 : findIndex);
  }, [tag]);

  return (
    <Layout
      headerBgImage={{ src: "gallery-background.jpg", alt: "Gallery Background", title: "Gallery" }}
    >
      <Container my={8} maxW="container.xl">
        <Tabs index={tabIndex} onChange={setTabIndex} variant="solid-rounded" colorScheme="teal">
          <TabList flexWrap="wrap" justifyContent="center" mb={4}>
            {GALLERY_LISTS.map(list => {
              return <Tab key={list.id}>{list.name}</Tab>;
            })}
          </TabList>
          <TabPanels>
            {GALLERY_LISTS.map(({ id }) => {
              return (
                <TabPanel key={id}>
                  <GalleryGrid image={mappingGallery[id]} />
                </TabPanel>
              );
            })}
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default GalleryPage;

export const Head = () => {
  return <SEO title="Gallery" />;
};

export const query = graphql`
  query Gallery {
    allImage: allFile(
      filter: { dir: { regex: "assets/gallery/" } }
      sort: { fields: modifiedTime, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    vectorImage: allFile(
      filter: { dir: { regex: "assets/gallery/vector-art/" } }
      sort: { fields: modifiedTime, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    websiteImage: allFile(
      filter: { dir: { regex: "assets/gallery/website-design/" } }
      sort: { fields: modifiedTime, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    softwareImage: allFile(
      filter: { dir: { regex: "assets/gallery/software-development/" } }
      sort: { fields: modifiedTime, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
    embroideryImage: allFile(
      filter: { dir: { regex: "assets/gallery/embroidery-digitizing/" } }
      sort: { fields: modifiedTime, order: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
