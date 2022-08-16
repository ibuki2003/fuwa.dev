import React from "react";
import Title from "components/title";
import type { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { promises as fs } from "fs";
import glob from "fast-glob";
import parseMDX from "mdx_lib";

interface Props {
  title: string;
  source: MDXRemoteSerializeResult;
}

export const config = {
  unstable_runtimeJS: false,
};

const MarkdownPage: React.FC<Props> = (props) => {
  return (
    <>
      <Title>{props.title}</Title>
      <MDXRemote {...props.source} />
    </>
  );
};

export default MarkdownPage;

const extensions = ["md", "mdx"];
const basePath = "./src/pages";

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug;
  if (!slug || !Array.isArray(slug)) throw new Error();
  const path = slug.join("/");
  const file = await Promise.any(
    extensions.flatMap((e) =>
      ["", "/index"].map(
        (suffix) =>
          new Promise<string>((resolve, reject) => {
            const p = `${basePath}/${path}${suffix}.${e}`;
            fs.stat(p)
              .then((s) => {
                s.isFile() ? resolve(p) : reject();
              })
              .catch(reject);
          })
      )
    )
  );
  const { title, source } = await parseMDX(file);

  return {
    props: { title, source },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (
    await glob(`./**/*.(${extensions.join("|")})`, {
      dot: true,
      cwd: basePath,
      onlyFiles: true,
    })
  ).map((f) => f.replace(/\.\w+$/, "").replace(/\/index$/, ""));

  return {
    paths: paths.map((p) => ({ params: { slug: p.split("/") } })),
    fallback: false,
  };
};
