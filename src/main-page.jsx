import {React, useState } from "react";
import { useParams } from 'react-router-dom';
import { questions } from "./const";
import { Form } from "./form";

export const MainPage = () => {
  const [blockIndex, setBlockIndex] = useState(0);

  const {id} = useParams();
  console.log(id);

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
      <main className='main-container'>
        <p className='main-container__title'>{formQuestion.title}</p>
        <p className='main-container__qustion'>{formQuestion.description}</p>
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