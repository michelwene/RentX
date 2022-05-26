/**
 * @jest-environment jsdom
 */
import { screen, render } from "@testing-library/react";
import { Logo } from ".";

describe(" component Logo", () => {
  it("should render component Logo", () => {
    render(<Logo />);

    expect(screen.getByAltText("Logotipo RentX")).toBeInTheDocument();
  });
});
