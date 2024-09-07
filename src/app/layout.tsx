import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextFlix",
  description: "Movies on demand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="h-full"
      lang="en"
    >
      <body className="bg-zinc-900 h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
