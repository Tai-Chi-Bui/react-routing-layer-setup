const PathConstants = {
    HOME: {
        path: '/',
        allow: ['admin', 'user', 'anonymous']
    },
    DATA: {
        path: '/data',
        allow: ['admin', 'user']
    },
    SETTINGS: {
        path: '/settings',
        allow: ['admin']
    }

}

export default PathConstants
