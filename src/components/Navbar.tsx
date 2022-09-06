import React, { ReactNode } from "react";
import { Link } from "gatsby";
import {
  Box,
  Flex,
  HStack,
  Link as CharkaLink,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  ChakraProps,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavLinks = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Gallery",
    path: "/gallery",
  },
  {
    text: "About Us",
    path: "/about-us",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];

const NavLink = ({ children, to }: { children: ReactNode; to: string }) => (
  <CharkaLink
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "primary",
      color: "white",
    }}
    as={Link}
    to={to}
    activeStyle={{ backgroundColor: "var(--chakra-colors-primary)", color: "white" }}
  >
    {children}
  </CharkaLink>
);

interface NavbarProps {
  siteTitle: string;
  sx?: ChakraProps["sx"];
  isFixedNavbar?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ siteTitle, sx, isFixedNavbar }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      sx={{
        position: isFixedNavbar ? "fixed" : "absolute",
        top: 0,
        zIndex: 10,
        width: "full",
        bg: "transparent",
        color: "whiteAlpha.900",
        ...sx,
      }}
    >
      <Box px={8}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} w="full" alignItems={"center"} justifyContent="space-between">
            <CharkaLink
              as={Link}
              cursor="pointer"
              to="/"
              _hover={{
                textDecoration: "none",
              }}
            >
              {/* <StaticImage
                src="../assets/itekscope-logo.jpg"
                alt="Itekscope Logo"
                width={200}
                height={50}
              /> */}
              <Text as="span" fontSize="4xl" fontWeight="semibold">
                <Text as="span" mr={1}>
                  {siteTitle.slice(0, 4)}
                </Text>
                <Text as="span" color="primary">
                  {siteTitle.slice(4, siteTitle.length)}
                </Text>
              </Text>
            </CharkaLink>
            <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
              {NavLinks.map(({ text, path }) => (
                <NavLink key={text} to={path}>
                  {text}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="2xl" />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            bg="primary"
            _hover={{
              bg: "primary",
            }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>

        {isOpen ? (
          <Box
            py={4}
            borderRadius={4}
            bg="whiteAlpha.900"
            color="blackAlpha.900"
            display={{ md: "none" }}
          >
            <Stack as={"nav"} spacing={4} mx={"2"}>
              {NavLinks.map(({ text, path }) => (
                <NavLink key={text} to={path}>
                  {text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Navbar;
