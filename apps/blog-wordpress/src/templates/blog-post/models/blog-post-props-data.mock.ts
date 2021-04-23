import { mockBlogPostQueryData } from '../../../models/blog-post-query-data.mock';

import { BlogPostPropsData } from './blog-post-props-data';

export const mockBlogPostPropsData: BlogPostPropsData = {
  post: mockBlogPostQueryData,
  previous: mockBlogPostQueryData,
  next: mockBlogPostQueryData,
};
