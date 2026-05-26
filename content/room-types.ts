export const ROOM_TYPES = [
  { value: "mieszkanie", label: "Mieszkanie" },
  { value: "dom", label: "Dom" },
  { value: "biuro", label: "Biuro" },
  { value: "salon", label: "Salon / gabinet usługowy" },
  { value: "kawiarnia", label: "Kawiarnia / restauracja" },
  { value: "sklep", label: "Sklep / showroom" },
  { value: "inne", label: "Inne pomieszczenie" },
] as const;

export type RoomTypeValue = (typeof ROOM_TYPES)[number]["value"];
