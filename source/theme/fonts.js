export const latinFonts = (baseUrl) => (`
  @font-face {
    font-family: 'Tisa-Sans-Regular';
    font-display: swap;
    src: url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-regular.woff2') format('woff2'),
    url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'Tisa-Sans-Light';
    font-display: swap;
    src: url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-light.woff2') format('woff2'),
    url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-light.woff') format('woff');
  }

  @font-face {
    font-family: 'Tisa-Sans-Bold';
    font-display: swap;
    src: url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-bold.woff2') format('woff2'),
    url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-bold.woff') format('woff');
  }

  body {
    font-family: 'Tisa-Sans-Regular', Arial, Helvetica, sans-serif;
  }
`);
