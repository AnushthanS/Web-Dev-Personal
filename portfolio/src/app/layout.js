import {Raleway} from "next/font/google"
import "./globals.css";

export const metadata = {
  title: "Anushthan Saxena",
  description: "This is my portfolio website",
};

const raleway = Raleway({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className}, bg-color3 relative`}>
        {children}
        </body>
    </html>
  );
}
