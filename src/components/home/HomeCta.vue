<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div
        class="
          bg-gradient-to-r
          from-indigo-800
          via-indigo-900
          to-indigo-700
          rounded-lg
          shadow-xl
          overflow-hidden
          lg:grid lg:grid-cols-2 lg:gap-4
        "
      >
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">Ready to boost your productivity? </span>
              <span class="block">Start using Skedr today.</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">
              Save time with a new group sharing tool experience, made by users for users.
            </p>
            <a
              href="https://app.skedr.io/auth/create-account"
              class="
                mt-8
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
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            v-lazy="'/screenshot_scheduled.png'"
            class="
              transform
              translate-x-6 translate-y-6
              rounded-md
              shadow-lg
              object-cover object-left-top
              sm:translate-x-16
              lg:translate-y-20
            "
            alt="Skedr scheduled view"
          />
        </div>
      </div>
    </div>
  </div>
</template>
