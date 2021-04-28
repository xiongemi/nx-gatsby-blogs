/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require(`path`);
const chunk = require(`lodash/chunk`);

const postsPerPage = 6;

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        nodes {
          id
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data.allWpPost.nodes;
}

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async (gatsbyUtilities) => {
  // Query our posts from the GraphQL server
  const posts = await getPosts(gatsbyUtilities);

  // If there are no posts in WordPress, don't do anything
  if (!posts.length) {
    return;
  }

  // And a paginated archive
  await createBlogPostArchive({ posts, gatsbyUtilities });
};

/**
 * This function creates all the individual blog pages in this site
 */
async function createBlogPostArchive({ posts, gatsbyUtilities }) {
  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage);
  const totalPageCount = postsChunkedIntoArchivePages.length;

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_, index) => {
      const currentPageNumber = index + 1;

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await gatsbyUtilities.actions.createPage({
        path: `${process.env.BLOGS_BASE_HREF}/${currentPageNumber}`,

        // use the blog post archive template as the page component
        component: path.resolve(
          `./src/templates/blog-post-archive/blog-post-archive.tsx`
        ),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,
          currentPageNumber,
          totalPageCount,
        },
      });
    })
  );
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getUsers({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query {
      allWpUser {
        nodes {
          id
          uri
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data.allWpUser.nodes;
}
