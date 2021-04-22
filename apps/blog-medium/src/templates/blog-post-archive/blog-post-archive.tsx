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
  query MediumPostArchive($offset: Int!, $postsPerPage: Int!) {
    allMediumPost(
      sort: { fields: [createdAt], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        author {
          imageId
          username
          bio
          name
        }
        id
        createdAt(formatString: "MMMM DD, YYYY")
        title
        uniqueSlug
        virtuals {
          previewImage {
            imageId
          }
          subtitle
        }
      }
    }
  }
`;
