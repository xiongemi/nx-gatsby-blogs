import { Box, Grid } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'gatsby';
import React from 'react';
import { BlogPost } from '../../models/blog-post';
import NoPostsFound from '../no-posts-found/no-posts-found';
import PostSummary from '../post-summary/post-summary';

export interface PostSummaryListProps {
  posts: BlogPost[];
  currentPageNumber: number;
  totalPageCount: number;
  showAuthor?: boolean;
}

export function PostSummaryList({
  posts,
  currentPageNumber,
  totalPageCount,
  showAuthor,
}: PostSummaryListProps) {
  if (!posts || !posts.length) {
    return <NoPostsFound />;
  }

  return (
    <>
      <Grid container spacing={5}>
        {posts.map((post) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <PostSummary post={post} showAuthor={showAuthor}></PostSummary>
            </Grid>
          );
        })}
      </Grid>
      {totalPageCount > 1 && (
        <Box display="flex" justifyContent="center" m={2}>
          <Pagination
            color="primary"
            page={currentPageNumber}
            count={totalPageCount}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/blogs/${item.page}`}
                {...item}
              />
            )}
          />
        </Box>
      )}
    </>
  );
}

export default PostSummaryList;
