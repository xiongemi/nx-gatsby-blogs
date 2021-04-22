import { BlogPost } from '@nx-gatsby-blogs/ui';

import {
  BlogPostQueryData,
  transformBlogPostQueryDataToBlogPost,
} from '../../../models/blog-post-query-data';

export interface BlogPostArchivePropsData {
  allWpPost: {
    nodes: BlogPostQueryData[];
  };
}

export function transformBlogPostArchivePropsDataToBlogPosts(
  data: BlogPostArchivePropsData
): BlogPost[] {
  return data?.allWpPost?.nodes?.map(transformBlogPostQueryDataToBlogPost);
}
