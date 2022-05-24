import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";

export default function listing() {
  return (
    <>
      <Header>Início</Header>
      <Sidebar />
      <Flex width="89%" mx="auto" height="100%" as="section" mt={16}>
        <Box
          width="90%"
          mx="auto"
          borderBottom="1px"
          borderColor="gray.100"
          pb={6}
        >
          <Flex justify="space-between" align="center">
            <Heading as="h1">Carros disponíveis</Heading>
            <Text>Total 12 carros</Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
