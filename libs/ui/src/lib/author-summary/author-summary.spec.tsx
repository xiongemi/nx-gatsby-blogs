import { render } from '@testing-library/react';

import AuthorSummary from './author-summary';

describe('AuthorSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthorSummary />);
    expect(baseElement).toBeTruthy();
  });
});
