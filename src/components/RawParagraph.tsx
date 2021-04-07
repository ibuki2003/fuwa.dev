import React from "react";

interface Props {
  children: React.ReactNode | Array<React.ReactNode>;
}

function nl2br(c: React.ReactNode) {
  if (typeof c !== "string") return c;
  return c.split("\n").flatMap<React.ReactNode[]>((frag, i) => {
    // eslint-disable-next-line react/jsx-key
    if (i > 0) return [<br />, frag];
    return [frag];
  });
}

const RawParagraph: React.FC<Props> = ({ children }) => {
  const new_children = React.useMemo(() => {
    if (!Array.isArray(children)) return nl2br(children);
    return children.flatMap(nl2br);
  }, [children]);
  return <p>{new_children}</p>;
};

export default RawParagraph;
