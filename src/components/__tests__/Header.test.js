import { render, screen } from "@testing-library/react";

import Header from "../Header";

import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("Testing header Component", () => {
  render(
    <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
    </BrowserRouter>
  );
//   const login = screen.getByRole("button");
const loginText=screen.getByText("Login")
  expect(loginText).toBeInTheDocument();
});
it("Testing header Component with cart item", () => {
    render(
      <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
      </BrowserRouter>
    );
//   const cart=screen.getByText("Cart-0")
const cart=screen.getByText(/Cart/)
    expect(cart).toBeInTheDocument();
  });
  
