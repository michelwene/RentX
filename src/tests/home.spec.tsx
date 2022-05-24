/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import Home from "../pages/index";

describe("page Home", () => {
  it("should render component Home", () => {
    render(<Home />);

    expect(
      screen.getByText("Alugue um carro de maneira simples e fácil")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        "Vários modelos para você dirigir seguro, com conforto e segurança."
      )
    ).toBeInTheDocument();
  });

  it("should show the text Button", () => {
    render(<Home />);

    expect(screen.getByText("Começar agora")).toBeInTheDocument();
  });
});
