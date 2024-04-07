const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},React.createElement("h1",{},"I'm an H1 tag"))
)

//root.render(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);