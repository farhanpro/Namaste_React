const parent = React.createElement(
    "div",
    {id : "parent"},
    React.createElement(
    "div",
    {id:"child"},

    [
    React.createElement(
    "h1",
    {},
    "This is an H1 tag"),   

]
    ));


// const heading = React.createElement(
//     "h1",
//     {id:"heading",xyz:"abc"},
//     "Hello world from React!"
// );

//root.render(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);