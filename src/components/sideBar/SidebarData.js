const SidebarData = [
  {
    id: 1,
    title: 'Courses',
    path: '/',
    access: ['admin', 'user'],
  },
  {
    id: 2,
    title: 'Reservations',
    path: '/reservations',
    access: ['admin', 'user'],
  },
  {
    id: 3,
    title: 'Add course',
    path: '/add-course',
    access: ['admin'],
  },
  {
    id: 4,
    title: 'Add reservation',
    path: '/add-reservations',
    access: ['admin', 'user'],
  },
  {
    id: 5,
    title: 'Delete course',
    path: '/delete-course',

    cName: 'nav-text',
    access: ['admin'],
  },
];

export default SidebarData;
