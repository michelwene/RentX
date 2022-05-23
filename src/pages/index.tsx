import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "src/components/Button";
import { Logo } from "src/components/Logo";

export default function Home() {
  return (
    <Flex
      as="section"
      minHeight="100vh"
      bg="black"
      align="center"
      justify="center"
    >
      <Flex>
        <Box>
          <Logo />
          <Heading as="h1" size="xl" color="white" pt={32} pb={8}>
            Alugue um carro de maneira simples e fácil
          </Heading>
          <Text color="white" pb={16}>
            Vários modelos para você dirigir seguro, com conforto e segurança.
          </Text>
          <Link href="/" passHref>
            <Button
              colorScheme="red"
              borderRadius={0}
              px={20}
              py={6}
              fontWeight="300"
            >
              Começar agora
            </Button>
          </Link>
        </Box>
        <Box></Box>
      </Flex>
    </Flex>
  );
}
