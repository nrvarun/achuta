import React from "react";
import Head from "next/head";
import Header from "@components/Header";

const Layout = ({ children, title, hasScroll }: any) => {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/SFPro/woff/SF-Pro-Display-Bold.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SFPro/woff/SF-Pro-Display-Heavy.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SFPro/woff/SF-Pro-Display-Semibold.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/SFPro/woff/SF-Pro-Display-Medium.woff"
          as="font"
          crossOrigin=""
        />
        <title>{title}</title>
      </Head>
      <div>
        <Header isScrolling={hasScroll} />
        <main className={`${!hasScroll ? "mt-0" : ""}`}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
