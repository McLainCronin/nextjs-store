import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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
        <body className={'min-h-screen flex flex-col relative ' + inter.className}>
        <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between">
          <Link href={'/'}>
           <h1 className="uppercase cursor-pointer hover:scale-110">Fruit Shop</h1>
          </Link>
          <i class="fa-solid cursor-pointer hover:text-slate-500 fa-cart-shopping"></i>
        </header>
        <div className="flex-1">
          {children}
        </div>
        <footer>footer</footer>
      </body>
    </html>
  );
}
