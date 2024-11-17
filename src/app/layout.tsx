import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "@/styles/styles.scss";
import GlobalProvider from "./GlobalProvider";
import CountdownTimeType from "@/type/CountdownType";
import { countdownTime } from "@/store/countdownTime";
import dynamic from "next/dynamic";

const serverTimeLeft: CountdownTimeType = countdownTime() || {
  minutes: 0,
  seconds: 0,
}; // Fallback to avoid potential SSR issues

const instrument = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ImagingGifts",
  description: "Multipurpose eCommerce Template",
};

const ShopMainMenu = dynamic(() => import("@/components/Shop/ShopMainMenu"), {
  ssr: false,
});
const TopNavOne = dynamic(() => import("@/components/Home/TopNavOne"), {
  ssr: false,
});
const ModalCart = dynamic(() => import("@/components/Modal/ModalCart"), {
  ssr: false,
});
const ModalWishlist = dynamic(
  () => import("@/components/Modal/ModalWishlist"),
  { ssr: false }
);
const ModalSearch = dynamic(() => import("@/components/Modal/ModalSearch"), {
  ssr: false,
});
const ModalQuickview = dynamic(
  () => import("@/components/Modal/ModalQuickview"),
  { ssr: false }
);
const ModalCompare = dynamic(() => import("@/components/Modal/ModalCompare"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GlobalProvider>
      <html lang="en">
        <body className={instrument.className}>
          {/* Render client-side components dynamically */}
          <TopNavOne
            props="style-marketplace bg-[#263587] border-b border-surface1"
            slogan="New customers save 1ss0% with the code GET10"
          />
          <ShopMainMenu />
          {children}
          <ModalCart serverTimeLeft={serverTimeLeft} />
          <ModalWishlist />
          <ModalSearch />
          <ModalQuickview />
          <ModalCompare />
        </body>
      </html>
    </GlobalProvider>
  );
}
