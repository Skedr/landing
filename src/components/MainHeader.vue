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
              <a href="#" class="flex">
                <span class="sr-only">Skedr.io</span>
                <img class="h-9 w-auto sm:h-10" src="/logo/brand_logo.svg" alt="Skedr.io logo" />
                <img
                  class="ml-4 h-9 w-auto hidden sm:flex"
                  src="/logo/brand_name.svg"
                  alt="Skedr.io brand"
                />
              </a>
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
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="font-medium text-white hover:text-gray-300"
                >{{ item.name }}</a
              >
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

      <main class="mt-16 sm:mt-24">
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="
                px-4
                sm:px-6 sm:text-center
                md:max-w-2xl md:mx-auto
                lg:col-span-6 lg:text-left lg:flex lg:items-center
              "
            >
              <div>
                <a
                  href="https://www.youtube.com/watch?v=kmrx4iBRLDc"
                  target="_blank"
                  class="
                    inline-flex
                    items-center
                    text-white
                    bg-gray-900
                    rounded-full
                    p-1
                    pr-2
                    sm:text-base
                    lg:text-sm
                    xl:text-base
                    hover:text-gray-200
                  "
                >
                  <span
                    class="
                      px-3
                      py-0.5
                      text-white text-xs
                      font-semibold
                      leading-5
                      uppercase
                      tracking-wide
                      bg-indigo-500
                      rounded-full
                    "
                    >Video</span
                  >
                  <span class="ml-4 text-sm">Automate your share workflow</span>
                  <ChevronRightIcon class="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
                </a>
                <h1
                  class="
                    mt-4
                    text-4xl
                    tracking-tight
                    font-extrabold
                    text-white
                    sm:mt-5 sm:leading-none
                    lg:mt-6 lg:text-5xl
                    xl:text-6xl
                  "
                >
                  <span class="md:block">Spend less time</span>
                  {{ " " }}
                  <span class="text-indigo-400 md:block">sharing photos to Flickr groups</span>
                </h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  We have improved your group sharing workflow<br />
                  Flickr is a great tool and using photo groups is a great way to enjoy other people
                  photos. But let's face it, the tool experience can be way better.<br />
                  We, as users, have taken the time to improve that part.
                </p>
                <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0 flex">
                  <a
                    href="#"
                    class="
                      mx-auto
                      bg-yellow-500
                      hover:bg-yellow-400
                      border border-yellow-800
                      rounded-md
                      shadow
                      px-5
                      py-3
                      inline-flex
                      items-center
                      text-base
                      font-medium
                      text-white
                    "
                    >Try it for free
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div class="sm:mx-auto sm:max-w-3xl sm:px-6">
                <div
                  class="
                    py-12
                    sm:relative sm:mt-20 sm:py-12
                    lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2
                  "
                >
                  <div class="hidden sm:block">
                    <div
                      class="
                        absolute
                        inset-y-0
                        left-1/2
                        w-screen
                        bg-gray-700
                        rounded-l-3xl
                        lg:left-80 lg:right-0 lg:w-full
                      "
                    />
                    <svg
                      class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                      width="404"
                      height="392"
                      fill="none"
                      viewBox="0 0 404 392"
                    >
                      <defs>
                        <pattern
                          id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x="0"
                            y="0"
                            width="4"
                            height="4"
                            class="text-gray-600"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width="404"
                        height="392"
                        fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                      />
                    </svg>
                  </div>
                  <div
                    class="
                      relative
                      pl-4
                      -mr-40
                      sm:mx-auto sm:max-w-3xl sm:px-0
                      lg:max-w-none lg:h-full lg:pl-12
                    "
                  >
                    <img
                      class="
                        w-full
                        rounded-md
                        shadow-xl
                        ring-1 ring-black ring-opacity-5
                        lg:h-full lg:w-auto lg:max-w-none
                      "
                      src="/screenshot.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue"
  import { MenuIcon, XIcon } from "@heroicons/vue/outline"
  import { ChevronRightIcon } from "@heroicons/vue/solid"

  const navigation = [
    { name: "How it works", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "FAQ", href: "#" }
  ]

  export default {
    components: {
      Popover,
      PopoverButton,
      PopoverPanel,
      ChevronRightIcon,
      MenuIcon,
      XIcon
    },
    setup() {
      return {
        navigation
      }
    }
  }
</script>
