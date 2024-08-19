// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React !!");
// const root = ReactDOM.createRoot(document.getElementById("header"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", {id:"parent"},
//     [
//         React.createElement("div", {id:"child1"},
//             [
//                 React.createElement("h1", {id:"heading"}, "I am h1 tag"),
//                 React.createElement("h2", {id:"heading"}, "I am h2 tag")
//             ]
//         ),
    
//         React.createElement("div", {id:"child2"},
//             [
//                 React.createElement("h1", {id:"heading"}, "I am h1 tag"),
//                 React.createElement("h2", {id:"heading"}, "I am h2 tag")
//             ]
//         ),
//     ]
// );

const Title = () =>(
    <h1 className="head" tabIndex="5">
        Namaste - React Component 🚀
    </h1>
);


const react_element = (
    <h1 className="head" tabIndex="5">
        Namaste - React Element 🚀
    </h1>
);

// how to write a react-element inside react-component
const HeadingComponent = () =>(
    <div id="container">
        <Title/>
        {react_element}
        <h1 className="heading"> Namaste React Functional Component 🎯</h1>
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(<HeadingComponent/>);