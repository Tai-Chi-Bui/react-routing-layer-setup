import React from "react"
import PathConstants from "./pathConstants"

const Unauthorized = React.lazy(() => import("../pages/UnauthorizedPage"))
const Home = React.lazy(() => import("../pages/Home"))
const Data = React.lazy(() => import("../pages/Data"))
const Settings = React.lazy(() => import("../pages/Settings"))

// This is the role of current user
const role: 'admin' | 'user' | 'anonymous' = 'anonymous'


const routes = [
    { path: PathConstants.HOME.path, element: PathConstants.HOME.allow.includes(role) ? <Home /> : <Unauthorized /> },
    { path: PathConstants.DATA.path, element: PathConstants.DATA.allow.includes(role) ? <Data /> : <Unauthorized /> },
    { path: PathConstants.SETTINGS.path, element: PathConstants.SETTINGS.allow.includes(role) ? <Settings /> : <Unauthorized /> },
]
export default routes
