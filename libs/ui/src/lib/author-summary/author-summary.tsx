import { Avatar, CardHeader } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';

import { BlogAuthor } from '../../models/blog-author';

export interface AuthorSummaryProps {
  author: BlogAuthor;
  subtitle: string;
}

export function AuthorSummary({ author, subtitle }: AuthorSummaryProps) {
  return (
    <CardHeader
      avatar={
        author.avatar && <Avatar aria-label={author.name} src={author.avatar} />
      }
      title={
        <Link to={author.url} itemProp="author">
          {author.name}
        </Link>
      }
      subheader={subtitle}
    />
  );
}

export default AuthorSummary;
