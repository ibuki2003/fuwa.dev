import React from "react";
import { Head } from "react-static";

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

export const TitleH1: React.FC<{ children: string; title?: string | null }> = ({
  children,
  title,
}) => (
  <>
    {title !== null && <Title>{title || children}</Title>}
    <h1>{children}</h1>
  </>
);
