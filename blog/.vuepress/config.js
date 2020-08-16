module.exports = {
  title: "LongTean 's blog",
  description: 'together',
  base: '/alog/',
  theme: require.resolve("../../theme/vuepress-theme-medium/index.js"), // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/longmimi',
        }
      ],
      copyright: [
        {
          text: 'LongTean ',
          link: 'https://github.com/longmimi',
        },
        {
          text: 'Copyright © 2017-present ',
          link: '',
        },
      ],
    },
  },
}
