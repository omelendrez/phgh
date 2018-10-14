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
    path: '/permissions/users',
    name: 'users',
    component: 'permissions/Users'
  },
  {
    path: '/permissions/roles',
    name: 'roles',
    component: 'permissions/Roles'
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
  },
  {
    path: '/settings/config/time',
    name: 'timeConfig',
    component: 'settings/config/Time'
  }
]

export default routes
