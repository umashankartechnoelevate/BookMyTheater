import SignIn from "../pages/auth/SignIn";
import Signup from "../pages/auth/Signup";


const AuthRoutes = [

    {
        path: '/',
        element: <SignIn />
    },
    {
        path: '/login',
        element: <SignIn />
    },
    {
        path: '/logout',
        element: <Signup />
    },

    {
        path: '/register',
        element: <Signup />
    }

]

export default AuthRoutes