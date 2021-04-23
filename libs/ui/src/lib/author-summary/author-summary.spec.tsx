import { render } from '@testing-library/react';
import React from 'react';

import { mockBlogAuthor } from '../../models/blog-author.mock';

import AuthorSummary from './author-summary';

describe('AuthorSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <AuthorSummary author={mockBlogAuthor} subtitle="subtitle" />
    );
    expect(baseElement).toBeTruthy();
  });
});
