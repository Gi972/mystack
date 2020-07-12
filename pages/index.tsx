/** @jsx jsx */
import Head from "next/head";
import { ThemeProvider, jsx } from "theme-ui";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <label>Caraïbes</label>
          <div
            sx={{
              fontWeight: "bold",
              fontSize: 4, // picks up value from `theme.fontSizes[4]`
              color: "primary", // picks up value from `theme.colors.primary`
            }}>
            Hello
          </div>
        </main>
        <footer></footer>
      </div>
    </ThemeProvider>
  );
}
