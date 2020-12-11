import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render without errors", async () => {
    render(<Header />);
    const message = await screen.findByText("inquire...");
    expect(typeof message).toEqual("object");
  });
});
