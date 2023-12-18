import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Join meet Multicom button", () => {
    render(<App />);
    const buttonElement = screen.getByText(/Join meet Multicom/i);
    expect(buttonElement).toBeInTheDocument();
});

test("renders text input", () => {
    render(<App />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
});
