import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { auth } from "../firebase";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login/Login.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/signup/SignUp.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/dashboard/Dashboard.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import(
        /* webpackChunkName: "settings" */ "../views/settings/Settings.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/streets",
    name: "streets",
    component: () =>
      import(
        /* webpackChunkName: "streets" */ "../views/streets/Streets.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// navigation guard to check for logged in users
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

auth.onAuthStateChanged(() => {
  console.log(auth.currentUser)
});

export default router;
