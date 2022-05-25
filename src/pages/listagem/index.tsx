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
import Energy from "../../../public/assets/Energia.svg";
import Gasoline from "../../../public/assets/Gasolina.svg";
import Hybrid from "../../../public/assets/Hibrido.svg";

export default function listing() {
  return (
    <>
      <Header>Início</Header>
      <Sidebar />
      <Flex
        width="100%"
        mx="auto"
        height="100%"
        as="main"
        pt={10}
        flexDirection="column"
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
          <SimpleGrid spacing={8} columns={3}>
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
              icon={<Energy />}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
              icon={<Gasoline />}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
              icon={<Energy />}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
              icon={<Gasoline />}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
              icon={<Hybrid />}
            />
            <CarItem
              car={{
                title: "Fusca",
                price: 1000,
                name: "Fusca",
                image: "/assets/Audi.svg",
              }}
              icon={<Gasoline />}
            />
          </SimpleGrid>
        </Grid>
      </Flex>
    </>
  );
}
