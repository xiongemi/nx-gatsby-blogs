import { BlogPost } from '@nx-gatsby-blogs/ui';

import {
  getMediumAuthorUrl,
  getMediumBlogUrl,
  getMediumImageUrl,
} from '../utils/medium-links';

export interface BlogPostQueryData {
  author: {
    name: string;
    username: string;
    bio: string;
    imageId: string;
  };
  id: string;
  title: string;
  createdAt: string;
  uniqueSlug: string;
  virtuals: {
    previewImage: {
      imageId: string;
    };
    subtitle: string;
  };
}

export function transformBlogPostQueryDataToBlogPost(
  data: BlogPostQueryData
): BlogPost {
  const author = data.author;
  return {
    author: author && {
      name: author.name,
      avatar: getMediumImageUrl(author.imageId),
      url: getMediumAuthorUrl(author.username),
    },
    id: data.id,
    title: data.title,
    excerpt: data.virtuals?.subtitle,
    date: data.createdAt,
    url: getMediumBlogUrl(author.username, data.uniqueSlug),
    featuredImage: {
      src: getMediumImageUrl(data.virtuals?.previewImage.imageId),
      alt: data.id,
    },
  };
}
