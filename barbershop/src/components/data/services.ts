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
  {
    id: "skin-fade",
    category: "Haircuts",
    name: "Skin Fade",
    priceCad: 40,
    durationMin: 40,
    bookingUrl:
      "https://new-style-barbershop-milton.cloveronline.com/",
  },
  {
    id: "beard-trim",
    category: "Bearding",
    name: "Beard Trim",
    priceCad: 25,
    durationMin: 20,
    bookingUrl:
      "https://new-style-barbershop-milton.cloveronline.com/",
  },
  {
    id: "kids-cut",
    category: "Kids",
    name: "Kids Haircut",
    priceCad: 30,
    durationMin: 30,
    bookingUrl:
      "https://new-style-barbershop-milton.cloveronline.com/",
  },
];