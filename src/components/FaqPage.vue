<template>
  <div class="bg-white">
    <div
      v-for="faqGroup in faqs"
      :key="faqGroup.title"
      class="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20"
    >
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          {{ faqGroup.title }}
        </h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure
            as="div"
            v-for="faq in faqGroup.items"
            :key="faq.question"
            class="pt-6"
            v-slot="{ open }"
          >
            <dt>
              <DisclosureButton
                class="flex w-full items-start justify-between text-left text-gray-900"
              >
                <span class="text-base font-semibold leading-7">{{
                  faq.question
                }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon
                    v-if="!open"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p
                class="text-base leading-7 text-gray-600"
                v-html="faq.answer"
              />
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";
const faqs = [
  {
    title: "General",
    items: [
      {
        question: "What is the aim of Skedr?",
        answer:
          "The aim is to save your time by automatically posting photographs or digital art to groups based on the tags you attach on Flickr. So it is a Flickr photo-sharing app. It is difficult for Flickr users to share a single image in different groups as they have different restrictions; therefore, Skedr is here to make your life easier by automating the entire posting and resharing process. Sweet.",
      },
      // {
      //   question: "How do I get started?",
      //   answer:
      //     "Check out our handy how to use Skedr video just here [link to new video when live]",
      // },
      {
        question:
          "Will Skedr post photos or digital art without any instructions from me?",
        answer:
          "No.<br/> Skedr will never post or share your images unless you provide specific instructions. These particular instructions include the group tagging feature as well.",
      },
      {
        question:
          "Will Skedr keep my photos or digital art and have rights to them?",
        answer:
          "No.<br/> We just share your photos or digital art to your groups. We do not download, keep, upload or modify any of your work.<br/> If you would like to grant us permission to share your amazing work across our site, Flickr and social media, with full credit to you, please click here [link to form].",
      },
      {
        question: "Will Skedr join new groups on my behalf?",
        answer:
          "No.<br/> Skedr will never join groups automatically on your behalf; you have the power to choose which groups your would like to join. Skedr will only suggest groups related to your uploads and tags.",
      },
      {
        question: "How will Skedr handle your private images from Flickr?",
        answer:
          "Your private images will show a LOCK symbol so you know they are not public.<br/> Whenever you share an image with a group in Flickr, it becomes visible to all members of that group. That’s how Flickr works. To prevent sharing your private images we have filtered out by default in the groups page.",
      },
      {
        question: "I have a question that’s not answered here, where do I go?",
        answer:
          "Check out our chatbot, surprisingly run by humans. We’ll do our very best to help.",
      },
      {
        question: "What are credits?",
        answer:
          "Sharing a photo or piece of digital art to a single group uses 1 credit. Credits are the ‘pay as you go’ model for Skedr users who don't need subscriptions or share less images. Everyone will earn 250 free credits each week. Whoop.",
      },
      {
        question: "How do I pay?",
        answer:
          "We accept credit or debit cards and PayPal. We use <a class='font-semibold text-indigo-600' href='https://www.paddle.com/help/start/intro-to-paddle/which-payment-methods-do-you-support' target='_blank'>Paddle</a> to manage our subscription payments.",
      },
      {
        question: "Who is the founder of Skedr?",
        answer:
          "The founder of Skedr is Enric Bisbe Gil, a full stack web developer who is an avid photographer and saw a way to make sharing to Flickr so much easier. When he’s not leading the Skedr team, he is working on many other exciting digital projects. Top secret stuff.",
      },
    ],
  },
  {
    title: "Features",
    items: [
      {
        question: "What is Automated scheduling?",
        answer:
          "This is a function that will allow you to schedule a reshare of your image automatically.<br/> How cool is that?<br/> If the picture you have posted is dismissed due to group rules and restrictions, Skedr will automatically schedule it for resharing. This way, you will never miss out and it saves you time!",
      },
      {
        question: "Is Skedr basically a spamming tool?",
        answer:
          "That is not the aim of Skedr. We trust our users to use the tool ethically and correctly.",
      },
      {
        question: "What is Group Tagging?",
        answer:
          "A tag is a key word which describes your content. Tagging helps organise your images into relevant groups and make it easier to find.<br/> Every photo uploaded with one tag will be automatically added to every group that has been tagged with this same keyword. You need to click the “sync” button in Photostream.<br/> For example: If you choose the tag #landscape for three different groups which are related to landscape photography, whenever a photo with that tag is uploaded to your photostream it will be automatically added to those three groups. Again, click ‘sync’ button for each photo when you share.",
      },
    ],
  },

  {
    title: "How the tech works",
    items: [
      {
        question: "Why does Skedr require write permissions to run?",
        answer:
          "In order to add a photo to a group Flickr needs WRITE PERMISSIONS from your account. Under the 'Authentication' headline you can read all the related information https://www.flickr.com/services/api/flickr.groups.pools.add.html",
      },
      {
        question: "Do we need to upload our photos to Skedr.io?",
        answer:
          "No.<br/> We don't want you to change your workflow. Whether you work with Lightroom, Apple Photos or any kind of Flickr Uploader you can continue working with them. We just need you to use our Group Tagging feature then it’s easy as pie.",
      },
      {
        question: "Is there a need to install any software?",
        answer:
          "Skedr is a web-based app, so you do not need to install any software; simply go to our website: <a class='font-semibold text-indigo-600' href='https://app.skedr.io'>https://app.skedr.io/</a>  to get started.<br/> We are compatible with popular browsers including Chrome, Firefox, Safari, and Opera.",
      },
    ],
  },
  {
    title: "Promotion",
    items: [
      {
        question: "What is an Autoimported comment?",
        answer:
          "Every time you share a photo through the Skedr, a message will be displayed similar to: 'Shared with Skedr to X groups.'. We do this as a way of promoting our app.<br/> We will not allow ads on our pages or resell any of your data. We make money simply from the fees we charge.",
      },
    ],
  },
];
</script>
