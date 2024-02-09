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