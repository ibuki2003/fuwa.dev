import React from "react";

interface Props {
  children: React.ReactNode | Array<React.ReactNode>;
}

function nl2br(c: React.ReactNode, i: number) {
  if (typeof c !== "string") return c;
  return c.split("\n").flatMap<React.ReactNode[]>((frag, j) => {
    if (j > 0)
      return [
        <br key={`${i}-${j}-0`} />,
        <React.Fragment key={`${i}-${j}-1`}>{frag}</React.Fragment>,
      ];
    return [<React.Fragment key={`${i}-${j}`}>{frag}</React.Fragment>];
  });
}

const RawParagraph: React.FC<Props> = ({ children }) => {
  const new_children = React.useMemo(() => {
    if (!Array.isArray(children)) return nl2br(children, 0);
    return children.flatMap(nl2br);
  }, [children]);
  return <p>{new_children}</p>;
};

export default RawParagraph;
