import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "Kshitij Chauhan",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`}>
        <Nav />
        <main className="max-w-6xl mx-auto px-20 max-md:px-10 py-4">
          {children}
        </main>
      </body>
    </html>
  );
}
