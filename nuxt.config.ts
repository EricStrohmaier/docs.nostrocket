export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/plausible'],
  css: ["aos/dist/aos.css"],
  runtimeConfig: {
    public: {
      plausible: {
        domain: '',
      },
      algolia: {
        //could add algolia doc search here   just need to create an account and add the index name?
        
        // applicationId: '',
        // apiKey: '',
        // langAttribute: 'lang',
        // docSearch: {
        //   indexName: ''
        // }
      }
    },
  },
})
