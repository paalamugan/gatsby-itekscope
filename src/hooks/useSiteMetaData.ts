import { useStaticQuery, graphql } from "gatsby";
import { WithoutNullableKey } from "../types";

export const useSiteMetaData = () => {
  const { site } = useStaticQuery<WithoutNullableKey<Queries.SiteMetaDataQuery>>(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            description
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
