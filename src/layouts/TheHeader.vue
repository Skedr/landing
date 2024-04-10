
<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";


defineProps({
  currentPath: {
    type: String,
    required: true
  }
})

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  // { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

const mobileMenuOpen = ref(false);
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-2 lg:pl-4 lg:pr-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5 inline-flex">
          <span class="sr-only">Skedr</span>
          <img
            src="/SkedrBrand.svg"
            class="h-16 w-auto"
            alt="Skedr"
          />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-10">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-semibold leading-6 text-white px-2 py-1 rounded-lg hover:bg-indigo-700"
          :class="{'bg-indigo-500': item.href === currentPath}"
        >
          {{ item.name }}
        </a>
        <button
          data-open-beacon
          class="text-sm font-semibold text-white cursor-pointer px-2 py-1 rounded-lg hover:bg-indigo-700"
        >
          Support
        </button>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end space-x-2">
        <a
          href="https://app.skedr.io/"
          class="log-in text-sm font-semibold leading-6 text-white rounded-lg px-2 py-1 hover:bg-indigo-700"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-4 p-1.5 inline-flex">
            <span class="sr-only">Skedr</span>
            <img
              src="/SkedrBrand.svg"
              class="h-16 w-auto"
              alt="Skedr"
              width="48"
              height="40"
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-400"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="py-6">
              <a
                href="https://app.skedr.io/"
                class="log-in -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

