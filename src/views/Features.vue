<template>
  <FeaturesThreeColumn />
  <div class="relative bg-gray-50 pt-16 pb-32 overflow-hidden">
    <div class="relative">
      <div
        class="
          lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24
        "
      >
        <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div>
              <span
                class="
                  h-12
                  w-min
                  text-white
                  p-4
                  rounded-md
                  flex
                  items-center
                  justify-center
                  bg-indigo-600
                "
              >
                <CollectionIcon class="h-6 w-6 mr-1.5" />Groups
              </span>
            </div>
            <div class="mt-6 text-gray-500 text-lg">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
                Enhanced groups view
              </h2>
              <p class="mt-4">
                We show the most relevant information from each group to easily see if the group is
                active.
              </p>
              <ul role="list" class="list-disc list-inside my-4 ml-4 space-y-2">
                <li>
                  See the count of photos <PhotographIcon class="h-6 w-6 inline-block" /> and views
                  <UsersIcon class="h-6 w-6 inline-block" /> by thousands ( K ) or milions ( M )
                </li>
                <li>
                  The calendar <CalendarIcon class="h-6 w-6 inline-block" /> will tell you the
                  restrictions for each group. If you have not joined the group the quantity and
                  regularity will be show ( 1 day/week/month/forever, no limit ). When you join the
                  group you can see in a daily basis the share status for each of your groups ( 1/3
                  day).
                </li>
                <li>
                  The fastest way to know if a group has been opted-out of Flickr default photo
                  limit sharing is by the <span class="text-green-500">green ( opted out )</span> or
                  <span class="text-red-500">red ( not opted out )</span> circle on each logo's
                  group. You can hover to read a little description.
                </li>
                <li>
                  Get fast access to the Flickr group's page thanks to external link
                  <ExternalLinkIcon class="h-6 w-6 inline-block" /> the group title.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0">
          <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <video
              class="
                w-full
                rounded-xl
                shadow-xl
                max-h-full
                ring-1 ring-black ring-opacity-5
                lg:absolute lg:left-0 lg:w-auto lg:max-w-none
              "
              autoplay
              loop
            >
              <source src="/groups_section.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24">
      <div
        class="
          lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24
        "
      >
        <div
          class="
            px-4
            max-w-xl
            mx-auto
            sm:px-6
            lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2
          "
        >
          <div>
            <div>
              <span
                class="
                  h-12
                  w-min
                  text-white
                  p-4
                  rounded-md
                  flex
                  items-center
                  justify-center
                  bg-indigo-600
                "
              >
                <CogIcon class="h-6 w-6 mr-1.5" aria-hidden="true" />
                Configuration
              </span>
            </div>
            <div class="mt-6">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Manage your tags</h2>
              <p class="mt-4 text-lg text-gray-500">
                Read the group rules before configuring your tag/s. It will help you avoid being
                banned. The search bar will show you relevant tags from photos you have already in
                your group. If you just joined it will not show any suggestions.<br />
                You can configure more than one tag but the recommended is always one as it
                simplyfies your tag strategy.<br />
                There is a special case where you want to share more specific photos. For example a
                group that wants birds feeding or eating. Add [bird] and [eating] and then turn on
                the tag mode.
              </p>
            </div>
          </div>
        </div>
        <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <video
              class="
                w-full
                rounded-xl
                shadow-xl
                max-h-full
                ring-1 ring-black ring-opacity-5
                lg:absolute lg:right-0 lg:w-auto lg:max-w-none
              "
              autoplay
              loop
            >
              <source src="/groups_configuration.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
  <HomeCta class="bg-gray-50" />
</template>

<script>
  import {
    PhotographIcon,
    CalendarIcon,
    ExternalLinkIcon,
    CollectionIcon,
    CogIcon
  } from "@heroicons/vue/outline"
  import { UsersIcon } from "@heroicons/vue/solid"

  export default {
    components: {
      PhotographIcon,
      UsersIcon,
      CalendarIcon,
      ExternalLinkIcon,
      CollectionIcon,
      CogIcon
    }
  }
</script>
