import { BlogPostArchivePropsData } from './blog-post-archive-props-data';

export const mockBlogPostArchivePropsData: BlogPostArchivePropsData = {
  allWpPost: {
    nodes: [
      {
        id: 'cG9zdDo5OTM=',
        excerpt:
          '<p>This is a user-defined post excerpt. It <em>should</em> be displayed in place of the post content in archive-index pages. It can be longer than the automatically generated excerpts, and can have <strong>HTML</strong> tags.</p>\n',
        date: 'March 15, 2012',
        title: 'Template: Excerpt (Defined)',
        featuredImage: null,
      },
      {
        id: 'cG9zdDoxNDQ2',
        excerpt:
          '<p>This is the post content. It should be displayed in place of the auto-generated excerpt in single-page views. Archive-index pages should display an auto-generated excerpt of this content. Depending on Theme-defined filters, the length of the auto-generated excerpt will vary from Theme-to-Theme. The default length for auto-generated excerpts is 55 words, so to test the [&hellip;]</p>\n',
        date: 'March 14, 2012',
        title: 'Template: Excerpt (Generated)',
        featuredImage: null,
      },
      {
        id: 'cG9zdDoxMTcx',
        excerpt: '<p>Post Page 1</p>\n',
        date: 'January 08, 2012',
        title: 'Template: Paginated',
        featuredImage: null,
      },
      {
        id: 'cG9zdDoxMjQx',
        excerpt:
          '<p>This is a sticky post. There are a few things to verify: The sticky post should be distinctly recognizable in some way in comparison to normal posts. You can style the .sticky class if you are using the post_class() function to generate your post classes, which is a best practice. They should show at the [&hellip;]</p>\n',
        date: 'January 07, 2012',
        title: 'Template: Sticky',
        featuredImage: null,
      },
      {
        id: 'cG9zdDoxMTQ4',
        excerpt:
          '<p>This post tests comments in the following ways. Threaded comments up to 10 levels deep Paginated comments (set Settings &gt; Discussion &gt; Break comments into pages to 5 top level comments per page) Comment markup / formatting Comment images Comment videos Author comments Gravatars and default fallbacks</p>\n',
        date: 'January 03, 2012',
        title: 'Template: Comments',
        featuredImage: null,
      },
      {
        id: 'cG9zdDoxMTUw',
        excerpt:
          '<p>This post has its comments, pingbacks, and trackbacks disabled. There should be no comment reply form, but should display pingbacks and trackbacks.</p>\n',
        date: 'January 02, 2012',
        title: 'Template: Comments Disabled',
        featuredImage: null,
      },
      {
        id: 'cG9zdDoxMTQ5',
        excerpt:
          '<p>This post has many pingpacks and trackbacks. There are a few ways to list them. Above the comments Below the comments Included within the normal flow of comments</p>\n',
        date: 'January 01, 2012',
        title: 'Template: Pingbacks And Trackbacks',
        featuredImage: null,
      },
      {
        id: 'cG9zdDoxMTc5',
        excerpt:
          '<p>https://twitter.com/nacin/status/319508408669708289 This post tests WordPress&#8217; Twitter Embeds feature.</p>\n',
        date: 'March 15, 2011',
        title: 'Media: Twitter Embeds',
        featuredImage: null,
      },
      {
        id: 'cG9zdDozNTg=',
        excerpt:
          '<p>All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she must have looked rather delightful, [&hellip;]</p>\n',
        date: 'October 05, 2010',
        title: 'Post Format: Standard',
        featuredImage: null,
      },
      {
        id: 'cG9zdDo1NTU=',
        excerpt: '',
        date: 'September 10, 2010',
        title: 'Post Format: Gallery',
        featuredImage: null,
      },
    ],
  },
};
