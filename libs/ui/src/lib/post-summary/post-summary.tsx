import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  styled,
  Typography,
} from '@material-ui/core';
import { Link, navigate } from 'gatsby';
import parse from 'html-react-parser';
import React from 'react';

import { BlogPost } from '../../models/blog-post';

export interface PostSummaryProps {
  post: BlogPost;
  showAuthor?: boolean;
}

const StyledMediaCard = styled(CardMedia)(({ theme }) => ({
  height: theme.spacing(20),
}));

export function PostSummary({ post, showAuthor = true }: PostSummaryProps) {
  const cardActionClicked = () => {
    navigate(post.url);
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
            {post.title}
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
        <CardHeader
          avatar={
            post.author.avatar && (
              <Avatar aria-label={post.author.name} src={post.author.avatar} />
            )
          }
          title={<Link to={post.author.url}>{post.author.name}</Link>}
          subheader={post.date}
        />
      )}
    </Card>
  );
}

export default PostSummary;
