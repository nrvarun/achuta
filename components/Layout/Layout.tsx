import React from "react";
import Head from "next/head";
import Header from "@components/Header";
import { motion } from "framer-motion";

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
      <div className="bg-black">
        <Header isScrolling={hasScroll} />
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${!hasScroll ? "mt-0" : ""}`}
        >
          {children}
        </motion.main>
      </div>
    </>
  );
};

export default Layout;
