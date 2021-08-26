import React from "react";
import { Header } from "./Header";
import { PersonalInfoForm } from "./personal-info-form";

export const WelcomScreen = (props) => {
  const { paramBitrixObjectChanger } = props;
  return (
    <>
      <Header />
      <main className='main-container'>
        <div className='main-container__info'>
          <div className='main-container__info-wraper'>
            <h1 className='info-wraper__name'>Опросник</h1>
            <h2 className='info-wraper__title'>Мой мотивационный профиль</h2>
            <p className='info-wraper__to'>Уважаемый коллега!</p>
            <p className='info-wraper__text'>
              Предлагаем Вам принять участие в исследовании Вашей вовлеченности
              и источников удовлетворения работой. Результаты опросника позволят
              Вам выявить и понять Ваши потребности и стремления, и тем самым
              получить некоторое представление о мотивационных факторах. Для
              этого Вам следует:
            </p>
            <ul className='instruction-list'>
              <li className='instruction-list__item'>
                Внимательно прочитать каждое утверждение вопросника и выставит
                свои баллы в таблицу ответов. Вам нужно распределить 11 баллов
                между 4 вариантами утверждений (а), (b), (с), (d).
              </li>
              <li className='instruction-list__item'>
                Совершенно не важно, каким образом Вы будете распределять 11
                баллов между четырьмя вариантами, самое главное, чтобы оценки
                важности каждого варианта утверждения по одному вопросу в сумме
                составляли бы 11 баллов
              </li>
              <li className='instruction-list__item'>
                Баллы, присуждаемые Вами каждому фактору, следует вносить
                непосредственно в таблицу ответов.
              </li>
              <li className='instruction-list__item'>
                Для получения наилучших результатов на вопросы следует отвечать
                быстро, не раздумывая подолгу. Ваш первый, может быть, не вполне
                осознанный ответ, вероятно, и есть наиболее верное отражение
                Ваших истинных чувств.
              </li>
            </ul>
          </div>
          <div className='info-image'></div>
        </div>
        <PersonalInfoForm
          elementIdChangeHandler={(id) => props.elementIdChangeHandler(id)}
          paramBitrixObjectChanger={(paramObject) =>
            paramBitrixObjectChanger(paramObject)
          }
        />
      </main>
    </>
  );
};
