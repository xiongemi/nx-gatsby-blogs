import { render } from '@testing-library/react';

import AuthorDetails from './author-details';

describe('AuthorDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthorDetails />);
    expect(baseElement).toBeTruthy();
  });
});
