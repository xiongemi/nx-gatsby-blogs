import { jest } from '@jest/globals';

jest.mock('gatsby', () => ({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  graphql: () => {},
  Link: () => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  },
}));
