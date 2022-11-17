<template>
  <div class="py-16 bg-gray-50 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-none">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">History</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What is Flickr?
        </p>
      </div>
      <div class="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p class="text-lg text-gray-500">
          When we think about Flickr, the first thing that comes to mind is photo-sharing. Flickr
          didn't start out as a distinct social media website or smartphone app. Instead, it's a set
          of features in a tremendously multiplayer online game (MMOG). Flickr can and should be
          used for picture sharing, photo management, and archiving. It is perfect for
          photographers, in-house creative professionals, and marketing strategies. You can easily
          organise photos, bulk edit them, geotag them, and view them from anywhere.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div class="relative z-10">
          <div class="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
            <p>
              When Flickr was created, the concept spread like wildfire. I'll go into more depth
              here about what's missing or not so good, and how Skedr benefits Flickr users in a
              variety of ways.
            </p>
            <h3>What is the limitation of Flickr?</h3>
            <p>
              Sorry for being direct, but the UX for sharing photographs is clumsy and doesn't
              actually help understand why a photo has been throttled and when it may be shared
              again. You share the photos from each photo you want to share.
            </p>
            <p>
              Sharing using Flickr means; going photo by photo, finding matching groups for that
              kind of photo, then sharing it without receiving any feedback from the user interface.
              This is where Skedr tool comes in.
            </p>
            <p>
              The idea is to find a service that works to upload photos to Flickr Groups for you!
              After a lot of usage hoping to make the sharing of my pictures in Flickr groups as
              fast as possible, I've come across a helpful tool; Skedr. A tool that shares your
              photos to any of your groups through the tags.
            </p>
          </div>
        </div>
        <div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
          <svg
            class="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
          </svg>
          <blockquote class="relative bg-white rounded-lg shadow-lg">
            <div class="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
              <img
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
                alt="Workcation"
                class="h-8"
              />
              <div class="relative text-lg text-gray-700 font-medium mt-8">
                <svg
                  class="absolute top-0 left-0 -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path
                    d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
                  />
                </svg>
                <p class="relative">
                  As a dominant online image platform, Flickr is an innovation for photo sharing and
                  management, as well as having a large community of photographers who display their
                  work for everyone to see.
                </p>
              </div>
            </div>
            <cite
              class="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10"
            >
              <div
                class="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:-translate-y-1/2"
              >
                <img
                  class="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                  src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <span class="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                <p class="text-white font-semibold sm:inline">Judith Black</p>
                {{ " " }}
                <p class="sm:inline">CEO at Workcation</p>
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="hidden lg:block bg-gray-50 absolute top-0 bottom-0 right-3/4 w-screen" />
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div class="lg:col-start-2">
          <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Case Study
          </h2>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            How Skedr makes your Flickr life easier?
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative">
          <svg
            class="hidden lg:block absolute top-0 left-0 -mt-20 -mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-h-12">
                <img
                  class="rounded-lg shadow-lg object-cover object-center"
                  src="/public/michael-sala-husQ4tkR8Z8-unsplash.jpg"
                  alt="Someone taking a photo downtown street"
                />
              </div>
              <figcaption class="mt-3 flex text-sm text-gray-500">
                <CameraIcon class="flex-none w-5 h-5 text-gray-400" aria-hidden="true" />
                <span class="ml-2">Photograph by Michael Sala</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="text-base max-w-prose mx-auto lg:max-w-none">
            <p class="text-lg text-gray-500">That is accomplished in a few steps:</p>
          </div>
          <div
            class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"
          >
            <ul role="list">
              <li>
                <span class="font-bold">First, you must assign tag to your groups</span>
                . The tag must be a word that is meaningful to that group. The best word is always
                the most generic one that may be safely added to additional groups. Since most
                groups have very specific photo types, terms like landscape, portrait, nature,
                wildlife, and street photography will be perfect for many groups.
              </li>
              <li>
                Once you've configured as many groups as you want,
                <span class="font-bold">you can 'sync' any photo on the Photostream page</span>
                . Skedr will go through all of the tags in that photo and share it with all groups
                that match those tags
              </li>
              <li>
                Any photo that is throttled from the API due to limit restrictions is queued for the
                next possible time. A group with a weekly photo limit of two will schedule two
                photos every week.
              </li>
            </ul>
            <p>
              If you really get addicted to Flickr – Skedr is just for you! Skedr is a third-party
              tool that makes Flickr more interesting and easier to use. Although Flickr has evolved
              a lot in a few short months, it still lacks in the ability to share photos to your
              Flickr groups using tags. Allow this tool to connect to your Flickr account, and you
              can use the tags to share your photos with any of your Flickr groups. Happy Sharing!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { CameraIcon } from "@heroicons/vue/solid"
</script>
