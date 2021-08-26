export const AppRoute = {
  FORM: "/form/:id?/:firstName?/:lastName?/:email?/:position?",
  ROOT: "/",
};
export const parceToUrl = (elementId, name) => {
  return `&ELEMENT_CODE=${elementId}&FIELDS%5BNAME%5D=${name}`;
};

export const questions = [
  {
    title: "Суждение №1",
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
    bitrixFields: [
      "property_821",
      "property_822",
      "property_823",
      "property_824",
    ],
  },
  {
    title: "Суждение №2",
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
    bitrixFields: [
      "property_828",
      "property_829",
      "property_830",
      "property_831",
    ],
  },
  {
    title: "Суждение №3",
    description: "Для меня важно, чтобы моя работа",
    blockId: 2,
    questionElements: [
      {
        questionName: "1",
        text: "a) была связана со значительным разнообразием и переменами;",
      },
      {
        questionName: "2",
        text: "b) давала мне возможность работать с широким кругом людей;",
      },
      {
        questionName: "3",
        text: "c) обеспечивала мне четкие указания, чтобы я знал, что от меня требуется;",
      },
      {
        questionName: "4",
        text: "d) позволяла мне хорошо узнавать тех людей, с кем я работаю.",
      },
    ],
    bitrixFields: [
      "property_898",
      "property_899",
      "property_900",
      "property_901",
    ],
  },
  {
    title: "Суждение №4",
    description:
      "Я полагаю, что я не был бы очень заинтересован работой, которая",
    blockId: 3,
    questionElements: [
      {
        questionName: "1",
        text: "a) обеспечивала бы мне мало контактов с другими людьми;",
      },
      {
        questionName: "2",
        text: "b) едва ли была бы замечена другими людьми;",
      },
      {
        questionName: "3",
        text: "c) не имела бы конкретных очертаний, так что я не был бы уверен, что от меня требуется;",
      },
      {
        questionName: "4",
        text: "d) была бы сопряжена с определенным объемом рутинных операций.",
      },
    ],
    bitrixFields: [
      "property_904",
      "property_905",
      "property_906",
      "property_907",
    ],
  },
  {
    title: "Суждение №5",
    description: "Работа мне нравится, если",
    blockId: 4,
    questionElements: [
      {
        questionName: "1",
        text: "a) я четко представляю себе, что от меня требуется;",
      },
      {
        questionName: "2",
        text: "b) у меня удобное рабочее место, и меня мало отвлекают;",
      },
      {
        questionName: "3",
        text: "c) у меня хорошие вознаграждение и заработная плата;",
      },
      {
        questionName: "4",
        text: "d) позволяет мне совершенствовать свои профессиональные качества.",
      },
    ],
    bitrixFields: [
      "property_882",
      "property_883",
      "property_884",
      "property_885",
    ],
  },
  {
    title: "Суждение №6",
    description: "Полагаю, что мне бы понравилось, если",
    blockId: 5,
    questionElements: [
      {
        questionName: "1",
        text: "a) были бы хорошие условия работы и отсутствовало бы давление на меня;",
      },
      {
        questionName: "2",
        text: "b) у меня был бы очень хороший оклад;",
      },
      {
        questionName: "3",
        text: "c) работа в действительности была бы полезна и приносила мне удовлетворение;",
      },
      {
        questionName: "4",
        text: "d) мои достижения и работа оценивались бы по достоинству.",
      },
    ],
    bitrixFields: [
      "property_887",
      "property_888",
      "property_889",
      "property_890",
    ],
  },
  {
    title: "Суждение №7",
    description: "Я не считаю, что работа должна",
    blockId: 6,
    questionElements: [
      {
        questionName: "1",
        text: "a) быть слабо структурированной, так что непонятно, что же следует делать;",
      },
      {
        questionName: "2",
        text: "b) предоставлять слишком мало возможностей хорошо узнавать других людей;",
      },
      {
        questionName: "3",
        text: "c) быть малозначимой и малополезной для общего или неинтересной для выполнения;",
      },
      {
        questionName: "4",
        text: "d) оставаться непризнанной, или ее выполнение должно восприниматься как само собой разумеющееся.",
      },
    ],
    bitrixFields: [
      "property_893",
      "property_894",
      "property_895",
      "property_896",
    ],
  },
  {
    title: "Суждение №8",
    description: "Работа, приносящая удовлетворение,",
    blockId: 7,
    questionElements: [
      {
        questionName: "1",
        text: "a) связана со значительным разнообразием, переменами и стимуляцией энтузиазма;",
      },
      {
        questionName: "2",
        text: "b) дает возможность совершенствовать свои профессиональные качества и развиваться как личность;",
      },
      {
        questionName: "3",
        text: "c) является полезной и значимой для общества;",
      },
      {
        questionName: "4",
        text: "d) позволяет мне быть креативным (проявлять творческий подход) и экспериментировать с новыми идеями.",
      },
    ],
    bitrixFields: [
      "property_911",
      "property_912",
      "property_913",
      "property_914",
    ],
  },
  {
    title: "Суждение №9",
    description: "Важно, чтобы работа",
    blockId: 8,
    questionElements: [
      {
        questionName: "1",
        text: "a) признавалась и ценилась организацией, в которой я работаю;",
      },
      {
        questionName: "2",
        text: "b) давала бы возможности для персонального роста и совершенствования;",
      },
      {
        questionName: "3",
        text: "c) была сопряжена с большим разнообразием и переменами;",
      },
      {
        questionName: "4",
        text: "d) позволяла бы работнику оказывать влияние на других.",
      },
    ],
    bitrixFields: [
      "property_918",
      "property_919",
      "property_920",
      "property_921",
    ],
  },
  {
    title: "Суждение №10",
    description: "Я не считаю, что работа будет приносить удовлетворение, если",
    blockId: 9,
    questionElements: [
      {
        questionName: "1",
        text: "a) в процессе ее выполнения мало возможность осуществлять контакты с разными людьми;",
      },
      {
        questionName: "2",
        text: "b) оклад и вознаграждение не очень хорошие;",
      },
      {
        questionName: "3",
        text: "c) я не могу установить и поддерживать добрые отношения с коллегами по работе;",
      },
      {
        questionName: "4",
        text: "d) у меня очень мало самостоятельности или возможностей для проявления гибкости.",
      },
    ],
    bitrixFields: [
      "property_923",
      "property_924",
      "property_925",
      "property_926",
    ],
  },
  {
    title: "Суждение №11",
    description: "Самой хорошей является такая работа, которая",
    blockId: 10,
    questionElements: [
      {
        questionName: "1",
        text: "a) обеспечивает хорошие рабочие условия;",
      },
      {
        questionName: "2",
        text: "b) дает четкие инструкции и разъяснения по поводу содержания работы;",
      },
      {
        questionName: "3",
        text: "c) предполагает выполнение интересных и полезных заданий;",
      },
      {
        questionName: "4",
        text: "d) позволяет получить признание личных достижений и качества работы.",
      },
    ],
    bitrixFields: [
      "property_930",
      "property_931",
      "property_932",
      "property_933",
    ],
  },
  {
    title: "Суждение №12",
    description: "Вероятно, я не буду хорошо работать, если",
    blockId: 11,
    questionElements: [
      {
        questionName: "1",
        text: "a) имеется мало возможностей ставить перед собой цели и достигать их;",
      },
      {
        questionName: "2",
        text: "b) я не имею возможности совершенствовать свои личные качества;",
      },
      {
        questionName: "3",
        text: "c) тяжелая работа не получает признания и соответствующего вознаграждения;",
      },
      {
        questionName: "4",
        text: "d) на рабочем месте пыльно, грязно и шумно.",
      },
    ],
    bitrixFields: [
      "property_936",
      "property_937",
      "property_938",
      "property_939",
    ],
  },
  {
    title: "Суждение №13",
    description: "При определении служебных обязанностей важно",
    blockId: 12,
    questionElements: [
      {
        questionName: "1",
        text: "a) дать людям возможность лучше узнать друг друга;",
      },
      {
        questionName: "2",
        text: "b) предоставить работнику возможность ставить цели и достигать их;",
      },
      {
        questionName: "3",
        text: "c) обеспечить условия для проявления работниками творческого начала;",
      },
      {
        questionName: "4",
        text: "d) обеспечить комфортность и чистоту места работы.",
      },
    ],
    bitrixFields: [
      "property_941",
      "property_942",
      "property_943",
      "property_944",
    ],
  },
  {
    title: "Суждение №14",
    description: "Вероятно, я не захочу работать там, где",
    blockId: 13,
    questionElements: [
      {
        questionName: "1",
        text: "a) у меня будет мало самостоятельности и возможностей для совершенствования своей личности;",
      },
      {
        questionName: "2",
        text: "b) не поощряются исследования и проявление научного любопытства;",
      },
      {
        questionName: "3",
        text: "c) очень мало контактов с широким кругом людей;",
      },
      {
        questionName: "4",
        text: "d) отсутствуют достойные надбавки и дополнительные льготы.",
      },
    ],
    bitrixFields: [
      "property_947",
      "property_948",
      "property_949",
      "property_950",
    ],
  },
  {
    title: "Суждение №15",
    description: "Я был бы удовлетворен, если",
    blockId: 14,
    questionElements: [
      {
        questionName: "1",
        text: "a) была бы возможность оказывать влияние на принятие решений другими работниками;",
      },
      {
        questionName: "2",
        text: "b) работа предоставляла бы широкие разнообразие и перемены;",
      },
      {
        questionName: "3",
        text: "c) мои достижения были бы оценены другими людьми;",
      },
      {
        questionName: "4",
        text: "d) я точно знал бы, что от меня требуется и как я должен это выполнять.",
      },
    ],
    bitrixFields: [
      "property_953",
      "property_954",
      "property_955",
      "property_956",
    ],
  },
  {
    title: "Суждение №16",
    description: "Работа меньше удовлетворяла бы меня, если",
    blockId: 15,
    questionElements: [
      {
        questionName: "1",
        text: "a) не позволяла бы ставить и добиваться сложных целей;",
      },
      {
        questionName: "2",
        text: "b) четко не знал бы правил и процедур выполнения работы;",
      },
      {
        questionName: "3",
        text: "c) уровень оплаты моего труда не соответствовал бы уровню сложности выполняемой работы;",
      },
      {
        questionName: "4",
        text: "d) я практически не мог бы влиять на принимаемые решения и на то, что делают другие.",
      },
    ],
    bitrixFields: [
      "property_959",
      "property_960",
      "property_961",
      "property_962",
    ],
  },
  {
    title: "Суждение №17",
    description: "Я полагаю, что должность должна предоставлять",
    blockId: 16,
    questionElements: [
      {
        questionName: "1",
        text: "a) четкие должностные инструкции и указания на то, что от меня требуется;",
      },
      {
        questionName: "2",
        text: "b) возможность лучше узнавать своих коллег по работе;",
      },
      {
        questionName: "3",
        text: "c) возможность выполнять сложные производственные задания, требующие напряжения всех сил;",
      },
      {
        questionName: "4",
        text: "d) разнообразие, перемены и поощрения.",
      },
    ],
    bitrixFields: [
      "property_965",
      "property_966",
      "property_967",
      "property_968",
    ],
  },
  {
    title: "Суждение №18",
    description: "Работа приносила бы меньше удовлетворения, если",
    blockId: 17,
    questionElements: [
      {
        questionName: "1",
        text: "a) не допускала бы возможность хотя бы небольшого творческого вклада;",
      },
      {
        questionName: "2",
        text: "b) осуществлялась бы изолированно, т.е. работник должен был бы работать в одиночестве;",
      },
      {
        questionName: "3",
        text: "c) отсутствовал бы благоприятные внутренний климат, в котором работник мог бы профессионально расти;",
      },
      {
        questionName: "4",
        text: "d) не давала бы возможности оказывать влияние на принятие решений.",
      },
    ],
    bitrixFields: [
      "property_971",
      "property_972",
      "property_973",
      "property_974",
    ],
  },
  {
    title: "Суждение №19",
    description: "Я хотел бы работать там, где",
    blockId: 18,
    questionElements: [
      {
        questionName: "1",
        text: "a) другие люди признают и ценят выполняемую мной работу;",
      },
      {
        questionName: "2",
        text: "b) у меня будет возможность оказывать влияние на то, что делают другие;",
      },
      {
        questionName: "3",
        text: "c) имеется достойная система надбавок и дополнительных льгот;",
      },
      {
        questionName: "4",
        text: "d) можно выдвигать и апробировать новые идеи и проявлять креативность.",
      },
    ],
    bitrixFields: [
      "property_977",
      "property_978",
      "property_979",
      "property_980",
    ],
  },
  {
    title: "Суждение №20",
    description: "Вряд ли я захотел бы работать там, где",
    blockId: 19,
    questionElements: [
      {
        questionName: "1",
        text: "a) не существует разнообразия или перемен в работе;",
      },
      {
        questionName: "2",
        text: "b) у меня будет мало возможностей влиять на принимаемые решения;",
      },
      {
        questionName: "3",
        text: "c) заработная плата не слишком высока;",
      },
      {
        questionName: "4",
        text: "d) условия работы недостаточно хорошие.",
      },
    ],
    bitrixFields: [
      "property_983",
      "property_984",
      "property_985",
      "property_986",
    ],
  },
  {
    title: "Суждение №21",
    description:
      "Я полагаю, что приносящая удовлетворение работа должна предусматривать",
    blockId: 20,
    questionElements: [
      {
        questionName: "1",
        text: "a) наличие четких указаний, чтобы работники знали, что от них требуется;",
      },
      {
        questionName: "2",
        text: "b) возможность проявлять креативность;",
      },
      {
        questionName: "3",
        text: "c) возможность встречаться с интересными людьми;",
      },
      {
        questionName: "4",
        text: "d) чувство удовлетворения и действительно интересные задания.",
      },
    ],
    bitrixFields: [
      "property_989",
      "property_990",
      "property_991",
      "property_992",
    ],
  },
  {
    title: "Суждение №22",
    description: "Работа не будет доставлять удовольствие, если",
    blockId: 21,
    questionElements: [
      {
        questionName: "1",
        text: "a) предусмотрены незначительные надбавки и дополнительные льготы;",
      },
      {
        questionName: "2",
        text: "b) условия работы некомфортны или в помещении очень шумно;",
      },
      {
        questionName: "3",
        text: "c) работник не имеет возможности сравнивать свою работу с работой других;",
      },
      {
        questionName: "4",
        text: "d) не поощряются исследования, творческие подход и новые идеи.",
      },
    ],
    bitrixFields: [
      "property_995",
      "property_996",
      "property_997",
      "property_998",
    ],
  },
  {
    title: "Суждение №23",
    description: "Я считаю важным, чтобы работа обеспечивала мне",
    blockId: 22,
    questionElements: [
      {
        questionName: "1",
        text: "a) множество контактов с широким кругом интересных людей;",
      },
      {
        questionName: "2",
        text: "b) возможность установления и достижения целей;",
      },
      {
        questionName: "3",
        text: "c) возможность влиять на принятие решений;",
      },
      {
        questionName: "4",
        text: "d) высокий уровень заработной платы.",
      },
    ],
    bitrixFields: [
      "property_1001",
      "property_1002",
      "property_1003",
      "property_1004",
    ],
  },
  {
    title: "Суждение №24",
    description: "Я не думаю, чтобы мне нравилась бы работа, если",
    blockId: 23,
    questionElements: [
      {
        questionName: "1",
        text: "a) условия работы некомфортны, на рабочем месте грязно или шумно;",
      },
      {
        questionName: "2",
        text: "b) мало шансов влиять на других людей;",
      },
      {
        questionName: "3",
        text: "c) мало возможностей для достижения поставленных целей;",
      },
      {
        questionName: "4",
        text: "d) я не мог бы проявлять креативность и предлагать новые идеи.",
      },
    ],
    bitrixFields: [
      "property_1007",
      "property_1008",
      "property_1009",
      "property_1010",
    ],
  },
  {
    title: "Суждение №25",
    description: "В процессе организации работы важно",
    blockId: 24,
    questionElements: [
      {
        questionName: "1",
        text: "a) обеспечить чистоту и комфортность рабочего места;",
      },
      {
        questionName: "2",
        text: "b) создать условия для проявления работником самостоятельности;",
      },
      {
        questionName: "3",
        text: "c) предусмотреть возможность разнообразия и перемен;",
      },
      {
        questionName: "4",
        text: "d) обеспечить человеку широкие возможности контактов с другими людьми.",
      },
    ],
    bitrixFields: [
      "property_1013",
      "property_1014",
      "property_1015",
      "property_1016",
    ],
  },
  {
    title: "Суждение №26",
    description: "Скорее всего я не захотел бы работать там, где",
    blockId: 25,
    questionElements: [
      {
        questionName: "1",
        text: "a) условия работы некомфортны, т.е. шумно или грязно и т.д.;",
      },
      {
        questionName: "2",
        text: "b) мало возможностей осуществлять контакты с другими людьми;",
      },
      {
        questionName: "3",
        text: "c) работа не является интересной или полезной;",
      },
      {
        questionName: "4",
        text: "d) работа рутинная и задания редко меняются.",
      },
    ],
    bitrixFields: [
      "property_1019",
      "property_1020",
      "property_1021",
      "property_1022",
    ],
  },
  {
    title: "Суждение №27",
    description: "Работа приносит удовлетворение, вероятно, когда",
    blockId: 26,
    questionElements: [
      {
        questionName: "1",
        text: "a) люди признают и ценят хорошо выполненную работу;",
      },
      {
        questionName: "2",
        text: "b) существуют широкие возможности для маневра и проявления гибкости;",
      },
      {
        questionName: "3",
        text: "c) можно ставить перед собой сложные и смелые цели;",
      },
      {
        questionName: "4",
        text: "d) существует возможность лучше узнавать свои коллег.",
      },
    ],
    bitrixFields: [
      "property_1025",
      "property_1026",
      "property_1027",
      "property_1028",
    ],
  },
  {
    title: "Суждение №28",
    description: "Мне бы не понравилась работа, которая",
    blockId: 27,
    questionElements: [
      {
        questionName: "1",
        text: "a) не была бы полезной и не приносила бы чувства удовлетворения;",
      },
      {
        questionName: "2",
        text: "b) не содержала бы в себе стимула к переменам;",
      },
      {
        questionName: "3",
        text: "c) не позволяла бы мне устанавливать дружеские отношения с другими;",
      },
      {
        questionName: "4",
        text: "d) была бы неконкретной и не ставила бы сложных задач.",
      },
    ],
    bitrixFields: [
      "property_1031",
      "property_1032",
      "property_1033",
      "property_1034",
    ],
  },
  {
    title: "Суждение №29",
    description: "Я бы проявил стремление работать там, где",
    blockId: 28,
    questionElements: [
      {
        questionName: "1",
        text: "a) работа интересная и полезная;",
      },
      {
        questionName: "2",
        text: "b) люди могут устанавливать длительные дружеские взаимоотношения;",
      },
      {
        questionName: "3",
        text: "c) меня окружали бы интересные люди;",
      },
      {
        questionName: "4",
        text: "d) я мог бы оказывать влияние на принятие решений.",
      },
    ],
    bitrixFields: [
      "property_1037",
      "property_1038",
      "property_1039",
      "property_1040",
    ],
  },
  {
    title: "Суждение №30",
    description: "Я не считаю, что работа должна",
    blockId: 29,
    questionElements: [
      {
        questionName: "1",
        text: "a) предусматривать, чтобы человек большую часть времени работал в одиночку;",
      },
      {
        questionName: "2",
        text: "b) давать мало шансов на признание личных достижений работника;",
      },
      {
        questionName: "3",
        text: "c) препятствовать установлению взаимоотношений с коллегами;",
      },
      {
        questionName: "4",
        text: "d) состоять в основном из рутинных обязанностей.",
      },
    ],
    bitrixFields: [
      "property_1044",
      "property_1045",
      "property_1046",
      "property_1047",
    ],
  },
  {
    title: "Суждение №31",
    description: "Хорошо спланированная работа обязательно",
    blockId: 30,
    questionElements: [
      {
        questionName: "1",
        text: "a) предусматривает достаточный набор льгот и множество надбавок;",
      },
      {
        questionName: "2",
        text: "b) имеет четкие рекомендации по выполнению и должностные обязанности;",
      },
      {
        questionName: "3",
        text: "c) предусматривает возможность ставить цели и достигать их;",
      },
      {
        questionName: "4",
        text: "d) стимулирует и поощряет выдвижение новых идей.",
      },
    ],
    bitrixFields: [
      "property_1050",
      "property_1061",
      "property_1062",
      "property_1063",
    ],
  },
  {
    title: "Суждение №32",
    description: "Я считал бы, что работа не приносит удовлетворения, если",
    blockId: 31,
    questionElements: [
      {
        questionName: "1",
        text: "a) не смог выполнять сложную перспективную работу;",
      },
      {
        questionName: "2",
        text: "b) было бы мало возможностей для проявления креативности;",
      },
      {
        questionName: "3",
        text: "с) допускалась бы лишь малая доля самостоятельности;",
      },
      {
        questionName: "4",
        text: "d) сама суть работы не представлялась бы полезной или нужной.",
      },
    ],
    bitrixFields: [
      "property_1066",
      "property_1051",
      "property_1052",
      "property_1053",
    ],
  },
  {
    title: "Суждение №33",
    description: "Наиболее важными характеристиками должности являются",
    blockId: 32,
    questionElements: [
      {
        questionName: "1",
        text: "a) возможность для творческого подхода и оригинального нестандартного мышления;",
      },
      {
        questionName: "2",
        text: "b) важные обязанности, выполнение которых приносит удовлетворение;",
      },
      {
        questionName: "3",
        text: "c) возможность устанавливать хорошие взаимоотношения с коллегами;",
      },
      {
        questionName: "4",
        text: "d) наличие значимых целей, которых призван достичь работник.",
      },
    ],
    bitrixFields: [
      "property_1056",
      "property_1057",
      "property_1058",
      "property_1059",
    ],
  },
];

export const FIELDS = [
  "property_1072",
  "property_1073",
  "property_835",
  "property_836",
  "property_821",
  "property_822",
  "property_823",
  "property_824",
  "property_825",
  "property_828",
  "property_829",
  "property_830",
  "property_831",
  "property_832",
  "property_899",
  "property_900",
  "property_901",
  "property_902",
  "property_904",
  "property_905",
  "property_906",
  "property_907",
  "property_908",
  "property_882",
  "property_883",
  "property_884",
  "property_885",
  "property_886",
  "property_887",
  "property_888",
  "property_889",
  "property_890",
  "property_891",
  "property_893",
  "property_894",
  "property_895",
  "property_896",
  "property_909",
  "property_911",
  "property_912",
  "property_913",
  "property_914",
  "property_915",
  "property_918",
  "property_919",
  "property_920",
  "property_921",
  "property_917",
  "property_923",
  "property_924",
  "property_925",
  "property_926",
  "property_927",
  "property_930",
  "property_931",
  "property_932",
  "property_933",
  "property_934",
  "property_936",
  "property_937",
  "property_938",
  "property_939",
  "property_1074",
  "property_941",
  "property_942",
  "property_943",
  "property_944",
  "property_945",
  "property_947",
  "property_948",
  "property_949",
  "property_950",
  "property_951",
  "property_953",
  "property_954",
  "property_955",
  "property_956",
  "property_957",
  "property_959",
  "property_960",
  "property_961",
  "property_962",
  "property_963",
  "property_965",
  "property_966",
  "property_967",
  "property_968",
  "property_969",
  "property_971",
  "property_972",
  "property_973",
  "property_974",
  "property_975",
  "property_977",
  "property_978",
  "property_979",
  "property_980",
  "property_981",
  "property_983",
  "property_984",
  "property_985",
  "property_986",
  "property_987",
  "property_989",
  "property_990",
  "property_991",
  "property_992",
  "property_993",
  "property_995",
  "property_996",
  "property_997",
  "property_998",
  "property_999",
  "property_1001",
  "property_1002",
  "property_1003",
  "property_1004",
  "property_1005",
  "property_1007",
  "property_1008",
  "property_1009",
  "property_1010",
  "property_1011",
  "property_1013",
  "property_1014",
  "property_1015",
  "property_1016",
  "property_1017",
  "property_1019",
  "property_1020",
  "property_1021",
  "property_1022",
  "property_1023",
  "property_1025",
  "property_1026",
  "property_1027",
  "property_1028",
  "property_1029",
  "property_1031",
  "property_1032",
  "property_1033",
  "property_1034",
  "property_1035",
  "property_1037",
  "property_1038",
  "property_1039",
  "property_1040",
  "property_1042",
  "property_1044",
  "property_1045",
  "property_1046",
  "property_1047",
  "property_1048",
  "property_1050",
  "property_1061",
  "property_1062",
  "property_1063",
  "property_1064",
  "property_1066",
  "property_1051",
  "property_1052",
  "property_1053",
  "property_1054",
  "property_1056",
  "property_1057",
  "property_1058",
  "property_1059",
  "property_1060",
];

export let paramObject = {
  IBLOCK_TYPE_ID: "lists",
  IBLOCK_ID: "55",
  ELEMENT_ID: "83298",
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

const resultArray = FIELDS.map((item) => {
  return `FIELDS%5B${item}%5D`;
});

resultArray.forEach((item) => {
  paramObject[item] = "";
});

export const PARAM_OBJECT = Object.assign({}, paramObject);
