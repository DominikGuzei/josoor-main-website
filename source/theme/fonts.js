export const latinFonts = (baseUrl) => (`
  @font-face {
    font-family: 'theme-font-sans-regular';
    font-display: swap;
    src: url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-regular.woff2') format('woff2'),
    url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'theme-font-sans-light';
    font-display: swap;
    src: url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-light.woff2') format('woff2'),
    url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-light.woff') format('woff');
  }

  @font-face {
    font-family: 'theme-font-sans-bold';
    font-display: swap;
    src: url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-bold.woff2') format('woff2'),
    url('${baseUrl}/fonts/tisa-pro/tisa-sans-pro-bold.woff') format('woff');
  }

  body {
    font-family: 'theme-font-sans-regular', Arial, Helvetica, sans-serif;
  }
`);

export const arabicFonts = (baseUrl) => (`
  @font-face {
    font-family: 'theme-font-sans-regular';
    font-display: swap;
    src: url('${baseUrl}/fonts/greta/greta-text-arabic-regular.woff2') format('woff2'),
    url('${baseUrl}/fonts/greta/greta-text-arabic-regular.woff') format('woff');
  }

  @font-face {
    font-family: 'theme-font-sans-light';
    font-display: swap;
    src: url('${baseUrl}/fonts/greta/greta-text-arabic-light.woff2') format('woff2'),
    url('${baseUrl}/fonts/greta/greta-text-arabic-light.woff') format('woff');
  }

  @font-face {
    font-family: 'theme-font-sans-bold';
    font-display: swap;
    src: url('${baseUrl}/fonts/greta/greta-text-arabic-bold.woff2') format('woff2'),
    url('${baseUrl}/fonts/greta/greta-text-arabic-bold.woff') format('woff');
  }

  body {
    font-family: 'theme-font-sans-regular', Arial, Helvetica, sans-serif;
  }
`);
