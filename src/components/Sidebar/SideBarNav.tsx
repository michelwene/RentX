import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { RiHome2Line, RiCarLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";

export function SideBarNav() {
  return (
    <Stack>
      <NavLink icon={RiHome2Line} href="/listagem"></NavLink>
      <NavLink icon={RiCarLine} href="/filtrar-carros"></NavLink>
      <NavLink icon={BsPerson} href="/login"></NavLink>
    </Stack>
  );
}
