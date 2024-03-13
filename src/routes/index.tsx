import React from "react"

const Unauthorized = React.lazy(() => import("../pages/UnauthorizedPage"))
const Home = React.lazy(() => import("../pages/Home"))
const Data = React.lazy(() => import("../pages/Data"))
const Settings = React.lazy(() => import("../pages/Settings"))

// This is the role of current user
const role: 'admin' | 'user' | 'anonymous' = 'anonymous'


const routes = [
    {
        title: 'home',
        path: '/',
        element: <Home />,
        allow: ['admin', 'user', 'anonymous'],
        isOnHeader: true
    },
    {
        title: 'data',
        path: '/data',
        element: <Data />,
        allow: ['admin', 'user'],
        isOnHeader: false
    },
    {
        title: 'settings',
        path: '/settings',
        element: <Settings />,
        allow: ['admin'],
        isOnHeader: true
    }
]

const protectedRoutes = routes.map((route) => {
    if (!route.allow.includes(role)) {
        route.element = <Unauthorized />
        return route
    }
    return route
})



export default protectedRoutes
