/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '../../theme.config$': path.join(__dirname, 'src/semantic/theme.config'),
      },
    },
  });
};

exports.onCreatePage = async ({page,boundActionCreators}) => {    
  const { createPage } = boundActionCreators

  if (page.path.match(/^\/home/)) {
    page.matchPath = `/home/*`
    createPage(page)
  }
} 