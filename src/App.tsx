import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/layout/Layout";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: routes
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App
