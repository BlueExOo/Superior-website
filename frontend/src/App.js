import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import LandingPage from "./layout/LandingPage";
import DownloadPage from "./pages/DownloadPage";
import DonatePage from "./pages/DonatePage";
import Loader from "./components/Loader";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/donate",
    element: <DonatePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/downloadPage",
    element: <DownloadPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const [loading, setLoading] = useState(false);

  // Aos initialization
  Aos.init({
    duration: 3000,
    offset: 0,
  });

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return <>{loading ? <Loader /> : <RouterProvider router={router} />}</>;
}

export default App;
