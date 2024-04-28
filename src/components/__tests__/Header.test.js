import { fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //one way is as follow
  // const loginbutton = screen.getByRole("button");

  //another way , if we have multiple button then we can pass extra parameter for that as follows
  const loginbutton = screen.getByRole("button", {name: "Login"});
  expect(loginbutton).toBeInTheDocument();
});

test("should render header component with a Cart (0)", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    
   // const cartItem = screen.getByText("Cart (0)");

   //irrespective if the string we use 
   const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
  });

test("should change login button tom logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    
   const loginbtn = screen.getByRole("button", {name:"Login"});
   fireEvent.click(loginbtn);
   const logoutbtn = screen.getByRole("button", {name:"Logout"})
   
    expect(logoutbtn).toBeInTheDocument();
  });
