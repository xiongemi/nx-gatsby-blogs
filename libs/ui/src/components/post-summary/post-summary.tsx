import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { BlogPost } from '../../models/blog-post';

export interface PostSummaryProps {
  post: BlogPost;
}

export function PostSummary({ post }: PostSummaryProps) {
  return (
    <Card>
      <CardActionArea>
        {post.featuredImage && post.featuredImage.src && (
          <CardMedia
            src={post.featuredImage.src}
            title={post.featuredImage.alt}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {post.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.excerpt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostSummary;
