import { fireEvent, render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders Fizz", () => {
    const { getByTestId } = render(<App />);

    const button = getByTestId("button");
    for (let i = 0; i < 3; i++) {
      fireEvent.click(button);
    }

    expect(getByTestId("message")).toHaveTextContent("Fizz");
  });

  it("renders Buzz", () => {
    const { getByTestId } = render(<App />);

    const button = getByTestId("button");
    for (let i = 0; i < 5; i++) {
      fireEvent.click(button);
    }

    expect(getByTestId("message")).toHaveTextContent("Buzz");
  });

  it("renders Bang", () => {
    const { getByTestId } = render(<App />);

    const button = getByTestId("button");
    for (let i = 0; i < 7; i++) {
      fireEvent.click(button);
    }

    expect(getByTestId("message")).toHaveTextContent("Bang");
  });

  it("renders FizzBuzz", () => {
    const { getByTestId } = render(<App />);

    const button = getByTestId("button");
    for (let i = 0; i < 15; i++) {
      fireEvent.click(button);
    }

    expect(getByTestId("message")).toHaveTextContent("FizzBuzz");
  });

  it("renders FizzBang", () => {
    const { getByTestId } = render(<App />);

    const button = getByTestId("button");
    for (let i = 0; i < 21; i++) {
      fireEvent.click(button);
    }

    expect(getByTestId("message")).toHaveTextContent("FizzBang");
  });

  it("renders BuzzBang", () => {
    const { getByTestId } = render(<App />);

    const button = getByTestId("button");
    for (let i = 0; i < 35; i++) {
      fireEvent.click(button);
    }

    expect(getByTestId("message")).toHaveTextContent("BuzzBang");
  });

  it("renders FizzBuzzBang", () => {
    const { getByTestId } = render(<App />);

    const button = getByTestId("button");
    for (let i = 0; i < 105; i++) {
      fireEvent.click(button);
    }

    expect(getByTestId("message")).toHaveTextContent("FizzBuzzBang");
  });
});
