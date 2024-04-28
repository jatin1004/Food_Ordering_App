import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Restromenu from "../Restromenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../Mocks/MockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should Load Restaurant Menu ", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Restromenu />
          <Cart/>
        </BrowserRouter>
      </Provider>
    )
  );
  const accordionHeader = screen.getByText("Veg Pizza (14)");

  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(14);

  const addBtns = screen.getAllByRole("button", {name:"ADD +"})

  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  fireEvent.click(screen.getByRole("button", {name:"Clear Cart"}))

  expect(screen.getAllByTestId("foodItems").length).toBe(14);
  
  expect(screen.getByText("Cart is Empty. Add Items in the Cart")).toBeInTheDocument();
});
