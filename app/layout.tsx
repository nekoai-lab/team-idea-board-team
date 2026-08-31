import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KAIZEN BOARD",
  description: "チーム開発演習用の社内改善アイデアボード",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
