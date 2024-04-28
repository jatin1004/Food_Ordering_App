import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import Mock_Data from "../Mocks/MockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(Mock_Data);
    },
  });
});

test("should search Res list for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const srchbtn = screen.getByRole("button", {name:"Search"});
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, {target: {value:"pizza"}});
  fireEvent.click(srchbtn);
  
 const cards = screen.getAllByTestId("restroCards");
  
  expect(cards.length).toBe(3);
});

test("should Filter Top Rated Restaurants", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const cardBeforeFilter = screen.getAllByTestId("restroCards");
    expect(cardBeforeFilter.length).toBe(20);
    const fltrbtn = screen.getByRole("button", {name:"Top Rated Restaurants"});
    fireEvent.click(fltrbtn);
    const cardAfterFilter = screen.getAllByTestId("restroCards");
    expect(cardAfterFilter.length).toBe(20);
  });


