:root,[data-color-mode=light][data-light-theme*=light],[data-color-mode=dark][data-dark-theme*=light] {
    color-scheme: light
}

@media(prefers-color-scheme: light) {
    [data-color-mode=auto][data-light-theme*=light] {
        color-scheme:light
    }
}

@media(prefers-color-scheme: dark) {
    [data-color-mode=auto][data-dark-theme*=light] {
        color-scheme:light
    }
}

[data-color-mode=light][data-light-theme*=dark],[data-color-mode=dark][data-dark-theme*=dark] {
    color-scheme: dark
}

@media(prefers-color-scheme: light) {
    [data-color-mode=auto][data-light-theme*=dark] {
        color-scheme:dark
    }
}

@media(prefers-color-scheme: dark) {
    [data-color-mode=auto][data-dark-theme*=dark] {
        color-scheme:dark
    }
}

[data-color-mode] {
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default)
}

@media(forced-colors: active) {
    body {
        --color-accent-emphasis: Highlight;
        --color-fg-on-emphasis: LinkText
    }
}

/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
}

body {
    margin: 0
}

article,aside,details,figcaption,figure,footer,header,main,menu,nav,section {
    display: block
}

summary {
    display: list-item
}

audio,canvas,progress,video {
    display: inline-block
}

audio:not([controls]) {
    display: none;
    height: 0
}

progress {
    vertical-align: baseline
}

template,[hidden] {
    display: none !important
}

a {
    background-color: transparent
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted
}

b,strong {
    font-weight: inherit
}

b,strong {
    font-weight: bolder
}

dfn {
    font-style: italic
}

h1 {
    font-size: 2em;
    margin: .67em 0
}

mark {
    background-color: var(--color-attention-subtle);
    color: var(--color-fg-default)
}

small {
    font-size: 80%
}

sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sub {
    bottom: -0.25em
}

sup {
    top: -0.5em
}

img {
    border-style: none
}

svg:not(:root) {
    overflow: hidden
}

code,kbd,pre,samp {
    font-family: monospace;
    font-size: 1em
}

figure {
    margin: 1em 40px
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible
}

button,input,select,textarea {
    font: inherit;
    margin: 0
}

optgroup {
    font-weight: var(--base-text-weight-semibold, 600)
}

button,input {
    overflow: visible
}

button,select {
    text-transform: none
}

button,html [type=button],[type=reset],[type=submit] {
    -webkit-appearance: button
}

fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em
}

legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
}

textarea {
    overflow: auto
}

[type=checkbox],[type=radio] {
    box-sizing: border-box;
    padding: 0
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-input-placeholder {
    color: inherit;
    opacity: .54
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

* {
    box-sizing: border-box
}

input,select,textarea,button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit
}

body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-size: var(--body-font-size, 14px);
    line-height: 1.5;
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default)
}

a {
    color: var(--color-accent-fg);
    text-decoration: none
}

a:hover {
    text-decoration: underline
}

b,strong {
    font-weight: var(--base-text-weight-semibold, 600)
}

fieldset {
    padding: 0;
    margin: 0;
    border: 0
}

label {
    font-weight: var(--base-text-weight-semibold, 600)
}

::placeholder {
    color: var(--color-fg-subtle);
    opacity: 1
}

hr,.rule {
    height: 0;
    margin: 15px 0;
    overflow: hidden;
    background: transparent;
    border: 0;
    border-bottom: 1px solid var(--color-border-muted)
}

hr::before,.rule::before {
    display: table;
    content: ""
}

hr::after,.rule::after {
    display: table;
    clear: both;
    content: ""
}

table {
    border-spacing: 0;
    border-collapse: collapse
}

td,th {
    padding: 0
}

button {
    cursor: pointer;
    border-radius: 0
}

[hidden][hidden] {
    display: none !important
}

details summary {
    cursor: pointer
}

details:not([open])>*:not(summary) {
    display: none !important
}

a:focus,button:focus,[role=button]:focus,input[type=radio]:focus,input[type=checkbox]:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

a:focus:not(:focus-visible),button:focus:not(:focus-visible),[role=button]:focus:not(:focus-visible),input[type=radio]:focus:not(:focus-visible),input[type=checkbox]:focus:not(:focus-visible) {
    outline: solid 1px transparent
}

a:focus-visible,button:focus-visible,[role=button]:focus-visible,input[type=radio]:focus-visible,input[type=checkbox]:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

a:not([class]):focus,a:not([class]):focus-visible,input[type=radio]:focus,input[type=radio]:focus-visible,input[type=checkbox]:focus,input[type=checkbox]:focus-visible {
    outline-offset: 0
}

.focus {
    border-color: var(--color-accent-fg);
    outline: none;
    box-shadow: inset 0 0 0 1px var(--color-accent-fg)
}

@media(forced-colors: active) {
    *:focus,*:focus-visible {
        outline: solid 1px transparent
    }

    input:not([type=radio],[type=checkbox]):focus,input:not([type=radio],[type=checkbox]):focus-visible,textarea:focus,textarea:focus-visible,select:focus,select:focus-visible {
        outline-offset: 2px
    }
}

kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    line-height: 10px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-subtle);
    border: solid 1px var(--color-neutral-muted);
    border-bottom-color: var(--color-neutral-muted);
    border-radius: 6px;
    box-shadow: inset 0 -1px 0 var(--color-neutral-muted)
}

h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    margin-bottom: 0
}

h1 {
    font-size: var(--h1-size, 32px);
    font-weight: var(--base-text-weight-semibold, 600)
}

h2 {
    font-size: var(--h2-size, 24px);
    font-weight: var(--base-text-weight-semibold, 600)
}

h3 {
    font-size: var(--h3-size, 20px);
    font-weight: var(--base-text-weight-semibold, 600)
}

h4 {
    font-size: var(--h4-size, 16px);
    font-weight: var(--base-text-weight-semibold, 600)
}

h5 {
    font-size: var(--h5-size, 14px);
    font-weight: var(--base-text-weight-semibold, 600)
}

h6 {
    font-size: var(--h6-size, 12px);
    font-weight: var(--base-text-weight-semibold, 600)
}

p {
    margin-top: 0;
    margin-bottom: 10px
}

small {
    font-size: 90%
}

blockquote {
    margin: 0
}

ul,ol {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0
}

ol ol,ul ol {
    list-style-type: lower-roman
}

ul ul ol,ul ol ol,ol ul ol,ol ol ol {
    list-style-type: lower-alpha
}

dd {
    margin-left: 0
}

tt,code,samp {
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    font-size: 12px
}

pre {
    margin-top: 0;
    margin-bottom: 0;
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    font-size: 12px
}

.octicon {
    vertical-align: text-bottom
}

.octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor
}

.Box--overlay {
    width: 448px;
    margin-right: auto;
    margin-left: auto;
    background-color: var(--color-canvas-default);
    background-clip: padding-box;
    border-color: var(--color-border-default);
    box-shadow: 0 0 18px rgba(0,0,0,.4)
}

.Box--overlay .Box-header {
    margin: 0;
    border-width: 0;
    border-bottom-width: 1px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px
}

.Box-overlay--narrow {
    width: 320px
}

.Box-overlay--wide {
    width: 640px
}

.Box-body.scrollable-overlay {
    max-height: 400px;
    overflow-y: scroll
}

.Box-body .help {
    padding-top: 8px;
    margin: 0;
    color: var(--color-fg-muted);
    text-align: center
}

.btn {
    position: relative;
    display: inline-block;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: var(--base-text-weight-medium, 500);
    line-height: 20px;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid;
    border-radius: 6px;
    -webkit-appearance: none;
    appearance: none
}

.btn:hover {
    text-decoration: none
}

.btn:disabled,.btn.disabled,.btn[aria-disabled=true] {
    cursor: default
}

.btn i {
    font-style: normal;
    font-weight: var(--base-text-weight-medium, 500);
    opacity: .75
}

.btn .octicon {
    margin-right: 4px;
    color: var(--color-fg-muted);
    vertical-align: text-bottom
}

.btn .octicon:only-child {
    margin-right: 0
}

.btn .Counter {
    margin-left: 2px;
    color: inherit;
    text-shadow: none;
    vertical-align: top;
    background-color: var(--color-btn-counter-bg)
}

.btn .dropdown-caret {
    margin-left: 4px;
    opacity: .8
}

.btn {
    color: var(--color-btn-text);
    background-color: var(--color-btn-bg);
    border-color: var(--color-btn-border);
    box-shadow: var(--color-btn-shadow),var(--color-btn-inset-shadow);
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color
}

.btn:hover,.btn.hover,[open]>.btn {
    background-color: var(--color-btn-hover-bg);
    border-color: var(--color-btn-hover-border);
    transition-duration: .1s
}

.btn:active {
    background-color: var(--color-btn-active-bg);
    border-color: var(--color-btn-active-border);
    transition: none
}

.btn.selected,.btn[aria-selected=true] {
    background-color: var(--color-btn-selected-bg);
    box-shadow: var(--color-primer-shadow-inset)
}

.btn:disabled,.btn.disabled,.btn[aria-disabled=true] {
    color: var(--color-primer-fg-disabled);
    background-color: var(--color-btn-bg);
    border-color: var(--color-btn-border)
}

.btn:disabled .octicon,.btn.disabled .octicon,.btn[aria-disabled=true] .octicon {
    color: var(--color-primer-fg-disabled)
}

.btn-primary {
    color: var(--color-btn-primary-text);
    background-color: var(--color-btn-primary-bg);
    border-color: var(--color-btn-primary-border);
    box-shadow: var(--color-btn-primary-shadow),var(--color-btn-primary-inset-shadow)
}

.btn-primary:hover,.btn-primary.hover,[open]>.btn-primary {
    background-color: var(--color-btn-primary-hover-bg);
    border-color: var(--color-btn-primary-hover-border)
}

.btn-primary:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.btn-primary:focus:not(:focus-visible) {
    outline: solid 1px transparent;
    box-shadow: none
}

.btn-primary:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.btn-primary:active,.btn-primary.selected,.btn-primary[aria-selected=true] {
    background-color: var(--color-btn-primary-selected-bg);
    box-shadow: var(--color-btn-primary-selected-shadow)
}

.btn-primary:disabled,.btn-primary.disabled,.btn-primary[aria-disabled=true] {
    color: var(--color-btn-primary-disabled-text);
    background-color: var(--color-btn-primary-disabled-bg);
    border-color: var(--color-btn-primary-disabled-border)
}

.btn-primary:disabled .octicon,.btn-primary.disabled .octicon,.btn-primary[aria-disabled=true] .octicon {
    color: var(--color-btn-primary-disabled-text)
}

.btn-primary .Counter {
    color: inherit;
    background-color: var(--color-btn-primary-counter-bg)
}

.btn-primary .octicon {
    color: var(--color-btn-primary-icon)
}

a.btn-primary:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

a.btn-primary:focus:not(:focus-visible) {
    outline: solid 1px transparent;
    box-shadow: none
}

a.btn-primary:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.btn-outline {
    color: var(--color-btn-outline-text)
}

.btn-outline:hover,[open]>.btn-outline {
    color: var(--color-btn-outline-hover-text);
    background-color: var(--color-btn-outline-hover-bg);
    border-color: var(--color-btn-outline-hover-border);
    box-shadow: var(--color-btn-outline-hover-shadow),var(--color-btn-outline-hover-inset-shadow)
}

.btn-outline:hover .Counter,[open]>.btn-outline .Counter {
    background-color: var(--color-btn-outline-hover-counter-bg)
}

.btn-outline:hover .octicon,[open]>.btn-outline .octicon {
    color: inherit
}

.btn-outline:active,.btn-outline.selected,.btn-outline[aria-selected=true] {
    color: var(--color-btn-outline-selected-text);
    background-color: var(--color-btn-outline-selected-bg);
    border-color: var(--color-btn-outline-selected-border);
    box-shadow: var(--color-btn-outline-selected-shadow)
}

.btn-outline:active:focus,.btn-outline.selected:focus,.btn-outline[aria-selected=true]:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.btn-outline:active:focus:not(:focus-visible),.btn-outline.selected:focus:not(:focus-visible),.btn-outline[aria-selected=true]:focus:not(:focus-visible) {
    outline: solid 1px transparent;
    box-shadow: none
}

.btn-outline:active:focus-visible,.btn-outline.selected:focus-visible,.btn-outline[aria-selected=true]:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.btn-outline:disabled,.btn-outline.disabled,.btn-outline[aria-disabled=true] {
    color: var(--color-btn-outline-disabled-text);
    background-color: var(--color-btn-outline-disabled-bg);
    border-color: var(--color-btn-border);
    box-shadow: none
}

.btn-outline:disabled .Counter,.btn-outline.disabled .Counter,.btn-outline[aria-disabled=true] .Counter {
    background-color: var(--color-btn-outline-disabled-counter-bg)
}

.btn-outline .Counter {
    color: inherit;
    background-color: var(--color-btn-outline-counter-bg)
}

.btn-danger {
    color: var(--color-btn-danger-text)
}

.btn-danger .octicon {
    color: var(--color-btn-danger-icon)
}

.btn-danger:hover,[open]>.btn-danger {
    color: var(--color-btn-danger-hover-text);
    background-color: var(--color-btn-danger-hover-bg);
    border-color: var(--color-btn-danger-hover-border);
    box-shadow: var(--color-btn-danger-hover-shadow),var(--color-btn-danger-hover-inset-shadow)
}

.btn-danger:hover .Counter,[open]>.btn-danger .Counter {
    background-color: var(--color-btn-danger-hover-counter-bg)
}

.btn-danger:hover .octicon,[open]>.btn-danger .octicon {
    color: var(--color-btn-danger-hover-icon)
}

.btn-danger:active,.btn-danger.selected,.btn-danger[aria-selected=true] {
    color: var(--color-btn-danger-selected-text);
    background-color: var(--color-btn-danger-selected-bg);
    border-color: var(--color-btn-danger-selected-border);
    box-shadow: var(--color-btn-danger-selected-shadow)
}

.btn-danger:disabled,.btn-danger.disabled,.btn-danger[aria-disabled=true] {
    color: var(--color-btn-danger-disabled-text);
    background-color: var(--color-btn-danger-disabled-bg);
    border-color: var(--color-btn-border);
    box-shadow: none
}

.btn-danger:disabled .Counter,.btn-danger.disabled .Counter,.btn-danger[aria-disabled=true] .Counter {
    background-color: var(--color-btn-danger-disabled-counter-bg)
}

.btn-danger:disabled .octicon,.btn-danger.disabled .octicon,.btn-danger[aria-disabled=true] .octicon {
    color: var(--color-btn-danger-disabled-text)
}

.btn-danger .Counter {
    color: inherit;
    background-color: var(--color-btn-danger-counter-bg)
}

.btn-sm {
    padding: 3px 12px;
    font-size: 12px;
    line-height: 20px
}

.btn-sm .octicon {
    vertical-align: text-top
}

.btn-large {
    padding: .75em 1.5em;
    font-size: inherit;
    line-height: 1.5;
    border-radius: .5em
}

.btn-block {
    display: block;
    width: 100%;
    text-align: center
}

.BtnGroup {
    display: inline-block;
    vertical-align: middle
}

.BtnGroup::before {
    display: table;
    content: ""
}

.BtnGroup::after {
    display: table;
    clear: both;
    content: ""
}

.BtnGroup+.BtnGroup,.BtnGroup+.btn {
    margin-left: 4px
}

.BtnGroup-item {
    position: relative;
    float: left;
    border-right-width: 0;
    border-radius: 0
}

.BtnGroup-item:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px
}

.BtnGroup-item:last-child {
    border-right-width: 1px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px
}

.BtnGroup-item.selected,.BtnGroup-item[aria-selected=true],.BtnGroup-item:focus,.BtnGroup-item:active,.BtnGroup-item:hover {
    border-right-width: 1px
}

.BtnGroup-item.selected+.BtnGroup-item,.BtnGroup-item.selected+.BtnGroup-parent .BtnGroup-item,.BtnGroup-item[aria-selected=true]+.BtnGroup-item,.BtnGroup-item[aria-selected=true]+.BtnGroup-parent .BtnGroup-item,.BtnGroup-item:focus+.BtnGroup-item,.BtnGroup-item:focus+.BtnGroup-parent .BtnGroup-item,.BtnGroup-item:active+.BtnGroup-item,.BtnGroup-item:active+.BtnGroup-parent .BtnGroup-item,.BtnGroup-item:hover+.BtnGroup-item,.BtnGroup-item:hover+.BtnGroup-parent .BtnGroup-item {
    border-left-width: 0
}

.BtnGroup-parent {
    float: left
}

.BtnGroup-parent:first-child .BtnGroup-item {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px
}

.BtnGroup-parent:last-child .BtnGroup-item {
    border-right-width: 1px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px
}

.BtnGroup-parent .BtnGroup-item {
    border-right-width: 0;
    border-radius: 0
}

.BtnGroup-parent.selected .BtnGroup-item,.BtnGroup-parent[aria-selected=true] .BtnGroup-item,.BtnGroup-parent:focus .BtnGroup-item,.BtnGroup-parent:active .BtnGroup-item,.BtnGroup-parent:hover .BtnGroup-item {
    border-right-width: 1px
}

.BtnGroup-parent.selected+.BtnGroup-item,.BtnGroup-parent.selected+.BtnGroup-parent .BtnGroup-item,.BtnGroup-parent[aria-selected=true]+.BtnGroup-item,.BtnGroup-parent[aria-selected=true]+.BtnGroup-parent .BtnGroup-item,.BtnGroup-parent:focus+.BtnGroup-item,.BtnGroup-parent:focus+.BtnGroup-parent .BtnGroup-item,.BtnGroup-parent:active+.BtnGroup-item,.BtnGroup-parent:active+.BtnGroup-parent .BtnGroup-item,.BtnGroup-parent:hover+.BtnGroup-item,.BtnGroup-parent:hover+.BtnGroup-parent .BtnGroup-item {
    border-left-width: 0
}

.BtnGroup-item:focus,.BtnGroup-item:active,.BtnGroup-parent:focus,.BtnGroup-parent:active {
    z-index: 1
}

.btn-link {
    display: inline-block;
    padding: 0;
    font-size: inherit;
    color: var(--color-accent-fg);
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 0;
    -webkit-appearance: none;
    appearance: none
}

.btn-link:hover {
    text-decoration: underline
}

.btn-link:disabled,.btn-link:disabled:hover,.btn-link[aria-disabled=true],.btn-link[aria-disabled=true]:hover {
    color: var(--color-primer-fg-disabled);
    cursor: default
}

.btn-link:not(.dropdown-item):focus,.btn-link:not(.dropdown-item):focus-visible {
    border-radius: 6px;
    outline-offset: 0
}

.btn-invisible {
    color: var(--color-accent-fg);
    background-color: transparent;
    border: 0;
    border-radius: 6px;
    box-shadow: none
}

.btn-invisible:hover,.btn-invisible.zeroclipboard-is-hover {
    color: var(--color-accent-fg);
    background-color: var(--color-btn-hover-bg);
    outline: none;
    box-shadow: none
}

.btn-invisible:active,.btn-invisible.selected,.btn-invisible[aria-selected=true],.btn-invisible.zeroclipboard-is-active {
    color: var(--color-accent-fg);
    background: none;
    border-color: var(--color-btn-active-border);
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

.btn-invisible:active .btn-invisible.zeroclipboard-is-active {
    background-color: var(--color-btn-selected-bg)
}

.btn-invisible:disabled,.btn-invisible.disabled,.btn-invisible[aria-disabled=true] {
    color: var(--color-primer-fg-disabled);
    background-color: transparent
}

.btn-octicon {
    display: inline-block;
    padding: 5px;
    margin-left: 5px;
    line-height: 1;
    color: var(--color-fg-muted);
    vertical-align: middle;
    background: transparent;
    border: 0;
    box-shadow: none
}

.btn-octicon:hover {
    color: var(--color-accent-fg)
}

.btn-octicon:focus,.btn-octicon:focus-visible {
    border-radius: 6px
}

.btn-octicon.disabled,.btn-octicon[aria-disabled=true] {
    color: var(--color-primer-fg-disabled);
    cursor: default
}

.btn-octicon.disabled:hover,.btn-octicon[aria-disabled=true]:hover {
    color: var(--color-primer-fg-disabled)
}

.btn-octicon-danger:hover {
    color: var(--color-danger-fg)
}

.close-button {
    padding: 0;
    color: var(--color-fg-muted);
    background: transparent;
    border: 0
}

.close-button:hover {
    color: var(--color-fg-default)
}

.close-button:active {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

.hidden-text-expander {
    display: block
}

.hidden-text-expander.inline {
    position: relative;
    top: -1px;
    display: inline-block;
    margin-left: 5px;
    line-height: 0
}

.hidden-text-expander a,.ellipsis-expander {
    display: inline-block;
    height: 12px;
    padding: 0 5px 5px;
    font-size: 12px;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 6px;
    color: var(--color-fg-default);
    text-decoration: none;
    vertical-align: middle;
    background: var(--color-neutral-muted);
    border: 0;
    border-radius: 1px
}

.hidden-text-expander a:hover,.ellipsis-expander:hover {
    text-decoration: none;
    background-color: var(--color-accent-muted)
}

.hidden-text-expander a:active,.ellipsis-expander:active {
    color: var(--color-fg-on-emphasis);
    background-color: var(--color-accent-emphasis)
}

.btn-with-count {
    float: left;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.btn-with-count:focus {
    z-index: 1
}

.social-count {
    position: relative;
    float: left;
    padding: 3px 12px;
    font-size: 12px;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 20px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-default);
    border: 1px solid var(--color-btn-border);
    border-left: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow: var(--color-shadow-small),var(--color-primer-shadow-highlight)
}

.social-count:hover,.social-count:active {
    text-decoration: none
}

.social-count:hover {
    color: var(--color-accent-fg);
    cursor: pointer
}

.TableObject {
    display: table
}

.TableObject-item {
    display: table-cell;
    width: 1%;
    white-space: nowrap;
    vertical-align: middle
}

.TableObject-item--primary {
    width: 99%
}

.form-control,.form-select {
    padding: 5px 12px;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-fg-default);
    vertical-align: middle;
    background-color: var(--color-canvas-default);
    background-repeat: no-repeat;
    background-position: right 8px center;
    border: 1px solid var(--color-border-default);
    border-radius: 6px;
    box-shadow: var(--color-primer-shadow-inset);
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color
}

.form-control:focus,.form-select:focus {
    border-color: var(--color-accent-fg);
    outline: none;
    box-shadow: inset 0 0 0 1px var(--color-accent-fg)
}

.form-control:focus:not(:focus-visible),.form-select:focus:not(:focus-visible) {
    border-color: transparent;
    border-color: var(--color-accent-fg);
    outline: none;
    box-shadow: inset 0 0 0 1px transparent
}

.form-control:focus-visible,.form-select:focus-visible {
    border-color: var(--color-accent-fg);
    outline: none;
    box-shadow: inset 0 0 0 1px var(--color-accent-fg)
}

.form-control.border-0:focus,.form-control.border-0:focus-visible,.form-select.border-0:focus,.form-select.border-0:focus-visible {
    border: 1px solid var(--color-accent-fg) !important
}

.form-control[disabled],fieldset[disabled] .form-control,.form-select[disabled],fieldset[disabled] .form-select {
    color: var(--color-primer-fg-disabled);
    background-color: var(--color-input-disabled-bg);
    border-color: var(--color-border-default);
    -webkit-text-fill-color: var(--color-primer-fg-disabled);
    opacity: 1
}

.form-control[disabled]::placeholder,fieldset[disabled] .form-control::placeholder,.form-select[disabled]::placeholder,fieldset[disabled] .form-select::placeholder {
    color: var(--color-primer-fg-disabled)
}

@supports(-webkit-touch-callout: none) {
    .form-control,.form-select {
        font-size: 16px
    }

    @media(min-width: 768px) {
        .form-control,.form-select {
            font-size:14px
        }
    }
}

textarea.form-control {
    padding-top: 8px;
    padding-bottom: 8px;
    line-height: 1.5
}

.input-contrast {
    background-color: var(--color-canvas-inset)
}

.input-contrast:focus {
    background-color: var(--color-canvas-default)
}

.input-sm {
    min-height: 28px;
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 12px;
    line-height: 20px
}

.input-lg {
    font-size: 16px
}

.input-block {
    display: block;
    width: 100%
}

.input-monospace {
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace
}

.input-hide-webkit-autofill::-webkit-contacts-auto-fill-button {
    position: absolute;
    right: 0;
    display: none !important;
    pointer-events: none;
    visibility: hidden
}

.form-checkbox {
    padding-left: 20px;
    margin: 15px 0;
    vertical-align: middle
}

.form-checkbox label em.highlight {
    position: relative;
    left: -4px;
    padding: 2px 4px;
    font-style: normal;
    background: var(--color-attention-subtle);
    border-radius: 6px
}

.form-checkbox input[type=checkbox],.form-checkbox input[type=radio] {
    float: left;
    margin: 5px 0 0 -20px;
    vertical-align: middle
}

.form-checkbox .note {
    display: block;
    margin: 0;
    font-size: 12px;
    font-weight: var(--base-text-weight-normal, 400);
    color: var(--color-fg-muted)
}

.form-checkbox-details {
    display: none
}

.form-checkbox-details-trigger:checked~* .form-checkbox-details,.form-checkbox-details-trigger:checked~.form-checkbox-details {
    display: block
}

.hfields {
    margin: 15px 0
}

.hfields::before {
    display: table;
    content: ""
}

.hfields::after {
    display: table;
    clear: both;
    content: ""
}

.hfields .form-group {
    float: left;
    margin: 0 30px 0 0
}

.hfields .form-group dt label,.hfields .form-group .form-group-header label {
    display: inline-block;
    margin: 5px 0 0;
    color: var(--color-fg-muted)
}

.hfields .form-group dt img,.hfields .form-group .form-group-header img {
    position: relative;
    top: -2px
}

.hfields .btn {
    float: left;
    margin: 28px 25px 0 -20px
}

.hfields .form-select {
    margin-top: 5px
}

input::-webkit-outer-spin-button,input::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
    appearance: none
}

.form-actions::before {
    display: table;
    content: ""
}

.form-actions::after {
    display: table;
    clear: both;
    content: ""
}

.form-actions .btn {
    float: right
}

.form-actions .btn+.btn {
    margin-right: 5px
}

.form-warning {
    padding: 8px 10px;
    margin: 10px 0;
    font-size: 14px;
    color: var(--color-attention-fg);
    background: var(--color-attention-subtle);
    border: 1px solid var(--color-attention-emphasis);
    border-radius: 6px
}

.form-warning p {
    margin: 0;
    line-height: 1.5
}

.form-warning a {
    font-weight: var(--base-text-weight-semibold, 600)
}

.form-select {
    display: inline-block;
    max-width: 100%;
    height: 32px;
    padding-right: 24px;
    background-color: var(--color-canvas-default);
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzU4NjA2OSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=");
    background-repeat: no-repeat;
    background-position: right 4px center;
    background-size: 16px;
    -webkit-appearance: none;
    appearance: none
}

.form-select::-ms-expand {
    opacity: 0
}

.form-select[multiple] {
    height: auto
}

[data-color-mode=light][data-light-theme*=dark] .form-select,[data-color-mode=dark][data-dark-theme*=dark] .form-select {
    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=")
}

@media(prefers-color-scheme: light) {
    [data-color-mode=auto][data-light-theme*=dark] .form-select {
        background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=")
    }
}

@media(prefers-color-scheme: dark) {
    [data-color-mode=auto][data-dark-theme*=dark] .form-select {
        background-image:url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0iIzZlNzY4MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC40MjcgOS40MjdsMy4zOTYgMy4zOTZhLjI1MS4yNTEgMCAwMC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwMDExLjM5NiA5SDQuNjA0YS4yNS4yNSAwIDAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3TDcuODIgMy4wNzJhLjI1LjI1IDAgMDEuMzU0IDBMMTEuNTcgNi40N2EuMjUuMjUgMCAwMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMDEtLjE3Ny0uNDI3eiIgLz48L3N2Zz4=")
    }
}

.select-sm {
    height: 28px;
    padding-top: 3px;
    padding-bottom: 3px;
    font-size: 12px
}

.select-sm[multiple] {
    height: auto;
    min-height: 0
}

.form-group {
    margin: 15px 0
}

.form-group .form-control.autocomplete-embedded-icon-wrap:focus-within {
    background-color: var(--color-canvas-default)
}

.form-group .form-control {
    width: 440px;
    max-width: 100%;
    margin-right: 5px;
    background-color: var(--color-canvas-inset)
}

.form-group .form-control:focus {
    background-color: var(--color-canvas-default)
}

.form-group .form-control.shorter {
    width: 130px
}

.form-group .form-control.short {
    width: 250px
}

.form-group .form-control.input-block,.form-group .form-control.long {
    width: 100%
}

.form-group textarea.form-control {
    width: 100%;
    height: 200px;
    min-height: 200px
}

.form-group textarea.form-control.short {
    height: 50px;
    min-height: 50px
}

.form-group dt,.form-group .form-group-header {
    margin: 0 0 6px
}

.form-group label {
    position: static
}

.form-group.flattened dt,.form-group.flattened .form-group-header {
    float: left;
    margin: 0;
    line-height: 32px
}

.form-group.flattened dd,.form-group.flattened .form-group-body {
    line-height: 32px
}

.form-group dd h4,.form-group .form-group-body h4 {
    margin: 4px 0 0
}

.form-group dd h4.is-error,.form-group .form-group-body h4.is-error {
    color: var(--color-danger-fg)
}

.form-group dd h4.is-success,.form-group .form-group-body h4.is-success {
    color: var(--color-success-fg)
}

.form-group dd h4+.note,.form-group .form-group-body h4+.note {
    margin-top: 0
}

.form-group.required dt label::after,.form-group.required .form-group-header label::after {
    padding-left: 5px;
    color: var(--color-danger-fg);
    content: "*"
}

.form-group .success,.form-group .error,.form-group .indicator {
    display: none;
    font-size: 12px;
    font-weight: var(--base-text-weight-semibold, 600)
}

.form-group.loading {
    opacity: .5
}

.form-group.loading .indicator {
    display: inline
}

.form-group.loading .spinner {
    display: inline-block;
    vertical-align: middle
}

.form-group.successful .success {
    display: inline;
    color: var(--color-success-fg)
}

.form-group.successed .success,.form-group.successed .warning,.form-group.successed .error,.form-group.warn .success,.form-group.warn .warning,.form-group.warn .error,.form-group.errored .success,.form-group.errored .warning,.form-group.errored .error {
    position: absolute;
    z-index: 10;
    display: block;
    max-width: 450px;
    padding: 4px 8px;
    margin: 8px 0 0;
    font-size: 12px;
    font-weight: var(--base-text-weight-normal, 400);
    border-style: solid;
    border-width: 1px;
    border-radius: 6px
}

.form-group.successed .success::after,.form-group.successed .success::before,.form-group.successed .warning::after,.form-group.successed .warning::before,.form-group.successed .error::after,.form-group.successed .error::before,.form-group.warn .success::after,.form-group.warn .success::before,.form-group.warn .warning::after,.form-group.warn .warning::before,.form-group.warn .error::after,.form-group.warn .error::before,.form-group.errored .success::after,.form-group.errored .success::before,.form-group.errored .warning::after,.form-group.errored .warning::before,.form-group.errored .error::after,.form-group.errored .error::before {
    position: absolute;
    bottom: 100%;
    left: 10px;
    z-index: 15;
    width: 0;
    height: 0;
    pointer-events: none;
    content: " ";
    border: solid transparent
}

.form-group.successed .success::after,.form-group.successed .warning::after,.form-group.successed .error::after,.form-group.warn .success::after,.form-group.warn .warning::after,.form-group.warn .error::after,.form-group.errored .success::after,.form-group.errored .warning::after,.form-group.errored .error::after {
    border-width: 5px
}

.form-group.successed .success::before,.form-group.successed .warning::before,.form-group.successed .error::before,.form-group.warn .success::before,.form-group.warn .warning::before,.form-group.warn .error::before,.form-group.errored .success::before,.form-group.errored .warning::before,.form-group.errored .error::before {
    margin-left: -1px;
    border-width: 6px
}

.form-group.successed .success {
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default);
    background-image: linear-gradient(var(--color-success-subtle), var(--color-success-subtle));
    border-color: var(--color-success-muted)
}

.form-group.successed .success::after {
    border-bottom-color: var(--color-success-subtle)
}

.form-group.successed .success::before {
    border-bottom-color: var(--color-success-muted)
}

.form-group.warn .form-control:not(:focus,:focus-visible) {
    border-color: var(--color-attention-emphasis)
}

.form-group.warn .warning {
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default);
    background-image: linear-gradient(var(--color-attention-subtle), var(--color-attention-subtle));
    border-color: var(--color-attention-muted)
}

.form-group.warn .warning::after {
    border-bottom-color: var(--color-attention-subtle)
}

.form-group.warn .warning::before {
    border-bottom-color: var(--color-attention-muted)
}

.form-group.errored .form-control:not(:focus,:focus-visible) {
    border-color: var(--color-danger-emphasis)
}

.form-group.errored label {
    color: var(--color-danger-fg)
}

.form-group.errored .error {
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default);
    background-image: linear-gradient(var(--color-danger-subtle), var(--color-danger-subtle));
    border-color: var(--color-danger-muted)
}

.form-group.errored .error::after {
    border-bottom-color: var(--color-danger-subtle)
}

.form-group.errored .error::before {
    border-bottom-color: var(--color-danger-muted)
}

.note {
    min-height: 17px;
    margin: 4px 0 2px;
    font-size: 12px;
    color: var(--color-fg-muted)
}

.note .spinner {
    margin-right: 3px;
    vertical-align: middle
}

.input-group {
    display: table
}

.input-group .form-control {
    position: relative;
    width: 100%
}

.input-group .form-control:focus {
    z-index: 2
}

.input-group .form-control+.btn {
    margin-left: 0
}

.input-group.inline {
    display: inline-table
}

.input-group:focus-within button {
    outline-offset: 0
}

.input-group .form-control.autocomplete-embedded-icon-wrap {
    display: inline-flex;
    padding: 5px 8px
}

.input-group .form-control,.input-group-button {
    display: table-cell
}

.input-group-button {
    width: 1%;
    vertical-align: middle
}

.input-group-button--autocomplete-embedded-icon {
    vertical-align: bottom
}

.input-group .form-control:first-child,.input-group-button:first-child .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.input-group-button:first-child .btn {
    margin-right: -1px
}

.input-group .form-control:last-child,.input-group-button:last-child .btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.input-group-button:last-child .btn {
    margin-left: -1px
}

.radio-group::before {
    display: table;
    content: ""
}

.radio-group::after {
    display: table;
    clear: both;
    content: ""
}

.radio-label {
    float: left;
    padding: 6px 16px 6px 36px;
    margin-left: -1px;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-fg-default);
    cursor: pointer;
    border: 1px solid var(--color-border-default)
}

:checked+.radio-label {
    position: relative;
    z-index: 1;
    border-color: var(--color-accent-emphasis)
}

.radio-label:first-of-type {
    margin-left: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px
}

.radio-label:last-of-type {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px
}

.radio-label .octicon {
    margin-left: 4px;
    color: var(--color-fg-subtle)
}

.radio-input {
    z-index: 3;
    float: left;
    margin: 10px -32px 0 16px
}

.radio-input:disabled {
    position: relative
}

.radio-input:disabled+.radio-label {
    color: var(--color-primer-fg-disabled);
    cursor: default;
    background-color: var(--color-neutral-subtle)
}

.radio-input:disabled+.radio-label .octicon {
    color: inherit
}

.AppFrame .AppFrame-a11yNav {
    position: absolute;
    z-index: 1000;
    display: flex;
    width: 100%;
    padding: var(--base-size-16, 16px);
    background: var(--color-canvas-inset);
    padding-block-end:calc(var(--base-size-16, 16px) - var(--primer-borderWidth-thin, 1px));isolation: isolate;
    align-items: center;
    gap: var(--base-size-8, 8px)
}

.AppFrame .AppFrame-a11yNav:not(:focus-within) {
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    border: 0
}

.AppFrame .AppFrame-a11yNav:focus-within {
    top: 0;
    left: 0
}

@media(max-width: 767.98px) {
    .AppFrame .AppFrame-a11yNav:focus-within {
        justify-content:center
    }
}

.AppFrame .AppFrame-a11yLink {
    transition: none
}

.AppFrame .AppFrame-a11yLink:not(:focus) {
    display: block;
    width: var(--base-size-8, 8px);
    height: var(--base-size-8, 8px);
    overflow: hidden;
    text-indent: var(--base-size-128, 128px);
    pointer-events: none;
    background: var(--color-border-default);
    border-radius: var(--primer-borderRadius-full, 100vh)
}

.AppFrame .AppFrame-a11yLink:focus {
    z-index: 20;
    display: grid;
    width: auto;
    height: auto;
    min-height: var(--primer-control-medium-size, 32px);
    padding: 0 var(--primer-control-medium-paddingInline-spacious, 16px);
    overflow: auto;
    color: var(--color-fg-on-emphasis);
    background: var(--color-accent-emphasis);
    border-radius: var(--primer-borderRadius-full, 100vh);
    align-items: center
}

@media(pointer: coarse) {
    .AppFrame .AppFrame-a11yLink:focus::after {
        position:absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        min-height: var(--primer-control-minTarget-coarse, 44px);
        content: "";
        transform: translateX(-50%) translateY(-50%)
    }
}

@media(prefers-reduced-motion: no-preference) {
    .AppFrame .AppFrame-a11yLink:focus {
        animation: AppFrame-a11yLink-focus 200ms ease-out
    }
}

@keyframes AppFrame-a11yLink-focus {
    0% {
        color: var(--color-accent-emphasis);
        transform: scale(0.3, 0.25)
    }

    50% {
        color: var(--color-accent-emphasis);
        transform: scale(1, 1)
    }

    55% {
        color: var(--color-fg-on-emphasis)
    }

    100% {
        transform: scaleX(1)
    }
}

.AppFrame .AppFrame-main {
    display: flex;
    min-height: 100vh;
    flex-direction: column
}

@supports(height: 100dvh) {
    .AppFrame .AppFrame-main {
        min-height:100dvh
    }
}

.AppFrame .AppFrame-header-wrapper {
    position: relative;
    height: min-content;
    overflow: visible
}

.AppFrame .AppFrame-header-wrapper .AppFrame-header {
    position: sticky;
    top: 0;
    z-index: 1
}

.AppFrame .AppFrame-header {
    flex: 0 0 auto
}

.AppFrame .AppFrame-subheader {
    flex: 0 0 auto
}

.AppFrame .AppFrame-body {
    flex: 1 0;
    height: 100%
}

.AppFrame .AppFrame-footer {
    flex: 0 0 auto
}

.container-sm {
    max-width: 544px;
    margin-right: auto;
    margin-left: auto
}

.container-md {
    max-width: 768px;
    margin-right: auto;
    margin-left: auto
}

.container-lg {
    max-width: 1012px;
    margin-right: auto;
    margin-left: auto
}

.container-xl {
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto
}

.col-1 {
    width: 8.33333333%
}

.col-2 {
    width: 16.66666666%
}

.col-3 {
    width: 24.99999999%
}

.col-4 {
    width: 33.33333332%
}

.col-5 {
    width: 41.66666665%
}

.col-6 {
    width: 49.99999998%
}

.col-7 {
    width: 58.33333331%
}

.col-8 {
    width: 66.66666664%
}

.col-9 {
    width: 74.99999997%
}

.col-10 {
    width: 83.3333333%
}

.col-11 {
    width: 91.66666663%
}

.col-12 {
    width: 100%
}

@media(min-width: 544px) {
    .col-sm-1 {
        width:8.33333333%
    }

    .col-sm-2 {
        width: 16.66666666%
    }

    .col-sm-3 {
        width: 24.99999999%
    }

    .col-sm-4 {
        width: 33.33333332%
    }

    .col-sm-5 {
        width: 41.66666665%
    }

    .col-sm-6 {
        width: 49.99999998%
    }

    .col-sm-7 {
        width: 58.33333331%
    }

    .col-sm-8 {
        width: 66.66666664%
    }

    .col-sm-9 {
        width: 74.99999997%
    }

    .col-sm-10 {
        width: 83.3333333%
    }

    .col-sm-11 {
        width: 91.66666663%
    }

    .col-sm-12 {
        width: 100%
    }
}

@media(min-width: 768px) {
    .col-md-1 {
        width:8.33333333%
    }

    .col-md-2 {
        width: 16.66666666%
    }

    .col-md-3 {
        width: 24.99999999%
    }

    .col-md-4 {
        width: 33.33333332%
    }

    .col-md-5 {
        width: 41.66666665%
    }

    .col-md-6 {
        width: 49.99999998%
    }

    .col-md-7 {
        width: 58.33333331%
    }

    .col-md-8 {
        width: 66.66666664%
    }

    .col-md-9 {
        width: 74.99999997%
    }

    .col-md-10 {
        width: 83.3333333%
    }

    .col-md-11 {
        width: 91.66666663%
    }

    .col-md-12 {
        width: 100%
    }
}

@media(min-width: 1012px) {
    .col-lg-1 {
        width:8.33333333%
    }

    .col-lg-2 {
        width: 16.66666666%
    }

    .col-lg-3 {
        width: 24.99999999%
    }

    .col-lg-4 {
        width: 33.33333332%
    }

    .col-lg-5 {
        width: 41.66666665%
    }

    .col-lg-6 {
        width: 49.99999998%
    }

    .col-lg-7 {
        width: 58.33333331%
    }

    .col-lg-8 {
        width: 66.66666664%
    }

    .col-lg-9 {
        width: 74.99999997%
    }

    .col-lg-10 {
        width: 83.3333333%
    }

    .col-lg-11 {
        width: 91.66666663%
    }

    .col-lg-12 {
        width: 100%
    }
}

@media(min-width: 1280px) {
    .col-xl-1 {
        width:8.33333333%
    }

    .col-xl-2 {
        width: 16.66666666%
    }

    .col-xl-3 {
        width: 24.99999999%
    }

    .col-xl-4 {
        width: 33.33333332%
    }

    .col-xl-5 {
        width: 41.66666665%
    }

    .col-xl-6 {
        width: 49.99999998%
    }

    .col-xl-7 {
        width: 58.33333331%
    }

    .col-xl-8 {
        width: 66.66666664%
    }

    .col-xl-9 {
        width: 74.99999997%
    }

    .col-xl-10 {
        width: 83.3333333%
    }

    .col-xl-11 {
        width: 91.66666663%
    }

    .col-xl-12 {
        width: 100%
    }
}

.gutter {
    margin-right: -16px;
    margin-left: -16px
}

.gutter>[class*=col-] {
    padding-right: 16px !important;
    padding-left: 16px !important
}

.gutter-condensed {
    margin-right: -8px;
    margin-left: -8px
}

.gutter-condensed>[class*=col-] {
    padding-right: 8px !important;
    padding-left: 8px !important
}

.gutter-spacious {
    margin-right: -24px;
    margin-left: -24px
}

.gutter-spacious>[class*=col-] {
    padding-right: 24px !important;
    padding-left: 24px !important
}

@media(min-width: 544px) {
    .gutter-sm {
        margin-right:-16px;
        margin-left: -16px
    }

    .gutter-sm>[class*=col-] {
        padding-right: 16px !important;
        padding-left: 16px !important
    }

    .gutter-sm-condensed {
        margin-right: -8px;
        margin-left: -8px
    }

    .gutter-sm-condensed>[class*=col-] {
        padding-right: 8px !important;
        padding-left: 8px !important
    }

    .gutter-sm-spacious {
        margin-right: -24px;
        margin-left: -24px
    }

    .gutter-sm-spacious>[class*=col-] {
        padding-right: 24px !important;
        padding-left: 24px !important
    }
}

@media(min-width: 768px) {
    .gutter-md {
        margin-right:-16px;
        margin-left: -16px
    }

    .gutter-md>[class*=col-] {
        padding-right: 16px !important;
        padding-left: 16px !important
    }

    .gutter-md-condensed {
        margin-right: -8px;
        margin-left: -8px
    }

    .gutter-md-condensed>[class*=col-] {
        padding-right: 8px !important;
        padding-left: 8px !important
    }

    .gutter-md-spacious {
        margin-right: -24px;
        margin-left: -24px
    }

    .gutter-md-spacious>[class*=col-] {
        padding-right: 24px !important;
        padding-left: 24px !important
    }
}

@media(min-width: 1012px) {
    .gutter-lg {
        margin-right:-16px;
        margin-left: -16px
    }

    .gutter-lg>[class*=col-] {
        padding-right: 16px !important;
        padding-left: 16px !important
    }

    .gutter-lg-condensed {
        margin-right: -8px;
        margin-left: -8px
    }

    .gutter-lg-condensed>[class*=col-] {
        padding-right: 8px !important;
        padding-left: 8px !important
    }

    .gutter-lg-spacious {
        margin-right: -24px;
        margin-left: -24px
    }

    .gutter-lg-spacious>[class*=col-] {
        padding-right: 24px !important;
        padding-left: 24px !important
    }
}

@media(min-width: 1280px) {
    .gutter-xl {
        margin-right:-16px;
        margin-left: -16px
    }

    .gutter-xl>[class*=col-] {
        padding-right: 16px !important;
        padding-left: 16px !important
    }

    .gutter-xl-condensed {
        margin-right: -8px;
        margin-left: -8px
    }

    .gutter-xl-condensed>[class*=col-] {
        padding-right: 8px !important;
        padding-left: 8px !important
    }

    .gutter-xl-spacious {
        margin-right: -24px;
        margin-left: -24px
    }

    .gutter-xl-spacious>[class*=col-] {
        padding-right: 24px !important;
        padding-left: 24px !important
    }
}

.offset-1 {
    margin-left: 8.33333333% !important
}

.offset-2 {
    margin-left: 16.66666666% !important
}

.offset-3 {
    margin-left: 24.99999999% !important
}

.offset-4 {
    margin-left: 33.33333332% !important
}

.offset-5 {
    margin-left: 41.66666665% !important
}

.offset-6 {
    margin-left: 49.99999998% !important
}

.offset-7 {
    margin-left: 58.33333331% !important
}

.offset-8 {
    margin-left: 66.66666664% !important
}

.offset-9 {
    margin-left: 74.99999997% !important
}

.offset-10 {
    margin-left: 83.3333333% !important
}

.offset-11 {
    margin-left: 91.66666663% !important
}

@media(min-width: 544px) {
    .offset-sm-1 {
        margin-left:8.33333333% !important
    }

    .offset-sm-2 {
        margin-left: 16.66666666% !important
    }

    .offset-sm-3 {
        margin-left: 24.99999999% !important
    }

    .offset-sm-4 {
        margin-left: 33.33333332% !important
    }

    .offset-sm-5 {
        margin-left: 41.66666665% !important
    }

    .offset-sm-6 {
        margin-left: 49.99999998% !important
    }

    .offset-sm-7 {
        margin-left: 58.33333331% !important
    }

    .offset-sm-8 {
        margin-left: 66.66666664% !important
    }

    .offset-sm-9 {
        margin-left: 74.99999997% !important
    }

    .offset-sm-10 {
        margin-left: 83.3333333% !important
    }

    .offset-sm-11 {
        margin-left: 91.66666663% !important
    }
}

@media(min-width: 768px) {
    .offset-md-1 {
        margin-left:8.33333333% !important
    }

    .offset-md-2 {
        margin-left: 16.66666666% !important
    }

    .offset-md-3 {
        margin-left: 24.99999999% !important
    }

    .offset-md-4 {
        margin-left: 33.33333332% !important
    }

    .offset-md-5 {
        margin-left: 41.66666665% !important
    }

    .offset-md-6 {
        margin-left: 49.99999998% !important
    }

    .offset-md-7 {
        margin-left: 58.33333331% !important
    }

    .offset-md-8 {
        margin-left: 66.66666664% !important
    }

    .offset-md-9 {
        margin-left: 74.99999997% !important
    }

    .offset-md-10 {
        margin-left: 83.3333333% !important
    }

    .offset-md-11 {
        margin-left: 91.66666663% !important
    }
}

@media(min-width: 1012px) {
    .offset-lg-1 {
        margin-left:8.33333333% !important
    }

    .offset-lg-2 {
        margin-left: 16.66666666% !important
    }

    .offset-lg-3 {
        margin-left: 24.99999999% !important
    }

    .offset-lg-4 {
        margin-left: 33.33333332% !important
    }

    .offset-lg-5 {
        margin-left: 41.66666665% !important
    }

    .offset-lg-6 {
        margin-left: 49.99999998% !important
    }

    .offset-lg-7 {
        margin-left: 58.33333331% !important
    }

    .offset-lg-8 {
        margin-left: 66.66666664% !important
    }

    .offset-lg-9 {
        margin-left: 74.99999997% !important
    }

    .offset-lg-10 {
        margin-left: 83.3333333% !important
    }

    .offset-lg-11 {
        margin-left: 91.66666663% !important
    }
}

@media(min-width: 1280px) {
    .offset-xl-1 {
        margin-left:8.33333333% !important
    }

    .offset-xl-2 {
        margin-left: 16.66666666% !important
    }

    .offset-xl-3 {
        margin-left: 24.99999999% !important
    }

    .offset-xl-4 {
        margin-left: 33.33333332% !important
    }

    .offset-xl-5 {
        margin-left: 41.66666665% !important
    }

    .offset-xl-6 {
        margin-left: 49.99999998% !important
    }

    .offset-xl-7 {
        margin-left: 58.33333331% !important
    }

    .offset-xl-8 {
        margin-left: 66.66666664% !important
    }

    .offset-xl-9 {
        margin-left: 74.99999997% !important
    }

    .offset-xl-10 {
        margin-left: 83.3333333% !important
    }

    .offset-xl-11 {
        margin-left: 91.66666663% !important
    }
}

:root {
    --Layout-pane-width: 220px;
    --Layout-content-width: 100%;
    --Layout-template-columns: 1fr var(--Layout-pane-width);
    --Layout-template-areas: "content pane";
    --Layout-column-gap: 16px;
    --Layout-row-gap: 16px;
    --Layout-outer-spacing-x: 0px;
    --Layout-outer-spacing-y: 0px;
    --Layout-inner-spacing-min: 0px;
    --Layout-inner-spacing-max: 0px
}

.PageLayout {
    display: block;
    margin: var(--Layout-outer-spacing-y) var(--Layout-outer-spacing-x)
}

@media(min-width: 768px) {
    .PageLayout.PageLayout--panePos-start {
        --Layout-template-columns: var(--Layout-pane-width) minmax(0, calc(100% - var(--Layout-pane-width) - var(--Layout-column-gap)));
        --Layout-template-areas: "pane content"
    }

    .PageLayout.PageLayout--panePos-end {
        --Layout-template-columns: minmax(0, calc(100% - var(--Layout-pane-width) - var(--Layout-column-gap))) var(--Layout-pane-width);
        --Layout-template-areas: "content pane"
    }

    .PageLayout .PageLayout-header--hasDivider {
        padding-bottom: max(var(--Layout-row-gap),var(--Layout-inner-spacing-min));
        border-bottom: 1px solid var(--color-border-default)
    }

    .PageLayout .PageLayout-footer--hasDivider {
        padding-top: max(var(--Layout-row-gap),var(--Layout-inner-spacing-min));
        border-top: 1px solid var(--color-border-default)
    }

    .PageLayout.PageLayout--hasPaneDivider.PageLayout--panePos-start .PageLayout-pane {
        border-right: 1px solid var(--color-border-default)
    }

    .PageLayout.PageLayout--hasPaneDivider.PageLayout--panePos-start:not(.PageLayout--columnGap-none) .PageLayout-pane {
        padding-right: calc(var(--Layout-column-gap) - 1px);
        margin-right: calc(var(--Layout-column-gap)*-1)
    }

    .PageLayout.PageLayout--hasPaneDivider.PageLayout--panePos-start:not(.PageLayout--columnGap-none) .PageLayout-content {
        margin-left: var(--Layout-column-gap)
    }

    .PageLayout.PageLayout--hasPaneDivider.PageLayout--panePos-end .PageLayout-pane {
        border-left: 1px solid var(--color-border-default)
    }

    .PageLayout.PageLayout--hasPaneDivider.PageLayout--panePos-end:not(.PageLayout--columnGap-none) .PageLayout-pane {
        padding-left: calc(var(--Layout-column-gap) - 1px);
        margin-left: calc(var(--Layout-column-gap)*-1)
    }

    .PageLayout.PageLayout--hasPaneDivider.PageLayout--panePos-end:not(.PageLayout--columnGap-none) .PageLayout-content {
        margin-right: var(--Layout-column-gap)
    }

    .PageLayout .PageLayout-pane--sticky {
        position: sticky;
        top: 0;
        max-height: 100vh;
        overflow: auto;
        scrollbar-width: thin
    }

    @supports(max-height: 100dvh) {
        .PageLayout .PageLayout-pane--sticky {
            max-height:100dvh
        }
    }

    .PageLayout [class^=PageLayout-content-centered-] {
        max-width: calc(var(--Layout-content-width) + var(--Layout-pane-width) + var(--Layout-column-gap));
        margin-right: auto;
        margin-left: auto
    }

    .PageLayout.PageLayout--hasPaneDivider [class^=PageLayout-content-centered-] {
        max-width: calc(var(--Layout-content-width) + var(--Layout-pane-width) + var(--Layout-column-gap)*2)
    }

    .PageLayout.PageLayout--panePos-start [class^=PageLayout-content-centered-]>[class^=container-] {
        margin-left: 0
    }

    .PageLayout.PageLayout--panePos-end [class^=PageLayout-content-centered-]>[class^=container-] {
        margin-right: 0
    }

    .PageLayout .PageLayout-content-centered-sm {
        --Layout-content-width: 544px
    }

    .PageLayout .PageLayout-content-centered-md {
        --Layout-content-width: 768px
    }

    .PageLayout .PageLayout-content-centered-lg {
        --Layout-content-width: 1012px
    }

    .PageLayout .PageLayout-content-centered-xl {
        --Layout-content-width: 1280px
    }
}

@media(min-width: 768px)and (min-width: 544px) {
    .PageLayout {
        --Layout-pane-width: 220px
    }
}

@media(min-width: 768px)and (min-width: 768px) {
    .PageLayout {
        --Layout-pane-width: 256px
    }
}

@media(min-width: 768px)and (min-width: 1012px) {
    .PageLayout {
        --Layout-pane-width: 296px
    }
}

@media(min-width: 768px)and (min-width: 768px) {
    .PageLayout.PageLayout--paneWidth-narrow {
        --Layout-pane-width: 240px
    }
}

@media(min-width: 768px)and (min-width: 1012px) {
    .PageLayout.PageLayout--paneWidth-narrow {
        --Layout-pane-width: 256px
    }
}

@media(min-width: 768px)and (min-width: 1012px) {
    .PageLayout.PageLayout--paneWidth-wide {
        --Layout-pane-width: 320px
    }
}

@media(min-width: 768px)and (min-width: 1280px) {
    .PageLayout.PageLayout--paneWidth-wide {
        --Layout-pane-width: 336px
    }
}

@media(max-width: 767.98px) {
    .PageLayout.PageLayout--responsive-stackRegions {
        --Layout-template-columns: 1fr;
        --Layout-template-areas: "content" "pane"
    }

    .PageLayout.PageLayout--responsive-stackRegions.PageLayout--responsive-panePos-start {
        --Layout-template-areas: "pane" "content"
    }

    .PageLayout.PageLayout--responsive-separateRegions {
        --Layout-template-columns: 1fr;
        --Layout-template-areas: "content"
    }

    .PageLayout.PageLayout--responsive-separateRegions.PageLayout--responsive-primary-content {
        --Layout-template-areas: "content"
    }

    .PageLayout.PageLayout--responsive-separateRegions.PageLayout--responsive-primary-content .PageLayout-pane {
        display: none
    }

    .PageLayout.PageLayout--responsive-separateRegions.PageLayout--responsive-primary-pane {
        --Layout-template-areas: "pane"
    }

    .PageLayout.PageLayout--responsive-separateRegions.PageLayout--responsive-primary-pane .PageLayout-content {
        display: none
    }

    .PageLayout .PageLayout-region--dividerNarrow-line-before {
        position: relative;
        margin-top: var(--Layout-row-gap)
    }

    .PageLayout .PageLayout-region--dividerNarrow-line-before::before {
        position: absolute;
        left: calc(var(--Layout-outer-spacing-x)*-1);
        display: block;
        width: calc(100% + var(--Layout-outer-spacing-x)*2);
        height: 1px;
        content: "";
        background-color: var(--color-border-default);
        top: calc(-1px - var(--Layout-row-gap))
    }

    .PageLayout .PageLayout-region--dividerNarrow-line-after {
        position: relative;
        margin-bottom: var(--Layout-row-gap)
    }

    .PageLayout .PageLayout-region--dividerNarrow-line-after::after {
        position: absolute;
        left: calc(var(--Layout-outer-spacing-x)*-1);
        display: block;
        width: calc(100% + var(--Layout-outer-spacing-x)*2);
        height: 1px;
        content: "";
        background-color: var(--color-border-default);
        bottom: calc(-1px - var(--Layout-row-gap))
    }

    .PageLayout .PageLayout-region--dividerNarrow-filled-before {
        position: relative;
        margin-top: calc(8px + var(--Layout-row-gap))
    }

    .PageLayout .PageLayout-region--dividerNarrow-filled-before::after {
        position: absolute;
        bottom: calc(8px * -1);
        left: calc(var(--Layout-outer-spacing-x)*-1);
        display: block;
        width: calc(100% + var(--Layout-outer-spacing-x)*2);
        height: 8px;
        content: "";
        background-color: var(--color-canvas-inset);
        box-shadow: inset 0 1px var(--color-border-default),inset 0 -1px var(--color-border-default);
        top: calc(-8px - var(--Layout-row-gap))
    }

    .PageLayout .PageLayout-region--dividerNarrow-filled-after {
        position: relative;
        margin-bottom: calc(8px + var(--Layout-row-gap))
    }

    .PageLayout .PageLayout-region--dividerNarrow-filled-after::before {
        position: absolute;
        bottom: calc(8px * -1);
        left: calc(var(--Layout-outer-spacing-x)*-1);
        display: block;
        width: calc(100% + var(--Layout-outer-spacing-x)*2);
        height: 8px;
        content: "";
        background-color: var(--color-canvas-inset);
        box-shadow: inset 0 1px var(--color-border-default),inset 0 -1px var(--color-border-default);
        bottom: calc(-8px - var(--Layout-row-gap))
    }
}

.PageLayout-wrapper {
    display: grid;
    grid: auto-flow/1fr;
    row-gap: var(--Layout-row-gap)
}

.PageLayout-columns {
    display: grid;
    column-gap: var(--Layout-column-gap);
    row-gap: var(--Layout-row-gap);
    grid-template-columns: var(--Layout-template-columns);
    grid-template-rows: 1fr;
    grid-template-areas: var(--Layout-template-areas)
}

.PageLayout-columns .PageLayout-content {
    padding-right: var(--Layout-inner-spacing-max);
    padding-left: var(--Layout-inner-spacing-max);
    grid-area: content
}

.PageLayout-columns .PageLayout-pane {
    grid-area: pane
}

.PageLayout--outerSpacing-normal {
    --Layout-outer-spacing-x: 16px;
    --Layout-outer-spacing-y: 16px
}

@media(min-width: 1012px) {
    .PageLayout--outerSpacing-normal {
        --Layout-outer-spacing-x: 24px;
        --Layout-outer-spacing-y: 24px
    }
}

.PageLayout--outerSpacing-condensed {
    --Layout-outer-spacing-x: 16px;
    --Layout-outer-spacing-y: 16px
}

.PageLayout--innerSpacing-normal {
    --Layout-inner-spacing-min: 16px;
    --Layout-inner-spacing-max: 16px
}

@media(min-width: 1012px) {
    .PageLayout--innerSpacing-normal {
        --Layout-inner-spacing-max: 24px
    }
}

.PageLayout--innerSpacing-condensed {
    --Layout-inner-spacing-min: 16px;
    --Layout-inner-spacing-max: 16px
}

.PageLayout--columnGap-normal {
    --Layout-column-gap: 16px
}

@media(min-width: 1012px) {
    .PageLayout--columnGap-normal {
        --Layout-column-gap: 24px
    }
}

.PageLayout--columnGap-condensed {
    --Layout-column-gap: 16px
}

.PageLayout--columnGap-none {
    --Layout-column-gap: 0px
}

.PageLayout--rowGap-normal {
    --Layout-row-gap: 16px
}

@media(min-width: 1012px) {
    .PageLayout--rowGap-normal {
        --Layout-row-gap: 24px
    }
}

.PageLayout--rowGap-none {
    --Layout-row-gap: 0px
}

.PageLayout--rowGap-condensed {
    --Layout-row-gap: 16px
}

.PageLayout-header,.PageLayout-content,.PageLayout-pane,.PageLayout-footer {
    padding: var(--Layout-inner-spacing-min)
}

.Stack {
    --Stack-gap-whenRegular: var(--primer-stack-gap-normal, 16px);
    --Stack-gap-whenNarrow: var(--primer-stack-gap-normal, 16px);
    --Stack-gap-whenWide: var(--Stack-gap-whenRegular);
    --Stack-divider-color: var(--color-border-default);
    display: flex;
    flex-flow: column;
    align-items: stretch;
    align-content: flex-start;
    gap: var(--Stack-gap-whenRegular)
}

@media(max-width: 767.98px) {
    .Stack {
        gap:var(--Stack-gap-whenNarrow)
    }
}

@media(min-width: 1400px) {
    .Stack {
        gap:var(--Stack-gap-whenWide)
    }
}

.Stack-divider {
    display: none;
    padding: 0;
    margin: 0;
    border: 0;
    align-self: stretch
}

.Stack-item {
    flex: 0 1 auto;
    min-inline-size: 0
}

@media(max-width: 767.98px) {
    .Stack--dir-inline-whenNarrow {
        flex-flow:row
    }

    .Stack--dir-block-whenNarrow {
        flex-flow: column
    }

    .Stack--gap-none-whenNarrow {
        --Stack-gap-whenNarrow: 0
    }

    .Stack--gap-condensed-whenNarrow {
        --Stack-gap-whenNarrow: var(--primer-stack-gap-condensed, 8px)
    }

    .Stack--gap-normal-whenNarrow {
        --Stack-gap-whenNarrow: var(--primer-stack-gap-normal, 16px)
    }

    .Stack--align-start-whenNarrow {
        align-items: flex-start
    }

    .Stack--align-center-whenNarrow {
        align-items: center
    }

    .Stack--align-end-whenNarrow {
        align-items: flex-end
    }

    .Stack--align-baseline-whenNarrow {
        align-items: baseline
    }

    .Stack--alignWrap-start-whenNarrow {
        align-content: flex-start
    }

    .Stack--alignWrap-center-whenNarrow {
        align-content: center
    }

    .Stack--alignWrap-end-whenNarrow {
        align-content: flex-end
    }

    .Stack--alignWrap-distribute-whenNarrow {
        align-content: space-between
    }

    .Stack--alignWrap-distributeEvenly-whenNarrow {
        align-content: space-evenly
    }

    .Stack--spread-start-whenNarrow {
        justify-content: flex-start
    }

    .Stack--spread-center-whenNarrow {
        justify-content: center
    }

    .Stack--spread-end-whenNarrow {
        justify-content: flex-end
    }

    .Stack--spread-distribute-whenNarrow {
        justify-content: space-between
    }

    .Stack--spread-distributeEvenly-whenNarrow {
        justify-content: space-evenly
    }

    .Stack--wrap-whenNarrow {
        flex-wrap: wrap
    }

    .Stack--nowrap-whenNarrow {
        flex-wrap: nowrap
    }

    .Stack--showDividers-whenNarrow>.Stack-divider,.Stack--showDividers-whenNarrow>.Stack-item>.Stack-divider {
        display: block
    }

    :not(.Stack--dir-inline-whenNarrow)>.Stack-divider,:not(.Stack--dir-inline-whenNarrow)>.Stack-item>.Stack-divider {
        border-block-end:var(--primer-borderWidth-thin, 1px) solid var(--Stack-divider-color);inline-size: auto;
        block-size: 0
    }

    .Stack--dir-inline-whenNarrow>.Stack-divider,.Stack--dir-inline-whenNarrow>.Stack-item>.Stack-divider {
        border-inline-end:var(--primer-borderWidth-thin, 1px) solid var(--Stack-divider-color);inline-size: 0;
        block-size: auto
    }

    .Stack-item--expand-whenNarrow {
        flex-grow: 1
    }

    .Stack-item--keepSize-whenNarrow {
        flex-shrink: 0
    }
}

@media(min-width: 768px) {
    .Stack--dir-inline-whenRegular {
        flex-flow:row
    }

    .Stack--dir-block-whenRegular {
        flex-flow: column
    }

    .Stack--gap-none-whenRegular {
        --Stack-gap-whenRegular: 0
    }

    .Stack--gap-condensed-whenRegular {
        --Stack-gap-whenRegular: var(--primer-stack-gap-condensed, 8px)
    }

    .Stack--gap-normal-whenRegular {
        --Stack-gap-whenRegular: var(--primer-stack-gap-normal, 16px)
    }

    .Stack--gap-spacious-whenRegular {
        --Stack-gap-whenRegular: var(--primer-stack-gap-spacious, 24px)
    }

    .Stack--align-start-whenRegular {
        align-items: flex-start
    }

    .Stack--align-center-whenRegular {
        align-items: center
    }

    .Stack--align-end-whenRegular {
        align-items: flex-end
    }

    .Stack--align-baseline-whenRegular {
        align-items: baseline
    }

    .Stack--alignWrap-start-whenRegular {
        align-content: flex-start
    }

    .Stack--alignWrap-center-whenRegular {
        align-content: center
    }

    .Stack--alignWrap-end-whenRegular {
        align-content: flex-end
    }

    .Stack--alignWrap-distribute-whenRegular {
        align-content: space-between
    }

    .Stack--alignWrap-distributeEvenly-whenRegular {
        align-content: space-evenly
    }

    .Stack--spread-start-whenRegular {
        justify-content: flex-start
    }

    .Stack--spread-center-whenRegular {
        justify-content: center
    }

    .Stack--spread-end-whenRegular {
        justify-content: flex-end
    }

    .Stack--spread-distribute-whenRegular {
        justify-content: space-between
    }

    .Stack--spread-distributeEvenly-whenRegular {
        justify-content: space-evenly
    }

    .Stack--wrap-whenRegular {
        flex-wrap: wrap
    }

    .Stack--nowrap-whenRegular {
        flex-wrap: nowrap
    }

    .Stack--showDividers-whenRegular>.Stack-divider,.Stack--showDividers-whenRegular>.Stack-item>.Stack-divider {
        display: block
    }

    :not(.Stack--dir-inline-whenRegular)>.Stack-divider,:not(.Stack--dir-inline-whenRegular)>.Stack-item>.Stack-divider {
        border-block-end:var(--primer-borderWidth-thin, 1px) solid var(--Stack-divider-color);inline-size: auto;
        block-size: 0
    }

    .Stack--dir-inline-whenRegular>.Stack-divider,.Stack--dir-inline-whenRegular>.Stack-item>.Stack-divider {
        border-inline-end:var(--primer-borderWidth-thin, 1px) solid var(--Stack-divider-color);inline-size: 0;
        block-size: auto
    }

    .Stack-item--expand-whenRegular {
        flex-grow: 1
    }

    .Stack-item--keepSize-whenRegular {
        flex-shrink: 0
    }
}

@media(min-width: 1400px) {
    .Stack--dir-inline-whenWide {
        flex-flow:row
    }

    .Stack--dir-block-whenWide {
        flex-flow: column
    }

    .Stack--gap-none-whenWide {
        --Stack-gap-whenWide: 0
    }

    .Stack--gap-condensed-whenWide {
        --Stack-gap-whenWide: var(--primer-stack-gap-condensed, 8px)
    }

    .Stack--gap-normal-whenWide {
        --Stack-gap-whenWide: var(--primer-stack-gap-normal, 16px)
    }

    .Stack--gap-spacious-whenWide {
        --Stack-gap-whenWide: var(--primer-stack-gap-spacious, 24px)
    }

    .Stack--align-start-whenWide {
        align-items: flex-start
    }

    .Stack--align-center-whenWide {
        align-items: center
    }

    .Stack--align-end-whenWide {
        align-items: flex-end
    }

    .Stack--align-baseline-whenWide {
        align-items: baseline
    }

    .Stack--alignWrap-start-whenWide {
        align-content: flex-start
    }

    .Stack--alignWrap-center-whenWide {
        align-content: center
    }

    .Stack--alignWrap-end-whenWide {
        align-content: flex-end
    }

    .Stack--alignWrap-distribute-whenWide {
        align-content: space-between
    }

    .Stack--alignWrap-distributeEvenly-whenWide {
        align-content: space-evenly
    }

    .Stack--spread-start-whenWide {
        justify-content: flex-start
    }

    .Stack--spread-center-whenWide {
        justify-content: center
    }

    .Stack--spread-end-whenWide {
        justify-content: flex-end
    }

    .Stack--spread-distribute-whenWide {
        justify-content: space-between
    }

    .Stack--spread-distributeEvenly-whenWide {
        justify-content: space-evenly
    }

    .Stack--wrap-whenWide {
        flex-wrap: wrap
    }

    .Stack--nowrap-whenWide {
        flex-wrap: nowrap
    }

    .Stack--showDividers-whenWide>.Stack-divider,.Stack--showDividers-whenWide>.Stack-item>.Stack-divider {
        display: block
    }

    :not(.Stack--dir-inline-whenWide)>.Stack-divider,:not(.Stack--dir-inline-whenWide)>.Stack-item>.Stack-divider {
        border-block-end:var(--primer-borderWidth-thin, 1px) solid var(--Stack-divider-color);inline-size: auto;
        block-size: 0
    }

    .Stack--dir-inline-whenWide>.Stack-divider,.Stack--dir-inline-whenWide>.Stack-item>.Stack-divider {
        border-inline-end:var(--primer-borderWidth-thin, 1px) solid var(--Stack-divider-color);inline-size: 0;
        block-size: auto
    }

    .Stack-item--expand-whenWide {
        flex-grow: 1
    }

    .Stack-item--keepSize-whenWide {
        flex-shrink: 0
    }
}

.filter-list {
    list-style-type: none
}

.filter-list.small .filter-item {
    padding: 6px 12px;
    font-size: 12px
}

.filter-list.pjax-active .filter-item {
    color: var(--color-fg-muted);
    background-color: transparent
}

.filter-list.pjax-active .filter-item.pjax-active {
    color: var(--color-fg-on-emphasis);
    background-color: var(--color-accent-emphasis)
}

.filter-item {
    position: relative;
    display: block;
    padding: 8px 16px;
    margin-bottom: 4px;
    overflow: hidden;
    font-size: 14px;
    color: var(--color-fg-muted);
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 6px
}

.filter-item:hover {
    text-decoration: none;
    background-color: var(--color-canvas-subtle)
}

.filter-item.selected,.filter-item[aria-selected=true],.filter-item[aria-current]:not([aria-current=false]) {
    color: var(--color-fg-on-emphasis);
    background-color: var(--color-accent-emphasis)
}

.filter-item.selected:focus,.filter-item[aria-selected=true]:focus,.filter-item[aria-current]:not([aria-current=false]):focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.filter-item.selected:focus:not(:focus-visible),.filter-item[aria-selected=true]:focus:not(:focus-visible),.filter-item[aria-current]:not([aria-current=false]):focus:not(:focus-visible) {
    outline: solid 1px transparent;
    box-shadow: none
}

.filter-item.selected:focus-visible,.filter-item[aria-selected=true]:focus-visible,.filter-item[aria-current]:not([aria-current=false]):focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.filter-item .count {
    float: right;
    font-weight: var(--base-text-weight-semibold, 600)
}

.filter-item .bar {
    position: absolute;
    top: 2px;
    right: 0;
    bottom: 2px;
    z-index: -1;
    display: inline-block;
    background-color: var(--color-neutral-subtle)
}

.SideNav {
    background-color: var(--color-canvas-subtle)
}

.SideNav-item {
    position: relative;
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: var(--color-fg-default);
    text-align: left;
    background-color: transparent;
    border: 0;
    border-top: 1px solid var(--color-border-muted)
}

.SideNav-item:first-child {
    border-top: 0
}

.SideNav-item:last-child {
    box-shadow: 0 1px 0 var(--color-border-default)
}

.SideNav-item::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 2px;
    pointer-events: none;
    content: ""
}

.SideNav-item:hover {
    text-decoration: none;
    background-color: var(--color-neutral-subtle)
}

.SideNav-item:active {
    background-color: var(--color-canvas-subtle)
}

.SideNav-item[aria-current]:not([aria-current=false]),.SideNav-item[aria-selected=true] {
    background-color: var(--color-sidenav-selected-bg)
}

.SideNav-item[aria-current]:not([aria-current=false])::before,.SideNav-item[aria-selected=true]::before {
    background-color: var(--color-primer-border-active)
}

.SideNav-icon {
    width: 16px;
    margin-right: 8px;
    color: var(--color-fg-muted)
}

.SideNav-subItem {
    position: relative;
    display: block;
    width: 100%;
    padding: 4px 0;
    color: var(--color-accent-fg);
    text-align: left;
    background-color: transparent;
    border: 0
}

.SideNav-subItem:hover {
    color: var(--color-fg-default);
    text-decoration: none
}

.SideNav-subItem[aria-current]:not([aria-current=false]),.SideNav-subItem[aria-selected=true] {
    font-weight: var(--base-text-weight-medium, 500);
    color: var(--color-fg-default)
}

.subnav {
    margin-bottom: 20px
}

.subnav::before {
    display: table;
    content: ""
}

.subnav::after {
    display: table;
    clear: both;
    content: ""
}

.subnav-bordered {
    padding-bottom: 20px;
    border-bottom: 1px solid var(--color-border-muted)
}

.subnav-flush {
    margin-bottom: 0
}

.subnav-item {
    position: relative;
    float: left;
    padding: 5px 16px;
    font-weight: var(--base-text-weight-medium, 500);
    line-height: 20px;
    color: var(--color-fg-default);
    border: 1px solid var(--color-border-default)
}

.subnav-item+.subnav-item {
    margin-left: -1px
}

.subnav-item:hover,.subnav-item:focus {
    text-decoration: none;
    background-color: var(--color-canvas-subtle)
}

.subnav-item.selected,.subnav-item[aria-selected=true],.subnav-item[aria-current]:not([aria-current=false]) {
    z-index: 2;
    color: var(--color-fg-on-emphasis);
    background-color: var(--color-accent-emphasis);
    border-color: var(--color-accent-emphasis)
}

.subnav-item.selected:focus,.subnav-item[aria-selected=true]:focus,.subnav-item[aria-current]:not([aria-current=false]):focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.subnav-item.selected:focus:not(:focus-visible),.subnav-item[aria-selected=true]:focus:not(:focus-visible),.subnav-item[aria-current]:not([aria-current=false]):focus:not(:focus-visible) {
    outline: solid 1px transparent;
    box-shadow: none
}

.subnav-item.selected:focus-visible,.subnav-item[aria-selected=true]:focus-visible,.subnav-item[aria-current]:not([aria-current=false]):focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.subnav-item:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px
}

.subnav-item:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px
}

.subnav-search {
    position: relative;
    margin-left: 12px
}

.subnav-search-input {
    width: 320px;
    padding-left: 32px;
    color: var(--color-fg-muted)
}

.subnav-search-input-wide {
    width: 500px
}

.subnav-search-icon {
    position: absolute;
    top: 9px;
    left: 8px;
    display: block;
    color: var(--color-fg-muted);
    text-align: center;
    pointer-events: none
}

.subnav-search-context .btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0
}

.subnav-search-context .btn:hover,.subnav-search-context .btn:focus,.subnav-search-context .btn:active,.subnav-search-context .btn.selected {
    z-index: 2
}

.subnav-search-context+.subnav-search {
    margin-left: -1px
}

.subnav-search-context+.subnav-search .subnav-search-input {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0
}

.subnav-search-context .select-menu-modal-holder {
    z-index: 30
}

.subnav-search-context .select-menu-modal {
    width: 220px
}

.subnav-search-context .select-menu-item-icon {
    color: inherit
}

.subnav-spacer-right {
    padding-right: 12px
}

.pagination a,.pagination span,.pagination em {
    min-width: 32px;
    padding: 5px 10px;
    font-style: normal;
    line-height: 20px;
    color: var(--color-fg-default);
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 6px;
    transition: border-color .2s cubic-bezier(0.3, 0, 0.5, 1)
}

.pagination a:hover,.pagination a:focus,.pagination span:hover,.pagination span:focus,.pagination em:hover,.pagination em:focus {
    text-decoration: none;
    border-color: var(--color-border-default);
    transition-duration: .1s
}

.pagination a:active,.pagination span:active,.pagination em:active {
    border-color: var(--color-border-muted);
    transition: none
}

.pagination .previous_page,.pagination .next_page {
    color: var(--color-accent-fg)
}

.pagination .current,.pagination .current:hover,.pagination [aria-current]:not([aria-current=false]) {
    color: var(--color-fg-on-emphasis);
    background-color: var(--color-accent-emphasis);
    border-color: transparent
}

.pagination .gap,.pagination .disabled,.pagination [aria-disabled=true],.pagination .gap:hover,.pagination .disabled:hover,.pagination [aria-disabled=true]:hover {
    color: var(--color-primer-fg-disabled);
    cursor: default;
    border-color: transparent
}

@supports(clip-path: polygon(50% 0, 100% 50%, 50% 100%)) {
    .pagination .previous_page::before,.pagination .next_page::after {
        display:inline-block;
        width: 16px;
        height: 16px;
        vertical-align: text-bottom;
        content: "";
        background-color: currentColor
    }

    .pagination .previous_page::before {
        margin-right: 4px;
        clip-path: polygon(9.8px 12.8px, 8.7px 12.8px, 4.5px 8.5px, 4.5px 7.5px, 8.7px 3.2px, 9.8px 4.3px, 6.1px 8px, 9.8px 11.7px, 9.8px 12.8px)
    }

    .pagination .next_page::after {
        margin-left: 4px;
        clip-path: polygon(6.2px 3.2px, 7.3px 3.2px, 11.5px 7.5px, 11.5px 8.5px, 7.3px 12.8px, 6.2px 11.7px, 9.9px 8px, 6.2px 4.3px, 6.2px 3.2px)
    }
}

.pagination>* {
    display: none
}

.pagination>:first-child,.pagination>:last-child,.pagination>.previous_page,.pagination>.next_page {
    display: inline-block
}

@media(min-width: 544px) {
    .pagination>:nth-child(2),.pagination>:nth-last-child(2),.pagination>.current,.pagination>.gap {
        display:inline-block
    }
}

@media(min-width: 768px) {
    .pagination>* {
        display:inline-block
    }
}

.paginate-container {
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: center
}

.paginate-container .pagination {
    display: inline-block
}

.tooltipped {
    position: relative
}

.tooltipped::after {
    position: absolute;
    z-index: 1000000;
    display: none;
    padding: .5em .75em;
    font: normal normal 11px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    -webkit-font-smoothing: subpixel-antialiased;
    color: var(--color-fg-on-emphasis);
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: break-word;
    white-space: pre;
    pointer-events: none;
    content: attr(aria-label);
    background: var(--color-neutral-emphasis-plus);
    border-radius: 6px;
    opacity: 0
}

.tooltipped::before {
    position: absolute;
    z-index: 1000001;
    display: none;
    width: 0;
    height: 0;
    color: var(--color-neutral-emphasis-plus);
    pointer-events: none;
    content: "";
    border: 6px solid transparent;
    opacity: 0
}

@keyframes tooltip-appear {
    from {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

.tooltipped:hover::before,.tooltipped:hover::after,.tooltipped:active::before,.tooltipped:active::after,.tooltipped:focus::before,.tooltipped:focus::after {
    display: inline-block;
    text-decoration: none;
    animation-name: tooltip-appear;
    animation-duration: .1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    animation-delay: .4s
}

.tooltipped-no-delay:hover::before,.tooltipped-no-delay:hover::after,.tooltipped-no-delay:active::before,.tooltipped-no-delay:active::after,.tooltipped-no-delay:focus::before,.tooltipped-no-delay:focus::after {
    animation-delay: 0s
}

.tooltipped-multiline:hover::after,.tooltipped-multiline:active::after,.tooltipped-multiline:focus::after {
    display: table-cell
}

.tooltipped-s::after,.tooltipped-se::after,.tooltipped-sw::after {
    top: 100%;
    right: 50%;
    margin-top: 6px
}

.tooltipped-s::before,.tooltipped-se::before,.tooltipped-sw::before {
    top: auto;
    right: 50%;
    bottom: -7px;
    margin-right: -6px;
    border-bottom-color: var(--color-neutral-emphasis-plus)
}

.tooltipped-se::after {
    right: auto;
    left: 50%;
    margin-left: -16px
}

.tooltipped-sw::after {
    margin-right: -16px
}

.tooltipped-n::after,.tooltipped-ne::after,.tooltipped-nw::after {
    right: 50%;
    bottom: 100%;
    margin-bottom: 6px
}

.tooltipped-n::before,.tooltipped-ne::before,.tooltipped-nw::before {
    top: -7px;
    right: 50%;
    bottom: auto;
    margin-right: -6px;
    border-top-color: var(--color-neutral-emphasis-plus)
}

.tooltipped-ne::after {
    right: auto;
    left: 50%;
    margin-left: -16px
}

.tooltipped-nw::after {
    margin-right: -16px
}

.tooltipped-s::after,.tooltipped-n::after {
    transform: translateX(50%)
}

.tooltipped-w::after {
    right: 100%;
    bottom: 50%;
    margin-right: 6px;
    transform: translateY(50%)
}

.tooltipped-w::before {
    top: 50%;
    bottom: 50%;
    left: -7px;
    margin-top: -6px;
    border-left-color: var(--color-neutral-emphasis-plus)
}

.tooltipped-e::after {
    bottom: 50%;
    left: 100%;
    margin-left: 6px;
    transform: translateY(50%)
}

.tooltipped-e::before {
    top: 50%;
    right: -7px;
    bottom: 50%;
    margin-top: -6px;
    border-right-color: var(--color-neutral-emphasis-plus)
}

.tooltipped-align-right-1::after,.tooltipped-align-right-2::after {
    right: 0;
    margin-right: 0
}

.tooltipped-align-right-1::before {
    right: 10px
}

.tooltipped-align-right-2::before {
    right: 15px
}

.tooltipped-align-left-1::after,.tooltipped-align-left-2::after {
    left: 0;
    margin-left: 0
}

.tooltipped-align-left-1::before {
    left: 5px
}

.tooltipped-align-left-2::before {
    left: 10px
}

.tooltipped-multiline::after {
    width: max-content;
    max-width: 250px;
    word-wrap: break-word;
    white-space: pre-line;
    border-collapse: separate
}

.tooltipped-multiline.tooltipped-s::after,.tooltipped-multiline.tooltipped-n::after {
    right: auto;
    left: 50%;
    transform: translateX(-50%)
}

.tooltipped-multiline.tooltipped-w::after,.tooltipped-multiline.tooltipped-e::after {
    right: 100%
}

.tooltipped-sticky::before,.tooltipped-sticky::after {
    display: inline-block
}

.tooltipped-sticky.tooltipped-multiline::after {
    display: table-cell
}

.anim-fade-in {
    animation-name: fade-in;
    animation-duration: 1s;
    animation-timing-function: ease-in-out
}

.anim-fade-in.fast {
    animation-duration: 300ms
}

@keyframes fade-in {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }
}

.anim-fade-out {
    animation-name: fade-out;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out
}

.anim-fade-out.fast {
    animation-duration: .3s
}

@keyframes fade-out {
    0% {
        opacity: 1
    }

    100% {
        opacity: 0
    }
}

.anim-fade-up {
    opacity: 0;
    animation-name: fade-up;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
    animation-delay: 1s
}

@keyframes fade-up {
    0% {
        opacity: .8;
        transform: translateY(100%)
    }

    100% {
        opacity: 1;
        transform: translateY(0)
    }
}

.anim-fade-down {
    animation-name: fade-down;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in
}

@keyframes fade-down {
    0% {
        opacity: 1;
        transform: translateY(0)
    }

    100% {
        opacity: .5;
        transform: translateY(100%)
    }
}

.anim-grow-x {
    width: 0%;
    animation-name: grow-x;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-delay: .5s
}

@keyframes grow-x {
    to {
        width: 100%
    }
}

.anim-shrink-x {
    animation-name: shrink-x;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-delay: .5s
}

@keyframes shrink-x {
    to {
        width: 0%
    }
}

.anim-scale-in {
    animation-name: scale-in;
    animation-duration: .15s;
    animation-timing-function: cubic-bezier(0.2, 0, 0.13, 1.5)
}

@keyframes scale-in {
    0% {
        opacity: 0;
        transform: scale(0.5)
    }

    100% {
        opacity: 1;
        transform: scale(1)
    }
}

.anim-pulse {
    animation-name: pulse;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite
}

@keyframes pulse {
    0% {
        opacity: .3
    }

    10% {
        opacity: 1
    }

    100% {
        opacity: .3
    }
}

.anim-pulse-in {
    animation-name: pulse-in;
    animation-duration: .5s
}

@keyframes pulse-in {
    0% {
        transform: scale3d(1, 1, 1)
    }

    50% {
        transform: scale3d(1.1, 1.1, 1.1)
    }

    100% {
        transform: scale3d(1, 1, 1)
    }
}

.hover-grow,.anim-hover-grow {
    transition: transform .3s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

.hover-grow:hover,.anim-hover-grow:hover {
    transform: scale(1.025)
}

.anim-rotate {
    animation: rotate-keyframes 1s linear infinite
}

@keyframes rotate-keyframes {
    100% {
        transform: rotate(360deg)
    }
}

.border-x {
    border-right: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important;
    border-left: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
}

.border-y {
    border-top: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important;
    border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
}

.border {
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
}

.border-0 {
    border: 0 !important
}

.border-top {
    border-top: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
}

.border-right {
    border-right: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
}

.border-bottom {
    border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
}

.border-left {
    border-left: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
}

.border-top-0 {
    border-top: 0 !important
}

.border-right-0 {
    border-right: 0 !important
}

.border-bottom-0 {
    border-bottom: 0 !important
}

.border-left-0 {
    border-left: 0 !important
}

.rounded {
    border-radius: var(--primer-borderRadius-medium, 6px) !important
}

.rounded-0 {
    border-radius: 0 !important
}

.rounded-1 {
    border-radius: var(--primer-borderRadius-small, 4px) !important
}

.rounded-2 {
    border-radius: var(--primer-borderRadius-medium, 6px) !important
}

.rounded-3 {
    border-radius: var(--primer-borderRadius-large, 8px) !important
}

.rounded-top-0 {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important
}

.rounded-top-1 {
    border-top-left-radius: var(--primer-borderRadius-small, 4px) !important;
    border-top-right-radius: var(--primer-borderRadius-small, 4px) !important
}

.rounded-top-2 {
    border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important;
    border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important
}

.rounded-top-3 {
    border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important;
    border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important
}

.rounded-right-0 {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important
}

.rounded-right-1 {
    border-top-right-radius: var(--primer-borderRadius-small, 4px) !important;
    border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important
}

.rounded-right-2 {
    border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important;
    border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important
}

.rounded-right-3 {
    border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important;
    border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important
}

.rounded-bottom-0 {
    border-bottom-right-radius: 0 !important;
    border-bottom-left-radius: 0 !important
}

.rounded-bottom-1 {
    border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important;
    border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important
}

.rounded-bottom-2 {
    border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important;
    border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important
}

.rounded-bottom-3 {
    border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important;
    border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important
}

.rounded-left-0 {
    border-bottom-left-radius: 0 !important;
    border-top-left-radius: 0 !important
}

.rounded-left-1 {
    border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important;
    border-top-left-radius: var(--primer-borderRadius-small, 4px) !important
}

.rounded-left-2 {
    border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important;
    border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important
}

.rounded-left-3 {
    border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important;
    border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important
}

@media(min-width: 544px) {
    .border-sm {
        border:var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-sm-0 {
        border: 0 !important
    }

    .border-sm-top {
        border-top: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-sm-right {
        border-right: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-sm-bottom {
        border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-sm-left {
        border-left: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-sm-top-0 {
        border-top: 0 !important
    }

    .border-sm-right-0 {
        border-right: 0 !important
    }

    .border-sm-bottom-0 {
        border-bottom: 0 !important
    }

    .border-sm-left-0 {
        border-left: 0 !important
    }

    .rounded-sm {
        border-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-sm-0 {
        border-radius: 0 !important
    }

    .rounded-sm-1 {
        border-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-sm-2 {
        border-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-sm-3 {
        border-radius: var(--primer-borderRadius-large, 8px) !important
    }

    .rounded-sm-top-0 {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important
    }

    .rounded-sm-top-1 {
        border-top-left-radius: var(--primer-borderRadius-small, 4px) !important;
        border-top-right-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-sm-top-2 {
        border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-sm-top-3 {
        border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-sm-right-0 {
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important
    }

    .rounded-sm-right-1 {
        border-top-right-radius: var(--primer-borderRadius-small, 4px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-sm-right-2 {
        border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-sm-right-3 {
        border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-sm-bottom-0 {
        border-bottom-right-radius: 0 !important;
        border-bottom-left-radius: 0 !important
    }

    .rounded-sm-bottom-1 {
        border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-sm-bottom-2 {
        border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-sm-bottom-3 {
        border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-sm-left-0 {
        border-bottom-left-radius: 0 !important;
        border-top-left-radius: 0 !important
    }

    .rounded-sm-left-1 {
        border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important;
        border-top-left-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-sm-left-2 {
        border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-sm-left-3 {
        border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important
    }
}

@media(min-width: 768px) {
    .border-md {
        border:var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-md-0 {
        border: 0 !important
    }

    .border-md-top {
        border-top: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-md-right {
        border-right: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-md-bottom {
        border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-md-left {
        border-left: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-md-top-0 {
        border-top: 0 !important
    }

    .border-md-right-0 {
        border-right: 0 !important
    }

    .border-md-bottom-0 {
        border-bottom: 0 !important
    }

    .border-md-left-0 {
        border-left: 0 !important
    }

    .rounded-md {
        border-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-md-0 {
        border-radius: 0 !important
    }

    .rounded-md-1 {
        border-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-md-2 {
        border-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-md-3 {
        border-radius: var(--primer-borderRadius-large, 8px) !important
    }

    .rounded-md-top-0 {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important
    }

    .rounded-md-top-1 {
        border-top-left-radius: var(--primer-borderRadius-small, 4px) !important;
        border-top-right-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-md-top-2 {
        border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-md-top-3 {
        border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-md-right-0 {
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important
    }

    .rounded-md-right-1 {
        border-top-right-radius: var(--primer-borderRadius-small, 4px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-md-right-2 {
        border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-md-right-3 {
        border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-md-bottom-0 {
        border-bottom-right-radius: 0 !important;
        border-bottom-left-radius: 0 !important
    }

    .rounded-md-bottom-1 {
        border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-md-bottom-2 {
        border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-md-bottom-3 {
        border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-md-left-0 {
        border-bottom-left-radius: 0 !important;
        border-top-left-radius: 0 !important
    }

    .rounded-md-left-1 {
        border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important;
        border-top-left-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-md-left-2 {
        border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-md-left-3 {
        border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important
    }
}

@media(min-width: 1012px) {
    .border-lg {
        border:var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-lg-0 {
        border: 0 !important
    }

    .border-lg-top {
        border-top: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-lg-right {
        border-right: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-lg-bottom {
        border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-lg-left {
        border-left: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-lg-top-0 {
        border-top: 0 !important
    }

    .border-lg-right-0 {
        border-right: 0 !important
    }

    .border-lg-bottom-0 {
        border-bottom: 0 !important
    }

    .border-lg-left-0 {
        border-left: 0 !important
    }

    .rounded-lg {
        border-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-lg-0 {
        border-radius: 0 !important
    }

    .rounded-lg-1 {
        border-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-lg-2 {
        border-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-lg-3 {
        border-radius: var(--primer-borderRadius-large, 8px) !important
    }

    .rounded-lg-top-0 {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important
    }

    .rounded-lg-top-1 {
        border-top-left-radius: var(--primer-borderRadius-small, 4px) !important;
        border-top-right-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-lg-top-2 {
        border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-lg-top-3 {
        border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-lg-right-0 {
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important
    }

    .rounded-lg-right-1 {
        border-top-right-radius: var(--primer-borderRadius-small, 4px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-lg-right-2 {
        border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-lg-right-3 {
        border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-lg-bottom-0 {
        border-bottom-right-radius: 0 !important;
        border-bottom-left-radius: 0 !important
    }

    .rounded-lg-bottom-1 {
        border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-lg-bottom-2 {
        border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-lg-bottom-3 {
        border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-lg-left-0 {
        border-bottom-left-radius: 0 !important;
        border-top-left-radius: 0 !important
    }

    .rounded-lg-left-1 {
        border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important;
        border-top-left-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-lg-left-2 {
        border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-lg-left-3 {
        border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important
    }
}

@media(min-width: 1280px) {
    .border-xl {
        border:var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-xl-0 {
        border: 0 !important
    }

    .border-xl-top {
        border-top: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-xl-right {
        border-right: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-xl-bottom {
        border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-xl-left {
        border-left: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default) !important
    }

    .border-xl-top-0 {
        border-top: 0 !important
    }

    .border-xl-right-0 {
        border-right: 0 !important
    }

    .border-xl-bottom-0 {
        border-bottom: 0 !important
    }

    .border-xl-left-0 {
        border-left: 0 !important
    }

    .rounded-xl {
        border-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-xl-0 {
        border-radius: 0 !important
    }

    .rounded-xl-1 {
        border-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-xl-2 {
        border-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-xl-3 {
        border-radius: var(--primer-borderRadius-large, 8px) !important
    }

    .rounded-xl-top-0 {
        border-top-left-radius: 0 !important;
        border-top-right-radius: 0 !important
    }

    .rounded-xl-top-1 {
        border-top-left-radius: var(--primer-borderRadius-small, 4px) !important;
        border-top-right-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-xl-top-2 {
        border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-xl-top-3 {
        border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-xl-right-0 {
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important
    }

    .rounded-xl-right-1 {
        border-top-right-radius: var(--primer-borderRadius-small, 4px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-xl-right-2 {
        border-top-right-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-xl-right-3 {
        border-top-right-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-xl-bottom-0 {
        border-bottom-right-radius: 0 !important;
        border-bottom-left-radius: 0 !important
    }

    .rounded-xl-bottom-1 {
        border-bottom-right-radius: var(--primer-borderRadius-small, 4px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-xl-bottom-2 {
        border-bottom-right-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-xl-bottom-3 {
        border-bottom-right-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important
    }

    .rounded-xl-left-0 {
        border-bottom-left-radius: 0 !important;
        border-top-left-radius: 0 !important
    }

    .rounded-xl-left-1 {
        border-bottom-left-radius: var(--primer-borderRadius-small, 4px) !important;
        border-top-left-radius: var(--primer-borderRadius-small, 4px) !important
    }

    .rounded-xl-left-2 {
        border-bottom-left-radius: var(--primer-borderRadius-medium, 6px) !important;
        border-top-left-radius: var(--primer-borderRadius-medium, 6px) !important
    }

    .rounded-xl-left-3 {
        border-bottom-left-radius: var(--primer-borderRadius-medium, 8px) !important;
        border-top-left-radius: var(--primer-borderRadius-medium, 8px) !important
    }
}

.circle {
    border-radius: var(--primer-borderRadius-full, 50%) !important
}

.border-dashed {
    border-style: dashed !important
}

.color-shadow-small {
    box-shadow: var(--color-shadow-small) !important
}

.color-shadow-medium {
    box-shadow: var(--color-shadow-medium) !important
}

.color-shadow-large {
    box-shadow: var(--color-shadow-large) !important
}

.color-shadow-extra-large {
    box-shadow: var(--color-shadow-extra-large) !important
}

.box-shadow-none {
    box-shadow: none !important
}

.color-fg-default {
    color: var(--color-fg-default) !important
}

.color-fg-muted {
    color: var(--color-fg-muted) !important
}

.color-fg-subtle {
    color: var(--color-fg-subtle) !important
}

.color-fg-accent {
    color: var(--color-accent-fg) !important
}

.color-fg-success {
    color: var(--color-success-fg) !important
}

.color-fg-attention {
    color: var(--color-attention-fg) !important
}

.color-fg-severe {
    color: var(--color-severe-fg) !important
}

.color-fg-danger {
    color: var(--color-danger-fg) !important
}

.color-fg-open {
    color: var(--color-open-fg) !important
}

.color-fg-closed {
    color: var(--color-closed-fg) !important
}

.color-fg-done {
    color: var(--color-done-fg) !important
}

.color-fg-sponsors {
    color: var(--color-sponsors-fg) !important
}

.color-fg-on-emphasis {
    color: var(--color-fg-on-emphasis) !important
}

.color-bg-default {
    background-color: var(--color-canvas-default) !important
}

.color-bg-overlay {
    background-color: var(--color-canvas-overlay) !important
}

.color-bg-inset {
    background-color: var(--color-canvas-inset) !important
}

.color-bg-subtle {
    background-color: var(--color-canvas-subtle) !important
}

.color-bg-emphasis {
    background-color: var(--color-neutral-emphasis-plus) !important
}

.color-bg-accent {
    background-color: var(--color-accent-subtle) !important
}

.color-bg-accent-emphasis {
    background-color: var(--color-accent-emphasis) !important
}

.color-bg-success {
    background-color: var(--color-success-subtle) !important
}

.color-bg-success-emphasis {
    background-color: var(--color-success-emphasis) !important
}

.color-bg-attention {
    background-color: var(--color-attention-subtle) !important
}

.color-bg-attention-emphasis {
    background-color: var(--color-attention-emphasis) !important
}

.color-bg-severe {
    background-color: var(--color-severe-subtle) !important
}

.color-bg-severe-emphasis {
    background-color: var(--color-severe-emphasis) !important
}

.color-bg-danger {
    background-color: var(--color-danger-subtle) !important
}

.color-bg-danger-emphasis {
    background-color: var(--color-danger-emphasis) !important
}

.color-bg-open {
    background-color: var(--color-open-subtle) !important
}

.color-bg-open-emphasis {
    background-color: var(--color-open-emphasis) !important
}

.color-bg-closed {
    background-color: var(--color-closed-subtle) !important
}

.color-bg-closed-emphasis {
    background-color: var(--color-closed-emphasis) !important
}

.color-bg-done {
    background-color: var(--color-done-subtle) !important
}

.color-bg-done-emphasis {
    background-color: var(--color-done-emphasis) !important
}

.color-bg-sponsors {
    background-color: var(--color-sponsors-subtle) !important
}

.color-bg-sponsors-emphasis {
    background-color: var(--color-sponsors-emphasis) !important
}

.color-bg-transparent {
    background-color: transparent !important
}

.color-border-default {
    border-color: var(--color-border-default) !important
}

.color-border-muted {
    border-color: var(--color-border-muted) !important
}

.color-border-subtle {
    border-color: var(--color-border-subtle) !important
}

.color-border-accent {
    border-color: var(--color-accent-muted) !important
}

.color-border-accent-emphasis {
    border-color: var(--color-accent-emphasis) !important
}

.color-border-success {
    border-color: var(--color-success-muted) !important
}

.color-border-success-emphasis {
    border-color: var(--color-success-emphasis) !important
}

.color-border-attention {
    border-color: var(--color-attention-muted) !important
}

.color-border-attention-emphasis {
    border-color: var(--color-attention-emphasis) !important
}

.color-border-severe {
    border-color: var(--color-severe-muted) !important
}

.color-border-severe-emphasis {
    border-color: var(--color-severe-emphasis) !important
}

.color-border-danger {
    border-color: var(--color-danger-muted) !important
}

.color-border-danger-emphasis {
    border-color: var(--color-danger-emphasis) !important
}

.color-border-open {
    border-color: var(--color-open-muted) !important
}

.color-border-open-emphasis {
    border-color: var(--color-open-emphasis) !important
}

.color-border-closed {
    border-color: var(--color-closed-muted) !important
}

.color-border-closed-emphasis {
    border-color: var(--color-closed-emphasis) !important
}

.color-border-done {
    border-color: var(--color-done-muted) !important
}

.color-border-done-emphasis {
    border-color: var(--color-done-emphasis) !important
}

.color-border-sponsors {
    border-color: var(--color-sponsors-muted) !important
}

.color-border-sponsors-emphasis {
    border-color: var(--color-sponsors-emphasis) !important
}

.color-fg-inherit {
    color: inherit !important
}

.details-overlay[open]>summary::before {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 80;
    display: block;
    cursor: default;
    content: " ";
    background: transparent
}

.details-overlay-dark[open]>summary::before {
    z-index: 111;
    background: var(--color-primer-canvas-backdrop)
}

.details-reset>summary {
    list-style: none;
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color
}

.details-reset>summary:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

.details-reset>summary:focus:not(:focus-visible) {
    outline: solid 1px transparent
}

.details-reset>summary:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

.details-reset>summary.btn-primary:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.details-reset>summary.btn-primary:focus:not(:focus-visible) {
    outline: solid 1px transparent;
    box-shadow: none
}

.details-reset>summary.btn-primary:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.details-reset>summary::before {
    display: none
}

.details-reset>summary::-webkit-details-marker {
    display: none
}

.details-overlay>summary {
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color
}

.details-overlay>summary:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

.details-overlay>summary:focus:not(:focus-visible) {
    outline: solid 1px transparent
}

.details-overlay>summary:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: none
}

.details-overlay>summary.btn-primary:focus {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.details-overlay>summary.btn-primary:focus:not(:focus-visible) {
    outline: solid 1px transparent;
    box-shadow: none
}

.details-overlay>summary.btn-primary:focus-visible {
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px;
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis)
}

.flex-row {
    flex-direction: row !important
}

.flex-row-reverse {
    flex-direction: row-reverse !important
}

.flex-column {
    flex-direction: column !important
}

.flex-column-reverse {
    flex-direction: column-reverse !important
}

.flex-wrap {
    flex-wrap: wrap !important
}

.flex-nowrap {
    flex-wrap: nowrap !important
}

.flex-wrap-reverse {
    flex-wrap: wrap-reverse !important
}

.flex-justify-start {
    justify-content: flex-start !important
}

.flex-justify-end {
    justify-content: flex-end !important
}

.flex-justify-center {
    justify-content: center !important
}

.flex-justify-between {
    justify-content: space-between !important
}

.flex-justify-around {
    justify-content: space-around !important
}

.flex-items-start {
    align-items: flex-start !important
}

.flex-items-end {
    align-items: flex-end !important
}

.flex-items-center {
    align-items: center !important
}

.flex-items-baseline {
    align-items: baseline !important
}

.flex-items-stretch {
    align-items: stretch !important
}

.flex-content-start {
    align-content: flex-start !important
}

.flex-content-end {
    align-content: flex-end !important
}

.flex-content-center {
    align-content: center !important
}

.flex-content-between {
    align-content: space-between !important
}

.flex-content-around {
    align-content: space-around !important
}

.flex-content-stretch {
    align-content: stretch !important
}

.flex-1 {
    flex: 1 !important
}

.flex-auto {
    flex: auto !important
}

.flex-grow-0 {
    flex-grow: 0 !important
}

.flex-shrink-0 {
    flex-shrink: 0 !important
}

.flex-self-auto {
    align-self: auto !important
}

.flex-self-start {
    align-self: flex-start !important
}

.flex-self-end {
    align-self: flex-end !important
}

.flex-self-center {
    align-self: center !important
}

.flex-self-baseline {
    align-self: baseline !important
}

.flex-self-stretch {
    align-self: stretch !important
}

.flex-order-1 {
    order: 1 !important
}

.flex-order-2 {
    order: 2 !important
}

.flex-order-none {
    order: inherit !important
}

@media(min-width: 544px) {
    .flex-sm-row {
        flex-direction:row !important
    }

    .flex-sm-row-reverse {
        flex-direction: row-reverse !important
    }

    .flex-sm-column {
        flex-direction: column !important
    }

    .flex-sm-column-reverse {
        flex-direction: column-reverse !important
    }

    .flex-sm-wrap {
        flex-wrap: wrap !important
    }

    .flex-sm-nowrap {
        flex-wrap: nowrap !important
    }

    .flex-sm-wrap-reverse {
        flex-wrap: wrap-reverse !important
    }

    .flex-sm-justify-start {
        justify-content: flex-start !important
    }

    .flex-sm-justify-end {
        justify-content: flex-end !important
    }

    .flex-sm-justify-center {
        justify-content: center !important
    }

    .flex-sm-justify-between {
        justify-content: space-between !important
    }

    .flex-sm-justify-around {
        justify-content: space-around !important
    }

    .flex-sm-items-start {
        align-items: flex-start !important
    }

    .flex-sm-items-end {
        align-items: flex-end !important
    }

    .flex-sm-items-center {
        align-items: center !important
    }

    .flex-sm-items-baseline {
        align-items: baseline !important
    }

    .flex-sm-items-stretch {
        align-items: stretch !important
    }

    .flex-sm-content-start {
        align-content: flex-start !important
    }

    .flex-sm-content-end {
        align-content: flex-end !important
    }

    .flex-sm-content-center {
        align-content: center !important
    }

    .flex-sm-content-between {
        align-content: space-between !important
    }

    .flex-sm-content-around {
        align-content: space-around !important
    }

    .flex-sm-content-stretch {
        align-content: stretch !important
    }

    .flex-sm-1 {
        flex: 1 !important
    }

    .flex-sm-auto {
        flex: auto !important
    }

    .flex-sm-grow-0 {
        flex-grow: 0 !important
    }

    .flex-sm-shrink-0 {
        flex-shrink: 0 !important
    }

    .flex-sm-self-auto {
        align-self: auto !important
    }

    .flex-sm-self-start {
        align-self: flex-start !important
    }

    .flex-sm-self-end {
        align-self: flex-end !important
    }

    .flex-sm-self-center {
        align-self: center !important
    }

    .flex-sm-self-baseline {
        align-self: baseline !important
    }

    .flex-sm-self-stretch {
        align-self: stretch !important
    }

    .flex-sm-order-1 {
        order: 1 !important
    }

    .flex-sm-order-2 {
        order: 2 !important
    }

    .flex-sm-order-none {
        order: inherit !important
    }
}

@media(min-width: 768px) {
    .flex-md-row {
        flex-direction:row !important
    }

    .flex-md-row-reverse {
        flex-direction: row-reverse !important
    }

    .flex-md-column {
        flex-direction: column !important
    }

    .flex-md-column-reverse {
        flex-direction: column-reverse !important
    }

    .flex-md-wrap {
        flex-wrap: wrap !important
    }

    .flex-md-nowrap {
        flex-wrap: nowrap !important
    }

    .flex-md-wrap-reverse {
        flex-wrap: wrap-reverse !important
    }

    .flex-md-justify-start {
        justify-content: flex-start !important
    }

    .flex-md-justify-end {
        justify-content: flex-end !important
    }

    .flex-md-justify-center {
        justify-content: center !important
    }

    .flex-md-justify-between {
        justify-content: space-between !important
    }

    .flex-md-justify-around {
        justify-content: space-around !important
    }

    .flex-md-items-start {
        align-items: flex-start !important
    }

    .flex-md-items-end {
        align-items: flex-end !important
    }

    .flex-md-items-center {
        align-items: center !important
    }

    .flex-md-items-baseline {
        align-items: baseline !important
    }

    .flex-md-items-stretch {
        align-items: stretch !important
    }

    .flex-md-content-start {
        align-content: flex-start !important
    }

    .flex-md-content-end {
        align-content: flex-end !important
    }

    .flex-md-content-center {
        align-content: center !important
    }

    .flex-md-content-between {
        align-content: space-between !important
    }

    .flex-md-content-around {
        align-content: space-around !important
    }

    .flex-md-content-stretch {
        align-content: stretch !important
    }

    .flex-md-1 {
        flex: 1 !important
    }

    .flex-md-auto {
        flex: auto !important
    }

    .flex-md-grow-0 {
        flex-grow: 0 !important
    }

    .flex-md-shrink-0 {
        flex-shrink: 0 !important
    }

    .flex-md-self-auto {
        align-self: auto !important
    }

    .flex-md-self-start {
        align-self: flex-start !important
    }

    .flex-md-self-end {
        align-self: flex-end !important
    }

    .flex-md-self-center {
        align-self: center !important
    }

    .flex-md-self-baseline {
        align-self: baseline !important
    }

    .flex-md-self-stretch {
        align-self: stretch !important
    }

    .flex-md-order-1 {
        order: 1 !important
    }

    .flex-md-order-2 {
        order: 2 !important
    }

    .flex-md-order-none {
        order: inherit !important
    }
}

@media(min-width: 1012px) {
    .flex-lg-row {
        flex-direction:row !important
    }

    .flex-lg-row-reverse {
        flex-direction: row-reverse !important
    }

    .flex-lg-column {
        flex-direction: column !important
    }

    .flex-lg-column-reverse {
        flex-direction: column-reverse !important
    }

    .flex-lg-wrap {
        flex-wrap: wrap !important
    }

    .flex-lg-nowrap {
        flex-wrap: nowrap !important
    }

    .flex-lg-wrap-reverse {
        flex-wrap: wrap-reverse !important
    }

    .flex-lg-justify-start {
        justify-content: flex-start !important
    }

    .flex-lg-justify-end {
        justify-content: flex-end !important
    }

    .flex-lg-justify-center {
        justify-content: center !important
    }

    .flex-lg-justify-between {
        justify-content: space-between !important
    }

    .flex-lg-justify-around {
        justify-content: space-around !important
    }

    .flex-lg-items-start {
        align-items: flex-start !important
    }

    .flex-lg-items-end {
        align-items: flex-end !important
    }

    .flex-lg-items-center {
        align-items: center !important
    }

    .flex-lg-items-baseline {
        align-items: baseline !important
    }

    .flex-lg-items-stretch {
        align-items: stretch !important
    }

    .flex-lg-content-start {
        align-content: flex-start !important
    }

    .flex-lg-content-end {
        align-content: flex-end !important
    }

    .flex-lg-content-center {
        align-content: center !important
    }

    .flex-lg-content-between {
        align-content: space-between !important
    }

    .flex-lg-content-around {
        align-content: space-around !important
    }

    .flex-lg-content-stretch {
        align-content: stretch !important
    }

    .flex-lg-1 {
        flex: 1 !important
    }

    .flex-lg-auto {
        flex: auto !important
    }

    .flex-lg-grow-0 {
        flex-grow: 0 !important
    }

    .flex-lg-shrink-0 {
        flex-shrink: 0 !important
    }

    .flex-lg-self-auto {
        align-self: auto !important
    }

    .flex-lg-self-start {
        align-self: flex-start !important
    }

    .flex-lg-self-end {
        align-self: flex-end !important
    }

    .flex-lg-self-center {
        align-self: center !important
    }

    .flex-lg-self-baseline {
        align-self: baseline !important
    }

    .flex-lg-self-stretch {
        align-self: stretch !important
    }

    .flex-lg-order-1 {
        order: 1 !important
    }

    .flex-lg-order-2 {
        order: 2 !important
    }

    .flex-lg-order-none {
        order: inherit !important
    }
}

@media(min-width: 1280px) {
    .flex-xl-row {
        flex-direction:row !important
    }

    .flex-xl-row-reverse {
        flex-direction: row-reverse !important
    }

    .flex-xl-column {
        flex-direction: column !important
    }

    .flex-xl-column-reverse {
        flex-direction: column-reverse !important
    }

    .flex-xl-wrap {
        flex-wrap: wrap !important
    }

    .flex-xl-nowrap {
        flex-wrap: nowrap !important
    }

    .flex-xl-wrap-reverse {
        flex-wrap: wrap-reverse !important
    }

    .flex-xl-justify-start {
        justify-content: flex-start !important
    }

    .flex-xl-justify-end {
        justify-content: flex-end !important
    }

    .flex-xl-justify-center {
        justify-content: center !important
    }

    .flex-xl-justify-between {
        justify-content: space-between !important
    }

    .flex-xl-justify-around {
        justify-content: space-around !important
    }

    .flex-xl-items-start {
        align-items: flex-start !important
    }

    .flex-xl-items-end {
        align-items: flex-end !important
    }

    .flex-xl-items-center {
        align-items: center !important
    }

    .flex-xl-items-baseline {
        align-items: baseline !important
    }

    .flex-xl-items-stretch {
        align-items: stretch !important
    }

    .flex-xl-content-start {
        align-content: flex-start !important
    }

    .flex-xl-content-end {
        align-content: flex-end !important
    }

    .flex-xl-content-center {
        align-content: center !important
    }

    .flex-xl-content-between {
        align-content: space-between !important
    }

    .flex-xl-content-around {
        align-content: space-around !important
    }

    .flex-xl-content-stretch {
        align-content: stretch !important
    }

    .flex-xl-1 {
        flex: 1 !important
    }

    .flex-xl-auto {
        flex: auto !important
    }

    .flex-xl-grow-0 {
        flex-grow: 0 !important
    }

    .flex-xl-shrink-0 {
        flex-shrink: 0 !important
    }

    .flex-xl-self-auto {
        align-self: auto !important
    }

    .flex-xl-self-start {
        align-self: flex-start !important
    }

    .flex-xl-self-end {
        align-self: flex-end !important
    }

    .flex-xl-self-center {
        align-self: center !important
    }

    .flex-xl-self-baseline {
        align-self: baseline !important
    }

    .flex-xl-self-stretch {
        align-self: stretch !important
    }

    .flex-xl-order-1 {
        order: 1 !important
    }

    .flex-xl-order-2 {
        order: 2 !important
    }

    .flex-xl-order-none {
        order: inherit !important
    }
}

.position-static {
    position: static !important
}

.position-relative {
    position: relative !important
}

.position-absolute {
    position: absolute !important
}

.position-fixed {
    position: fixed !important
}

.position-sticky {
    position: sticky !important
}

@media(min-width: 544px) {
    .position-sm-static {
        position:static !important
    }

    .position-sm-relative {
        position: relative !important
    }

    .position-sm-absolute {
        position: absolute !important
    }

    .position-sm-fixed {
        position: fixed !important
    }

    .position-sm-sticky {
        position: sticky !important
    }
}

@media(min-width: 768px) {
    .position-md-static {
        position:static !important
    }

    .position-md-relative {
        position: relative !important
    }

    .position-md-absolute {
        position: absolute !important
    }

    .position-md-fixed {
        position: fixed !important
    }

    .position-md-sticky {
        position: sticky !important
    }
}

@media(min-width: 1012px) {
    .position-lg-static {
        position:static !important
    }

    .position-lg-relative {
        position: relative !important
    }

    .position-lg-absolute {
        position: absolute !important
    }

    .position-lg-fixed {
        position: fixed !important
    }

    .position-lg-sticky {
        position: sticky !important
    }
}

@media(min-width: 1280px) {
    .position-xl-static {
        position:static !important
    }

    .position-xl-relative {
        position: relative !important
    }

    .position-xl-absolute {
        position: absolute !important
    }

    .position-xl-fixed {
        position: fixed !important
    }

    .position-xl-sticky {
        position: sticky !important
    }
}

.top-0 {
    top: 0 !important
}

.right-0 {
    right: 0 !important
}

.bottom-0 {
    bottom: 0 !important
}

.left-0 {
    left: 0 !important
}

.top-auto {
    top: auto !important
}

.right-auto {
    right: auto !important
}

.bottom-auto {
    bottom: auto !important
}

.left-auto {
    left: auto !important
}

@media(min-width: 544px) {
    .top-sm-0 {
        top:0 !important
    }

    .right-sm-0 {
        right: 0 !important
    }

    .bottom-sm-0 {
        bottom: 0 !important
    }

    .left-sm-0 {
        left: 0 !important
    }

    .top-sm-auto {
        top: auto !important
    }

    .right-sm-auto {
        right: auto !important
    }

    .bottom-sm-auto {
        bottom: auto !important
    }

    .left-sm-auto {
        left: auto !important
    }
}

@media(min-width: 768px) {
    .top-md-0 {
        top:0 !important
    }

    .right-md-0 {
        right: 0 !important
    }

    .bottom-md-0 {
        bottom: 0 !important
    }

    .left-md-0 {
        left: 0 !important
    }

    .top-md-auto {
        top: auto !important
    }

    .right-md-auto {
        right: auto !important
    }

    .bottom-md-auto {
        bottom: auto !important
    }

    .left-md-auto {
        left: auto !important
    }
}

@media(min-width: 1012px) {
    .top-lg-0 {
        top:0 !important
    }

    .right-lg-0 {
        right: 0 !important
    }

    .bottom-lg-0 {
        bottom: 0 !important
    }

    .left-lg-0 {
        left: 0 !important
    }

    .top-lg-auto {
        top: auto !important
    }

    .right-lg-auto {
        right: auto !important
    }

    .bottom-lg-auto {
        bottom: auto !important
    }

    .left-lg-auto {
        left: auto !important
    }
}

@media(min-width: 1280px) {
    .top-xl-0 {
        top:0 !important
    }

    .right-xl-0 {
        right: 0 !important
    }

    .bottom-xl-0 {
        bottom: 0 !important
    }

    .left-xl-0 {
        left: 0 !important
    }

    .top-xl-auto {
        top: auto !important
    }

    .right-xl-auto {
        right: auto !important
    }

    .bottom-xl-auto {
        bottom: auto !important
    }

    .left-xl-auto {
        left: auto !important
    }
}

.v-align-middle {
    vertical-align: middle !important
}

.v-align-top {
    vertical-align: top !important
}

.v-align-bottom {
    vertical-align: bottom !important
}

.v-align-text-top {
    vertical-align: text-top !important
}

.v-align-text-bottom {
    vertical-align: text-bottom !important
}

.v-align-baseline {
    vertical-align: baseline !important
}

.overflow-visible {
    overflow: visible !important
}

.overflow-x-visible {
    overflow-x: visible !important
}

.overflow-y-visible {
    overflow-y: visible !important
}

.overflow-hidden {
    overflow: hidden !important
}

.overflow-x-hidden {
    overflow-x: hidden !important
}

.overflow-y-hidden {
    overflow-y: hidden !important
}

.overflow-auto {
    overflow: auto !important
}

.overflow-x-auto {
    overflow-x: auto !important
}

.overflow-y-auto {
    overflow-y: auto !important
}

.overflow-scroll {
    overflow: scroll !important
}

.overflow-x-scroll {
    overflow-x: scroll !important
}

.overflow-y-scroll {
    overflow-y: scroll !important
}

@media(min-width: 544px) {
    .overflow-sm-visible {
        overflow:visible !important
    }

    .overflow-sm-x-visible {
        overflow-x: visible !important
    }

    .overflow-sm-y-visible {
        overflow-y: visible !important
    }

    .overflow-sm-hidden {
        overflow: hidden !important
    }

    .overflow-sm-x-hidden {
        overflow-x: hidden !important
    }

    .overflow-sm-y-hidden {
        overflow-y: hidden !important
    }

    .overflow-sm-auto {
        overflow: auto !important
    }

    .overflow-sm-x-auto {
        overflow-x: auto !important
    }

    .overflow-sm-y-auto {
        overflow-y: auto !important
    }

    .overflow-sm-scroll {
        overflow: scroll !important
    }

    .overflow-sm-x-scroll {
        overflow-x: scroll !important
    }

    .overflow-sm-y-scroll {
        overflow-y: scroll !important
    }
}

@media(min-width: 768px) {
    .overflow-md-visible {
        overflow:visible !important
    }

    .overflow-md-x-visible {
        overflow-x: visible !important
    }

    .overflow-md-y-visible {
        overflow-y: visible !important
    }

    .overflow-md-hidden {
        overflow: hidden !important
    }

    .overflow-md-x-hidden {
        overflow-x: hidden !important
    }

    .overflow-md-y-hidden {
        overflow-y: hidden !important
    }

    .overflow-md-auto {
        overflow: auto !important
    }

    .overflow-md-x-auto {
        overflow-x: auto !important
    }

    .overflow-md-y-auto {
        overflow-y: auto !important
    }

    .overflow-md-scroll {
        overflow: scroll !important
    }

    .overflow-md-x-scroll {
        overflow-x: scroll !important
    }

    .overflow-md-y-scroll {
        overflow-y: scroll !important
    }
}

@media(min-width: 1012px) {
    .overflow-lg-visible {
        overflow:visible !important
    }

    .overflow-lg-x-visible {
        overflow-x: visible !important
    }

    .overflow-lg-y-visible {
        overflow-y: visible !important
    }

    .overflow-lg-hidden {
        overflow: hidden !important
    }

    .overflow-lg-x-hidden {
        overflow-x: hidden !important
    }

    .overflow-lg-y-hidden {
        overflow-y: hidden !important
    }

    .overflow-lg-auto {
        overflow: auto !important
    }

    .overflow-lg-x-auto {
        overflow-x: auto !important
    }

    .overflow-lg-y-auto {
        overflow-y: auto !important
    }

    .overflow-lg-scroll {
        overflow: scroll !important
    }

    .overflow-lg-x-scroll {
        overflow-x: scroll !important
    }

    .overflow-lg-y-scroll {
        overflow-y: scroll !important
    }
}

@media(min-width: 1280px) {
    .overflow-xl-visible {
        overflow:visible !important
    }

    .overflow-xl-x-visible {
        overflow-x: visible !important
    }

    .overflow-xl-y-visible {
        overflow-y: visible !important
    }

    .overflow-xl-hidden {
        overflow: hidden !important
    }

    .overflow-xl-x-hidden {
        overflow-x: hidden !important
    }

    .overflow-xl-y-hidden {
        overflow-y: hidden !important
    }

    .overflow-xl-auto {
        overflow: auto !important
    }

    .overflow-xl-x-auto {
        overflow-x: auto !important
    }

    .overflow-xl-y-auto {
        overflow-y: auto !important
    }

    .overflow-xl-scroll {
        overflow: scroll !important
    }

    .overflow-xl-x-scroll {
        overflow-x: scroll !important
    }

    .overflow-xl-y-scroll {
        overflow-y: scroll !important
    }
}

.clearfix::before {
    display: table;
    content: ""
}

.clearfix::after {
    display: table;
    clear: both;
    content: ""
}

.float-left {
    float: left !important
}

.float-right {
    float: right !important
}

.float-none {
    float: none !important
}

@media(min-width: 544px) {
    .float-sm-left {
        float:left !important
    }

    .float-sm-right {
        float: right !important
    }

    .float-sm-none {
        float: none !important
    }
}

@media(min-width: 768px) {
    .float-md-left {
        float:left !important
    }

    .float-md-right {
        float: right !important
    }

    .float-md-none {
        float: none !important
    }
}

@media(min-width: 1012px) {
    .float-lg-left {
        float:left !important
    }

    .float-lg-right {
        float: right !important
    }

    .float-lg-none {
        float: none !important
    }
}

@media(min-width: 1280px) {
    .float-xl-left {
        float:left !important
    }

    .float-xl-right {
        float: right !important
    }

    .float-xl-none {
        float: none !important
    }
}

.width-fit {
    max-width: 100% !important
}

.width-full {
    width: 100% !important
}

.height-fit {
    max-height: 100% !important
}

.height-full {
    height: 100% !important
}

.min-width-0 {
    min-width: 0 !important
}

.width-auto {
    width: auto !important
}

.direction-rtl {
    direction: rtl !important
}

.direction-ltr {
    direction: ltr !important
}

@media(min-width: 544px) {
    .width-sm-auto {
        width:auto !important
    }

    .direction-sm-rtl {
        direction: rtl !important
    }

    .direction-sm-ltr {
        direction: ltr !important
    }
}

@media(min-width: 768px) {
    .width-md-auto {
        width:auto !important
    }

    .direction-md-rtl {
        direction: rtl !important
    }

    .direction-md-ltr {
        direction: ltr !important
    }
}

@media(min-width: 1012px) {
    .width-lg-auto {
        width:auto !important
    }

    .direction-lg-rtl {
        direction: rtl !important
    }

    .direction-lg-ltr {
        direction: ltr !important
    }
}

@media(min-width: 1280px) {
    .width-xl-auto {
        width:auto !important
    }

    .direction-xl-rtl {
        direction: rtl !important
    }

    .direction-xl-ltr {
        direction: ltr !important
    }
}

.m-0 {
    margin: 0 !important
}

.mt-0 {
    margin-top: 0 !important
}

.mb-0 {
    margin-bottom: 0 !important
}

.mr-0 {
    margin-right: 0 !important
}

.ml-0 {
    margin-left: 0 !important
}

.mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important
}

.my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important
}

.m-1 {
    margin: var(--base-size-4, 4px) !important
}

.mt-1 {
    margin-top: var(--base-size-4, 4px) !important
}

.mb-1 {
    margin-bottom: var(--base-size-4, 4px) !important
}

.mr-1 {
    margin-right: var(--base-size-4, 4px) !important
}

.ml-1 {
    margin-left: var(--base-size-4, 4px) !important
}

.mt-n1 {
    margin-top: calc(-1*var(--base-size-4, 4px)) !important
}

.mb-n1 {
    margin-bottom: calc(-1*var(--base-size-4, 4px)) !important
}

.mr-n1 {
    margin-right: calc(-1*var(--base-size-4, 4px)) !important
}

.ml-n1 {
    margin-left: calc(-1*var(--base-size-4, 4px)) !important
}

.mx-1 {
    margin-right: var(--base-size-4, 4px) !important;
    margin-left: var(--base-size-4, 4px) !important
}

.my-1 {
    margin-top: var(--base-size-4, 4px) !important;
    margin-bottom: var(--base-size-4, 4px) !important
}

.m-2 {
    margin: var(--base-size-8, 8px) !important
}

.mt-2 {
    margin-top: var(--base-size-8, 8px) !important
}

.mb-2 {
    margin-bottom: var(--base-size-8, 8px) !important
}

.mr-2 {
    margin-right: var(--base-size-8, 8px) !important
}

.ml-2 {
    margin-left: var(--base-size-8, 8px) !important
}

.mt-n2 {
    margin-top: calc(-1*var(--base-size-8, 8px)) !important
}

.mb-n2 {
    margin-bottom: calc(-1*var(--base-size-8, 8px)) !important
}

.mr-n2 {
    margin-right: calc(-1*var(--base-size-8, 8px)) !important
}

.ml-n2 {
    margin-left: calc(-1*var(--base-size-8, 8px)) !important
}

.mx-2 {
    margin-right: var(--base-size-8, 8px) !important;
    margin-left: var(--base-size-8, 8px) !important
}

.my-2 {
    margin-top: var(--base-size-8, 8px) !important;
    margin-bottom: var(--base-size-8, 8px) !important
}

.m-3 {
    margin: var(--base-size-16, 16px) !important
}

.mt-3 {
    margin-top: var(--base-size-16, 16px) !important
}

.mb-3 {
    margin-bottom: var(--base-size-16, 16px) !important
}

.mr-3 {
    margin-right: var(--base-size-16, 16px) !important
}

.ml-3 {
    margin-left: var(--base-size-16, 16px) !important
}

.mt-n3 {
    margin-top: calc(-1*var(--base-size-16, 16px)) !important
}

.mb-n3 {
    margin-bottom: calc(-1*var(--base-size-16, 16px)) !important
}

.mr-n3 {
    margin-right: calc(-1*var(--base-size-16, 16px)) !important
}

.ml-n3 {
    margin-left: calc(-1*var(--base-size-16, 16px)) !important
}

.mx-3 {
    margin-right: var(--base-size-16, 16px) !important;
    margin-left: var(--base-size-16, 16px) !important
}

.my-3 {
    margin-top: var(--base-size-16, 16px) !important;
    margin-bottom: var(--base-size-16, 16px) !important
}

.m-4 {
    margin: var(--base-size-24, 24px) !important
}

.mt-4 {
    margin-top: var(--base-size-24, 24px) !important
}

.mb-4 {
    margin-bottom: var(--base-size-24, 24px) !important
}

.mr-4 {
    margin-right: var(--base-size-24, 24px) !important
}

.ml-4 {
    margin-left: var(--base-size-24, 24px) !important
}

.mt-n4 {
    margin-top: calc(-1*var(--base-size-24, 24px)) !important
}

.mb-n4 {
    margin-bottom: calc(-1*var(--base-size-24, 24px)) !important
}

.mr-n4 {
    margin-right: calc(-1*var(--base-size-24, 24px)) !important
}

.ml-n4 {
    margin-left: calc(-1*var(--base-size-24, 24px)) !important
}

.mx-4 {
    margin-right: var(--base-size-24, 24px) !important;
    margin-left: var(--base-size-24, 24px) !important
}

.my-4 {
    margin-top: var(--base-size-24, 24px) !important;
    margin-bottom: var(--base-size-24, 24px) !important
}

.m-5 {
    margin: var(--base-size-32, 32px) !important
}

.mt-5 {
    margin-top: var(--base-size-32, 32px) !important
}

.mb-5 {
    margin-bottom: var(--base-size-32, 32px) !important
}

.mr-5 {
    margin-right: var(--base-size-32, 32px) !important
}

.ml-5 {
    margin-left: var(--base-size-32, 32px) !important
}

.mt-n5 {
    margin-top: calc(-1*var(--base-size-32, 32px)) !important
}

.mb-n5 {
    margin-bottom: calc(-1*var(--base-size-32, 32px)) !important
}

.mr-n5 {
    margin-right: calc(-1*var(--base-size-32, 32px)) !important
}

.ml-n5 {
    margin-left: calc(-1*var(--base-size-32, 32px)) !important
}

.mx-5 {
    margin-right: var(--base-size-32, 32px) !important;
    margin-left: var(--base-size-32, 32px) !important
}

.my-5 {
    margin-top: var(--base-size-32, 32px) !important;
    margin-bottom: var(--base-size-32, 32px) !important
}

.m-6 {
    margin: var(--base-size-40, 40px) !important
}

.mt-6 {
    margin-top: var(--base-size-40, 40px) !important
}

.mb-6 {
    margin-bottom: var(--base-size-40, 40px) !important
}

.mr-6 {
    margin-right: var(--base-size-40, 40px) !important
}

.ml-6 {
    margin-left: var(--base-size-40, 40px) !important
}

.mt-n6 {
    margin-top: calc(-1*var(--base-size-40, 40px)) !important
}

.mb-n6 {
    margin-bottom: calc(-1*var(--base-size-40, 40px)) !important
}

.mr-n6 {
    margin-right: calc(-1*var(--base-size-40, 40px)) !important
}

.ml-n6 {
    margin-left: calc(-1*var(--base-size-40, 40px)) !important
}

.mx-6 {
    margin-right: var(--base-size-40, 40px) !important;
    margin-left: var(--base-size-40, 40px) !important
}

.my-6 {
    margin-top: var(--base-size-40, 40px) !important;
    margin-bottom: var(--base-size-40, 40px) !important
}

.mt-7 {
    margin-top: var(--base-size-48, 48px) !important
}

.mb-7 {
    margin-bottom: var(--base-size-48, 48px) !important
}

.mt-n7 {
    margin-top: calc(-1*var(--base-size-48, 48px)) !important
}

.mb-n7 {
    margin-bottom: calc(-1*var(--base-size-48, 48px)) !important
}

.my-7 {
    margin-top: var(--base-size-48, 48px) !important;
    margin-bottom: var(--base-size-48, 48px) !important
}

.mt-8 {
    margin-top: var(--base-size-64, 64px) !important
}

.mb-8 {
    margin-bottom: var(--base-size-64, 64px) !important
}

.mt-n8 {
    margin-top: calc(-1*var(--base-size-64, 64px)) !important
}

.mb-n8 {
    margin-bottom: calc(-1*var(--base-size-64, 64px)) !important
}

.my-8 {
    margin-top: var(--base-size-64, 64px) !important;
    margin-bottom: var(--base-size-64, 64px) !important
}

.mt-9 {
    margin-top: var(--base-size-80, 80px) !important
}

.mb-9 {
    margin-bottom: var(--base-size-80, 80px) !important
}

.mt-n9 {
    margin-top: calc(-1*var(--base-size-80, 80px)) !important
}

.mb-n9 {
    margin-bottom: calc(-1*var(--base-size-80, 80px)) !important
}

.my-9 {
    margin-top: var(--base-size-80, 80px) !important;
    margin-bottom: var(--base-size-80, 80px) !important
}

.mt-10 {
    margin-top: var(--base-size-96, 96px) !important
}

.mb-10 {
    margin-bottom: var(--base-size-96, 96px) !important
}

.mt-n10 {
    margin-top: calc(-1*var(--base-size-96, 96px)) !important
}

.mb-n10 {
    margin-bottom: calc(-1*var(--base-size-96, 96px)) !important
}

.my-10 {
    margin-top: var(--base-size-96, 96px) !important;
    margin-bottom: var(--base-size-96, 96px) !important
}

.mt-11 {
    margin-top: var(--base-size-112, 112px) !important
}

.mb-11 {
    margin-bottom: var(--base-size-112, 112px) !important
}

.mt-n11 {
    margin-top: calc(-1*var(--base-size-112, 112px)) !important
}

.mb-n11 {
    margin-bottom: calc(-1*var(--base-size-112, 112px)) !important
}

.my-11 {
    margin-top: var(--base-size-112, 112px) !important;
    margin-bottom: var(--base-size-112, 112px) !important
}

.mt-12 {
    margin-top: var(--base-size-128, 128px) !important
}

.mb-12 {
    margin-bottom: var(--base-size-128, 128px) !important
}

.mt-n12 {
    margin-top: calc(-1*var(--base-size-128, 128px)) !important
}

.mb-n12 {
    margin-bottom: calc(-1*var(--base-size-128, 128px)) !important
}

.my-12 {
    margin-top: var(--base-size-128, 128px) !important;
    margin-bottom: var(--base-size-128, 128px) !important
}

.mx-auto {
    margin-right: auto !important;
    margin-left: auto !important
}

@media(min-width: 544px) {
    .m-sm-0 {
        margin:0 !important
    }

    .mt-sm-0 {
        margin-top: 0 !important
    }

    .mb-sm-0 {
        margin-bottom: 0 !important
    }

    .mr-sm-0 {
        margin-right: 0 !important
    }

    .ml-sm-0 {
        margin-left: 0 !important
    }

    .mx-sm-0 {
        margin-right: 0 !important;
        margin-left: 0 !important
    }

    .my-sm-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important
    }

    .m-sm-1 {
        margin: var(--base-size-4, 4px) !important
    }

    .mt-sm-1 {
        margin-top: var(--base-size-4, 4px) !important
    }

    .mb-sm-1 {
        margin-bottom: var(--base-size-4, 4px) !important
    }

    .mr-sm-1 {
        margin-right: var(--base-size-4, 4px) !important
    }

    .ml-sm-1 {
        margin-left: var(--base-size-4, 4px) !important
    }

    .mt-sm-n1 {
        margin-top: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mb-sm-n1 {
        margin-bottom: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mr-sm-n1 {
        margin-right: calc(-1*var(--base-size-4, 4px)) !important
    }

    .ml-sm-n1 {
        margin-left: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mx-sm-1 {
        margin-right: var(--base-size-4, 4px) !important;
        margin-left: var(--base-size-4, 4px) !important
    }

    .my-sm-1 {
        margin-top: var(--base-size-4, 4px) !important;
        margin-bottom: var(--base-size-4, 4px) !important
    }

    .m-sm-2 {
        margin: var(--base-size-8, 8px) !important
    }

    .mt-sm-2 {
        margin-top: var(--base-size-8, 8px) !important
    }

    .mb-sm-2 {
        margin-bottom: var(--base-size-8, 8px) !important
    }

    .mr-sm-2 {
        margin-right: var(--base-size-8, 8px) !important
    }

    .ml-sm-2 {
        margin-left: var(--base-size-8, 8px) !important
    }

    .mt-sm-n2 {
        margin-top: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mb-sm-n2 {
        margin-bottom: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mr-sm-n2 {
        margin-right: calc(-1*var(--base-size-8, 8px)) !important
    }

    .ml-sm-n2 {
        margin-left: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mx-sm-2 {
        margin-right: var(--base-size-8, 8px) !important;
        margin-left: var(--base-size-8, 8px) !important
    }

    .my-sm-2 {
        margin-top: var(--base-size-8, 8px) !important;
        margin-bottom: var(--base-size-8, 8px) !important
    }

    .m-sm-3 {
        margin: var(--base-size-16, 16px) !important
    }

    .mt-sm-3 {
        margin-top: var(--base-size-16, 16px) !important
    }

    .mb-sm-3 {
        margin-bottom: var(--base-size-16, 16px) !important
    }

    .mr-sm-3 {
        margin-right: var(--base-size-16, 16px) !important
    }

    .ml-sm-3 {
        margin-left: var(--base-size-16, 16px) !important
    }

    .mt-sm-n3 {
        margin-top: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mb-sm-n3 {
        margin-bottom: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mr-sm-n3 {
        margin-right: calc(-1*var(--base-size-16, 16px)) !important
    }

    .ml-sm-n3 {
        margin-left: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mx-sm-3 {
        margin-right: var(--base-size-16, 16px) !important;
        margin-left: var(--base-size-16, 16px) !important
    }

    .my-sm-3 {
        margin-top: var(--base-size-16, 16px) !important;
        margin-bottom: var(--base-size-16, 16px) !important
    }

    .m-sm-4 {
        margin: var(--base-size-24, 24px) !important
    }

    .mt-sm-4 {
        margin-top: var(--base-size-24, 24px) !important
    }

    .mb-sm-4 {
        margin-bottom: var(--base-size-24, 24px) !important
    }

    .mr-sm-4 {
        margin-right: var(--base-size-24, 24px) !important
    }

    .ml-sm-4 {
        margin-left: var(--base-size-24, 24px) !important
    }

    .mt-sm-n4 {
        margin-top: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mb-sm-n4 {
        margin-bottom: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mr-sm-n4 {
        margin-right: calc(-1*var(--base-size-24, 24px)) !important
    }

    .ml-sm-n4 {
        margin-left: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mx-sm-4 {
        margin-right: var(--base-size-24, 24px) !important;
        margin-left: var(--base-size-24, 24px) !important
    }

    .my-sm-4 {
        margin-top: var(--base-size-24, 24px) !important;
        margin-bottom: var(--base-size-24, 24px) !important
    }

    .m-sm-5 {
        margin: var(--base-size-32, 32px) !important
    }

    .mt-sm-5 {
        margin-top: var(--base-size-32, 32px) !important
    }

    .mb-sm-5 {
        margin-bottom: var(--base-size-32, 32px) !important
    }

    .mr-sm-5 {
        margin-right: var(--base-size-32, 32px) !important
    }

    .ml-sm-5 {
        margin-left: var(--base-size-32, 32px) !important
    }

    .mt-sm-n5 {
        margin-top: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mb-sm-n5 {
        margin-bottom: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mr-sm-n5 {
        margin-right: calc(-1*var(--base-size-32, 32px)) !important
    }

    .ml-sm-n5 {
        margin-left: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mx-sm-5 {
        margin-right: var(--base-size-32, 32px) !important;
        margin-left: var(--base-size-32, 32px) !important
    }

    .my-sm-5 {
        margin-top: var(--base-size-32, 32px) !important;
        margin-bottom: var(--base-size-32, 32px) !important
    }

    .m-sm-6 {
        margin: var(--base-size-40, 40px) !important
    }

    .mt-sm-6 {
        margin-top: var(--base-size-40, 40px) !important
    }

    .mb-sm-6 {
        margin-bottom: var(--base-size-40, 40px) !important
    }

    .mr-sm-6 {
        margin-right: var(--base-size-40, 40px) !important
    }

    .ml-sm-6 {
        margin-left: var(--base-size-40, 40px) !important
    }

    .mt-sm-n6 {
        margin-top: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mb-sm-n6 {
        margin-bottom: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mr-sm-n6 {
        margin-right: calc(-1*var(--base-size-40, 40px)) !important
    }

    .ml-sm-n6 {
        margin-left: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mx-sm-6 {
        margin-right: var(--base-size-40, 40px) !important;
        margin-left: var(--base-size-40, 40px) !important
    }

    .my-sm-6 {
        margin-top: var(--base-size-40, 40px) !important;
        margin-bottom: var(--base-size-40, 40px) !important
    }

    .mt-sm-7 {
        margin-top: var(--base-size-48, 48px) !important
    }

    .mb-sm-7 {
        margin-bottom: var(--base-size-48, 48px) !important
    }

    .mt-sm-n7 {
        margin-top: calc(-1*var(--base-size-48, 48px)) !important
    }

    .mb-sm-n7 {
        margin-bottom: calc(-1*var(--base-size-48, 48px)) !important
    }

    .my-sm-7 {
        margin-top: var(--base-size-48, 48px) !important;
        margin-bottom: var(--base-size-48, 48px) !important
    }

    .mt-sm-8 {
        margin-top: var(--base-size-64, 64px) !important
    }

    .mb-sm-8 {
        margin-bottom: var(--base-size-64, 64px) !important
    }

    .mt-sm-n8 {
        margin-top: calc(-1*var(--base-size-64, 64px)) !important
    }

    .mb-sm-n8 {
        margin-bottom: calc(-1*var(--base-size-64, 64px)) !important
    }

    .my-sm-8 {
        margin-top: var(--base-size-64, 64px) !important;
        margin-bottom: var(--base-size-64, 64px) !important
    }

    .mt-sm-9 {
        margin-top: var(--base-size-80, 80px) !important
    }

    .mb-sm-9 {
        margin-bottom: var(--base-size-80, 80px) !important
    }

    .mt-sm-n9 {
        margin-top: calc(-1*var(--base-size-80, 80px)) !important
    }

    .mb-sm-n9 {
        margin-bottom: calc(-1*var(--base-size-80, 80px)) !important
    }

    .my-sm-9 {
        margin-top: var(--base-size-80, 80px) !important;
        margin-bottom: var(--base-size-80, 80px) !important
    }

    .mt-sm-10 {
        margin-top: var(--base-size-96, 96px) !important
    }

    .mb-sm-10 {
        margin-bottom: var(--base-size-96, 96px) !important
    }

    .mt-sm-n10 {
        margin-top: calc(-1*var(--base-size-96, 96px)) !important
    }

    .mb-sm-n10 {
        margin-bottom: calc(-1*var(--base-size-96, 96px)) !important
    }

    .my-sm-10 {
        margin-top: var(--base-size-96, 96px) !important;
        margin-bottom: var(--base-size-96, 96px) !important
    }

    .mt-sm-11 {
        margin-top: var(--base-size-112, 112px) !important
    }

    .mb-sm-11 {
        margin-bottom: var(--base-size-112, 112px) !important
    }

    .mt-sm-n11 {
        margin-top: calc(-1*var(--base-size-112, 112px)) !important
    }

    .mb-sm-n11 {
        margin-bottom: calc(-1*var(--base-size-112, 112px)) !important
    }

    .my-sm-11 {
        margin-top: var(--base-size-112, 112px) !important;
        margin-bottom: var(--base-size-112, 112px) !important
    }

    .mt-sm-12 {
        margin-top: var(--base-size-128, 128px) !important
    }

    .mb-sm-12 {
        margin-bottom: var(--base-size-128, 128px) !important
    }

    .mt-sm-n12 {
        margin-top: calc(-1*var(--base-size-128, 128px)) !important
    }

    .mb-sm-n12 {
        margin-bottom: calc(-1*var(--base-size-128, 128px)) !important
    }

    .my-sm-12 {
        margin-top: var(--base-size-128, 128px) !important;
        margin-bottom: var(--base-size-128, 128px) !important
    }

    .mx-sm-auto {
        margin-right: auto !important;
        margin-left: auto !important
    }
}

@media(min-width: 768px) {
    .m-md-0 {
        margin:0 !important
    }

    .mt-md-0 {
        margin-top: 0 !important
    }

    .mb-md-0 {
        margin-bottom: 0 !important
    }

    .mr-md-0 {
        margin-right: 0 !important
    }

    .ml-md-0 {
        margin-left: 0 !important
    }

    .mx-md-0 {
        margin-right: 0 !important;
        margin-left: 0 !important
    }

    .my-md-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important
    }

    .m-md-1 {
        margin: var(--base-size-4, 4px) !important
    }

    .mt-md-1 {
        margin-top: var(--base-size-4, 4px) !important
    }

    .mb-md-1 {
        margin-bottom: var(--base-size-4, 4px) !important
    }

    .mr-md-1 {
        margin-right: var(--base-size-4, 4px) !important
    }

    .ml-md-1 {
        margin-left: var(--base-size-4, 4px) !important
    }

    .mt-md-n1 {
        margin-top: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mb-md-n1 {
        margin-bottom: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mr-md-n1 {
        margin-right: calc(-1*var(--base-size-4, 4px)) !important
    }

    .ml-md-n1 {
        margin-left: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mx-md-1 {
        margin-right: var(--base-size-4, 4px) !important;
        margin-left: var(--base-size-4, 4px) !important
    }

    .my-md-1 {
        margin-top: var(--base-size-4, 4px) !important;
        margin-bottom: var(--base-size-4, 4px) !important
    }

    .m-md-2 {
        margin: var(--base-size-8, 8px) !important
    }

    .mt-md-2 {
        margin-top: var(--base-size-8, 8px) !important
    }

    .mb-md-2 {
        margin-bottom: var(--base-size-8, 8px) !important
    }

    .mr-md-2 {
        margin-right: var(--base-size-8, 8px) !important
    }

    .ml-md-2 {
        margin-left: var(--base-size-8, 8px) !important
    }

    .mt-md-n2 {
        margin-top: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mb-md-n2 {
        margin-bottom: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mr-md-n2 {
        margin-right: calc(-1*var(--base-size-8, 8px)) !important
    }

    .ml-md-n2 {
        margin-left: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mx-md-2 {
        margin-right: var(--base-size-8, 8px) !important;
        margin-left: var(--base-size-8, 8px) !important
    }

    .my-md-2 {
        margin-top: var(--base-size-8, 8px) !important;
        margin-bottom: var(--base-size-8, 8px) !important
    }

    .m-md-3 {
        margin: var(--base-size-16, 16px) !important
    }

    .mt-md-3 {
        margin-top: var(--base-size-16, 16px) !important
    }

    .mb-md-3 {
        margin-bottom: var(--base-size-16, 16px) !important
    }

    .mr-md-3 {
        margin-right: var(--base-size-16, 16px) !important
    }

    .ml-md-3 {
        margin-left: var(--base-size-16, 16px) !important
    }

    .mt-md-n3 {
        margin-top: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mb-md-n3 {
        margin-bottom: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mr-md-n3 {
        margin-right: calc(-1*var(--base-size-16, 16px)) !important
    }

    .ml-md-n3 {
        margin-left: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mx-md-3 {
        margin-right: var(--base-size-16, 16px) !important;
        margin-left: var(--base-size-16, 16px) !important
    }

    .my-md-3 {
        margin-top: var(--base-size-16, 16px) !important;
        margin-bottom: var(--base-size-16, 16px) !important
    }

    .m-md-4 {
        margin: var(--base-size-24, 24px) !important
    }

    .mt-md-4 {
        margin-top: var(--base-size-24, 24px) !important
    }

    .mb-md-4 {
        margin-bottom: var(--base-size-24, 24px) !important
    }

    .mr-md-4 {
        margin-right: var(--base-size-24, 24px) !important
    }

    .ml-md-4 {
        margin-left: var(--base-size-24, 24px) !important
    }

    .mt-md-n4 {
        margin-top: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mb-md-n4 {
        margin-bottom: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mr-md-n4 {
        margin-right: calc(-1*var(--base-size-24, 24px)) !important
    }

    .ml-md-n4 {
        margin-left: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mx-md-4 {
        margin-right: var(--base-size-24, 24px) !important;
        margin-left: var(--base-size-24, 24px) !important
    }

    .my-md-4 {
        margin-top: var(--base-size-24, 24px) !important;
        margin-bottom: var(--base-size-24, 24px) !important
    }

    .m-md-5 {
        margin: var(--base-size-32, 32px) !important
    }

    .mt-md-5 {
        margin-top: var(--base-size-32, 32px) !important
    }

    .mb-md-5 {
        margin-bottom: var(--base-size-32, 32px) !important
    }

    .mr-md-5 {
        margin-right: var(--base-size-32, 32px) !important
    }

    .ml-md-5 {
        margin-left: var(--base-size-32, 32px) !important
    }

    .mt-md-n5 {
        margin-top: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mb-md-n5 {
        margin-bottom: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mr-md-n5 {
        margin-right: calc(-1*var(--base-size-32, 32px)) !important
    }

    .ml-md-n5 {
        margin-left: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mx-md-5 {
        margin-right: var(--base-size-32, 32px) !important;
        margin-left: var(--base-size-32, 32px) !important
    }

    .my-md-5 {
        margin-top: var(--base-size-32, 32px) !important;
        margin-bottom: var(--base-size-32, 32px) !important
    }

    .m-md-6 {
        margin: var(--base-size-40, 40px) !important
    }

    .mt-md-6 {
        margin-top: var(--base-size-40, 40px) !important
    }

    .mb-md-6 {
        margin-bottom: var(--base-size-40, 40px) !important
    }

    .mr-md-6 {
        margin-right: var(--base-size-40, 40px) !important
    }

    .ml-md-6 {
        margin-left: var(--base-size-40, 40px) !important
    }

    .mt-md-n6 {
        margin-top: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mb-md-n6 {
        margin-bottom: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mr-md-n6 {
        margin-right: calc(-1*var(--base-size-40, 40px)) !important
    }

    .ml-md-n6 {
        margin-left: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mx-md-6 {
        margin-right: var(--base-size-40, 40px) !important;
        margin-left: var(--base-size-40, 40px) !important
    }

    .my-md-6 {
        margin-top: var(--base-size-40, 40px) !important;
        margin-bottom: var(--base-size-40, 40px) !important
    }

    .mt-md-7 {
        margin-top: var(--base-size-48, 48px) !important
    }

    .mb-md-7 {
        margin-bottom: var(--base-size-48, 48px) !important
    }

    .mt-md-n7 {
        margin-top: calc(-1*var(--base-size-48, 48px)) !important
    }

    .mb-md-n7 {
        margin-bottom: calc(-1*var(--base-size-48, 48px)) !important
    }

    .my-md-7 {
        margin-top: var(--base-size-48, 48px) !important;
        margin-bottom: var(--base-size-48, 48px) !important
    }

    .mt-md-8 {
        margin-top: var(--base-size-64, 64px) !important
    }

    .mb-md-8 {
        margin-bottom: var(--base-size-64, 64px) !important
    }

    .mt-md-n8 {
        margin-top: calc(-1*var(--base-size-64, 64px)) !important
    }

    .mb-md-n8 {
        margin-bottom: calc(-1*var(--base-size-64, 64px)) !important
    }

    .my-md-8 {
        margin-top: var(--base-size-64, 64px) !important;
        margin-bottom: var(--base-size-64, 64px) !important
    }

    .mt-md-9 {
        margin-top: var(--base-size-80, 80px) !important
    }

    .mb-md-9 {
        margin-bottom: var(--base-size-80, 80px) !important
    }

    .mt-md-n9 {
        margin-top: calc(-1*var(--base-size-80, 80px)) !important
    }

    .mb-md-n9 {
        margin-bottom: calc(-1*var(--base-size-80, 80px)) !important
    }

    .my-md-9 {
        margin-top: var(--base-size-80, 80px) !important;
        margin-bottom: var(--base-size-80, 80px) !important
    }

    .mt-md-10 {
        margin-top: var(--base-size-96, 96px) !important
    }

    .mb-md-10 {
        margin-bottom: var(--base-size-96, 96px) !important
    }

    .mt-md-n10 {
        margin-top: calc(-1*var(--base-size-96, 96px)) !important
    }

    .mb-md-n10 {
        margin-bottom: calc(-1*var(--base-size-96, 96px)) !important
    }

    .my-md-10 {
        margin-top: var(--base-size-96, 96px) !important;
        margin-bottom: var(--base-size-96, 96px) !important
    }

    .mt-md-11 {
        margin-top: var(--base-size-112, 112px) !important
    }

    .mb-md-11 {
        margin-bottom: var(--base-size-112, 112px) !important
    }

    .mt-md-n11 {
        margin-top: calc(-1*var(--base-size-112, 112px)) !important
    }

    .mb-md-n11 {
        margin-bottom: calc(-1*var(--base-size-112, 112px)) !important
    }

    .my-md-11 {
        margin-top: var(--base-size-112, 112px) !important;
        margin-bottom: var(--base-size-112, 112px) !important
    }

    .mt-md-12 {
        margin-top: var(--base-size-128, 128px) !important
    }

    .mb-md-12 {
        margin-bottom: var(--base-size-128, 128px) !important
    }

    .mt-md-n12 {
        margin-top: calc(-1*var(--base-size-128, 128px)) !important
    }

    .mb-md-n12 {
        margin-bottom: calc(-1*var(--base-size-128, 128px)) !important
    }

    .my-md-12 {
        margin-top: var(--base-size-128, 128px) !important;
        margin-bottom: var(--base-size-128, 128px) !important
    }

    .mx-md-auto {
        margin-right: auto !important;
        margin-left: auto !important
    }
}

@media(min-width: 1012px) {
    .m-lg-0 {
        margin:0 !important
    }

    .mt-lg-0 {
        margin-top: 0 !important
    }

    .mb-lg-0 {
        margin-bottom: 0 !important
    }

    .mr-lg-0 {
        margin-right: 0 !important
    }

    .ml-lg-0 {
        margin-left: 0 !important
    }

    .mx-lg-0 {
        margin-right: 0 !important;
        margin-left: 0 !important
    }

    .my-lg-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important
    }

    .m-lg-1 {
        margin: var(--base-size-4, 4px) !important
    }

    .mt-lg-1 {
        margin-top: var(--base-size-4, 4px) !important
    }

    .mb-lg-1 {
        margin-bottom: var(--base-size-4, 4px) !important
    }

    .mr-lg-1 {
        margin-right: var(--base-size-4, 4px) !important
    }

    .ml-lg-1 {
        margin-left: var(--base-size-4, 4px) !important
    }

    .mt-lg-n1 {
        margin-top: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mb-lg-n1 {
        margin-bottom: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mr-lg-n1 {
        margin-right: calc(-1*var(--base-size-4, 4px)) !important
    }

    .ml-lg-n1 {
        margin-left: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mx-lg-1 {
        margin-right: var(--base-size-4, 4px) !important;
        margin-left: var(--base-size-4, 4px) !important
    }

    .my-lg-1 {
        margin-top: var(--base-size-4, 4px) !important;
        margin-bottom: var(--base-size-4, 4px) !important
    }

    .m-lg-2 {
        margin: var(--base-size-8, 8px) !important
    }

    .mt-lg-2 {
        margin-top: var(--base-size-8, 8px) !important
    }

    .mb-lg-2 {
        margin-bottom: var(--base-size-8, 8px) !important
    }

    .mr-lg-2 {
        margin-right: var(--base-size-8, 8px) !important
    }

    .ml-lg-2 {
        margin-left: var(--base-size-8, 8px) !important
    }

    .mt-lg-n2 {
        margin-top: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mb-lg-n2 {
        margin-bottom: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mr-lg-n2 {
        margin-right: calc(-1*var(--base-size-8, 8px)) !important
    }

    .ml-lg-n2 {
        margin-left: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mx-lg-2 {
        margin-right: var(--base-size-8, 8px) !important;
        margin-left: var(--base-size-8, 8px) !important
    }

    .my-lg-2 {
        margin-top: var(--base-size-8, 8px) !important;
        margin-bottom: var(--base-size-8, 8px) !important
    }

    .m-lg-3 {
        margin: var(--base-size-16, 16px) !important
    }

    .mt-lg-3 {
        margin-top: var(--base-size-16, 16px) !important
    }

    .mb-lg-3 {
        margin-bottom: var(--base-size-16, 16px) !important
    }

    .mr-lg-3 {
        margin-right: var(--base-size-16, 16px) !important
    }

    .ml-lg-3 {
        margin-left: var(--base-size-16, 16px) !important
    }

    .mt-lg-n3 {
        margin-top: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mb-lg-n3 {
        margin-bottom: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mr-lg-n3 {
        margin-right: calc(-1*var(--base-size-16, 16px)) !important
    }

    .ml-lg-n3 {
        margin-left: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mx-lg-3 {
        margin-right: var(--base-size-16, 16px) !important;
        margin-left: var(--base-size-16, 16px) !important
    }

    .my-lg-3 {
        margin-top: var(--base-size-16, 16px) !important;
        margin-bottom: var(--base-size-16, 16px) !important
    }

    .m-lg-4 {
        margin: var(--base-size-24, 24px) !important
    }

    .mt-lg-4 {
        margin-top: var(--base-size-24, 24px) !important
    }

    .mb-lg-4 {
        margin-bottom: var(--base-size-24, 24px) !important
    }

    .mr-lg-4 {
        margin-right: var(--base-size-24, 24px) !important
    }

    .ml-lg-4 {
        margin-left: var(--base-size-24, 24px) !important
    }

    .mt-lg-n4 {
        margin-top: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mb-lg-n4 {
        margin-bottom: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mr-lg-n4 {
        margin-right: calc(-1*var(--base-size-24, 24px)) !important
    }

    .ml-lg-n4 {
        margin-left: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mx-lg-4 {
        margin-right: var(--base-size-24, 24px) !important;
        margin-left: var(--base-size-24, 24px) !important
    }

    .my-lg-4 {
        margin-top: var(--base-size-24, 24px) !important;
        margin-bottom: var(--base-size-24, 24px) !important
    }

    .m-lg-5 {
        margin: var(--base-size-32, 32px) !important
    }

    .mt-lg-5 {
        margin-top: var(--base-size-32, 32px) !important
    }

    .mb-lg-5 {
        margin-bottom: var(--base-size-32, 32px) !important
    }

    .mr-lg-5 {
        margin-right: var(--base-size-32, 32px) !important
    }

    .ml-lg-5 {
        margin-left: var(--base-size-32, 32px) !important
    }

    .mt-lg-n5 {
        margin-top: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mb-lg-n5 {
        margin-bottom: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mr-lg-n5 {
        margin-right: calc(-1*var(--base-size-32, 32px)) !important
    }

    .ml-lg-n5 {
        margin-left: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mx-lg-5 {
        margin-right: var(--base-size-32, 32px) !important;
        margin-left: var(--base-size-32, 32px) !important
    }

    .my-lg-5 {
        margin-top: var(--base-size-32, 32px) !important;
        margin-bottom: var(--base-size-32, 32px) !important
    }

    .m-lg-6 {
        margin: var(--base-size-40, 40px) !important
    }

    .mt-lg-6 {
        margin-top: var(--base-size-40, 40px) !important
    }

    .mb-lg-6 {
        margin-bottom: var(--base-size-40, 40px) !important
    }

    .mr-lg-6 {
        margin-right: var(--base-size-40, 40px) !important
    }

    .ml-lg-6 {
        margin-left: var(--base-size-40, 40px) !important
    }

    .mt-lg-n6 {
        margin-top: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mb-lg-n6 {
        margin-bottom: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mr-lg-n6 {
        margin-right: calc(-1*var(--base-size-40, 40px)) !important
    }

    .ml-lg-n6 {
        margin-left: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mx-lg-6 {
        margin-right: var(--base-size-40, 40px) !important;
        margin-left: var(--base-size-40, 40px) !important
    }

    .my-lg-6 {
        margin-top: var(--base-size-40, 40px) !important;
        margin-bottom: var(--base-size-40, 40px) !important
    }

    .mt-lg-7 {
        margin-top: var(--base-size-48, 48px) !important
    }

    .mb-lg-7 {
        margin-bottom: var(--base-size-48, 48px) !important
    }

    .mt-lg-n7 {
        margin-top: calc(-1*var(--base-size-48, 48px)) !important
    }

    .mb-lg-n7 {
        margin-bottom: calc(-1*var(--base-size-48, 48px)) !important
    }

    .my-lg-7 {
        margin-top: var(--base-size-48, 48px) !important;
        margin-bottom: var(--base-size-48, 48px) !important
    }

    .mt-lg-8 {
        margin-top: var(--base-size-64, 64px) !important
    }

    .mb-lg-8 {
        margin-bottom: var(--base-size-64, 64px) !important
    }

    .mt-lg-n8 {
        margin-top: calc(-1*var(--base-size-64, 64px)) !important
    }

    .mb-lg-n8 {
        margin-bottom: calc(-1*var(--base-size-64, 64px)) !important
    }

    .my-lg-8 {
        margin-top: var(--base-size-64, 64px) !important;
        margin-bottom: var(--base-size-64, 64px) !important
    }

    .mt-lg-9 {
        margin-top: var(--base-size-80, 80px) !important
    }

    .mb-lg-9 {
        margin-bottom: var(--base-size-80, 80px) !important
    }

    .mt-lg-n9 {
        margin-top: calc(-1*var(--base-size-80, 80px)) !important
    }

    .mb-lg-n9 {
        margin-bottom: calc(-1*var(--base-size-80, 80px)) !important
    }

    .my-lg-9 {
        margin-top: var(--base-size-80, 80px) !important;
        margin-bottom: var(--base-size-80, 80px) !important
    }

    .mt-lg-10 {
        margin-top: var(--base-size-96, 96px) !important
    }

    .mb-lg-10 {
        margin-bottom: var(--base-size-96, 96px) !important
    }

    .mt-lg-n10 {
        margin-top: calc(-1*var(--base-size-96, 96px)) !important
    }

    .mb-lg-n10 {
        margin-bottom: calc(-1*var(--base-size-96, 96px)) !important
    }

    .my-lg-10 {
        margin-top: var(--base-size-96, 96px) !important;
        margin-bottom: var(--base-size-96, 96px) !important
    }

    .mt-lg-11 {
        margin-top: var(--base-size-112, 112px) !important
    }

    .mb-lg-11 {
        margin-bottom: var(--base-size-112, 112px) !important
    }

    .mt-lg-n11 {
        margin-top: calc(-1*var(--base-size-112, 112px)) !important
    }

    .mb-lg-n11 {
        margin-bottom: calc(-1*var(--base-size-112, 112px)) !important
    }

    .my-lg-11 {
        margin-top: var(--base-size-112, 112px) !important;
        margin-bottom: var(--base-size-112, 112px) !important
    }

    .mt-lg-12 {
        margin-top: var(--base-size-128, 128px) !important
    }

    .mb-lg-12 {
        margin-bottom: var(--base-size-128, 128px) !important
    }

    .mt-lg-n12 {
        margin-top: calc(-1*var(--base-size-128, 128px)) !important
    }

    .mb-lg-n12 {
        margin-bottom: calc(-1*var(--base-size-128, 128px)) !important
    }

    .my-lg-12 {
        margin-top: var(--base-size-128, 128px) !important;
        margin-bottom: var(--base-size-128, 128px) !important
    }

    .mx-lg-auto {
        margin-right: auto !important;
        margin-left: auto !important
    }
}

@media(min-width: 1280px) {
    .m-xl-0 {
        margin:0 !important
    }

    .mt-xl-0 {
        margin-top: 0 !important
    }

    .mb-xl-0 {
        margin-bottom: 0 !important
    }

    .mr-xl-0 {
        margin-right: 0 !important
    }

    .ml-xl-0 {
        margin-left: 0 !important
    }

    .mx-xl-0 {
        margin-right: 0 !important;
        margin-left: 0 !important
    }

    .my-xl-0 {
        margin-top: 0 !important;
        margin-bottom: 0 !important
    }

    .m-xl-1 {
        margin: var(--base-size-4, 4px) !important
    }

    .mt-xl-1 {
        margin-top: var(--base-size-4, 4px) !important
    }

    .mb-xl-1 {
        margin-bottom: var(--base-size-4, 4px) !important
    }

    .mr-xl-1 {
        margin-right: var(--base-size-4, 4px) !important
    }

    .ml-xl-1 {
        margin-left: var(--base-size-4, 4px) !important
    }

    .mt-xl-n1 {
        margin-top: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mb-xl-n1 {
        margin-bottom: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mr-xl-n1 {
        margin-right: calc(-1*var(--base-size-4, 4px)) !important
    }

    .ml-xl-n1 {
        margin-left: calc(-1*var(--base-size-4, 4px)) !important
    }

    .mx-xl-1 {
        margin-right: var(--base-size-4, 4px) !important;
        margin-left: var(--base-size-4, 4px) !important
    }

    .my-xl-1 {
        margin-top: var(--base-size-4, 4px) !important;
        margin-bottom: var(--base-size-4, 4px) !important
    }

    .m-xl-2 {
        margin: var(--base-size-8, 8px) !important
    }

    .mt-xl-2 {
        margin-top: var(--base-size-8, 8px) !important
    }

    .mb-xl-2 {
        margin-bottom: var(--base-size-8, 8px) !important
    }

    .mr-xl-2 {
        margin-right: var(--base-size-8, 8px) !important
    }

    .ml-xl-2 {
        margin-left: var(--base-size-8, 8px) !important
    }

    .mt-xl-n2 {
        margin-top: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mb-xl-n2 {
        margin-bottom: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mr-xl-n2 {
        margin-right: calc(-1*var(--base-size-8, 8px)) !important
    }

    .ml-xl-n2 {
        margin-left: calc(-1*var(--base-size-8, 8px)) !important
    }

    .mx-xl-2 {
        margin-right: var(--base-size-8, 8px) !important;
        margin-left: var(--base-size-8, 8px) !important
    }

    .my-xl-2 {
        margin-top: var(--base-size-8, 8px) !important;
        margin-bottom: var(--base-size-8, 8px) !important
    }

    .m-xl-3 {
        margin: var(--base-size-16, 16px) !important
    }

    .mt-xl-3 {
        margin-top: var(--base-size-16, 16px) !important
    }

    .mb-xl-3 {
        margin-bottom: var(--base-size-16, 16px) !important
    }

    .mr-xl-3 {
        margin-right: var(--base-size-16, 16px) !important
    }

    .ml-xl-3 {
        margin-left: var(--base-size-16, 16px) !important
    }

    .mt-xl-n3 {
        margin-top: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mb-xl-n3 {
        margin-bottom: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mr-xl-n3 {
        margin-right: calc(-1*var(--base-size-16, 16px)) !important
    }

    .ml-xl-n3 {
        margin-left: calc(-1*var(--base-size-16, 16px)) !important
    }

    .mx-xl-3 {
        margin-right: var(--base-size-16, 16px) !important;
        margin-left: var(--base-size-16, 16px) !important
    }

    .my-xl-3 {
        margin-top: var(--base-size-16, 16px) !important;
        margin-bottom: var(--base-size-16, 16px) !important
    }

    .m-xl-4 {
        margin: var(--base-size-24, 24px) !important
    }

    .mt-xl-4 {
        margin-top: var(--base-size-24, 24px) !important
    }

    .mb-xl-4 {
        margin-bottom: var(--base-size-24, 24px) !important
    }

    .mr-xl-4 {
        margin-right: var(--base-size-24, 24px) !important
    }

    .ml-xl-4 {
        margin-left: var(--base-size-24, 24px) !important
    }

    .mt-xl-n4 {
        margin-top: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mb-xl-n4 {
        margin-bottom: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mr-xl-n4 {
        margin-right: calc(-1*var(--base-size-24, 24px)) !important
    }

    .ml-xl-n4 {
        margin-left: calc(-1*var(--base-size-24, 24px)) !important
    }

    .mx-xl-4 {
        margin-right: var(--base-size-24, 24px) !important;
        margin-left: var(--base-size-24, 24px) !important
    }

    .my-xl-4 {
        margin-top: var(--base-size-24, 24px) !important;
        margin-bottom: var(--base-size-24, 24px) !important
    }

    .m-xl-5 {
        margin: var(--base-size-32, 32px) !important
    }

    .mt-xl-5 {
        margin-top: var(--base-size-32, 32px) !important
    }

    .mb-xl-5 {
        margin-bottom: var(--base-size-32, 32px) !important
    }

    .mr-xl-5 {
        margin-right: var(--base-size-32, 32px) !important
    }

    .ml-xl-5 {
        margin-left: var(--base-size-32, 32px) !important
    }

    .mt-xl-n5 {
        margin-top: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mb-xl-n5 {
        margin-bottom: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mr-xl-n5 {
        margin-right: calc(-1*var(--base-size-32, 32px)) !important
    }

    .ml-xl-n5 {
        margin-left: calc(-1*var(--base-size-32, 32px)) !important
    }

    .mx-xl-5 {
        margin-right: var(--base-size-32, 32px) !important;
        margin-left: var(--base-size-32, 32px) !important
    }

    .my-xl-5 {
        margin-top: var(--base-size-32, 32px) !important;
        margin-bottom: var(--base-size-32, 32px) !important
    }

    .m-xl-6 {
        margin: var(--base-size-40, 40px) !important
    }

    .mt-xl-6 {
        margin-top: var(--base-size-40, 40px) !important
    }

    .mb-xl-6 {
        margin-bottom: var(--base-size-40, 40px) !important
    }

    .mr-xl-6 {
        margin-right: var(--base-size-40, 40px) !important
    }

    .ml-xl-6 {
        margin-left: var(--base-size-40, 40px) !important
    }

    .mt-xl-n6 {
        margin-top: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mb-xl-n6 {
        margin-bottom: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mr-xl-n6 {
        margin-right: calc(-1*var(--base-size-40, 40px)) !important
    }

    .ml-xl-n6 {
        margin-left: calc(-1*var(--base-size-40, 40px)) !important
    }

    .mx-xl-6 {
        margin-right: var(--base-size-40, 40px) !important;
        margin-left: var(--base-size-40, 40px) !important
    }

    .my-xl-6 {
        margin-top: var(--base-size-40, 40px) !important;
        margin-bottom: var(--base-size-40, 40px) !important
    }

    .mt-xl-7 {
        margin-top: var(--base-size-48, 48px) !important
    }

    .mb-xl-7 {
        margin-bottom: var(--base-size-48, 48px) !important
    }

    .mt-xl-n7 {
        margin-top: calc(-1*var(--base-size-48, 48px)) !important
    }

    .mb-xl-n7 {
        margin-bottom: calc(-1*var(--base-size-48, 48px)) !important
    }

    .my-xl-7 {
        margin-top: var(--base-size-48, 48px) !important;
        margin-bottom: var(--base-size-48, 48px) !important
    }

    .mt-xl-8 {
        margin-top: var(--base-size-64, 64px) !important
    }

    .mb-xl-8 {
        margin-bottom: var(--base-size-64, 64px) !important
    }

    .mt-xl-n8 {
        margin-top: calc(-1*var(--base-size-64, 64px)) !important
    }

    .mb-xl-n8 {
        margin-bottom: calc(-1*var(--base-size-64, 64px)) !important
    }

    .my-xl-8 {
        margin-top: var(--base-size-64, 64px) !important;
        margin-bottom: var(--base-size-64, 64px) !important
    }

    .mt-xl-9 {
        margin-top: var(--base-size-80, 80px) !important
    }

    .mb-xl-9 {
        margin-bottom: var(--base-size-80, 80px) !important
    }

    .mt-xl-n9 {
        margin-top: calc(-1*var(--base-size-80, 80px)) !important
    }

    .mb-xl-n9 {
        margin-bottom: calc(-1*var(--base-size-80, 80px)) !important
    }

    .my-xl-9 {
        margin-top: var(--base-size-80, 80px) !important;
        margin-bottom: var(--base-size-80, 80px) !important
    }

    .mt-xl-10 {
        margin-top: var(--base-size-96, 96px) !important
    }

    .mb-xl-10 {
        margin-bottom: var(--base-size-96, 96px) !important
    }

    .mt-xl-n10 {
        margin-top: calc(-1*var(--base-size-96, 96px)) !important
    }

    .mb-xl-n10 {
        margin-bottom: calc(-1*var(--base-size-96, 96px)) !important
    }

    .my-xl-10 {
        margin-top: var(--base-size-96, 96px) !important;
        margin-bottom: var(--base-size-96, 96px) !important
    }

    .mt-xl-11 {
        margin-top: var(--base-size-112, 112px) !important
    }

    .mb-xl-11 {
        margin-bottom: var(--base-size-112, 112px) !important
    }

    .mt-xl-n11 {
        margin-top: calc(-1*var(--base-size-112, 112px)) !important
    }

    .mb-xl-n11 {
        margin-bottom: calc(-1*var(--base-size-112, 112px)) !important
    }

    .my-xl-11 {
        margin-top: var(--base-size-112, 112px) !important;
        margin-bottom: var(--base-size-112, 112px) !important
    }

    .mt-xl-12 {
        margin-top: var(--base-size-128, 128px) !important
    }

    .mb-xl-12 {
        margin-bottom: var(--base-size-128, 128px) !important
    }

    .mt-xl-n12 {
        margin-top: calc(-1*var(--base-size-128, 128px)) !important
    }

    .mb-xl-n12 {
        margin-bottom: calc(-1*var(--base-size-128, 128px)) !important
    }

    .my-xl-12 {
        margin-top: var(--base-size-128, 128px) !important;
        margin-bottom: var(--base-size-128, 128px) !important
    }

    .mx-xl-auto {
        margin-right: auto !important;
        margin-left: auto !important
    }
}

.m-auto {
    margin: auto !important
}

.mt-auto {
    margin-top: auto !important
}

.mr-auto {
    margin-right: auto !important
}

.mb-auto {
    margin-bottom: auto !important
}

.ml-auto {
    margin-left: auto !important
}

.p-0 {
    padding: 0 !important
}

.pt-0 {
    padding-top: 0 !important
}

.pr-0 {
    padding-right: 0 !important
}

.pb-0 {
    padding-bottom: 0 !important
}

.pl-0 {
    padding-left: 0 !important
}

.px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important
}

.py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important
}

.p-1 {
    padding: var(--base-size-4, 4px) !important
}

.pt-1 {
    padding-top: var(--base-size-4, 4px) !important
}

.pr-1 {
    padding-right: var(--base-size-4, 4px) !important
}

.pb-1 {
    padding-bottom: var(--base-size-4, 4px) !important
}

.pl-1 {
    padding-left: var(--base-size-4, 4px) !important
}

.px-1 {
    padding-right: var(--base-size-4, 4px) !important;
    padding-left: var(--base-size-4, 4px) !important
}

.py-1 {
    padding-top: var(--base-size-4, 4px) !important;
    padding-bottom: var(--base-size-4, 4px) !important
}

.p-2 {
    padding: var(--base-size-8, 8px) !important
}

.pt-2 {
    padding-top: var(--base-size-8, 8px) !important
}

.pr-2 {
    padding-right: var(--base-size-8, 8px) !important
}

.pb-2 {
    padding-bottom: var(--base-size-8, 8px) !important
}

.pl-2 {
    padding-left: var(--base-size-8, 8px) !important
}

.px-2 {
    padding-right: var(--base-size-8, 8px) !important;
    padding-left: var(--base-size-8, 8px) !important
}

.py-2 {
    padding-top: var(--base-size-8, 8px) !important;
    padding-bottom: var(--base-size-8, 8px) !important
}

.p-3 {
    padding: var(--base-size-16, 16px) !important
}

.pt-3 {
    padding-top: var(--base-size-16, 16px) !important
}

.pr-3 {
    padding-right: var(--base-size-16, 16px) !important
}

.pb-3 {
    padding-bottom: var(--base-size-16, 16px) !important
}

.pl-3 {
    padding-left: var(--base-size-16, 16px) !important
}

.px-3 {
    padding-right: var(--base-size-16, 16px) !important;
    padding-left: var(--base-size-16, 16px) !important
}

.py-3 {
    padding-top: var(--base-size-16, 16px) !important;
    padding-bottom: var(--base-size-16, 16px) !important
}

.p-4 {
    padding: var(--base-size-24, 24px) !important
}

.pt-4 {
    padding-top: var(--base-size-24, 24px) !important
}

.pr-4 {
    padding-right: var(--base-size-24, 24px) !important
}

.pb-4 {
    padding-bottom: var(--base-size-24, 24px) !important
}

.pl-4 {
    padding-left: var(--base-size-24, 24px) !important
}

.px-4 {
    padding-right: var(--base-size-24, 24px) !important;
    padding-left: var(--base-size-24, 24px) !important
}

.py-4 {
    padding-top: var(--base-size-24, 24px) !important;
    padding-bottom: var(--base-size-24, 24px) !important
}

.p-5 {
    padding: var(--base-size-32, 32px) !important
}

.pt-5 {
    padding-top: var(--base-size-32, 32px) !important
}

.pr-5 {
    padding-right: var(--base-size-32, 32px) !important
}

.pb-5 {
    padding-bottom: var(--base-size-32, 32px) !important
}

.pl-5 {
    padding-left: var(--base-size-32, 32px) !important
}

.px-5 {
    padding-right: var(--base-size-32, 32px) !important;
    padding-left: var(--base-size-32, 32px) !important
}

.py-5 {
    padding-top: var(--base-size-32, 32px) !important;
    padding-bottom: var(--base-size-32, 32px) !important
}

.p-6 {
    padding: var(--base-size-40, 40px) !important
}

.pt-6 {
    padding-top: var(--base-size-40, 40px) !important
}

.pr-6 {
    padding-right: var(--base-size-40, 40px) !important
}

.pb-6 {
    padding-bottom: var(--base-size-40, 40px) !important
}

.pl-6 {
    padding-left: var(--base-size-40, 40px) !important
}

.px-6 {
    padding-right: var(--base-size-40, 40px) !important;
    padding-left: var(--base-size-40, 40px) !important
}

.py-6 {
    padding-top: var(--base-size-40, 40px) !important;
    padding-bottom: var(--base-size-40, 40px) !important
}

.pt-7 {
    padding-top: var(--base-size-48, 48px) !important
}

.pr-7 {
    padding-right: var(--base-size-48, 48px) !important
}

.pb-7 {
    padding-bottom: var(--base-size-48, 48px) !important
}

.pl-7 {
    padding-left: var(--base-size-48, 48px) !important
}

.py-7 {
    padding-top: var(--base-size-48, 48px) !important;
    padding-bottom: var(--base-size-48, 48px) !important
}

.pt-8 {
    padding-top: var(--base-size-64, 64px) !important
}

.pr-8 {
    padding-right: var(--base-size-64, 64px) !important
}

.pb-8 {
    padding-bottom: var(--base-size-64, 64px) !important
}

.pl-8 {
    padding-left: var(--base-size-64, 64px) !important
}

.py-8 {
    padding-top: var(--base-size-64, 64px) !important;
    padding-bottom: var(--base-size-64, 64px) !important
}

.pt-9 {
    padding-top: var(--base-size-80, 80px) !important
}

.pr-9 {
    padding-right: var(--base-size-80, 80px) !important
}

.pb-9 {
    padding-bottom: var(--base-size-80, 80px) !important
}

.pl-9 {
    padding-left: var(--base-size-80, 80px) !important
}

.py-9 {
    padding-top: var(--base-size-80, 80px) !important;
    padding-bottom: var(--base-size-80, 80px) !important
}

.pt-10 {
    padding-top: var(--base-size-96, 96px) !important
}

.pr-10 {
    padding-right: var(--base-size-96, 96px) !important
}

.pb-10 {
    padding-bottom: var(--base-size-96, 96px) !important
}

.pl-10 {
    padding-left: var(--base-size-96, 96px) !important
}

.py-10 {
    padding-top: var(--base-size-96, 96px) !important;
    padding-bottom: var(--base-size-96, 96px) !important
}

.pt-11 {
    padding-top: var(--base-size-112, 112px) !important
}

.pr-11 {
    padding-right: var(--base-size-112, 112px) !important
}

.pb-11 {
    padding-bottom: var(--base-size-112, 112px) !important
}

.pl-11 {
    padding-left: var(--base-size-112, 112px) !important
}

.py-11 {
    padding-top: var(--base-size-112, 112px) !important;
    padding-bottom: var(--base-size-112, 112px) !important
}

.pt-12 {
    padding-top: var(--base-size-128, 128px) !important
}

.pr-12 {
    padding-right: var(--base-size-128, 128px) !important
}

.pb-12 {
    padding-bottom: var(--base-size-128, 128px) !important
}

.pl-12 {
    padding-left: var(--base-size-128, 128px) !important
}

.py-12 {
    padding-top: var(--base-size-128, 128px) !important;
    padding-bottom: var(--base-size-128, 128px) !important
}

@media(min-width: 544px) {
    .p-sm-0 {
        padding:0 !important
    }

    .pt-sm-0 {
        padding-top: 0 !important
    }

    .pr-sm-0 {
        padding-right: 0 !important
    }

    .pb-sm-0 {
        padding-bottom: 0 !important
    }

    .pl-sm-0 {
        padding-left: 0 !important
    }

    .px-sm-0 {
        padding-right: 0 !important;
        padding-left: 0 !important
    }

    .py-sm-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important
    }

    .p-sm-1 {
        padding: var(--base-size-4, 4px) !important
    }

    .pt-sm-1 {
        padding-top: var(--base-size-4, 4px) !important
    }

    .pr-sm-1 {
        padding-right: var(--base-size-4, 4px) !important
    }

    .pb-sm-1 {
        padding-bottom: var(--base-size-4, 4px) !important
    }

    .pl-sm-1 {
        padding-left: var(--base-size-4, 4px) !important
    }

    .px-sm-1 {
        padding-right: var(--base-size-4, 4px) !important;
        padding-left: var(--base-size-4, 4px) !important
    }

    .py-sm-1 {
        padding-top: var(--base-size-4, 4px) !important;
        padding-bottom: var(--base-size-4, 4px) !important
    }

    .p-sm-2 {
        padding: var(--base-size-8, 8px) !important
    }

    .pt-sm-2 {
        padding-top: var(--base-size-8, 8px) !important
    }

    .pr-sm-2 {
        padding-right: var(--base-size-8, 8px) !important
    }

    .pb-sm-2 {
        padding-bottom: var(--base-size-8, 8px) !important
    }

    .pl-sm-2 {
        padding-left: var(--base-size-8, 8px) !important
    }

    .px-sm-2 {
        padding-right: var(--base-size-8, 8px) !important;
        padding-left: var(--base-size-8, 8px) !important
    }

    .py-sm-2 {
        padding-top: var(--base-size-8, 8px) !important;
        padding-bottom: var(--base-size-8, 8px) !important
    }

    .p-sm-3 {
        padding: var(--base-size-16, 16px) !important
    }

    .pt-sm-3 {
        padding-top: var(--base-size-16, 16px) !important
    }

    .pr-sm-3 {
        padding-right: var(--base-size-16, 16px) !important
    }

    .pb-sm-3 {
        padding-bottom: var(--base-size-16, 16px) !important
    }

    .pl-sm-3 {
        padding-left: var(--base-size-16, 16px) !important
    }

    .px-sm-3 {
        padding-right: var(--base-size-16, 16px) !important;
        padding-left: var(--base-size-16, 16px) !important
    }

    .py-sm-3 {
        padding-top: var(--base-size-16, 16px) !important;
        padding-bottom: var(--base-size-16, 16px) !important
    }

    .p-sm-4 {
        padding: var(--base-size-24, 24px) !important
    }

    .pt-sm-4 {
        padding-top: var(--base-size-24, 24px) !important
    }

    .pr-sm-4 {
        padding-right: var(--base-size-24, 24px) !important
    }

    .pb-sm-4 {
        padding-bottom: var(--base-size-24, 24px) !important
    }

    .pl-sm-4 {
        padding-left: var(--base-size-24, 24px) !important
    }

    .px-sm-4 {
        padding-right: var(--base-size-24, 24px) !important;
        padding-left: var(--base-size-24, 24px) !important
    }

    .py-sm-4 {
        padding-top: var(--base-size-24, 24px) !important;
        padding-bottom: var(--base-size-24, 24px) !important
    }

    .p-sm-5 {
        padding: var(--base-size-32, 32px) !important
    }

    .pt-sm-5 {
        padding-top: var(--base-size-32, 32px) !important
    }

    .pr-sm-5 {
        padding-right: var(--base-size-32, 32px) !important
    }

    .pb-sm-5 {
        padding-bottom: var(--base-size-32, 32px) !important
    }

    .pl-sm-5 {
        padding-left: var(--base-size-32, 32px) !important
    }

    .px-sm-5 {
        padding-right: var(--base-size-32, 32px) !important;
        padding-left: var(--base-size-32, 32px) !important
    }

    .py-sm-5 {
        padding-top: var(--base-size-32, 32px) !important;
        padding-bottom: var(--base-size-32, 32px) !important
    }

    .p-sm-6 {
        padding: var(--base-size-40, 40px) !important
    }

    .pt-sm-6 {
        padding-top: var(--base-size-40, 40px) !important
    }

    .pr-sm-6 {
        padding-right: var(--base-size-40, 40px) !important
    }

    .pb-sm-6 {
        padding-bottom: var(--base-size-40, 40px) !important
    }

    .pl-sm-6 {
        padding-left: var(--base-size-40, 40px) !important
    }

    .px-sm-6 {
        padding-right: var(--base-size-40, 40px) !important;
        padding-left: var(--base-size-40, 40px) !important
    }

    .py-sm-6 {
        padding-top: var(--base-size-40, 40px) !important;
        padding-bottom: var(--base-size-40, 40px) !important
    }

    .pt-sm-7 {
        padding-top: var(--base-size-48, 48px) !important
    }

    .pr-sm-7 {
        padding-right: var(--base-size-48, 48px) !important
    }

    .pb-sm-7 {
        padding-bottom: var(--base-size-48, 48px) !important
    }

    .pl-sm-7 {
        padding-left: var(--base-size-48, 48px) !important
    }

    .py-sm-7 {
        padding-top: var(--base-size-48, 48px) !important;
        padding-bottom: var(--base-size-48, 48px) !important
    }

    .pt-sm-8 {
        padding-top: var(--base-size-64, 64px) !important
    }

    .pr-sm-8 {
        padding-right: var(--base-size-64, 64px) !important
    }

    .pb-sm-8 {
        padding-bottom: var(--base-size-64, 64px) !important
    }

    .pl-sm-8 {
        padding-left: var(--base-size-64, 64px) !important
    }

    .py-sm-8 {
        padding-top: var(--base-size-64, 64px) !important;
        padding-bottom: var(--base-size-64, 64px) !important
    }

    .pt-sm-9 {
        padding-top: var(--base-size-80, 80px) !important
    }

    .pr-sm-9 {
        padding-right: var(--base-size-80, 80px) !important
    }

    .pb-sm-9 {
        padding-bottom: var(--base-size-80, 80px) !important
    }

    .pl-sm-9 {
        padding-left: var(--base-size-80, 80px) !important
    }

    .py-sm-9 {
        padding-top: var(--base-size-80, 80px) !important;
        padding-bottom: var(--base-size-80, 80px) !important
    }

    .pt-sm-10 {
        padding-top: var(--base-size-96, 96px) !important
    }

    .pr-sm-10 {
        padding-right: var(--base-size-96, 96px) !important
    }

    .pb-sm-10 {
        padding-bottom: var(--base-size-96, 96px) !important
    }

    .pl-sm-10 {
        padding-left: var(--base-size-96, 96px) !important
    }

    .py-sm-10 {
        padding-top: var(--base-size-96, 96px) !important;
        padding-bottom: var(--base-size-96, 96px) !important
    }

    .pt-sm-11 {
        padding-top: var(--base-size-112, 112px) !important
    }

    .pr-sm-11 {
        padding-right: var(--base-size-112, 112px) !important
    }

    .pb-sm-11 {
        padding-bottom: var(--base-size-112, 112px) !important
    }

    .pl-sm-11 {
        padding-left: var(--base-size-112, 112px) !important
    }

    .py-sm-11 {
        padding-top: var(--base-size-112, 112px) !important;
        padding-bottom: var(--base-size-112, 112px) !important
    }

    .pt-sm-12 {
        padding-top: var(--base-size-128, 128px) !important
    }

    .pr-sm-12 {
        padding-right: var(--base-size-128, 128px) !important
    }

    .pb-sm-12 {
        padding-bottom: var(--base-size-128, 128px) !important
    }

    .pl-sm-12 {
        padding-left: var(--base-size-128, 128px) !important
    }

    .py-sm-12 {
        padding-top: var(--base-size-128, 128px) !important;
        padding-bottom: var(--base-size-128, 128px) !important
    }
}

@media(min-width: 768px) {
    .p-md-0 {
        padding:0 !important
    }

    .pt-md-0 {
        padding-top: 0 !important
    }

    .pr-md-0 {
        padding-right: 0 !important
    }

    .pb-md-0 {
        padding-bottom: 0 !important
    }

    .pl-md-0 {
        padding-left: 0 !important
    }

    .px-md-0 {
        padding-right: 0 !important;
        padding-left: 0 !important
    }

    .py-md-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important
    }

    .p-md-1 {
        padding: var(--base-size-4, 4px) !important
    }

    .pt-md-1 {
        padding-top: var(--base-size-4, 4px) !important
    }

    .pr-md-1 {
        padding-right: var(--base-size-4, 4px) !important
    }

    .pb-md-1 {
        padding-bottom: var(--base-size-4, 4px) !important
    }

    .pl-md-1 {
        padding-left: var(--base-size-4, 4px) !important
    }

    .px-md-1 {
        padding-right: var(--base-size-4, 4px) !important;
        padding-left: var(--base-size-4, 4px) !important
    }

    .py-md-1 {
        padding-top: var(--base-size-4, 4px) !important;
        padding-bottom: var(--base-size-4, 4px) !important
    }

    .p-md-2 {
        padding: var(--base-size-8, 8px) !important
    }

    .pt-md-2 {
        padding-top: var(--base-size-8, 8px) !important
    }

    .pr-md-2 {
        padding-right: var(--base-size-8, 8px) !important
    }

    .pb-md-2 {
        padding-bottom: var(--base-size-8, 8px) !important
    }

    .pl-md-2 {
        padding-left: var(--base-size-8, 8px) !important
    }

    .px-md-2 {
        padding-right: var(--base-size-8, 8px) !important;
        padding-left: var(--base-size-8, 8px) !important
    }

    .py-md-2 {
        padding-top: var(--base-size-8, 8px) !important;
        padding-bottom: var(--base-size-8, 8px) !important
    }

    .p-md-3 {
        padding: var(--base-size-16, 16px) !important
    }

    .pt-md-3 {
        padding-top: var(--base-size-16, 16px) !important
    }

    .pr-md-3 {
        padding-right: var(--base-size-16, 16px) !important
    }

    .pb-md-3 {
        padding-bottom: var(--base-size-16, 16px) !important
    }

    .pl-md-3 {
        padding-left: var(--base-size-16, 16px) !important
    }

    .px-md-3 {
        padding-right: var(--base-size-16, 16px) !important;
        padding-left: var(--base-size-16, 16px) !important
    }

    .py-md-3 {
        padding-top: var(--base-size-16, 16px) !important;
        padding-bottom: var(--base-size-16, 16px) !important
    }

    .p-md-4 {
        padding: var(--base-size-24, 24px) !important
    }

    .pt-md-4 {
        padding-top: var(--base-size-24, 24px) !important
    }

    .pr-md-4 {
        padding-right: var(--base-size-24, 24px) !important
    }

    .pb-md-4 {
        padding-bottom: var(--base-size-24, 24px) !important
    }

    .pl-md-4 {
        padding-left: var(--base-size-24, 24px) !important
    }

    .px-md-4 {
        padding-right: var(--base-size-24, 24px) !important;
        padding-left: var(--base-size-24, 24px) !important
    }

    .py-md-4 {
        padding-top: var(--base-size-24, 24px) !important;
        padding-bottom: var(--base-size-24, 24px) !important
    }

    .p-md-5 {
        padding: var(--base-size-32, 32px) !important
    }

    .pt-md-5 {
        padding-top: var(--base-size-32, 32px) !important
    }

    .pr-md-5 {
        padding-right: var(--base-size-32, 32px) !important
    }

    .pb-md-5 {
        padding-bottom: var(--base-size-32, 32px) !important
    }

    .pl-md-5 {
        padding-left: var(--base-size-32, 32px) !important
    }

    .px-md-5 {
        padding-right: var(--base-size-32, 32px) !important;
        padding-left: var(--base-size-32, 32px) !important
    }

    .py-md-5 {
        padding-top: var(--base-size-32, 32px) !important;
        padding-bottom: var(--base-size-32, 32px) !important
    }

    .p-md-6 {
        padding: var(--base-size-40, 40px) !important
    }

    .pt-md-6 {
        padding-top: var(--base-size-40, 40px) !important
    }

    .pr-md-6 {
        padding-right: var(--base-size-40, 40px) !important
    }

    .pb-md-6 {
        padding-bottom: var(--base-size-40, 40px) !important
    }

    .pl-md-6 {
        padding-left: var(--base-size-40, 40px) !important
    }

    .px-md-6 {
        padding-right: var(--base-size-40, 40px) !important;
        padding-left: var(--base-size-40, 40px) !important
    }

    .py-md-6 {
        padding-top: var(--base-size-40, 40px) !important;
        padding-bottom: var(--base-size-40, 40px) !important
    }

    .pt-md-7 {
        padding-top: var(--base-size-48, 48px) !important
    }

    .pr-md-7 {
        padding-right: var(--base-size-48, 48px) !important
    }

    .pb-md-7 {
        padding-bottom: var(--base-size-48, 48px) !important
    }

    .pl-md-7 {
        padding-left: var(--base-size-48, 48px) !important
    }

    .py-md-7 {
        padding-top: var(--base-size-48, 48px) !important;
        padding-bottom: var(--base-size-48, 48px) !important
    }

    .pt-md-8 {
        padding-top: var(--base-size-64, 64px) !important
    }

    .pr-md-8 {
        padding-right: var(--base-size-64, 64px) !important
    }

    .pb-md-8 {
        padding-bottom: var(--base-size-64, 64px) !important
    }

    .pl-md-8 {
        padding-left: var(--base-size-64, 64px) !important
    }

    .py-md-8 {
        padding-top: var(--base-size-64, 64px) !important;
        padding-bottom: var(--base-size-64, 64px) !important
    }

    .pt-md-9 {
        padding-top: var(--base-size-80, 80px) !important
    }

    .pr-md-9 {
        padding-right: var(--base-size-80, 80px) !important
    }

    .pb-md-9 {
        padding-bottom: var(--base-size-80, 80px) !important
    }

    .pl-md-9 {
        padding-left: var(--base-size-80, 80px) !important
    }

    .py-md-9 {
        padding-top: var(--base-size-80, 80px) !important;
        padding-bottom: var(--base-size-80, 80px) !important
    }

    .pt-md-10 {
        padding-top: var(--base-size-96, 96px) !important
    }

    .pr-md-10 {
        padding-right: var(--base-size-96, 96px) !important
    }

    .pb-md-10 {
        padding-bottom: var(--base-size-96, 96px) !important
    }

    .pl-md-10 {
        padding-left: var(--base-size-96, 96px) !important
    }

    .py-md-10 {
        padding-top: var(--base-size-96, 96px) !important;
        padding-bottom: var(--base-size-96, 96px) !important
    }

    .pt-md-11 {
        padding-top: var(--base-size-112, 112px) !important
    }

    .pr-md-11 {
        padding-right: var(--base-size-112, 112px) !important
    }

    .pb-md-11 {
        padding-bottom: var(--base-size-112, 112px) !important
    }

    .pl-md-11 {
        padding-left: var(--base-size-112, 112px) !important
    }

    .py-md-11 {
        padding-top: var(--base-size-112, 112px) !important;
        padding-bottom: var(--base-size-112, 112px) !important
    }

    .pt-md-12 {
        padding-top: var(--base-size-128, 128px) !important
    }

    .pr-md-12 {
        padding-right: var(--base-size-128, 128px) !important
    }

    .pb-md-12 {
        padding-bottom: var(--base-size-128, 128px) !important
    }

    .pl-md-12 {
        padding-left: var(--base-size-128, 128px) !important
    }

    .py-md-12 {
        padding-top: var(--base-size-128, 128px) !important;
        padding-bottom: var(--base-size-128, 128px) !important
    }
}

@media(min-width: 1012px) {
    .p-lg-0 {
        padding:0 !important
    }

    .pt-lg-0 {
        padding-top: 0 !important
    }

    .pr-lg-0 {
        padding-right: 0 !important
    }

    .pb-lg-0 {
        padding-bottom: 0 !important
    }

    .pl-lg-0 {
        padding-left: 0 !important
    }

    .px-lg-0 {
        padding-right: 0 !important;
        padding-left: 0 !important
    }

    .py-lg-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important
    }

    .p-lg-1 {
        padding: var(--base-size-4, 4px) !important
    }

    .pt-lg-1 {
        padding-top: var(--base-size-4, 4px) !important
    }

    .pr-lg-1 {
        padding-right: var(--base-size-4, 4px) !important
    }

    .pb-lg-1 {
        padding-bottom: var(--base-size-4, 4px) !important
    }

    .pl-lg-1 {
        padding-left: var(--base-size-4, 4px) !important
    }

    .px-lg-1 {
        padding-right: var(--base-size-4, 4px) !important;
        padding-left: var(--base-size-4, 4px) !important
    }

    .py-lg-1 {
        padding-top: var(--base-size-4, 4px) !important;
        padding-bottom: var(--base-size-4, 4px) !important
    }

    .p-lg-2 {
        padding: var(--base-size-8, 8px) !important
    }

    .pt-lg-2 {
        padding-top: var(--base-size-8, 8px) !important
    }

    .pr-lg-2 {
        padding-right: var(--base-size-8, 8px) !important
    }

    .pb-lg-2 {
        padding-bottom: var(--base-size-8, 8px) !important
    }

    .pl-lg-2 {
        padding-left: var(--base-size-8, 8px) !important
    }

    .px-lg-2 {
        padding-right: var(--base-size-8, 8px) !important;
        padding-left: var(--base-size-8, 8px) !important
    }

    .py-lg-2 {
        padding-top: var(--base-size-8, 8px) !important;
        padding-bottom: var(--base-size-8, 8px) !important
    }

    .p-lg-3 {
        padding: var(--base-size-16, 16px) !important
    }

    .pt-lg-3 {
        padding-top: var(--base-size-16, 16px) !important
    }

    .pr-lg-3 {
        padding-right: var(--base-size-16, 16px) !important
    }

    .pb-lg-3 {
        padding-bottom: var(--base-size-16, 16px) !important
    }

    .pl-lg-3 {
        padding-left: var(--base-size-16, 16px) !important
    }

    .px-lg-3 {
        padding-right: var(--base-size-16, 16px) !important;
        padding-left: var(--base-size-16, 16px) !important
    }

    .py-lg-3 {
        padding-top: var(--base-size-16, 16px) !important;
        padding-bottom: var(--base-size-16, 16px) !important
    }

    .p-lg-4 {
        padding: var(--base-size-24, 24px) !important
    }

    .pt-lg-4 {
        padding-top: var(--base-size-24, 24px) !important
    }

    .pr-lg-4 {
        padding-right: var(--base-size-24, 24px) !important
    }

    .pb-lg-4 {
        padding-bottom: var(--base-size-24, 24px) !important
    }

    .pl-lg-4 {
        padding-left: var(--base-size-24, 24px) !important
    }

    .px-lg-4 {
        padding-right: var(--base-size-24, 24px) !important;
        padding-left: var(--base-size-24, 24px) !important
    }

    .py-lg-4 {
        padding-top: var(--base-size-24, 24px) !important;
        padding-bottom: var(--base-size-24, 24px) !important
    }

    .p-lg-5 {
        padding: var(--base-size-32, 32px) !important
    }

    .pt-lg-5 {
        padding-top: var(--base-size-32, 32px) !important
    }

    .pr-lg-5 {
        padding-right: var(--base-size-32, 32px) !important
    }

    .pb-lg-5 {
        padding-bottom: var(--base-size-32, 32px) !important
    }

    .pl-lg-5 {
        padding-left: var(--base-size-32, 32px) !important
    }

    .px-lg-5 {
        padding-right: var(--base-size-32, 32px) !important;
        padding-left: var(--base-size-32, 32px) !important
    }

    .py-lg-5 {
        padding-top: var(--base-size-32, 32px) !important;
        padding-bottom: var(--base-size-32, 32px) !important
    }

    .p-lg-6 {
        padding: var(--base-size-40, 40px) !important
    }

    .pt-lg-6 {
        padding-top: var(--base-size-40, 40px) !important
    }

    .pr-lg-6 {
        padding-right: var(--base-size-40, 40px) !important
    }

    .pb-lg-6 {
        padding-bottom: var(--base-size-40, 40px) !important
    }

    .pl-lg-6 {
        padding-left: var(--base-size-40, 40px) !important
    }

    .px-lg-6 {
        padding-right: var(--base-size-40, 40px) !important;
        padding-left: var(--base-size-40, 40px) !important
    }

    .py-lg-6 {
        padding-top: var(--base-size-40, 40px) !important;
        padding-bottom: var(--base-size-40, 40px) !important
    }

    .pt-lg-7 {
        padding-top: var(--base-size-48, 48px) !important
    }

    .pr-lg-7 {
        padding-right: var(--base-size-48, 48px) !important
    }

    .pb-lg-7 {
        padding-bottom: var(--base-size-48, 48px) !important
    }

    .pl-lg-7 {
        padding-left: var(--base-size-48, 48px) !important
    }

    .py-lg-7 {
        padding-top: var(--base-size-48, 48px) !important;
        padding-bottom: var(--base-size-48, 48px) !important
    }

    .pt-lg-8 {
        padding-top: var(--base-size-64, 64px) !important
    }

    .pr-lg-8 {
        padding-right: var(--base-size-64, 64px) !important
    }

    .pb-lg-8 {
        padding-bottom: var(--base-size-64, 64px) !important
    }

    .pl-lg-8 {
        padding-left: var(--base-size-64, 64px) !important
    }

    .py-lg-8 {
        padding-top: var(--base-size-64, 64px) !important;
        padding-bottom: var(--base-size-64, 64px) !important
    }

    .pt-lg-9 {
        padding-top: var(--base-size-80, 80px) !important
    }

    .pr-lg-9 {
        padding-right: var(--base-size-80, 80px) !important
    }

    .pb-lg-9 {
        padding-bottom: var(--base-size-80, 80px) !important
    }

    .pl-lg-9 {
        padding-left: var(--base-size-80, 80px) !important
    }

    .py-lg-9 {
        padding-top: var(--base-size-80, 80px) !important;
        padding-bottom: var(--base-size-80, 80px) !important
    }

    .pt-lg-10 {
        padding-top: var(--base-size-96, 96px) !important
    }

    .pr-lg-10 {
        padding-right: var(--base-size-96, 96px) !important
    }

    .pb-lg-10 {
        padding-bottom: var(--base-size-96, 96px) !important
    }

    .pl-lg-10 {
        padding-left: var(--base-size-96, 96px) !important
    }

    .py-lg-10 {
        padding-top: var(--base-size-96, 96px) !important;
        padding-bottom: var(--base-size-96, 96px) !important
    }

    .pt-lg-11 {
        padding-top: var(--base-size-112, 112px) !important
    }

    .pr-lg-11 {
        padding-right: var(--base-size-112, 112px) !important
    }

    .pb-lg-11 {
        padding-bottom: var(--base-size-112, 112px) !important
    }

    .pl-lg-11 {
        padding-left: var(--base-size-112, 112px) !important
    }

    .py-lg-11 {
        padding-top: var(--base-size-112, 112px) !important;
        padding-bottom: var(--base-size-112, 112px) !important
    }

    .pt-lg-12 {
        padding-top: var(--base-size-128, 128px) !important
    }

    .pr-lg-12 {
        padding-right: var(--base-size-128, 128px) !important
    }

    .pb-lg-12 {
        padding-bottom: var(--base-size-128, 128px) !important
    }

    .pl-lg-12 {
        padding-left: var(--base-size-128, 128px) !important
    }

    .py-lg-12 {
        padding-top: var(--base-size-128, 128px) !important;
        padding-bottom: var(--base-size-128, 128px) !important
    }
}

@media(min-width: 1280px) {
    .p-xl-0 {
        padding:0 !important
    }

    .pt-xl-0 {
        padding-top: 0 !important
    }

    .pr-xl-0 {
        padding-right: 0 !important
    }

    .pb-xl-0 {
        padding-bottom: 0 !important
    }

    .pl-xl-0 {
        padding-left: 0 !important
    }

    .px-xl-0 {
        padding-right: 0 !important;
        padding-left: 0 !important
    }

    .py-xl-0 {
        padding-top: 0 !important;
        padding-bottom: 0 !important
    }

    .p-xl-1 {
        padding: var(--base-size-4, 4px) !important
    }

    .pt-xl-1 {
        padding-top: var(--base-size-4, 4px) !important
    }

    .pr-xl-1 {
        padding-right: var(--base-size-4, 4px) !important
    }

    .pb-xl-1 {
        padding-bottom: var(--base-size-4, 4px) !important
    }

    .pl-xl-1 {
        padding-left: var(--base-size-4, 4px) !important
    }

    .px-xl-1 {
        padding-right: var(--base-size-4, 4px) !important;
        padding-left: var(--base-size-4, 4px) !important
    }

    .py-xl-1 {
        padding-top: var(--base-size-4, 4px) !important;
        padding-bottom: var(--base-size-4, 4px) !important
    }

    .p-xl-2 {
        padding: var(--base-size-8, 8px) !important
    }

    .pt-xl-2 {
        padding-top: var(--base-size-8, 8px) !important
    }

    .pr-xl-2 {
        padding-right: var(--base-size-8, 8px) !important
    }

    .pb-xl-2 {
        padding-bottom: var(--base-size-8, 8px) !important
    }

    .pl-xl-2 {
        padding-left: var(--base-size-8, 8px) !important
    }

    .px-xl-2 {
        padding-right: var(--base-size-8, 8px) !important;
        padding-left: var(--base-size-8, 8px) !important
    }

    .py-xl-2 {
        padding-top: var(--base-size-8, 8px) !important;
        padding-bottom: var(--base-size-8, 8px) !important
    }

    .p-xl-3 {
        padding: var(--base-size-16, 16px) !important
    }

    .pt-xl-3 {
        padding-top: var(--base-size-16, 16px) !important
    }

    .pr-xl-3 {
        padding-right: var(--base-size-16, 16px) !important
    }

    .pb-xl-3 {
        padding-bottom: var(--base-size-16, 16px) !important
    }

    .pl-xl-3 {
        padding-left: var(--base-size-16, 16px) !important
    }

    .px-xl-3 {
        padding-right: var(--base-size-16, 16px) !important;
        padding-left: var(--base-size-16, 16px) !important
    }

    .py-xl-3 {
        padding-top: var(--base-size-16, 16px) !important;
        padding-bottom: var(--base-size-16, 16px) !important
    }

    .p-xl-4 {
        padding: var(--base-size-24, 24px) !important
    }

    .pt-xl-4 {
        padding-top: var(--base-size-24, 24px) !important
    }

    .pr-xl-4 {
        padding-right: var(--base-size-24, 24px) !important
    }

    .pb-xl-4 {
        padding-bottom: var(--base-size-24, 24px) !important
    }

    .pl-xl-4 {
        padding-left: var(--base-size-24, 24px) !important
    }

    .px-xl-4 {
        padding-right: var(--base-size-24, 24px) !important;
        padding-left: var(--base-size-24, 24px) !important
    }

    .py-xl-4 {
        padding-top: var(--base-size-24, 24px) !important;
        padding-bottom: var(--base-size-24, 24px) !important
    }

    .p-xl-5 {
        padding: var(--base-size-32, 32px) !important
    }

    .pt-xl-5 {
        padding-top: var(--base-size-32, 32px) !important
    }

    .pr-xl-5 {
        padding-right: var(--base-size-32, 32px) !important
    }

    .pb-xl-5 {
        padding-bottom: var(--base-size-32, 32px) !important
    }

    .pl-xl-5 {
        padding-left: var(--base-size-32, 32px) !important
    }

    .px-xl-5 {
        padding-right: var(--base-size-32, 32px) !important;
        padding-left: var(--base-size-32, 32px) !important
    }

    .py-xl-5 {
        padding-top: var(--base-size-32, 32px) !important;
        padding-bottom: var(--base-size-32, 32px) !important
    }

    .p-xl-6 {
        padding: var(--base-size-40, 40px) !important
    }

    .pt-xl-6 {
        padding-top: var(--base-size-40, 40px) !important
    }

    .pr-xl-6 {
        padding-right: var(--base-size-40, 40px) !important
    }

    .pb-xl-6 {
        padding-bottom: var(--base-size-40, 40px) !important
    }

    .pl-xl-6 {
        padding-left: var(--base-size-40, 40px) !important
    }

    .px-xl-6 {
        padding-right: var(--base-size-40, 40px) !important;
        padding-left: var(--base-size-40, 40px) !important
    }

    .py-xl-6 {
        padding-top: var(--base-size-40, 40px) !important;
        padding-bottom: var(--base-size-40, 40px) !important
    }

    .pt-xl-7 {
        padding-top: var(--base-size-48, 48px) !important
    }

    .pr-xl-7 {
        padding-right: var(--base-size-48, 48px) !important
    }

    .pb-xl-7 {
        padding-bottom: var(--base-size-48, 48px) !important
    }

    .pl-xl-7 {
        padding-left: var(--base-size-48, 48px) !important
    }

    .py-xl-7 {
        padding-top: var(--base-size-48, 48px) !important;
        padding-bottom: var(--base-size-48, 48px) !important
    }

    .pt-xl-8 {
        padding-top: var(--base-size-64, 64px) !important
    }

    .pr-xl-8 {
        padding-right: var(--base-size-64, 64px) !important
    }

    .pb-xl-8 {
        padding-bottom: var(--base-size-64, 64px) !important
    }

    .pl-xl-8 {
        padding-left: var(--base-size-64, 64px) !important
    }

    .py-xl-8 {
        padding-top: var(--base-size-64, 64px) !important;
        padding-bottom: var(--base-size-64, 64px) !important
    }

    .pt-xl-9 {
        padding-top: var(--base-size-80, 80px) !important
    }

    .pr-xl-9 {
        padding-right: var(--base-size-80, 80px) !important
    }

    .pb-xl-9 {
        padding-bottom: var(--base-size-80, 80px) !important
    }

    .pl-xl-9 {
        padding-left: var(--base-size-80, 80px) !important
    }

    .py-xl-9 {
        padding-top: var(--base-size-80, 80px) !important;
        padding-bottom: var(--base-size-80, 80px) !important
    }

    .pt-xl-10 {
        padding-top: var(--base-size-96, 96px) !important
    }

    .pr-xl-10 {
        padding-right: var(--base-size-96, 96px) !important
    }

    .pb-xl-10 {
        padding-bottom: var(--base-size-96, 96px) !important
    }

    .pl-xl-10 {
        padding-left: var(--base-size-96, 96px) !important
    }

    .py-xl-10 {
        padding-top: var(--base-size-96, 96px) !important;
        padding-bottom: var(--base-size-96, 96px) !important
    }

    .pt-xl-11 {
        padding-top: var(--base-size-112, 112px) !important
    }

    .pr-xl-11 {
        padding-right: var(--base-size-112, 112px) !important
    }

    .pb-xl-11 {
        padding-bottom: var(--base-size-112, 112px) !important
    }

    .pl-xl-11 {
        padding-left: var(--base-size-112, 112px) !important
    }

    .py-xl-11 {
        padding-top: var(--base-size-112, 112px) !important;
        padding-bottom: var(--base-size-112, 112px) !important
    }

    .pt-xl-12 {
        padding-top: var(--base-size-128, 128px) !important
    }

    .pr-xl-12 {
        padding-right: var(--base-size-128, 128px) !important
    }

    .pb-xl-12 {
        padding-bottom: var(--base-size-128, 128px) !important
    }

    .pl-xl-12 {
        padding-left: var(--base-size-128, 128px) !important
    }

    .py-xl-12 {
        padding-top: var(--base-size-128, 128px) !important;
        padding-bottom: var(--base-size-128, 128px) !important
    }
}

.p-responsive {
    padding-right: var(--base-size-16, 16px) !important;
    padding-left: var(--base-size-16, 16px) !important
}

@media(min-width: 544px) {
    .p-responsive {
        padding-right:var(--base-size-40, 40px) !important;
        padding-left: var(--base-size-40, 40px) !important
    }
}

@media(min-width: 1012px) {
    .p-responsive {
        padding-right:var(--base-size-16, 16px) !important;
        padding-left: var(--base-size-16, 16px) !important
    }
}

.h1 {
    font-size: var(--h1-size-mobile, 26px) !important
}

@media(min-width: 768px) {
    .h1 {
        font-size:var(--h1-size, 32px) !important
    }
}

.h2 {
    font-size: var(--h2-size-mobile, 22px) !important
}

@media(min-width: 768px) {
    .h2 {
        font-size:var(--h2-size, 24px) !important
    }
}

.h3 {
    font-size: var(--h3-size-mobile, 18px) !important
}

@media(min-width: 768px) {
    .h3 {
        font-size:var(--h3-size, 20px) !important
    }
}

.h4 {
    font-size: var(--h4-size, 16px) !important
}

.h5 {
    font-size: var(--h5-size, 14px) !important
}

.h6 {
    font-size: var(--h6-size, 12px) !important
}

.h1,.h2,.h3,.h4,.h5,.h6 {
    font-weight: var(--base-text-weight-semibold, var(--base-text-weight-semibold, 600)) !important
}

.f1 {
    font-size: var(--h1-size-mobile, 26px) !important
}

@media(min-width: 768px) {
    .f1 {
        font-size:var(--h1-size, 32px) !important
    }
}

.f2 {
    font-size: var(--h2-size-mobile, 22px) !important
}

@media(min-width: 768px) {
    .f2 {
        font-size:var(--h2-size, 24px) !important
    }
}

.f3 {
    font-size: var(--h3-size-mobile, 18px) !important
}

@media(min-width: 768px) {
    .f3 {
        font-size:var(--h3-size, 20px) !important
    }
}

.f4 {
    font-size: var(--h4-size, 16px) !important
}

@media(min-width: 768px) {
    .f4 {
        font-size:var(--h4-size, 16px) !important
    }
}

.f5 {
    font-size: var(--h5-size, 14px) !important
}

.f6 {
    font-size: var(--h6-size, 12px) !important
}

.f00-light {
    font-size: var(--h00-size-mobile, 40px) !important;
    font-weight: var(--base-text-weight-light, var(--base-text-weight-light, 300)) !important
}

@media(min-width: 768px) {
    .f00-light {
        font-size:var(--h00-size, 48px) !important
    }
}

.f0-light {
    font-size: var(--h0-size-mobile, 32px) !important;
    font-weight: var(--base-text-weight-light, var(--base-text-weight-light, 300)) !important
}

@media(min-width: 768px) {
    .f0-light {
        font-size:var(--h0-size, 40px) !important
    }
}

.f1-light {
    font-size: var(--h1-size-mobile, 26px) !important;
    font-weight: var(--base-text-weight-light, var(--base-text-weight-light, 300)) !important
}

@media(min-width: 768px) {
    .f1-light {
        font-size:var(--h1-size, 32px) !important
    }
}

.f2-light {
    font-size: var(--h2-size-mobile, 22px) !important;
    font-weight: var(--base-text-weight-light, var(--base-text-weight-light, 300)) !important
}

@media(min-width: 768px) {
    .f2-light {
        font-size:var(--h2-size, 24px) !important
    }
}

.f3-light {
    font-size: var(--h3-size-mobile, 18px) !important;
    font-weight: var(--base-text-weight-light, var(--base-text-weight-light, 300)) !important
}

@media(min-width: 768px) {
    .f3-light {
        font-size:var(--h3-size, 20px) !important
    }
}

.text-small {
    font-size: var(--h6-size, 12px) !important
}

.lead {
    margin-bottom: 30px;
    font-size: var(--h3-size, 20px);
    font-weight: var(--base-text-weight-light, var(--base-text-weight-light, 300))
}

.lh-condensed-ultra {
    line-height: 1 !important
}

.lh-condensed {
    line-height: 1.25 !important
}

.lh-default {
    line-height: 1.5 !important
}

.lh-0 {
    line-height: 0 !important
}

@media(min-width: 544px) {
    .lh-sm-condensed-ultra {
        line-height:1 !important
    }

    .lh-sm-condensed {
        line-height: 1.25 !important
    }

    .lh-sm-default {
        line-height: 1.5 !important
    }

    .lh-sm-0 {
        line-height: 0 !important
    }
}

@media(min-width: 768px) {
    .lh-md-condensed-ultra {
        line-height:1 !important
    }

    .lh-md-condensed {
        line-height: 1.25 !important
    }

    .lh-md-default {
        line-height: 1.5 !important
    }

    .lh-md-0 {
        line-height: 0 !important
    }
}

@media(min-width: 1012px) {
    .lh-lg-condensed-ultra {
        line-height:1 !important
    }

    .lh-lg-condensed {
        line-height: 1.25 !important
    }

    .lh-lg-default {
        line-height: 1.5 !important
    }

    .lh-lg-0 {
        line-height: 0 !important
    }
}

@media(min-width: 1280px) {
    .lh-xl-condensed-ultra {
        line-height:1 !important
    }

    .lh-xl-condensed {
        line-height: 1.25 !important
    }

    .lh-xl-default {
        line-height: 1.5 !important
    }

    .lh-xl-0 {
        line-height: 0 !important
    }
}

.text-right {
    text-align: right !important
}

.text-left {
    text-align: left !important
}

.text-center {
    text-align: center !important
}

@media(min-width: 544px) {
    .text-sm-right {
        text-align:right !important
    }

    .text-sm-left {
        text-align: left !important
    }

    .text-sm-center {
        text-align: center !important
    }
}

@media(min-width: 768px) {
    .text-md-right {
        text-align:right !important
    }

    .text-md-left {
        text-align: left !important
    }

    .text-md-center {
        text-align: center !important
    }
}

@media(min-width: 1012px) {
    .text-lg-right {
        text-align:right !important
    }

    .text-lg-left {
        text-align: left !important
    }

    .text-lg-center {
        text-align: center !important
    }
}

@media(min-width: 1280px) {
    .text-xl-right {
        text-align:right !important
    }

    .text-xl-left {
        text-align: left !important
    }

    .text-xl-center {
        text-align: center !important
    }
}

.text-normal {
    font-weight: var(--base-text-weight-normal, 400) !important
}

.text-bold {
    font-weight: var(--base-text-weight-semibold, 600) !important
}

.text-semibold {
    font-weight: var(--base-text-weight-medium, 500) !important
}

.text-light {
    font-weight: var(--base-text-weight-light, 300) !important
}

.text-italic {
    font-style: italic !important
}

.text-uppercase {
    text-transform: uppercase !important
}

.text-underline {
    text-decoration: underline !important
}

.no-underline {
    text-decoration: none !important
}

.no-wrap {
    white-space: nowrap !important
}

.ws-normal {
    white-space: normal !important
}

.wb-break-word {
    word-break: break-word !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important
}

.wb-break-all {
    word-break: break-all !important
}

.text-emphasized {
    font-weight: var(--base-text-weight-semibold, var(--base-text-weight-semibold, 600))
}

.list-style-none {
    list-style: none !important
}

.text-mono {
    font-family: ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace !important
}

.user-select-none {
    -webkit-user-select: none !important;
    user-select: none !important
}

.text-capitalize {
    text-transform: capitalize !important
}

.d-block {
    display: block !important
}

.d-flex {
    display: flex !important
}

.d-inline {
    display: inline !important
}

.d-inline-block {
    display: inline-block !important
}

.d-inline-flex {
    display: inline-flex !important
}

.d-none {
    display: none !important
}

.d-table {
    display: table !important
}

.d-table-cell {
    display: table-cell !important
}

@media(min-width: 544px) {
    .d-sm-block {
        display:block !important
    }

    .d-sm-flex {
        display: flex !important
    }

    .d-sm-inline {
        display: inline !important
    }

    .d-sm-inline-block {
        display: inline-block !important
    }

    .d-sm-inline-flex {
        display: inline-flex !important
    }

    .d-sm-none {
        display: none !important
    }

    .d-sm-table {
        display: table !important
    }

    .d-sm-table-cell {
        display: table-cell !important
    }
}

@media(min-width: 768px) {
    .d-md-block {
        display:block !important
    }

    .d-md-flex {
        display: flex !important
    }

    .d-md-inline {
        display: inline !important
    }

    .d-md-inline-block {
        display: inline-block !important
    }

    .d-md-inline-flex {
        display: inline-flex !important
    }

    .d-md-none {
        display: none !important
    }

    .d-md-table {
        display: table !important
    }

    .d-md-table-cell {
        display: table-cell !important
    }
}

@media(min-width: 1012px) {
    .d-lg-block {
        display:block !important
    }

    .d-lg-flex {
        display: flex !important
    }

    .d-lg-inline {
        display: inline !important
    }

    .d-lg-inline-block {
        display: inline-block !important
    }

    .d-lg-inline-flex {
        display: inline-flex !important
    }

    .d-lg-none {
        display: none !important
    }

    .d-lg-table {
        display: table !important
    }

    .d-lg-table-cell {
        display: table-cell !important
    }
}

@media(min-width: 1280px) {
    .d-xl-block {
        display:block !important
    }

    .d-xl-flex {
        display: flex !important
    }

    .d-xl-inline {
        display: inline !important
    }

    .d-xl-inline-block {
        display: inline-block !important
    }

    .d-xl-inline-flex {
        display: inline-flex !important
    }

    .d-xl-none {
        display: none !important
    }

    .d-xl-table {
        display: table !important
    }

    .d-xl-table-cell {
        display: table-cell !important
    }
}

.v-hidden {
    visibility: hidden !important
}

.v-visible {
    visibility: visible !important
}

@media(max-width: 543.98px) {
    .hide-sm {
        display:none !important
    }
}

@media(min-width: 544px)and (max-width: 767.98px) {
    .hide-md {
        display:none !important
    }
}

@media(min-width: 768px)and (max-width: 1011.98px) {
    .hide-lg {
        display:none !important
    }
}

@media(min-width: 1012px) {
    .hide-xl {
        display:none !important
    }
}

.show-whenNarrow,.show-whenRegular,.show-whenWide,.show-whenRegular.hide-whenWide {
    display: none !important
}

.hide-whenNarrow,.hide-whenRegular,.hide-whenWide {
    display: block !important
}

@media(max-width: 767.98px) {
    .show-whenNarrow {
        display:block !important
    }

    .hide-whenNarrow {
        display: none !important
    }
}

@media(min-width: 768px) {
    .show-whenRegular,.show-whenRegular.hide-whenWide {
        display:block !important
    }

    .hide-whenRegular {
        display: none !important
    }
}

@media(min-width: 1280px) {
    .show-whenWide {
        display:block !important
    }

    .hide-whenWide,.show-whenRegular.hide-whenWide {
        display: none !important
    }
}

.table-fixed {
    table-layout: fixed !important
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    word-wrap: normal;
    border: 0
}

.show-on-focus {
    position: absolute !important
}

.show-on-focus:not(:focus) {
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    border: 0 !important
}

.show-on-focus:focus {
    z-index: 999
}

.suggester {
    position: relative;
    top: 0;
    left: 0;
    min-width: 180px;
    padding: 0;
    margin: 0;
    margin-top: 24px;
    list-style: none;
    cursor: pointer;
    background: var(--color-canvas-overlay);
    border: 1px solid var(--color-border-default);
    border-radius: 6px;
    box-shadow: var(--color-shadow-medium)
}

.suggester li {
    display: block;
    padding: 4px 8px;
    font-weight: var(--base-text-weight-medium, 500);
    border-bottom: 1px solid var(--color-border-muted)
}

.suggester li small {
    font-weight: var(--base-text-weight-normal, 400);
    color: var(--color-fg-muted)
}

.suggester li:last-child {
    border-bottom: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px
}

.suggester li:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px
}

.suggester li:hover {
    color: var(--color-fg-on-emphasis);
    text-decoration: none;
    background: var(--color-accent-emphasis)
}

.suggester li:hover small {
    color: var(--color-fg-on-emphasis)
}

.suggester li:hover .octicon {
    color: inherit !important
}

.suggester li[aria-selected=true],.suggester li.navigation-focus {
    color: var(--color-fg-on-emphasis);
    text-decoration: none;
    background: var(--color-accent-emphasis)
}

.suggester li[aria-selected=true] small,.suggester li.navigation-focus small {
    color: var(--color-fg-on-emphasis)
}

.suggester li[aria-selected=true] .octicon,.suggester li.navigation-focus .octicon {
    color: inherit !important
}

.suggester-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 30
}

@media(max-width: 544px) {
    .page-responsive .suggester-container {
        right:8px !important;
        left: 8px !important
    }

    .page-responsive .suggester li {
        padding: 8px 16px
    }
}

.avatar-parent-child {
    position: relative
}

.avatar-child {
    position: absolute;
    right: -15%;
    bottom: -9%;
    background-color: var(--color-canvas-default);
    border-radius: 4px;
    box-shadow: var(--color-avatar-child-shadow)
}

.CircleBadge {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-canvas-default);
    border-radius: 50%;
    box-shadow: var(--color-shadow-medium)
}

.CircleBadge-icon {
    max-width: 60% !important;
    height: auto !important;
    max-height: 55% !important
}

.CircleBadge--small {
    width: 56px;
    height: 56px
}

.CircleBadge--medium {
    width: 96px;
    height: 96px
}

.CircleBadge--large {
    width: 128px;
    height: 128px
}

.DashedConnection {
    position: relative
}

.DashedConnection::before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
    border-bottom: 2px dashed var(--color-border-default)
}

.DashedConnection .CircleBadge {
    position: relative
}

.branch-name {
    display: inline-block;
    padding: 2px 6px;
    font: 12px ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;
    color: var(--color-fg-muted);
    word-break: break-all;
    background-color: var(--color-accent-subtle);
    border-radius: 6px
}

.branch-name .octicon {
    margin: 1px -2px 0 0;
    color: var(--color-fg-muted)
}

a.branch-name {
    color: var(--color-accent-fg);
    background-color: var(--color-accent-subtle)
}

a.branch-name .octicon {
    color: var(--color-accent-fg)
}

.Header {
    z-index: 32;
    display: flex;
    padding: 16px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--color-header-text);
    background-color: var(--color-header-bg);
    align-items: center;
    flex-wrap: nowrap
}

.Header-item {
    display: flex;
    margin-right: 16px;
    align-self: stretch;
    align-items: center;
    flex-wrap: nowrap
}

.Header-item--full {
    flex: auto
}

.Header-link {
    font-weight: var(--base-text-weight-semibold, 600);
    color: var(--color-header-logo);
    white-space: nowrap
}

.Header-link:hover,.Header-link:focus {
    color: var(--color-header-text);
    text-decoration: none
}

.Header-input {
    color: var(--color-header-text);
    background-color: var(--color-header-search-bg);
    border: 1px solid var(--color-header-search-border);
    box-shadow: none
}

.Header-input::placeholder {
    color: rgba(255,255,255,.75)
}

.IssueLabel {
    display: inline-block;
    padding: 0 7px;
    font-size: 12px;
    font-weight: var(--base-text-weight-medium, 500);
    line-height: 18px;
    white-space: nowrap;
    border: 1px solid transparent;
    border-radius: 2em
}

.IssueLabel .g-emoji {
    position: relative;
    top: -0.05em;
    display: inline-block;
    font-size: 1em;
    line-height: 1
}

.IssueLabel:hover {
    text-decoration: none
}

.IssueLabel--big {
    padding-right: 10px;
    padding-left: 10px;
    line-height: 22px
}

.AnimatedEllipsis {
    display: inline-block;
    overflow: hidden;
    vertical-align: bottom
}

.AnimatedEllipsis::after {
    display: inline-block;
    content: "...";
    animation: AnimatedEllipsis-keyframes 1.2s steps(4, jump-none) infinite
}

@keyframes AnimatedEllipsis-keyframes {
    0% {
        transform: translateX(-100%)
    }
}

.markdown-body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    font-size: 16px;
    line-height: 1.5;
    word-wrap: break-word
}

.markdown-body::before {
    display: table;
    content: ""
}

.markdown-body::after {
    display: table;
    clear: both;
    content: ""
}

.markdown-body>*:first-child {
    margin-top: 0 !important
}

.markdown-body>*:last-child {
    margin-bottom: 0 !important
}

.markdown-body a:not([href]) {
    color: inherit;
    text-decoration: none
}

.markdown-body .absent {
    color: var(--color-danger-fg)
}

.markdown-body .anchor {
    float: left;
    padding-right: 4px;
    margin-left: -20px;
    line-height: 1
}

.markdown-body .anchor:focus {
    outline: none
}

.markdown-body p,.markdown-body blockquote,.markdown-body ul,.markdown-body ol,.markdown-body dl,.markdown-body table,.markdown-body pre,.markdown-body details {
    margin-top: 0;
    margin-bottom: 16px
}

.markdown-body hr {
    height: .25em;
    padding: 0;
    margin: 24px 0;
    background-color: var(--color-border-default);
    border: 0
}

.markdown-body blockquote {
    padding: 0 1em;
    color: var(--color-fg-muted);
    border-left: .25em solid var(--color-border-default)
}

.markdown-body blockquote>:first-child {
    margin-top: 0
}

.markdown-body blockquote>:last-child {
    margin-bottom: 0
}

.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 1.25
}

.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link {
    color: var(--color-fg-default);
    vertical-align: middle;
    visibility: hidden
}

.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor {
    text-decoration: none
}

.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link {
    visibility: visible
}

.markdown-body h1 tt,.markdown-body h1 code,.markdown-body h2 tt,.markdown-body h2 code,.markdown-body h3 tt,.markdown-body h3 code,.markdown-body h4 tt,.markdown-body h4 code,.markdown-body h5 tt,.markdown-body h5 code,.markdown-body h6 tt,.markdown-body h6 code {
    padding: 0 .2em;
    font-size: inherit
}

.markdown-body h1 {
    padding-bottom: .3em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-border-muted)
}

.markdown-body h2 {
    padding-bottom: .3em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-border-muted)
}

.markdown-body h3 {
    font-size: 1.25em
}

.markdown-body h4 {
    font-size: 1em
}

.markdown-body h5 {
    font-size: .875em
}

.markdown-body h6 {
    font-size: .85em;
    color: var(--color-fg-muted)
}

.markdown-body summary h1,.markdown-body summary h2,.markdown-body summary h3,.markdown-body summary h4,.markdown-body summary h5,.markdown-body summary h6 {
    display: inline-block
}

.markdown-body summary h1 .anchor,.markdown-body summary h2 .anchor,.markdown-body summary h3 .anchor,.markdown-body summary h4 .anchor,.markdown-body summary h5 .anchor,.markdown-body summary h6 .anchor {
    margin-left: -40px
}

.markdown-body summary h1,.markdown-body summary h2 {
    padding-bottom: 0;
    border-bottom: 0
}

.markdown-body ul,.markdown-body ol {
    padding-left: 2em
}

.markdown-body ul.no-list,.markdown-body ol.no-list {
    padding: 0;
    list-style-type: none
}

.markdown-body ol[type=a] {
    list-style-type: lower-alpha
}

.markdown-body ol[type=A] {
    list-style-type: upper-alpha
}

.markdown-body ol[type=i] {
    list-style-type: lower-roman
}

.markdown-body ol[type=I] {
    list-style-type: upper-roman
}

.markdown-body ol[type="1"] {
    list-style-type: decimal
}

.markdown-body div>ol:not([type]) {
    list-style-type: decimal
}

.markdown-body ul ul,.markdown-body ul ol,.markdown-body ol ol,.markdown-body ol ul {
    margin-top: 0;
    margin-bottom: 0
}

.markdown-body li>p {
    margin-top: 16px
}

.markdown-body li+li {
    margin-top: .25em
}

.markdown-body dl {
    padding: 0
}

.markdown-body dl dt {
    padding: 0;
    margin-top: 16px;
    font-size: 1em;
    font-style: italic;
    font-weight: var(--base-text-weight-semibold, 600)
}

.markdown-body dl dd {
    padding: 0 16px;
    margin-bottom: 16px
}

.markdown-body table {
    display: block;
    width: 100%;
    width: max-content;
    max-width: 100%;
    overflow: auto
}

.markdown-body table th {
    font-weight: var(--base-text-weight-semibold, 600)
}

.markdown-body table th,.markdown-body table td {
    padding: 6px 13px;
    border: 1px solid var(--color-border-default)
}

.markdown-body table td>:last-child {
    margin-bottom: 0
}

.markdown-body table tr {
    background-color: var(--color-canvas-default);
    border-top: 1px solid var(--color-border-muted)
}

.markdown-body table tr:nth-child(2n) {
    background-color: var(--color-canvas-subtle)
}

.markdown-body table img {
    background-color: transparent
}

.markdown-body img {
    max-width: 100%;
    box-sizing: content-box;
    background-color: var(--color-canvas-default)
}

.markdown-body img[align=right] {
    padding-left: 20px
}

.markdown-body img[align=left] {
    padding-right: 20px
}

.markdown-body .emoji {
    max-width: none;
    vertical-align: text-top;
    background-color: transparent
}

.markdown-body span.frame {
    display: block;
    overflow: hidden
}

.markdown-body span.frame>span {
    display: block;
    float: left;
    width: auto;
    padding: 7px;
    margin: 13px 0 0;
    overflow: hidden;
    border: 1px solid var(--color-border-default)
}

.markdown-body span.frame span img {
    display: block;
    float: left
}

.markdown-body span.frame span span {
    display: block;
    padding: 5px 0 0;
    clear: both;
    color: var(--color-fg-default)
}

.markdown-body span.align-center {
    display: block;
    overflow: hidden;
    clear: both
}

.markdown-body span.align-center>span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: center
}

.markdown-body span.align-center span img {
    margin: 0 auto;
    text-align: center
}

.markdown-body span.align-right {
    display: block;
    overflow: hidden;
    clear: both
}

.markdown-body span.align-right>span {
    display: block;
    margin: 13px 0 0;
    overflow: hidden;
    text-align: right
}

.markdown-body span.align-right span img {
    margin: 0;
    text-align: right
}

.markdown-body span.float-left {
    display: block;
    float: left;
    margin-right: 13px;
    overflow: hidden
}

.markdown-body span.float-left span {
    margin: 13px 0 0
}

.markdown-body span.float-right {
    display: block;
    float: right;
    margin-left: 13px;
    overflow: hidden
}

.markdown-body span.float-right>span {
    display: block;
    margin: 13px auto 0;
    overflow: hidden;
    text-align: right
}

.markdown-body code,.markdown-body tt {
    padding: .2em .4em;
    margin: 0;
    font-size: 85%;
    white-space: break-spaces;
    background-color: var(--color-neutral-muted);
    border-radius: 6px
}

code.notranslate {
}

.markdown-body code br,.markdown-body tt br {
    display: none
}

.markdown-body del code {
    text-decoration: inherit
}

.markdown-body samp {
    font-size: 85%
}

.markdown-body pre {
    word-wrap: normal
}

.markdown-body pre code {
    font-size: 100%
}

.markdown-body pre>code {
    padding: 0;
    margin: 0;
    word-break: normal;
    white-space: pre;
    background: transparent;
    border: 0
}

.markdown-body .highlight {
    margin-bottom: 16px
}

.markdown-body .highlight pre {
    margin-bottom: 0;
    word-break: normal
}

.markdown-body .highlight pre,.markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    color: var(--color-fg-default);
    background-color: var(--color-canvas-subtle);
    border-radius: 6px
}

.markdown-body pre code,.markdown-body pre tt {
    display: inline;
    max-width: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    line-height: inherit;
    word-wrap: normal;
    background-color: transparent;
    border: 0
}

.markdown-body .csv-data td,.markdown-body .csv-data th {
    padding: 5px;
    overflow: hidden;
    font-size: 12px;
    line-height: 1;
    text-align: left;
    white-space: nowrap
}

.markdown-body .csv-data .blob-num {
    padding: 10px 8px 9px;
    text-align: right;
    background: var(--color-canvas-default);
    border: 0
}

.markdown-body .csv-data tr {
    border-top: 0
}

.markdown-body .csv-data th {
    font-weight: var(--base-text-weight-semibold, 600);
    background: var(--color-canvas-subtle);
    border-top: 0
}

.markdown-body [data-footnote-ref]::before {
    content: "["
}

.markdown-body [data-footnote-ref]::after {
    content: "]"
}

.markdown-body .footnotes {
    font-size: 12px;
    color: var(--color-fg-muted);
    border-top: 1px solid var(--color-border-default)
}

.markdown-body .footnotes ol {
    padding-left: 16px
}

.markdown-body .footnotes ol ul {
    display: inline-block;
    padding-left: 16px;
    margin-top: 16px
}

.markdown-body .footnotes li {
    position: relative
}

.markdown-body .footnotes li:target::before {
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -24px;
    pointer-events: none;
    content: "";
    border: 2px solid var(--color-accent-emphasis);
    border-radius: 6px
}

.markdown-body .footnotes li:target {
    color: var(--color-fg-default)
}

.markdown-body .footnotes .data-footnote-backref g-emoji {
    font-family: monospace
}

.SelectMenu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    display: flex;
    padding: 16px;
    pointer-events: none;
    flex-direction: column
}

@media(min-width: 544px) {
    .SelectMenu {
        position:absolute;
        top: auto;
        right: auto;
        bottom: auto;
        left: auto;
        padding: 0
    }
}

.SelectMenu::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    content: "";
    background-color: var(--color-primer-canvas-backdrop)
}

@media(min-width: 544px) {
    .SelectMenu::before {
        display:none
    }
}

.SelectMenu-modal {
    position: relative;
    z-index: 99;
    display: flex;
    max-height: 66%;
    margin: auto 0;
    overflow: hidden;
    pointer-events: auto;
    flex-direction: column;
    background-color: var(--color-canvas-overlay);
    border: 1px solid var(--color-select-menu-backdrop-border);
    border-radius: 12px;
    box-shadow: var(--color-shadow-large);
    animation: SelectMenu-modal-animation .12s cubic-bezier(0, 0.1, 0.1, 1) backwards
}

@keyframes SelectMenu-modal-animation {
    0% {
        opacity: 0;
        transform: scale(0.9)
    }
}

@keyframes SelectMenu-modal-animation--sm {
    0% {
        opacity: 0;
        transform: translateY(-16px)
    }
}

@media(min-width: 544px) {
    .SelectMenu-modal {
        width:300px;
        height: auto;
        max-height: 480px;
        margin: 8px 0 16px 0;
        font-size: 12px;
        border-color: var(--color-border-default);
        border-radius: 6px;
        box-shadow: var(--color-shadow-large);
        animation-name: SelectMenu-modal-animation--sm
    }
}

.SelectMenu-header {
    display: flex;
    padding: 16px;
    flex: none;
    align-items: center;
    border-bottom: 1px solid var(--color-border-muted)
}

@media(min-width: 544px) {
    .SelectMenu-header {
        padding:7px 7px 7px 16px
    }
}

.SelectMenu-title {
    flex: 1;
    font-size: 14px;
    font-weight: var(--base-text-weight-semibold, 600)
}

@media(min-width: 544px) {
    .SelectMenu-title {
        font-size:inherit
    }
}

.SelectMenu-closeButton {
    padding: 16px;
    margin: -16px;
    line-height: 1;
    color: var(--color-fg-muted);
    background-color: transparent;
    border: 0
}

@media(min-width: 544px) {
    .SelectMenu-closeButton {
        padding:8px;
        margin: -8px -7px
    }
}

.SelectMenu-filter {
    padding: 16px;
    margin: 0;
    border-bottom: 1px solid var(--color-border-muted)
}

@media(min-width: 544px) {
    .SelectMenu-filter {
        padding:8px
    }
}

.SelectMenu-input {
    display: block;
    width: 100%
}

@media(min-width: 544px) {
    .SelectMenu-input {
        font-size:14px
    }
}

.SelectMenu-list {
    position: relative;
    padding: 0;
    margin: 0;
    margin-bottom: -1px;
    flex: auto;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--color-canvas-overlay);
    -webkit-overflow-scrolling: touch
}

.SelectMenu-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px;
    overflow: hidden;
    color: var(--color-fg-default);
    text-align: left;
    cursor: pointer;
    background-color: var(--color-canvas-overlay);
    border: 0;
    border-bottom: 1px solid var(--color-border-muted)
}

@media(min-width: 544px) {
    .SelectMenu-item {
        padding-top:7px;
        padding-bottom: 7px
    }
}

.SelectMenu-list--borderless .SelectMenu-item {
    border-bottom: 0
}

.SelectMenu-icon {
    width: 16px;
    margin-right: 8px;
    flex-shrink: 0
}

.SelectMenu-icon--check {
    visibility: hidden;
    transition: transform .12s cubic-bezier(0.5, 0.1, 1, 0.5),visibility 0s .12s linear;
    transform: scale(0)
}

.SelectMenu-tabs {
    display: flex;
    flex-shrink: 0;
    overflow-x: auto;
    overflow-y: hidden;
    box-shadow: inset 0 -1px 0 var(--color-border-muted);
    -webkit-overflow-scrolling: touch
}

.SelectMenu-tabs::-webkit-scrollbar {
    display: none
}

@media(min-width: 544px) {
    .SelectMenu-tabs {
        padding:8px 8px 0 8px
    }
}

.SelectMenu-tab {
    flex: 1;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: var(--base-text-weight-medium, 500);
    color: var(--color-fg-muted);
    text-align: center;
    background-color: transparent;
    border: 0;
    box-shadow: inset 0 -1px 0 var(--color-border-muted)
}

@media(min-width: 544px) {
    .SelectMenu-tab {
        flex:none;
        padding: 4px 16px;
        border: 1px solid transparent;
        border-bottom-width: 0;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px
    }
}

.SelectMenu-tab[aria-selected=true] {
    z-index: 1;
    color: var(--color-fg-default);
    cursor: default;
    background-color: var(--color-canvas-overlay);
    box-shadow: 0 0 0 1px var(--color-border-muted)
}

@media(min-width: 544px) {
    .SelectMenu-tab[aria-selected=true] {
        border-color:var(--color-border-muted);
        box-shadow: none
    }
}

.SelectMenu-message {
    padding: 7px 16px;
    text-align: center;
    background-color: var(--color-canvas-overlay);
    border-bottom: 1px solid var(--color-border-muted)
}

.SelectMenu-blankslate,.SelectMenu-loading {
    padding: 24px 16px;
    text-align: center;
    background-color: var(--color-canvas-overlay)
}

.SelectMenu-divider {
    padding: 4px 16px;
    margin: 0;
    font-size: 12px;
    font-weight: var(--base-text-weight-medium, 500);
    color: var(--color-fg-muted);
    background-color: var(--color-canvas-subtle);
    border-bottom: 1px solid var(--color-border-muted)
}

.SelectMenu-list--borderless .SelectMenu-divider {
    border-top: 1px solid var(--color-border-muted)
}

.SelectMenu-list--borderless .SelectMenu-divider:empty {
    padding: 0;
    border-top: 0
}

.SelectMenu-footer {
    z-index: 0;
    padding: 8px 16px;
    font-size: 12px;
    color: var(--color-fg-muted);
    text-align: center;
    border-top: 1px solid var(--color-border-muted)
}

@media(min-width: 544px) {
    .SelectMenu-footer {
        padding:7px 16px
    }
}

.SelectMenu--hasFilter .SelectMenu-modal {
    height: 80%;
    max-height: none;
    margin-top: 0
}

@media(min-width: 544px) {
    .SelectMenu--hasFilter .SelectMenu-modal {
        height:auto;
        max-height: 480px;
        margin-top: 8px
    }
}

.SelectMenu-tab:focus,.SelectMenu-item:focus {
    outline: 0
}

.SelectMenu-item:hover {
    text-decoration: none
}

.SelectMenu-item[aria-checked=true] {
    font-weight: var(--base-text-weight-medium, 500);
    color: var(--color-fg-default)
}

.SelectMenu-item[aria-checked=true] .SelectMenu-icon--check {
    visibility: visible;
    transition: transform .12s cubic-bezier(0, 0, 0.2, 1),visibility 0s linear;
    transform: scale(1)
}

.SelectMenu-item:disabled,.SelectMenu-item[aria-disabled=true] {
    color: var(--color-primer-fg-disabled);
    pointer-events: none
}

@media(hover: hover) {
    body:not(.intent-mouse) .SelectMenu-closeButton:focus,.SelectMenu-closeButton:hover {
        color:var(--color-fg-default)
    }

    .SelectMenu-closeButton:active {
        color: var(--color-fg-muted)
    }

    body:not(.intent-mouse) .SelectMenu-item:focus,.SelectMenu-item:hover {
        background-color: var(--color-neutral-subtle)
    }

    .SelectMenu-item:active {
        background-color: var(--color-canvas-subtle)
    }

    body:not(.intent-mouse) .SelectMenu-tab:focus {
        background-color: var(--color-select-menu-tap-focus-bg)
    }

    .SelectMenu-tab:hover {
        color: var(--color-fg-default)
    }

    .SelectMenu-tab:not([aria-selected=true]):active {
        color: var(--color-fg-default);
        background-color: var(--color-canvas-subtle)
    }
}

@media(hover: none) {
    .SelectMenu-item:focus,.SelectMenu-item:active {
        background-color:var(--color-canvas-subtle)
    }

    .SelectMenu-item {
        -webkit-tap-highlight-color: var(--color-select-menu-tap-highlight)
    }
}

.Toast {
    display: flex;
    margin: 8px;
    color: var(--color-fg-default);
    background-color: var(--color-canvas-default);
    border-radius: 6px;
    box-shadow: inset 0 0 0 1px var(--color-border-default),var(--color-shadow-large)
}

@media(min-width: 544px) {
    .Toast {
        width:max-content;
        max-width: 450px;
        margin: 16px
    }
}

.Toast-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    flex-shrink: 0;
    color: var(--color-fg-on-emphasis);
    background-color: var(--color-accent-emphasis);
    border: 1px solid transparent;
    border-right: 0;
    border-top-left-radius: inherit;
    border-bottom-left-radius: inherit
}

.Toast-content {
    padding: 16px
}

.Toast-dismissButton {
    max-height: 54px;
    padding: 16px;
    color: inherit;
    background-color: transparent;
    border: 0
}

.Toast-dismissButton:hover {
    opacity: .7
}

.Toast-dismissButton:active {
    opacity: .5
}

.Toast--loading {
    color: var(--color-fg-default);
    box-shadow: inset 0 0 0 1px var(--color-border-default),var(--color-shadow-large)
}

.Toast--loading .Toast-icon {
    background-color: var(--color-neutral-emphasis)
}

.Toast--error {
    color: var(--color-fg-default);
    box-shadow: inset 0 0 0 1px var(--color-border-default),var(--color-shadow-large)
}

.Toast--error .Toast-icon {
    background-color: var(--color-danger-emphasis)
}

.Toast--warning {
    color: var(--color-fg-default);
    box-shadow: inset 0 0 0 1px var(--color-border-default),var(--color-shadow-large)
}

.Toast--warning .Toast-icon {
    background-color: var(--color-attention-emphasis)
}

.Toast--success {
    color: var(--color-fg-default);
    box-shadow: inset 0 0 0 1px var(--color-border-default),var(--color-shadow-large)
}

.Toast--success .Toast-icon {
    background-color: var(--color-success-emphasis)
}

.Toast--animateIn {
    animation: Toast--animateIn .18s cubic-bezier(0.22, 0.61, 0.36, 1) backwards
}

@keyframes Toast--animateIn {
    0% {
        opacity: 0;
        transform: translateY(100%)
    }
}

.Toast--animateOut {
    animation: Toast--animateOut .18s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards
}

@keyframes Toast--animateOut {
    100% {
        pointer-events: none;
        opacity: 0;
        transform: translateY(100%)
    }
}

.Toast--spinner {
    animation: Toast--spinner 1000ms linear infinite
}

@keyframes Toast--spinner {
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
}

[popover] {
    background: canvas;
    border: solid;
    color: canvastext;
    height: -moz-fit-content;
    height: fit-content;
    inset: 0;
    margin: auto;
    overflow: auto;
    padding: .25em;
    position: fixed;
    width: -moz-fit-content;
    width: fit-content;
    z-index: 2147483647
}

@supports not selector([popover]:open) {
    [popover]:not(.\:open) {
        display: none
    }
}

[popover][anchor] {
    inset: auto
}

:root {
    --primer-actionListContent-paddingBlock: var(--primer-control-medium-paddingBlock,6px)
}

.ActionListWrap {
    list-style: none
}

.ActionListWrap--inset {
    padding: var(--base-size-8, 8px)
}

.ActionListWrap--divided .ActionListItem-label:before {
    height: 1px
}

.ActionListWrap--divided .ActionListItem-descriptionWrap--inline:before,.ActionListWrap--divided .ActionListItem-label:before {
    background: var(--color-action-list-item-inline-divider);
    content: "";
    display: block;
    position: absolute;
    top: calc(var(--primer-actionListContent-paddingBlock)*-1);
    width: 100%
}

.ActionListWrap--divided .ActionListItem-descriptionWrap--inline:before {
    height: var(--primer-borderWidth-thin, 1px)
}

.ActionListWrap--divided .ActionListItem-descriptionWrap--inline .ActionListItem-label:before {
    content: unset
}

.ActionList-sectionDivider+.ActionListItem .ActionListItem-descriptionWrap--inline:before,.ActionList-sectionDivider+.ActionListItem .ActionListItem-label:before,.ActionListItem:first-of-type .ActionListItem-descriptionWrap--inline:before,.ActionListItem:first-of-type .ActionListItem-label:before,.ActionListWrap--divided .ActionListItem--navActive .ActionListItem-label:before,.ActionListWrap--divided .ActionListItem--navActive+.ActionListItem .ActionListItem-label:before {
    visibility: hidden
}

.ActionListItem {
    background-color: initial;
    border-radius: var(--primer-borderRadius-medium, 6px);
    list-style: none;
    position: relative
}

.ActionListItem:active,.ActionListItem:hover {
    cursor: pointer
}

@media(hover: hover) {
    .ActionListItem:hover .ActionListItem-descriptionWrap--inline:before,.ActionListItem:hover .ActionListItem-label:before,.ActionListItem:hover+.ActionListItem .ActionListItem-descriptionWrap--inline:before,.ActionListItem:hover+.ActionListItem .ActionListItem-label:before {
        visibility:hidden
    }
}

.ActionListItem[hidden]+.ActionList-sectionDivider {
    display: none
}

.ActionListItem.ActionListItem--hasSubItem>.ActionListContent {
    z-index: 1
}

@media(hover: hover) {
    .ActionListItem.ActionListItem--hasSubItem>.ActionListContent:hover {
        background-color:var(--color-action-list-item-default-hover-bg)
    }
}

.ActionListItem.ActionListItem--hasSubItem>.ActionListContent:active {
    background-color: var(--color-action-list-item-default-active-bg)
}

@media(hover: hover) {
    .ActionListItem.ActionListItem--hasSubItem>.ActionListContent:hover,.ActionListItem:not(.ActionListItem--hasSubItem):hover {
        background-color:var(--color-action-list-item-default-hover-bg);
        cursor: pointer
    }

    .ActionListItem.ActionListItem--hasSubItem>.ActionListContent:hover:not(.ActionListItem--navActive,:focus-visible),.ActionListItem:not(.ActionListItem--hasSubItem):hover:not(.ActionListItem--navActive,:focus-visible) {
        box-shadow: var(--primer-borderInset-thin, 1px) var(--color-action-list-item-default-active-border);
        outline: solid var(--primer-borderWidth-thin, 1px) #0000;
        outline-offset: calc(var(--primer-borderWidth-thin, 1px)*-1)
    }
}

.ActionListItem.ActionListItem--hasSubItem>.ActionListContent:active,.ActionListItem:not(.ActionListItem--hasSubItem):active {
    background: var(--color-action-list-item-default-active-bg)
}

.ActionListItem.ActionListItem--hasSubItem>.ActionListContent:active:not(.ActionListItem--navActive),.ActionListItem:not(.ActionListItem--hasSubItem):active:not(.ActionListItem--navActive) {
    box-shadow: var(--primer-borderInset-thin, 1px) var(--color-action-list-item-default-active-border);
    outline: solid var(--primer-borderWidth-thin, 1px) #0000;
    outline-offset: calc(var(--primer-borderWidth-thin, 1px)*-1)
}

.ActionListItem.ActionListItem--hasSubItem>.ActionListContent:active .ActionListItem-label:before,.ActionListItem.ActionListItem--hasSubItem>.ActionListContent:active+.ActionListItem .ActionListItem-label:before,.ActionListItem:not(.ActionListItem--hasSubItem):active .ActionListItem-label:before,.ActionListItem:not(.ActionListItem--hasSubItem):active+.ActionListItem .ActionListItem-label:before {
    visibility: hidden
}

.ActionListItem[aria-checked=true] .ActionListItem-multiSelectCheckmark,.ActionListItem[aria-selected=true] .ActionListItem-multiSelectCheckmark {
    opacity: 1;
    transition: visibility 0 linear 0,opacity 50ms;
    visibility: visible
}

.ActionListItem[aria-checked=true] .ActionListItem-singleSelectCheckmark,.ActionListItem[aria-selected=true] .ActionListItem-singleSelectCheckmark {
    visibility: visible
}

@media screen and (prefers-reduced-motion: no-preference) {
    .ActionListItem[aria-checked=true] .ActionListItem-singleSelectCheckmark,.ActionListItem[aria-selected=true] .ActionListItem-singleSelectCheckmark {
        animation: checkmarkIn .2s cubic-bezier(0.11, 0, 0.5, 0) forwards
    }

    @keyframes checkmarkIn {
        0% {
            clip-path: inset(16px 0 0 0)
        }

        to {
            clip-path: inset(0 0 0 0)
        }
    }
}

.ActionListItem[aria-checked=true] .ActionListItem-multiSelectIcon .ActionListItem-multiSelectIconRect,.ActionListItem[aria-selected=true] .ActionListItem-multiSelectIcon .ActionListItem-multiSelectIconRect {
    fill: var(--color-accent-fg);
    stroke: var(--color-accent-fg);
    stroke-width: var(--primer-borderWidth-thin, 1px)
}

.ActionListItem[aria-checked=true] .ActionListItem-multiSelectIcon .ActionListItem-multiSelectCheckmark,.ActionListItem[aria-selected=true] .ActionListItem-multiSelectIcon .ActionListItem-multiSelectCheckmark {
    fill: var(--color-fg-on-emphasis)
}

.ActionListItem[aria-checked=false] .ActionListItem-multiSelectCheckmark,.ActionListItem[aria-selected=false] .ActionListItem-multiSelectCheckmark {
    opacity: 0;
    transition: visibility 0 linear 50ms,opacity 50ms;
    visibility: hidden
}

.ActionListItem[aria-checked=false] .ActionListItem-singleSelectCheckmark,.ActionListItem[aria-selected=false] .ActionListItem-singleSelectCheckmark {
    clip-path: inset(16px 0 0 0);
    transition: visibility 0s linear .2s;
    visibility: hidden
}

@media screen and (prefers-reduced-motion: no-preference) {
    .ActionListItem[aria-checked=false] .ActionListItem-singleSelectCheckmark,.ActionListItem[aria-selected=false] .ActionListItem-singleSelectCheckmark {
        animation: checkmarkOut .2s cubic-bezier(0.11, 0, 0.5, 0) forwards
    }

    @keyframes checkmarkOut {
        0% {
            clip-path: inset(0 0 0 0)
        }

        to {
            clip-path: inset(16px 0 0 0)
        }
    }
}

.ActionListItem[aria-checked=false] .ActionListItem-multiSelectIcon .ActionListItem-multiSelectIconRect,.ActionListItem[aria-selected=false] .ActionListItem-multiSelectIcon .ActionListItem-multiSelectIconRect {
    fill: var(--color-canvas-default);
    stroke: var(--color-border-default);
    stroke-width: var(--primer-borderWidth-thin, 1px)
}

.ActionListItem[aria-checked=false] .ActionListItem-multiSelectIconRect,.ActionListItem[aria-selected=false] .ActionListItem-multiSelectIconRect {
    fill: var(--color-canvas-default);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default)
}

.ActionListItem[aria-selected=true] {
    background: var(--color-action-list-item-default-selected-bg);
    font-weight: var(--base-text-weight-normal, 400)
}

@media(hover: hover) {
    .ActionListItem[aria-selected=true]:hover {
        background-color:var(--color-action-list-item-default-hover-bg)
    }
}

.ActionListItem[aria-selected=true]+.ActionListItem:before,.ActionListItem[aria-selected=true]:before {
    visibility: hidden
}

.ActionListItem[aria-selected=true]:after {
    background: var(--color-accent-fg);
    border-radius: var(--primer-borderRadius-medium, 6px);
    content: "";
    height: var(--base-size-24, 24px);
    left: calc(var(--base-size-4, 4px)*-1);
    position: absolute;
    top: calc(50% - 12px);
    width: var(--base-size-4, 4px)
}

.ActionListItem.ActionListItem--navActive:not(.ActionListItem--subItem) .ActionListItem-label {
    font-weight: var(--base-text-weight-semibold, 600)
}

.ActionListItem.ActionListItem--navActive:not(.ActionListItem--danger) {
    background: var(--color-action-list-item-default-selected-bg)
}

@media(hover: hover) {
    .ActionListItem.ActionListItem--navActive:not(.ActionListItem--danger):hover {
        background-color:var(--color-action-list-item-default-hover-bg)
    }
}

.ActionListItem.ActionListItem--navActive:not(.ActionListItem--danger)+.ActionListItem:before,.ActionListItem.ActionListItem--navActive:not(.ActionListItem--danger):before {
    visibility: hidden
}

.ActionListItem.ActionListItem--navActive:not(.ActionListItem--danger):after {
    background: var(--color-accent-fg);
    border-radius: var(--primer-borderRadius-medium, 6px);
    content: "";
    height: var(--base-size-24, 24px);
    left: calc(var(--base-size-8, 8px)*-1);
    position: absolute;
    top: calc(50% - 12px);
    width: var(--base-size-4, 4px)
}

.ActionListItem.ActionListItem--disabled .ActionListContent .ActionListItem-description,.ActionListItem.ActionListItem--disabled .ActionListContent .ActionListItem-label,.ActionListItem[aria-disabled=true] .ActionListContent .ActionListItem-description,.ActionListItem[aria-disabled=true] .ActionListContent .ActionListItem-label {
    color: var(--color-primer-fg-disabled)
}

.ActionListItem.ActionListItem--disabled .ActionListContent .ActionListItem-visual,.ActionListItem[aria-disabled=true] .ActionListContent .ActionListItem-visual {
    fill: var(--color-primer-fg-disabled)
}

@media(hover: hover) {
    .ActionListItem.ActionListItem--disabled:hover,.ActionListItem[aria-disabled=true]:hover {
        background-color:initial;
        cursor: not-allowed
    }
}

.ActionListItem.ActionListItem--danger .ActionListItem-label,.ActionListItem.ActionListItem--danger .ActionListItem-visual {
    color: var(--color-danger-fg)
}

@media(hover: hover) {
    .ActionListItem.ActionListItem--danger:hover {
        background:var(--color-action-list-item-danger-hover-bg)
    }

    .ActionListItem.ActionListItem--danger:hover .ActionListItem-label,.ActionListItem.ActionListItem--danger:hover .ActionListItem-visual {
        color: var(--color-action-list-item-danger-hover-text)
    }
}

.ActionListItem.ActionListItem--danger .ActionListContent:active {
    background: var(--color-action-list-item-danger-active-bg)
}

.ActionListItem.ActionListItem--danger .ActionListContent:active .ActionListItem-label,.ActionListItem.ActionListItem--danger .ActionListContent:active .ActionListItem-visual {
    color: var(--color-action-list-item-danger-hover-text)
}

.ActionListContent {
    -webkit-tap-highlight-color: transparent;
    align-items: start;
    background-color: initial;
    border: none;
    border-radius: var(--primer-borderRadius-medium, 6px);
    color: var(--color-fg-default);
    display: grid;
    grid-template-areas: "leadingAction leadingVisual label trailingVisual trailingAction";
    grid-template-columns: min-content min-content minmax(0, auto) min-content min-content;
    grid-template-rows: min-content;
    padding-block:var(--primer-actionListContent-paddingBlock);padding-inline: var(--primer-control-medium-paddingInline-condensed, 8px);
    position: relative;
    text-align: left;
    touch-action: manipulation;
    transition: background 33.333ms linear;
    -webkit-user-select: none;
    user-select: none;
    width: 100%
}

.ActionListContent>:not(:last-child) {
    margin-right: var(--primer-control-medium-gap, 8px)
}

.ActionListContent:hover {
    text-decoration: none
}

.ActionListContent[aria-disabled=true] .ActionListItem-description,.ActionListContent[aria-disabled=true] .ActionListItem-label {
    color: var(--color-primer-fg-disabled)
}

.ActionListContent[aria-disabled=true] .ActionListItem-visual {
    fill: var(--color-primer-fg-disabled)
}

@media(hover: hover) {
    .ActionListContent[aria-disabled=true]:hover {
        background-color:initial;
        cursor: not-allowed
    }
}

@media screen and (prefers-reduced-motion: no-preference) {
    .ActionListContent[aria-expanded]+.ActionList--subGroup {
        transition: opacity .16s cubic-bezier(0.25, 1, 0.5, 1),transform .16s cubic-bezier(0.25, 1, 0.5, 1)
    }
}

.ActionListContent[aria-expanded]+.ActionList--subGroup .ActionListContent {
    padding-left: var(--base-size-24, 24px)
}

.ActionListContent.ActionListContent--visual16[aria-expanded]+.ActionList--subGroup .ActionListContent {
    padding-left: var(--base-size-32, 32px)
}

.ActionListContent.ActionListContent--visual20[aria-expanded]+.ActionList--subGroup .ActionListContent {
    padding-left: var(--base-size-36, 36px)
}

.ActionListContent.ActionListContent--visual24[aria-expanded]+.ActionList--subGroup .ActionListContent {
    padding-left: var(--base-size-40, 40px)
}

.ActionListContent[aria-expanded=true] .ActionListItem-collapseIcon {
    transform: scaleY(-1);
    transition: transform .12s linear
}

.ActionListContent[aria-expanded=true]+.ActionList--subGroup {
    height: auto;
    opacity: 1;
    overflow: visible;
    transform: translateY(0);
    visibility: visible
}

.ActionListContent.ActionListContent--hasActiveSubItem[aria-expanded=true]>.ActionListItem-label {
    font-weight: var(--base-text-weight-semibold, 600)
}

.ActionListContent[aria-expanded=false] .ActionListItem-collapseIcon {
    transform: scaleY(1);
    transition: transform .12s linear
}

.ActionListContent[aria-expanded=false]+.ActionList--subGroup {
    height: 0;
    opacity: 0;
    overflow: hidden;
    transform: translateY(calc(var(--base-size-16, 16px) * -1));
    visibility: hidden
}

.ActionListContent.ActionListContent--hasActiveSubItem[aria-expanded=false] {
    background: var(--color-action-list-item-default-selected-bg)
}

.ActionListContent.ActionListContent--hasActiveSubItem[aria-expanded=false] .ActionListItem-label {
    font-weight: var(--base-text-weight-semibold, 600)
}

.ActionListContent.ActionListContent--hasActiveSubItem[aria-expanded=false]+.ActionListItem:before,.ActionListContent.ActionListContent--hasActiveSubItem[aria-expanded=false]:before {
    visibility: hidden
}

.ActionListContent.ActionListContent--hasActiveSubItem[aria-expanded=false]:after {
    background: var(--color-accent-fg);
    border-radius: var(--primer-borderRadius-medium, 6px);
    content: "";
    height: var(--base-size-24, 24px);
    left: calc(var(--base-size-8, 8px)*-1);
    position: absolute;
    top: calc(50% - 12px);
    width: var(--base-size-4, 4px)
}

.ActionListContent.ActionListContent--sizeLarge {
    --primer-actionListContent-paddingBlock: var(--primer-control-large-paddingBlock,0.625rem)
}

.ActionListContent.ActionListContent--sizeXLarge {
    --primer-actionListContent-paddingBlock: var(--primer-control-xlarge-paddingBlock,0.875rem)
}

@media(pointer: coarse) {
    .ActionListContent {
        --primer-actionListContent-paddingBlock:var(--primer-control-large-paddingBlock,0.625rem)
    }
}

.ActionListContent.ActionListContent--blockDescription .ActionListItem-visual {
    place-self: start
}

.ActionListItem-action--leading {
    grid-area: leadingAction
}

.ActionListItem-visual--leading {
    grid-area: leadingVisual
}

.ActionListItem-visual--trailing {
    grid-area: trailingVisual
}

.ActionListItem-action--trailing {
    grid-area: trailingAction
}

.ActionListItem-descriptionWrap {
    display: flex;
    flex-direction: column;
    gap: var(--base-size-4, 4px);
    grid-area: label
}

.ActionListItem-descriptionWrap .ActionListItem-label {
    font-weight: var(--base-text-weight-semibold, 600)
}

.ActionListItem-descriptionWrap--inline {
    align-items: baseline;
    flex-direction: row;
    gap: var(--base-size-8, 8px);
    position: relative
}

.ActionListItem-description {
    color: var(--color-fg-muted);
    font-size: var(--primer-text-body-size-small, 12px);
    font-weight: var(--base-text-weight-normal, 400);
    line-height: var(--primer-text-body-lineHeight-small, 1.66667)
}

.ActionListItem-action,.ActionListItem-visual {
    fill: var(--color-fg-muted);
    align-items: center;
    color: var(--color-fg-muted);
    display: flex;
    min-height: var(--primer-control-medium-lineBoxHeight, 20px);
    pointer-events: none
}

.ActionListItem-label {
    color: var(--color-fg-default);
    font-size: var(--primer-text-body-size-medium, 14px);
    font-weight: var(--base-text-weight-normal, 400);
    grid-area: label;
    line-height: var(--primer-text-body-lineHeight-medium, 1.42857);
    position: relative
}

.ActionListItem-label--truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.ActionListItem--subItem>.ActionListContent>.ActionListItem-label {
    font-size: var(--primer-text-body-size-small, 12px);
    line-height: var(--primer-text-body-lineHeight-small, 1.66667)
}

.ActionListItem--withActions {
    align-items: center;
    display: flex;
    flex-wrap: nowrap
}

.ActionListItem-trailingAction {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.ActionListItem--trailingActionHover .ActionListItem-trailingAction {
    visibility: hidden
}

.ActionListItem--trailingActionHover:focus-within .ActionListItem-trailingAction,.ActionListItem--trailingActionHover:hover .ActionListItem-trailingAction {
    visibility: visible
}

.ActionList-sectionDivider:not(:empty) {
    color: var(--color-fg-muted);
    display: flex;
    flex-direction: column;
    font-size: var(--primer-text-body-size-small, 12px);
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: var(--primer-text-body-lineHeight-small, 1.66667);
    padding-block:var(--base-size-8, 8px);padding-inline: var(--primer-actionListContent-paddingBlock)
}

.ActionList-sectionDivider:empty {
    background: var(--color-action-list-item-inline-divider);
    border: 0;
    display: block;
    height: var(--primer-borderWidth-thin, 1px);
    list-style: none;
    margin-block-end:var(--base-size-8, 8px);margin-block-start: calc(var(--base-size-8, 8px) - var(--primer-borderWidth-thin, 1px));
    margin-inline:calc(var(--base-size-8, 8px)*-1);padding: 0
}

.ActionList-sectionDivider .ActionList-sectionDivider-title {
    color: var(--color-fg-muted);
    font-size: var(--primer-text-body-size-small, 12px);
    font-weight: var(--base-text-weight-semibold, 600)
}

.ActionList-sectionDivider--filled {
    background: var(--color-canvas-subtle);
    border-bottom: solid var(--primer-borderWidth-thin, 1px) var(--color-action-list-item-inline-divider);
    border-top: solid var(--primer-borderWidth-thin, 1px) var(--color-action-list-item-inline-divider);
    margin-block-end:var(--base-size-8, 8px);margin-block-start: calc(var(--base-size-8, 8px) - var(--primer-borderWidth-thin, 1px));
    margin-inline:calc(var(--base-size-8, 8px)*-1)}

.ActionList-sectionDivider--filled: empty {
    box-sizing:border-box;
    height: var(--base-size-8, 8px)
}

.ActionList-sectionDivider--filled:first-child {
    margin-block-start:0}

.autocomplete-label-stacked {
    display: block;
    margin-bottom: 6px
}

.autocomplete-label-inline {
    display: inline;
    margin-right: 6px
}

@media(max-width: 543.98px) {
    .autocomplete-label-inline {
        display:block;
        margin-bottom: 6px
    }
}

.autocomplete-body {
    display: inline;
    position: relative
}

.autocomplete-embedded-icon-wrap {
    align-items: center;
    display: inline-flex;
    padding: 4px 8px
}

.autocomplete-embedded-icon-wrap:focus-within {
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px var(--color-accent-fg);
    outline: none
}

.autocomplete-embedded-icon-wrap .form-control {
    border: none;
    box-shadow: none;
    margin-left: 8px;
    padding: 0
}

.autocomplete-embedded-icon-wrap .form-control:focus {
    box-shadow: none
}

.autocomplete-embedded-icon-wrap .form-control:focus-visible {
    box-shadow: none
}

.autocomplete-results {
    background: var(--color-canvas-overlay);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    border-radius: var(--primer-borderRadius-medium, 6px);
    box-shadow: var(--color-shadow-medium);
    font-size: 13px;
    left: 0;
    list-style: none;
    max-height: 20em;
    min-width: 100%;
    overflow-y: auto;
    position: absolute;
    width: max-content;
    z-index: 99
}

.autocomplete-item {
    background-color: var(--color-canvas-overlay);
    border: 0;
    color: var(--color-fg-default);
    cursor: pointer;
    display: block;
    font-weight: var(--base-text-weight-semibold, 600);
    overflow: hidden;
    padding: 4px 8px;
    text-align: left;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%
}

.autocomplete-item:hover {
    background-color: var(--color-accent-emphasis);
    color: var(--color-fg-on-emphasis);
    text-decoration: none
}

.autocomplete-item:hover * {
    color: inherit !important
}

.autocomplete-item.navigation-focus,.autocomplete-item.selected,.autocomplete-item[aria-selected=true] {
    background-color: var(--color-accent-emphasis);
    color: var(--color-fg-on-emphasis);
    text-decoration: none
}

.autocomplete-item.navigation-focus *,.autocomplete-item.selected *,.autocomplete-item[aria-selected=true] * {
    color: inherit !important
}

.Banner {
    background-image: linear-gradient(var(--color-accent-subtle), var(--color-accent-subtle));
    border: var(--primer-borderWidth-thin, max(1px, 0.0625rem)) solid var(--color-accent-muted);
    border-radius: var(--primer-borderRadius-medium, 6px);
    color: var(--color-fg-default);
    display: grid;
    grid-auto-flow: column;
    grid-template-areas: "visual message actions close";
    grid-template-columns: min-content 1fr minmax(0, auto) min-content;
    grid-template-rows: min-content;
    padding: var(--base-size-8, 8px);
    position: relative
}

@media(max-width: 543.98px) {
    .Banner {
        grid-template-areas:"visual message close" ". actions actions";
        grid-template-columns: min-content 1fr min-content;
        grid-template-rows: min-content min-content
    }

    .Banner .Banner-actions {
        margin: var(--base-size-8, 8px) 0 0 var(--base-size-8, 8px)
    }
}

.Banner .Banner-visual {
    align-self: start;
    display: grid;
    grid-area: visual;
    padding: var(--base-size-6, 6px) var(--base-size-8, 8px)
}

.Banner .Banner-visual>.octicon {
    margin-block:calc(var(--base-size-4, 4px)/2)}

.Banner .Banner-visual>* {
    align-self: center
}

.Banner .Banner-message {
    align-self: center;
    grid-area: message;
    padding: var(--base-size-6, 6px) var(--base-size-8, 8px)
}

.Banner .Banner-message p:last-child {
    margin-bottom: 0
}

.Banner .Banner-message .Banner-title:not(:only-child) {
    font-weight: var(--base-text-weight-semibold, 600);
    margin-bottom: 0
}

.Banner .Banner-actions {
    grid-area: actions
}

.Banner .Banner-actions:last-child {
    align-self: center
}

.Banner .Banner-close {
    grid-area: close;
    margin-left: var(--primer-controlStack-medium-gap-condensed, 8px)
}

.Banner .Banner-visual .octicon {
    color: var(--color-accent-fg)
}

.Banner.Banner--warning {
    background-image: linear-gradient(var(--color-attention-subtle), var(--color-attention-subtle));
    border-color: var(--color-attention-muted);
    color: var(--color-fg-default)
}

.Banner.Banner--warning .Banner-visual .octicon {
    color: var(--color-attention-fg)
}

.Banner.Banner--error {
    background-image: linear-gradient(var(--color-danger-subtle), var(--color-danger-subtle));
    border-color: var(--color-danger-muted);
    color: var(--color-fg-default)
}

.Banner.Banner--error .Banner-visual .octicon {
    color: var(--color-danger-fg)
}

.Banner.Banner--success {
    background-image: linear-gradient(var(--color-success-subtle), var(--color-success-subtle));
    border-color: var(--color-success-muted);
    color: var(--color-fg-default)
}

.Banner.Banner--success .Banner-visual .octicon {
    color: var(--color-success-fg)
}

.Banner.Banner--full {
    border-left: 0;
    border-radius: 0;
    border-right: 0;
    margin-top: calc(var(--primer-borderWidth-thin, max(1px, 0.0625rem))*-1)
}

@media(max-width: 767.98px) {
    .Banner.Banner--full-whenNarrow {
        border-left:0;
        border-radius: 0;
        border-right: 0;
        margin-top: calc(var(--primer-borderWidth-thin, max(1px, 0.0625rem))*-1)
    }
}

.Overlay--hidden {
    display: none !important
}

.Overlay--visibilityHidden {
    height: 0;
    opacity: 0;
    overflow: hidden;
    visibility: hidden
}

.Overlay {
    background-color: var(--color-canvas-overlay);
    border-radius: var(--primer-borderRadius-large, 12px);
    box-shadow: var(--color-overlay-shadow);
    display: flex;
    flex-direction: column;
    max-height: min(100vh - 2rem,var(--overlay-height));
    min-width: 192px;
    opacity: 1;
    white-space: normal;
    width: min(var(--overlay-width),100vw - 2rem)
}

.Overlay.Overlay--size-auto {
    max-height: calc(100vh - 2rem);
    max-width: calc(100vw - 2rem);
    min-width: 192px
}

.Overlay.Overlay--size-full {
    height: 100vh;
    width: 100vw
}

.Overlay.Overlay--size-xsmall {
    --overlay-width: 192px;
    max-height: calc(100vh - 2rem)
}

.Overlay.Overlay--size-small {
    --overlay-height: 256px;
    --overlay-width: 320px
}

.Overlay.Overlay--size-small-portrait {
    --overlay-height: 432px;
    --overlay-width: 320px
}

.Overlay.Overlay--size-medium {
    --overlay-height: 320px;
    --overlay-width: 480px
}

.Overlay.Overlay--size-medium-portrait {
    --overlay-height: 600px;
    --overlay-width: 480px
}

.Overlay.Overlay--size-large {
    --overlay-height: 432px;
    --overlay-width: 640px
}

.Overlay.Overlay--size-xlarge {
    --overlay-height: 600px;
    --overlay-width: 960px
}

.Overlay.Overlay--height-auto {
    height: auto
}

.Overlay.Overlay--height-xsmall {
    height: min(192px,100vh - 2rem)
}

.Overlay.Overlay--height-small {
    height: min(256px,100vh - 2rem)
}

.Overlay.Overlay--height-medium {
    height: min(320px,100vh - 2rem)
}

.Overlay.Overlay--height-large {
    height: min(432px,100vh - 2rem)
}

.Overlay.Overlay--height-xlarge {
    height: min(600px,100vh - 2rem)
}

.Overlay.Overlay--width-auto {
    width: auto
}

.Overlay.Overlay--width-small {
    width: min(256px,100vw - 2rem)
}

.Overlay.Overlay--width-medium {
    width: min(320px,100vw - 2rem)
}

.Overlay.Overlay--width-large {
    width: min(480px,100vw - 2rem)
}

.Overlay.Overlay--width-xlarge {
    width: min(640px,100vw - 2rem)
}

.Overlay.Overlay--width-xxlarge {
    width: min(960px,100vw - 2rem)
}

@media screen and (prefers-reduced-motion: no-preference) {
    .Overlay.Overlay--motion-scaleFade {
        animation: Overlay--motion-scaleFade .2s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running
    }
}

@keyframes Overlay--motion-scaleFade {
    0% {
        opacity: 0;
        transform: scale(0.5)
    }

    to {
        opacity: 1;
        transform: scale(1)
    }
}

.Overlay-form {
    flex-grow: 1;
    overflow: auto
}

.Overlay-form,.Overlay-header {
    display: flex;
    flex-direction: column
}

.Overlay-header {
    z-index: 1
}

.Overlay-header.Overlay-header--divided {
    box-shadow: inset 0 calc(var(--primer-borderWidth-thin, 1px)*-1) var(--color-border-default);
    padding-bottom: var(--primer-stack-padding-condensed, 8px)
}

.Overlay-header.Overlay-header--divided+.Overlay-body {
    padding-top: var(--primer-stack-padding-normal, 16px)
}

.Overlay-header.Overlay-header--large .Overlay-headerContentWrap .Overlay-titleWrap {
    gap: var(--primer-stack-gap-condensed, 8px)
}

.Overlay-header.Overlay-header--large .Overlay-headerContentWrap .Overlay-titleWrap .Overlay-title {
    font-size: var(--primer-text-title-size-medium, 20px)
}

.Overlay-header.Overlay-header--large .Overlay-headerContentWrap .Overlay-titleWrap .Overlay-description {
    font-size: var(--primer-text-body-size-medium, 14px)
}

.Overlay-header .Overlay-headerContentWrap {
    align-items: flex-start;
    display: flex;
    gap: var(--primer-stack-gap-condensed, 8px);
    padding: var(--primer-stack-gap-condensed, 8px) var(--primer-stack-gap-condensed, 8px) 0 var(--primer-stack-gap-condensed, 8px)
}

.Overlay-header .Overlay-headerContentWrap .Overlay-actionWrap {
    display: flex;
    flex-direction: row;
    gap: var(--primer-stack-gap-condensed, 8px)
}

.Overlay-header .Overlay-headerContentWrap .Overlay-titleWrap {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: var(--primer-control-small-gap, 4px);
    padding: calc(var(--primer-stack-gap-condensed, 8px)*.75) 0 calc(var(--primer-stack-gap-condensed, 8px)*.75) var(--primer-stack-gap-condensed, 8px)
}

.Overlay-header .Overlay-headerContentWrap .Overlay-titleWrap .Overlay-title {
    font-size: var(--primer-text-body-size-medium, 14px);
    font-weight: var(--base-text-weight-semibold, 600);
    margin: 0
}

.Overlay-header .Overlay-headerContentWrap .Overlay-titleWrap .Overlay-description {
    color: var(--color-fg-muted);
    font-size: var(--primer-text-body-size-small, 12px);
    font-weight: var(--base-text-weight-normal, 400);
    margin: 0
}

.Overlay-body {
    flex-grow: 1;
    font-size: var(--primer-text-body-size-medium, 14px);
    overflow-y: auto;
    padding: var(--primer-stack-padding-normal, 16px);
    padding-top: 0;
    scrollbar-width: thin
}

.Overlay-body.Overlay-body--paddingCondensed {
    padding: var(--primer-stack-padding-condensed, 8px);
    padding-top: 0
}

.Overlay-body.Overlay-body--paddingNone {
    padding: 0
}

.Overlay-footer {
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    flex-wrap: wrap;
    padding: 0 var(--primer-stack-padding-normal, 16px) var(--primer-stack-padding-normal, 16px) var(--primer-stack-padding-normal, 16px);
    z-index: 1
}

.Overlay-footer.Overlay-footer--divided {
    box-shadow: inset 0 var(--primer-borderWidth-thin, 1px) var(--color-border-default);
    padding-top: var(--primer-stack-padding-normal, 16px)
}

.Overlay-footer.Overlay-footer--alignStart {
    gap: var(--primer-stack-gap-condensed, 8px);
    justify-content: flex-start
}

.Overlay-footer.Overlay-footer--alignCenter {
    gap: var(--primer-stack-gap-condensed, 8px);
    justify-content: center
}

.Overlay-footer.Overlay-footer--alignEnd {
    gap: var(--primer-stack-gap-condensed, 8px);
    justify-content: flex-end
}

.Overlay-closeButton {
    align-self: flex-start;
    background-color: initial;
    border: var(--primer-borderWidth-thin, 1px) solid #0000;
    border-radius: var(--primer-borderRadius-medium, 6px);
    color: var(--color-fg-muted);
    cursor: pointer;
    display: grid;
    flex-shrink: 0;
    height: var(--base-size-32, 32px);
    padding: 0;
    place-content: center;
    position: relative;
    transition: .2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color,background-color,border-color;
    -webkit-user-select: none;
    user-select: none;
    width: var(--base-size-32, 32px)
}

.Overlay-closeButton:focus,.Overlay-closeButton:hover {
    background-color: var(--color-btn-hover-bg);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-btn-hover-bg)
}

.Overlay-closeButton.close-button {
    border: var(--primer-borderWidth-thin, 1px) solid #0000
}

.Overlay-backdrop--center {
    align-items: center;
    background-color: var(--color-neutral-muted);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999
}

.Overlay-backdrop--anchor {
    background-color: initial;
    position: absolute;
    z-index: 999
}

.Overlay-backdrop--side {
    background-color: var(--color-neutral-muted);
    bottom: 0;
    display: flex;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999
}

.Overlay-backdrop--side,.Overlay-backdrop--side.Overlay-backdrop--placement-left {
    align-items: center;
    justify-content: left
}

.Overlay-backdrop--side.Overlay-backdrop--placement-left>.Overlay {
    border-radius: var(--primer-borderRadius-large, 12px);
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    height: 100vh;
    max-height: unset
}

@media screen and (prefers-reduced-motion: no-preference) {
    .Overlay-backdrop--side.Overlay-backdrop--placement-left>.Overlay {
        animation: Overlay--motion-slideInRight .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running
    }
}

.Overlay-backdrop--side.Overlay-backdrop--placement-right {
    align-items: center;
    justify-content: right
}

.Overlay-backdrop--side.Overlay-backdrop--placement-right>.Overlay {
    border-radius: var(--primer-borderRadius-large, 12px);
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    height: 100vh;
    max-height: unset
}

@media screen and (prefers-reduced-motion: no-preference) {
    .Overlay-backdrop--side.Overlay-backdrop--placement-right>.Overlay {
        animation: Overlay--motion-slideInLeft .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running
    }
}

.Overlay-backdrop--side.Overlay-backdrop--placement-bottom {
    align-items: end;
    justify-content: center
}

.Overlay-backdrop--side.Overlay-backdrop--placement-bottom>.Overlay {
    border-radius: var(--primer-borderRadius-large, 12px);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: auto;
    max-height: calc(100vh - 2rem);
    width: 100vw
}

@media screen and (prefers-reduced-motion: no-preference) {
    .Overlay-backdrop--side.Overlay-backdrop--placement-bottom>.Overlay {
        animation: Overlay--motion-slideUp .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running
    }
}

.Overlay-backdrop--side.Overlay-backdrop--placement-top {
    align-items: start;
    justify-content: center
}

.Overlay-backdrop--side.Overlay-backdrop--placement-top>.Overlay {
    border-radius: var(--primer-borderRadius-large, 12px);
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

@media screen and (prefers-reduced-motion: no-preference) {
    .Overlay-backdrop--side.Overlay-backdrop--placement-top>.Overlay {
        animation: Overlay--motion-slideDown .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running
    }
}

.Overlay-backdrop--full {
    background-color: var(--color-neutral-muted);
    bottom: 0;
    display: flex;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 999
}

.Overlay-backdrop--full .Overlay {
    border-radius: unset !important;
    flex-grow: 1;
    height: 100%;
    max-height: 100vh;
    max-width: 100vw;
    width: 100%
}

@media(max-width: 767px) {
    .Overlay-backdrop--center-whenNarrow {
        align-items:center;
        background-color: var(--color-neutral-muted);
        bottom: 0;
        display: flex;
        justify-content: center;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999
    }

    .Overlay-backdrop--anchor-whenNarrow {
        background-color: initial;
        position: absolute;
        z-index: 999
    }

    .Overlay-backdrop--side-whenNarrow {
        background-color: var(--color-neutral-muted);
        bottom: 0;
        display: flex;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999
    }

    .Overlay-backdrop--side-whenNarrow,.Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-left-whenNarrow {
        align-items: center;
        justify-content: left
    }

    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-left-whenNarrow>.Overlay-whenNarrow {
        border-radius: var(--primer-borderRadius-large, 12px);
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        height: 100vh;
        max-height: unset
    }
}

@media screen and (max-width: 767px)and (prefers-reduced-motion: no-preference) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-left-whenNarrow>.Overlay-whenNarrow {
        animation:Overlay--motion-slideInRight .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running
    }
}

@media(max-width: 767px) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-right-whenNarrow {
        align-items:center;
        justify-content: right
    }
}

@media(max-width: 767px) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-right-whenNarrow>.Overlay-whenNarrow {
        border-radius:var(--primer-borderRadius-large, 12px);
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
        height: 100vh;
        max-height: unset
    }
}

@media screen and (max-width: 767px)and (prefers-reduced-motion: no-preference) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-right-whenNarrow>.Overlay-whenNarrow {
        animation:Overlay--motion-slideInLeft .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running
    }
}

@media(max-width: 767px) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-bottom-whenNarrow {
        align-items:end;
        justify-content: center
    }
}

@media(max-width: 767px) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-bottom-whenNarrow>.Overlay-whenNarrow {
        border-radius:var(--primer-borderRadius-large, 12px);
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        height: auto;
        max-height: calc(100vh - 2rem);
        width: 100vw
    }
}

@media screen and (max-width: 767px)and (prefers-reduced-motion: no-preference) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-bottom-whenNarrow>.Overlay-whenNarrow {
        animation:Overlay--motion-slideUp .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running
    }
}

@media(max-width: 767px) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-top-whenNarrow {
        align-items:start;
        justify-content: center
    }
}

@media(max-width: 767px) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-top-whenNarrow>.Overlay-whenNarrow {
        border-radius:var(--primer-borderRadius-large, 12px);
        border-top-left-radius: 0;
        border-top-right-radius: 0
    }
}

@media screen and (max-width: 767px)and (prefers-reduced-motion: no-preference) {
    .Overlay-backdrop--side-whenNarrow.Overlay-backdrop--placement-top-whenNarrow>.Overlay-whenNarrow {
        animation:Overlay--motion-slideDown .25s cubic-bezier(0.33, 1, 0.68, 1) 0s 1 normal none running
    }
}

@media(max-width: 767px) {
    .Overlay-backdrop--full-whenNarrow {
        background-color:var(--color-neutral-muted);
        bottom: 0;
        display: flex;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 999
    }
}

@media(max-width: 767px) {
    .Overlay-backdrop--full-whenNarrow .Overlay {
        border-radius:unset !important;
        flex-grow: 1;
        height: 100%;
        max-height: 100vh;
        max-width: 100vw;
        width: 100%
    }
}

@keyframes Overlay--motion-slideDown {
    0% {
        transform: translateY(-100%)
    }
}

@keyframes Overlay--motion-slideUp {
    0% {
        transform: translateY(100%)
    }
}

@keyframes Overlay--motion-slideInRight {
    0% {
        transform: translateX(-100%)
    }
}

@keyframes Overlay--motion-slideInLeft {
    0% {
        transform: translateX(100%)
    }
}

.dropdown {
    position: relative
}

.dropdown-caret {
    border-bottom-color: #0000;
    border-left-color: #0000;
    border-right-color: #0000;
    border-style: solid;
    border-width: var(--primer-borderWidth-thicker, 4px) var(--primer-borderWidth-thicker, 4px) 0;
    content: "";
    display: inline-block;
    height: 0;
    vertical-align: middle;
    width: 0
}

.dropdown-menu {
    background-clip: padding-box;
    background-color: var(--color-canvas-overlay);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    border-radius: var(--primer-borderRadius-medium, 6px);
    box-shadow: var(--color-shadow-large);
    left: 0;
    list-style: none;
    margin-top: 2px;
    padding-bottom: var(--primer-control-small-paddingBlock, 4px);
    padding-top: var(--primer-control-small-paddingBlock, 4px);
    position: absolute;
    top: 100%;
    width: 160px;
    z-index: 100
}

.dropdown-menu:after,.dropdown-menu:before {
    content: "";
    display: inline-block;
    position: absolute
}

.dropdown-menu:before {
    border: 8px solid #0000;
    border-bottom: 8px solid var(--color-border-default)
}

.dropdown-menu:after {
    border: 7px solid #0000;
    border-bottom: 7px solid var(--color-canvas-overlay)
}

.dropdown-menu>ul {
    list-style: none
}

.dropdown-menu-no-overflow {
    width: auto
}

.dropdown-menu-no-overflow .dropdown-item {
    overflow: visible;
    padding: var(--primer-control-small-paddingBlock, 4px) var(--primer-control-medium-paddingInline-spacious, 16px);
    text-overflow: inherit
}

.dropdown-item {
    color: var(--color-fg-default);
    display: block;
    overflow: hidden;
    padding: var(--primer-control-small-paddingBlock, 4px) var(--primer-control-medium-paddingInline-condensed, 8px) var(--primer-control-small-paddingBlock, 4px) var(--primer-control-medium-paddingInline-spacious, 16px);
    text-overflow: ellipsis;
    white-space: nowrap
}

.dropdown-item:hover {
    background-color: var(--color-accent-emphasis);
    color: var(--color-fg-on-emphasis);
    text-decoration: none
}

.dropdown-item:hover>.octicon {
    color: inherit;
    opacity: 1
}

.dropdown-item:hover [class*=color-fg-],.dropdown-item:hover>.Label {
    color: inherit !important
}

.dropdown-item:hover>.Label {
    border-color: currentcolor
}

.dropdown-item.btn-link,.dropdown-signout {
    text-align: left;
    width: 100%
}

.dropdown-signout {
    background: none;
    border: 0
}

.dropdown-divider {
    border-top: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    display: block;
    height: 0;
    margin: var(--primer-stack-gap-condensed, 8px) 0
}

.dropdown-header {
    color: var(--color-fg-muted);
    font-size: var(--primer-text-body-size-small, 12px);
    padding: var(--primer-control-small-paddingBlock, 4px) var(--primer-control-medium-paddingInline-spacious, 16px)
}

.dropdown-item[aria-checked=false] .octicon-check {
    display: none
}

.dropdown-menu-w {
    left: auto;
    margin-right: 8px;
    margin-top: 0;
    right: 100%;
    top: 0;
    width: auto
}

.dropdown-menu-w:before {
    border-color: #0000;
    border-left-color: var(--color-border-default);
    left: auto;
    right: -16px;
    top: 10px
}

.dropdown-menu-w:after {
    border-color: #0000;
    border-left-color: var(--color-canvas-overlay);
    left: auto;
    right: -14px;
    top: 11px
}

.dropdown-menu-e {
    left: 100%;
    margin-left: 8px;
    margin-top: 0;
    top: 0;
    width: auto
}

.dropdown-menu-e:before {
    border-color: #0000;
    border-right-color: var(--color-border-default);
    left: -16px;
    top: 10px
}

.dropdown-menu-e:after {
    border-color: #0000;
    border-right-color: var(--color-canvas-overlay);
    left: -14px;
    top: 11px
}

.dropdown-menu-ne {
    bottom: 100%;
    left: 0;
    margin-bottom: 3px;
    top: auto
}

.dropdown-menu-ne:after,.dropdown-menu-ne:before {
    right: auto;
    top: auto
}

.dropdown-menu-ne:before {
    border-bottom: 0;
    border-left: 8px solid #0000;
    border-right: 8px solid #0000;
    border-top: 8px solid var(--color-border-default);
    bottom: -8px;
    left: 9px
}

.dropdown-menu-ne:after {
    border-bottom: 0;
    border-left: 7px solid #0000;
    border-right: 7px solid #0000;
    border-top: 7px solid var(--color-canvas-overlay);
    bottom: -7px;
    left: 10px
}

.dropdown-menu-s {
    left: auto;
    right: 50%;
    transform: translateX(50%)
}

.dropdown-menu-s:before {
    right: 50%;
    top: -16px;
    transform: translateX(50%)
}

.dropdown-menu-s:after {
    right: 50%;
    top: -14px;
    transform: translateX(50%)
}

.dropdown-menu-sw {
    left: auto;
    right: 0
}

.dropdown-menu-sw:before {
    left: auto;
    right: 9px;
    top: -16px
}

.dropdown-menu-sw:after {
    left: auto;
    right: 10px;
    top: -14px
}

.dropdown-menu-se:before {
    left: 9px;
    top: -16px
}

.dropdown-menu-se:after {
    left: 10px;
    top: -14px
}

.Layout {
    --Layout-sidebar-width: 220px;
    --Layout-gutter: 16px;
    display: grid
}

@media(max-width: 543.98px) {
    .Layout {
        grid-auto-flow:row;
        grid-template-columns: 1fr !important
    }

    .Layout .Layout-divider,.Layout .Layout-main,.Layout .Layout-sidebar {
        grid-column: 1 !important;
        width: 100% !important
    }

    .Layout.Layout--sidebarPosition-flowRow-start .Layout-sidebar {
        grid-row: 1
    }

    .Layout.Layout--sidebarPosition-flowRow-end .Layout-sidebar,.Layout.Layout--sidebarPosition-flowRow-start .Layout-main {
        grid-row: 2/span 2
    }

    .Layout.Layout--sidebarPosition-flowRow-end .Layout-main {
        grid-row: 1
    }

    .Layout.Layout--sidebarPosition-flowRow-none .Layout-sidebar {
        display: none
    }

    .Layout.Layout--divided {
        --Layout-gutter: 0
    }

    .Layout.Layout--divided .Layout-divider {
        grid-row: 2;
        height: 1px
    }

    .Layout.Layout--divided .Layout-divider.Layout-divider--flowRow-hidden {
        display: none
    }

    .Layout.Layout--divided .Layout-divider.Layout-divider--flowRow-shallow {
        background: var(--color-canvas-inset);
        border-color: var(--color-border-default);
        border-style: solid;
        border-width: var(--primer-borderWidth-thin, 1px) 0;
        height: 8px;
        margin-right: 0
    }

    .Layout.Layout--divided .Layout-main,.Layout.Layout--divided.Layout--sidebarPosition-flowRow-end .Layout-sidebar {
        grid-row: 3/span 1
    }

    .Layout.Layout--divided.Layout--sidebarPosition-flowRow-end .Layout-main {
        grid-row: 1
    }
}

@media(max-width: 767.98px) {
    .Layout.Layout--flowRow-until-md {
        grid-auto-flow:row;
        grid-template-columns: 1fr !important
    }

    .Layout.Layout--flowRow-until-md .Layout-divider,.Layout.Layout--flowRow-until-md .Layout-main,.Layout.Layout--flowRow-until-md .Layout-sidebar {
        grid-column: 1 !important;
        width: 100% !important
    }

    .Layout.Layout--flowRow-until-md.Layout--sidebarPosition-flowRow-start .Layout-sidebar {
        grid-row: 1
    }

    .Layout.Layout--flowRow-until-md.Layout--sidebarPosition-flowRow-end .Layout-sidebar,.Layout.Layout--flowRow-until-md.Layout--sidebarPosition-flowRow-start .Layout-main {
        grid-row: 2/span 2
    }

    .Layout.Layout--flowRow-until-md.Layout--sidebarPosition-flowRow-end .Layout-main {
        grid-row: 1
    }

    .Layout.Layout--flowRow-until-md.Layout--sidebarPosition-flowRow-none .Layout-sidebar {
        display: none
    }

    .Layout.Layout--flowRow-until-md.Layout--divided {
        --Layout-gutter: 0
    }

    .Layout.Layout--flowRow-until-md.Layout--divided .Layout-divider {
        grid-row: 2;
        height: 1px
    }

    .Layout.Layout--flowRow-until-md.Layout--divided .Layout-divider.Layout-divider--flowRow-hidden {
        display: none
    }

    .Layout.Layout--flowRow-until-md.Layout--divided .Layout-divider.Layout-divider--flowRow-shallow {
        background: var(--color-canvas-inset);
        border-color: var(--color-border-default);
        border-style: solid;
        border-width: var(--primer-borderWidth-thin, 1px) 0;
        height: 8px;
        margin-right: 0
    }

    .Layout.Layout--flowRow-until-md.Layout--divided .Layout-main,.Layout.Layout--flowRow-until-md.Layout--divided.Layout--sidebarPosition-flowRow-end .Layout-sidebar {
        grid-row: 3/span 1
    }

    .Layout.Layout--flowRow-until-md.Layout--divided.Layout--sidebarPosition-flowRow-end .Layout-main {
        grid-row: 1
    }
}

@media(max-width: 1011.98px) {
    .Layout.Layout--flowRow-until-lg {
        grid-auto-flow:row;
        grid-template-columns: 1fr !important
    }

    .Layout.Layout--flowRow-until-lg .Layout-divider,.Layout.Layout--flowRow-until-lg .Layout-main,.Layout.Layout--flowRow-until-lg .Layout-sidebar {
        grid-column: 1 !important;
        width: 100% !important
    }

    .Layout.Layout--flowRow-until-lg.Layout--sidebarPosition-flowRow-start .Layout-sidebar {
        grid-row: 1
    }

    .Layout.Layout--flowRow-until-lg.Layout--sidebarPosition-flowRow-end .Layout-sidebar,.Layout.Layout--flowRow-until-lg.Layout--sidebarPosition-flowRow-start .Layout-main {
        grid-row: 2/span 2
    }

    .Layout.Layout--flowRow-until-lg.Layout--sidebarPosition-flowRow-end .Layout-main {
        grid-row: 1
    }

    .Layout.Layout--flowRow-until-lg.Layout--sidebarPosition-flowRow-none .Layout-sidebar {
        display: none
    }

    .Layout.Layout--flowRow-until-lg.Layout--divided {
        --Layout-gutter: 0
    }

    .Layout.Layout--flowRow-until-lg.Layout--divided .Layout-divider {
        grid-row: 2;
        height: 1px
    }

    .Layout.Layout--flowRow-until-lg.Layout--divided .Layout-divider.Layout-divider--flowRow-hidden {
        display: none
    }

    .Layout.Layout--flowRow-until-lg.Layout--divided .Layout-divider.Layout-divider--flowRow-shallow {
        background: var(--color-canvas-inset);
        border-color: var(--color-border-default);
        border-style: solid;
        border-width: var(--primer-borderWidth-thin, 1px) 0;
        height: 8px;
        margin-right: 0
    }

    .Layout.Layout--flowRow-until-lg.Layout--divided .Layout-main,.Layout.Layout--flowRow-until-lg.Layout--divided.Layout--sidebarPosition-flowRow-end .Layout-sidebar {
        grid-row: 3/span 1
    }

    .Layout.Layout--flowRow-until-lg.Layout--divided.Layout--sidebarPosition-flowRow-end .Layout-main {
        grid-row: 1
    }
}

.Layout {
    grid-gap: var(--Layout-gutter);
    grid-auto-flow: column;
    grid-template-columns: auto 0 minmax(0, calc(100% - var(--Layout-sidebar-width) - var(--Layout-gutter)))
}

.Layout .Layout-sidebar {
    grid-column: 1
}

.Layout .Layout-divider {
    display: none
}

.Layout .Layout-main {
    grid-column: 2/span 2
}

@media(min-width: 1012px) {
    .Layout {
        --Layout-gutter:24px
    }
}

.Layout.Layout--gutter-none {
    --Layout-gutter: 0px
}

.Layout.Layout--gutter-condensed {
    --Layout-gutter: 16px
}

@media(min-width: 1012px) {
    .Layout.Layout--gutter-spacious {
        --Layout-gutter:32px
    }
}

@media(min-width: 1280px) {
    .Layout.Layout--gutter-spacious {
        --Layout-gutter:40px
    }
}

@media(min-width: 544px) {
    .Layout {
        --Layout-sidebar-width:220px
    }
}

@media(min-width: 768px) {
    .Layout {
        --Layout-sidebar-width:256px
    }
}

@media(min-width: 1012px) {
    .Layout {
        --Layout-sidebar-width:296px
    }
}

@media(min-width: 768px) {
    .Layout.Layout--sidebar-narrow {
        --Layout-sidebar-width:240px
    }
}

@media(min-width: 1012px) {
    .Layout.Layout--sidebar-narrow {
        --Layout-sidebar-width:256px
    }

    .Layout.Layout--sidebar-wide {
        --Layout-sidebar-width: 320px
    }
}

@media(min-width: 1280px) {
    .Layout.Layout--sidebar-wide {
        --Layout-sidebar-width:336px
    }
}

.Layout.Layout--sidebarPosition-start .Layout-sidebar {
    grid-column: 1
}

.Layout.Layout--sidebarPosition-start .Layout-main {
    grid-column: 2/span 2
}

.Layout.Layout--sidebarPosition-end {
    grid-template-columns: minmax(0, calc(100% - var(--Layout-sidebar-width) - var(--Layout-gutter))) 0 auto
}

.Layout.Layout--sidebarPosition-end .Layout-main {
    grid-column: 1
}

.Layout.Layout--sidebarPosition-end .Layout-sidebar {
    grid-column: 2/span 2
}

.Layout.Layout--divided .Layout-divider {
    background: var(--color-border-default);
    display: block;
    grid-column: 2;
    margin-right: -1px;
    width: 1px
}

.Layout.Layout--divided .Layout-main,.Layout.Layout--divided.Layout--sidebarPosition-end .Layout-sidebar {
    grid-column: 3/span 1
}

.Layout.Layout--divided.Layout--sidebarPosition-end .Layout-main {
    grid-column: 1
}

.Layout-divider {
    display: none;
    width: 1px
}

.Layout-sidebar {
    width: var(--Layout-sidebar-width)
}

.Layout-main {
    min-width: 0
}

.Layout-main .Layout-main-centered-lg,.Layout-main .Layout-main-centered-md,.Layout-main .Layout-main-centered-xl {
    margin-left: auto;
    margin-right: auto
}

.Layout-main .Layout-main-centered-lg>.container-lg,.Layout-main .Layout-main-centered-lg>.container-md,.Layout-main .Layout-main-centered-lg>.container-xl,.Layout-main .Layout-main-centered-md>.container-lg,.Layout-main .Layout-main-centered-md>.container-md,.Layout-main .Layout-main-centered-md>.container-xl,.Layout-main .Layout-main-centered-xl>.container-lg,.Layout-main .Layout-main-centered-xl>.container-md,.Layout-main .Layout-main-centered-xl>.container-xl {
    margin-left: 0
}

.Layout-main .Layout-main-centered-md {
    max-width: calc(var(--primer-breakpoint-medium, 768px) + var(--Layout-sidebar-width) + var(--Layout-gutter))
}

.Layout-main .Layout-main-centered-lg {
    max-width: calc(var(--primer-breakpoint-large, 1012px) + var(--Layout-sidebar-width) + var(--Layout-gutter))
}

.Layout-main .Layout-main-centered-xl {
    max-width: calc(var(--primer-breakpoint-xlarge, 1280px) + var(--Layout-sidebar-width) + var(--Layout-gutter))
}

.tabnav {
    border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    margin-bottom: var(--primer-stack-gap-normal, 16px);
    margin-top: 0
}

.tabnav-tabs {
    display: flex;
    margin-bottom: calc(var(--primer-borderWidth-thin, 1px)*-1);
    overflow: auto
}

.tabnav-tab {
    background-color: initial;
    border: var(--primer-borderWidth-thin, 1px) solid #0000;
    border-bottom: 0;
    color: var(--color-fg-muted);
    display: inline-block;
    flex-shrink: 0;
    font-size: var(--primer-text-body-size-medium, 14px);
    line-height: 23px;
    padding: var(--base-size-8, 8px) var(--primer-control-medium-paddingInline-spacious, 16px);
    text-decoration: none;
    transition: color .2s cubic-bezier(0.3, 0, 0.5, 1)
}

.tabnav-tab.selected,.tabnav-tab[aria-current]:not([aria-current=false]),.tabnav-tab[aria-selected=true] {
    background-color: var(--color-canvas-default);
    border-color: var(--color-border-default);
    border-radius: var(--primer-borderRadius-medium, 6px) var(--primer-borderRadius-medium, 6px) 0 0;
    color: var(--color-fg-default)
}

.tabnav-tab.selected .octicon,.tabnav-tab[aria-current]:not([aria-current=false]) .octicon,.tabnav-tab[aria-selected=true] .octicon {
    color: inherit
}

.tabnav-tab:hover {
    color: var(--color-fg-default);
    text-decoration: none;
    transition-duration: .1s
}

.tabnav-tab:focus,.tabnav-tab:focus-visible {
    border-radius: var(--primer-borderRadius-medium, 6px) var(--primer-borderRadius-medium, 6px) 0 0 !important
}

.tabnav-tab:focus,.tabnav-tab:focus-visible {
    outline-offset: -6px
}

.tabnav-tab .octicon,.tabnav-tab:active {
    color: var(--color-fg-muted)
}

.tabnav-tab .octicon {
    margin-right: var(--primer-control-small-gap, 4px)
}

.tabnav-tab .Counter {
    color: inherit;
    margin-left: var(--primer-control-small-gap, 4px)
}

.tabnav-extra {
    color: var(--color-fg-muted);
    display: inline-block;
    font-size: var(--primer-text-body-size-small, 12px);
    margin-left: 10px;
    padding-top: 10px
}

.tabnav-extra>.octicon {
    margin-right: 2px
}

a.tabnav-extra:hover {
    color: var(--color-accent-fg);
    text-decoration: none
}

.tabnav-btn {
    margin-left: var(--primer-controlStack-medium-gap-condensed, 8px)
}

.FormControl {
    display: inline-flex;
    flex-direction: column;
    gap: var(--base-size-4, 4px)
}

.FormControl--fullWidth {
    display: flex
}

.FormControl-label {
    color: var(--color-fg-default);
    font-size: var(--primer-text-body-size-medium, 14px);
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: var(--primer-text-body-lineHeight-medium, 1.42857);
    -webkit-user-select: none;
    user-select: none
}

.FormControl-caption {
    color: var(--color-fg-muted);
    font-size: var(--primer-text-caption-size, 12px);
    font-weight: var(--primer-text-caption-weight, 400);
    line-height: var(--primer-text-caption-lineHeight, 1.33333);
    margin-bottom: 0
}

.FormControl-inlineValidation {
    fill: var(--color-danger-fg);
    align-items: center;
    color: var(--color-danger-fg);
    display: flex;
    flex-direction: row;
    font-size: var(--primer-text-caption-size, 12px);
    font-weight: var(--base-text-weight-semibold, 600);
    gap: var(--base-size-4, 4px)
}

.FormControl-inlineValidation p {
    margin-bottom: 0
}

.FormControl-spacingWrapper {
    display: flex;
    flex-direction: column;
    row-gap: .5rem
}

.FormControl-horizontalGroup {
    column-gap: .5rem;
    display: flex
}

.FormControl-input,.FormControl-select,.FormControl-textarea {
    background-color: var(--color-canvas-default);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    color: var(--color-fg-default)
}

.FormControl-input[disabled],.FormControl-select[disabled],.FormControl-textarea[disabled] {
    -webkit-text-fill-color: var(--color-primer-fg-disabled);
    background-color: var(--color-input-disabled-bg);
    border-color: var(--color-border-default);
    color: var(--color-primer-fg-disabled);
    cursor: not-allowed;
    opacity: 1
}

.FormControl-input[invalid]:not(:focus),.FormControl-select[invalid]:not(:focus),.FormControl-textarea[invalid]:not(:focus) {
    border-color: var(--color-danger-emphasis)
}

.FormControl-input:not([type=checkbox],[type=radio]):focus,.FormControl-select:not([type=checkbox],[type=radio]):focus,.FormControl-textarea:not([type=checkbox],[type=radio]):focus {
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px var(--color-accent-fg);
    outline: none
}

.FormControl-input:not([type=checkbox],[type=radio]):focus:not(:focus-visible),.FormControl-select:not([type=checkbox],[type=radio]):focus:not(:focus-visible),.FormControl-textarea:not([type=checkbox],[type=radio]):focus:not(:focus-visible) {
    border-color: #0000;
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px #0000 var(--color-accent-fg);
    outline: none
}

.FormControl-input:not([type=checkbox],[type=radio]):focus-visible,.FormControl-select:not([type=checkbox],[type=radio]):focus-visible,.FormControl-textarea:not([type=checkbox],[type=radio]):focus-visible {
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px var(--color-accent-fg);
    outline: none
}

.FormControl-input,.FormControl-select,.FormControl-textarea {
    border-radius: var(--primer-borderRadius-medium, 6px);
    font-size: var(--primer-text-body-size-medium, 14px);
    line-height: var(--primer-text-body-lineHeight-medium, 1.42857);
    padding-block:calc(var(--primer-control-medium-paddingBlock, 6px) - var(--primer-borderWidth-thin, 1px));padding-inline: var(--primer-control-medium-paddingInline-condensed, 8px);
    transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
    transition-property: color,background-color,box-shadow,border-color;
    width: 100%
}

.FormControl-input[disabled]::placeholder,.FormControl-select[disabled]::placeholder,.FormControl-textarea[disabled]::placeholder {
    color: var(--color-primer-fg-disabled)
}

.FormControl-input[readonly],.FormControl-select[readonly],.FormControl-textarea[readonly] {
    background-color: var(--color-input-disabled-bg)
}

.FormControl-input::placeholder,.FormControl-select::placeholder,.FormControl-textarea::placeholder {
    color: var(--color-fg-subtle);
    opacity: 1
}

.FormControl-input.FormControl-small,.FormControl-select.FormControl-small,.FormControl-textarea.FormControl-small {
    font-size: var(--primer-text-body-size-small, 12px);
    height: var(--primer-control-small-size, 28px);
    padding-block:var(--primer-control-small-paddingBlock, 4px);padding-inline: var(--primer-control-small-paddingInline-normal, 8px)
}

.FormControl-input.FormControl-medium,.FormControl-select.FormControl-medium,.FormControl-textarea.FormControl-medium {
    height: var(--primer-control-medium-size, 32px)
}

.FormControl-input.FormControl-large,.FormControl-select.FormControl-large,.FormControl-textarea.FormControl-large {
    height: var(--primer-control-large-size, 40px);
    padding-block:var(--primer-control-large-paddingBlock, 10px);padding-inline: var(--primer-control-large-paddingInline-normal, 12px)
}

.FormControl-input.FormControl-inset,.FormControl-select.FormControl-inset,.FormControl-textarea.FormControl-inset {
    background-color: var(--color-canvas-inset)
}

.FormControl-input.FormControl-inset:focus,.FormControl-input.FormControl-inset:focus-visible,.FormControl-select.FormControl-inset:focus,.FormControl-select.FormControl-inset:focus-visible,.FormControl-textarea.FormControl-inset:focus,.FormControl-textarea.FormControl-inset:focus-visible {
    background-color: var(--color-canvas-default)
}

.FormControl-input.FormControl-monospace,.FormControl-select.FormControl-monospace,.FormControl-textarea.FormControl-monospace {
    font-family: var(--primer-fontStack-monospace, "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace")
}

.FormControl-input.FormControl-error,.FormControl-select.FormControl-error,.FormControl-textarea.FormControl-error {
    border-color: var(--color-danger-emphasis)
}

.FormControl-input.FormControl-success,.FormControl-select.FormControl-success,.FormControl-textarea.FormControl-success {
    border-color: var(--color-success-emphasis)
}

.FormControl-input.FormControl-warning,.FormControl-select.FormControl-warning,.FormControl-textarea.FormControl-warning {
    border-color: var(--color-attention-emphasis)
}

.FormControl-toggleSwitchInput {
    align-items: flex-start;
    display: flex;
    gap: var(--base-size-16, 16px)
}

.FormControl-input-wrap {
    display: grid;
    position: relative
}

.FormControl-input-wrap .FormControl-input-leadingVisualWrap {
    color: var(--color-fg-muted);
    display: block;
    height: var(--base-size-16, 16px);
    left: var(--base-size-8, 8px);
    pointer-events: none;
    position: absolute;
    top: var(--base-size-8, 8px);
    width: var(--base-size-16, 16px)
}

.FormControl-input-wrap .FormControl-input-leadingVisualWrap .FormControl-input-leadingVisual {
    display: block;
    -webkit-user-select: none;
    user-select: none
}

.FormControl-input-wrap .FormControl-input-trailingAction {
    align-items: center;
    background: #0000;
    border: 0;
    border-radius: var(--primer-borderRadius-small);
    color: var(--color-fg-muted);
    cursor: pointer;
    display: grid;
    height: var(--primer-control-xsmall-size, 24px);
    justify-content: center;
    padding: 0;
    position: absolute;
    right: var(--base-size-4, 4px);
    top: var(--base-size-4, 4px);
    transition: .2s cubic-bezier(0.3, 0, 0.5, 1);
    transition-property: color,background-color,border-color;
    width: var(--primer-control-xsmall-size, 24px);
    z-index: 4
}

.FormControl-input-wrap .FormControl-input-trailingAction svg {
    -webkit-user-select: none;
    user-select: none
}

.FormControl-input-wrap .FormControl-input-trailingAction[disabled] {
    color: var(--color-primer-fg-disabled);
    pointer-events: none
}

.FormControl-input-wrap .FormControl-input-trailingAction:hover {
    background: var(--color-action-list-item-default-hover-bg)
}

.FormControl-input-wrap .FormControl-input-trailingAction:active {
    background: var(--color-action-list-item-default-active-bg)
}

.FormControl-input-wrap .FormControl-input-trailingAction.FormControl-input-trailingAction--divider:before {
    background: var(--color-border-default);
    content: "";
    display: block;
    height: var(--base-size-16);
    left: calc(var(--base-size-4, 4px)*-1);
    position: absolute;
    top: calc((var(--primer-control-xsmall-size) - var(--base-size-16))/2);
    width: var(--primer-borderWidth-thin)
}

.FormControl-input-wrap .FormControl-input-trailingAction:after {
    content: "";
    height: 100%;
    left: 50%;
    min-height: var(--primer-control-medium-size, 32px) var(--primer-control-medium-size, 32px);
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%
}

@media(pointer: coarse) {
    .FormControl-input-wrap .FormControl-input-trailingAction:after {
        min-height:var(--primer-control-minTarget-coarse, 44px);
        min-width: var(--primer-control-minTarget-coarse, 44px)
    }
}

.FormControl-input-wrap.FormControl-input-wrap--leadingVisual .FormControl-input {
    padding-inline-start:calc(var(--primer-control-medium-paddingInline-condensed, 8px) + var(--base-size-16, 16px) + var(--primer-control-medium-gap, 8px))}

.FormControl-input-wrap.FormControl-input-wrap--trailingAction .FormControl-input {
    padding-inline-end: calc(var(--primer-control-medium-paddingInline-condensed, 8px) + var(--base-size-16, 16px) + var(--primer-control-medium-gap, 8px))
}

.FormControl-input-wrap.FormControl-input-wrap--trailingAction.FormControl-input-wrap-trailingAction--divider .FormControl-input {
    padding-inline-end:calc(var(--primer-control-medium-paddingInline-condensed, 8px) + var(--base-size-16, 16px) + var(--primer-control-medium-gap, 8px) + var(--primer-borderWidth-thin, 1px))}

.FormControl-input-wrap.FormControl-small .FormControl-input-leadingVisualWrap {
    left: calc(var(--primer-control-medium-paddingInline-condensed, 8px) - .125rem);
    top: calc(var(--primer-control-medium-paddingInline-condensed, 8px) - .125rem)
}

.FormControl-input-wrap.FormControl-small.FormControl-input-wrap--trailingAction .FormControl-input.FormControl-small {
    padding-inline-end:calc(var(--primer-control-small-paddingInline-condensed, 8px) + var(--base-size-16, 16px) + var(--primer-control-small-gap, 8px))}

.FormControl-input-wrap.FormControl-small.FormControl-input-wrap--trailingAction.FormControl-input-wrap-trailingAction--divider .FormControl-input.FormControl-small {
    padding-inline-end: calc(var(--primer-control-small-paddingInline-condensed, 8px) + var(--base-size-16, 16px) + var(--primer-control-small-gap, 8px) + var(--primer-borderWidth-thin, 1px))
}

.FormControl-input-wrap.FormControl-small .FormControl-input-trailingAction {
    height: calc(var(--primer-control-small-size, 28px) - var(--base-size-8, 8px));
    width: calc(var(--primer-control-small-size, 28px) - var(--base-size-8, 8px))
}

.FormControl-input-wrap.FormControl-small .FormControl-input-trailingAction:before {
    top: calc((var(--primer-control-xsmall-size) - var(--base-size-16))/4)
}

.FormControl-input-wrap.FormControl-large .FormControl-input-leadingVisualWrap {
    left: var(--primer-control-medium-paddingInline-normal, 12px);
    top: var(--primer-control-medium-paddingInline-normal, 12px)
}

.FormControl-input-wrap.FormControl-large.FormControl-input-wrap--leadingVisual .FormControl-input.FormControl-large {
    padding-inline-start:calc(var(--primer-control-large-paddingInline-normal, 12px) + var(--base-size-16, 16px) + var(--primer-control-large-gap, 8px))}

.FormControl-input-wrap.FormControl-large.FormControl-input-wrap--trailingAction .FormControl-input.FormControl-large {
    padding-inline-end: calc(var(--primer-control-large-paddingInline-normal, 12px) + var(--base-size-16, 16px) + var(--primer-control-large-gap, 8px))
}

.FormControl-input-wrap.FormControl-large.FormControl-input-wrap--trailingAction.FormControl-input-wrap-trailingAction--divider .FormControl-input.FormControl-large {
    padding-inline-end:calc(var(--primer-control-large-paddingInline-normal, 12px) + var(--base-size-16, 16px) + var(--primer-control-large-gap, 8px) + var(--primer-borderWidth-thin, 1px))}

.FormControl-input-wrap.FormControl-large .FormControl-input-trailingAction {
    height: var(--primer-control-small-size, 28px);
    right: calc(var(--primer-control-medium-paddingInline-condensed, 8px) - .125rem);
    top: calc(var(--primer-control-medium-paddingInline-condensed, 8px) - .125rem);
    width: var(--primer-control-small-size, 28px)
}

.FormControl-input-wrap.FormControl-large .FormControl-input-trailingAction:before {
    height: var(--base-size-20);
    top: unset
}

.FormControl-select-wrap {
    display: grid;
    grid-template-columns: minmax(0, auto) var(--base-size-16, 16px)
}

.FormControl-select-wrap:after {
    background-color: var(--color-fg-muted);
    content: "";
    grid-column: 2;
    grid-row: 1;
    height: var(--base-size-16, 16px);
    -webkit-mask: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM1ODYwNjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQuNDI3IDkuNDI3IDMuMzk2IDMuMzk2YS4yNTEuMjUxIDAgMCAwIC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwIDAgMTEuMzk2IDlINC42MDRhLjI1LjI1IDAgMCAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3IDcuODIgMy4wNzJhLjI1LjI1IDAgMCAxIC4zNTQgMEwxMS41NyA2LjQ3YS4yNS4yNSAwIDAgMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMCAxLS4xNzctLjQyN3oiLz48L3N2Zz4=");
    mask: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM1ODYwNjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQuNDI3IDkuNDI3IDMuMzk2IDMuMzk2YS4yNTEuMjUxIDAgMCAwIC4zNTQgMGwzLjM5Ni0zLjM5NkEuMjUuMjUgMCAwIDAgMTEuMzk2IDlINC42MDRhLjI1LjI1IDAgMCAwLS4xNzcuNDI3ek00LjQyMyA2LjQ3IDcuODIgMy4wNzJhLjI1LjI1IDAgMCAxIC4zNTQgMEwxMS41NyA2LjQ3YS4yNS4yNSAwIDAgMS0uMTc3LjQyN0g0LjZhLjI1LjI1IDAgMCAxLS4xNzctLjQyN3oiLz48L3N2Zz4=");
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    padding-right: var(--base-size-4, 4px);
    place-self: center end;
    pointer-events: none;
    width: var(--base-size-16, 16px)
}

.FormControl-select-wrap .FormControl-select {
    -webkit-appearance: none;
    appearance: none;
    grid-column: 1/-1;
    grid-row: 1;
    padding-right: var(--base-size-20, 20px)
}

.FormControl-checkbox-wrap,.FormControl-radio-wrap {
    display: inline-grid;
    gap: var(--base-size-8, 8px);
    grid-template-columns: min-content auto
}

.FormControl-checkbox-wrap .FormControl-checkbox-labelWrap,.FormControl-checkbox-wrap .FormControl-radio-labelWrap,.FormControl-radio-wrap .FormControl-checkbox-labelWrap,.FormControl-radio-wrap .FormControl-radio-labelWrap {
    display: flex;
    flex-direction: column;
    gap: var(--base-size-4, 4px)
}

.FormControl-checkbox-wrap .FormControl-label,.FormControl-radio-wrap .FormControl-label {
    cursor: pointer
}

.FormControl-check-group-wrap fieldset,.FormControl-radio-group-wrap fieldset {
    border: 0;
    margin: 0;
    padding: 0
}

input[type=checkbox].FormControl-checkbox {
    background-color: var(--color-canvas-default);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    color: var(--color-fg-default)
}

input.FormControl-checkbox[type=checkbox][disabled] {
    -webkit-text-fill-color: var(--color-primer-fg-disabled);
    background-color: var(--color-input-disabled-bg);
    border-color: var(--color-border-default);
    color: var(--color-primer-fg-disabled);
    cursor: not-allowed;
    opacity: 1
}

input.FormControl-checkbox[type=checkbox][invalid]:not(:focus) {
    border-color: var(--color-danger-emphasis)
}

input.FormControl-checkbox[type=checkbox]:not([type=checkbox],[type=radio]):focus {
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px var(--color-accent-fg);
    outline: none
}

input.FormControl-checkbox[type=checkbox]:not([type=checkbox],[type=radio]):focus:not(:focus-visible) {
    border-color: #0000;
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px #0000 var(--color-accent-fg);
    outline: none
}

input.FormControl-checkbox[type=checkbox]:not([type=checkbox],[type=radio]):focus-visible {
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px var(--color-accent-fg);
    outline: none
}

input[type=checkbox].FormControl-checkbox {
    -webkit-appearance: none;
    appearance: none;
    border-color: var(--color-neutral-emphasis);
    border-radius: var(--primer-borderRadius-small, 3px);
    cursor: pointer;
    display: grid;
    height: var(--base-size-16, 16px);
    margin: .125rem 0 0;
    place-content: center;
    position: relative;
    transition: background-color,border-color 80ms cubic-bezier(0.33, 1, 0.68, 1);
    width: var(--base-size-16, 16px)
}

input.FormControl-checkbox[type=checkbox]:before {
    background-color: var(--color-fg-on-emphasis);
    clip-path: inset(var(--base-size-16, 16px) 0 0 0);
    content: "";
    height: var(--base-size-16, 16px);
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjc4LjIyYS43NS43NSAwIDAgMSAwIDEuMDYxTDQuNTIgOC41NDFhLjc1Mi43NTIgMCAwIDEtMS4wNjIgMEwuMjAyIDUuMjg1YS43NS43NSAwIDAgMSAxLjA2MS0xLjA2MWwyLjcyNSAyLjcyM0wxMC43MTguMjJhLjc1MS43NTEgMCAwIDEgMS4wNjIgMFoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=");
    mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjc4LjIyYS43NS43NSAwIDAgMSAwIDEuMDYxTDQuNTIgOC41NDFhLjc1Mi43NTIgMCAwIDEtMS4wNjIgMEwuMjAyIDUuMjg1YS43NS43NSAwIDAgMSAxLjA2MS0xLjA2MWwyLjcyNSAyLjcyM0wxMC43MTguMjJhLjc1MS43NTEgMCAwIDEgMS4wNjIgMFoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=");
    -webkit-mask-position: center;
    mask-position: center;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 75%;
    mask-size: 75%;
    transition: visibility 0s linear .23s;
    visibility: hidden;
    width: var(--base-size-16, 16px)
}

@media screen and (prefers-reduced-motion: no-preference) {
    input.FormControl-checkbox[type=checkbox]:before {
        animation: checkmarkOut 80ms cubic-bezier(0.65, 0, 0.35, 1) forwards
    }
}

input.FormControl-checkbox[type=checkbox]:after {
    content: "";
    height: 100%;
    left: 50%;
    min-height: var(--primer-control-medium-size, 32px) var(--primer-control-medium-size, 32px);
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%
}

input.FormControl-checkbox[type=checkbox][disabled]~.FormControl-checkbox-labelWrap .FormControl-label,input.FormControl-checkbox[type=checkbox][disabled]~.FormControl-radio-labelWrap .FormControl-label {
    color: var(--color-primer-fg-disabled);
    cursor: not-allowed
}

input.FormControl-checkbox[type=checkbox]:checked {
    background: var(--color-accent-fg);
    border-color: var(--color-accent-fg);
    transition: background-color,border-color 80ms cubic-bezier(0.32, 0, 0.67, 0) 0ms
}

input.FormControl-checkbox[type=checkbox]:checked:before {
    transition: visibility 0s linear 0s;
    visibility: visible
}

@media screen and (prefers-reduced-motion: no-preference) {
    input.FormControl-checkbox[type=checkbox]:checked:before {
        animation: checkmarkIn 80ms cubic-bezier(0.65, 0, 0.35, 1) 80ms forwards
    }
}

input.FormControl-checkbox[type=checkbox]:checked:disabled {
    background-color: var(--color-primer-fg-disabled);
    border-color: var(--color-primer-fg-disabled);
    cursor: not-allowed;
    opacity: 1
}

input.FormControl-checkbox[type=checkbox]:checked:disabled:before {
    background-color: var(--color-fg-on-emphasis)
}

@media(forced-colors: active) {
    input.FormControl-checkbox[type=checkbox]:checked {
        background-color: canvastext;
        border-color: canvastext
    }
}

input.FormControl-checkbox[type=checkbox]:focus-visible {
    box-shadow: none;
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px
}

input.FormControl-checkbox[type=checkbox]:indeterminate:before {
    -webkit-mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMWExIDEgMCAwIDEgMS0xaDhhMSAxIDAgMSAxIDAgMkgxYTEgMSAwIDAgMS0xLTFaIiBmaWxsPSIjZmZmIi8+PC9zdmc+");
    mask-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMWExIDEgMCAwIDEgMS0xaDhhMSAxIDAgMSAxIDAgMkgxYTEgMSAwIDAgMS0xLTFaIiBmaWxsPSIjZmZmIi8+PC9zdmc+");
    visibility: visible
}

input[type=radio].FormControl-radio {
    background-color: var(--color-canvas-default);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    color: var(--color-fg-default)
}

input.FormControl-radio[type=radio][disabled] {
    -webkit-text-fill-color: var(--color-primer-fg-disabled);
    background-color: var(--color-input-disabled-bg);
    border-color: var(--color-border-default);
    color: var(--color-primer-fg-disabled);
    cursor: not-allowed;
    opacity: 1
}

input.FormControl-radio[type=radio][invalid]:not(:focus) {
    border-color: var(--color-danger-emphasis)
}

input.FormControl-radio[type=radio]:not([type=checkbox],[type=radio]):focus {
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px var(--color-accent-fg);
    outline: none
}

input.FormControl-radio[type=radio]:not([type=checkbox],[type=radio]):focus:not(:focus-visible) {
    border-color: #0000;
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px #0000 var(--color-accent-fg);
    outline: none
}

input.FormControl-radio[type=radio]:not([type=checkbox],[type=radio]):focus-visible {
    border-color: var(--color-accent-fg);
    box-shadow: inset 0 0 0 1px var(--color-accent-fg);
    outline: none
}

input[type=radio].FormControl-radio {
    -webkit-appearance: none;
    appearance: none;
    border-color: var(--color-neutral-emphasis);
    border-radius: var(--primer-borderRadius-full, 100vh);
    cursor: pointer;
    height: var(--base-size-16, 16px);
    margin: .125rem 0 0;
    position: relative;
    transition: background-color,border-color 80ms cubic-bezier(0.33, 1, 0.68, 1);
    width: var(--base-size-16, 16px)
}

input.FormControl-radio[type=radio]:after {
    content: "";
    height: 100%;
    left: 50%;
    min-height: var(--primer-control-medium-size, 32px) var(--primer-control-medium-size, 32px);
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%
}

input.FormControl-radio[type=radio]:checked {
    border-color: var(--color-accent-fg);
    border-width: var(--base-size-4, 4px)
}

input.FormControl-radio[type=radio]:checked:disabled {
    border-color: var(--color-primer-fg-disabled);
    cursor: not-allowed
}

input.FormControl-radio[type=radio]:focus-visible {
    box-shadow: none;
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px
}

@media(forced-colors: active) {
    input[type=radio].FormControl-radio {
        background-color: canvastext;
        border-color: canvastext
    }
}

@keyframes checkmarkIn {
    0% {
        clip-path: inset(var(--base-size-16, 16px) 0 0 0)
    }

    to {
        clip-path: inset(0 0 0 0)
    }
}

@keyframes checkmarkOut {
    0% {
        clip-path: inset(0 0 0 0)
    }

    to {
        clip-path: inset(var(--base-size-16, 16px) 0 0 0)
    }
}

.btn-mktg {
    -webkit-appearance: none !important;
    appearance: none !important;
    background: linear-gradient(180deg, #ffffff26 0, #fff0 100%),var(--color-mktg-btn-bg) !important;
    border: 0;
    border-radius: .375rem;
    color: var(--color-canvas-default);
    display: inline-block;
    font-size: 1rem;
    font-weight: var(--base-text-weight-semibold, 600);
    line-height: 1;
    padding: .9rem 1.5rem 1.1rem;
    position: relative;
    text-align: center;
    transition: box-shadow .2s,outline .2s ease;
    -webkit-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    z-index: 1
}

.btn-mktg:before {
    background: linear-gradient(180deg, #ffffff26, #fff0) !important;
    background-blend-mode: normal;
    border-radius: inherit;
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .2s;
    z-index: -1
}

.btn-mktg:hover {
    box-shadow: var(--color-mktg-btn-shadow-hover) !important;
    text-decoration: none
}

.btn-mktg.focus:before,.btn-mktg:focus-visible:before,.btn-mktg:focus:before,.btn-mktg:hover:before {
    opacity: 1
}

.btn-mktg:focus {
    box-shadow: none;
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px
}

.btn-mktg:focus:not(:focus-visible) {
    box-shadow: none;
    outline: 1px solid #0000
}

.btn-mktg:focus-visible {
    box-shadow: none;
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px
}

.btn-mktg:active:before {
    opacity: .5 !important
}

.btn-mktg.disabled,.btn-mktg[disabled] {
    cursor: default;
    opacity: .5;
    pointer-events: none
}

.btn-muted-mktg {
    background: none !important;
    box-shadow: var(--color-mktg-btn-shadow-outline);
    color: var(--color-fg-default) !important
}

.btn-muted-mktg:before {
    display: none
}

.btn-muted-mktg:hover {
    box-shadow: var(--color-mktg-btn-shadow-hover-muted) !important
}

.btn-muted-mktg:active {
    box-shadow: var(--color-fg-default) 0 0 0 3px inset !important
}

.btn-muted-mktg:disabled {
    box-shadow: var(--color-fg-subtle) 0 0 0 1px inset !important
}

.btn-subtle-mktg {
    box-shadow: none !important;
    color: var(--color-fg-default) !important
}

.btn-subtle-mktg,.btn-subtle-mktg:before {
    background: none !important
}

.btn-subtle-mktg:hover {
    box-shadow: var(--color-mktg-btn-shadow-hover-muted) !important
}

.btn-signup-mktg {
    background: linear-gradient(180deg, #34b75926, #2ea44f00),#2ea44f !important;
    color: #fff
}

.btn-signup-mktg:before {
    background: linear-gradient(180deg, #34b75926, #2ea44f00) !important
}

.btn-signup-mktg:focus {
    box-shadow: none;
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px
}

.btn-signup-mktg:focus:not(:focus-visible) {
    box-shadow: none;
    outline: 1px solid #0000
}

.btn-signup-mktg:focus-visible {
    box-shadow: none;
    outline: 2px solid var(--color-accent-fg);
    outline-offset: 2px
}

.btn-small-mktg {
    padding: .625rem 1rem .8125rem
}

.btn-large-mktg {
    font-size: 1.25rem;
    padding: 16px 30px 20px !important
}

.ToggleSwitch,.ToggleSwitch.ToggleSwitch {
    display: inline-flex
}

.ToggleSwitch {
    align-items: center;
    gap: var(--primer-controlStack-medium-gap-condensed, 8px)
}

.ToggleSwitch--checked .ToggleSwitch-statusOn {
    height: auto;
    visibility: visible
}

.ToggleSwitch--checked .ToggleSwitch-statusOff {
    height: 0;
    visibility: hidden
}

.ToggleSwitch-track {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--color-switch-track-bg);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-switch-track-border);
    border-radius: var(--primer-borderRadius-medium, 6px);
    cursor: pointer;
    display: block;
    height: var(--primer-control-medium-size, 32px);
    overflow: hidden;
    padding: 0;
    position: relative;
    text-decoration: none;
    transition-duration: 80ms;
    transition-property: background-color,border-color;
    transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    -webkit-user-select: none;
    user-select: none;
    width: var(--base-size-64, 64px)
}

.ToggleSwitch-track:focus,.ToggleSwitch-track:focus-visible {
    outline-offset: 1px
}

.ToggleSwitch-track:hover {
    background-color: var(--color-switch-track-hover-bg)
}

.ToggleSwitch-track:active {
    background-color: var(--color-switch-track-active-bg)
}

@media(pointer: coarse) {
    .ToggleSwitch-track:before {
        content:"";
        height: 100%;
        left: 50%;
        min-height: 44px;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100%
    }
}

@media(prefers-reduced-motion) {
    .ToggleSwitch-track,.ToggleSwitch-track * {
        transition: none
    }
}

.ToggleSwitch-track[aria-checked=true][aria-disabled=true] {
    background-color: var(--color-switch-track-disabled-bg);
    border-color: #0000;
    color: var(--color-switch-track-checked-disabled-fg)
}

.ToggleSwitch-track[aria-checked=true] {
    background-color: var(--color-switch-track-checked-bg);
    border-color: var(--color-switch-track-checked-border)
}

.ToggleSwitch-track[aria-checked=true]:not([aria-disabled=true]):hover {
    background-color: var(--color-switch-track-checked-hover-bg)
}

.ToggleSwitch-track[aria-checked=true]:not([aria-disabled=true]):active {
    background-color: var(--color-switch-track-checked-active-bg)
}

.ToggleSwitch-track[aria-checked=true] .ToggleSwitch-knob {
    background-color: var(--color-switch-knob-checked-bg);
    border-color: var(--color-switch-knob-checked-border);
    transform: translateX(100%)
}

.ToggleSwitch-track[aria-checked=true] .ToggleSwitch-lineIcon {
    transform: translateX(0)
}

.ToggleSwitch-track[aria-checked=true] .ToggleSwitch-circleIcon {
    transform: translateX(100%)
}

.ToggleSwitch-track[aria-disabled=true] {
    background-color: var(--color-switch-track-disabled-bg);
    border-color: #0000;
    cursor: not-allowed;
    transition-property: none
}

.ToggleSwitch-track[aria-disabled=true] .ToggleSwitch-knob {
    border-color: var(--color-border-default);
    box-shadow: none
}

.ToggleSwitch-track[aria-disabled=true] .ToggleSwitch-circleIcon,.ToggleSwitch-track[aria-disabled=true] .ToggleSwitch-lineIcon {
    color: var(--color-switch-track-disabled-fg)
}

.ToggleSwitch-icons {
    align-items: center;
    display: flex;
    height: 100%;
    overflow: hidden;
    width: 100%
}

.ToggleSwitch-lineIcon {
    color: var(--color-switch-track-checked-fg);
    transform: translateX(-100%)
}

.ToggleSwitch-circleIcon,.ToggleSwitch-lineIcon {
    flex: 1 0 50%;
    line-height: 0;
    transition-duration: 80ms;
    transition-property: transform
}

.ToggleSwitch-circleIcon {
    color: var(--color-switch-track-fg);
    transform: translateX(0)
}

.ToggleSwitch-knob {
    background-color: var(--color-switch-knob-bg);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-switch-knob-border);
    border-radius: var(--primer-borderRadius-medium, 6px);
    bottom: 0;
    box-shadow: var(--color-shadow-medium),var(--color-btn-inset-shadow);
    position: absolute;
    top: 0;
    transition-duration: 80ms;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
    width: 50%;
    z-index: 1
}

@media(prefers-reduced-motion) {
    .ToggleSwitch-knob {
        transition: none
    }
}

.ToggleSwitch-status {
    color: var(--color-fg-default);
    font-size: var(--primer-text-body-size-medium, 14px);
    line-height: 1.5;
    position: relative;
    text-align: right
}

.ToggleSwitch-statusIcon {
    display: flex;
    margin-top: .063rem;
    width: var(--base-size-16, 16px)
}

.ToggleSwitch--small .ToggleSwitch-status {
    font-size: var(--primer-text-body-size-small, 12px)
}

.ToggleSwitch--small .ToggleSwitch-track {
    height: var(--primer-control-xsmall-size, 24px);
    width: var(--base-size-48, 48px)
}

.ToggleSwitch--disabled .ToggleSwitch-status {
    color: var(--color-fg-muted)
}

.ToggleSwitch-statusOn {
    height: 0;
    visibility: hidden
}

.ToggleSwitch-statusOff {
    height: auto;
    visibility: visible
}

.ToggleSwitch--statusAtEnd {
    flex-direction: row-reverse
}

.ToggleSwitch--statusAtEnd .ToggleSwitch-status {
    text-align: left
}

.UnderlineNav {
    -webkit-overflow-scrolling: auto;
    box-shadow: inset 0 -1px 0 var(--color-border-muted);
    display: flex;
    justify-content: space-between;
    min-height: var(--base-size-48, 48px);
    overflow-x: auto;
    overflow-y: hidden
}

.UnderlineNav .Counter {
    background-color: var(--color-neutral-muted);
    color: var(--color-fg-default);
    margin-left: var(--primer-control-medium-gap, 8px)
}

.UnderlineNav .Counter--primary {
    background-color: var(--color-neutral-emphasis);
    color: var(--color-fg-on-emphasis)
}

.UnderlineNav-body {
    align-items: center;
    display: flex;
    gap: var(--primer-control-medium-gap, 8px);
    list-style: none
}

.UnderlineNav-item {
    align-items: center;
    background-color: initial;
    border: 0;
    border-radius: var(--primer-borderRadius-medium, 6px);
    color: var(--color-fg-default);
    cursor: pointer;
    display: flex;
    font-size: var(--primer-text-body-size-medium, 14px);
    line-height: 30px;
    padding: 0 var(--primer-control-medium-paddingInline-condensed, 8px);
    position: relative;
    text-align: center;
    white-space: nowrap
}

.UnderlineNav-item:focus,.UnderlineNav-item:focus-visible,.UnderlineNav-item:hover {
    border-bottom-color: var(--color-neutral-muted);
    color: var(--color-fg-default);
    outline-offset: -2px;
    text-decoration: none;
    transition: border-bottom-color .12s ease-out
}

.UnderlineNav-item [data-content]:before {
    content: attr(data-content);
    display: block;
    font-weight: var(--base-text-weight-semibold, 600);
    height: 0;
    visibility: hidden
}

.UnderlineNav-item:before {
    content: "";
    height: 100%;
    left: 50%;
    min-height: 48px;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%
}

@media(pointer: fine) {
    .UnderlineNav-item:hover {
        background:var(--color-action-list-item-default-hover-bg);
        color: var(--color-fg-default);
        text-decoration: none;
        transition: background .12s ease-out
    }
}

.UnderlineNav-item.selected,.UnderlineNav-item[aria-current]:not([aria-current=false]),.UnderlineNav-item[role=tab][aria-selected=true] {
    border-bottom-color: var(--color-primer-border-active);
    color: var(--color-fg-default);
    font-weight: var(--base-text-weight-semibold, 600)
}

.UnderlineNav-item.selected:after,.UnderlineNav-item[aria-current]:not([aria-current=false]):after,.UnderlineNav-item[role=tab][aria-selected=true]:after {
    background: var(--color-primer-border-active);
    border-radius: var(--primer-borderRadius-medium, 6px);
    bottom: calc(50% - 25px);
    content: "";
    height: 2px;
    position: absolute;
    right: 50%;
    transform: translate(50%, -50%);
    width: 100%;
    z-index: 1
}

.UnderlineNav--right {
    justify-content: flex-end
}

.UnderlineNav--right .UnderlineNav-actions {
    flex: 1 1 auto
}

.UnderlineNav-actions {
    align-self: center
}

.UnderlineNav--full {
    display: block
}

.UnderlineNav--full .UnderlineNav-body {
    min-height: var(--base-size-48, 48px)
}

.UnderlineNav-octicon {
    fill: var(--color-fg-muted);
    color: var(--color-fg-muted);
    display: inline !important;
    margin-right: var(--primer-control-medium-gap, 8px)
}

.UnderlineNav-container {
    display: flex;
    justify-content: space-between
}

.SegmentedControl {
    background-color: var(--color-segmented-control-bg);
    border-radius: var(--primer-borderRadius-medium, 6px);
    display: inline-flex;
    list-style: none
}

.SegmentedControl-item {
    border: var(--primer-borderWidth-thin, max(1px, 0.0625rem)) solid #0000;
    border-radius: var(--primer-borderRadius-medium, 6px);
    display: inline-flex;
    padding: var(--primer-control-xsmall-paddingInline-condensed, 4px);
    position: relative
}

.SegmentedControl-item.SegmentedControl-item--selected {
    background-color: var(--color-segmented-control-button-bg);
    border-color: var(--color-segmented-control-button-selected-border)
}

.SegmentedControl-item.SegmentedControl-item--selected .Button {
    font-weight: var(--base-text-weight-semibold, 600)
}

.SegmentedControl-item.SegmentedControl-item--selected .Button:hover {
    background-color: initial
}

.SegmentedControl-item.SegmentedControl-item--selected+.SegmentedControl-item:before,.SegmentedControl-item.SegmentedControl-item--selected:before {
    border-color: #0000
}

.SegmentedControl-item .Button-label[data-content]:before {
    content: attr(data-content);
    display: block;
    font-weight: var(--base-text-weight-semibold, 600);
    height: 0;
    visibility: hidden
}

.SegmentedControl-item:before {
    border-left: var(--primer-borderWidth-thin, max(1px, 0.0625rem)) solid var(--color-border-default);
    content: "";
    inset: 0 0 0 -1px;
    margin-bottom: var(--primer-control-medium-paddingBlock, 6px);
    margin-top: var(--primer-control-medium-paddingBlock, 6px);
    position: absolute
}

.SegmentedControl-item .Button {
    border: 0;
    color: var(--color-btn-text);
    font-weight: var(--base-text-weight-normal, 400);
    transition: none
}

.SegmentedControl-item .Button:focus-visible {
    border-radius: calc(var(--primer-borderRadius-medium, 6px) - 5px);
    outline-offset: calc(var(--primer-control-xsmall-paddingInline-condensed, 4px) - var(--primer-borderWidth-thin, 1px))
}

.SegmentedControl-item .Button--small {
    height: calc(var(--primer-control-small-size, 28px) - var(--primer-control-xsmall-paddingInline-condensed, 4px)*2 - var(--primer-borderWidth-thin, 1px)*2);
    padding: 0 calc(var(--primer-control-small-paddingInline-condensed, 8px) - var(--primer-control-xsmall-paddingInline-condensed, 4px))
}

.SegmentedControl-item .Button--small.Button--iconOnly {
    width: calc(var(--primer-control-medium-size, 32px) - var(--primer-control-xsmall-paddingInline-condensed, 4px)*2 - var(--primer-borderWidth-thin, 1px)*2)
}

.SegmentedControl-item .Button--small.Button--iconOnly:before {
    content: "";
    height: 100%;
    left: 50%;
    min-height: var(--primer-control-medium-size, 32px);
    min-width: var(--primer-control-medium-size, 32px);
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%
}

.SegmentedControl-item .Button--medium {
    height: calc(var(--primer-control-medium-size, 32px) - var(--primer-control-xsmall-paddingInline-condensed, 4px)*2 - var(--primer-borderWidth-thin, 1px)*2);
    padding: 0 calc(var(--primer-control-medium-paddingInline-normal, 12px) - var(--primer-control-xsmall-paddingInline-condensed, 4px))
}

.SegmentedControl-item .Button--medium.Button--iconOnly {
    width: calc(var(--primer-control-medium-size, 32px) - var(--primer-control-xsmall-paddingInline-condensed, 4px)*2 - var(--primer-borderWidth-thin, 1px)*2)
}

.SegmentedControl-item .Button--medium.Button--iconOnly:before {
    content: "";
    height: 100%;
    left: 50%;
    min-height: var(--primer-control-medium-size, 32px);
    min-width: var(--primer-control-medium-size, 32px);
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%
}

.SegmentedControl-item .Button--large {
    height: calc(var(--primer-control-large-size, 40px) - var(--primer-control-xsmall-paddingInline-condensed, 4px)*2 - var(--primer-borderWidth-thin, 1px)*2);
    padding: 0 calc(var(--primer-control-large-paddingInline-spacious, 16px) - var(--primer-control-xsmall-paddingInline-condensed, 4px))
}

.SegmentedControl-item .Button--large.Button--iconOnly {
    width: calc(var(--primer-control-large-size, 40px) - var(--primer-control-xsmall-paddingInline-condensed, 4px)*2 - var(--primer-borderWidth-thin, 1px)*2)
}

.SegmentedControl-item .Button--large.Button--iconOnly:before {
    content: "";
    height: 100%;
    left: 50%;
    min-height: var(--primer-control-large-size, 40px);
    min-width: var(--primer-control-large-size, 40px);
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%
}

.SegmentedControl-item .Button--iconOnly {
    padding: initial
}

.SegmentedControl-item .Button--invisible.Button--invisible-noVisuals .Button-label {
    color: var(--color-btn-text)
}

.SegmentedControl--fullWidth {
    display: flex
}

.SegmentedControl--fullWidth .SegmentedControl-item {
    flex: 1;
    justify-content: center
}

.SegmentedControl--fullWidth .Button--iconOnly,.SegmentedControl--fullWidth .Button-withTooltip {
    width: 100%
}

.menu {
    background-color: var(--color-canvas-default);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    border-radius: var(--primer-borderRadius-medium, 6px);
    list-style: none;
    margin-bottom: var(--primer-stack-gap-normal, 16px)
}

.menu-item {
    border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-muted);
    color: var(--color-fg-default);
    display: block;
    padding: var(--primer-control-medium-paddingInline-condensed, 8px) var(--primer-control-medium-paddingInline-spacious, 16px);
    position: relative
}

.menu-item:first-child {
    border-top: 0;
    border-top-right-radius: var(--primer-borderRadius-medium, 6px)
}

.menu-item:first-child,.menu-item:first-child:before {
    border-top-left-radius: var(--primer-borderRadius-medium, 6px)
}

.menu-item:last-child {
    border-bottom: 0;
    border-bottom-right-radius: var(--primer-borderRadius-medium, 6px)
}

.menu-item:last-child,.menu-item:last-child:before {
    border-bottom-left-radius: var(--primer-borderRadius-medium, 6px)
}

.menu-item:hover {
    background-color: var(--color-neutral-subtle);
    text-decoration: none
}

.menu-item:active {
    background-color: var(--color-canvas-subtle)
}

.menu-item.selected,.menu-item[aria-current]:not([aria-current=false]),.menu-item[aria-selected=true] {
    background-color: var(--color-menu-bg-active);
    cursor: default
}

.menu-item.selected:before,.menu-item[aria-current]:not([aria-current=false]):before,.menu-item[aria-selected=true]:before {
    background-color: var(--color-primer-border-active);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    top: 0;
    width: 2px
}

.menu-item .octicon {
    color: var(--color-fg-muted);
    margin-right: var(--primer-control-medium-gap, 8px);
    text-align: center;
    width: 16px
}

.menu-item .Counter {
    float: right;
    margin-left: var(--primer-control-small-gap, 4px)
}

.menu-item .menu-warning {
    color: var(--color-attention-fg);
    float: right
}

.menu-item .avatar {
    float: left;
    margin-right: var(--primer-control-small-gap, 4px)
}

.menu-item.alert .Counter {
    color: var(--color-danger-fg)
}

.menu-heading {
    border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-muted);
    color: var(--color-fg-default);
    display: block;
    font-size: inherit;
    font-weight: var(--base-text-weight-semibold, 600);
    margin-bottom: 0;
    margin-top: 0;
    padding: var(--primer-control-medium-paddingInline-condensed, 8px) var(--primer-control-medium-paddingInline-spacious, 16px)
}

.menu-heading:hover {
    text-decoration: none
}

.menu-heading:first-child {
    border-top-left-radius: var(--primer-borderRadius-medium, 6px);
    border-top-right-radius: var(--primer-borderRadius-medium, 6px)
}

.menu-heading:last-child {
    border-bottom: 0;
    border-bottom-left-radius: var(--primer-borderRadius-medium, 6px);
    border-bottom-right-radius: var(--primer-borderRadius-medium, 6px)
}

.avatar {
    background-color: var(--color-avatar-bg);
    border-radius: var(--primer-borderRadius-medium, 6px);
    box-shadow: 0 0 0 1px var(--color-avatar-border);
    display: inline-block;
    flex-shrink: 0;
    line-height: 1;
    overflow: hidden;
    vertical-align: middle
}

.avatar-link {
    float: left;
    line-height: 1
}

.avatar-group-item {
    display: inline-block;
    margin-bottom: 3px
}

.avatar-1,.avatar-2,.avatar-small {
    border-radius: var(--primer-borderRadius-small, 4px)
}

.avatar-1 {
    height: var(--base-size-16, 16px);
    width: var(--base-size-16, 16px)
}

.avatar-2 {
    height: var(--base-size-20, 20px);
    width: var(--base-size-20, 20px)
}

.avatar-3 {
    height: var(--base-size-24, 24px);
    width: var(--base-size-24, 24px)
}

.avatar-4 {
    height: var(--base-size-28, 28px);
    width: var(--base-size-28, 28px)
}

.avatar-5 {
    height: var(--base-size-32, 32px);
    width: var(--base-size-32, 32px)
}

.avatar-6 {
    height: var(--base-size-40, 40px);
    width: var(--base-size-40, 40px)
}

.avatar-7 {
    height: var(--base-size-48, 48px);
    width: var(--base-size-48, 48px)
}

.avatar-8 {
    height: var(--base-size-64, 64px);
    width: var(--base-size-64, 64px)
}

.AvatarStack {
    height: 20px;
    min-width: 26px;
    position: relative
}

.AvatarStack .AvatarStack-body {
    position: absolute
}

.AvatarStack.AvatarStack--two {
    min-width: 36px
}

.AvatarStack.AvatarStack--three-plus {
    min-width: 46px
}

.AvatarStack-body {
    background: var(--color-canvas-default);
    border-radius: 100px;
    display: flex
}

.AvatarStack-body .avatar {
    background-color: var(--color-canvas-default);
    border-radius: var(--primer-borderRadius-small, 4px);
    border-right: var(--primer-borderWidth-thin, 1px) solid var(--color-canvas-default);
    box-shadow: none;
    box-sizing: initial;
    display: flex;
    height: 20px;
    margin-right: -11px;
    position: relative;
    transition: margin .1s ease-in-out;
    width: 20px;
    z-index: 2
}

.AvatarStack-body .avatar:first-child {
    z-index: 3
}

.AvatarStack-body .avatar:last-child {
    border-right: 0;
    z-index: 1
}

.AvatarStack-body .avatar img {
    border-radius: var(--primer-borderRadius-small, 4px)
}

.AvatarStack-body .avatar:nth-child(n+4) {
    display: none;
    opacity: 0
}

.AvatarStack-body:hover .avatar {
    margin-right: 3px
}

.AvatarStack-body:hover .avatar:nth-child(n+4) {
    display: flex;
    opacity: 1
}

.AvatarStack-body:hover .avatar-more {
    display: none !important
}

.avatar.avatar-more {
    background: var(--color-canvas-subtle);
    margin-right: 0;
    z-index: 1
}

.avatar.avatar-more:after,.avatar.avatar-more:before {
    border-radius: 2px;
    content: "";
    display: block;
    height: 20px;
    outline: var(--primer-borderWidth-thin, 1px) solid var(--color-canvas-default);
    position: absolute
}

.avatar.avatar-more:before {
    background: var(--color-avatar-stack-fade-more);
    width: 17px
}

.avatar.avatar-more:after {
    background: var(--color-avatar-stack-fade);
    width: 14px
}

.AvatarStack--right .AvatarStack-body {
    flex-direction: row-reverse;
    right: 0
}

.AvatarStack--right .AvatarStack-body:hover .avatar {
    margin-left: 3px;
    margin-right: 0
}

.AvatarStack--right .AvatarStack-body .avatar:not(:last-child) {
    border-left: 0
}

.AvatarStack--right .avatar.avatar-more {
    background: var(--color-avatar-stack-fade)
}

.AvatarStack--right .avatar.avatar-more:before {
    width: 5px
}

.AvatarStack--right .avatar.avatar-more:after {
    background: var(--color-canvas-subtle);
    width: 2px
}

.AvatarStack--right .avatar {
    border-left: var(--primer-borderWidth-thin, 1px) solid var(--color-canvas-default);
    border-right: 0;
    margin-left: -11px;
    margin-right: 0
}

.Box {
    background-color: var(--color-canvas-default);
    border-color: var(--color-border-default);
    border-radius: var(--primer-borderRadius-medium, 6px);
    border-style: solid;
    border-width: var(--primer-borderWidth-thin, 1px)
}

.Box--condensed {
    line-height: 1.25
}

.Box--condensed .Box-body,.Box--condensed .Box-footer,.Box--condensed .Box-header {
    padding: var(--primer-stack-padding-condensed, 8px) var(--primer-stack-padding-normal, 16px)
}

.Box--condensed .Box-btn-octicon.btn-octicon {
    line-height: 1.25;
    margin: calc(var(--primer-controlStack-medium-gap-condensed, 8px)*-1) calc(var(--primer-controlStack-small-gap-spacious, 16px)*-1);
    padding: var(--primer-control-medium-paddingInline-condensed, 8px) var(--primer-control-medium-paddingInline-spacious, 16px)
}

.Box--condensed .Box-row {
    padding: var(--primer-stack-padding-condensed, 8px) var(--primer-stack-padding-normal, 16px)
}

.Box--spacious .Box-header {
    line-height: 1.25;
    padding: var(--primer-stack-padding-spacious, 24px)
}

.Box--spacious .Box-title {
    font-size: var(--primer-text-title-size-medium, 20px)
}

.Box--spacious .Box-body,.Box--spacious .Box-btn-octicon.btn-octicon,.Box--spacious .Box-footer {
    padding: var(--primer-stack-padding-spacious, 24px)
}

.Box--spacious .Box-btn-octicon.btn-octicon {
    margin: calc(var(--primer-stack-gap-spacious, 24px)*-1) calc(var(--primer-stack-gap-spacious, 24px)*-1)
}

.Box--spacious .Box-row {
    padding: var(--primer-stack-padding-spacious, 24px)
}

.Box-header {
    background-color: var(--color-canvas-subtle);
    border-color: var(--color-border-default);
    border-style: solid;
    border-top-left-radius: var(--primer-borderRadius-medium, 6px);
    border-top-right-radius: var(--primer-borderRadius-medium, 6px);
    border-width: var(--primer-borderWidth-thin, 1px);
    margin: calc(var(--primer-borderWidth-thin, 1px)*-1) calc(var(--primer-borderWidth-thin, 1px)*-1) 0;
    padding: var(--primer-stack-padding-normal, 16px)
}

.Box-title {
    font-size: var(--primer-text-body-size-medium, 14px);
    font-weight: var(--base-text-weight-semibold, 600)
}

.Box-body {
    border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    padding: var(--primer-stack-padding-normal, 16px)
}

.Box-body:last-of-type {
    border-bottom-left-radius: var(--primer-borderRadius-medium, 6px);
    border-bottom-right-radius: var(--primer-borderRadius-medium, 6px);
    margin-bottom: calc(var(--primer-borderWidth-thin, 1px)*-1)
}

.Box-row {
    border-top: var(--primer-borderWidth-thin, 1px) solid var(--color-border-muted);
    list-style-type: none;
    margin-top: calc(var(--primer-borderWidth-thin, 1px)*-1);
    padding: var(--primer-stack-padding-normal, 16px)
}

.Box-row:first-of-type {
    border-top-left-radius: var(--primer-borderRadius-medium, 6px);
    border-top-right-radius: var(--primer-borderRadius-medium, 6px)
}

.Box-row:last-of-type {
    border-bottom-left-radius: var(--primer-borderRadius-medium, 6px);
    border-bottom-right-radius: var(--primer-borderRadius-medium, 6px)
}

.Box-row.Box-row--unread,.Box-row.unread {
    box-shadow: inset 2px 0 0 var(--color-accent-emphasis)
}

.Box-row.navigation-focus .Box-row--drag-button {
    color: var(--color-accent-fg);
    cursor: grab;
    opacity: 1
}

.Box-row.navigation-focus.is-dragging .Box-row--drag-button {
    cursor: grabbing
}

.Box-row.navigation-focus.sortable-chosen,.Box-row.navigation-focus.sortable-ghost {
    background-color: var(--color-canvas-subtle)
}

.Box-row.navigation-focus.sortable-ghost .Box-row--drag-hide {
    opacity: 0
}

.Box-row--focus-gray.navigation-focus {
    background-color: var(--color-canvas-subtle)
}

.Box-row--focus-blue.navigation-focus {
    background-color: var(--color-accent-subtle)
}

.Box-row--hover-gray:hover {
    background-color: var(--color-canvas-subtle)
}

.Box-row--hover-blue:hover {
    background-color: var(--color-accent-subtle)
}

@media(min-width: 768px) {
    .Box-row-link {
        color:var(--color-fg-default);
        text-decoration: none
    }

    .Box-row-link:hover {
        color: var(--color-accent-fg);
        text-decoration: none
    }
}

.Box-row--drag-button {
    opacity: 0
}

.Box-footer {
    border-radius: 0 0 var(--primer-borderRadius-medium, 6px) var(--primer-borderRadius-medium, 6px);
    border-top: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    margin-top: calc(var(--primer-borderWidth-thin, 1px)*-1);
    padding: var(--primer-stack-padding-normal, 16px)
}

.Box--scrollable {
    max-height: 324px;
    overflow: scroll
}

.Box--blue,.Box--blue .Box-header {
    border-color: var(--color-accent-muted)
}

.Box--blue .Box-header {
    background-color: var(--color-accent-subtle)
}

.Box--blue .Box-body,.Box--blue .Box-footer,.Box--blue .Box-row {
    border-color: var(--color-accent-muted)
}

.Box--danger,.Box--danger .Box-body:last-of-type,.Box--danger .Box-row:first-of-type {
    border-color: var(--color-danger-emphasis)
}

.Box-header--blue {
    background-color: var(--color-accent-subtle);
    border-color: var(--color-accent-muted)
}

.Box-row--yellow {
    background-color: var(--color-attention-subtle)
}

.Box-row--blue {
    background-color: var(--color-accent-subtle)
}

.Box-row--gray {
    background-color: var(--color-canvas-subtle)
}

.Box-btn-octicon.btn-octicon {
    line-height: 1.5;
    margin: calc(var(--primer-controlStack-small-gap-spacious, 16px)*-1) calc(var(--primer-controlStack-small-gap-spacious, 16px)*-1);
    padding: var(--primer-control-medium-paddingInline-spacious, 16px) var(--primer-control-medium-paddingInline-spacious, 16px)
}

.blankslate {
    padding: var(--base-size-32, 32px);
    position: relative;
    text-align: center
}

.blankslate p {
    color: var(--color-fg-muted)
}

.blankslate code {
    background: var(--color-canvas-default);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-muted);
    border-radius: var(--primer-borderRadius-medium, 6px);
    font-size: var(--primer-text-body-size-medium, 14px);
    padding: 2px 5px 3px
}

.blankslate img {
    height: 56px;
    width: 56px
}

.blankslate-icon {
    color: var(--color-fg-muted);
    margin-bottom: var(--primer-stack-gap-condensed, 8px);
    margin-left: var(--primer-control-small-gap, 4px);
    margin-right: var(--primer-control-small-gap, 4px)
}

.blankslate-image {
    margin-bottom: var(--primer-stack-gap-normal, 16px)
}

.blankslate-heading {
    margin-bottom: var(--base-size-4, 4px)
}

.blankslate-action {
    margin-top: var(--primer-stack-gap-normal, 16px)
}

.blankslate-action:first-of-type {
    margin-top: var(--primer-stack-gap-spacious, 24px)
}

.blankslate-action:last-of-type {
    margin-bottom: var(--primer-stack-gap-condensed, 8px)
}

.blankslate-capped {
    border-radius: 0 0 var(--primer-borderRadius-medium, 6px) var(--primer-borderRadius-medium, 6px)
}

.blankslate-spacious {
    padding: var(--base-size-80, 80px) var(--base-size-40, 40px)
}

.blankslate-narrow {
    margin: 0 auto;
    max-width: 485px
}

.blankslate-large img {
    height: 80px;
    width: 80px
}

.blankslate-large h3 {
    font-size: 24px;
    margin: var(--primer-stack-gap-normal, 16px) 0
}

.blankslate-large p {
    font-size: var(--primer-text-body-size-large, 16px)
}

.blankslate-clean-background {
    border: 0
}

.Overlay[popover] {
    border-width: 0;
    min-width: 192px;
    padding: 0;
    position: absolute
}

.Overlay[popover]:not(:open) {
    display: none
}

anchored-position {
    display: block
}

.breadcrumb-item {
    display: inline-block;
    list-style: none;
    margin-left: -0.35em;
    white-space: nowrap
}

.breadcrumb-item:after {
    border-right: .1em solid var(--color-fg-muted);
    content: "";
    display: inline-block;
    height: .8em;
    margin: 0 .5em;
    transform: rotate(15deg)
}

.breadcrumb-item:first-child {
    margin-left: 0
}

.breadcrumb-item-selected:after,.breadcrumb-item[aria-current]:not([aria-current=false]):after {
    content: none
}

.breadcrumb-item-selected a {
    color: var(--color-fg-default)
}

:root {
    --primer-duration-fast: 80ms;
    --primer-easing-easeInOut: cubic-bezier(0.65,0,0.35,1)
}

.Button {
    align-items: center;
    background-color: initial;
    border: var(--primer-borderWidth-thin, 1px) solid;
    border-color: #0000;
    border-radius: var(--primer-borderRadius-medium, 6px);
    color: var(--color-btn-text);
    cursor: pointer;
    display: inline-flex;
    flex-direction: row;
    font-size: var(--primer-text-body-size-medium, 14px);
    font-weight: var(--base-text-weight-medium, 500);
    gap: var(--base-size-4, 4px);
    height: var(--primer-control-medium-size, 32px);
    justify-content: space-between;
    min-width: max-content;
    padding: 0 var(--primer-control-medium-paddingInline-normal, 12px);
    position: relative;
    text-align: center;
    transition: var(--primer-duration-fast) var(--primer-easing-easeInOut);
    transition-property: color,fill,background-color,border-color;
    -webkit-user-select: none;
    user-select: none
}

@media(pointer: coarse) {
    .Button:before {
        content:"";
        height: 100%;
        left: 50%;
        min-height: 48px;
        min-width: 48px;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 100%
    }
}

.Button:hover {
    transition-duration: var(--primer-duration-fast)
}

.Button:active {
    transition: none
}

.Button:disabled,.Button[aria-disabled=true] {
    box-shadow: none;
    cursor: not-allowed
}

.Button-withTooltip {
    display: inline-block;
    position: relative
}

a.Button:hover,summary.Button:hover {
    text-decoration: none
}

.Button-content {
    align-items: center;
    display: grid;
    flex: 1 0 auto;
    grid-template-areas: "leadingVisual text trailingVisual";
    grid-template-columns: min-content minmax(0, auto) min-content;
    place-content: center
}

.Button-content>:not(:last-child) {
    margin-right: var(--primer-control-medium-gap, 8px)
}

.Button-content--alignStart {
    justify-content: start
}

.Button-visual {
    display: flex;
    pointer-events: none
}

.Button-visual .Counter {
    background-color: var(--color-btn-counter-bg);
    color: inherit
}

.Button-label {
    grid-area: text;
    line-height: var(--primer-text-body-lineHeight-medium, 1.42857);
    white-space: nowrap
}

.Button-leadingVisual {
    grid-area: leadingVisual
}

.Button-trailingVisual {
    grid-area: trailingVisual
}

.Button-trailingAction {
    margin-right: calc(var(--base-size-4, 4px)*-1)
}

.Button--small {
    font-size: var(--primer-text-body-size-small, 12px);
    gap: var(--primer-control-small-gap, 4px);
    height: var(--primer-control-small-size, 28px);
    padding: 0 var(--primer-control-small-paddingInline-condensed, 8px)
}

.Button--small .Button-label {
    line-height: var(--primer-text-body-lineHeight-small, 1.66667)
}

.Button--small .Button-content>:not(:last-child) {
    margin-right: var(--primer-control-small-gap, 4px)
}

.Button--large {
    gap: var(--primer-control-large-gap, 8px);
    height: var(--primer-control-large-size, 40px);
    padding: 0 var(--primer-control-large-paddingInline-spacious, 16px)
}

.Button--large .Button-label {
    line-height: var(--primer-text-body-lineHeight-large, 1.5)
}

.Button--large .Button-content>:not(:last-child) {
    margin-right: var(--primer-control-large-gap, 8px)
}

.Button--fullWidth {
    width: 100%
}

.Button--primary {
    fill: var(--color-btn-primary-icon);
    background-color: var(--color-btn-primary-bg);
    border-color: var(--color-btn-primary-border);
    box-shadow: var(--color-btn-primary-shadow),var(--color-btn-primary-inset-shadow);
    color: var(--color-btn-primary-text)
}

.Button--primary:hover:not(:disabled) {
    background-color: var(--color-btn-primary-hover-bg);
    border-color: var(--color-btn-primary-hover-border)
}

.Button--primary:focus {
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis);
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px
}

.Button--primary:focus:not(:focus-visible) {
    box-shadow: none;
    outline: 1px solid #0000
}

.Button--primary:focus-visible {
    box-shadow: inset 0 0 0 3px var(--color-fg-on-emphasis);
    outline: 2px solid var(--color-accent-fg);
    outline-offset: -2px
}

.Button--primary:active:not(:disabled),.Button--primary[aria-pressed=true] {
    background-color: var(--color-btn-primary-selected-bg);
    box-shadow: var(--color-btn-primary-selected-shadow)
}

.Button--primary:disabled,.Button--primary[aria-disabled=true] {
    fill: var(--color-btn-primary-disabled-text);
    background-color: var(--color-btn-primary-disabled-bg);
    border-color: var(--color-btn-primary-disabled-border);
    color: var(--color-btn-primary-disabled-text)
}

.Button--secondary {
    fill: var(--color-fg-muted);
    background-color: var(--color-btn-bg);
    border-color: var(--color-btn-border);
    box-shadow: var(--color-btn-shadow),var(--color-btn-inset-shadow);
    color: var(--color-btn-text)
}

.Button--secondary:hover:not(:disabled) {
    background-color: var(--color-btn-hover-bg);
    border-color: var(--color-btn-hover-border)
}

.Button--secondary:active:not(:disabled) {
    background-color: var(--color-btn-active-bg);
    border-color: var(--color-btn-active-border)
}

.Button--secondary[aria-pressed=true] {
    background-color: var(--color-btn-selected-bg);
    box-shadow: var(--color-primer-shadow-inset)
}

.Button--secondary:disabled,.Button--secondary[aria-disabled=true] {
    fill: var(--color-primer-fg-disabled);
    background-color: var(--color-btn-bg);
    border-color: var(--color-btn-border);
    color: var(--color-primer-fg-disabled)
}

.Button--invisible {
    color: var(--color-btn-text)
}

.Button--invisible:hover:not(:disabled) {
    background-color: var(--color-action-list-item-default-hover-bg)
}

.Button--invisible:active:not(:disabled),.Button--invisible[aria-pressed=true] {
    background-color: var(--color-action-list-item-default-active-bg)
}

.Button--invisible:disabled,.Button--invisible[aria-disabled=true] {
    fill: var(--color-primer-fg-disabled);
    background-color: var(--color-btn-bg);
    border-color: var(--color-btn-border);
    color: var(--color-primer-fg-disabled)
}

.Button--invisible.Button--invisible-noVisuals .Button-label {
    color: var(--color-accent-fg)
}

.Button--invisible .Button-visual {
    color: var(--color-fg-muted)
}

.Button--link {
    fill: var(--color-accent-fg);
    border: none;
    color: var(--color-accent-fg);
    display: inline-block;
    font-size: inherit;
    height: unset;
    padding: 0
}

.Button--link:hover:not(:disabled) {
    text-decoration: underline
}

.Button--link:focus,.Button--link:focus-visible {
    outline-offset: 2px
}

.Button--link:disabled,.Button--link[aria-disabled=true] {
    fill: var(--color-primer-fg-disabled);
    background-color: initial;
    border-color: #0000;
    color: var(--color-primer-fg-disabled)
}

.Button--danger {
    fill: var(--color-btn-danger-icon);
    background-color: var(--color-btn-bg);
    border-color: var(--color-btn-border);
    box-shadow: var(--color-btn-shadow),var(--color-btn-inset-shadow);
    color: var(--color-btn-danger-text)
}

.Button--danger:hover:not(:disabled) {
    fill: var(--color-btn-danger-hover-text);
    background-color: var(--color-btn-danger-hover-bg);
    border-color: var(--color-btn-danger-hover-border);
    box-shadow: var(--color-btn-danger-hover-shadow),var(--color-btn-danger-hover-inset-shadow);
    color: var(--color-btn-danger-hover-text)
}

.Button--danger:active:not(:disabled),.Button--danger[aria-pressed=true] {
    fill: var(--color-btn-danger-selected-text);
    background-color: var(--color-btn-danger-selected-bg);
    border-color: var(--color-btn-danger-selected-border);
    box-shadow: var(--color-btn-danger-selected-shadow);
    color: var(--color-btn-danger-selected-text)
}

.Button--danger:disabled,.Button--danger[aria-disabled=true] {
    fill: var(--color-btn-danger-disabled-text);
    background-color: var(--color-btn-danger-disabled-bg);
    border-color: var(--color-btn-border);
    color: var(--color-btn-danger-disabled-text)
}

.Button--iconOnly {
    display: inline-grid;
    padding: unset;
    place-content: center;
    width: var(--primer-control-medium-size, 32px)
}

.Button--iconOnly.Button--small {
    width: var(--primer-control-small-size, 28px)
}

.Button--iconOnly.Button--large {
    width: var(--primer-control-large-size, 40px)
}

.Counter {
    background-color: var(--color-neutral-muted);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-counter-border);
    border-radius: 2em;
    color: var(--color-fg-default);
    display: inline-block;
    font-size: var(--primer-text-body-size-small, 12px);
    font-weight: var(--base-text-weight-medium, 500);
    line-height: calc(var(--base-size-20, 20px) - var(--primer-borderWidth-thin, 1px)*2);
    min-width: var(--base-size-20, 20px);
    padding: 0 6px;
    text-align: center
}

.Counter:empty {
    display: none
}

.Counter .octicon {
    opacity: .8;
    vertical-align: text-top
}

.Counter--primary {
    background-color: var(--color-neutral-emphasis);
    color: var(--color-fg-on-emphasis)
}

.Counter--secondary {
    background-color: var(--color-neutral-subtle);
    color: var(--color-fg-muted)
}

.flash:not(.Banner) {
    background-image: linear-gradient(var(--color-accent-subtle), var(--color-accent-subtle));
    border-color: var(--color-accent-muted);
    border-radius: var(--primer-borderRadius-medium, 6px);
    border-style: solid;
    border-width: var(--primer-borderWidth-thin, 1px);
    color: var(--color-fg-default);
    padding: var(--base-size-20, 20px) var(--primer-control-medium-paddingInline-spacious, 16px);
    position: relative
}

.flash:not(.Banner) .octicon {
    color: var(--color-accent-fg);
    margin-right: var(--base-size-12, 12px)
}

.flash:not(.Banner) p:last-child {
    margin-bottom: 0
}

.flash-messages {
    margin-bottom: var(--primer-stack-gap-spacious, 24px)
}

.flash-close:not(.Banner-close) {
    -webkit-appearance: none;
    appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    float: right;
    margin: calc(var(--primer-control-medium-paddingInline-spacious, 16px)*-1);
    padding: var(--primer-control-medium-paddingInline-spacious, 16px);
    text-align: center
}

.flash-close:not(.Banner-close):hover {
    opacity: .7
}

.flash-close:not(.Banner-close):active {
    opacity: .5
}

.flash-close:not(.Banner-close) .octicon {
    margin-right: 0
}

.flash-action:not(.Banner-actions) {
    background-clip: padding-box;
    float: right;
    margin-left: var(--primer-stack-gap-spacious, 24px);
    margin-top: -3px
}

.flash-action.btn:not(.Banner-actions) .octicon {
    color: var(--color-fg-muted);
    margin-right: var(--primer-control-small-gap, 4px)
}

.flash-action.btn-primary:not(.Banner-actions) {
    background-clip: initial
}

.flash-action.btn-primary:not(.Banner-actions) .octicon {
    color: inherit
}

.flash-warn:not(.Banner) {
    background-image: linear-gradient(var(--color-attention-subtle), var(--color-attention-subtle));
    border-color: var(--color-attention-muted);
    color: var(--color-fg-default)
}

.flash-warn:not(.Banner) .octicon {
    color: var(--color-attention-fg)
}

.flash-error:not(.Banner) {
    background-image: linear-gradient(var(--color-danger-subtle), var(--color-danger-subtle));
    border-color: var(--color-danger-muted);
    color: var(--color-fg-default)
}

.flash-error:not(.Banner) .octicon {
    color: var(--color-danger-fg)
}

.flash-success:not(.Banner) {
    background-image: linear-gradient(var(--color-success-subtle), var(--color-success-subtle));
    border-color: var(--color-success-muted);
    color: var(--color-fg-default)
}

.flash-success:not(.Banner) .octicon {
    color: var(--color-success-fg)
}

.flash-full:not(.Banner) {
    border-radius: 0;
    border-width: var(--primer-borderWidth-thin, 1px) 0;
    margin-top: calc(var(--primer-borderWidth-thin, 1px)*-1)
}

.flash-banner {
    border-left: 0;
    border-radius: 0;
    border-right: 0;
    border-top: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 90
}

.flash-banner,.flash-full {
    background-color: var(--color-canvas-default)
}

.warning {
    background-color: var(--color-attention-subtle);
    font-weight: var(--base-text-weight-semibold, 600);
    margin-bottom: .8em;
    padding: .5em
}

.labels {
    position: relative
}

.Label,.label {
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    border-radius: 2em;
    display: inline-block;
    font-size: var(--primer-text-body-size-small, 12px);
    font-weight: var(--base-text-weight-medium, 500);
    line-height: 18px;
    padding: 0 7px;
    white-space: nowrap
}

.Label:hover,.label:hover {
    text-decoration: none
}

.Label--large {
    line-height: 22px;
    padding-left: 10px;
    padding-right: 10px
}

.Label--inline {
    display: inline;
    font-size: 85%;
    padding: .12em .5em
}

.Label--primary {
    border-color: var(--color-neutral-emphasis);
    color: var(--color-fg-default)
}

.Label--secondary {
    border-color: var(--color-border-default);
    color: var(--color-fg-muted)
}

.Label--accent,.Label--info {
    border-color: var(--color-accent-emphasis);
    color: var(--color-accent-fg)
}

.Label--success {
    border-color: var(--color-success-emphasis);
    color: var(--color-success-fg)
}

.Label--attention,.Label--warning {
    border-color: var(--color-attention-emphasis);
    color: var(--color-attention-fg)
}

.Label--severe {
    border-color: var(--color-severe-emphasis);
    color: var(--color-severe-fg)
}

.Label--danger {
    border-color: var(--color-danger-emphasis);
    color: var(--color-danger-fg)
}

.Label--open {
    border-color: var(--color-open-emphasis);
    color: var(--color-open-fg)
}

.Label--closed {
    border-color: var(--color-closed-emphasis);
    color: var(--color-closed-fg)
}

.Label--done {
    border-color: var(--color-done-emphasis);
    color: var(--color-done-fg)
}

.Label--sponsors {
    border-color: var(--color-sponsors-emphasis);
    color: var(--color-sponsors-fg)
}

.Link {
    color: var(--color-accent-fg)
}

.Link:hover {
    cursor: pointer;
    text-decoration: underline
}

.Link:focus,.Link:focus-visible {
    outline-offset: 0
}

.Link--primary {
    color: var(--color-fg-default) !important
}

.Link--primary:hover {
    color: var(--color-accent-fg) !important
}

.Link--secondary {
    color: var(--color-fg-muted) !important
}

.Link--secondary:hover {
    color: var(--color-accent-fg) !important
}

.Link--muted {
    color: var(--color-fg-muted) !important
}

.Link--muted:hover {
    text-decoration: none
}

.Link--muted:hover,.Link--onHover:hover {
    color: var(--color-accent-fg) !important
}

.Link--onHover:hover {
    cursor: pointer;
    text-decoration: underline
}

.Link--muted:hover [class*=color-fg],.Link--primary:hover [class*=color-fg],.Link--secondary:hover [class*=color-fg] {
    color: inherit !important
}

.Popover {
    position: absolute;
    z-index: 100
}

.Popover-message {
    background-color: var(--color-canvas-overlay);
    border: var(--primer-borderWidth-thin, 1px) solid var(--color-border-default);
    border-radius: var(--primer-borderRadius-medium, 6px);
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 232px
}

.Popover-message:after,.Popover-message:before {
    content: "";
    display: inline-block;
    left: 50%;
    position: absolute
}

.Popover-message:before {
    border: 8px solid #0000;
    border-bottom: 8px solid var(--color-border-default);
    margin-left: -9px;
    top: -16px
}

.Popover-message:after {
    border: 7px solid #0000;
    border-bottom: 7px solid var(--color-canvas-overlay);
    margin-left: -8px;
    top: -14px
}

.Popover-message--no-caret:after,.Popover-message--no-caret:before {
    display: none
}

.Popover-message--bottom-left:after,.Popover-message--bottom-left:before,.Popover-message--bottom-right:after,.Popover-message--bottom-right:before,.Popover-message--bottom:after,.Popover-message--bottom:before {
    border-bottom-color: #0000;
    top: auto
}

.Popover-message--bottom-left:before,.Popover-message--bottom-right:before,.Popover-message--bottom:before {
    border-top-color: var(--color-border-default);
    bottom: -16px
}

.Popover-message--bottom-left:after,.Popover-message--bottom-right:after,.Popover-message--bottom:after {
    border-top-color: var(--color-canvas-overlay);
    bottom: -14px
}

.Popover-message--bottom-right,.Popover-message--top-right {
    margin-right: 0;
    right: -9px
}

.Popover-message--bottom-right:after,.Popover-message--bottom-right:before,.Popover-message--top-right:after,.Popover-message--top-right:before {
    left: auto;
    margin-left: 0
}

.Popover-message--bottom-right:before,.Popover-message--top-right:before {
    right: 20px
}

.Popover-message--bottom-right:after,.Popover-message--top-right:after {
    right: 21px
}

.Popover-message--bottom-left,.Popover-message--top-left {
    left: -9px;
    margin-left: 0
}

.Popover-message--bottom-left:after,.Popover-message--bottom-left:before,.Popover-message--top-left:after,.Popover-message--top-left:before {
    left: 24px;
    margin-left: 0
}

.Popover-message--bottom-left:after,.Popover-message--top-left:after {
    left: 25px
}

.Popover-message--left-bottom:after,.Popover-message--left-bottom:before,.Popover-message--left-top:after,.Popover-message--left-top:before,.Popover-message--left:after,.Popover-message--left:before,.Popover-message--right-bottom:after,.Popover-message--right-bottom:before,.Popover-message--right-top:after,.Popover-message--right-top:before,.Popover-message--right:after,.Popover-message--right:before {
    border-bottom-color: #0000;
    left: auto;
    margin-left: 0;
    top: 50%
}

.Popover-message--left-bottom:before,.Popover-message--left-top:before,.Popover-message--left:before,.Popover-message--right-bottom:before,.Popover-message--right-top:before,.Popover-message--right:before {
    margin-top: -9px
}

.Popover-message--left-bottom:after,.Popover-message--left-top:after,.Popover-message--left:after,.Popover-message--right-bottom:after,.Popover-message--right-top:after,.Popover-message--right:after {
    margin-top: -8px
}

.Popover-message--right-bottom:before,.Popover-message--right-top:before,.Popover-message--right:before {
    border-left-color: var(--color-border-default);
    right: -16px
}

.Popover-message--right-bottom:after,.Popover-message--right-top:after,.Popover-message--right:after {
    border-left-color: var(--color-canvas-overlay);
    right: -14px
}

.Popover-message--left-bottom:before,.Popover-message--left-top:before,.Popover-message--left:before {
    border-right-color: var(--color-border-default);
    left: -16px
}

.Popover-message--left-bottom:after,.Popover-message--left-top:after,.Popover-message--left:after {
    border-right-color: var(--color-canvas-overlay);
    left: -14px
}

.Popover-message--left-top:after,.Popover-message--left-top:before,.Popover-message--right-top:after,.Popover-message--right-top:before {
    top: 24px
}

.Popover-message--left-bottom:after,.Popover-message--left-bottom:before,.Popover-message--right-bottom:after,.Popover-message--right-bottom:before {
    top: auto
}

.Popover-message--left-bottom:before,.Popover-message--right-bottom:before {
    bottom: 16px
}

.Popover-message--left-bottom:after,.Popover-message--right-bottom:after {
    bottom: 17px
}

@media(min-width: 544px) {
    .Popover-message--large {
        min-width:320px
    }
}

@media(max-width: 767.98px) {
    .Popover {
        bottom:0 !important;
        left: 0 !important;
        position: fixed;
        right: 0 !important;
        top: auto !important
    }

    .Popover-message {
        bottom: auto;
        left: auto;
        margin: var(--primer-stack-gap-condensed, 8px);
        right: auto;
        top: auto;
        width: auto !important
    }

    .Popover-message>.btn-octicon {
        padding: var(--primer-control-medium-paddingInline-normal, 12px) !important
    }

    .Popover-message:after,.Popover-message:before {
        display: none
    }
}

.Progress {
    background-color: var(--color-neutral-muted);
    border-radius: 6px;
    display: flex;
    height: 8px;
    outline: 1px solid #0000;
    overflow: hidden
}

.Progress--large {
    height: 10px
}

.Progress--small {
    height: 5px
}

.Progress-item {
    outline: 2px solid #0000
}

.Progress-item+.Progress-item {
    margin-left: 2px
}

.State,.state {
    border-radius: 2em;
    display: inline-block;
    font-size: var(--primer-text-body-size-medium, 14px);
    font-weight: var(--base-text-weight-medium, 500);
    line-height: var(--primer-control-medium-lineBoxHeight, 20px);
    padding: 5px var(--primer-control-medium-paddingInline-normal, 12px);
    text-align: center;
    white-space: nowrap
}

.State,.State--draft,.state {
    background-color: var(--color-neutral-emphasis);
    border: var(--primer-borderWidth-thin, 1px) solid #0000;
    color: var(--color-fg-on-emphasis)
}

.State--open {
    background-color: var(--color-open-emphasis)
}

.State--merged,.State--open {
    color: var(--color-fg-on-emphasis)
}

.State--merged {
    background-color: var(--color-done-emphasis)
}

.State--closed {
    background-color: var(--color-closed-emphasis);
    color: var(--color-fg-on-emphasis)
}

.State--small {
    font-size: var(--primer-text-body-size-small, 12px);
    line-height: var(--base-size-24, 24px);
    padding: 0 10px
}

.State--small .octicon {
    width: 1em
}

.Subhead {
    border-bottom: var(--primer-borderWidth-thin, 1px) solid var(--color-border-muted);
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    margin-bottom: var(--primer-stack-gap-normal, 16px);
    padding-bottom: var(--primer-stack-padding-condensed, 8px)
}

.Subhead--spacious {
    margin-top: var(--base-size-40, 40px)
}

.Subhead-heading {
    flex: 1 1 auto;
    font-size: 24px;
    font-weight: var(--base-text-weight-normal, 400);
    order: 0
}

.Subhead-heading--danger {
    color: var(--color-danger-fg);
    font-weight: var(--base-text-weight-semibold, 600)
}

.Subhead-description {
    color: var(--color-fg-muted);
    flex: 1 100%;
    font-size: var(--primer-text-body-size-medium, 14px);
    order: 2
}

.Subhead-actions {
    align-self: center;
    justify-content: flex-end;
    margin: var(--base-size-4, 4px) 0 var(--base-size-4, 4px) var(--base-size-4, 4px);
    order: 1
}

.Subhead-actions+.Subhead-description {
    margin-top: var(--base-size-4, 4px)
}

.Truncate {
    display: inline-flex;
    max-width: 100%;
    min-width: 0
}

.Truncate>.Truncate-text {
    max-width: -moz-fit-content;
    max-width: fit-content;
    min-width: 1ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.Truncate>.Truncate-text+.Truncate-text {
    margin-left: var(--primer-control-small-gap, 4px)
}

.Truncate>.Truncate-text.Truncate-text--primary {
    flex-basis: 200%
}

.Truncate>.Truncate-text.Truncate-text--expandable:active,.Truncate>.Truncate-text.Truncate-text--expandable:focus,.Truncate>.Truncate-text.Truncate-text--expandable:hover {
    cursor: pointer;
    flex-shrink: 0;
    max-width: 100% !important
}

.TimelineItem {
    display: flex;
    margin-left: var(--primer-stack-gap-normal, 16px);
    padding: var(--primer-stack-padding-normal, 16px) 0;
    position: relative
}

.TimelineItem:before {
    background-color: var(--color-border-muted);
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    top: 0;
    width: var(--primer-borderWidth-thick, 2px)
}

.TimelineItem:target .TimelineItem-badge {
    border-color: var(--color-accent-emphasis);
    box-shadow: 0 0 .2em var(--color-accent-muted)
}

.TimelineItem-badge {
    align-items: center;
    background-color: var(--color-timeline-badge-bg);
    border: var(--primer-borderWidth-thick, 2px) solid var(--color-canvas-default);
    border-radius: 50%;
    color: var(--color-fg-muted);
    display: flex;
    flex-shrink: 0;
    height: var(--primer-control-medium-size, 32px);
    justify-content: center;
    margin-left: calc(var(--primer-control-medium-size, 32px)/-2 + 1px);
    margin-right: var(--primer-controlStack-medium-gap-condensed, 8px);
    position: relative;
    width: var(--primer-control-medium-size, 32px);
    z-index: 1
}

.TimelineItem-badge--success {
    background-color: var(--color-success-emphasis);
    border: var(--primer-borderWidth-thin, 1px) solid #0000;
    color: var(--color-fg-on-emphasis)
}

.TimelineItem-body {
    color: var(--color-fg-muted);
    flex: auto;
    margin-top: var(--base-size-4, 4px);
    max-width: 100%;
    min-width: 0
}

.TimelineItem-avatar {
    left: -72px;
    position: absolute;
    z-index: 1
}

.TimelineItem-break {
    background-color: var(--color-canvas-default);
    border: 0;
    border-top: var(--primer-borderWidth-thicker, 4px) solid var(--color-border-default);
    height: var(--primer-stack-gap-spacious, 24px);
    margin: 0;
    margin-bottom: calc(var(--primer-stack-gap-normal, 16px)*-1);
    margin-left: -56px;
    position: relative;
    z-index: 1
}

.TimelineItem--condensed {
    padding-bottom: 0;
    padding-top: var(--base-size-4, 4px)
}

.TimelineItem--condensed:last-child {
    padding-bottom: var(--primer-stack-gap-normal, 16px)
}

.TimelineItem--condensed .TimelineItem-badge {
    background-color: var(--color-canvas-default);
    border: 0;
    color: var(--color-fg-muted);
    height: var(--base-size-16, 16px);
    margin-bottom: var(--base-size-8, 8px);
    margin-top: var(--base-size-8, 8px)
}

.css-truncate .css-truncate-overflow,.css-truncate .css-truncate-target,.css-truncate.css-truncate-overflow,.css-truncate.css-truncate-target {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.css-truncate .css-truncate-target,.css-truncate.css-truncate-target {
    display: inline-block;
    max-width: 125px;
    vertical-align: top
}

.css-truncate.expandable.css-truncate-target:hover,.css-truncate.expandable.zeroclipboard-is-hover .css-truncate-target,.css-truncate.expandable.zeroclipboard-is-hover.css-truncate-target,.css-truncate.expandable:hover .css-truncate-target {
    max-width: 10000px !important
}

.OrderedList {
    margin: 8px
}

.OrderedList-type--decimal {
    list-style-type: decimal
}

.OrderedList-type--upperAlpha {
    list-style-type: upper-alpha
}

.OrderedList-type--lowerAlpha {
    list-style-type: lower-alpha
}

.OrderedList-type--upperRoman {
    list-style-type: upper-roman
}

.OrderedList-type--lowerRoman {
    list-style-type: lower-roman
}

.UnorderedList {
    margin: 8px
}

/*# sourceMappingURL=primer-fdf103ebabde.css.map*/
