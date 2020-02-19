import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}
addParameters({
  options: {
    theme: themes.dark,
  },
});
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

configure(loadStories, module);
