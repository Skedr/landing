<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <footer class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="px-5 py-2">
          <router-link :to="item.to" class="text-base text-gray-300 hover:text-white">
            {{ item.name }}
          </router-link>
        </div>
      </nav>

      <p class="mt-8 text-center text-base text-gray-400">
        Get in touch at
        <a href="mailto:info@skedr.io" class="text-base text-gray-300 hover:text-white underline"
          >info@skedr.io</a
        >
        &mdash; &copy; 2017-{{ actualYear }} Skedr.io all rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
  const navigation = {
    main: [
      { name: "Pricing", to: { name: "pricing" } },
      { name: "Faq", to: { name: "faq" } },
      { name: "Privacy policy", to: { name: "privacy" } },
      { name: "Terms and conditions", to: { name: "terms" } }
    ]
  }

  export default {
    setup() {
      const actualYear = new Date().getFullYear()

      return {
        navigation,
        actualYear
      }
    }
  }
</script>
