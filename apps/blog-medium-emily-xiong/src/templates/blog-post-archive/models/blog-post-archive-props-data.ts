import { BlogPost } from '@nx-gatsby-blogs/ui';

import {
  BlogPostQueryData,
  transformBlogPostQueryDataToBlogPost,
} from '../../../models/blog-post-query-data';

export interface BlogPostArchivePropsData {
  allMediumPost: {
    nodes: BlogPostQueryData[];
  };
}

export function transformBlogPostArchivePropsDataToBlogPosts(
  data: BlogPostArchivePropsData
): BlogPost[] {
  return data?.allMediumPost?.nodes?.map(transformBlogPostQueryDataToBlogPost);
}
