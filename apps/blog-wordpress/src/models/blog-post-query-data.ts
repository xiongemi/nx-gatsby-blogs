import { BlogPost } from '@nx-gatsby-blogs/ui';

export interface BlogPostQueryData {
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
  uri: string;
  content?: string;
  featuredImage?: {
    node: {
      altText: string;
      localFile: {
        url: string;
      };
    };
  };
}

export function transformBlogPostQueryDataToBlogPost(
  data: BlogPostQueryData
): BlogPost {
  const author = data.author?.node;
  return {
    author: author && {
      name:
        author.firstName && author.lastName
          ? author.firstName + ' ' + author.lastName
          : author.name,
      avatar: author.avatar.url,
      url: author.uri,
    },
    id: data.id,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    url: data.uri,
    content: data.content,
    featuredImage: data.featuredImage && {
      src: data.featuredImage.node?.localFile?.url,
      alt: data.featuredImage.node?.altText,
    },
  };
}
