import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import App from "../App";
import GuestLayout from "../layouts/GuestLayout";
import Dashboard from "../pages/Dashboard";
import QuizGame from "../pages/QuizGame";
import Categories from "../pages/Categories";
import SignUp from "../pages/Auth/Register";
import LoginPage from "../pages/Auth/Login";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            { path: "/", element: <App /> },
            { path: "/signup", element: <SignUp /> },
            { path: "/login", element: <LoginPage /> },
        ],
    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/quiz/:id",
                element: <QuizGame />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },
            {
                path: "/user/profile",
                element: <Profile />,
            },
        ],
    },
]);

export default router;
