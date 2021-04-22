const mediumUrl = 'https://medium.com';
const mediumImageUrl = 'https://miro.medium.com/';

export function getMediumBlogUrl(username: string, uniqueSlug: string) {
  return `${mediumUrl}/@${username}/${uniqueSlug}`;
}

export function getMediumImageUrl(imageId: string) {
  return `${mediumImageUrl}/${imageId}`;
}

export function getMediumAuthorUrl(username: string) {
  return `${mediumUrl}/@${username}`;
}
