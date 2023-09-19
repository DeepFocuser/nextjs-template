// import localFont from 'next/font/local';
import { Inter as InterFont } from "next/font/google";
import "../styles/globals.css";
import { siteMetadata } from "@/config/seo";
import { ReactNode, Suspense } from "react";
import NavigationEvents from "./navigation-events";
import Loading from "./loading";
import GoogleAnalytics from "@/libs/googleanalytics";

export const metadata = { ...siteMetadata };

const interFont = InterFont({
  subsets: ["latin"],
  display: "swap"
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={interFont.className}
    >
    {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
      <GoogleAnalytics
        GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_TRACKING_ID}
      />
    )}
    <body className="container mx-auto cursor-default">
    <header>
    </header>
    <main>
      {children}</main>
    <Suspense fallback={<Loading />}>
      <NavigationEvents />
    </Suspense>
    </body>
    </html>
  );
}
