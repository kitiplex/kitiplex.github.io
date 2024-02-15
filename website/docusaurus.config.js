/**
 * Copyright (c) Kitimi Platforms and affiliates.
 * 
 * Kitiplex - The hub for contributors, authors, and maintainers in the Kitimi ecosystem.
 * Licensed under MIT. See LICENSE file in the root directory.
 */

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kitiplex',
  tagline: 'Projects and demos from Kitimi Platforms',
  favicon: 'icons/favicon.ico',
  url: 'https://kitiplex.github.io',
  baseUrl: '/',
  organizationName: 'kitiplex',
  projectName: 'kitiplex.github.io',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,

  scripts: [
    { src: 'https://cdn.jsdelivr.net/npm/@docsearch/react@3', defer: true },
    { src: "https://KLI8CT6349-dsn.algolia.net", rel: "preconnect", crossorigin: true },
  ],

  titleDelimiter: '·',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: 'docs',
          showLastUpdateAuthor: false,
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          disableVersioning: false,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          remarkPlugins: [
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
            remarkMath,
          ],
          rehypePlugins: [rehypeKatex],
        },

        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [
            require('@docusaurus/remark-plugin-npm2yarn'),
            remarkMath,
          ],
        },

        blog: {
          path: 'blog',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'Blog Posts',
          showReadingTime: true,
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              { converters: ['pnpm'] },
            ],
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('@docsearch/css'),
            
          ],
        },
      },
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

  plugins: [
    '@docusaurus/theme-live-codeblock',
    'docusaurus-plugin-sass',
    '@docusaurus/remark-plugin-npm2yarn',
    '@docusaurus/theme-mermaid',
    '@docusaurus/plugin-client-redirects',

    [
      'content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        remarkPlugins: [
          [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          remarkMath,
        ],
        rehypePlugins: [rehypeKatex],
      },
    ],

    [
      'content-docs',
      {
        id: 'discover',
        path: 'discover',
        routeBasePath: 'discover',
        sidebarPath: require.resolve('./sidebarsDiscover.js'),
        include: ['**/*.md', '**/*.mdx'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        remarkPlugins: [
          [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          remarkMath,
        ],
        rehypePlugins: [rehypeKatex],
      },
    ],
  ],

  themeConfig: {
    algolia: {
      appId: 'KLI8CT6349',
      apiKey: '5037344df426897d733d0efebb8b6d12',
      indexName: 'kitiplexio',
      contextualSearch: true,
    },
    prism: {
      defaultLanguage: 'jsx',
      themes: require.resolve('./src/utils/PrismTheme'),
      additionalLanguages: ['bash', 'json', 'java', 'python', 'powershell'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    image: 'img/main/social-banner-01a.png',


    navbar: {
      title: 'Kitiplex',
      style: 'dark',
      hideOnScroll: true,
      logo: {
        alt: 'My Site Logo',
        src: 'img/main/logo-blue.svg',
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
              label: 'Docs',
              sidebarId: 'projectSidebar',
              type: 'docSidebar',
            },
            {
              label: 'Guides',
              sidebarId: 'guidesSidebar',
              type: 'docSidebar',
            },
            {
              label: 'Snippets',
              sidebarId: 'snippetsSidebar',
              type: 'docSidebar',
            },
          ],
        },
        {
          type: 'doc',
          docId: 'resources',
          label: 'Community',
          position: 'right',
          docsPluginId: 'community',
        },
        {
          type: 'doc',
          docId: 'case-studies',
          label: 'Insights',
          position: 'right',
          docsPluginId: 'discover',
        },
        {
          label: 'Blog',
          to: '/blog',
          position: 'right',
        },
        {
          href: 'https://github.com/kitiplex/',
          'aria-label': 'GitHub repository',
          position: 'right',
          className: 'header-github-link',
        },

      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Kitiplex Logo',
        src: 'img/main/kitimi-svg-banner-2.svg',
        href: '/',
        width: 200,
      },
      copyright: `Copyright © ${new Date().getFullYear()} contributors of Kitiplex`,
    },

    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },

  },
};

export default config;
