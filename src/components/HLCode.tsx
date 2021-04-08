import React from "react";
import hljs from "highlight.js";

interface Props {
  children: string;
  className: string;
}

const HLCode: React.FC<Props> = ({ children, className }) => {
  const language = className?.split(" ").reduce<string | null>((prev, cn) => {
    if (prev) return prev;
    if (!cn.startsWith("language-")) return null;
    return cn.substr(9);
  }, null);

  if (!language)
    return (
      <pre>
        <code>{children}</code>
      </pre>
    );

  return (
    <code
      dangerouslySetInnerHTML={{
        __html: hljs.highlight(children, { language, ignoreIllegals: true })
          .value,
      }}
      className="hljs"
    />
  );
};

export default HLCode;
