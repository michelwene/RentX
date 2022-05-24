/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import { Button } from ".";

describe("component Button", () => {
  it("renders the button", () => {
    render(<Button>Button</Button>);
    expect(screen.getByText("Button")).toBeInTheDocument();
  });
});
