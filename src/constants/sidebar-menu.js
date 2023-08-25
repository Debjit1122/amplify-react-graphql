// constants/sidebar-menu.js
import DashboardIcon from '../assets/icons/dashboard.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/dashboard',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: UserIcon,
        path: '/dashboard/attendees',
        title: 'Attendees',
    },
    {
        id: 3,
        icon: UserIcon,
        path: '/dashboard/events',
        title: 'Events',
    }
];

export default sidebar_menu;
