/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: true,
      items: [
        'about/about-us',
        'about/community',
        'about/the-platform',
      ]
    },

    {
      type: 'category',
      label: 'Policies',
      collapsed: true,
      items: [
        'policies/code-of-conduct',
        'policies/security-policy'
      ]
    }
    // {
    //   type: 'category',
    //   label: 'Guides',
    //   collapsed: true,
    //   items: 
    //   [
    //     'guides/openai-api',
    //     'guides/basic-python',
    //     'guides/wsl-kali'
    //   ]
    // },
    
  ],

  gists: [
    'gists',
    {
      type: 'category',
      label: 'Examples',
      collapsed: true,
      items:
      [
        'gists/openai-api',
        'gists/basic-python',
        'gists/wsl-kali'
      ]
    }
  ],

  projects: [
    'projects',
    {
      type: 'category',
      label: 'Examples',
      collapsed: true,
      items: [
        'projects/ginabot-ai'
      ]
    }
  ],



  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
