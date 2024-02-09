/**
 * Authored by: Keith Tan [https://github.com/mkeithX]
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {

    projectSidebar: [

        'intro',


        {
            type: "category",
            label: "Getting started",
            collapsed: false,
            collapsible: true,
            link: {
                type: "generated-index"
            },
            items: [
                'documentation',
                'configuration',
                'frameworks',
                'styling-guide',
            ]
        },

        {
            type: "category",
            label: "Project Genesis",
            collapsed: true,
            collapsible: true,
            link: {
                type: "doc",
                id: "projects/python-genesis/overview",
            },
            items: [

                "projects/python-genesis/py-genesis",
                "projects/python-genesis/flask-genesis",
                "projects/python-genesis/dj-genesis"
            ]

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

                "projects/featured/chatx-web",
                "projects/featured/kitiplex-web",
            ]
        }

    ],

    guidesSidebar: [
        {
            type: "category",
            label: "Guides",
            collapsed: true,
            collapsible: true,
            link: {
                type: "doc",
                id: "guides/index"
            },
            items: [
                "guides/installing-python",
                "guides/wsl-kali",
                "guides/openai-api",
            ]
        }
    ],

    snippetsSidebar: [
        {
            type: "category",
            label: "Snippets",
            collapsed: true,
            collapsible: true,
            link: {
                type: "doc",
                id: "snippets/index"
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
                "snippets/foobar-two"
            ]
        }
    ]

};

export default sidebars;