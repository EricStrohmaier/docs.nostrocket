export default defineAppConfig({
  docus: {
    title: 'Nostrocket',
    description: 'a hyper-efficient rocket booster for your project',
    url: 'https://nostrocket.org/',
    socials: {
      github: 'nostrocket',
    },
    aside: {
      level: 0,
      exclude: ['/modules', '/nuxt-auth/v0.5', '/nuxt-auth/v0.6']
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: ['/nuxt-auth', '/nuxt-session', '/nuxt-parse', '/nuxt-prisma', '/nuxt-pdf']
    },
    footer: {
      credits: {
        icon: "IconDocus",
        text: "Powered by Docus",
        href: "https://docus.dev"
      },
    }
  }
})
