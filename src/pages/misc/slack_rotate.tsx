import React from "react";

import Title from "components/title";

const SlackRotate: React.FC = () => (
  <>
    <Title>yay</Title>
    <h1>Slackを回す</h1>
    <img
      src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-4nzzs1/Slack_Mark_Web.png"
      style={{
        animation: "rotate-anime 2s linear infinite",
      }}
    />

    <style>
      {`
@keyframes rotate-anime {
    0%  {transform: rotate(0);}
    100%  {transform: rotate(360deg);}
}
`}
    </style>
  </>
);

export default SlackRotate;
