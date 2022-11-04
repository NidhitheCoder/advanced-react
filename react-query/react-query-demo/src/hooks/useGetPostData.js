import axios from "../axios";
import { useQuery, useQueryClient } from "react-query";

const fetchPostData = (postId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
};


export const useGetPostData = (postId) => {
  const queryClient = useQueryClient();

  return useQuery(
    ['post', postId],
    () => fetchPostData(postId),
    {
      initialData: () => {
        const postData = queryClient.getQueryData('post')?.data?.find(postData=>postData === parseInt(postId));

        if(postData) {
          return {
            data: postData
          }
        } else {
          return undefined;
        }
      }
    }
  );
}
