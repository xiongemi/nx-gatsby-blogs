import { mockBlogPostQueryData } from '../../../models/blog-post-query-data.mock';

import { BlogPostArchivePropsData } from './blog-post-archive-props-data';

export const mockBlogPostArchivePropsData: BlogPostArchivePropsData = {
  allWpPost: {
    nodes: [mockBlogPostQueryData],
  },
};
