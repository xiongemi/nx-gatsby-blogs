import { BlogPost, BlogAuthor } from '@nx-gatsby-blogs/ui';

import {
  BlogPostQueryData,
  transformBlogPostQueryDataToBlogPost,
} from '../../../models/blog-post-query-data';

export interface AuthorPropsData {
  author: {
    firstName: string;
    lastName: string;
    name: string;
    uri: string;
    description: string;
    avatar: {
      url: string;
    };
    posts?: { nodes: BlogPostQueryData[] };
  };
}

export function transformAuthorPropsDataToBlogAuthor(
  data: AuthorPropsData
): BlogAuthor {
  const author = data?.author;
  return (
    author && {
      name:
        author.firstName && author.lastName
          ? author.firstName + ' ' + author.lastName
          : author.name,
      avatar: author.avatar.url,
      url: author.uri,
      description: author.description,
    }
  );
}

export function transformAuthorPropsDataToBlogPosts(
  data: AuthorPropsData
): BlogPost[] {
  return data?.author?.posts?.nodes?.map(transformBlogPostQueryDataToBlogPost);
}
