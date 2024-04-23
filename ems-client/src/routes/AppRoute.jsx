import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Base, Home, About, SignIn, SignUp } from "../pages"

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
        path: '/about',
        element: <About />
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