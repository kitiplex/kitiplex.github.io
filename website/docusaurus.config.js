/**
 * Copyright (c) Kitimi Platforms and affiliates.
 * 
 * Kitiplex - The hub for contributors, authors, and maintainers in the Kitimi ecosystem.
 * Licensed under MIT. See LICENSE file in the root directory.
 */
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'kitiplex',
  tagline: 'Build Innovate Inspire',
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
    { src: 'https://KLI8CT6349-dsn.algolia.net', rel: 'preconnect', crossorigin: true },
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
      {
        docs: {
          path: 'docs',
          showLastUpdateAuthor: true,
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          disableVersioning: false,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
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
          remarkPlugins: [require('@docusaurus/remark-plugin-npm2yarn'), remarkMath],
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
            [require('@docusaurus/remark-plugin-npm2yarn'), { converters: ['pnpm'] }],
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      },
    ],
  ],

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwind);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
    '@docusaurus/theme-live-codeblock',
    'docusaurus-plugin-sass',
    '@docusaurus/remark-plugin-npm2yarn',
    '@docusaurus/theme-mermaid',
    '@docusaurus/plugin-client-redirects',

    // Content Docs - Community
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

    // Content Docs - Discover
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
    announcementBar: {
      id: 'kitoy_beta',
      content: 'Kitoy Edition · <a target="_blank" href="/blog/kitoy-edition-beta">V2.0.5beta</a>',
      textColor: '#111317',
      isCloseable: true,
    },
    prism: {
      themes: require('./src/utils/PrismTheme'),
      defaultLanguage: 'jsx',
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
      respectPrefersColorScheme: true,
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