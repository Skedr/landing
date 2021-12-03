<template>
  <div class="">
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
                    :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"
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
          question: "Who is behind Skedr.io?",
          answer:
            "Enric Bisbe Gil is the owner and creator of Skedr.io. His Flickr profile can be found at <a href='https://www.flickr.com/photos/enric-bisbe'>https://www.flickr.com/photos/enric-bisbe</a>"
        },
        {
          question: "What is the purpose of Skedr.io?",
          answer:
            "Skedr.io aims to help you by saving time when sharing your photos in Flickr. Adding the same photo to groups with different Posting Limits may make your life harder, so we are automating this process for you."
        },
        {
          question: "Will Skedr.io post any photo without my specific instructions?",
          answer:
            "No. <br><br>Skedr.io will never post any photos without having specifically configured the tool to do so. Specific instructions and configuration is needed for each and every action on a photo, including activating the Group Tagging feature."
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
            "No. <br><br>It is on the Skedr.io plans in the future to include a functionality which will recommend interesting groups for you to share your photos with. However, groups will be suggested and the user will decide whether to join them or not."
        },
        {
          question: "How does Skedr.io handle PRIVATE photos from Flickr?",
          answer:
            "All photos are shared with the users registered in each group. Private photos will show a LOCK icon.<br><br>When you share a private photo in Flickr from your Photostream to any group, that photo is visible to any member of the group. This is a behaviour within Flickr and there is nothing we can do to change it. If this is at any case causing you a major problem when sharing your photos, please contact us at our email and we will do our best to find a solution."
        }
      ]
    },
    {
      title: "Features",
      items: [
        {
          question: "What is Automated scheduling?",
          answer:
            "This functionality will allow you to share a photo to a group in a future date. This date is limited by the posting limits according to the group configuration.<br><br>Whenever a photo is not successfully added to a group, Flickr’s API will inform us with an error code (code number 5). For more information about error codes please visit <a href='https://www.flickr.com/services/api/flickr.groups.pools.add.html'>https://www.flickr.com/services/api/flickr.groups.pools.add.html</a>."
        },
        {
          question: "What is Group Tagging?",
          answer:
            "To bind any tag of your choice to one or more groups. That is, to define the content of the photos included in the group by keywords (tags).<br><br>Every photo uploaded with one tag will be automatically added to every group that has been tagged with this same keyword.<br><br>For example: If you choose the tag #landscape to be bound to 3 different groups which are related to landscape photography, whenever a photo with that tag is uploaded to your photostream it will be automatically added to those 3 groups."
        }
      ]
    },
    {
      title: "Promotion",
      items: [
        {
          question: "What is Autoimported comment?",
          answer:
            "Every time you share a photo through the Skedr.io app, a message will be displayed saying: 'Shared with Skedr.io to X groups.'. We do this as a way of promoting our app.<br><br> We will not allow ads on our pages or resell any data as a way of promotion or for getting incomes."
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
          question: "How do I start using Skedr.io?",
          answer:
            "Skedr.io is a Flickr App ( <a href='https://www.flickr.com/services/apps/about/'>https://www.flickr.com/services/apps/about/</a> ) therefore it follows all the Community Guidelines. Its page under Flickr is <a href='https://www.flickr.com/services/apps/72157686812430944/'>https://www.flickr.com/services/apps/72157686812430944/</a>."
        },
        {
          question: "How will I know what photos are posted in which groups?",
          answer:
            "At the top right of the toolbar there is a Notification center with all the notifications from your actions."
        },
        {
          question: "Do we need to upload our photos to Skedr.io?",
          answer:
            "No. We don't want you to alter your workflow. Whether you work with Lightroom, Apple Photos or any kind of Flickr Uploader you will continue working with them. We just need you to use our Group Tagging feature."
        },
        {
          question: "My photos are not being added to groups. Is there something wrong?",
          answer:
            "We update all your photos every hour on the hour. It means that if you upload a photo to Flickr let’s say at 6.36pm, it will not be uploaded until 7pm."
        },
        {
          question: "Do I need to install any software?",
          answer:
            "Skedr.io is a web based app so you it does not require to install any software. You can access with any browser in any device. It has been optimized to work better in the latests versions of browsers such as Firefox, Chrome, Edge, Safari and Opera. You can use it on Mac, Linux or Windows."
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
