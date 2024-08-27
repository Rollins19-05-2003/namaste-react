import { fireEvent, render , screen} from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/ResData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA); 
        }
    })
});

it("should render the body component and check the search box", async()=>{
    await act(async()=> 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );

    const totalRes = screen.getAllByTestId("resCard");
    expect(totalRes.length).toBe(8);
    
    const searchBtn = screen.getByRole("button", {name:"Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target : {value : "sweet"}});
    fireEvent.click(searchBtn);

    // assert to load three sweet res card
    const resCard = screen.getAllByTestId("resCard");
    expect(resCard.length).toBe(2);
    expect(searchBtn).toBeInTheDocument();
})