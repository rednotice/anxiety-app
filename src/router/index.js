import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import Logout from '../views/Logout.vue'
import Error from '../views/Error.vue'
import Challenge from '../views/Challenge.vue'
import ChallengeAccomplished from '../views/ChallengeAccomplished.vue'
import Profile from '../views/Profile.vue'
import ProfileEdit from '../views/ProfileEdit.vue'
import Instructions from '../views/Instructions.vue'

import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresGuest: true,
      title: 'Home'
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp,
    meta: {
      requiresGuest: true,
      title: 'Sign Up'
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
    meta: {
      requiresGuest: true,
      title: 'Sign In'
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
      requiresGuest: true,
      title: 'Log Out'
    }
  },
  {
    path: '/error',
    name: 'error',
    component: Error,
    meta: {
      requiresGuest: true,
      title: 'Error'
    }
  },
  {
    path: '/challenge',
    name: 'challenge',
    component: Challenge,
    meta: {
      requiresAuth: true,
      title: 'Challenge'
    }
  },
  {
    path: '/challenge/accomplished',
    name: 'ChallengeAccomplished',
    component: ChallengeAccomplished,
    meta: {
      requiresAuth: true,
      title: 'Accomplished'
    }
  },
  {
    path: '/instructions',
    name: 'instructions',
    component: Instructions,
    meta: {
      requiresGuest: true,
      title: 'Instructions'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true,
      title: 'Profile'
    }
  },
  {
    path: '/profile/edit',
    name: 'profileEdit',
    component: ProfileEdit,
    meta: {
      requiresAuth: true,
      title: 'Edit Profile'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Navigation Guard
router.beforeEach((to, from, next) => {
  store.commit('setErrors', {}); // Clear errors in store

  // Cookie extractor
  function getCookie(name) {
    const re = new RegExp(name + "=([^;]+)");
    const value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }

  // Retrieve token from cookie and save to store
  const token = getCookie('access-token');
  store.commit('setAccessToken', token);

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        path: '/signin'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;
