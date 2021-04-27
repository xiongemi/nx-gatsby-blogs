import { Avatar, Box, Divider, styled, Typography } from '@material-ui/core';
import React from 'react';

import { BlogAuthor } from '../../models/blog-author';
import { BlogPost } from '../../models/blog-post';
import PostSummaryList from '../post-summary-list/post-summary-list';

/* eslint-disable-next-line */
export interface AuthorDetailsProps {
  author: BlogAuthor;
  posts: BlogPost[];
}

const AuthorAvator = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  marginRight: theme.spacing(3),
}));

export function AuthorDetails({ author, posts }: AuthorDetailsProps) {
  return (
    <div>
      <Box display="flex">
        {author.avatar && (
          <AuthorAvator aria-label={author.name} src={author.avatar} />
        )}
        <Typography variant="h2" component="h1">
          {author.name}
        </Typography>
      </Box>
      {author.description && (
        <Typography variant="subtitle1" component="p">
          {author.description}
        </Typography>
      )}
      <Divider />
      <Box mt={3} mb={3}>
        <Typography variant="h5" component="h5">
          More Blogs:
        </Typography>
      </Box>
      <PostSummaryList
        posts={posts}
        totalPageCount={1}
        currentPageNumber={1}
        showAuthor={false}
      />
    </div>
  );
}

export default AuthorDetails;
