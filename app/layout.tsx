import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Softly Covered Bakery - Fresh Daily",
  description: "Premium artisan bakery offering fresh breads, pastries, and cakes daily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-cream-50">
        {children}
      </body>
    </html>
  );
}
