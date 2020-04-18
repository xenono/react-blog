import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { Provider } from 'react-redux';
import store from '../src/store';

function loadStories() {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}
addParameters({
  options: {
    theme: themes.dark,
  },
});
addDecorator(story => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </Provider>
));

configure(loadStories, module);
