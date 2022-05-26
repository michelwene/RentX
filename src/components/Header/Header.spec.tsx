/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import { Header } from ".";

describe("component Header", () => {
  it("renders the heading as a child of Header", () => {
    render(<Header>Início</Header>);
    expect(screen.getByText("Início")).toBeInTheDocument();
  });

  it("renders the login button", () => {
    render(<Header>Início</Header>);
    expect(screen.getByText("Faça Login")).toBeInTheDocument();
  });
});
