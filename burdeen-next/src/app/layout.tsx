import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const themeInit = `
(function(){
  try {
    var d = document.documentElement;
    var s = localStorage.getItem("theme");
    if (s === "dark" || (!s && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      d.classList.add("dark");
    } else {
      d.classList.remove("dark");
    }
  } catch (e) {}
})();
`;

export const metadata: Metadata = {
  title: "Burdeen",
  description: "Burdeen — wooden and composite doors and furniture, Saudi Arabia.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e8e6e1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
        {children}
      </body>
    </html>
  );
}

