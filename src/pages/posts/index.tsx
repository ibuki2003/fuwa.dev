import React from "react";
import Title from "components/title";
import type { GetStaticProps } from "next";
import { listPages } from "libs/mdx_serve";
import dayjs from "dayjs";

interface Props {
  posts: {
    href: string;
    title: string;
    date: string;
  }[];
}

export const config = {
  unstable_runtimeJS: false,
};

const MarkdownPage: React.FC<Props> = (props) => {
  return (
    <article>
      <Title>投稿一覧</Title>
      <h1>投稿一覧</h1>
      <ul>
        {props.posts.map((p) => (
          <li key={p.href}>
            <a href={p.href}>
              <>
                {p.date} {p.title}
              </>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default MarkdownPage;

const basePath = "./src/pages/posts/posts";

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return {
    props: {
      posts: (await listPages(basePath, true))
        .map((p) => {
          const title =
            p.data.title ?? (p.content.match(/^# (.+)$/m) ?? [null, null])[1];
          if (!title) throw new Error(`no title in post: ${p.path}`);
          if (!p.data.date) throw new Error(`no date in post: ${p.path}`);

          return {
            href: "/posts/" + p.path,
            title: title,
            date: dayjs(p.data.date ?? "").format("YYYY-MM-DD"),
          };
        })
        .sort((a, b) => (a.date < b.date ? 1 : a.date == b.date ? 0 : -1)),
    },
  };
};
