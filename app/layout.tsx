import type { Metadata } from "next";
import "@/src/components/styles/globals.css"
import "@/src/components/styles/index.css"
import { Footer } from "@/src/components/ui/footer";
import { Nav_bar } from '@/src/components/ui/nav-bar';

export const metadata: Metadata = {
  title: "Daniel.Dev",
  icons:{
    icon:[{url:'DNV.png'}]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav_bar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
