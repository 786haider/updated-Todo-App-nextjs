import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Todo-App",
  description: "Create By Haider Hussain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500"
      >
        {children}
      </body>
    </html>
  );
}
