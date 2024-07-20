import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import Detail from "../screens/detail";
import Dashboard from "../screens/dashboard";
import SignUp from "../screens/signup";
import SignIn from "../screens/signin";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Dashboard />,
    },
{
    path: 'product/:id',
    element:<Detail />
},
{
    path: 'signup',
    element: <SignUp />
},
{
    path: 'signin',
    element: <SignIn />
},
]);

export default function Router () {
    return    <RouterProvider router={router} />
}