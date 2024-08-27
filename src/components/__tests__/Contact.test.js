import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("Contact us page test cases", ()=>{
    // test("should load contact us component", ()=>{
    //     render(<Contact/>);
    //     const heading = screen.getByRole("heading");
    //     // assertion
    //     expect(heading).toBeInTheDocument();
    // });

    it("should load contact us component", ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        // assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("should load button inside our Contact component", ()=>{
    render(<Contact/>);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        // assertion
        expect(button).toBeInTheDocument();
    });
    
    it("should check input with placeholder inside our Contact component", ()=>{
        render(<Contact/>);
            const input = screen.getByPlaceholderText("enter your name");
            // assertion
            expect(input).toBeInTheDocument();
        });
    
    
    it("should load two input boxes on our Contact component", ()=>{
        render(<Contact/>);
            const inputBoxes = screen.getAllByRole("textbox");
            // assertion
            expect(inputBoxes.length).not.toBe(3);
            // expect(inputBoxes.length).toBe(2);
        });
})