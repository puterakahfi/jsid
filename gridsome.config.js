// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Javascript Indonesia",
  siteUrl: 'https://puterakahfi.github.io',
  pathPrefix: '/jsid',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "awesome-js-dev-id/json/**/*.json",
        typeName: "Devs",
        remark: {
          // remark options
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "content/community/**/*.json",
        typeName: "Community",
        remark: {
          // remark options
        }
      }
    }
  ]
};
