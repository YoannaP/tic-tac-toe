import React from "react";
import Square from "./Square";

const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "500px",
    height: "500px",
    margin: "25px auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
};

const Board = ({ squares, onClick }) => (
    <div style={style}>
        <Square value="1" onClick={() => onClick("dummyValue")} />
        <Square value="2" onClick={() => onClick("dummyValue")} />
        <Square value="3" onClick={() => onClick("dummyValue")} />
        <Square value="4" onClick={() => onClick("dummyValue")} />
        <Square value="5" onClick={() => onClick("dummyValue")} />
        <Square value="6" onClick={() => onClick("dummyValue")} />
        <Square value="7" onClick={() => onClick("dummyValue")} />
        <Square value="8" onClick={() => onClick("dummyValue")} />
        <Square value="9" onClick={() => onClick("dummyValue")} />
    </div>
);

export default Board;