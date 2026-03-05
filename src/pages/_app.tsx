import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { EB_Garamond, Hanken_Grotesk } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${ebGaramond.variable} ${hankenGrotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
