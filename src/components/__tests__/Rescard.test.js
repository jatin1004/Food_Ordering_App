import { render, screen} from "@testing-library/react";
import Restrocards from "../Restrocards";
import {MOCK_DATA} from "../Mocks/Rescard.json";
import "@testing-library/jest-dom";

test("should render restaurant card with props data", () => {
    render(<Restrocards resdata={MOCK_DATA}/>);
    const name = screen.getByText("Chinese Wok");
    expect(name).toBeInTheDocument();
})
