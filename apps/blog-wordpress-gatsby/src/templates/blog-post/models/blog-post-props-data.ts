import { PostDetailsProps } from '@nx-gatsby-blogs/ui';

import {
  BlogPostQueryData,
  transformBlogPostQueryDataToBlogPost,
} from '../../../models/blog-post-query-data';

export interface BlogPostPropsData {
  post: BlogPostQueryData;
  previous?: BlogPostQueryData;
  next?: BlogPostQueryData;
}

export function transformBlogPostPropsDataToPostDetailsProps(
  data: BlogPostPropsData
): PostDetailsProps {
  return {
    post: transformBlogPostQueryDataToBlogPost(data.post),
    previous: data.previous
      ? transformBlogPostQueryDataToBlogPost(data.previous)
      : null,
    next: data.next ? transformBlogPostQueryDataToBlogPost(data.next) : null,
  };
}
