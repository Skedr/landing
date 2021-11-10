<template>
  <div class="bg-gray-800">
    <div class="pb-12 bg-gray-50 sm:pb-16 lg:pb-24">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-gray-800" />
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-5xl lg:flex">
            <div class="flex-1 bg-white px-6 py-8 lg:p-12">
              <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">PRO subscription</h3>
              <p class="mt-6 text-base text-gray-500">
                Configure each of your groups with one or more tags <strong>only once</strong>.
                Every new photo tagged that matches one or more group tag will be shared
                automatically.<br />
                Throttled photos are automatically scheduled.
              </p>
              <div class="mt-8">
                <div class="flex items-center">
                  <h4
                    class="
                      flex-shrink-0
                      pr-4
                      bg-white
                      text-sm
                      tracking-wider
                      font-semibold
                      uppercase
                      text-indigo-600
                    "
                  >
                    What's included
                  </h4>
                  <div class="flex-1 border-t-2 border-gray-200" />
                </div>
                <ul
                  role="list"
                  class="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5"
                >
                  <li
                    v-for="feature in includedFeatures"
                    :key="feature"
                    class="flex items-start lg:col-span-1"
                  >
                    <div class="flex-shrink-0">
                      <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
                    </div>
                    <p class="ml-3 text-sm text-gray-700" v-html="feature" />
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="
                py-8
                px-6
                text-center
                bg-gray-50
                lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12
              "
            >
              <p class="text-lg leading-6 font-medium text-gray-900">Get your free time for</p>
              <div
                class="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900"
              >
                <span> 3.99&euro; </span>
                <span class="ml-3 text-xl font-medium text-gray-500"> /mo </span>
              </div>
              <p class="mt-4 text-sm">
                <a href="#" class="font-medium text-gray-500 underline">
                  Learn about our membership policy
                </a>
              </p>
              <div class="mt-6">
                <div class="rounded-md shadow">
                  <a
                    href="https://app.skedr.io/auth/create-account"
                    class="
                      flex
                      items-center
                      justify-center
                      px-5
                      py-3
                      border border-transparent
                      text-base
                      font-medium
                      rounded-md
                      text-white
                      bg-amber-500
                      hover:bg-amber-600
                      border-amber-600
                    "
                  >
                    Join now
                  </a>
                </div>
              </div>
              <!-- <div class="mt-4 text-sm">
                <a href="#" class="font-medium text-gray-900">
                  Get a free sample
                  {{ " " }}
                  <span class="font-normal text-gray-500"> (20MB) </span>
                </a>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="relative py-4">
        <div class="mx-auto max-w-md px-4 sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
          <p class="mt-5 max-w-prose mx-auto text-xl text-gray-700">
            Skedr.io is a self-developed tool, created by a Flickr and photo fan. By subscribing,
            you will be contributing to adding more functionalities and improvements.
          </p>
        </div>
      </div>

      <div class="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
        <div class="max-w-md mx-auto lg:max-w-5xl">
          <div
            class="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center shadow-inner"
          >
            <div class="flex-1">
              <div>
                <h3
                  class="
                    inline-flex
                    px-4
                    py-1
                    rounded-full
                    text-sm
                    font-semibold
                    tracking-wide
                    uppercase
                    bg-indigo-500
                    text-white
                    shadow-md
                  "
                >
                  for starters
                </h3>
              </div>
              <div class="mt-4 text-lg text-gray-600">
                Start for free configuring <strong>up to 10 autoimport groups</strong> without
                losing all other benefits. Once you are ready subscribe to configure unlimited
                groups.
              </div>
            </div>
            <div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
              <a
                href="https://app.skedr.io/auth/create-account"
                class="
                  flex
                  items-center
                  justify-center
                  px-5
                  py-3
                  border border-transparent
                  text-base
                  font-medium
                  rounded-md
                  text-white
                  bg-gray-500
                  hover:bg-gray-800
                  shadow-md
                "
              >
                Try it for free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-indigo-700">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white">Frequently asked questions</h2>
      <div class="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          <div v-for="faq in faqs" :key="faq.id">
            <dt class="text-lg leading-6 font-medium text-white">
              {{ faq.question }}
            </dt>
            <dd class="mt-2 text-base text-indigo-200" v-html="faq.answer" />
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
  import { CheckCircleIcon } from "@heroicons/vue/solid"

  const includedFeatures = [
    "<strong>Unlimited</strong> autoimport group tags",
    "<strong>Suggest Tags</strong> for autoimport group",
    "<strong>Auto schedule</strong> throttled photos",
    "<strong>Unlimited</strong> support"
  ]

  const faqs = [
    {
      id: 1,
      question: "What payment methods we can use?",
      answer:
        "Currently you can pay with your credit card or with <a href='https://paypal.com' rel='nofolow' target='_blank' class='underline' >PayPal</a>. We use <a href='https://paddle.com' target='_blank' rel='nofolow' class='underline' >Paddle</a> to manage our subscription payments. "
    },
    {
      id: 2,
      question: 'What\'s an "autoimport group"?',
      answer:
        "An autoimport group is one of your joined groups with a binding tag. In Skedr.io we bind your groups and photos through tags. Each photo has 1 or multiple tags that describe it. Adding the same tags to your groups let us share your photos to multiple groups."
    },
    {
      id: 3,
      question: 'What does "suggest tags"?',
      answer:
        "Suggest tags gets a list of ordered tags by percentage used in your photos shared to that group. If you don't have any shared photo we can't suggest tags."
    },
    {
      id: 4,
      question: 'What does "scheduled throttled photos"?',
      answer:
        "We automatically reschedule any photo that was rejected due to group restrictions. Each rescheduled photo is based on each group restriction."
    }
  ]

  export default {
    components: { CheckCircleIcon },
    setup() {
      return {
        includedFeatures,
        faqs
      }
    }
  }
</script>
