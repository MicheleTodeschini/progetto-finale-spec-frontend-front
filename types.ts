export type Island = {
  id: number;
  title: string;
  category: string;
  sea: string;
  country: string;
  image: string;
  continent: "Asia" | "Europa" | "Africa" | "Nord America" | "Sud America" | "Oceania";
  characteristics: string;
  endemicSpecies: boolean;
  climate: "Tropicale" | "Temperato" | "Subartico" | "Arido";
  population?: number;
  createdAt: string;
  updatedAt: string;
};