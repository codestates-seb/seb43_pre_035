import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

${'' /* @import url('https://fonts.googleapis.com/css2?family=Atomic+Age&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap'); */}

:root {
    --colors-bg: #322A28;
    --colors-bg-temp: #4F3F48;
    --colors-green: #605E4D;
    --colors-yellow: #EFAA52;
    --colors-lightbrown: #DACC96;
    --colors-dullbrown: #8D7B68;
    --colors-mediumbrown: #3F3432;
    --colors-dullbrown: #8D7B68;
    --colors-mediumbrown: #3F3432;
    --colors-darkbrown: #231709;
    --colors-darkred: #AB3E16;
    --colors-offwhite: #F8F8F8;
    --colors-border: #8D7B68;
    --colors-button-bg-default: #AB3E16;
    ${'' /* --colors-button-bg-default: #b92b27; */}
    --colors-button-bg-active: #A82723;
    ${'' /* --colors-button-bg-active: #7E2B0D; */}
    --colors-text-default: #F8F8F8;
    --colors-text-title: #F8F8F8;
    --colors-text-placeholder: #C3C1C1;
    --colors-text-placeholder-dark: #BEB7B7;
    --colors-text-title: #F8F8F8;
    --colors-text-placeholder: #C3C1C1;
    --colors-text-placeholder-dark: #BEB7B7;
    --colors-text-bright: #FFFFFF;
    --colors-text-contributor: #8D7B68;
    --colors-text-filter: #EFAA52;
    --colors-text-numbers: #DACC96;
    --colors-icons-yellow: #EFAA52;
    --colors-filter-border: rgba(239, 170, 82, 0.5);
    --colors-filter-text-active: #EFAA52;
    --colors-filter-text-inactive: rgba(239, 170, 82, 0.37);
    --colors-searchbar-bg: #F8F3E6;

    --spacing-topnav: 140px;
    --spacing-sidenav-top: 150px;
    --spacing-sidenav-right: 30px;

    --size-topnav-container: 130px;
    --size-sidenav-container: 180px;
    --size-sidenavitem-minwidth: 170px;
    --size-thread-minwidth: 125px;
    --size-thread-avatar: 40px;
    --size-text-button: 0.9rem;
    --size-text-headline: 1.5rem;
    --size-text-headline: 1.5rem;

    --fonts-thread-title-weight: 400;
    --fonts-weight-default: 100;
    --fonts-weight-regular: 300;
    --fonts-weight-regular: 300;
    --fonts-weight-semibold: 500;
    --fonts-weight-bold: 700;
    --fonts-size-icons: 15px;

    --fonts-family-default: 'TheJamsil', 'Noto Sans KR', sans-serif;

}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


body {
  display: flex;
  justify-content: center;
  padding-top: 173px;
  background: var(--colors-bg);
  padding-top: var(--spacing-topnav);
  font-family: 'TheJamsil', 'Noto Sans KR', sans-serif;
  color: var(--colors-text-default);
}

ul, li {
    list-style-type: none;
}

button {
    outline: none;
}

a:link { text-decoration: none; }


a:visited { text-decoration: none; }


a:hover { text-decoration: none; }


a:active { text-decoration: none; }


@font-face {
    font-family: 'TheJamsil';
    font-weight: 100;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Thin.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Thin.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Thin.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Thin.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Thin.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'TheJamsil';
    font-weight: 300;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Light.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Light.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Light.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Light.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Light.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'TheJamsil';
    font-weight: 400;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Regular.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'TheJamsil';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Medium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Medium.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Medium.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Medium.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Medium.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'TheJamsil';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Bold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Bold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Bold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-Bold.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'TheJamsil';
    font-weight: 800;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/TheJamsil/TheJamsil-ExtraBold.ttf') format("truetype");
    font-display: swap;
}

`

export default GlobalStyle;