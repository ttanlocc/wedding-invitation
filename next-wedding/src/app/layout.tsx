import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
        <Script src="/assets/js/plugins.js" strategy="afterInteractive" />
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js" strategy="afterInteractive" />
        <Script id="baguette-init" strategy="afterInteractive">
          {`if (window?.baguetteBox) { baguetteBox.run('.tz-gallery'); }`}
        </Script>
      </body>
    </html>
  );
}
