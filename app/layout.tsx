import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "VIP Auto",
  description: "VIP app, for outstanding car rent !!!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang='en'>
        <body className='relative'>
          <NavBar />
            {children}
          <Footer />
        </body>
      </html>
  );
}
