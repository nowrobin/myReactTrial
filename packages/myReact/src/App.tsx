import "./App.css";
import { routes } from "@/Routes";
import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { getClient } from "./queryclient";
import { QueryClient } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
function App() {
  const elem = useRoutes(routes);
  const queryClient = getClient();
  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
