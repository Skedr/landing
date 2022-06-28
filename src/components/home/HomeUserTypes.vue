<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-12 bg-indigo-700">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 text-white">
      <h2 class="text-3xl font-extrabold text-white tracking-tight sr-only">
        Skedr helps everyone
      </h2>
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
        <div v-for="feature in features" :key="feature.name">
          <dt class="flex">
            <div
              class="flex items-center justify-center h-12 w-12 rounded-md bg-white/10"
            >
              <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
            </div>
            <p class="ml-4 my-auto text-lg leading-6 font-medium">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 text-base text-indigo-200">
            {{ feature.description }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
  import { AcademicCapIcon, BeakerIcon, CameraIcon } from "@heroicons/vue/outline"

  const features = [
    {
      id: 1,
      name: "For experts",
      description:
        "Please share your work effectively by sharing it with various groups. We will share your photographs. Show what you got, receive appreciation, and get recognized globally.",
      icon: AcademicCapIcon
    },
    {
      id: 2,
      name: "For devotees",
      description:
        "Acquire perspectives and preferences by effectively sharing your photographs in loads of groups. Try not to burn through your time and further develop your photography abilities.",
      icon: CameraIcon
    },
    {
      id: 3,
      name: "For newbies",
      description:
        "Work on your shots and photography through other photographic artists’  eyes. Share and find. What's more, consistently have a good time",
      icon: BeakerIcon
    }
  ]
</script>
