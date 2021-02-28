import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Footer from "./components/Footer";

ReactDOM.render(
    [<App key="0" />, <Footer key="1" />],
    document.getElementById("root")
);
