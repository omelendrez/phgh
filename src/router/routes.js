const routes = [
  {
    path: '/',
    name: 'landing',
    component: 'Landing'
  },
  {
    path: '/signin',
    name: 'signin',
    component: 'Signin'
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: 'ForgotPassword'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: 'Dashboard'
  },
  {
    path: '/security/users',
    name: 'users',
    component: 'security/Users'
  },
  {
    path: '/security/roles',
    name: 'roles',
    component: 'security/Roles'
  },
  {
    path: '/settings/calendar',
    name: 'calendar',
    component: 'settings/Calendar'
  },
  {
    path: '/security/audit',
    name: 'audit',
    component: 'security/Audit'
  },
  {
    path: '/settings/config/main',
    name: 'mainConfig',
    component: 'settings/config/Main'
  },
  {
    path: '/settings/config/finance',
    name: 'financeConfig',
    component: 'settings/config/Finance'
  },
  {
    path: '/settings/config/ph',
    name: 'PHConfig',
    component: 'settings/config/PH'
  },
  {
    path: '/settings/config/gh',
    name: 'GHConfig',
    component: 'settings/config/GH'
  }
]

export default routes
