import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useState } from "react";

let questions = [];
let prevAns;

const Calculator = (props) => {
  const [displayA, setDisplayA] = useState(0);
  const [displayQ, setDisplayQ] = useState([]);
  //handleCalulation logic
  const handleCalculation = (digits) => {
    let realValues = digits.toString().replaceAll(",", "");
    let answer = eval(realValues);
    return answer;
  };
  //HANDLE CALCULATION FUNCTION
  const handleEvaluation = (e) => {
    let buttonClicked = e.target;
    if (!buttonClicked.id) {
      return;
    }

    if (buttonClicked.id === "cancel") {
      console.log("CANCEL");
    } else if (buttonClicked.id === "backspace") {
      console.log("BACKSPACE");
    } else if (buttonClicked.id === "percent") {
      console.log("Percent");
    } else if (buttonClicked.id === "equal") {
      setDisplayA(handleCalculation(questions));
      questions = [];
      prevAns = handleCalculation(questions);
    } else {
      setDisplayQ((prev) => [...prev, buttonClicked.textContent]);
      questions.push(buttonClicked.textContent);
    }
  };

  return (
    <div className="calculator">
      <div className="answer"> {displayA}</div>
      <div className="question">{displayQ}</div>
      <div className="btns" onClick={handleEvaluation}>
        <div className="section-1">
          <button className="key symbol" id="cancel">
            AC
          </button>
          <button className="key symbol" id="backspace">
            X
          </button>
          <button className="key symbol" id="percent">
            %
          </button>
          <button className="key symbol" id="divide">
            /
          </button>
        </div>

        <div className="section-2">
          <button className="key" id="7">
            7
          </button>
          <button className="key" id="8">
            8
          </button>
          <button className="key" id="9">
            9
          </button>
          <button className="key symbol" id="multiply">
            *
          </button>
        </div>
        <div className="section-3">
          <button className="key" id="4">
            4
          </button>
          <button className="key" id="5">
            5
          </button>
          <button className="key" id="6">
            6
          </button>
          <button className="key symbol" id="subtract">
            -
          </button>
        </div>
        <div className="section-4">
          <button className="key" id="1">
            1
          </button>
          <button className="key" id="2">
            2
          </button>
          <button className="key" id="3">
            3
          </button>
          <button className="key symbol" id="add">
            +
          </button>
        </div>
        <div className="section-5">
          <button className="key" id="0">
            0
          </button>
          <button className="key" id="point">
            .
          </button>
          <button className="key symbol" id="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
