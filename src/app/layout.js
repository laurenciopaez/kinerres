"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "@/redux/ReduxProvier";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <head>
        <title>kinerres</title>
        </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <NextUIProvider>
            <ReduxProvider>
              <div className="flex flex-row w-full font-serif">
                {path === "/" 
                || path === "/treatments"
                || path === '/ourSpace'
                || path === '/testimonials'
                || path === '/links'
                || path === '/contact'
                || path === '/pics'
                ? null : (
                  <div></div>
                )}
                <div className="w-screen">{children}</div>
              </div>
            </ReduxProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
