import React from 'react';
import { useConfig, DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>meCash Docs</span>,
  project: {
    link: 'https://github.com/meCash-docs',
  },
  chat: {
    link: 'https://discord.com/',
  },
// Fix navigation configuration
navigation: {
  prev: true,
  next: true
  },
  docsRepositoryBase: 'https://github.com/your-repo/meCash-docs/blob/main',
  footer: {
    text: '© 2025 meCash. All rights reserved.',
  },
  primaryHue: 200, // Adjusts the main theme color
  useNextSeoProps() {
    return {
      titleTemplate: '%s – meCash Docs',
      description: 'Official documentation for meCash.',
    };
  },

};

export default config;
