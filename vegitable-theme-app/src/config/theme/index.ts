import { extendTheme } from '@chakra-ui/react';
import { ThemeConfig } from '@chakra-ui/theme';
import { components } from './components';

import { colors } from './colors';

export const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, colors, components });
