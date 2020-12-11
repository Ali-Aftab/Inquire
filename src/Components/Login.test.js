import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import Login from "./Login";

describe("Login", () => {
  let component;
  let counter = 0;
  const handleInputChange = () => {
    counter++;
  };
  let response = false;
  const responseAccepted = () => {
    response = true;
  };
  let props = {
    firstName: "Bruce",
    lastName: "Wayne",
    setLastName: handleInputChange,
    setFirstName: handleInputChange,
    login: responseAccepted,
  };
  beforeEach(() => {
    counter = 0;
    component = render(
      <Login
        firstName={props.firstName}
        lastName={props.lastName}
        setFirstName={props.setFirstName}
        setLastName={props.setLastName}
        login={props.login}
      />
    );
    counter = 0;
  });
  it("should render without errors", async () => {
    const message = await screen.findByAltText("First Name");
    const button = await screen.findByText("Login");

    expect(typeof message).toEqual("object");
    expect(button).toHaveTextContent("Login");
  });
  it("should accept input without errors", async () => {
    const fieldFirst = await screen.findByAltText("First Name");
    const fieldLast = await screen.findByAltText("Last Name");

    expect(fieldFirst).toHaveValue("Bruce");
    expect(fieldLast).toHaveValue("Wayne");
  });

  it("should trigger text change", async () => {
    const fieldFirst = await screen.findByAltText("First Name");
    const fieldLast = await screen.findByAltText("Last Name");

    fireEvent.change(fieldFirst, {
      target: { value: "a" },
    });

    fireEvent.change(fieldFirst, {
      target: { value: "ab" },
    });

    fireEvent.change(fieldFirst, {
      target: { value: "abc" },
    });

    expect(counter).toEqual(3);

    fireEvent.change(fieldLast, {
      target: { value: "a" },
    });

    fireEvent.change(fieldLast, {
      target: { value: "ab" },
    });

    fireEvent.change(fieldLast, {
      target: { value: "abc" },
    });
    expect(counter).toEqual(6);
  });
});
