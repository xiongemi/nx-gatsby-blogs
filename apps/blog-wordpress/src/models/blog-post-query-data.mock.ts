import { BlogPostQueryData } from './blog-post-query-data';

export const mockBlogPostQueryData: BlogPostQueryData = {
  author: {
    node: {
      firstName: 'Tyler',
      lastName: 'Barnes',
      name: 'tylbar',
      uri: '/author/tyler/',
      avatar: {
        url:
          'https://secure.gravatar.com/avatar/0a5bd2d18281009a03f01b8378abada1?s=96&d=mm&r=g',
      },
    },
  },
  id: 'cG9zdDoxMTc4',
  excerpt:
    '<p>Headings Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: The HTML &lt;blockquote&gt; Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes [&hellip;]</p>\n',
  date: 'January 11, 2013',
  title: 'Markup: HTML Tags and Formatting',
  uri: '/markup-html-tags-and-formatting/',
  featuredImage: null,
};
