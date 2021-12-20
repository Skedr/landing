<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-indigo-700">
    <div
      class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white tracking-tight">
        All you need to share your photos at scale
      </h2>
      <p class="mt-4 max-w-3xl text-lg text-indigo-200">
        Skedr.io will help you succed in getting your free time back. Configure each group with a
        tag and do not worry on anything else. Upload your tagged photos to see them be shared or
        auto scheduled when a group's limit is hit.
      </p>
      <div
        class="
          mt-12
          grid grid-cols-1
          gap-x-6 gap-y-12
          sm:grid-cols-2
          lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16
        "
      >
        <div v-for="feature in features" :key="feature.name">
          <div>
            <span
              class="
                flex
                items-center
                justify-center
                h-12
                w-min
                text-white
                px-3
                py-2
                rounded-md
                bg-white bg-opacity-10
              "
            >
              <component :is="feature.icon" class="h-6 w-6 text-white mr-1.5" aria-hidden="true" />
              {{ feature.name }}
            </span>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-medium text-white"></h3>
            <p class="mt-2 text-base text-indigo-200">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { CollectionIcon, CalendarIcon, UsersIcon } from "@heroicons/vue/outline"

  const features = [
    {
      name: "Groups",
      description:
        "Manage your groups. Find the best tags for each one. Search your joined groups or find new ones to share your photos. All in one place.",
      icon: CollectionIcon
    },
    {
      name: "Photostream",
      description:
        "The fastest way of seeing each photo statistics. Views, shared groups and likes in one place. Manage each photo's tags too. ",
      icon: UsersIcon
    },
    {
      name: "Scheduled",
      description:
        "For each day and each group see which photos are auto scheduled to be shared later ( when the group limits allow it ).",
      icon: CalendarIcon
    }
  ]

  export default {
    setup() {
      return {
        features
      }
    }
  }
</script>
