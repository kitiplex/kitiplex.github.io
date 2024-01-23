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
  tagline: 'Projects and demos from Kitimi Platforms',
  favicon: '/img/favicon.ico',
  url: 'https://kitiplex.dev',
  baseUrl: '/',

  organizationName: 'kitiplex', // Usually your GitHub org/user name.
  projectName: 'kitiplex-dev', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // trailingSlash: false,
  
  titleDelimiter: '·', 
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,

          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          
        },
        blog: {
          showReadingTime: true,
        },

        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
          ]
        }

      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],


  plugins: ['@docusaurus/theme-live-codeblock','docusaurus-plugin-sass'],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
        appId: 'C8HUEW9O04', 
        apiKey: '3dcd23a69a487d41354e2662bc354ef8',
        indexName: 'kitiplex',
      },
      
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
        
      },
      
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      image: 'img/kitiplex_banner.png',
      
      navbar: {
        title: 'Kitiplex',
        style: 'dark',


        logo: {
          alt: 'My Site Logo',
          src: '/img/kitim_bb.png',
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
                label: 'Overview',
                type: 'doc',
                docId: 'dev-overview'
              },

              {
                label: 'Projects',
                type: 'doc',
                docId: 'projects'
              },

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

          {
            href: 'https://github.com/kitiplex/',
            'aria-label': 'GitHub repository',
            position: 'right',
            // className: 'navbar-github-link','
            className: 'header-github-link',
          },
        ],
      },

      footer: {
        style: 'dark',
        
        logo: {
          alt: 'Kitiplex Logo',
          src: '/img/header_blue.png',
          href: '/',
          width: 200,
          // height: 100,
          // target: "_blank"
        },
        
        copyright: `Copyright © ${new Date().getFullYear()} contributors of Kitiplex`,
      },
      prism: {
        defaultLanguage: 'jsx',
        theme: require('./src/utils/PrismTheme'),
        
        additionalLanguages: ['bash','json', 'java','python', 'powershell']
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      // metadata: [
      //   { property: 'og:image', content: '/img/kitiplex_banner',},
      //   { name: 'twitter:card', content: 'summary_large_image'},
      //   { name: 'twitter:image', content: 'summary_large_image',},
      //   { name: 'twitter:site', content: '@kitiplex'},
      //   { name: 'keywords', content: 'cooking, blog'},
      // ],
    }),
};

export default config;
