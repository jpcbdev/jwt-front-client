import Vue from 'vue';
import Router from 'vue-router';
import TheHome from './pages/TheHome.vue';
import VSighup from './components/VSignup.vue';
import VSignin from './components/VSignin.vue';
import VProfile from './components/VProfile.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: TheHome,
      children: [
        {
          path: '/signup',
          name: 'signup',
          component: VSighup,
        },
        {
          path: '/signin',
          name: 'signin',
          component: VSignin,
        },
      ],
    },
    {
      path: '/profile',
      name: 'profile',
      component: VProfile,
      beforeEnter: function (to: any, from: any, next: any) {
        if (localStorage.getItem('jwt')) {
          next();
        } else {
          next('/signin');
        }
      }
    },
    {
      path: '*',
      beforeEnter: function (to, from, next) {
        next('/');
      }
    }
  ],
});

