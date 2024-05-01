import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Base, Home, About, Profile, SignIn, SignUp, Employees } from "../pages"

// import SecureRoute from "./SecureRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/home',
        element: <Home />
      },
      {
        path: '/employes',
        element: <Employees />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export const AppRouterProvider = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};