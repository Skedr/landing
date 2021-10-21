<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white pt-16 pb-32 overflow-hidden">
    <div
      class="
        lg:mx-auto
        lg:max-w-7xl
        lg:px-8
        lg:grid
        lg:grid-cols-2
        lg:grid-flow-col-dense
        lg:gap-24
      "
    >
      <div
        class="
          px-4
          max-w-xl
          mx-auto
          sm:px-6
          lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2
        "
      >
        <div>
          <dl class="space-y-10">
            <div
              v-for="item in transferFeatures"
              :key="item.id"
              class="relative"
            >
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
                  <component
                    :is="item.icon"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <p class="ml-16 text-lg leading-6 font-medium text-gray-900">
                  {{ item.name }}
                </p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">
                {{ item.description }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
        <div
          class="
            pr-4
            -ml-48
            sm:pr-6
            md:-ml-16
            lg:px-0 lg:m-0 lg:relative lg:h-full
          "
        >
          <img
            class="
              w-full
              rounded-xl
              shadow-xl
              ring-1 ring-black ring-opacity-5
              lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none
            "
            src="/screenshot_manage_tags.png"
            alt="Customer profile user interface"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    GlobeIcon,
    LightBulbIcon,
    PhotographIcon,
  } from "@heroicons/vue/outline";

  const transferFeatures = [
    {
      id: 1,
      name: "For professionals",
      description:
        "Share your work easily with any group at any time. Focus on finding new clients. We will share your photos.",
      icon: GlobeIcon,
    },
    {
      id: 2,
      name: "For enthusiasts",
      description:
        "Gain views and likes by easily sharing your pictures in lots of groups. Don't waste your time and improve your photography skills.",
      icon: LightBulbIcon,
    },
    {
      id: 3,
      name: "For beginners",
      description:
        "Improve your shots and photography through other photographer’s eyes. Share and discover. And always have fun.",
      icon: PhotographIcon,
    },
  ];

  export default {
    setup() {
      return {
        transferFeatures,
      };
    },
  };
</script>