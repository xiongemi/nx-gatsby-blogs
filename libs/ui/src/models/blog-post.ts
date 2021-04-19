export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string; // date in format of MMMM DD, YYYY
  featuredImage: {
    src: string;
    alt: string;
  };
}
