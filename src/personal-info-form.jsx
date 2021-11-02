import { React, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AppRoute } from "./const";
import axios from "axios";
import { FIELDS } from "./const";
import swal from "sweetalert";
import {
  getUrlBitrixString,
  getUrlBitrixStringAdd,
} from "./utils/getUrlBitrixString";

//const baseUrl = "https://anfy.top/req";
const baseUrl = "http://querylist.agromat.ua";

const fieldsWelcomScreen = [
  "FIELDS%5Bproperty_1072%5D",
  "FIELDS%5Bproperty_1073%5D",
  "FIELDS%5Bproperty_835%5D",
  "FIELDS%5Bproperty_836%5D",
];

export const PersonalInfoForm = (props) => {
  const { paramBitrixObjectChanger } = props;
  const {
    id = "",
    firstName = "",
    lastName = "",
    email = "",
    position = "",
  } = useParams();

  const history = useHistory();

  const [firstNameState, setFirstNameState] = useState(firstName);
  const [lastNameState, setLastNameState] = useState(lastName);
  const [emailState, setEmailState] = useState(email);
  const [positionState, setPositionState] = useState(
    position.replace(new RegExp("_", "g"), " ")
  );

  const resultArray = FIELDS.map((item) => {
    return `FIELDS%5B${item}%5D`;
  });

  let paramObject = {
    IBLOCK_TYPE_ID: "lists",
    IBLOCK_ID: "55",
    ELEMENT_ID: id,
    "FIELDS%5BNAME%5D": "1",
    "FIELDS%5Bproperty_812%5D": "1",
    "FIELDS%5Bproperty_826%5D": "2",
    "FIELDS%5Bproperty_897%5D": "3",
    "FIELDS%5Bproperty_903%5D": "4",
    "FIELDS%5Bproperty_881%5D": "5",
    "FIELDS%5Bproperty_878%5D": "6",
    "FIELDS%5Bproperty_892%5D": "7",
    "FIELDS%5Bproperty_910%5D": "8",
    "FIELDS%5Bproperty_916%5D": "9",
    "FIELDS%5Bproperty_922%5D": "10",
    "FIELDS%5Bproperty_928%5D": "11",
    "FIELDS%5Bproperty_935%5D": "12",
    "FIELDS%5Bproperty_940%5D": "13",
    "FIELDS%5Bproperty_946%5D": "14",
    "FIELDS%5Bproperty_952%5D": "15",
    "FIELDS%5Bproperty_958%5D": "16",
    "FIELDS%5Bproperty_964%5D": "17",
    "FIELDS%5Bproperty_970%5D": "18",
    "FIELDS%5Bproperty_976%5D": "19",
    "FIELDS%5Bproperty_982%5D": "20",
    "FIELDS%5Bproperty_988%5D": "21",
    "FIELDS%5Bproperty_994%5D": "22",
    "FIELDS%5Bproperty_1000%5D": "23",
    "FIELDS%5Bproperty_1006%5D": "24",
    "FIELDS%5Bproperty_1012%5D": "25",
    "FIELDS%5Bproperty_1018%5D": "26",
    "FIELDS%5Bproperty_1024%5D": "27",
    "FIELDS%5Bproperty_1030%5D": "28",
    "FIELDS%5Bproperty_1036%5D": "29",
    "FIELDS%5Bproperty_1043%5D": "30",
    "FIELDS%5Bproperty_1049%5D": "31",
    "FIELDS%5Bproperty_1065%5D": "32",
    "FIELDS%5Bproperty_1055%5D": "33",
  };

  resultArray.forEach((item) => {
    paramObject[item] = "";
  });

  const onSubmitHandler = () => {
    if (
      firstNameState === "" ||
      lastNameState === "" ||
      emailState === "" ||
      positionState === ""
    ) {
      swal("Необходимо заполнить все поля формы");
      return;
    }

    const valueArray = [
      firstNameState,
      lastNameState,
      emailState,
      positionState,
    ];

    fieldsWelcomScreen.forEach((item, index) => {
      paramObject[item] = encodeURI(valueArray[index]);
    });

    let resultString = getUrlBitrixString(paramObject);

    if (id === "") {
      delete paramObject.ELEMENT_ID;
      paramObject["ELEMENT_CODE"] = `element_${Date.now()}`;
      resultString = getUrlBitrixStringAdd(paramObject);
    }

    axios({
      method: "post",
      url: baseUrl,
      data: {
        url: resultString,
      },
    }).then((response) => console.log(response.data));

    paramBitrixObjectChanger(paramObject);

    history.replace("form/");
    history.push(AppRoute.ROOT);
  };

  return (
    <section className="personal-info">
      <p className="personal-info__text">
        Чтоб приступить, заполните, пожалуйста, форму внизу
      </p>
      <form className="personal-info__form">
        <label className="personal-info__form-label" htmlFor="name">
          Имя
        </label>
        <input
          value={firstNameState}
          onChange={(evt) => setFirstNameState(evt.target.value)}
          className="personal-info__form-input"
          type="text"
          id="name"
          required={true}
        />
        <label className="personal-info__form-label" htmlFor="second-name">
          Фамилия:
        </label>
        <input
          value={lastNameState}
          onChange={(evt) => setLastNameState(evt.target.value)}
          className="personal-info__form-input"
          type="text"
          id="second-name"
          required={true}
        />
        <label className="personal-info__form-label" htmlFor="e-mai">
          E-mail:
        </label>
        <input
          value={emailState}
          onChange={(evt) => setEmailState(evt.target.value)}
          className="personal-info__form-input"
          type="email"
          id="e-mail"
          required={true}
        />
        <label className="personal-info__form-label" htmlFor="position">
          Должность:
        </label>
        <input
          value={positionState}
          onChange={(evt) => setPositionState(evt.target.value)}
          className="personal-info__form-input"
          type="text"
          id="position"
          required={true}
        />
      </form>
      <button
        onClick={() => onSubmitHandler()}
        type="submit"
        className="personal-info__form__button"
      >
        Перейти к первому вопросу
      </button>
    </section>
  );
};
