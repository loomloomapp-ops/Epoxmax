export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "rodzaje-pomieszczen",
    question: "Czy panele nadają się do każdego pomieszczenia?",
    answer:
      "Panele można dopasować do wielu typów wnętrz: mieszkań, domów, biur i lokali usługowych. Przy kontakcie pomożemy ocenić, które rozwiązanie będzie najlepsze dla konkretnej powierzchni i warunków w pomieszczeniu.",
  },
  {
    id: "czas",
    question: "Ile trwa metamorfoza wnętrza?",
    answer:
      "W wielu przypadkach odświeżenie powierzchni może być wykonane bardzo szybko — nawet w kilka godzin. Dokładny czas zależy od powierzchni, wybranego rozwiązania i warunków w pomieszczeniu.",
  },
  {
    id: "wzory",
    question: "Czy mogę wybrać wzór paneli?",
    answer:
      "Tak. Oferujemy różne wzory i style, aby dopasować wygląd paneli do charakteru wnętrza. Możemy zaproponować zarówno subtelne faktury, jak i wyraziste motywy dekoracyjne.",
  },
  {
    id: "polska",
    question: "Czy działacie na terenie całej Polski?",
    answer:
      "Tak, obsługujemy klientów z całej Polski. Niezależnie od miejscowości pomożemy dobrać wzór i odpowiedź na pytania techniczne.",
  },
  {
    id: "doradztwo",
    question: "Czy pomagacie dobrać odpowiedni wzór?",
    answer:
      "Tak. Po wysłaniu zapytania doradzimy, jaki wzór i styl będą najlepiej pasować do konkretnego wnętrza — uwzględniając światło, kolorystykę i funkcję pomieszczenia.",
  },
  {
    id: "remont",
    question: "Czy to rozwiązanie jest szybsze niż klasyczny remont?",
    answer:
      "Tak — główną zaletą paneli jest szybki efekt wizualnej zmiany bez długiego i uciążliwego remontu. Mniej kurzu, mniej hałasu, mniej dni wyłączenia pomieszczenia z użytkowania.",
  },
];
