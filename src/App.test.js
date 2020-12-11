import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App";
describe("App", () => {
  test("should render without errors", () => {
    const component = render(<App />);
    expect(typeof component).toEqual("object");
  });
});
