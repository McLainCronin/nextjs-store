import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Header from "./Header";

export const metadata = {
  title: "Fruit Shop",
  description: "Hyperinflated fruit store - best prices 2077",
};

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>

        <body className={'bg-slate-900 min-h-screen flex flex-col relative ' + inter.className}>
          <Header />
        <div className="flex-1">
          {children}
        </div>
        <footer className="flex items-center flex-wrap justify-center border-t border-solid border-slate-300 p-6 md:p-8">
          <Link href='https://www.linkedin.com/in/mclain-cronin-963781117/' target="_blank">
            <i className="fa-brands fa-linkedin text-slate-600 hover:text-slate-400 cursor-pointer text-2xl sm:text-3xl md:text-4xl"></i>
          </Link>
        </footer>
        <div id="portal"></div>
      </body>
    </html>
  );
}
