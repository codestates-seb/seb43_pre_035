import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Atomic+Age&display=swap');

:root {
    --colors-bg: #322A28;
    --colors-bg-temp: #4F3F48;
    --colors-green: #605E4D;
    --colors-border: #8D7B68;
    --colors-text-default: #FFFFFF;
    --colors-text-title: #FFFFFF;
    --colors-text-contributor: #8D7B68;
    --colors-text-filter: #EFAA52;
    --colors-text-numbers: #DACC96;
    --colors-icons-yellow: #EFAA52;

    --opacity-text-inactive: 37%;

    --spacing-topnav: 173px;
    --spacing-sidenav-right: 30px;

    --size-sidenav-container: 210px;
    --size-sidenavitem-minwidth: 200px;

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
}

ul, li {
    list-style-type: none;
}

button {
    outline: none;
}

`

export default GlobalStyle;