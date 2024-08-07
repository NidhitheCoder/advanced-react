import { FormEvent } from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants';

const CreatePost = () => {
  const onSubmitPost = (event: FormEvent<HTMLFormElement>) => {
    console.log(event);
  };

  return (
    <div className="p-10">
      <Logo />
      <h2 className="font-bold text-4xl py-8">Create post</h2>
      <p className="font-extrabold py-2">You can create new posts here</p>
      <form
        action="post"
        onSubmit={onSubmitPost}
        className="flex flex-col bg-gray-400 rounded-md p-4"
      >
        <label>Title</label>
        <input
          className="pl-2 mb-2 rounded-sm"
          type="text"
          placeholder="Enter Title"
        />
        <label>Author</label>
        <input
          className="pl-2 mb-2 rounded-sm"
          type="text"
          placeholder="Enter Author name"
        />
        <label>description</label>
        <textarea
          className="pl-2 mb-2 rounded-sm"
          placeholder="Write some description"
        />
        <Button type="submit" label="Create Post" />
      </form>
      <div className="py-10">
        <Link to={ROUTES.dashboard} className="text-green-800">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default CreatePost;
