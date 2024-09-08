import Blog from "../pages/blog-page";
import Blogs from "../pages/blogs-page";
import Landing from "../pages/landing-page";

const routes = [
    {
        path: '/',
        element: <Landing />
    },
    {
        path: 'blogs',
        element: <Blogs />,
    },
    {
        path: 'blogs/:title',
        element: <Blog/>
    }
];

export default routes;