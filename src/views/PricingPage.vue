<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50 -mt-16">
    <div class="relative bg-gray-800">
      <!-- Overlapping background -->
      <div aria-hidden="true" class="hidden absolute bg-gray-50 w-full h-6 bottom-0 lg:block" />

      <h2 class="sr-only">Plans</h2>

      <!-- Toggle -->
      <div class="relative flex justify-center">
        <div class="bg-indigo-700 p-0.5 rounded-lg flex">
          <button
            type="button"
            class="relative py-2 px-6 border-indigo-700 rounded-md shadow-sm text-sm font-medium whitespace-nowrap focus:ring-offset-indigo-700 focus:ring-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:z-10"
            :class="{
              'text-indigo-700 hover:bg-indigo-50  bg-white': billingModeMonthly,
              'text-indigo-200 hover:bg-indigo-800 ': !billingModeMonthly
            }"
            @click="billingModeMonthly = true"
          >
            Monthly billing
          </button>
          <button
            type="button"
            class="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white focus:z-10"
            :class="{
              'text-indigo-200 hover:bg-indigo-800 ': billingModeMonthly,
              'text-indigo-700 hover:bg-indigo-50 bg-white': !billingModeMonthly
            }"
            @click="billingModeMonthly = false"
          >
            Yearly billing
          </button>
        </div>
      </div>

      <!-- Cards -->
      <div
        class="relative mt-8 max-w-2xl mx-auto px-4 pb-8 sm:mt-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-0"
      >
        <!-- Decorative background -->
        <div
          aria-hidden="true"
          class="hidden absolute top-4 bottom-6 left-8 right-8 inset-0 bg-indigo-700 rounded-tl-lg rounded-tr-lg lg:block"
        />

        <div class="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
          <div
            v-for="plan in plans"
            :key="plan.title"
            :class="[
              plan.featured
                ? 'bg-white ring-2 ring-indigo-700 shadow-md'
                : 'bg-indigo-700 lg:bg-transparent',
              'relative pt-6 px-6 pb-3 rounded-lg lg:px-8 lg:pt-12'
            ]"
          >
            <div>
              <h3
                :class="[
                  plan.featured ? 'text-indigo-600' : 'text-white',
                  'text-sm font-semibold uppercase tracking-wide'
                ]"
              >
                {{ plan.title }}
              </h3>
              <p
                v-if="plan.mostPopular"
                class="absolute top-0 py-1.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wide text-white -translate-y-3 bg-amber-500"
              >
                Use CYBRWEEK22 discount code for 50% off
              </p>
              <div
                class="flex flex-col items-start sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-start"
              >
                <div v-if="plan.priceMonthly > 0" class="mt-3 flex items-center">
                  <p
                    :class="[
                      plan.featured ? 'text-indigo-600' : 'text-white',
                      'text-4xl font-extrabold tracking-tight'
                    ]"
                  >
                    {{
                      parseInt(
                        (billingModeMonthly ? plan.priceMonthly : plan.priceYearly) *
                          (discount / 100) *
                          100
                      ) / 100
                    }}€
                  </p>
                  <div v-if="discount" class="ml-4">
                    <p
                      :class="[
                        plan.featured ? 'text-gray-700' : 'text-white',
                        'text-sm line-through'
                      ]"
                    >
                      {{ billingModeMonthly ? plan.priceMonthly : plan.priceYearly }}€
                    </p>
                    <p :class="[plan.featured ? 'text-amber-500' : 'text-amber-500', 'text-sm']">
                      Save {{ discount }}% off
                    </p>
                  </div>
                  <div v-else class="ml-4">
                    <p :class="[plan.featured ? 'text-gray-700' : 'text-white', 'text-sm']">
                      EUR / {{ billingModeMonthly ? "mo" : "yr" }}
                    </p>
                    <p :class="[plan.featured ? 'text-gray-500' : 'text-indigo-200', 'text-sm']">
                      Billed {{ billingModeMonthly ? "yearly" : "monthly" }} ({{
                        !billingModeMonthly ? plan.priceMonthly : plan.priceYearly
                      }}€)
                    </p>
                  </div>
                </div>
                <div v-else class="mt-3 flex items-center">
                  <p
                    :class="[
                      plan.featured ? 'text-indigo-600' : 'text-white',
                      'text-4xl font-extrabold tracking-tight'
                    ]"
                  >
                    {{ plan.priceMonthly }}
                  </p>
                  <div class="ml-4">
                    <p :class="[plan.featured ? 'text-gray-700' : 'text-white', 'text-sm']">
                      (forever)
                    </p>
                  </div>
                </div>
                <a
                  v-if="plan.priceMonthly > 0"
                  href="https://app.skedr.io/auth/create-account"
                  :class="[
                    plan.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-white text-indigo-600 hover:bg-indigo-50',
                    'pricing-buy mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                  ]"
                >
                  Buy {{ plan.title }}
                </a>
                <a
                  v-else
                  href="https://app.skedr.io/auth/create-account"
                  :class="[
                    plan.featured
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-white text-indigo-600 hover:bg-indigo-50',
                    'pricing-buy mt-6 w-full inline-block py-2 px-8 border border-transparent rounded-md shadow-sm text-center text-sm font-medium sm:mt-0 sm:w-auto lg:mt-6 lg:w-full'
                  ]"
                >
                  Try it for free
                </a>
              </div>
            </div>
            <h4 class="sr-only">Features</h4>
            <ul
              role="list"
              :class="[
                plan.featured
                  ? 'border-gray-200 divide-gray-200'
                  : 'border-indigo-500 divide-indigo-500 divide-opacity-75',
                'mt-7 border-t divide-y lg:border-t-0'
              ]"
            >
              <li
                v-for="mainFeature in plan.mainFeatures"
                :key="mainFeature.id"
                class="py-3 flex items-center"
              >
                <CheckIcon
                  :class="[
                    plan.featured ? 'text-indigo-500' : 'text-indigo-200',
                    'w-5 h-5 flex-shrink-0'
                  ]"
                  aria-hidden="true"
                />
                <span
                  :class="[
                    plan.featured ? 'text-gray-600' : 'text-white',
                    'ml-3 text-sm font-medium'
                  ]"
                >
                  {{ mainFeature.value }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature comparison (up to lg) -->
    <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
      <h2 id="mobile-comparison-heading" class="sr-only">Feature comparison</h2>

      <div class="max-w-2xl mx-auto py-16 px-4 space-y-16 sm:px-6">
        <div
          v-for="(plan, mobilePlanIndex) in plans"
          :key="mobilePlanIndex"
          class="border-t border-gray-200"
        >
          <div
            :class="[
              plan.featured ? 'border-indigo-600' : 'border-transparent',
              '-mt-px pt-6 border-t-2 sm:w-1/2'
            ]"
          >
            <h3 :class="[plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold']">
              {{ plan.title }}
            </h3>
            <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
          </div>
          <h4 class="mt-10 text-sm font-bold text-gray-900">Features</h4>

          <div class="mt-6 relative">
            <!-- Fake card background -->
            <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
              <div
                :class="[
                  plan.featured ? 'shadow-md' : 'shadow',
                  'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                ]"
              />
            </div>

            <div
              :class="[
                plan.featured
                  ? 'ring-2 ring-indigo-600 shadow-md'
                  : 'ring-1 ring-black ring-opacity-5 shadow',
                'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
              ]"
            >
              <dl class="divide-y divide-gray-200">
                <div
                  v-for="feature in features"
                  :key="feature.title"
                  class="py-3 flex items-center justify-between sm:grid sm:grid-cols-2"
                >
                  <dt class="pr-4 text-sm font-medium text-gray-600">{{ feature.title }}</dt>
                  <dd class="flex items-center justify-end sm:px-4 sm:justify-center">
                    <span
                      v-if="typeof feature.tiers[mobilePlanIndex].value === 'string'"
                      :class="[
                        feature.tiers[mobilePlanIndex].featured
                          ? 'text-indigo-600'
                          : 'text-gray-900',
                        'text-sm font-medium'
                      ]"
                    >
                      {{ feature.tiers[mobilePlanIndex].value }}
                    </span>
                    <template v-else>
                      <CheckIcon
                        v-if="feature.tiers[mobilePlanIndex].value === true"
                        class="mx-auto h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      <XIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span class="sr-only">
                        {{ feature.tiers[mobilePlanIndex].value === true ? "Yes" : "No" }}
                      </span>
                    </template>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Fake card border -->
            <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
              <div
                :class="[
                  plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                  'absolute right-0 w-1/2 h-full rounded-lg'
                ]"
              />
            </div>
          </div>

          <h4 class="mt-10 text-sm font-bold text-gray-900">Other perks</h4>

          <div class="mt-6 relative">
            <!-- Fake card background -->
            <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
              <div
                :class="[
                  plan.featured ? 'shadow-md' : 'shadow',
                  'absolute right-0 w-1/2 h-full bg-white rounded-lg'
                ]"
              />
            </div>

            <div
              :class="[
                plan.featured
                  ? 'ring-2 ring-indigo-600 shadow-md'
                  : 'ring-1 ring-black ring-opacity-5 shadow',
                'relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none'
              ]"
            >
              <dl class="divide-y divide-gray-200">
                <div
                  v-for="perk in perks"
                  :key="perk.title"
                  class="py-3 flex justify-between sm:grid sm:grid-cols-2"
                >
                  <dt class="text-sm font-medium text-gray-600 sm:pr-4">{{ perk.title }}</dt>
                  <dd class="text-center sm:px-4">
                    <CheckIcon
                      v-if="perk.tiers[mobilePlanIndex].value === true"
                      class="mx-auto h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    <XIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="sr-only">
                      {{ perk.tiers[mobilePlanIndex].value === true ? "Yes" : "No" }}
                    </span>
                  </dd>
                </div>
              </dl>
            </div>

            <!-- Fake card border -->
            <div aria-hidden="true" class="hidden absolute inset-0 pointer-events-none sm:block">
              <div
                :class="[
                  plan.featured ? 'ring-2 ring-indigo-600' : 'ring-1 ring-black ring-opacity-5',
                  'absolute right-0 w-1/2 h-full rounded-lg'
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature comparison (lg+) -->
    <section aria-labelledby="comparison-heading" class="hidden lg:block">
      <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>

      <div class="max-w-7xl mx-auto py-24 px-8">
        <div class="w-full border-t border-gray-200 flex items-stretch">
          <div class="-mt-px w-1/4 py-6 pr-4 flex items-end">
            <h3 class="mt-auto text-sm font-bold text-gray-900">Features</h3>
          </div>
          <div
            v-for="(plan, planIdx) in plans"
            :key="plan.title"
            aria-hidden="true"
            :class="[planIdx === plans.length - 1 ? '' : 'pr-4', '-mt-px pl-4 w-1/4']"
          >
            <div
              :class="[
                plan.featured ? 'border-indigo-600' : 'border-transparent',
                'py-6 border-t-2'
              ]"
            >
              <p
                :class="[plan.featured ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-bold']"
              >
                {{ plan.title }}
              </p>
              <p class="mt-2 text-sm text-gray-500">{{ plan.description }}</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Fake card backgrounds -->
          <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
            <div class="w-1/4 pr-4" />
            <div class="w-1/4 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
            <div class="w-1/4 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow-md" />
            </div>
            <div class="w-1/4 pl-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
          </div>

          <table class="relative w-full">
            <caption class="sr-only">Business feature comparison</caption>
            <thead>
              <tr class="text-left">
                <th scope="col">
                  <span class="sr-only">Feature</span>
                </th>
                <th v-for="plan in plans" :key="plan.title" scope="col">
                  <span class="sr-only">{{ plan.title }} plan</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="feature in features" :key="feature.title">
                <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                  {{ feature.title }}
                </th>
                <td
                  v-for="(tier, tierIdx) in feature.tiers"
                  :key="tier.title"
                  :class="[
                    tierIdx === feature.tiers.length - 1 ? 'pl-4' : 'px-4',
                    'relative w-1/4 py-0 text-center'
                  ]"
                >
                  <span class="relative w-full h-full py-3">
                    <span
                      v-if="typeof tier.value === 'string'"
                      :class="[
                        tier.featured ? 'text-indigo-600' : 'text-gray-900',
                        'text-sm font-medium'
                      ]"
                    >
                      {{ tier.value }}
                    </span>
                    <template v-else>
                      <CheckIcon
                        v-if="tier.value === true"
                        class="mx-auto h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      <XIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span class="sr-only">{{ tier.value === true ? "Yes" : "No" }}</span>
                    </template>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Fake card borders -->
          <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
            <div class="w-1/4 pr-4" />
            <div class="w-1/4 px-4">
              <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
            </div>
            <div class="w-1/4 px-4">
              <div class="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
            </div>
            <div class="w-1/4 pl-4">
              <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
            </div>
          </div>
        </div>

        <h3 class="mt-10 text-sm font-bold text-gray-900">Other perks</h3>

        <div class="mt-6 relative">
          <!-- Fake card backgrounds -->
          <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
            <div class="w-1/4 pr-4" />
            <div class="w-1/4 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
            <div class="w-1/4 px-4">
              <div class="w-full h-full bg-white rounded-lg shadow-md" />
            </div>
            <div class="w-1/4 pl-4">
              <div class="w-full h-full bg-white rounded-lg shadow" />
            </div>
          </div>

          <table class="relative w-full">
            <caption class="sr-only">Perk comparison</caption>
            <thead>
              <tr class="text-left">
                <th scope="col">
                  <span class="sr-only">Perk</span>
                </th>
                <th v-for="plan in plans" :key="plan.title" scope="col">
                  <span class="sr-only">{{ plan.title }} plan</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr v-for="perk in perks" :key="perk.title">
                <th scope="row" class="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                  {{ perk.title }}
                </th>
                <td
                  v-for="(tier, tierIdx) in perk.tiers"
                  :key="tier.title"
                  :class="[
                    tierIdx === perk.tiers.length - 1 ? 'pl-4' : 'px-4',
                    'relative w-1/4 py-0 text-center'
                  ]"
                >
                  <span class="relative w-full h-full py-3">
                    <CheckIcon
                      v-if="tier.value === true"
                      class="mx-auto h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    <XIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="sr-only">{{ tier.value === true ? "Yes" : "No" }}</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Fake card borders -->
          <div class="absolute inset-0 flex items-stretch pointer-events-none" aria-hidden="true">
            <div class="w-1/4 pr-4" />
            <div class="w-1/4 px-4">
              <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
            </div>
            <div class="w-1/4 px-4">
              <div class="w-full h-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
            </div>
            <div class="w-1/4 pl-4">
              <div class="w-full h-full rounded-lg ring-1 ring-black ring-opacity-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="bg-indigo-700">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white">Frequently asked questions</h2>
      <div class="mt-6 border-t border-indigo-300/25 pt-10">
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
  import { CheckIcon, XIcon } from "@heroicons/vue/solid"
  import { ref } from "vue"

  const upToGroups = 25
  const discount = 50

  const plans = [
    {
      title: "Starter",
      featured: false,
      description: "Try it forever for free.",
      priceMonthly: "Free",
      priceYearly: "Free",
      mainFeatures: [
        { id: 1, value: `You can join up to ${upToGroups} groups` },
        { id: 2, value: "Auto scheduling dismissed photos" },
        { id: 3, value: "Get tag suggestions" },
        { id: 4, value: "Ad comment [*]" }
      ]
    },
    {
      title: "Tandem",
      featured: true,
      description: "50% discount and help spreading Skedr",
      mostPopular: true,
      priceMonthly: 3.99,
      priceYearly: 39.99,
      mainFeatures: [
        { id: 1, value: "Join unlimited groups" },
        { id: 2, value: "Auto scheduling dismissed photos" },
        { id: 3, value: "Get tag suggestions" },
        { id: 4, value: "24/7 Helpline" },
        { id: 5, value: "Planning and instructions" },
        { id: 6, value: "Ad comment [*]" }
      ]
    },
    {
      title: "Premium",
      featured: false,
      description: "No ad comments or promotional comments by Skedr.io",
      priceMonthly: 7.99,
      priceYearly: 79.99,
      mainFeatures: [
        { id: 1, value: "Join unlimited groups" },
        { id: 2, value: "Auto scheduling dismissed photos" },
        { id: 3, value: "Get tag suggestions" },
        { id: 4, value: "24/7 Helpline" },
        { id: 5, value: "Planning and instructions" }
      ]
    }
  ]
  const features = [
    {
      title: "Auto sharing photos",
      tiers: [
        { title: "starter", value: `Up to ${upToGroups} groups` },
        { title: "popular", featured: false, value: "Join unlimited groups" },
        { title: "intermediate", value: "Join unlimited groups" }
      ]
    },
    {
      title: "Auto scheduling reshare",
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true }
      ]
    },
    {
      title: "Suggest Tags for autoimport groups",
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true }
      ]
    }
  ]
  const perks = [
    {
      title: "24/7 Helpline",
      tiers: [
        { title: "starter", value: false },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true }
      ]
    },
    {
      title: "Basic tools",
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true }
      ]
    },
    {
      title: "Planning and instructions",
      tiers: [
        { title: "starter", value: false },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: true }
      ]
    },
    {
      title: "Ad Comment by Skedr.io [*]",
      tiers: [
        { title: "starter", value: true },
        { title: "popular", featured: true, value: true },
        { title: "intermediate", value: false }
      ]
    }
  ]

  const faqs = [
    {
      id: 1,
      question: "Payment Methods used",
      answer:
        "Currently you can pay with your credit card or with <a href='https://paypal.com' rel='nofolow' target='_blank' class='underline' >PayPal</a>. We use <a href='https://paddle.com' target='_blank' rel='nofolow' class='underline' >Paddle</a> to manage our subscription payments. "
    },
    {
      id: 2,
      question: "Automatic grouping",
      answer:
        "Skedr.io bind your photographs and groups through tags. The photos are shared and uploaded to groups based on the labels. Images can have one or more tags each."
    },
    {
      id: 3,
      question: "Tag suggestions",
      answer:
        "See tags from photos uploaded to each group. It may help you find a relevant tag for you aswell."
    },
    {
      id: 4,
      question: "Auto-scheduling",
      answer:
        "Auto scheduling is when the photos are scheduled for resharing after any group dismisses them due to group restrictions."
    },
    {
      id: 5,
      question: "Get help with strategy and Configuration",
      answer:
        "Open the starting window, and you will be able to chat with the website team. You may ask for help, and the team will help you configure your photographs."
    },
    {
      id: 6,
      question: "Ad comment",
      answer:
        "Ad comment is a promotion comment added by Skedr on the photos that you upload. If you take the premium offer, you never face such ad comments. Otherwise, there will be a 50 per cent discount, and Skedr.io will also spread through the promotional commenting."
    }
  ]

  export default {
    components: {
      CheckIcon,
      XIcon
    },
    setup() {
      const billingModeMonthly = ref(true)
      return {
        discount,
        plans,
        features,
        perks,
        faqs,
        billingModeMonthly
      }
    }
  }
</script>
