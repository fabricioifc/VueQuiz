import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Sobre from "@/components/Sobre";
import Quiz from "@/components/Quiz";
import PostList from "@/components/Post/PostList";
import PostDetail from "@/components/Post/PostDetail";
import PostForm from "@/components/Post/PostForm";
import Login from "@/components/Login";

import { auth } from "@/database";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      props: { msg: "Página Inicial" },
      meta: {}
    },
    {
      path: "/sobre",
      name: "sobre",
      component: Sobre,
      props: { msg: "Sobre Nós" },
      meta: {}
    },
    {
      path: "/quiz",
      name: "quiz",
      component: Quiz,
      props: {},
      meta: { requiresAuth: true }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { requiresGuest: true }
    },
    {
      path: "/logout",
      name: "logout",
      meta: { logout: true }
    },
    {
      path: "/posts",
      name: "PostList",
      component: PostList,
      props: {},
      meta: {}
    },
    {
      path: "/add-post",
      name: "PostForm",
      component: PostForm,
      props: {},
      meta: { requiresAuth: true }
    },
    {
      path: "/post-detail/:id",
      name: "PostDetail",
      component: PostDetail,
      props: {},
      meta: {}
    }
  ]
});

// Nav Guard
router.beforeEach((to, from, next) => {
  console.log(auth.currentUser);
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!auth.currentUser) {
      // Go to login
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (auth.currentUser) {
      // Go to login
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.logout)) {
    if (auth.currentUser) {
      auth.signOut().then(() => {
        next({ path: "/", query: { redirect: to.fullPath } });
      });
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;
