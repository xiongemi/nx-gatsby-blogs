import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from '@material-ui/core';
import parse from 'html-react-parser';
import React from 'react';

import { BlogPost } from '../../models/blog-post';

export interface PostSummaryProps {
  post: BlogPost;
}

const StyledMediaCard = styled(CardMedia)(({ theme }) => ({
  height: theme.spacing(20),
}));

export function PostSummary({ post }: PostSummaryProps) {
  return (
    <Card>
      <CardActionArea>
        {post.featuredImage && post.featuredImage.src && (
          <StyledMediaCard
            image={post.featuredImage.src}
            title={post.featuredImage.alt}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" noWrap={true}>
            {parse(post.title)}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            {post.date}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {parse(post.excerpt)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PostSummary;
