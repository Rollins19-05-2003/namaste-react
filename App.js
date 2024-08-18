// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React !!");
// const root = ReactDOM.createRoot(document.getElementById("header"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"},
    [
        React.createElement("div", {id:"child1"},
            [
                React.createElement("h1", {id:"heading"}, "I am h1 tag"),
                React.createElement("h2", {id:"heading"}, "I am h2 tag")
            ]
        ),
    
        React.createElement("div", {id:"child2"},
            [
                React.createElement("h1", {id:"heading"}, "I am h1 tag"),
                React.createElement("h2", {id:"heading"}, "I am h2 tag")
            ]
        ),
    ]
);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);