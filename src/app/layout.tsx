import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free QR Code Generator | Create Custom QR Codes with Logo",
  description:
    "Generate unlimited free QR codes instantly. Add custom logos, download in high quality, and use for business or personal needs. No sign-up required.",
  keywords: [
    "free qr code generator",
    "qr code with logo",
    "custom qr code",
    "qr code maker",
    "create qr code",
    "qr code generator online",
    "free qr code maker",
    "qr code with custom logo",
    "business qr code",
    "download qr code",
  ],
  openGraph: {
    title: "Free QR Code Generator | Create Custom QR Codes with Logo",
    description:
      "Generate unlimited free QR codes instantly. Add custom logos, download in high quality, and use for business or personal needs. No sign-up required.",
    type: "website",
    locale: "en_US",
    url: "https://qrcodegenerator.vercel.app",
    siteName: "QR Code Generator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QR Code Generator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator | Create Custom QR Codes with Logo",
    description:
      "Generate unlimited free QR codes instantly. Add custom logos, download in high quality. No sign-up required.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
