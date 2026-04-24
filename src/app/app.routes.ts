import { Routes } from '@angular/router';

export const routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./features/courses/course-list/course-list.page').then(m => m.CourseListPage)
  },
  {
    path: 'course-list',
    loadComponent: () => import('./features/courses/course-list/course-list.page').then( m => m.CourseListPage)
  }
];
