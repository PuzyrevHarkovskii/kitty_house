import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Гостиница для кошек Kitty House, Санкт-Петербург метро Купчино",
  description:
    "Уютный отель для кошек в Санкт-Петербурге, недалеко от метро Купчино. Мы предлагаем комфортные номера, заботливый уход и развлекательные активности для ваших пушистых друзей. Доверьте нам своих котиков, пока вы находитесь в поездке — они будут в надежных руках!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
