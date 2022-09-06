import { graphql, useStaticQuery } from "gatsby";
import { getImage, IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image";
import { useMemo } from "react";

export default function useAssets(src: string) {
  const data = useStaticQuery(graphql`
    query SiteAssets {
      allFile(filter: { internal: { mediaType: { regex: "assets/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const file = useMemo(
    () =>
      data.allFile.edges.find(({ node }: { node: ImageDataLike & { relativePath: string } }) =>
        node.relativePath.includes(src)
      )?.node || null,
    [data, src]
  );

  return getImage(file) as IGatsbyImageData;
}
