import { BlogAuthor } from './blog-author';
export interface BlogPost {
  author?: BlogAuthor;
  id: string;
  title: string;
  excerpt: string;
  date: string; // date in format of MMMM DD, YYYY
  url: string;
  content?: string;
  featuredImage: {
    src: string;
    alt: string;
  };
}
