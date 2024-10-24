import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kshitij Chauhan",
  description: "",
  viewport: {
    width: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="max-w-6xl h-[520px] mx-auto px-20 max-md:px-5 py-2 md:flex md:flex-col justify-center items-center">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
