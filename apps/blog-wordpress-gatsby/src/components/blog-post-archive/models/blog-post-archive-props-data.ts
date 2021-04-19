import { BlogPost } from '@nx-gatsby-blogs/ui';

export interface BlogPostArchivePropsData {
  allWpPost: {
    nodes: {
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
  return data.allWpPost?.nodes?.map((node) => {
    return {
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
