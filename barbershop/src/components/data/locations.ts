export type Location = {
  name: string;
  addressLines: string[];
  phone: string;
  hours: Array<{ label: string; value: string }>;
  bookingUrl: string;
  directionsUrl: string;
  mapEmbedUrl: string;
};

export const locations: Location[] = [
  {
    name: "Milton",
    addressLines: ["Milton, ON", "Canada"],
    phone: "+1 (000) 000-0000",
    hours: [
      { label: "Mon–Fri", value: "10:00 AM – 8:00 PM" },
      { label: "Sat", value: "10:00 AM – 6:00 PM" },
      { label: "Sun", value: "Closed" },
    ],
    bookingUrl: "https://new-style-barbershop-milton.cloveronline.com/",
    directionsUrl: "https://www.google.com/maps",
    // Вставь сюда embed link из Google Maps (Share → Embed a map)
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=",
  },
];