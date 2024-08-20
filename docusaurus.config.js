

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Create React App',
  tagline: 'Set up a modern web app by running one command.',
  url: 'https://e.543x.com',
  favicon: 'img/favicon.ico',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AI', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/teabagging/Create-React-App/edit/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/teabagging/Create-React-App/edit/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo-og.png',
      announcementBar: {
        id: 'support_ukraine',
        content:
          '🥳Support🥳<a target="_blank" rel="noopener noreferrer" href="https://www.543x.com">www.543x.com</a>🥳',
        backgroundColor: '#20232a',
        textColor: '#fff',
        isCloseable: false,
      },
      navbar: {
        title: 'Create React App',
        logo: {
          alt: 'Create React App Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/next.js/getting-started/installation', label: 'next.js', position: 'right'},
          {to: '/docs/ChatGPT-Next-Web/cloudflare-pages-cn', label: 'ChatGPT', position: 'right'},
          {to: '/docs/verce/verceldocs/intro', label: 'vercel', position: 'right'},
          { href: 'https://www.543x.com', label: 'Help', position: 'right' },
          {
            href: 'https://github.com/teabagging/Create-React-App',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                href: 'https://ai.543x.com',
              },
              {
                label: 'Learn React',
                href: 'https://r.543x.com',
              },
              {
                label: 'Quick Start',
                href: 'https://e.543x.com',
              },
              {
                label: 'Logo by',
                href: 'https://www.543x.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'you',
                href: 'https://a.543x.com',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/teabagging/Create-React-App',
              },
              {
                label: 'Pump',
                href: 'https://pump.543x.com',
              },
              {
                label: 'Swap',
                href: 'https://s.543x.com',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/teabagging/Create-React-App',
              },
              {
                label: 'Conduct',
                href: 'https://btc.543x.com',
              },
              {
                label: 'the Team',
                href: 'https://eth.543x.com',
              },
              {
                label: 'Contributors',
                href: 'https://bnb.543x.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://qq.543x.com',
              },
              {
                label: 'React Native',
                href: 'https://doge.543x.com',
              },
              {
                label: 'PEPE',
                href: 'https://pepe.543x.com',
              },
              {
                label: 'Privacy',
                href: 'https://no.543x.com',
              },
            ],
          },
        ],
        logo: {
          alt: 'AI Open Source Logo',
          src: 'img/oss_logo.png',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
      },


      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
