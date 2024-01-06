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
  url: 'https://kitiplex.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kitiplex', // Usually your GitHub org/user name.
  projectName: 'kitiplex-dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // trailingSlash: true,

  

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
          
        },
        blog: {
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/showcase.scss'),
            // require.resolve('./src/css/versions.scss'),
          ]
        }
      }),
    ],
  ],

  
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/@docsearch/js@3',
      type: 'text/javascript',
    },
  ],


  plugins: ['@docusaurus/theme-live-codeblock','docusaurus-plugin-sass'],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      image: 'img/kitiplex_banner.png',
      
      navbar: {
        title: 'Kitiplex',
        style: 'dark',


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
            label: 'Development',
            position: 'right',
            type: 'dropdown',
            items: [
              {
                label: 'DevOverview',
                type: 'doc',
                docId: 'dev-overview'
              },

              {
                label: 'Guides',
                // type: 'doc',
                // docId: 'gists',
                to: '/docs/category/guides'
              },
              {
                label: 'Demos',
                type: 'doc',
                docId: 'projects'
              },

              // {
              //   label: 'React',
              //   to: '/react-page'
              // },
              // {
              //   label: 'Markdown',
              //   to: '/markdown-page',
              // }
            ]
          },

          {
            label: 'Guidelines',
            position: 'right',
            docId: 'introduction',
            type: 'doc'
          },

          {
            label: 'Blog',
            to: '/blog',
            position: 'right'
          },

          {
            label: 'Team',
            to: '/team',
            position: 'right'
          },
// 
          // {
          //   label: 'Platform',
          //   type: 'doc',
          //   position: 'right',
          //   docId: 'introduction',

          // },
          // {
          //   label: 'Guides',
          //   type: 'doc',
          //   position: 'right',
          //   docId: 'gists'
          // },
          
          // {
          //   label: 'Demos',
          //   position: 'right',
          //   type: 'doc',
          //   docId: 'projects'

          // },
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

          // {
          //   label: 'Resources',
          //   position: 'right',
          //   type: 'dropdown',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: 'blog',
          //     },
          //     {
          //       label: 'Team',
          //       to: 'team'
          //     },


          //   ]
          // },


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
            href: 'https://github.com/kitiplex/kitiplex-dev',
            'aria-label': 'GitHub repository',
            position: 'right',
            className: 'navbar-github-link',
          },
          // {
          //   type: 'search',
          //   position: 'right',
          // },
        ],
      },

      algolia: {
        appId: 'C8HUEW9O04',
        apiKey: '405252b256717768fac679da5dd93c8d',
        indexName: 'kitiplex',
        // contextualSearch: true,
      },
      


      footer: {
        style: 'dark',
        
        logo: {
          alt: 'Kitiplex Logo',
          src: 'img/header_blue.png',
          href: '/',
          // width: 200,
          // height: 100,
          // target: "_blank"
        },
        
        copyright: `Copyright © ${new Date().getFullYear()} contributors of Kitiplex`,
      },
      prism: {
        defaultLanguage: 'jsx',
        theme: require('./core/PrismTheme'),
        
        additionalLanguages: ['bash', 'diff', 'json', 'java', 'swift', 'python', 'PowerShell']
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      metadata: [
        {
          property: 'og:image',
          content: 'https://kitiplex.vercel.app/img/kitiplex_banner.png',
        },
        {name: 'twitter:card', content: 'summary_large_image'},
        {
          name: 'twitter:image',
          content: 'summary_large_image',
        },
        {name: 'twitter:site', content: '@kitiplex'},
      ],
    }),
};

export default config;
