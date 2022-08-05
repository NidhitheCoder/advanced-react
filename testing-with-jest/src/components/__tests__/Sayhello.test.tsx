import { render, screen } from "@testing-library/react";
import { getCharacter } from "../../data";
import SayHello from "../SayHello";

test('Should render character name', () => {
  render(<SayHello id={4} />);
  expect(screen.getByText('4')).toBeInTheDocument();
})