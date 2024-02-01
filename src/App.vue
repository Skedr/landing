<script>

  export default defineComponent({
    setup() {

      loadHelpScout()
      loadHotjar()

      useHead({
        meta: [
          
          {
            name: "image",
            content: "https://skedr.io/screenshot.png"
          },
          
          {
            property: "og:image",
            content: "https://skedr.io/screenshot.png"
          },
          
        ]
      })
    }
  })
</script>
