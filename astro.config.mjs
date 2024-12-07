import { defineConfig } from 'astro/config';
import path from 'path';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkBreaks,
      myMarkdownPlugin,
      remarkMath,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
    ],
    extendDefualtPlugins: true,
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
});

function myMarkdownPlugin () {
  return function (_tree, file) {
    // skip if file is in {cwd}/src/content/
    if (path.relative(process.cwd(), file.history.at(-1)).startsWith('src/content/')) return;

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
