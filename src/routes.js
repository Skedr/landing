export const routes = [
  {
    path: "/articles/group-tagging",
    name: "tags",
    components: {
      default: () => import("./views/TagsPage.vue"),
      header: () => import("./components/headers/HeaderTags.vue")
    }
  },
  {
    path: "/articles/share-single-photo",
    redirect: "/features"
  }
]
