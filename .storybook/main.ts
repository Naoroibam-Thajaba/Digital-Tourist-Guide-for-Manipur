import type { StorybookConfig } from '@storybook/react-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',

  // Stories location pattern
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  // Addons (currently empty, can add more as needed)
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-docs'
  ],

  // Documentation configuration
  docs: {
    defaultName: 'Documentation',
  },

  // TypeScript configuration
  typescript: {
    check: false, // Disable type-checking during Storybook build
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  // Vite configuration customization
  async viteFinal(config) {
    // Add Tailwind CSS plugin to Storybook's Vite config
    config.plugins = config.plugins || [];
    config.plugins.push(tailwindcss());
    return config;
  },
};

export default config;