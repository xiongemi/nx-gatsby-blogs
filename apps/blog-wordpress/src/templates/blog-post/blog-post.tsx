import { Container } from '@material-ui/core';
import { PostDetails } from '@nx-gatsby-blogs/ui';
import { graphql } from 'gatsby';
import React from 'react';

import {
  BlogPostPropsData,
  transformBlogPostPropsDataToPostDetailsProps,
} from './models/blog-post-props-data';

export interface BlogPostProps {
  data: BlogPostPropsData;
}

export function BlogPost({ data }: BlogPostProps) {
  const { post, previous, next } = transformBlogPostPropsDataToPostDetailsProps(
    data
  );

  return (
    <Container maxWidth="md">
      <PostDetails post={post} previous={previous} next={next} />
    </Container>
  );
}

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostById(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
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
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            url
          }
        }
      }
    }
    # this gets us the previous post by id (if it exists)
    previous: wpPost(id: { eq: $previousPostId }) {
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
    # this gets us the next post by id (if it exists)
    next: wpPost(id: { eq: $nextPostId }) {
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
`;
