/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("should render", () => {
    render(<Home />);

    expect(screen.getByText("Hellow World")).toBeInTheDocument();
  });
});
