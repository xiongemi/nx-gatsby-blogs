import { render } from '@testing-library/react';

import PostDetails from './post-details';

describe('PostDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostDetails />);
    expect(baseElement).toBeTruthy();
  });
});
