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

  demo: [

    'intro',

    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [

        'documentation',
        'configuration',
        
      ]
    },

    {
      type: 'category',
      label: 'Demos',
      collapsed: true,
      link: {
        type: 'generated-index',
        description: "Project samples from Kitimi Platforms.",
      },
      items: [
        'demo/py-genesis',
        'demo/flask-genesis',
        'demo/dj-mono-repo',
        'demo/ginabot-ai',
        'demo/this-website',
      ]
    }
  ],

  development: [
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'development/guides/installing-python',
        'development/guides/openai-api',
        'development/guides/wsl-kali',

      ]
    },
    {
      type: 'category',
      label: 'Gists',
      collapsed: true,
      link: {
        
        type: 'generated-index',

      },
      items:
      [
        'development/gists/browser-dev',
        'development/gists/pwsh-cli',
        'development/gists/live-editor',
        'development/gists/py-starters',
        'development/gists/celestial-distance',
      ]
    },
    {
      type: 'category',
      label: 'Nerds',
      collapsed: true,
      link: {
        type: 'generated-index',
        description: 'Nerds stuff.'
      },
      items:[
        'development/nerds/calculus',
        'development/nerds/mermaid-config'
      ]
    },
  ],



  projects: [

    'projects',

    {
      type: 'category',
      label: 'Start here',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'projects/basic/django-mono-repo',
        'projects/basic/py-mono-repo',
      ]
    },

    {
      type:'category',
      label: 'Advanced',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items:[
        'projects/advanced/advanced-proj',
        'projects/advanced/another-advanced'
      ]
    },
  ],

  community: [
    
    'policies',

    {
      type: 'category',
      label: 'Guidelines',
      collapsed: false,
      link: {
        type: 'generated-index',
      },
      items: [
        'community/support',
        'community/code-of-conduct',
        'community/security-policy'
      ]
    }
  ],

  

};

export default sidebars;
