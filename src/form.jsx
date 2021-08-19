import React, {useRef} from 'react'
import {questions, parceToUrl} from './const';
import swal from 'sweetalert';
import axios  from 'axios';

const baseUrl = 'https://my.agromat.ua/rest/893/eh1mpd7uf8uy4bzg/lists.element.add?IBLOCK_TYPE_ID=lists&IBLOCK_ID=55';

let elementId = '1';

export function Form(props) {
  const {questionElements, changeQuestionHandler} = props;

    const question1 = useRef();
    const question2 = useRef();
    const question3 = useRef();
    const question4 = useRef();

    const questionRefs = [question1, question2, question3, question4];
    

    const onSubmitHandler = (evt) => {

        evt.preventDefault();
        let defaultSum = 0;
        
        questionRefs.forEach((ref) => {
            console.log(!isNaN(ref.current.value));
            if(ref.current.value !== '' && !isNaN(ref.current.value)) {
              defaultSum = defaultSum + parseFloat(ref.current.value);
             }
        })

        console.log(defaultSum);

        if(defaultSum !== 11) {
            swal('Cума балов не равна 11. Необходимо сделать исправления');
            return;
        }
        questionRefs.forEach((ref) => {
          ref.current.value = '';
      });
        
        axios.get(`${baseUrl}${parceToUrl(elementId, `test${elementId}`)}`)
          .then(response => console.log(response.data));
        elementId = elementId + 1;  
        changeQuestionHandler();
    }

    return (        
            <form className="qustion-form">
                {questionElements.map(({questionName, text}, index) => {return (
                   <div key={index} className="qustion-form__block">
                   <label className="qustion-form__label" htmlFor={questionName}>{`Ответ №${questionName}`}</label>
                   <div className="qustion-form__input-container">
                   <input ref={questionRefs[index]} placeholder='0' className="qustion-form__input" type="number" id={questionName}/>
                   <p>Баллов</p>
                   </div>
                       <p className="qustion-form__description">{text}</p>                       
               </div>
                )} )}                
                <button onClick={onSubmitHandler} type="submit" className="qustion-form__button">Наступне питання</button>
            </form>
        );
}
