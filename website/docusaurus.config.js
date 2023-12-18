// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// @ts-ignore
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kitiplex',
  tagline: 'Projects, samples and demos from Kitimi Platforms',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  url: 'https://kitiplex-dev.vercel.app/',
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

  presets: [
    [
      'classic',
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      docs: {
        sidebar: {
          hideable: true,
        }
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'kitiplex',
        logo: {
          alt: 'My Site Logo',
          src: 'img/kitim_bb.png',
        },
        items: [
          {
            label: 'Docs',
            position: 'left',
            to: 'docs/introduction'
          },

          {
            label: 'Projects',
            position: 'left',
            to: 'docs/projects',

          },
          {
            label: 'Resources',
            position: 'left',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                type: 'docSidebar',
                sidebarId: 'tutorialSidebar',

                label: 'Tutorial',
              }
            ]
          },
          {
            href: 'https://github.com/kitiplex',
            'aria-label': 'GitHub repository',
            position: 'right',
            className: 'header-github-link',
          },

        ],
      },

      algolia: {
        apiKey: '40077a4dd90af814060e8382ae520ea6',
        appId: '76NGSLM9E1',
        indexName: 'kitiplex-dev',
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        searchPagePath: 'search',

      },


      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kitiplex',
              },
            ],
          },
        ],
        logo: {
          alt: 'Kitiplex Logo',
          src: 'img/header_blue.png',
          href: 'https://github.com/kitiplex',
          height: "32",
          target: "_blank"
        },
        copyright: `Copyright © ${new Date().getFullYear()} kitiplex`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
