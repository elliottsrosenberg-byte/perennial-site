import type { Metadata } from "next";
import { Newsreader, Albert_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "Perennial",
  description:
    "Perennial supports furniture, lighting, and collectible designers build the business infrastructure that turns great work into a real livelihood.",
  icons: {
    icon: [{ url: "/FaviconSage.png", type: "image/png" }],
    apple: "/FaviconSage.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${albertSans.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GT-MJWBGMVS"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GT-MJWBGMVS');
        `}
      </Script>
    </html>
  );
}
