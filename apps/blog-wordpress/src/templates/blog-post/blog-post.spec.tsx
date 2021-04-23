import { render } from '@testing-library/react';
import React from 'react';

import BlogPost from './blog-post';
import { mockBlogPostPropsData } from './models/blog-post-props-data.mock';

describe('BlogPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogPost data={mockBlogPostPropsData} />);
    expect(baseElement).toBeTruthy();
  });
});
