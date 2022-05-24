import { Box, Flex, Heading } from "@chakra-ui/react";
import { Button } from "../Button";
import { BsPerson } from "react-icons/bs";
interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <Flex as="header" borderBottom="1px" borderColor="gray.100" height="80px">
      <Flex width="80vw" justify="space-between" mx="auto" align="center">
        <Heading as="h2" fontSize={18}>
          {children}
        </Heading>
        <Button
          rightIcon={<BsPerson fontSize={32} />}
          variant="link"
          color="black"
        >
          Faça Login
        </Button>
      </Flex>
    </Flex>
  );
}
