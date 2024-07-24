import mongoose from 'mongoose';

export interface PostDoc extends mongoose.Document {
  title: string;
  description: string;
  author: string;
}

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide description'],
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name'],
  },
});

const Post = mongoose.model<PostDoc>('Post', PostSchema);

export default Post;
