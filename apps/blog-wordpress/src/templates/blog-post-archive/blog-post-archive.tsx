import { BlogPost, PostSummaryList } from '@nx-gatsby-blogs/ui';
import { graphql } from 'gatsby';
import React from 'react';

import {
  BlogPostArchivePropsData,
  transformBlogPostArchivePropsDataToBlogPosts,
} from './models/blog-post-archive-props-data';
import { BlogPostArchivePropsPageContext } from './models/blog-post-archive-props-page-context';

export interface BlogPostArchiveProps {
  data: BlogPostArchivePropsData;
  pageContext: BlogPostArchivePropsPageContext;
}

export function BlogPostArchive({ data, pageContext }: BlogPostArchiveProps) {
  const posts: BlogPost[] = transformBlogPostArchivePropsDataToBlogPosts(data);

  return (
    <PostSummaryList
      posts={posts}
      currentPageNumber={pageContext.pageNumber}
      totalPageCount={pageContext.totalPages}
    />
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
        author {
          node {
            firstName
            lastName
            name
            uri
            avatar {
              url
            }
          }
        }
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
