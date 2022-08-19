import { fireEvent, render, screen } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import SayHello from "../SayHello";

describe("something", () => {
  let container: any;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test("Should render character name", () => {
    render(<SayHello id={4} />, container);
    expect(screen.getByTestId("character-show")).toBeInTheDocument();
    expect(screen.getByTestId("character-show").textContent).toEqual("id:4");
    const changeButton = screen.getByTestId("change-button");
    fireEvent.click(changeButton);
    expect(screen.getByTestId("character-show").textContent).toEqual("id:111");
  });
});
