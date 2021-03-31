import 'modern-css-reset';

import { ThemeProvider } from '@storybook/theming';
import { theme } from '../src/utils/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
