import { Box, Heading, HStack, Image } from "@chakra-ui/react";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactNode } from "react";
import useAssets from "../hooks/useAssets";
import { HeaderBgImageProps, Theme } from "../types";
import Navbar from "./Navbar";

interface HeaderProps {
  siteTitle: string;
  headerBgImage?: HeaderBgImageProps;
  hideImage?: boolean;
  isFixedNavbar?: boolean;
}

const getNavbarStyle = () => ({
  bgColor: "white",
  color: "black",
  boxShadow(theme: Theme) {
    return `0px 2px 4px ${theme?.colors?.gray[200]};`;
  },
});

interface WrapperHeaderProps {
  siteTitle: string;
  children?: ReactNode;
  isFixedNavbar?: boolean;
}

const HeaderComponent = ({ siteTitle, children, isFixedNavbar }: WrapperHeaderProps) => {
  const hideImage = !children;
  const sx = hideImage ? getNavbarStyle() : undefined;
  return (
    <Box as="header" position="relative" bgColor="gray.300" h={hideImage ? "16" : "md"}>
      <Navbar siteTitle={siteTitle} sx={sx} isFixedNavbar={isFixedNavbar} />
      {children}
    </Box>
  );
};

const Header: React.FC<HeaderProps> = ({ siteTitle, headerBgImage, isFixedNavbar = false }) => {
  if (!headerBgImage) {
    return <HeaderComponent siteTitle={siteTitle} isFixedNavbar={isFixedNavbar} />;
  }

  const { src, alt, title } = headerBgImage;
  const image = useAssets(src);

  return (
    <HeaderComponent siteTitle={siteTitle} isFixedNavbar={isFixedNavbar}>
      <Image as={GatsbyImage} h="md" image={image} alt={alt} />
      {title && (
        <HStack position="absolute" inset={0} justify="center">
          <Heading
            as="h1"
            lineHeight={1.1}
            fontWeight={600}
            color="white"
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            {title}
          </Heading>
        </HStack>
      )}
    </HeaderComponent>
  );
};

export default Header;
