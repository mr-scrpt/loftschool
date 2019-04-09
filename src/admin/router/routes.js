//import about from '../components/pages/about.vue';
import wokrs from '../components/pages/works.vue';
import reviews from '../components/pages/reviews.vue';

export default [
  {
    path: "/",
    component: () => import("components/pages/about.vue")
  },
  {
    path: "/works",
    component: () => import("components/pages/works.vue")
  },
  {
    path: "/reviews",
    component: () => import("components/pages/reviews.vue")
  }
];


