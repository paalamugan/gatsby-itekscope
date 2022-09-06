/* eslint-disable react/no-children-prop */
import React from "react";
import { PageProps } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

import {
  AspectRatio,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

import { UserIcon } from "../icons";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const ContactPage = (props: PageProps) => {
  return (
    <Layout
      headerBgImage={{ src: "contact-background.jpg", alt: "Contact Background", title: "Contact" }}
    >
      <Container maxW={"7xl"} p="12">
        <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={10}>
          <GridItem colSpan={1} as={Stack} gap={4}>
            <Box>
              <Heading mt={4} mb={1} fontSize="2xl">
                CALL ME
              </Heading>
              <Text as={Link} href="tel:+1(004) 987-654-3210" color="blue.400">
                +1(004) 987-654-3210
              </Text>
            </Box>
            <Box>
              <Heading fontSize="2xl" mb={1}>
                WRITE ME A EMAIL
              </Heading>
              <Text as={Link} href="mailto:contact@itekscope.com" color="blue.400">
                contact@itekscope.com
              </Text>
            </Box>
            <Stack gap={2}>
              <Heading fontSize="2xl">HERE YOU FIND ME</Heading>
              <AspectRatio ratio={16 / 9}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
              </AspectRatio>
            </Stack>
          </GridItem>
          <GridItem colSpan={1} ml={{ base: 0, lg: 10 }}>
            <Stack>
              <Heading fontSize="2xl">SEND ME A MESSAGE</Heading>

              <Stack spacing={{ base: 4, md: 8, lg: 20 }} direction={{ base: "column", md: "row" }}>
                <Box
                  bg={useColorModeValue("white", "gray.700")}
                  borderRadius="lg"
                  p={8}
                  flex={1}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<UserIcon />} />
                        <Input type="text" name="name" placeholder="Your Name" />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<PhoneIcon />} />
                        <Input type="number" name="phoneNumber" placeholder="Your Phone Number" />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<EmailIcon />} />
                        <Input type="email" name="email" placeholder="Your Email" />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea name="message" placeholder="Your Message" rows={6} resize="none" />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => {
  return <SEO title="Contact" />;
};
