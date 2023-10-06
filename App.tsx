import React, { useState } from "react";
import "./App.css";
import Block from "./components/Block";


function App() {
  
  
  const [currValue,setValue] = useState(Array(9).fill(null));
  const [currTurn,setTurn] = useState("O");

  const changeTurn = (index: number) =>{
    const tempValue = Array.from(currValue);
    tempValue[index] = currTurn;
    setTurn(currTurn === 'O' ? 'X' : 'O')
    setValue(tempValue)
  }
  return (

    <div className="block">
      <div className="row">
        <Block onClick={() => {changeTurn(0)}} value={currValue[0]}/>
        <Block onClick={() => {changeTurn(1)}}value={currValue[1]}/>
        <Block onClick={() => {changeTurn(2)}}value={currValue[2]}/>
      </div>
      <div className="row">
        <Block onClick={() => {changeTurn(3)}}value={currValue[3]}/>
        <Block onClick={() => {changeTurn(4)}}value={currValue[4]}/>
        <Block onClick={() => {changeTurn(5)}}value={currValue[5]}/>
      </div>
      <div className="row">
        <Block onClick={() => {changeTurn(6)}}value={currValue[6]}/>
        <Block onClick={() => {changeTurn(7)}}value={currValue[7]}/>
        <Block onClick={() => {changeTurn(8)}}value={currValue[8]}/>
      </div>
    </div>
  );
}

export default App;
