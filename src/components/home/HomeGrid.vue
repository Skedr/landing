<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</p>
        <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Automatic photo sharing
        </h2>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Share your photographs to Flick groups by tags
          <br />
          and reshare them in case of group restriction limits.
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
              <h2 class="ml-16 text-lg leading-6 font-medium text-gray-900">
                {{ feature.name }}
              </h2>
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
      name: "Tag your photographs and groups",
      description:
        "Label your photographs and get them automatically added to groups through the ideal tags.",
      icon: HashtagIcon
    },
    {
      name: "Auto-scheduled for resharing",
      description:
        "Each dismissed photograph is scheduled for resharing automatically; this way, you will never miss it. Saves time!",
      icon: RefreshIcon
    },
    {
      name: "Auto scheduled photos section",
      description:
        "Auto schedule page shows your auto scheduled photos in a timeline that makes it easy to see what will be shared again.",
      icon: ClockIcon
    },
    {
      name: "Gain likes and views",
      description:
        "Engage with users by sharing photos with additional groups. This will make your photographs more apparent on Flickr. You are acquiring likes and gaining views for your pictures.",
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
