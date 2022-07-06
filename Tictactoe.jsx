import React, { useEffect } from "react";
import './TictactoeApp.css';
import { useState } from "react";

const Tictactoee = () => {
  const [state1, setstate1] = useState(null);
  const [state2, setstate2] = useState(null);
  const [state3, setstate3] = useState(null);
  const [state4, setstate4] = useState(null);
  const [state5, setstate5] = useState(null);
  const [state6, setstate6] = useState(null);
  const [state7, setstate7] = useState(null);
  const [state8, setstate8] = useState(null);
  const [state9, setstate9] = useState(null);

  function myFunction(){
    alert('player wins .....')
  }


  const [val, preval] = useState(null);

       if (
      (state1 === "0" && state2 === "0" && state3 === "0") ||
      (state1 === "x" && state2 === "x" && state3 === "x") ||
      (state4 === "0" && state5 === "0" && state6 === "0") ||
      (state4 === "x" && state5 === "x" && state6 === "x") ||
      (state7 === "0" && state8 === "0" && state9 === "0") ||
      (state7 === "x" && state8 === "x" && state9 === "x") ||
      (state1 === "0" && state4 === "0" && state7 === "0") ||
      (state1 === "x" && state4 === "x" && state7 === "x") ||
      (state2 === "0" && state5 === "0" && state8 === "0") ||
      (state2 === "x" && state5 === "x" && state8 === "x") ||
      (state3 === "0" && state6 === "0" && state9 === "0") ||
      (state3 === "x" && state6 === "x" && state9 === "x") ||
      (state1 === "0" && state5 === "0" && state9 === "0") ||
      (state1 === "x" && state5 === "x" && state9 === "x") ||
      (state3 === "0" && state5 === "0" && state7 === "0") ||
      (state3 === "x" && state5 === "x" && state7 === "x")
    )
    {
      setTimeout(myFunction,100)
      
    } 
  

  function btn1() {
    if (state1 != null) {
      alert("press empty button");
    } else {
      if (
        state1 === null &&
        state2 === null &&
        state3 === null &&
        state4 === null &&
        state5 === null &&
        state6 === null &&
        state7 === null &&
        state8 === null &&
        state9 === null &&
        val === null
      ) {
        setstate1("x");
        preval("x");
        
        
      } else if (val == "0") {
        setstate1("x");
        preval("x");
        
      } else if (val == "x") {
        setstate1("0");
        preval("0");
        
      }
     
      else {
        alert("press empty button");
      }
    }
  }

  function btn2() {
    if (state2 != null) {
      alert("press empty button");
    } else {
      if (
        state1 === null &&
        state2 === null &&
        state3 === null &&
        state4 === null &&
        state5 === null &&
        state6 === null &&
        state7 === null &&
        state8 === null &&
        state9 === null &&
        val === null
      ) {
        setstate2("x");
        preval("x");
      } else if (val == "0") {
        setstate2("x");
        preval("x");
      } else if (val == "x") {
        setstate2("0");
        preval("0");
      } else {
        alert("press empty button");
      }
    }
  }

  function btn3() {
    if (state3 != null) {
      alert("press empty button");
    } else {
      if (
        state1 === null &&
        state2 === null &&
        state3 === null &&
        state4 === null &&
        state5 === null &&
        state6 === null &&
        state7 === null &&
        state8 === null &&
        state9 === null &&
        val === null
      ) {
        setstate3("x");
        preval("x");
      } else if (val == "0") {
        setstate3("x");
        preval("x");
      } else if (val == "x") {
        setstate3("0");
        preval("0");
      } else {
        alert("press empty button");
      }
    }
  }

  function btn4() {
    if (state4 != null) {
      alert("press empty button");
    } else {
      if (
        state1 === null &&
        state2 === null &&
        state3 === null &&
        state4 === null &&
        state5 === null &&
        state6 === null &&
        state7 === null &&
        state8 === null &&
        state9 === null &&
        val === null
      ) {
        setstate4("x");
        preval("x");
      } else if (val == "0") {
        setstate4("x");
        preval("x");
      } else if (val == "x") {
        setstate4("0");
        preval("0");
      } else {
        alert("press empty button");
      }
    }
  }

  function btn5() {
    if (state5 != null) {
      alert("press empty button");
    } else {
      if (
        state1 === null &&
        state2 === null &&
        state3 === null &&
        state4 === null &&
        state5 === null &&
        state6 === null &&
        state7 === null &&
        state8 === null &&
        state9 === null &&
        val === null
      ) {
        setstate5("x");
        preval("x");
      } else if (val == "0") {
        setstate5("x");
        preval("x");
      } else if (val == "x") {
        setstate5("0");
        preval("0");
      } else {
        alert("press empty button");
      }
    }
  }

  function btn6() {
    if (state6 != null) {
      alert("press empty button");
    } else {
      if (
        state1 === null &&
        state2 === null &&
        state3 === null &&
        state4 === null &&
        state5 === null &&
        state6 === null &&
        state7 === null &&
        state8 === null &&
        state9 === null &&
        val === null
      ) {
        setstate6("x");
        preval("x");
      } else if (val == "0") {
        setstate6("x");
        preval("x");
      } else if (val == "x") {
        setstate6("0");
        preval("0");
      } else {
        alert("press empty button");
      }
    }
  }

  function btn7() {
    if (state7 != null) {
      alert("press empty button");
    } else {
      if (
        state1 === null &&
        state2 === null &&
        state3 === null &&
        state4 === null &&
        state5 === null &&
        state6 === null &&
        state7 === null &&
        state8 === null &&
        state9 === null &&
        val === null
      ) {
        setstate7("x");
        preval("x");
      } else if (val == "0") {
        setstate7("x");
        preval("x");
      } else if (val == "x") {
        setstate7("0");
        preval("0");
      } else {
        alert("press empty button");
      }
    }
  }

  function btn8() {
    if (state8 != null) {
      alert("press empty button");
    } else {
      if (
        state1 === null &&
        state2 === null &&
        state3 === null &&
        state4 === null &&
        state5 === null &&
        state6 === null &&
        state7 === null &&
        state8 === null &&
        state9 === null &&
        val === null
      ) {
        setstate8("x");
        preval("x");
      } else if (val == "0") {
        setstate8("x");
        preval("x");
      } else if (val == "x") {
        setstate8("0");
        preval("0");
      } else {
        alert("press empty button");
      }
    }
  }

  function btn9() {
    if (state9 != null) {
      alert("press empty button");
    } else {
      if (
        state1 === null &&
        state2 === null &&
        state3 === null &&
        state4 === null &&
        state5 === null &&
        state6 === null &&
        state7 === null &&
        state8 === null &&
        state9 === null &&
        val === null
      ) {
        setstate9("x");
        preval("x");
      } else if (val == "0") {
        setstate9("x");
        preval("x");
      } else if (val == "x") {
        setstate9("0");
        preval("0");
      } else {
        alert("press empty button");
      }
    }
  }

  return (
    <div className="firstdiv">
      <div className="maindiv">
        <div className="btndiv1">
          <button onClick={btn1}>{state1}</button>
          <button onClick={btn2}>{state2}</button>
          <button onClick={btn3}>{state3}</button>
        </div>
        <div className="btndiv2">
          <button onClick={btn4}>{state4}</button>
          <button onClick={btn5}>{state5}</button>
          <button onClick={btn6}>{state6}</button>
        </div>
        <div className="btndiv3">
          <button onClick={btn7}>{state7}</button>
          <button onClick={btn8}>{state8}</button>
          <button onClick={btn9}>{state9}</button>
        </div>
      </div>

     


      <div className="div2">
        <h5>WITH FREE SOURCE CODE</h5>
        <br></br>
        <h1>TIC TAC TOE</h1><br></br>
        <div className="intdiv">
          <h4>HTML, CSS, JAVASCRIPT AND REACT JS</h4>
        </div>

      </div>
    </div>
  );
};

export default Tictactoee;
