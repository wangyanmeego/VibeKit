import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
