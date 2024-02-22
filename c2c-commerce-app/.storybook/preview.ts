import { Decorator } from '@storybook/react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../src/themes';
import * as NextImage from 'next/image';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`;

// // Themeの適用
// const withThemeProvider: Decorator<JSX.Element> = (story) => (
//   <ThemeProvider theme={theme}>
//     <GlobalStyle />
//     {story()}
//   </ThemeProvider>
// );

// export const decorators = [withThemeProvider];

// // next/imageの差し替え
// const OriginalNextImage = NextImage.default as any;

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props: any) =>
//     typeof props.src === 'string' ? (
//       <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
//     ) : (
//       <OriginalNextImage {...props} unoptimized />
//     ),
// });

// **initial settings**
// import type { Preview } from "@storybook/react";

// const preview: Preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
