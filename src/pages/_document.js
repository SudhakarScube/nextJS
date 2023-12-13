import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" as="font" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />   

        {/* Fav icon */}
        <link
          data-cms-original-href="https://images.ctfassets.net/f8prwnjrws8j/56VgOLlzKEEuInAoqFOYSv/88cee937a24bdf562483ae9bef1a5b5e/favicon.webp?h=250"
          href="https://images.ctfassets.net/f8prwnjrws8j/56VgOLlzKEEuInAoqFOYSv/88cee937a24bdf562483ae9bef1a5b5e/favicon.webp?h=250"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
