import { jest } from '@jest/globals';

jest.mock('gatsby', () => ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  graphql: () => {},
  Link: ({ children }) => {
    return children;
  },
}));
