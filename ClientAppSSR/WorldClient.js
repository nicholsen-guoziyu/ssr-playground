import React from "react"
import ReactDOM from "react-dom"
import World from "./World"

ReactDOM.hydrate(
    <World />,
    document.getElementById("app")
    );