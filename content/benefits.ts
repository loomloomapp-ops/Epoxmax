export type Benefit = {
  id: string;
  index: string;
  title: string;
  description: string;
  feature?: boolean;
};

export const BENEFITS: Benefit[] = [
  {
    id: "metamorfoza",
    index: "01",
    title: "Szybka metamorfoza",
    description:
      "Odświeżenie wybranej powierzchni może zająć nawet kilka godzin. Wnętrze zyskuje nowy charakter w tym samym dniu.",
    feature: true,
  },
  {
    id: "balagan",
    index: "02",
    title: "Mniej bałaganu",
    description:
      "Bez wielodniowego remontu, pyłu i dezorganizacji codziennego życia w mieszkaniu lub firmie.",
  },
  {
    id: "wybor",
    index: "03",
    title: "Dowolny wzór na zamówienie",
    description:
      "Realizujemy autorskie projekty według Twojej wizji — od subtelnych faktur po wyraziste motywy klasy premium.",
  },
  {
    id: "przestrzenie",
    index: "04",
    title: "Do wielu przestrzeni",
    description:
      "Rozwiązanie sprawdza się w mieszkaniach, domach, biurach, salonach, kawiarniach i lokalach usługowych.",
  },
  {
    id: "efekt",
    index: "05",
    title: "Efekt wizualny od razu",
    description:
      "Wnętrze zyskuje nowy charakter bez kosztownej przebudowy. Zmianę widać natychmiast po montażu.",
  },
  {
    id: "polska",
    index: "06",
    title: "Obsługa w całej Polsce",
    description:
      "Realizujemy zamówienia niezależnie od lokalizacji — od dużych miast po mniejsze miejscowości.",
  },
];
