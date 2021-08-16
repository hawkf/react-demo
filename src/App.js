import logo from "./logo.svg";
import React, { useState, useRef } from "react";
import "./App.css";
import { questions } from "./const";
import swal from "sweetalert";
import { Form } from "./form";

function App() {
  const [blockIndex, setBlockIndex] = useState(0);

  const formQuestion = questions.find((element) => {
    return element.blockId === blockIndex;
  });

  const changeQuestion = () => {
    if (blockIndex + 1 < questions.length) {
      setBlockIndex(blockIndex + 1);
    }
  };

  return (
    <>
      <header className='page-header'>
        <div>
          <img src='./img/logoCompany.png' alt='Логотип компании' />
        </div>
        <p className='page-header__history'>
          Чверть століття тому було покладено початок великого шляху. Сьогодні
          ми також сміливі, як і на самому початку.
        </p>
      </header>
      <main class='main-container'>
        <p class='main-container__title'>{formQuestion.title}</p>
        <p class='main-container__qustion'>{formQuestion.description}</p>
        {
          <Form
            questionElements={formQuestion.questionElements}
            changeQuestionHandler={() => changeQuestion()}
          />
        }
      </main>
    </>
  );
}

export default App;
