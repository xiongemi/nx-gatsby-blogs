import { BlogPost } from '@nx-gatsby-blogs/ui';

export interface BlogPostArchivePropsData {
  allWpPost: {
    nodes: {
      author: {
        node: {
          firstName: string;
          lastName: string;
          name: string;
          uri: string;
          avatar: {
            url: string;
          };
        };
      };
      id: string;
      title: string;
      excerpt: string;
      date: string;
      featuredImage?: {
        node: {
          id: string;
          link: string;
          altText: string;
        };
      };
    }[];
  };
}

export function transformBlogPostArchivePropsDataToBlogPosts(
  data: BlogPostArchivePropsData
): BlogPost[] {
  return data?.allWpPost?.nodes?.map((node) => {
    const author = node.author?.node;
    return {
      author: author && {
        name:
          author.firstName && author.lastName
            ? author.firstName + ' ' + author.lastName
            : author.name,
        avatar: author.avatar.url,
        url: author.uri,
      },
      id: node.id,
      title: node.title,
      excerpt: node.excerpt,
      date: node.date,
      featuredImage: {
        src: node.featuredImage?.node?.link,
        alt: node.featuredImage?.node?.altText,
      },
    };
  });
}
