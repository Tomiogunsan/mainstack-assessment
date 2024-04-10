import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Home from "@modules/page/Home";
import Analytics from "@modules/page/Analytics";
import Revenue from "@modules/page/Revenue";
import Crm from "@modules/page/Crm";
import Apps from "@modules/page/Apps";
import ErrorPage from "components/ErrorPage";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to='/revenue' />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/revenue",
      element: <Revenue />,
    },
    {
      path: "/analytics",
      element: <Analytics />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/crm",
      element: <Crm />,
    },
    {
      path: "/apps",
      element: <Apps />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
