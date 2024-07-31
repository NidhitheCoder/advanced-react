export interface User {
  name?: string;
  password: string;
  email: string;
}

export interface Post {
  id: string,
  title: string;
  description: string;
  author: string;
  thumbnailImage?: string;
}
