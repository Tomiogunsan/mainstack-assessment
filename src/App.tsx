

import { QueryClient , QueryClientProvider} from "@tanstack/react-query";
import TestFile from "./components/TestFile";


function App() {

  const queryClient = new QueryClient({
    defaultOptions:  {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      }

    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl font-bold underline bg-red-400">Hello world!</h1>
      <TestFile/>
    </QueryClientProvider>
  );
}

export default App;
