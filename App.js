const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "Hello H2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello H1"),
    React.createElement("h2", {}, "Hello H2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
