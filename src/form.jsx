import React, { useRef } from "react";
import swal from "sweetalert";
import axios from "axios";
import { getUrlBitrixString } from "./utils/getUrlBitrixString";

export function Form(props) {
  window.scrollTo(0, 0);
  const {
    questionElements,
    changeQuestionHandler,
    resultObject,
    bitrixFields,
  } = props;

  const question1 = useRef();
  const question2 = useRef();
  const question3 = useRef();
  const question4 = useRef();

  const questionRefs = [question1, question2, question3, question4];

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    let defaultSum = 0;

    questionRefs.forEach((ref) => {
      if (ref.current.value !== "" && !isNaN(ref.current.value)) {
        defaultSum = defaultSum + parseFloat(ref.current.value);
      }
    });

    if (defaultSum !== 11) {
      swal("Cума балов не равна 11. Необходимо сделать исправления");
      return;
    }

    // let object1 = Object.assign({}, resultObject);
    let values = questionRefs.map((item) => {
      return item.current.value;
    });

    questionRefs.forEach((ref) => {
      ref.current.value = "";
    });

    changeQuestionHandler(bitrixFields, values);
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
                ref={questionRefs[index]}
                placeholder='0'
                className='qustion-form__input'
                type='number'
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
