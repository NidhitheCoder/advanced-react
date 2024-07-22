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
});

const Post = mongoose.model<PostDoc>('Post', PostSchema);

export default Post;
