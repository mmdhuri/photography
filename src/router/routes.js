const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
  {
    path: "/about-us",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/components/AboutUs.vue") },
    ],
  },
  {
    path: "/contact-us",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/components/ContactUs.vue") },
    ],
  },
  {
    path: "/my-videos",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/components/MyVideos.vue") },
    ],
  },
];

export default routes;
