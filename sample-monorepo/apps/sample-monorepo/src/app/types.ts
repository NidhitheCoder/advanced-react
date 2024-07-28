export interface User {
  name?: string;
  password: string;
  email: string;
}

export interface Post {
  title: string;
  description: string;
  author: string;
  thumbnailImage?: string;
}
