<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-indigo-700">
    <div
      class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
    >
      <h2 class="text-3xl font-extrabold text-white tracking-tight">What you need</h2>
      <p class="mt-4 max-w-3xl text-lg text-indigo-200">
        Skedr.io will save your time and make it easy for you to share your photos with tags. Upload
        tagged pictures and see how Skedr uploads them to the tagged groups automatically. See how
        your images are auto-shared when a limit is reached.
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
            <p class="mt-2 text-base text-indigo-200" v-html="feature.description"></p>
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
        "Deal with your groups. Join plenty of groups. Groups are about more than just posting; it is about contributing to the site. Before tagging, track down the best tags for every group. Search your joined groups or track down new ones to share your photographs. All in one place!",
      icon: CollectionIcon
    },
    {
      name: "Photostream",
      description:
        "The quickest approach to seeing every photograph measurement. Views, likes, shared groups, and preferences in a single spot. Deal with every photograph's tags as well.<br /> Comment regularly and interact as much as you can as this will make you well known and bring traffic to your photographs.",
      icon: UsersIcon
    },
    {
      name: "Scheduled",
      description:
        "For every day and group, see which photographs are auto-scheduled to be shared later (when as far as group limits permit it).",
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
