import { render } from '@testing-library/react';

import PostSummary from './post-summary';

describe('PostSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostSummary />);
    expect(baseElement).toBeTruthy();
  });
});
