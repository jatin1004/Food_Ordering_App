import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//describe is used for grouping test cases there can be multiple describes in a file
describe("Contact Page test cases", () => {
   //in place of test we can also write "it" like it(" ",  () => {})
    test("contact us page should ne rendered", () => {
 
        render(<Contact/>)
        const button = screen.getByRole("button");
        //expect(headings.length).toBe(3);
        expect(button).toBeInTheDocument();
    });
    
    test("contact us page should have input name in it", () => {
     
        render(<Contact/>)
        const input = screen.getByPlaceholderText("Name");
        expect(input).toBeInTheDocument();
    });
    
    test("should load 2 input boxes on the contact component", () => {
        render(<Contact/>)
        const inputbox = screen.getAllByRole("textbox");
        expect(inputbox.length).toBe(2);
    });

});
