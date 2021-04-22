import { render } from '@testing-library/react';

import PostSummaryList from './post-summary-list';

describe('PostSummaryList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostSummaryList />);
    expect(baseElement).toBeTruthy();
  });
});
