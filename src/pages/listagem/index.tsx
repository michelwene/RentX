import {
  Box,
  calc,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { CarItem } from "src/components/CarItem";
import { Header } from "src/components/Header";
import { Sidebar } from "src/components/Sidebar";

export default function listing() {
  return (
    <>
      <Header>Início</Header>
      <Sidebar />
      <Flex
        width="100%"
        mx="auto"
        height="100vh"
        as="section"
        pt={16}
        flexDirection="column"
        bg="#F4F5F6"
      >
        <Box
          width="80%"
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
        <Grid width="80%" mx="auto" mt={8}>
          <SimpleGrid spacing={16} columns={3}>
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
            />
          </SimpleGrid>
        </Grid>
      </Flex>
    </>
  );
}
