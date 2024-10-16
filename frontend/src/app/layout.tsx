import "../styles/globals.css";

import Image from "next/image";
import { type Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "",
  description: "",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const baruSans = localFont({
  src: [
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/baru-sans/BaruSansDemo-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={baruSans.className}>
      <body className="relative min-h-screen bg-background">
        <Image
          className="absolute left-0 top-0 -z-10"
          src="/images/paws.svg"
          alt="Paws"
          width={300}
          height={300}
        />
        <Image
          className="absolute bottom-0 right-0 -z-10"
          src="/images/paws.svg"
          alt="Paws"
          width={300}
          height={300}
        />
        <Image
          className="absolute bottom-1/3 right-1/4 -z-10 hidden lg:block"
          src="/images/paws.svg"
          alt="Paws"
          width={300}
          height={300}
        />
        <div>{children}</div>
      </body>
    </html>
  );
}
