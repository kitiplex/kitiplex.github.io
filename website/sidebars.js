/**
 * Copyright Kitimi Platforms and affiliates, including Kitiplex
 *
 * Kitiplex - The hub for contributors, authors, and maintainers in the Kitimi ecosystem.
 * Licensed under MIT. See LICENSE file in the root directory.
 */
// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  
  projectSidebar: [
    "intro",
    {
      type: "category",
      label: "Getting started",
      collapsed: false,
      collapsible: true,
      link: {
        type: "generated-index",
        slug: "/getting-started",
      },
      items: ["documentation", "configuration", "frameworks", "styling-guide"],
    },
    {
      type: "category",
      label: "Guides 📚 ",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "guides/index",
      },
      items: [
        "guides/installing-python",
        "guides/wsl-kali",
        "guides/openai-api",
      ],
    },
    {
      type: "category",
      label: "Snippets 📦",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "snippets/index",
      },
      items: [
        "snippets/browser-dev",
        "snippets/live-editor",
        "snippets/celestial-distance",
        "snippets/pwsh-cli",
        "snippets/py-starters",
        "snippets/calculus",
        "snippets/mermaid-config",
        "snippets/foobar-one",
        "snippets/foobar-two",
        "snippets/git-cheat",
        "snippets/conda-cheat",
      ],
    },
  ],
  devSidebar: [
    {
      type: "category",
      label: "Projects",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "projects/index",
      },
      items: [
        {
          type: "category",
          label: "Python Genesis",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "projects/python-genesis/index",
          },
          items: [
            "projects/python-genesis/starters",
            "projects/python-genesis/flask-genesis",
            "projects/python-genesis/dj-genesis",
          ],
        },
        {
          type: "category",
          label: "Featured",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: "projects/featured/index",
          },
          items: [
            "projects/featured/kitiplex-web",
            "projects/featured/chatx-web",
          ],
        },
        {
          type: "category",
          label: "Docusaurus 🦖",
          collapsed: true,
          collapsible: true,
          link: {
            type: "generated-index",
            description: "Let's discover Docusaurus in less than 5 minutes.",
            slug: "/docusaurus/getting-started",
          },
          items: [
            {
              label: "Basics",
              type: "category",
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: "projects/docusaurus/basics/index",
              },
              items: [
                "projects/docusaurus/basics/create-a-page",
                "projects/docusaurus/basics/create-a-document",
                "projects/docusaurus/basics/create-a-blog-post",
                "projects/docusaurus/basics/deploy-your-site",
                "projects/docusaurus/basics/markdown-features",
                "projects/docusaurus/basics/manage-docs-versions",
                "projects/docusaurus/basics/translate-your-site",
                "projects/docusaurus/basics/congratulations",
              ],
            },

            {
              type: "category",
              label: "Extended",
              collapsed: true,
              collapsible: true,
              link: {
                type: "doc",
                id: "projects/docusaurus/extended/index",
              },
              items: [
                "projects/docusaurus/extended/classic-preset",
                "projects/docusaurus/extended/custom-config",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
