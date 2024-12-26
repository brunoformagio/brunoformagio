import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {MainWrapper} from "./components/wrapper/mainWrapper";

const montserrat = localFont({
  src: [
    {
      path: './fonts/Montserrat-Thin.woff',
      weight: '100',
      style: 'lighter',
    },
    {
      path: './fonts/Montserrat-Light.woff',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/Montserrat-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Montserrat-Bold.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Montserrat-Black.woff',
      weight: '900',
      style: 'black',
    },
  ],
})


export const metadata: Metadata = {
  title: "Bruno Formagio",
  description: "Web developer specializing in React and TypeScript and UX/UI design.",
  applicationName: "Bruno Formagio",
  keywords: ["frontend developer", "developer", "react", "typescript", "ts", "javascript", "ux", "ui", "design", "node", "nextjs", "senior developer", "bruno formagio"],
  creator: "Bruno Formagio",
  category: "Web Development",
  robots: "index, follow",
  twitter: { card: "summary_large_image", site: "@site", creator: "@BrunoFormagio_", images: "https://brunoformagio.com/meta/twitter-image.jpg" },
  appleWebApp: { title: "Bruno Formagio", statusBarStyle: "black-translucent" },
  
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased `}
      ><MainWrapper>
          {children}
      </MainWrapper>
      </body>
    </html>
  );
}
