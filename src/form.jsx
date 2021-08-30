import React, { useState } from "react";
import swal from "sweetalert";

export function Form(props) {
  window.scrollTo(0, 0);
  const { questionElements, changeQuestionHandler, bitrixFields } = props;

  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");

  const questionRefs = [question1, question2, question3, question4];
  const setQuestions = [setQuestion1, setQuestion2, setQuestion3, setQuestion4];

  const onChangeHandler = (evt, name) => {
    if (evt.target.value < 0) {
      swal("Количество баллов не может быть меньше 0");
      return;
    }

    if (evt.target.value > 11) {
      swal("Количество баллов не может быть больше 11");
      return;
    }
    switch (name) {
      case "1":
        setQuestion1(evt.target.value);
        break;
      case "2":
        setQuestion2(evt.target.value);
        break;
      case "3":
        setQuestion3(evt.target.value);
        break;
      case "4":
        setQuestion4(evt.target.value);
        break;
      default:
        return;
    }
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    let defaultSum = 0;

    questionRefs.forEach((item) => {
      if (item !== "" && !isNaN(item)) {
        defaultSum = defaultSum + parseFloat(item);
      }
    });

    if (defaultSum !== 11) {
      swal("Cума балов не равна 11. Необходимо сделать исправления");
      return;
    }

    setQuestions.forEach((item) => {
      item("");
    });

    changeQuestionHandler(bitrixFields, questionRefs);
  };

  return (
    <form className='qustion-form'>
      {questionElements.map(({ questionName, text }, index) => {
        return (
          <div key={index} className='qustion-form__block'>
            <label
              className='qustion-form__label'
              htmlFor={questionName}
            >{`Ответ №${questionName}`}</label>
            <div className='qustion-form__input-container'>
              <input
                value={questionRefs[index]}
                onChange={(evt) => onChangeHandler(evt, questionName)}
                placeholder='0'
                className='qustion-form__input'
                type='number'
                min='0'
                max='11'
                id={questionName}
              />
              <p>Баллов</p>
            </div>
            <p className='qustion-form__description'>{text}</p>
          </div>
        );
      })}
      <button
        onClick={onSubmitHandler}
        type='submit'
        className='qustion-form__button'
      >
        Наступне питання
      </button>
    </form>
  );
}
