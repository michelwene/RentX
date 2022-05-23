import {
  ButtonProps as ChakraButtonProps,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface ButtonProps extends ChakraButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  colorScheme?: string;
  variant?: string;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, colorScheme, variant, onClick, ...rest },
  ref
) => {
  return (
    <ChakraButton
      colorScheme={colorScheme}
      variant={variant}
      onClick={onClick}
      {...rest}
      _active={{
        transform: "scale(0.98)",
      }}
    >
      {children}
    </ChakraButton>
  );
};

export const Button = forwardRef(ButtonBase);
