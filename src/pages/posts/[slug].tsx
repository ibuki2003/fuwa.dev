import React from "react";
import Title from "components/title";
import type { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import dayjs from "dayjs";

import parseMDX from "libs/mdx_parse";
import { listPages, findPage } from "libs/mdx_serve";

interface Props {
  title: string;
  source: MDXRemoteSerializeResult;

  date: string;
}

export const config = {
  unstable_runtimeJS: false,
};

const MarkdownPage: React.FC<Props> = (props) => {
  return (
    <article>
      <Title>{props.title}</Title>
      <p id="post-header">
        <a href="/posts/">投稿</a>
        &nbsp;&raquo;&nbsp;
        <time>{props.date}</time>
      </p>

      <MDXRemote {...props.source} />
    </article>
  );
};

export default MarkdownPage;

const basePath = "./src/pages/posts/posts";

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.slug ?? "";
  if (Array.isArray(slug)) throw new Error();
  const file = await findPage(basePath, slug);
  const { title, source } = await parseMDX(file);

  const date = source.frontmatter?.date;
  if (date === undefined) throw new Error("no date");
  const datestr = dayjs(date).format("YYYY-MM-DD");
  source.frontmatter = {};

  return {
    props: { title, source, date: datestr },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: (await listPages(basePath)).map((p) => ({
      params: { slug: p.path },
    })),
    fallback: false,
  };
};
