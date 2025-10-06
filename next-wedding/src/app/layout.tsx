import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Invitations",
  description: "Online wedding invitation experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/vendor.css" />
        <link rel="stylesheet" href="/assets/css/styles.css" />
        <link rel="stylesheet" href="/assets/css/gallery-grid.css" />
        <link rel="stylesheet" href="/assets/css/demo.css" />
      </head>
      <body className="theme-slides ss-preload" id="top">
        {children}
      </body>
    </html>
  );
}
