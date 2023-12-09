"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "@/redux/ReduxProvier";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  const path = usePathname();

  let content = null;

  if (path === "/") {
    content = <div>Content for home page</div>;
  } else if (path === "/treatments") {
    content = <div>Content for treatments page</div>;
  } else if (path === '/ourSpace') {
    content = <div>Content for ourSpace page</div>;
  } else if (path === '/testimonials') {
    content = <div>Content for testimonials page</div>;
  } else if (path === '/links') {
    content = <div>Content for links page</div>;
  } else if (path === '/contact') {
    content = <div>Content for contact page</div>;
  } else if (path === '/pics') {
    content = <div>Content for pics page</div>;
  }

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
              <div className="flex flex-row w-full">
                {content}
                <div className="w-screen">{children}</div>
              </div>
            </ReduxProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}