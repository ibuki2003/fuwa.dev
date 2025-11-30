import { defineConfig } from 'astro/config';
import path from 'path';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkDirective from 'remark-directive';

import mdx from "@astrojs/mdx";

import { visit } from "unist-util-visit";
import { h } from 'hastscript';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkGfm,
      remarkBreaks,
      commonStylePlugin,
      remarkDirective,
      myDirectivesPlugin,
      remarkMath,
      remarkImgAttrs,
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

function commonStylePlugin () {
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

function myDirectivesPlugin() {
  return function (tree) {
    visit(tree, (node) => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'textDirective'
      ) {
        const data = node.data || (node.data = {});
        const tagName = node.type === 'textDirective' ? 'span' : 'div';

        data.hName = tagName;
        data.hProperties = h(tagName, node.attributes || {}).properties;
        console.log(data);
        data.hProperties.class = [ `md-directive`, `md-directive-${node.name}` ].concat(data.hProperties.class || []);
      }
    });
  };
}

function remarkImgAttrs() {
  function replace(source, target) {
    for (const property in source) { delete source[property]; }
    Object.assign(source, target);
  }

  function parseAttrs(alt) {
    const attrs = {};
    // "ALT TEXT {key1=value1, key2=value2}"
    const m = alt.match(/^(.*?)\s*{([^}]+)}$/);
    if (m) {
      const attrStr = m[2];
      const attrPairs = attrStr.split(',').map((pair) => pair.trim());
      for (const pair of attrPairs) {
        const pos = pair.indexOf('=');
        if (pos === -1) {
          attrs[pair] = true;
        } else {
          const key = pair.slice(0, pos).trim();
          const value = pair.slice(pos + 1).trim();
          attrs[key] = value;
        }
      }
      return { attrs, alt: m[1] };
    }
    return { attrs: {}, alt };
  }

  return (tree) => {
    visit(tree, 'image', (node) => {
      if (!node.alt) return;
      const { attrs, alt } = parseAttrs(node.alt);

      node.alt = alt;

      if (!attrs) return;

      const caption = attrs.caption || (attrs.caption_alt && alt);

      if (caption) {
        const figElm = {
          type: 'element',
          data: { hName: 'figure' },
          children: [
            { ...node },
            {
              type: 'element',
              data: { hName: 'figcaption' },
              children: [{ type: 'text', value: caption, }],
            },
          ],
        };
        replace(node, figElm);
      }

      if (attrs.width) {
        // set style
        node.data ??= {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.style = node.data.hProperties.style || '';
        node.data.hProperties.style += `width: ${attrs.width};`;
      }
      if (attrs.maxWidth) {
        // set style
        node.data ??= {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.style = node.data.hProperties.style || '';
        node.data.hProperties.style += `max-width: ${attrs.maxWidth};`;
      }
    });
  };
}

