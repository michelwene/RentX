import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { RiHome2Line, RiCarLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import Logo from "../../../public/assets/Logo.svg";

export function SideBarNav() {
  return (
    <Stack>
      <NavLink icon={Logo} href="/" />
      <NavLink icon={RiHome2Line} href="/listagem" />
      <NavLink icon={RiCarLine} href="/filtrar-carros" />
      <NavLink icon={BsPerson} href="/login" />
    </Stack>
  );
}
