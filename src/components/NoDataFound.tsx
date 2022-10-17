import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function NoDataFound({ message = "No Data Found!" }: { message?: string }) {
  return (
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={"50px"} color={"blue.500"} />
      <Heading as="h2" size="lg" mt={6} mb={2}>
        {message}
      </Heading>
    </Box>
  );
}
