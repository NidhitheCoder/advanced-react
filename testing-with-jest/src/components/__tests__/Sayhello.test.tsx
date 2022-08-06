import { render, screen } from "@testing-library/react";
import SayHello from "../SayHello";

test('Should render character name', () => {
  render(<SayHello id={4} />);
  expect(screen.getByTestId('character-show')).toBeInTheDocument();
})