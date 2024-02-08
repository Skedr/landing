<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gradient-to-r from-indigo-800 via-indigo-500 to-indigo-800">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
          Skedr users boosting their productivity
        </h2>
        <p class="mt-3 text-xl text-indigo-200 sm:mt-4">
          Spending less time sharing photos to Flickr groups.
        </p>
      </div>
      <dl
        class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8"
      >
        <div class="flex flex-col">
          <dt
            class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200"
          >
            tagged groups
          </dt>
          <dd class="order-1 text-5xl font-extrabold text-white">
            {{ configuredGroups }}
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt
            class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200"
          >
            auto scheduled photos
          </dt>
          <dd class="order-1 text-5xl font-extrabold text-white">
            {{ scheduledPhotos }}
          </dd>
        </div>
        <div class="flex flex-col mt-10 sm:mt-0">
          <dt
            class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200"
          >
            shared photos
          </dt>
          <dd class="order-1 text-5xl font-extrabold text-white">
            {{ amount }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const parseInt = (value) => {
      return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    };
    const configuredGroups = ref(0);
    const scheduledPhotos = ref(0);
    const amount = ref(0);

    onMounted(async () => {
      const fetchedData = await fetch(
        `${import.meta.env.PUBLIC_URL}/totals`,
      ).then((res) => res.json());
      configuredGroups.value = parseInt(fetchedData.configuredGroups);
      scheduledPhotos.value = parseInt(fetchedData.scheduledPhotos);
      amount.value = parseInt(fetchedData.amount);
    });
    return { configuredGroups, scheduledPhotos, amount };
  },
};
</script>
