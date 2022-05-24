import { Box, Flex, Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { RiHome2Line, RiCarLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import Logo from "../../../public/assets/Logo.svg";

export function SideBarNav() {
  return (
    <Stack align="center" spacing={0}>
      <NavLink icon={Logo} href="/" width="80px" height="80px" />
      <Flex
        flexDirection="column"
        gap={16}
        width="100%"
        height="100%"
        align="center"
        justify="center"
      >
        <NavLink icon={RiHome2Line} href="/listagem" />
        <NavLink icon={RiCarLine} href="/filtrar-carros" />
        <NavLink icon={BsPerson} href="/login" />
      </Flex>
    </Stack>
  );
}
