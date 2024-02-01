<template>
  <div class="inset-x-0" :class="{ 'fixed bottom-0': fixed }">
    <div :class="class600">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span
              v-if="$slots.icon"
              class="flex p-2 rounded-lg"
              :class="class800"
            >
              <span class="text-white h-6 w-6">
                <slot name="icon" />
              </span>
            </span>
            <div class="ml-3 font-medium text-white">
              <slot />
            </div>
          </div>
          <div
            v-if="$slots.action"
            class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto space-x-4"
          >
            <slot name="action" />
          </div>
          <!-- <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span class="sr-only">Dismiss</span>
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "indigo",
  },
  fixed: {
    type: Boolean,
    default: false,
  },
});

const class600 = computed(() => {
  switch (props.color) {
    case "indigo":
    default:
      return "bg-indigo-600";
    case "amber":
      return "bg-amber-600";
    case "black":
      return "bg-zinc-800";
  }
});

const class800 = computed(() => {
  switch (props.color) {
    case "indigo":
    default:
      return "bg-indigo-800";
    case "amber":
      return "bg-amber-800";
    case "black":
      return "bg-zinc-600";
  }
});
</script>
