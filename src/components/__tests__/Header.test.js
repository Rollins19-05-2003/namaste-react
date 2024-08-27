import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom";

it("should contain login button in the header", ()=>{
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        );
    const loginBtn = screen.getByRole("button", {name:"Login"});
    expect(loginBtn).toBeInTheDocument();
})

it("should contain cart in the header", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartItem = screen.getByText(/Cart/);  // regex expression
    expect(cartItem).toBeInTheDocument();
})

it("should change login button to logout on click in the header", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", {name:"Login"});
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", {name:"Logout"});
    expect(logoutBtn).toBeInTheDocument();
})
