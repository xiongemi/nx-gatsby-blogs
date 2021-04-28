import { Box, Grid } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { BlogPost, PostSummary } from '@nx-gatsby-blogs/ui';
import { graphql, Link } from 'gatsby';
import React from 'react';

import {
  BlogPostArchivePropsData,
  transformBlogPostArchivePropsDataToBlogPosts,
} from './models/blog-post-archive-props-data';

export interface BlogPostArchiveProps {
  data: BlogPostArchivePropsData;
  pageContext: {
    offset: number;
    postsPerPage: number;
    currentPageNumber: number;
    totalPageCount: number;
  };
}

export function BlogPostArchive({ data, pageContext }: BlogPostArchiveProps) {
  const posts: BlogPost[] = transformBlogPostArchivePropsDataToBlogPosts(data);

  return (
    <>
      <Grid container spacing={5}>
        {posts.map((post) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostSummary post={post}></PostSummary>
            </Grid>
          );
        })}
      </Grid>
      {pageContext.totalPageCount > 1 && (
        <Box display="flex" justifyContent="center" m={2}>
          <Pagination
            color="primary"
            page={pageContext.currentPageNumber}
            count={pageContext.totalPageCount}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/blogs/${item.page}`}
                {...item}
              />
            )}
          />
        </Box>
      )}
    </>
  );
}

export default BlogPostArchive;

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        id
        excerpt
        date(formatString: "MMMM DD, YYYY")
        title
        uri
        featuredImage {
          node {
            altText
            localFile {
              url
            }
          }
        }
      }
    }
  }
`;
