<template>
  <footer class="bg-gray-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Solutions
              </h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-300 hover:text-white">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.support" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-300 hover:text-white">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.company" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-300 hover:text-white">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul role="list" class="mt-4 space-y-4">
                <li v-for="item in navigation.legal" :key="item.name">
                  <a :href="item.href" class="text-base text-gray-300 hover:text-white">
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            Subscribe to our newsletter
          </h3>
          <p class="mt-4 text-base text-gray-300">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form class="mt-4 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              type="email"
              name="email-address"
              autocomplete="email"
              required=""
              class="
                appearance-none
                min-w-0
                w-full
                bg-white
                border border-transparent
                rounded-md
                py-2
                px-4
                text-base text-gray-900
                placeholder-gray-500
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-800
                focus:ring-white
                focus:border-white
                focus:placeholder-gray-400
              "
              placeholder="Enter your email"
            />
            <div class="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                class="
                  w-full
                  bg-indigo-500
                  border border-transparent
                  rounded-md
                  py-2
                  px-4
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-indigo-600
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-offset-gray-800
                  focus:ring-indigo-500
                "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
        <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
          &copy; 2021 Skedr.io All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  const navigation = {
    solutions: [
      { name: "Marketing", href: "#" },
      { name: "Analytics", href: "#" },
      { name: "Commerce", href: "#" },
      { name: "Insights", href: "#" }
    ],
    support: [
      { name: "Pricing", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Guides", href: "#" },
      { name: "API Status", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" }
    ],
    legal: [
      { name: "Claim", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" }
    ],
    social: []
  }

  export default {
    setup() {
      return {
        navigation
      }
    }
  }
</script>
