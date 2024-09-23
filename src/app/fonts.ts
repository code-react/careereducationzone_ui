import { Inter, Roboto_Mono, Montserrat, Nunito, Outfit } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});
export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});
export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
