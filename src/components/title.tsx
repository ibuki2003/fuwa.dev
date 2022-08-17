import React from "react";
import Head from "next/head";

const siteTitle = "ふわわあのへや";

const Title: React.FC<{ children: string }> = ({ children }) => {
  const realTitle = children === "" ? siteTitle : `${children} - ${siteTitle}`;
  return (
    <Head>
      <title>{realTitle}</title>
    </Head>
  );
};
export default Title;
