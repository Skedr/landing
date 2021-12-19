<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Automate your share workflow
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          From sharing your photos automatically through your tags to sharing them again due to
          group restriction limits
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div
                class="
                  absolute
                  flex
                  items-center
                  justify-center
                  h-12
                  w-12
                  rounded-md
                  bg-indigo-500
                  text-white
                "
              >
                <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  import { AnnotationIcon, ClockIcon, HashtagIcon, RefreshIcon } from "@heroicons/vue/outline"

  const features = [
    {
      name: "Tag your groups and photos",
      description:
        "When you upload a new photo, it will be automatically added to your groups by means of the desired tag/s. One shot configuration.",
      icon: HashtagIcon
    },
    {
      name: "Auto schedule built-in",
      description:
        "Every rejected photo due to group restriction limits is autoscheduled for reshare. You won't miss it.",
      icon: RefreshIcon
    },
    {
      name: "Auto scheduled photos section",
      description:
        "Auto schedule page shows your auto scheduled photos in a timeline that makes it easy to see what will be shared again",
      icon: ClockIcon
    },
    {
      name: "Engage with more users",
      description:
        "Sharing photos to more groups will make your photos more visible at Flickr. Gaining views and likes.",
      icon: AnnotationIcon
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
