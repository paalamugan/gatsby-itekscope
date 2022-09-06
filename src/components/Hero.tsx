import React, { useEffect } from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  useBreakpointValue,
  HStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import useAssets from "../hooks/useAssets";
import NavigationDots from "./NavigationDots/NavigationDots";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Link } from "gatsby";

interface HeroProps {
  index: number;
  id: string;
  title: string;
  description: string;
  src: string;
  isScrolling?: boolean;
}

export default function Hero({ index, id, title, description, src, isScrolling }: HeroProps) {
  const image = useAssets(src);
  const [isIntersecting, ref, target] = useIntersectionObserver(() => null, {
    threshold: 0.1,
  });

  useEffect(() => {
    if (!target || !isIntersecting) return;
    const timer = setTimeout(() => {
      const { height } = target.getBoundingClientRect();
      if (isIntersecting) {
        window.scrollTo(0, height * index);
      }
    }, 1200);
    return () => {
      clearTimeout(timer);
    };
  }, [isIntersecting, isScrolling]);

  return (
    <Box as="section" id={id} ref={ref}>
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={`url(${image?.images.fallback?.src})`}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
      >
        <HStack
          w={"full"}
          justify="start"
          pt={16}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color="white"
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              {title.split(" ").map((v, index) =>
                index === 0 ? (
                  <Box as="span" mr={4}>
                    {v}
                  </Box>
                ) : (
                  <Box as="span" color="primary">
                    {v}
                  </Box>
                )
              )}
              <br />
            </Heading>
            <Text color={"white"} fontSize="lg">
              {description}
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"primary"}
                rounded={"full"}
                color={"white"}
                as={Link}
                to={`/gallery?tag=${id}`}
                border="2px solid var(--chakra-colors-primary)"
                _hover={{
                  color: "primary",
                  bg: "transparent",
                }}
              >
                <Flex alignItems={"center"}>
                  Take a Look <ArrowForwardIcon ml={2} />
                </Flex>
              </Button>
            </Stack>
          </Stack>
        </HStack>
        <NavigationDots active={id} />
      </Flex>
    </Box>
  );
}
