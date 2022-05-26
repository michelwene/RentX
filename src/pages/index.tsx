import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";

export default function Home() {
  return (
    <Flex
      as="section"
      minHeight="100vh"
      bg="black"
      align="center"
      justify="center"
    >
      <Flex px={36}>
        <Box>
          <Logo />
          <Heading as="h1" size="xl" color="white" pt={32} pb={8}>
            Alugue um carro de maneira simples e fácil
          </Heading>
          <Text color="white" pb={16}>
            Vários modelos para você dirigir seguro, com conforto e segurança.
          </Text>
          <Link href="/listagem" passHref>
            <Button
              colorScheme="red"
              borderRadius={0}
              px={16}
              py={8}
              fontWeight="300"
            >
              Começar agora
            </Button>
          </Link>
        </Box>
        <Box width="608px" height="612px" position="relative">
          <Box
            bgImage="url('/assets/group-67.svg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            width="100%"
            height="100%"
            bgSize="contain"
            position="absolute"
          />
          <Box
            bgImage="url('/assets/16-white-audi-car-image-1.svg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            width="100%"
            height="100%"
            bgSize="contain"
            position="absolute"
          />
        </Box>
      </Flex>
    </Flex>
  );
}
