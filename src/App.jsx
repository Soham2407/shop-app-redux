import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import ErrorPage from "./components/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <ProductList />,
        },
        {
          path: "/products/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
