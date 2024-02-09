/**
 * Copyright Kitimi Platforms and affiliates, including Kitiplex
 * 
 * Kitiplex - The hub for contributors, authors, and maintainers in the Kitimi ecosystem.
 * Licensed under MIT. See LICENSE file in the root directory.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    discover: [
        {
            type: 'category',
            label: 'Discover',
            collapsed: false,
            collapsible: true,
            items: [
                'case-studies',
                'future-developments',
            ],
        },
    ],
};

export default sidebars;