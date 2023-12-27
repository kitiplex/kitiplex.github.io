// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config


import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kitiplex',
  tagline: 'Projects, samples and demos from Kitimi Platforms',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  url: 'https://kitiplex.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kitiplex', // Usually your GitHub org/user name.
  projectName: 'kitiplex-dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // customFields:{
  //   mendableAnonKey: process.env.MENDABLE_ANON_KEY,
  // },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          path: 'docs',

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      image: 'img/kitiplex-social-card.png',
      
      navbar: {
        title: 'Kitiplex',
        hideOnScroll: true,

        logo: {
          alt: 'My Site Logo',
          src: 'img/kitim_bb.png',
          // width: 180,
          // height: 32,
          className: 'custom-navbar-logo-class',
          target: '_self',
        },
        
        items: [

          {
            label: 'Platform',
            type: 'doc',
            position: 'right',
            docId: 'introduction',

          },
          {
            label: 'Guides',
            type: 'doc',
            position: 'right',
            docId: 'gists'
          },
          
          {
            label: 'Demos',
            position: 'right',
            type: 'doc',
            docId: 'projects'

          },
          // {
          //   label: 'Scribble',
          //   position: 'right',
          //   type: 'dropdown',
          //   items: [
          //     {
          //       label: 'React',
          //       to: '/react-page'
          //     },
          //     {
          //       label: 'MD',
          //       to: '/markdown-page'
          //     },
          //   ]
          // },

          {
            label: 'Resources',
            position: 'right',
            type: 'dropdown',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'Team',
                to: 'team'
              },


            ]
          },


          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   dropdownItemsAfter: [
          //     {
          //       to: 'https://my-site.com/help-us-translate',
          //       label: 'Help us translate',
          //     },
          //   ],
          // },
          {
            href: 'https://github.com/kitiplex',
            'aria-label': 'GitHub repository',
            position: 'right',
            className: 'header-github-link',
          },
          // {
          //   type: 'search',
          //   position: 'right',
          // },
        ],
      },

      algolia: {
        appId: '42F3TCLUFM',
        apiKey: 'c7f96b2b9683ab7098674644f6a9b3dc',
        indexName: 'gina-vercel',
      },
      


      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/introduction',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/kitiplex',
        //       },

        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/kitiplex',
        //       },

        //     ],
        //   },

        // ],
        logo: {
          alt: 'Kitiplex Logo',
          src: 'img/header_blue.png',
          href: '/',
          // width: 160,
          height: 28,
          // target: "_blank"
        },
        
        copyright: `Copyright © ${new Date().getFullYear()} contributors of Kitiplex`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'diff', 'json',]
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
    }),
};

export default config;
