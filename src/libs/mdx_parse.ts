import { serialize } from "next-mdx-remote/serialize";
import { promises as fs } from "fs";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
import rehypeKatex from "rehype-katex";
import rehypeHightlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import "lowlight/lib/all"; // load all languages

import { visit } from "unist-util-visit";
type Transformer = import("unified").Transformer<
  import("mdast").Root,
  import("mdast").Root
>;
function remarkImgPath({ filePath }: { filePath: string }): Transformer | void {
  if (/\/index\.mdx?$/.test(filePath)) {
    return;
  }
  return (tree) => {
    return visit(tree, "image", (node: import("mdast").Image) => {
      if (node.url.startsWith("./")) node.url = "." + node.url;
    });
  };
}

async function parseMDX(file: string) {
  const content = await fs.readFile(file, { encoding: "utf-8" });
  const source = await serialize(content, {
    mdxOptions: {
      baseUrl: file,
      // prettier-ignore
      remarkPlugins: [
        remarkGfm,
        remarkMath,
        remarkBreaks,
        [remarkImgPath, { filePath: file }],
      ],
      // prettier-ignore
      rehypePlugins: [
        rehypeKatex,
        [rehypeHightlight, { subset: false }],
        rehypeSlug,
      ],
      format: file.split(".").at(-1) == "mdx" ? "mdx" : "md",
    },
    parseFrontmatter: true,
  });

  const fallbackTitle = (content.match(/^# (.+)$/m) ?? [null, null])[1];
  const title = (source.frontmatter?.title ?? fallbackTitle ?? "").trim();

  return {
    title,
    source,
  };
}

export default parseMDX;
