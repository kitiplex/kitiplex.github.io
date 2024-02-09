/**
 * Authored by: Keith Tan [https://github.com/mkeithX]
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    community: [
        {
            type: 'category',
            label: 'Community',
            collapsed: false,
            collapsible: true,
            items: [
                'resources',
                'team',
                'code-of-conduct',
                'security-policy',
            ],
        },
        {
            type: 'category',
            label: 'Support',
            collapsed: true,
            collapsible: true,
            items: [
                'support/user-experience',
                'support/terms-of-service',
            ],
        },
    ],
};

export default sidebars;