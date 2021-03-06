import path from 'path'

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    [
      "react-static-plugin-mdx",
      {
        parseFrontMatter: true,
        mdxOptions: {
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex]
        },
      },
    ],
    'react-static-sass',
    'prevent-inline',
  ],
}
