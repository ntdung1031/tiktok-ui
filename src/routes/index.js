import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Category from '~/pages/Category';
import Admin from '~/pages/Admin';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/following',
        component: Following,
    },
    {
        path: '/category',
        component: Category,
    },
    {
        path: '/admin',
        component: Admin,
        layout: null,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
