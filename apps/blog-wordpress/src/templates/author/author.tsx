import { AuthorDetails } from '@nx-gatsby-blogs/ui';
import { graphql } from 'gatsby';
import React from 'react';

import { BlogPostPropsData } from '../blog-post/models/blog-post-props-data';

import {
  transformAuthorPropsDataToBlogAuthor,
  transformAuthorPropsDataToBlogPosts,
} from './models/author-props-data';

export interface AuthorProps {
  data: BlogPostPropsData;
}

export function Author({ data, pageContext }) {
  const author = transformAuthorPropsDataToBlogAuthor(data);
  const posts = transformAuthorPropsDataToBlogPosts(data);
  return <AuthorDetails author={author} posts={posts}></AuthorDetails>;
}

export default Author;

export const pageQuery = graphql`
  query WordpressUser($id: String!) {
    author: wpUser(id: { eq: $id }) {
      firstName
      lastName
      name
      uri
      description
      avatar {
        url
      }
      posts {
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
  }
`;
