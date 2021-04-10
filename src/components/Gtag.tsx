import React from "react";
import { Head } from "react-static";

const gtag_id = "UA-132805532-1";

const GtagScripts: React.FC = () => {
  if (process.env.NODE_ENV !== "production") return <></>;
  return (
    <Head>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag_id}`}
      ></script>
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag_id}');
        `}</script>
    </Head>
  );
};
export default GtagScripts;
