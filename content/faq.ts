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
      "Panele sprawdzają się w wielu typach wnętrz: mieszkaniach, domach, biurach i lokalach usługowych. Każdą realizację wykonujemy pod wymiar konkretnej powierzchni i warunków panujących w pomieszczeniu.",
  },
  {
    id: "czas",
    question: "Ile trwa metamorfoza wnętrza?",
    answer:
      "W wielu przypadkach odświeżenie powierzchni może być wykonane bardzo szybko — nawet w kilka godzin. Dokładny czas zależy od powierzchni, wybranego rozwiązania i warunków w pomieszczeniu.",
  },
  {
    id: "wzory",
    question: "Czy mogę mieć własny, dowolny wzór?",
    answer:
      "Tak. To Ty decydujesz o wzorze — realizujemy indywidualne, autorskie projekty według Twojej wizji. Od subtelnych faktur po wyraziste motywy dekoracyjne, w prestiżowym wykonaniu premium.",
  },
  {
    id: "polska",
    question: "Czy działacie na terenie całej Polski?",
    answer:
      "Tak, obsługujemy klientów z całej Polski. Niezależnie od miejscowości zrealizujemy Twój projekt i odpowiemy na pytania techniczne.",
  },
  {
    id: "doradztwo",
    question: "Czy realizujecie własne projekty i wzory klienta?",
    answer:
      "Tak. Wykonujemy panele według Twojego pomysłu lub dostarczonego projektu — to indywidualna, autorska realizacja dopasowana pod wymiar i charakter wnętrza.",
  },
  {
    id: "remont",
    question: "Czy to rozwiązanie jest szybsze niż klasyczny remont?",
    answer:
      "Tak — główną zaletą paneli jest szybki efekt wizualnej zmiany bez długiego i uciążliwego remontu. Mniej kurzu, mniej hałasu, mniej dni wyłączenia pomieszczenia z użytkowania.",
  },
];
