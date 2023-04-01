import "@/styles/globals.css";

import { Inter, Open_Sans, Playfair_Display } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className="font-inter">
      <Component {...pageProps} />
    </div>
  );
}
