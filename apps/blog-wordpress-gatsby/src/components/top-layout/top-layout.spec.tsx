import { render } from '@testing-library/react';

import TopLayout from './top-layout';

describe('TopLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TopLayout />);
    expect(baseElement).toBeTruthy();
  });
});
