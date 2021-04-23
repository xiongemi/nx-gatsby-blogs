import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from '@material-ui/core';
import { navigate } from 'gatsby';
import parse from 'html-react-parser';
import React from 'react';

import { BlogPost } from '../../models/blog-post';
import AuthorSummary from '../author-summary/author-summary';

export interface PostSummaryProps {
  post: BlogPost;
  showAuthor?: boolean;
}

const StyledMediaCard = styled(CardMedia)(({ theme }) => ({
  height: theme.spacing(20),
}));

// regex taken from https://stackoverflow.com/questions/10687099/how-to-test-if-a-url-string-is-absolute-or-relative
const isAbsolutePath = (path: string): boolean => {
  const regex = /^https?:\/\//i;
  return regex.test(path);
};

export function PostSummary({ post, showAuthor = true }: PostSummaryProps) {
  const cardActionClicked = () => {
    if (isAbsolutePath(post.url)) {
      window.open(post.url, '_blank');
    } else {
      navigate(post.url);
    }
  };

  return (
    <Card>
      <CardActionArea onClick={cardActionClicked}>
        {post.featuredImage && post.featuredImage.src && (
          <StyledMediaCard
            image={post.featuredImage.src}
            title={post.featuredImage.alt}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {parse(post.title)}
          </Typography>
          {!showAuthor && (
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
          )}
          <Typography variant="body2" color="textSecondary" component="div">
            {parse(post.excerpt)}
          </Typography>
        </CardContent>
      </CardActionArea>
      {showAuthor && (
        <AuthorSummary author={post.author} subtitle={post.date} />
      )}
    </Card>
  );
}

export default PostSummary;
