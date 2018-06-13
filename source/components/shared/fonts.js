import React from 'react';

const LATIN_FONTS_CSS = `
  @font-face {
    font-family: 'Tisa-Sans-Regular';
    src: url('/fonts/tisa-pro/tisa-sans-pro-regular.woff2') format('woff2'),
    url('/fonts/tisa-pro/tisa-sans-pro-regular.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Tisa-Sans-Light';
    src: url('/fonts/tisa-pro/tisa-sans-pro-light.woff2') format('woff2'),
    url('/fonts/tisa-pro/tisa-sans-pro-light.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Tisa-Sans-Bold';
    src: url('/fonts/tisa-pro/tisa-sans-pro-bold.woff2') format('woff2'),
    url('/fonts/tisa-pro/tisa-sans-pro-bold.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Tisa-Sans-Medium-Italic';
    src: url('/fonts/tisa-pro/tisa-sans-pro-medium-italic.woff2') format('woff2'),
    url('/fonts/tisa-pro/TisaSansPro-MediumItalic.woff') format('woff');
  }
  body {
    font-family: 'Tisa-Sans-Regular', Arial, Helvetica, sans-serif;
  }
`;

export const LATIN_FONTS = () => <style type="text/css" cssText={LATIN_FONTS_CSS} />;