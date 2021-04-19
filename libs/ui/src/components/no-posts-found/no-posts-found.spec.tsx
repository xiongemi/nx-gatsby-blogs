import { render } from '@testing-library/react';

import NoPostsFound from './no-posts-found';

describe('NoPostsFound', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NoPostsFound />);
    expect(baseElement).toBeTruthy();
  });
});
