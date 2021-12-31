import React from 'react'; 
import { ThemeProvider } from "styled-components";

import { theme } from '../src/theme/default';
import GlobalFonts from '../src/theme/fonts'; 

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// Inject the global styles into storybook
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Story />
    </ThemeProvider>
  ),
];