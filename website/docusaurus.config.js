/**
 * Copyright (c) Kitimi Platforms and affiliates.
 * 
 * Kitiplex - The hub for contributors, authors, and maintainers in the Kitimi ecosystem.
 * Licensed under MIT. See LICENSE file in the root directory.
 */
// @ts-check

import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {themes as prismThemes} from 'prism-react-renderer';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "kitiplex",
  tagline: "Build Innovate Inspire",
  favicon: "icons/favicon.ico",
  url: "https://kitiplex.github.io",
  baseUrl: "/",
  organizationName: "kitiplex",
  projectName: "kitiplex.github.io",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,

  scripts: [
    {
      src: "https://KLI8CT6349-dsn.algolia.net",
      rel: "preconnect",
      crossorigin: true,
    },
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  titleDelimiter: "·",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: "docs",
          showLastUpdateAuthor: true,
          breadcrumbs: true,
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
          disableVersioning: false,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: "docs",
          include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          docItemComponent: '@theme/DocItem',
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },

        pages: {
          path: "src/pages",
          routeBasePath: "",
          include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          mdxPageComponent: "@theme/MDXPage",
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },

        blog: {

          path: "blog",
          editLocalizedFiles: false,
          blogTitle: "Updates",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "Recent updates",
          blogDescription: "Blog",
          showReadingTime: true,
          routeBasePath: "blog",
          include: ["**/*.{md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Kitimi Platforms.`,
          },
        },

        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },

        theme: {
          customCss: "./src/css/custom.css",
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


    // Content Docs - Community
    [
      "content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
        disableVersioning: false,
        editLocalizedFiles: false,
        editCurrentVersion: false,
        sidebarPath: require.resolve("./sidebarsCommunity.js"),
        include: ["**/*.md", "**/*.mdx"],
        exclude: [
          "**/_*.{js,jsx,ts,tsx,md,mdx}",
          "**/_*/**",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/__tests__/**",
        ],
        docItemComponent: '@theme/DocItem',
        remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
        rehypePlugins: [rehypeKatex],
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
      },
    ],
    require.resolve("docusaurus-plugin-image-zoom"),
  ],
  
  themes: ["@docusaurus/theme-live-codeblock","@docusaurus/theme-mermaid",],
  
  markdown: {
    mermaid: true,
  },


  themeConfig: {
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */



    announcementBar: {
      id: "announcementBar_",
      content:
        '🎉Like Kitiplex? Give it a Star &#11088; on  <a target="_blank" rel="noopener noreferrer" href="https://github.com/kitiplex/kitiplex.github.io">GitHub</a>',
      textColor: "#000",
      isCloseable: true,
    },
    prism: {
      theme: prismThemes.oceanicNext,
      additionalLanguages: ["powershell", "python", "bash", "json", "java"],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    image: "img/main/social-banner-01a.png",

    navbar: {
      title: "Kitiplex",
      style: "dark",
      hideOnScroll: true,
      logo: {
        alt: "",
        src: "img/main/logo-blue.svg",
        className: "custom-navbar-logo-class",
        target: "_self",
      },

      items: [

        {
          label: "Development",
          position: "left",
          type: "dropdown",
          items: [
            {
              label: "Docs",
              sidebarId: "projectSidebar",
              type: "docSidebar",
            },
            {
              label: "Projects",
              sidebarId: "devSidebar",
              type: "docSidebar",
            },
          ],
        },
        {
          type: "doc",
          docId:'resources',
          label: "Community",
          position: "right",
          docsPluginId: "community",
        },
        {
          label: "Blog",
          to: "/blog",
          position: "right",
        },
        {
          href: "https://github.com/kitiplex/",
          "aria-label": "GitHub repository",
          position: "right",
          className: "header-github-link",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Kitiplex Logo",
        src: "img/main/kitimi-svg-banner-2.svg",
        href: "/",
        width: 200,
      },
      copyright: `Copyright © ${new Date().getFullYear()} contributors of Kitiplex`,
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
    zoom: {
      config: {
        
      },
    },
    // zoom: {
    //   selector: '.markdown :not(em) > img',
    //   config: {
              
    //     // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
    //     background: {
    //       light: 'rgb(255, 255, 255)',
    //       dark: 'rgb(50, 50, 50)'
    //     }
    //   }
    // },
  },
};

export default config;