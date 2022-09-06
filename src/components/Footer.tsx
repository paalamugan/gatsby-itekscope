import { Box, ChakraProps, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface FooterProps {
  siteTitle: string;
  sx?: ChakraProps["sx"];
}

const Footer: React.FC<FooterProps> = ({ siteTitle, sx = { bg: "white", color: "black" } }) => {
  const year = new Date().getFullYear();

  return (
    <Box sx={sx} as="footer" bg="white" color="black">
      <Flex px={4} py={6} fontSize="md" justify="center">
        <Text>
          Copyright © {year} {siteTitle}. All Rights Reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
// import {
//   Box,
//   chakra,
//   Container,
//   Flex,
//   Stack,
//   Text,
//   useColorModeValue,
//   VisuallyHidden,
// } from '@chakra-ui/react';
// import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { ReactNode } from 'react';

// export default function SmallWithSocial() {
//   return (
//     <Box
//       bg={useColorModeValue('gray.50', 'gray.900')}
//       color={useColorModeValue('gray.700', 'gray.200')}>
//       <Container
//         as={Stack}
//         maxW={'6xl'}
//         py={4}
//         direction={{ base: 'column', md: 'row' }}
//         spacing={4}
//         justify={{ base: 'center', md: 'space-between' }}
//         align={{ base: 'center', md: 'center' }}>
//         <Text>© 2022 Chakra Templates. All rights reserved</Text>

//       </Container>
//     </Box>
//   );
// }
