import App from "../App"
import {HomePageRoute} from "../Routes/UserRoutes/HomePageRoute"
import {ServicesRoute} from "../Routes/UserRoutes/ServicesRoute"
import {AchievementsRoute} from "../Routes/UserRoutes/AchievementsRoute"
import {ContactRoute} from "../Routes/UserRoutes/ContactRoute"
import {GoalsRoute} from "../Routes/UserRoutes/GoalsRoute"
import {LogInRoute} from "../Routes/UserRoutes/LogInRoute"
import {SignUpRoute} from "../Routes/UserRoutes/SignUpRoute"
import {TestimonialsRoute} from "../Routes/UserRoutes/TestimonialsRoute"
import {VolunteerFormRoute} from "../Routes/UserRoutes/VolunteerFormRoute"
import {AdminDashboardRoute} from "../Routes/AdminRoutes/AdminDashboardRoute"
import {ManageUsersRoute} from "../Routes/AdminRoutes/ManageUsersRoute"
import UserLayout from '../Layout/UserLayout';
import AdminLayout from '../Layout/AdminLayout';

export const RouterProject = [
    {
        path: '/',
        element: <UserLayout/>,
        children: [
            ...HomePageRoute,
            ...ServicesRoute,
            ...AchievementsRoute,
            ...ContactRoute,
            ...GoalsRoute,
            ...LogInRoute,
            ...SignUpRoute,
            ...TestimonialsRoute,
            ...VolunteerFormRoute,
        ],
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            ...AdminDashboardRoute,
            ...ManageUsersRoute
        ],
    },
]