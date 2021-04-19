import React from 'react';
import { Link, graphql } from 'gatsby';
import {
  BlogPostArchivePropsData,
  transformBlogPostArchivePropsDataToBlogPosts,
} from './models/blog-post-archive-props-data';
import { BlogPost, NoPostsFound, PostSummary } from '@nx-gatsby-blogs/ui';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { BlogPostArchivePropsPageContext } from './models/blog-post-archive-props-page-context';

export interface BlogPostArchiveProps {
  data: BlogPostArchivePropsData;
  pageContext: BlogPostArchivePropsPageContext;
}

export function BlogPostArchive({ data, pageContext }: BlogPostArchiveProps) {
  const posts: BlogPost[] = transformBlogPostArchivePropsDataToBlogPosts(data);

  if (!posts || !posts.length) {
    return <NoPostsFound />;
  }

  return (
    <>
      {posts.map((post) => {
        return <PostSummary key={post.id} post={post}></PostSummary>;
      })}
      {pageContext.totalPages > 0 && (
        <Pagination
          color="primary"
          page={pageContext.pageNumber}
          count={pageContext.totalPages}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/blogs/${item.page}`}
              {...item}
            />
          )}
        />
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
        featuredImage {
          node {
            id
            altText
            link
          }
        }
      }
    }
  }
`;
