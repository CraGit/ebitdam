import "./globals.css";

import { Outfit, Playfair_Display } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="overflow-x-hidden antialiased font-outfit">
        {/* TODO: Remove the following element once you have read the documentation. */}
        {process.env.NODE_ENV === "development" && (
          <div
            style={{
              background: "#5163ba",
              padding: "1rem",
              textAlign: "center",
              fontSize: "0.85rem",
              color: "#fff",
            }}
          >
            <p>
              <strong>👋 Welcome to your new website!</strong> To customize the
              code and content of this site,{" "}
              <a
                href="https://github.com/prismicio-community/nextjs-starter-prismic-multi-language/tree/master/docs"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "underline" }}
              >
                see the documentation
              </a>
              . Remove this bar in <code>app/layout.js</code>.
            </p>
          </div>
        )}
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
