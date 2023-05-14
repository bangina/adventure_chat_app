import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../assets/css/globalStyles";
import { theme } from "../assets/css/theme";
import { RecoilRoot } from "recoil";
import { AnimatePresence } from "framer-motion";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/AppleSDGothicNeoB.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/AppleSDGothicNeoSB.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/AppleSDGothicNeoM.ttf",
      weight: "500",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AnimatePresence>
          <GlobalStyle />
          <main className={myFont.className}>
            <Component {...pageProps} />
          </main>
        </AnimatePresence>
      </ThemeProvider>
    </RecoilRoot>
  );
}
