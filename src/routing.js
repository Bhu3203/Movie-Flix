import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Popular from "./component/Popular";
import UpcomingMovies from "./component/UpcomingMovies";
import Top_Rated from "./component/Top_Rated";
import Search from "./component/Search";

import MovieDetails from "./component/MovieDetails";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/upcoming",
        element: <UpcomingMovies />,
      },
      {
        path: "/toprated",
        element: <Top_Rated />,
      },
      {
        path: "/search",
        element: <Search/>,
      },
      
      {
        path: "/movie",
        element: <MovieDetails/>,
      },
      
    ],
  },
]);

export default router;