import { fireEvent, render, screen } from "@testing-library/react";
import SayHello from "../SayHello";

test("Should render character name", () => {
  render(<SayHello id={4} />);
  expect(screen.getByTestId("character-show")).toBeInTheDocument();
  expect(screen.getByTestId("character-show").textContent).toEqual("id:4");
  const changeButton = screen.getByTestId("change-button");
  fireEvent.click(changeButton);
  expect(screen.getByTestId("character-show").textContent).toEqual("id:111");
});
