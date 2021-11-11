<template>
  <div class="relative bg-gray-800 overflow-hidden pb-8 sm:pb-12 lg:pb-12">
    <div class="hidden sm:block sm:absolute sm:inset-0" aria-hidden="true">
      <svg
        class="
          absolute
          bottom-0
          right-0
          transform
          translate-x-1/2
          mb-48
          text-gray-700
          lg:top-0 lg:mt-28 lg:mb-0
          xl:transform-none xl:translate-x-0
        "
        width="364"
        height="384"
        viewBox="0 0 364 384"
        fill="none"
      >
        <defs>
          <pattern
            id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="364" height="384" fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)" />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 sm:pb-24">
      <Popover>
        <nav
          class="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div class="flex items-center flex-1">
            <div class="flex items-center justify-between w-full md:w-auto">
              <router-link :to="{ name: 'home' }" class="flex">
                <span class="sr-only">Skedr.io</span>
                <img class="h-9 w-auto sm:h-10" src="/logo/brand_logo.svg" alt="Skedr.io logo" />
                <img
                  class="ml-4 h-9 w-auto hidden sm:flex"
                  src="/logo/brand_name.svg"
                  alt="Skedr.io brand"
                />
              </router-link>
              <div class="-mr-2 flex items-center md:hidden">
                <PopoverButton
                  class="
                    bg-gray-800
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:bg-gray-700
                    focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white
                  "
                >
                  <span class="sr-only">Open main menu</span>
                  <MenuIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="hidden space-x-10 md:flex md:ml-10">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="font-medium text-white hover:text-gray-300"
              >
                {{ item.name }}
              </router-link>
              <a class="font-medium text-white hover:text-gray-300 cursor-pointer" @click.prevent="openBeacon()">
                Support
              </a>
            </div>
          </div>
          <div class="hidden md:flex">
            <a
              href="#"
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                text-sm
                font-medium
                rounded-md
                text-white
                bg-gray-600
                hover:bg-gray-700
              "
            >
              Log in
            </a>
          </div>
        </nav>

        <transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="duration-100 ease-in"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <PopoverPanel
            focus
            class="
              absolute
              z-10
              top-0
              inset-x-0
              p-2
              transition
              transform
              origin-top-right
              md:hidden
            "
          >
            <div
              class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    class="
                      bg-white
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-gray-400
                      hover:bg-gray-100
                      focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500
                    "
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="
                    block
                    px-3
                    py-2
                    rounded-md
                    text-base
                    font-medium
                    text-gray-700
                    hover:text-gray-900 hover:bg-gray-50
                  "
                  >{{ item.name }}</a
                >
              </div>
              <a
                href="#"
                class="
                  block
                  w-full
                  px-5
                  py-3
                  text-center
                  font-medium
                  text-indigo-600
                  bg-gray-50
                  hover:bg-gray-100
                "
              >
                Log in
              </a>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <slot />
    </div>
  </div>
</template>

<script>
  import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"
  import { MenuIcon, XIcon } from "@heroicons/vue/outline"

  const navigation = [
    { name: "How it works", to: { name: "HowItWorks" } },
    { name: "Pricing", to: { name: "pricing" } },
    { name: "Faq", to: { name: "faq" } }
  ]

  const openBeacon = () => {
    window.Beacon("toggle")
  }

  export default {
    components: {
      Popover,
      PopoverButton,
      PopoverPanel,
      MenuIcon,
      XIcon
    },
    setup() {
      return {
        navigation,
        openBeacon
      }
    }
  }
</script>
