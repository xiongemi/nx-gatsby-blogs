import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { BlogPost } from '../../models/blog-post';
import parse from 'html-react-parser';

export interface PostSummaryProps {
  post: BlogPost;
  showAuthor?: boolean;
}

export function PostSummary({ post, showAuthor = true }: PostSummaryProps) {
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
          title={<Link href={post.author.url}>{post.author.name}</Link>}
          subheader={post.date}
        />
      )}
    </Card>
  );
}

export default PostSummary;
