import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { questions } from "./const";
import { Form } from "./form";
import { Header } from "./Header";
import axios from "axios";
import { getUrlBitrixString } from "./utils/getUrlBitrixString";

let resultObject = null;
const baseUrl = "https://anfy.top/req";

export const MainPage = (props) => {
  const { paramBitrixObject } = props;

  const history = useHistory();

  if (paramBitrixObject === null) {
    history.push("/form");
  }

  useEffect(() => {
    resultObject = Object.assign({}, paramBitrixObject);
  }, [paramBitrixObject]);

  const [blockIndex, setBlockIndex] = useState(0);

  const formQuestion = questions.find((element) => {
    return element.blockId === blockIndex;
  });

  const changeQuestion = (fields, values) => {
    fields.forEach((item, index) => {
      resultObject[`FIELDS%5B${item}%5D`] = values[index];
    });

    let resultString = getUrlBitrixString(resultObject);

    axios({
      method: "post",
      url: baseUrl,
      data: {
        url: resultString,
      },
    }).then((response) => console.log(response.data));

    if (blockIndex + 1 < questions.length) {
      setBlockIndex(blockIndex + 1);
    }

    if (blockIndex + 1 === questions.length) {
      window.open("https://agromat-staff-interview.bitrix24site.ua/ThankYou/");
    }
  };

  return (
    <>
      <Header />
      <main className='main-container'>
        <p className='main-container__title'>{formQuestion.title}</p>
        <p className='main-container__qustion'>{formQuestion.description}</p>
        {
          <Form
            questionElements={formQuestion.questionElements}
            changeQuestionHandler={(fields, values) =>
              changeQuestion(fields, values)
            }
            bitrixFields={formQuestion.bitrixFields}
          />
        }
      </main>
    </>
  );
};
