export type Service = {
  id: string;
  category: "Haircuts" | "Bearding" | "Kids" | "Other";
  name: string;
  priceCad: number;
  durationMin: number;
  bookingUrl: string;
};

export const services: Service[] = [
  {
    id: "mens-haircut",
    category: "Haircuts",
    name: "Men’s Haircut",
    priceCad: 35,
    durationMin: 30,
    bookingUrl:
      "https://new-style-barbershop-milton.cloveronline.com/services/mens-haircut-Q3G7PGS53K012",
  },
];