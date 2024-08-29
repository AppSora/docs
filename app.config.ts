export default defineAppConfig({
  docus: {
    title: "Sora",

    description:
      "Free anime streaming",

    image:
      "/banner.png",

    socials: {
      github: "RiuStudio/Site",
    },

    aside: {
      level: 0,
      exclude: [],
    },

    header: {
      title: "Sora Docs",
      logo: false,
    },

    github: {
      owner: "Sora",
      repo: "docs",
      branch: "master",
      edit: true
    },

    footer: {
      iconLinks: [{
        href: "https://amvstr.me",
        icon: "mdi-play-outline",
        label: "amvstr.me",
      }, {
        href: "https://amvstrm.checkly-dashboards.com",
        icon: "mdi-monitor",
        label: "Status",
      }],

      fluid: true,
    },

    main: {
      fluid: false,
    },

    titleTemplate: "%s · amvstrm",
  },
});
