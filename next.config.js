module.exports = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg;
    }
}

const withMDX = require('@next/mdx')({
    options: {
      extension: /\.(md|mdx)$/,
      remarkPlugins: [],
      rehypePlugins: [],
    },
  });
module.exports = withMDX()