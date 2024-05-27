import { defineConfig } from 'astro/config';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      myMarkdownPlugin,
      remarkMath,
    ],
    rehypePlugins: [
      rehypeKatex,
    ],
    extendDefualtPlugins: true,
  },
});

function myMarkdownPlugin () {
  return function (_tree, file) {
    const fm = file.data.astro.frontmatter;
    if (!fm.layout) {
      fm.layout = '@/layouts/markdown.astro'
    }

    if (!fm.title) {
      const m = /^# *(.+)$/m.exec(file.value);
      if (m) fm.title = m[1];
    }
  }
}
