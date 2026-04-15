import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/friends/:id",
        element: <FriendDetails />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
    errorElement: <div>404</div>,
  },
]);