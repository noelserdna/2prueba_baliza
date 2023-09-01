import './globals.css'
import { FC, PropsWithChildren } from "react";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/consts";
import { Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export const metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

const space_grotesk = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin-ext"],
});

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="en" className={space_grotesk.className}>
      <body>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
