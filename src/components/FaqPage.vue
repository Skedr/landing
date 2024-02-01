<template>
  <div class="bg-white">
    <div
      v-for="faqGroup in faqs"
      :key="faqGroup.title"
      class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8"
    >
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-indigo-500 sm:text-4xl">
          {{ faqGroup.title }}
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <Disclosure
            v-for="faq in faqGroup.items"
            :key="faq.question"
            v-slot="{ open }"
            as="div"
            class="pt-6"
          >
            <dt class="text-lg">
              <DisclosureButton
                class="text-left w-full flex justify-between items-start text-gray-400"
              >
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon
                    :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6']"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500" v-html="faq.answer" />
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
  <home-cta />
</template>

<script>
  import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue"
  import { ChevronDownIcon } from "@heroicons/vue/outline"
  const faqs = [
    {
      title: "General",
      items: [
        {
          question: "How is the founder of Skedr.io?",
          answer:
            "The founder of Skedr.io is Enric Bisbe Gil, a full stack web developer also involved in many other projects."
        },
        {
          question: "What is the aim of Skedr.io?",
          answer:
            "The aim is to save your time by automatically posting photographs to groups based on the tags you attach on Flickr. So it is a flick photo-sharing app. It is difficult for the users to share a single photograph in different groups with different restriction limits; therefore, Skedr is here to make your life easier by automating the entire posting and resharing procedure."
        },
        {
          question: "Will Skedr post pictures without any instructions?",
          answer:
            "No. <br><br>Skedr will never post or share your photograph until or unless you provide specific instructions. These particular instructions include the group tagging feature as well."
        },
        {
          question: "Will Skedr.io keep my photos and have rights on them?",
          answer:
            "No. <br><br>We just share your photos to your groups. We do not download, keep, upload or modify any of your photos."
        },
        {
          question: "Will Skedr.io send messages to any other member on my behalf?",
          answer:
            "No. <br><br>Flickr’s API does not have that functionality and it is out of the scope of the Skedr.io app."
        },
        {
          question: "Will Skedr.io join new groups on my behalf?",
          answer:
            "No. <br><br>Skedr will never join groups automatically on your behalf; instead, you will need to choose the desired groups. Skedr will only suggest groups related to your photographs and tags."
        },
        {
          question: "How will Skedr handle Private Photos from Flickr?",
          answer:
            "All photographs are imparted to the clients enrolled in each gathering. Private pictures will show a LOCK symbol. <br/>Whenever you share a photo with a group, the photo is visible to all members."
        }
      ]
    },
    {
      title: "Features",
      items: [
        {
          question: "What is Automated scheduling?",
          answer:
            "This is a function that will allow you to schedule a reshare for the photograph automatically. <br/>If the picture you have posted is dismissed due to group limitations and restrictions, Skedr.io will automatically schedule the photo for resharing. This way, you will never miss it and save your time!"
        },
        {
          question: "What is Group Tagging?",
          answer:
            "To bind any tag of your choice to one or more groups. That is, to define the content of the photos included in the group by keywords (tags).<br><br>Every photo uploaded with one tag will be automatically added to every group that has been tagged with this same keyword.<br><br>For example: If you choose the tag #landscape to be bound to 3 different groups which are related to landscape photography, whenever a photo with that tag is uploaded to your photostream it will be automatically added to those 3 groups."
        },
        {
          question: "What are credits?",
          answer:
            "Sharing a photo to a single group uses 1 credit. Credits are the pay/use as you go model for Skedr users that don't like subscriptions or share less photos. Everyone will earn 250 free credits each week."
        }
      ]
    },
    {
      title: "Promotion",
      items: [
        {
          question: "What is Autoimported comment?",
          answer:
            "Every time you share a photo through the Skedr.io app, a message will be displayed similar to: 'Shared with Skedr.io to X groups.'. We do this as a way of promoting our app.<br><br> We will not allow ads on our pages or resell any data as a way of promotion or for getting incomes."
        }
      ]
    },
    {
      title: "How it works?",
      items: [
        {
          question: "Why does Skedr.io requires write permissions to run?",
          answer:
            "In order to add a photo to a group Flickr needs <strong>WRITE PERMISSIONS</strong> from you account. Under the '<i>Authentication</i>' headline you can read all the related information <a href=\"https://www.flickr.com/services/api/flickr.groups.pools.add.html\">https://www.flickr.com/services/api/flickr.groups.pools.add.html</a>"
        },
        {
          question: "How to start using Skedr.io?",
          answer:
            "Skedr.io is an Flickr App. This is the reason that it follows all community guidelines. You may go to the website <a href='https://skedr.io' class='underline'>https://skedr.io</a> and register yourself to start using the site."
        },
        {
          question: "Do we need to upload our photos to Skedr.io?",
          answer:
            "No. We don't want you to alter your workflow. Whether you work with Lightroom, Apple Photos or any kind of Flickr Uploader you will continue working with them. We just need you to use our Group Tagging feature."
        },
        {
          question: "Is there a need to install any software?",
          answer:
            "Skedr is a web-based app, so you do not need to install any software; instead, enter yourself on the website. It has been improved and works much better in various browsers, including Chrome, Firefox, Safari, and Opera."
        }
      ]
    }
  ]

  export default {
    components: {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      ChevronDownIcon
    },
    setup() {
      return {
        faqs
      }
    }
  }
</script>
