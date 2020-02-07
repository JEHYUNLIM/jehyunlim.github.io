export const sidebarItems = [
  { name: 'home', label: 'HOME', path: '/' },
  { name: 'posts',
    label: 'POSTS',
    path: null,
    items: [
      { name: 'cleancode', label: 'CleanCode', path: '/cleancode' },
      { name: 'react', label: 'React Study', path: '/react' },
      { name: 'functionalJavascript', label: 'Functional Javascript', path: '/fnjs' },
    ]
  },
  { name : 'about',
    label: 'ABOUT',
    path: null,
    items: [
      { name: 'profile', label: 'Profile', path: '/profile' }
    ]
  },
]