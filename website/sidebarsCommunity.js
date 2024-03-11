/**
 * Copyright (c) Kitimi Platforms and affiliates.
 * 
 * Kitiplex - The hub for contributors, authors, and maintainers in the Kitimi ecosystem.
 * Licensed under MIT. See LICENSE file in the root directory.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    community: [
        {
            type: 'category',
            label: 'Community',
            collapsed: false,
            collapsible: false,
            link: {
                type: 'generated-index',
                description: "Kitiplex has adopted these policies that we expect project participants to adhere to.",
            },
            items: [
                // 'resources',
                
                'code-of-conduct',
                'contribution-guidelines',
                'security-policy',
                'team',
            ],
        },
        // {
        //     type: 'category',
        //     label: 'Support',
        //     collapsed: true,
        //     collapsible: true,
        //     items: [
        //         'support/user-experience',
        //         'support/terms-of-service',
        //     ],
        // },
    ],
};

export default sidebars;