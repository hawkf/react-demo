export const AppRoute = {
  ROOT: "/:id",
};
export const parceToUrl = (elementId, name) => {
  return `&ELEMENT_CODE=${elementId}&FIELDS%5BNAME%5D=${name}`;
};

export const questions = [
  {
    title: "Первое суждение",
    description: "Я полагаю, что мог внести большой вклад на такой работе где",
    blockId: 0,
    questionElements: [
      {
        questionName: "1",
        text: "а) хорошая заработная плата и прочие виды вознаграждения",
      },
      {
        questionName: "2",
        text: "b) имеется возможность установить хорошие взаимоотношения с коллегами на работе",
      },
      {
        questionName: "3",
        text: "c) я мог бы влиять на принятие решений и демонстрировать свои достоинства как работника",
      },
      {
        questionName: "4",
        text: "d) у меня есть возможность совершенствоваться и расти как личность",
      },
    ],
  },
  {
    title: "Второе суждение",
    description: "Я не хотел работать там, где",
    blockId: 1,
    questionElements: [
      {
        questionName: "1",
        text: "а) отсутствуют чёткие указания что от меня требуется",
      },
      {
        questionName: "2",
        text: "b) практически отсутствует обратна связь об оценке эффективности моей работы",
      },
      {
        questionName: "3",
        text: "c) то, чем я занимаюсь, выглядит малополезным и малоценным",
      },
      {
        questionName: "4",
        text: "d) плохие условия работы, слишком шумно или грязно",
      },
    ],
  },
];
