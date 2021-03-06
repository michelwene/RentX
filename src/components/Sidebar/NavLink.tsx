import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  children?: React.ReactNode;
  href: string;
  width?: string;
  height?: string;
}

export function NavLink({
  icon,
  children,
  href,
  width,
  height,
  ...rest
}: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align-items="center" {...rest}>
        <Icon
          as={icon}
          fontSize="20"
          width={width}
          height={height}
          color="white"
        />
      </ChakraLink>
    </ActiveLink>
  );
}
