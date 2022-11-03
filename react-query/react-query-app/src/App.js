import "./App.css";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import Features from "./components/Features";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Content />
    </QueryClientProvider>
  );
};

const Content = () => {
  const { isLoading, error, data } = useQuery("users", () => {
   return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  });
  
  if (isLoading) return "Loading...";
  if (error) return `Error occured ${error.message}`;
  console.log(data);

  return (
    <div>
      <h2>React Query</h2>
      {data.map(user => <h5 key={user.id}>{user.name}</h5>)}
      <Features />
    </div>
  );
};

export default App;
