import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import App from "../App";
import GuestLayout from "../layouts/GuestLayout";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [{ path: "/", element: <App /> }],
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

export default router;
