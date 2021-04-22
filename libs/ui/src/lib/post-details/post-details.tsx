import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  styled,
  Typography,
} from '@material-ui/core';
import parse from 'html-react-parser';
import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { BlogPost } from '../../models/blog-post';
import AuthorSummary from '../author-summary/author-summary';
import { Link } from 'gatsby';
import PostSummary from '../post-summary/post-summary';
import { PostSummaryList } from '@nx-gatsby-blogs/ui';

export interface PostDetailsProps {
  post: BlogPost;
  previous: BlogPost;
  next: BlogPost;
}

const FeaturedImage = styled('img')({
  maxWidth: '100%',
});

export function PostDetails({ post, previous, next }: PostDetailsProps) {
  return (
    <>
      <article itemScope itemType="http://schema.org/Article">
        <Typography variant="h2" component="h1" itemProp="headeline">
          {post.title}
        </Typography>
        <AuthorSummary author={post.author} subtitle={post.date} />
        {post.featuredImage && post.featuredImage.src && (
          <Box textAlign="center" maxWidth="100%">
            <FeaturedImage
              src={post.featuredImage.src}
              alt={post.featuredImage.alt}
            />
          </Box>
        )}
        {post.content && (
          <Typography
            variant="body1"
            component="section"
            itemProp="articleBody"
          >
            {parse(post.content)}
          </Typography>
        )}
      </article>
      {(previous || next) && (
        <Box mt={5} mb={5}>
          <Divider />
          <Box mt={3} mb={3}>
            <Typography variant="h5" component="h5">
              More Blogs:
            </Typography>
          </Box>

          <Grid container spacing={5} justify="center">
            {previous && (
              <Grid item xs={12} sm={6} md={4}>
                <PostSummary post={previous} />
              </Grid>
            )}
            {next && (
              <Grid item xs={12} sm={6} md={4}>
                <PostSummary post={next} />
              </Grid>
            )}
          </Grid>
        </Box>
      )}
    </>
  );
}

export default PostDetails;
