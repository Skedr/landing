<template>
  <main class="mt-4 sm:mt-24">
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
              >
                Video
              </span>
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
              <span class="md:block">Sharing photos</span>
              {{ " " }}
              <span class="text-indigo-400 md:block">to Flickr groups made easier</span>
            </h1>
            <p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Skedr.io, a tool automating the process of group photo sharing on Flickr.
              <br />
              We have taken the time to work on the experience. Invest less energy and time by
              sharing photos to Flickr groups automatically.
            </p>
            <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0 flex">
              <a
                href="https://app.skedr.io/auth/create-account"
                class="
                  try-it-for-free
                  mx-auto
                  bg-amber-500
                  hover:bg-amber-600
                  border border-amber-600
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
              >
                Try it for free
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
                  src="/screenshot.png"
                  class="
                    w-full
                    rounded-md
                    shadow-xl
                    ring-1 ring-black ring-opacity-5
                    lg:h-full lg:w-auto lg:max-w-none
                  "
                  width="735"
                  height="510"
                  alt="Groups view for skedr.io. List of joined groups and tag cloud of configured tags."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { ChevronRightIcon } from "@heroicons/vue/solid"

  export default {
    components: {
      ChevronRightIcon
    }
  }
</script>
