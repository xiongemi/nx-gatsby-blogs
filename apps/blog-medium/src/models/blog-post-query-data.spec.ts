import { transformBlogPostQueryDataToBlogPost } from './blog-post-query-data';
import { mockBlogPostQueryData } from './blog-post-query-data.mock';

describe('BlogPostQueryData', () => {
  describe('transformBlogPostQueryDataToBlogPost', () => {
    it('should transform to blog post', () => {
      expect(
        transformBlogPostQueryDataToBlogPost(mockBlogPostQueryData)
      ).toEqual({
        author: {
          avatar: 'https://miro.medium.com//0*Bru5JtBnh5fNUdhP.',
          name: 'Emily Xiong',
          url: 'https://medium.com/@emilyxiong',
        },
        date: 'February 21, 2021',
        excerpt:
          'react-intl is a library that helps to set up internationalization for a react app. It has been migrated to formatjs monorepo. There are…',
        featuredImage: {
          alt: 'e002bef4-dcd8-5006-8c8a-c2deabcbc107',
          src: 'https://miro.medium.com//1*_T5JK3-wnXvNiM-yRBbrlQ.png',
        },
        id: 'e002bef4-dcd8-5006-8c8a-c2deabcbc107',
        title: 'How to Add react-intl to an Nx React App?',
        url:
          'https://medium.com/@emilyxiong/how-to-add-react-intl-to-an-nx-react-app-ab4c998af1c9',
      });
    });
  });
});
