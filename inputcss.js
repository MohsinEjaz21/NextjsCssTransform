export const DefaultCssTemplate = `

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  height: 100%
}

.bg{
  background: white;
}

article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary {
  display: block
}

audio,canvas,progress,video {
  display: inline-block;
  vertical-align: baseline
}

audio:not([controls]) {
  display: none;
  height: 0
}

[hidden],template {
  display: none
}

a:active,a:hover {
  outline: 0
}

abbr[title] {
  border-bottom: 1px dotted
}

b,optgroup,strong {
  font-weight: 700
}

dfn {
  font-style: italic
}

mark {
  background: #ff0;
  color: #000
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

sup {
  top: -.5em
}

sub {
  bottom: -.25em
}

img {
  border: 0
}

svg:not(:root) {
  overflow: hidden
}

hr {
  box-sizing: content-box;
  height: 0
}

pre,textarea {
  overflow: auto
}

code,kbd,pre,samp {
  font-family: monospace,monospace;
  font-size: 1em
}

button,input,optgroup,select,textarea {
  color: inherit;
  font: inherit;
  margin: 0
}

button {
  overflow: visible
}

button,select {
  text-transform: none
}

button[disabled],html input[disabled] {
  cursor: default
}

button::-moz-focus-inner,input::-moz-focus-inner {
  border: 0;
  padding: 0
}

input {
  line-height: normal
}

input[type=checkbox],input[type=radio] {
  box-sizing: border-box;
  padding: 0
}

input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button {
  height: auto
}

input[type=search] {
  -webkit-appearance: none
}

input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}

legend {
  border: 0;
  padding: 0
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

td,th {
  padding: 0
}

@font-face {
  font-family: webflow-icons;
  src: url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBiUAAAC8AAAAYGNtYXDpP+a4AAABHAAAAFxnYXNwAAAAEAAAAXgAAAAIZ2x5ZmhS2XEAAAGAAAADHGhlYWQTFw3HAAAEnAAAADZoaGVhCXYFgQAABNQAAAAkaG10eCe4A1oAAAT4AAAAMGxvY2EDtALGAAAFKAAAABptYXhwABAAPgAABUQAAAAgbmFtZSoCsMsAAAVkAAABznBvc3QAAwAAAAAHNAAAACAAAwP4AZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpAwPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAQAAAAAwACAACAAQAAQAg5gPpA//9//8AAAAAACDmAOkA//3//wAB/+MaBBcIAAMAAQAAAAAAAAAAAAAAAAABAAH//wAPAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEBIAAAAyADgAAFAAAJAQcJARcDIP5AQAGA/oBAAcABwED+gP6AQAABAOAAAALgA4AABQAAEwEXCQEH4AHAQP6AAYBAAcABwED+gP6AQAAAAwDAAOADQALAAA8AHwAvAAABISIGHQEUFjMhMjY9ATQmByEiBh0BFBYzITI2PQE0JgchIgYdARQWMyEyNj0BNCYDIP3ADRMTDQJADRMTDf3ADRMTDQJADRMTDf3ADRMTDQJADRMTAsATDSANExMNIA0TwBMNIA0TEw0gDRPAEw0gDRMTDSANEwAAAAABAJ0AtAOBApUABQAACQIHCQEDJP7r/upcAXEBcgKU/usBFVz+fAGEAAAAAAL//f+9BAMDwwAEAAkAABcBJwEXAwE3AQdpA5ps/GZsbAOabPxmbEMDmmz8ZmwDmvxmbAOabAAAAgAA/8AEAAPAAB0AOwAABSInLgEnJjU0Nz4BNzYzMTIXHgEXFhUUBw4BBwYjNTI3PgE3NjU0Jy4BJyYjMSIHDgEHBhUUFx4BFxYzAgBqXV6LKCgoKIteXWpqXV6LKCgoKIteXWpVSktvICEhIG9LSlVVSktvICEhIG9LSlVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoZiEgb0tKVVVKS28gISEgb0tKVVVKS28gIQABAAABwAIAA8AAEgAAEzQ3PgE3NjMxFSIHDgEHBhUxIwAoKIteXWpVSktvICFmAcBqXV6LKChmISBvS0pVAAAAAgAA/8AFtgPAADIAOgAAARYXHgEXFhUUBw4BBwYHIxUhIicuAScmNTQ3PgE3NjMxOAExNDc+ATc2MzIXHgEXFhcVATMJATMVMzUEjD83NlAXFxYXTjU1PQL8kz01Nk8XFxcXTzY1PSIjd1BQWlJJSXInJw3+mdv+2/7c25MCUQYcHFg5OUA/ODlXHBwIAhcXTzY1PTw1Nk8XF1tQUHcjIhwcYUNDTgL+3QFt/pOTkwABAAAAAQAAmM7nP18PPPUACwQAAAAAANciZKUAAAAA1yJkpf/9/70FtgPDAAAACAACAAAAAAAAAAEAAAPA/8AAAAW3//3//QW2AAEAAAAAAAAAAAAAAAAAAAAMBAAAAAAAAAAAAAAAAgAAAAQAASAEAADgBAAAwAQAAJ0EAP/9BAAAAAQAAAAFtwAAAAAAAAAKABQAHgAyAEYAjACiAL4BFgE2AY4AAAABAAAADAA8AAMAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADQAAAAEAAAAAAAIABwCWAAEAAAAAAAMADQBIAAEAAAAAAAQADQCrAAEAAAAAAAUACwAnAAEAAAAAAAYADQBvAAEAAAAAAAoAGgDSAAMAAQQJAAEAGgANAAMAAQQJAAIADgCdAAMAAQQJAAMAGgBVAAMAAQQJAAQAGgC4AAMAAQQJAAUAFgAyAAMAAQQJAAYAGgB8AAMAAQQJAAoANADsd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByd2ViZmxvdy1pY29ucwB3AGUAYgBmAGwAbwB3AC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==") format('truetype');
  font-weight: 400;
  font-style: normal
}

[class*=" w-icon-"],[class^=w-icon-] {
  font-family: webflow-icons!important;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

.w-icon-slider-right:before {
  content: "e600"
}

.w-icon-slider-left:before {
  content: "e601"
}

.w-icon-nav-menu:before {
  content: "e602"
}

.w-icon-arrow-down:before,.w-icon-dropdown-toggle:before {
  content: "e603"
}

.w-icon-file-upload-remove:before {
  content: "e900"
}

.w-icon-file-upload-icon:before {
  content: "e903"
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box
}

body {
  margin: 0;
  min-height: 100%;
  background-color: #1f2329;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 20px
}

html.w-mod-touch * {
  background-attachment: scroll!important
}

.w-block {
  display: block
}

.w-inline-block {
  max-width: 100%;
  display: inline-block
}

.w-clearfix:after,.w-clearfix:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2
}

.w-clearfix:after {
  clear: both
}

.w-hidden {
  display: none
}

.w-button {
  display: inline-block;
  padding: 9px 15px;
  background-color: #3898ec;
  color: #fff;
  border: 0;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0
}

input.w-button {
  -webkit-appearance: button
}

html[data-w-dynpage] [data-w-cloak] {
  color: transparent!important
}

.w-webflow-badge,.w-webflow-badge * {
  position: static;
  left: auto;
  top: auto;
  right: auto;
  bottom: auto;
  z-index: auto;
  display: block;
  visibility: visible;
  overflow: visible;
  overflow-x: visible;
  overflow-y: visible;
  box-sizing: border-box;
  width: auto;
  height: auto;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  margin: 0;
  padding: 0;
  float: none;
  clear: none;
  border: 0 transparent;
  border-radius: 0;
  background: 0 0;
  box-shadow: none;
  opacity: 1;
  transform: none;
  transition: none;
  direction: ltr;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-style: inherit;
  font-variant: inherit;
  text-align: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-indent: 0;
  text-transform: inherit;
  list-style-type: disc;
  text-shadow: none;
  font-smoothing: auto;
  vertical-align: baseline;
  cursor: inherit;
  white-space: inherit;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal
}

.w-webflow-badge {
  position: fixed!important;
  display: inline-block!important;
  visibility: visible!important;
  z-index: 2147483647!important;
  top: auto!important;
  right: 12px!important;
  bottom: 12px!important;
  left: auto!important;
  color: #aaadb0!important;
  background-color: #fff!important;
  border-radius: 3px!important;
  padding: 6px 8px 6px 6px!important;
  font-size: 12px!important;
  opacity: 1!important;
  line-height: 14px!important;
  text-decoration: none!important;
  transform: none!important;
  margin: 0!important;
  width: auto!important;
  height: auto!important;
  overflow: visible!important;
  white-space: nowrap;
  box-shadow: 0 0 0 1px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.1);
  cursor: pointer
}

.w-webflow-badge>img {
  display: inline-block!important;
  visibility: visible!important;
  opacity: 1!important;
  vertical-align: middle!important
}

figure {
  margin: 0 0 10px
}

.w-list-unstyled {
  padding-left: 0;
  list-style: none
}

.w-embed:after,.w-embed:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2
}

.w-embed:after {
  clear: both
}

.w-video {
  width: 100%;
  position: relative;
  padding: 0
}

.w-video embed,.w-video iframe,.w-video object {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none
}

fieldset {
  padding: 0;
  margin: 0;
  border: 0
}

button,html input[type=button],input[type=reset] {
  -webkit-appearance: button;
  border: 0;
  cursor: pointer;
  -webkit-appearance: button
}

.w-form {
  margin: 0 0 15px
}

.w-form-done {
  display: none;
  padding: 20px;
  text-align: center;
  background-color: #ddd
}

.w-form-fail {
  display: none;
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede
}

.w-input,.w-select {
  display: block;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  vertical-align: middle;
  background-color: #fff;
  border: 1px solid #ccc
}

.w-input:-moz-placeholder,.w-select:-moz-placeholder {
  color: #999
}

.w-input::-moz-placeholder,.w-select::-moz-placeholder {
  color: #999;
  opacity: 1
}

.w-input:-ms-input-placeholder,.w-select:-ms-input-placeholder {
  color: #999
}

.w-input::-webkit-input-placeholder,.w-select::-webkit-input-placeholder {
  color: #999
}

.w-input:focus,.w-select:focus {
  border-color: #3898ec;
  outline: 0
}

.w-input[disabled],.w-input[readonly],.w-select[disabled],.w-select[readonly],fieldset[disabled] .w-input,fieldset[disabled] .w-select {
  cursor: not-allowed;
  background-color: #eee
}

textarea.w-input,textarea.w-select {
  height: auto
}

.w-select {
  background-color: #f3f3f3
}

.w-select[multiple] {
  height: auto
}

.w-form-label {
  display: inline-block;
  cursor: pointer;
  font-weight: 400;
  margin-bottom: 0
}

.w-radio {
  display: block;
  margin-bottom: 5px;
  padding-left: 20px
}

.w-radio:after,.w-radio:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2
}

.w-radio:after {
  clear: both
}

.w-radio-input {
  margin: 3px 0 0 -20px;
  line-height: normal;
  float: left
}

.w-file-upload {
  display: block;
  margin-bottom: 10px
}

.w-file-upload-input {
  width: .1px;
  height: .1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -100
}

.w-file-upload-default,.w-file-upload-success,.w-file-upload-uploading {
  display: inline-block;
  color: #333
}

.w-file-upload-error {
  display: block;
  margin-top: 10px
}

.w-file-upload-default.w-hidden,.w-file-upload-error.w-hidden,.w-file-upload-success.w-hidden,.w-file-upload-uploading.w-hidden {
  display: none
}

.w-file-upload-uploading-btn {
  display: flex;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  margin: 0;
  padding: 8px 12px;
  border: 1px solid #ccc;
  background-color: #fafafa
}

.w-file-upload-file {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin: 0;
  padding: 8px 9px 8px 11px;
  border: 1px solid #ccc;
  background-color: #fafafa
}

.w-file-upload-file-name {
  font-size: 14px;
  font-weight: 400;
  display: block
}

.w-file-remove-link {
  margin-top: 3px;
  margin-left: 10px;
  width: auto;
  height: auto;
  padding: 3px;
  display: block;
  cursor: pointer
}

.w-icon-file-upload-remove {
  margin: auto;
  font-size: 10px
}

.w-file-upload-error-msg {
  display: inline-block;
  color: #ea384c;
  padding: 2px 0
}

.w-file-upload-info {
  display: inline-block;
  line-height: 38px;
  padding: 0 12px
}

.w-file-upload-label {
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  margin: 0;
  padding: 8px 12px;
  border: 1px solid #ccc;
  background-color: #fafafa
}

.w-icon-file-upload-icon,.w-icon-file-upload-uploading {
  display: inline-block;
  margin-right: 8px;
  width: 20px
}

.w-icon-file-upload-uploading {
  height: 20px
}

.w-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 940px
}

.w-container:after,.w-container:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2
}

.w-container:after {
  clear: both
}

.w-container .w-row {
  margin-left: -10px;
  margin-right: -10px
}

.w-row:after,.w-row:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2
}

.w-row:after {
  clear: both
}

.w-row .w-row {
  margin-left: 0;
  margin-right: 0
}

.w-col {
  position: relative;
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px
}

.w-col .w-col {
  padding-left: 0;
  padding-right: 0
}

.w-col-1 {
  width: 8.33333333%
}

.w-col-2 {
  width: 16.66666667%
}

.w-col-3 {
  width: 25%
}

.w-col-4 {
  width: 33.33333333%
}

.w-col-5 {
  width: 41.66666667%
}

.w-col-6 {
  width: 50%
}

.w-col-7 {
  width: 58.33333333%
}

.w-col-8 {
  width: 66.66666667%
}

.w-col-9 {
  width: 75%
}

.w-col-10 {
  width: 83.33333333%
}

.w-col-11 {
  width: 91.66666667%
}

.w-col-12 {
  width: 100%
}

.w-hidden-main {
  display: none!important
}

@media screen and (max-width: 991px) {
  .w-container {
      max-width:728px
  }

  .w-hidden-main {
      display: inherit!important
  }

  .w-hidden-medium {
      display: none!important
  }

  .w-col-medium-1 {
      width: 8.33333333%
  }

  .w-col-medium-2 {
      width: 16.66666667%
  }

  .w-col-medium-3 {
      width: 25%
  }

  .w-col-medium-4 {
      width: 33.33333333%
  }

  .w-col-medium-5 {
      width: 41.66666667%
  }

  .w-col-medium-6 {
      width: 50%
  }

  .w-col-medium-7 {
      width: 58.33333333%
  }

  .w-col-medium-8 {
      width: 66.66666667%
  }

  .w-col-medium-9 {
      width: 75%
  }

  .w-col-medium-10 {
      width: 83.33333333%
  }

  .w-col-medium-11 {
      width: 91.66666667%
  }

  .w-col-medium-12 {
      width: 100%
  }

  .w-col-stack {
      width: 100%;
      left: auto;
      right: auto
  }
}

@media screen and (max-width: 767px) {
  .w-hidden-main,.w-hidden-medium {
      display:inherit!important
  }

  .w-hidden-small {
      display: none!important
  }

  .w-container .w-row,.w-row {
      margin-left: 0;
      margin-right: 0
  }

  .w-col {
      width: 100%;
      left: auto;
      right: auto
  }

  .w-col-small-1 {
      width: 8.33333333%
  }

  .w-col-small-2 {
      width: 16.66666667%
  }

  .w-col-small-3 {
      width: 25%
  }

  .w-col-small-4 {
      width: 33.33333333%
  }

  .w-col-small-5 {
      width: 41.66666667%
  }

  .w-col-small-6 {
      width: 50%
  }

  .w-col-small-7 {
      width: 58.33333333%
  }

  .w-col-small-8 {
      width: 66.66666667%
  }

  .w-col-small-9 {
      width: 75%
  }

  .w-col-small-10 {
      width: 83.33333333%
  }

  .w-col-small-11 {
      width: 91.66666667%
  }

  .w-col-small-12 {
      width: 100%
  }
}

@media screen and (max-width: 479px) {
  .w-container {
      max-width:none
  }

  .w-hidden-main,.w-hidden-medium,.w-hidden-small {
      display: inherit!important
  }

  .w-hidden-tiny {
      display: none!important
  }

  .w-col {
      width: 100%
  }

  .w-col-tiny-1 {
      width: 8.33333333%
  }

  .w-col-tiny-2 {
      width: 16.66666667%
  }

  .w-col-tiny-3 {
      width: 25%
  }

  .w-col-tiny-4 {
      width: 33.33333333%
  }

  .w-col-tiny-5 {
      width: 41.66666667%
  }

  .w-col-tiny-6 {
      width: 50%
  }

  .w-col-tiny-7 {
      width: 58.33333333%
  }

  .w-col-tiny-8 {
      width: 66.66666667%
  }

  .w-col-tiny-9 {
      width: 75%
  }

  .w-col-tiny-10 {
      width: 83.33333333%
  }

  .w-col-tiny-11 {
      width: 91.66666667%
  }

  .w-col-tiny-12 {
      width: 100%
  }
}

.w-widget {
  position: relative
}

.w-widget-map {
  width: 100%;
  height: 400px
}

.w-widget-map label {
  width: auto;
  display: inline
}

.w-widget-map img {
  max-width: inherit
}

.w-widget-map .gm-style-iw {
  text-align: center
}

.w-widget-map .gm-style-iw>button {
  display: none!important
}

.w-widget-twitter {
  overflow: hidden
}

.w-widget-twitter-count-shim {
  display: inline-block;
  vertical-align: top;
  position: relative;
  width: 28px;
  height: 20px;
  text-align: center;
  background: #fff;
  border: 1px solid #758696;
  border-radius: 3px
}

.w-widget-twitter-count-shim * {
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.w-widget-twitter-count-shim .w-widget-twitter-count-inner {
  position: relative;
  font-size: 15px;
  line-height: 12px;
  text-align: center;
  color: #999;
  font-family: serif
}

.w-widget-twitter-count-shim .w-widget-twitter-count-clear {
  position: relative;
  display: block
}

.w-widget-twitter-count-shim.w--large {
  width: 36px;
  height: 28px
}

.w-widget-twitter-count-shim.w--large .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 18px
}

.w-widget-twitter-count-shim:not(.w--vertical) {
  margin-left: 5px;
  margin-right: 8px
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large {
  margin-left: 6px
}

.w-widget-twitter-count-shim:not(.w--vertical):after,.w-widget-twitter-count-shim:not(.w--vertical):before {
  top: 50%;
  left: 0;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.w-widget-twitter-count-shim:not(.w--vertical):before {
  border-color: rgba(117,134,150,0);
  border-right-color: #5d6c7b;
  border-width: 4px;
  margin-left: -9px;
  margin-top: -4px
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:before {
  border-width: 5px;
  margin-left: -10px;
  margin-top: -5px
}

.w-widget-twitter-count-shim:not(.w--vertical):after {
  border-color: rgba(255,255,255,0);
  border-right-color: #fff;
  border-width: 4px;
  margin-left: -8px;
  margin-top: -4px
}

.w-widget-twitter-count-shim:not(.w--vertical).w--large:after {
  border-width: 5px;
  margin-left: -9px;
  margin-top: -5px
}

.w-widget-twitter-count-shim.w--vertical {
  width: 61px;
  height: 33px;
  margin-bottom: 8px
}

.w-widget-twitter-count-shim.w--vertical:after,.w-widget-twitter-count-shim.w--vertical:before {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.w-widget-twitter-count-shim.w--vertical:before {
  border-color: rgba(117,134,150,0);
  border-top-color: #5d6c7b;
  border-width: 5px;
  margin-left: -5px
}

.w-widget-twitter-count-shim.w--vertical:after {
  border-color: rgba(255,255,255,0);
  border-top-color: #fff;
  border-width: 4px;
  margin-left: -4px
}

.w-widget-twitter-count-shim.w--vertical .w-widget-twitter-count-inner {
  font-size: 18px;
  line-height: 22px
}

.w-widget-twitter-count-shim.w--vertical.w--large {
  width: 76px
}

.w-background-video {
  position: relative;
  overflow: hidden;
  height: 500px;
  color: #fff
}

.w-background-video>video {
  background-size: cover;
  background-position: 50% 50%;
  position: absolute;
  margin: auto;
  width: 100%;
  height: 100%;
  right: -100%;
  bottom: -100%;
  top: -100%;
  left: -100%;
  object-fit: cover;
  z-index: -100
}

.w-background-video>video::-webkit-media-controls-start-playback-button {
  display: none!important;
  -webkit-appearance: none
}

.w-slider {
  position: relative;
  height: 300px;
  text-align: center;
  background: #ddd;
  clear: both;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: rgba(0,0,0,0)
}

.w-slider-mask {
  position: relative;
  display: block;
  overflow: hidden;
  z-index: 1;
  left: 0;
  right: 0;
  height: 100%;
  white-space: nowrap
}

.w-slide {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  height: 100%;
  white-space: normal;
  text-align: left
}

.w-slider-nav {
  position: absolute;
  z-index: 2;
  top: auto;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding-top: 10px;
  height: 40px;
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: rgba(0,0,0,0)
}

.w-slider-nav.w-round>div {
  border-radius: 100%
}

.w-slider-nav.w-num>div {
  width: auto;
  height: auto;
  padding: .2em .5em;
  font-size: inherit;
  line-height: inherit
}

.w-slider-nav.w-shadow>div {
  box-shadow: 0 0 3px rgba(51,51,51,.4)
}

.w-slider-nav-invert {
  color: #fff
}

.w-slider-nav-invert>div {
  background-color: rgba(34,34,34,.4)
}

.w-slider-nav-invert>div.w-active {
  background-color: #222
}

.w-slider-dot {
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: rgba(255,255,255,.4);
  cursor: pointer;
  margin: 0 3px .5em;
  transition: background-color .1s,color .1s
}

.w-slider-dot.w-active {
  background-color: #fff
}

.w-slider-dot:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #fff
}

.w-slider-dot:focus.w-active {
  box-shadow: none
}

.w-slider-arrow-left,.w-slider-arrow-right {
  position: absolute;
  width: 80px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  cursor: pointer;
  overflow: hidden;
  color: #fff;
  font-size: 40px;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: rgba(0,0,0,0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.w-slider-arrow-left [class*=' w-icon-'],.w-slider-arrow-left [class^=w-icon-],.w-slider-arrow-right [class*=' w-icon-'],.w-slider-arrow-right [class^=w-icon-] {
  position: absolute
}

.w-slider-arrow-left:focus,.w-slider-arrow-right:focus {
  outline: 0
}

.w-slider-arrow-left {
  z-index: 3;
  right: auto
}

.w-slider-arrow-right {
  z-index: 4;
  left: auto
}

.w-icon-slider-left,.w-icon-slider-right {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 1em;
  height: 1em
}

.w-slider-aria-label {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px
}

.w-slider-force-show {
  display: block!important
}

.w-dropdown {
  display: inline-block;
  position: relative;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  z-index: 900
}

.w-dropdown-btn,.w-dropdown-link,.w-dropdown-toggle {
  position: relative;
  vertical-align: top;
  text-decoration: none;
  color: #222;
  padding: 20px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap
}

.w-dropdown-toggle {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-block;
  cursor: pointer;
  padding-right: 40px
}

.w-dropdown-toggle:focus {
  outline: 0
}

.w-icon-dropdown-toggle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto 20px auto auto;
  width: 1em;
  height: 1em
}

.w-dropdown-list {
  position: absolute;
  background: #ddd;
  display: none;
  min-width: 100%
}

.w-dropdown-list.w--open {
  display: block
}

.w-dropdown-link {
  padding: 10px 20px;
  display: block;
  color: #222
}

.w-dropdown-link.w--current {
  color: #0082f3
}

.w-dropdown-link:focus {
  outline: 0
}

@media screen and (max-width: 767px) {
  .w-nav-brand {
      padding-left:10px
  }
}

.w-lightbox-backdrop {
  cursor: auto;
  font-style: normal;
  font-variant: normal;
  letter-spacing: normal;
  list-style: disc;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #fff;
  font-family: "Helvetica Neue",Helvetica,Ubuntu,"Segoe UI",Verdana,sans-serif;
  font-size: 17px;
  line-height: 1.2;
  font-weight: 300;
  text-align: center;
  background: rgba(0,0,0,.9);
  z-index: 2000;
  outline: 0;
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-transform: translate(0,0)
}

.w-lightbox-backdrop,.w-lightbox-container {
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch
}

.w-lightbox-content {
  position: relative;
  height: 100vh;
  overflow: hidden
}

.w-lightbox-view {
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0
}

.w-lightbox-view:before {
  content: "";
  height: 100vh
}

.w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before {
  height: 86vh
}

.w-lightbox-frame,.w-lightbox-view:before {
  display: inline-block;
  vertical-align: middle
}

.w-lightbox-figure {
  position: relative;
  margin: 0
}

.w-lightbox-group .w-lightbox-figure {
  cursor: pointer
}

.w-lightbox-img {
  width: auto;
  height: auto;
  max-width: none
}

.w-lightbox-image {
  display: block;
  float: none;
  max-width: 100vw;
  max-height: 100vh
}

.w-lightbox-group .w-lightbox-image {
  max-height: 86vh
}

.w-lightbox-caption {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: .5em 1em;
  background: rgba(0,0,0,.4);
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden
}

.w-lightbox-embed {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%
}

.w-lightbox-control {
  position: absolute;
  top: 0;
  width: 4em;
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  -webkit-transition: .3s;
  transition: .3s
}

.w-lightbox-left {
  display: none;
  bottom: 0;
  left: 0;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==")
}

.w-lightbox-right {
  display: none;
  right: 0;
  bottom: 0;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+")
}

.w-lightbox-close {
  right: 0;
  height: 2.6em;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=");
  background-size: 18px
}

.w-lightbox-strip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 1vh;
  line-height: 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden
}

.w-lightbox-item {
  display: inline-block;
  width: 10vh;
  padding: 2vh 1vh;
  box-sizing: content-box;
  cursor: pointer;
  -webkit-transform: translate3d(0,0,0)
}

.w-lightbox-active {
  opacity: .3
}

.w-lightbox-thumbnail {
  position: relative;
  height: 10vh;
  background: #222;
  overflow: hidden
}

.w-lightbox-thumbnail-image {
  position: absolute;
  top: 0;
  left: 0
}

.w-lightbox-thumbnail .w-lightbox-tall {
  top: 50%;
  width: 100%;
  -webkit-transform: translate(0,-50%);
  -ms-transform: translate(0,-50%);
  transform: translate(0,-50%)
}

.w-lightbox-thumbnail .w-lightbox-wide {
  left: 50%;
  height: 100%;
  -webkit-transform: translate(-50%,0);
  -ms-transform: translate(-50%,0);
  transform: translate(-50%,0)
}

.w-lightbox-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  margin-left: -20px;
  border: 5px solid rgba(0,0,0,.4);
  border-radius: 50%;
  -webkit-animation: .8s linear infinite spin;
  animation: .8s linear infinite spin
}

.w-lightbox-spinner:after {
  content: "";
  position: absolute;
  top: -4px;
  right: -4px;
  bottom: -4px;
  left: -4px;
  border: 3px solid transparent;
  border-bottom-color: #fff;
  border-radius: 50%
}

.w-lightbox-hide {
  display: none
}

.w-lightbox-noscroll {
  overflow: hidden
}

@media (min-width: 768px) {
  .w-lightbox-content {
      height:96vh;
      margin-top: 2vh
  }

  .w-lightbox-view,.w-lightbox-view:before {
      height: 96vh
  }

  .w-lightbox-group,.w-lightbox-group .w-lightbox-view,.w-lightbox-group .w-lightbox-view:before {
      height: 84vh
  }

  .w-lightbox-image {
      max-width: 96vw;
      max-height: 96vh
  }

  .w-lightbox-group .w-lightbox-image {
      max-width: 82.3vw;
      max-height: 84vh
  }

  .w-lightbox-left,.w-lightbox-right {
      display: block;
      opacity: .5
  }

  .w-lightbox-close {
      opacity: .8
  }

  .w-lightbox-control:hover {
      opacity: 1
  }
}

.w-lightbox-inactive,.w-lightbox-inactive:hover {
  opacity: 0
}

.w-richtext:after,.w-richtext:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2
}

.w-richtext:after {
  clear: both
}

.w-richtext[contenteditable=true]:after,.w-richtext[contenteditable=true]:before {
  white-space: initial
}

.w-richtext ol,.w-richtext ul {
  overflow: hidden
}

.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-image div,.w-richtext .w-richtext-figure-selected.w-richtext-figure-type-video div:after,.w-richtext .w-richtext-figure-selected[data-rt-type=image] div,.w-richtext .w-richtext-figure-selected[data-rt-type=video] div:after {
  outline: #2895f7 solid 2px
}

.w-richtext figure.w-richtext-figure-type-video>div:after,.w-richtext figure[data-rt-type=video]>div:after {
  content: '';
  position: absolute;
  display: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0
}

.w-richtext figure {
  position: relative;
  max-width: 60%
}

.w-richtext figure>div:before {
  cursor: default!important
}

.w-richtext figure img {
  width: 100%
}

.w-richtext figure figcaption.w-richtext-figcaption-placeholder {
  opacity: .6
}

.w-richtext figure div {
  font-size: 0;
  color: transparent
}

.w-richtext figure.w-richtext-figure-type-image,.w-richtext figure[data-rt-type=image] {
  display: table
}

.w-richtext figure.w-richtext-figure-type-image>div,.w-richtext figure[data-rt-type=image]>div {
  display: inline-block
}

.w-richtext figure.w-richtext-figure-type-image>figcaption,.w-richtext figure[data-rt-type=image]>figcaption {
  display: table-caption;
  caption-side: bottom
}

.w-richtext figure.w-richtext-figure-type-video,.w-richtext figure[data-rt-type=video] {
  width: 60%;
  height: 0
}

.w-richtext figure.w-richtext-figure-type-video iframe,.w-richtext figure[data-rt-type=video] iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
}

.w-richtext figure.w-richtext-figure-type-video>div,.w-richtext figure[data-rt-type=video]>div {
  width: 100%
}

.w-richtext figure.w-richtext-align-center {
  margin-right: auto;
  margin-left: auto;
  clear: both
}

.w-richtext figure.w-richtext-align-center.w-richtext-figure-type-image>div,.w-richtext figure.w-richtext-align-center[data-rt-type=image]>div {
  max-width: 100%
}

.w-richtext figure.w-richtext-align-normal {
  clear: both
}

.w-richtext figure.w-richtext-align-fullwidth {
  width: 100%;
  max-width: 100%;
  text-align: center;
  clear: both;
  display: block;
  margin-right: auto;
  margin-left: auto
}

.w-richtext figure.w-richtext-align-fullwidth>div {
  display: inline-block;
  padding-bottom: inherit
}

.w-richtext figure.w-richtext-align-fullwidth>figcaption {
  display: block
}

.w-richtext figure.w-richtext-align-floatleft {
  float: left;
  margin-right: 15px;
  clear: none
}

.w-richtext figure.w-richtext-align-floatright {
  float: right;
  margin-left: 15px;
  clear: none
}

.w-nav {
  position: relative;
  background: #ddd;
  z-index: 1000
}

.w-nav:after,.w-nav:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2
}

.w-nav:after {
  clear: both
}

.w-nav-brand {
  position: relative;
  float: left;
  text-decoration: none;
  color: #333
}

.w-nav-link {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  color: #222;
  padding: 20px;
  text-align: left;
  margin-left: auto;
  margin-right: auto
}

.w-nav-link.w--current {
  color: #0082f3
}

.w-nav-menu {
  position: relative;
  float: right
}

[data-nav-menu-open] {
  display: block!important;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #c8c8c8;
  text-align: center;
  overflow: visible;
  min-width: 200px
}

.w--nav-link-open {
  display: block;
  position: relative
}

.w-nav-overlay {
  position: absolute;
  overflow: hidden;
  display: none;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%
}

.w-nav-overlay [data-nav-menu-open] {
  top: 0
}

.w-nav[data-animation=over-left] .w-nav-overlay {
  width: auto
}

.w-nav[data-animation=over-left] .w-nav-overlay,.w-nav[data-animation=over-left] [data-nav-menu-open] {
  right: auto;
  z-index: 1;
  top: 0
}

.w-nav[data-animation=over-right] .w-nav-overlay {
  width: auto
}

.w-nav[data-animation=over-right] .w-nav-overlay,.w-nav[data-animation=over-right] [data-nav-menu-open] {
  left: auto;
  z-index: 1;
  top: 0
}

.w-nav-button {
  position: relative;
  float: right;
  padding: 18px;
  font-size: 24px;
  display: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: rgba(0,0,0,0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.w-nav-button:focus {
  outline: 0
}

.w-nav-button.w--open {
  background-color: #c8c8c8;
  color: #fff
}

.w-nav[data-collapse=all] .w-nav-menu {
  display: none
}

.w--nav-dropdown-open,.w--nav-dropdown-toggle-open,.w-nav[data-collapse=all] .w-nav-button {
  display: block
}

.w--nav-dropdown-list-open {
  position: static
}

@media screen and (max-width: 991px) {
  .w-nav[data-collapse=medium] .w-nav-menu {
      display:none
  }

  .w-nav[data-collapse=medium] .w-nav-button {
      display: block
  }
}

@media screen and (max-width: 767px) {
  .w-nav[data-collapse=small] .w-nav-menu {
      display:none
  }

  .w-nav[data-collapse=small] .w-nav-button {
      display: block
  }

  .w-nav-brand {
      padding-left: 10px
  }
}

.w-tabs {
  position: relative
}

.w-tabs:after,.w-tabs:before {
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2
}

.w-tabs:after {
  clear: both
}

.w-tab-menu {
  position: relative
}

.w-tab-link {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  padding: 9px 30px;
  text-align: left;
  cursor: pointer;
  color: #222;
  background-color: #ddd
}

.w-tab-link.w--current {
  background-color: #c8c8c8
}

.w-tab-link:focus {
  outline: 0
}

.w-tab-content {
  position: relative;
  display: block;
  overflow: hidden
}

.w-tab-pane {
  position: relative;
  display: none
}

.w--tab-active {
  display: block
}

@media screen and (max-width: 479px) {
  .w-nav[data-collapse=tiny] .w-nav-menu {
      display:none
  }

  .w-nav[data-collapse=tiny] .w-nav-button,.w-tab-link {
      display: block
  }
}

.w-ix-emptyfix:after {
  content: ""
}

@keyframes spin {
  0% {
      transform: rotate(0)
  }

  100% {
      transform: rotate(360deg)
  }
}

.w-dyn-empty {
  padding: 10px;
  background-color: #ddd
}

.w-condition-invisible,.w-dyn-bind-empty,.w-dyn-hide {
  display: none!important
}

.w-layout-grid {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px
}

.w-pagination-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.w-pagination-previous {
  display: block;
  color: #333;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 9px 20px;
  background-color: #fafafa;
  border-width: 1px;
  border-color: #ccc;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-style: solid;
  border-radius: 2px
}

.w-pagination-previous-icon {
  margin-right: 4px
}

.w-pagination-next {
  display: block;
  color: #333;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 9px 20px;
  background-color: #fafafa;
  border-width: 1px;
  border-color: #ccc;
  border-top: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-style: solid;
  border-radius: 2px
}

.w-pagination-next-icon {
  margin-left: 4px
}

.w-checkbox {
  display: block;
  margin-bottom: 5px;
  padding-left: 20px
}

.w-checkbox::before {
  content: ' ';
  display: table;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;
  -ms-grid-row: 1;
  grid-row-start: 1
}

.w-checkbox::after {
  content: ' ';
  display: table;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;
  -ms-grid-row: 1;
  grid-row-start: 1;
  clear: both
}

.w-checkbox-input {
  float: left;
  margin: 4px 0 0 -20px;
  line-height: normal
}

.w-checkbox-input--inputType-custom {
  border-width: 1px;
  border-color: #ccc;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-style: solid;
  width: 12px;
  height: 12px;
  border-radius: 2px
}

.w-checkbox-input--inputType-custom.w--redirected-checked {
  background-color: #3898ec;
  border-color: #3898ec;
  background-image: url(https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg);
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat
}

.w-checkbox-input--inputType-custom.w--redirected-focus {
  box-shadow: 0 0 3px 1px #3898ec
}

h1 {
  margin: 20px 0 10px;
  font-family: Inter,sans-serif;
  font-size: 3.5rem;
  line-height: 1.1em;
  font-weight: 900
}

h2 {
  margin-top: 0;
  margin-bottom: 12px;
  font-family: Inter,sans-serif;
  font-size: 3rem;
  line-height: 1.15em;
  font-weight: 800
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: Inter,sans-serif;
  font-size: 2.75rem;
  line-height: 1.15em;
  font-weight: 800
}

h4 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Inter,sans-serif;
  font-size: 2.5rem;
  line-height: 1.2em;
  font-weight: 800
}

h5 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Inter,sans-serif;
  font-size: 2rem;
  line-height: 1.25em;
  font-weight: 800
}

h6 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Inter,sans-serif;
  font-size: 1.5rem;
  line-height: 1.3em;
  font-weight: 800
}

p {
  margin-top: 0;
  margin-bottom: 10px;
  color: #c2c3c5;
  font-size: 1rem;
  line-height: 1.4em
}

a {
  background-color: transparent;
  font-family: Inter,sans-serif;
  color: #3884ff;
  font-weight: 700;
  text-decoration: none
}

ol,ul {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 40px;
  font-size: 16px;
  line-height: 22px
}

img {
  vertical-align: middle;
  display: inline-block;
  max-width: 100%;
  border-radius: 6px
}

label {
  display: block;
  margin-bottom: 4px;
  font-family: Inter,sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: .4px
}

blockquote {
  margin: 16px 0;
  padding: 16px 24px;
  border-left: 5px solid #3884ff;
  background-color: #20222b;
  font-family: 'Space Grotesk',sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-style: italic;
  font-weight: 500
}

figcaption {
  margin-top: 5px;
  text-align: center
}

.greyscale-title {
  margin-bottom: 10px;
  color: #fff;
  font-weight: 400;
  text-align: left;
  letter-spacing: .5px;
  text-transform: uppercase
}

.button-subtitle {
  margin-top: 10px;
  color: #8f9193;
  text-align: center
}

.container-div {
  overflow: hidden;
  max-width: 1280px;
  margin-right: auto;
  margin-bottom: 37px;
  margin-left: auto;
  padding-right: 24px;
  padding-bottom: 49px;
  padding-left: 24px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.container-div.nav-flex {
  position: relative;
  z-index: 999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.container-div.hero-flex-horizontal {
  position: relative;
  z-index: 9;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10vh 48px 12vh;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
  -webkit-perspective: 1000px;
  perspective: 1000px
}

.container-div.hero-flex-vertical {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.container-div.final-cta {
  margin-bottom: 0;
  padding-bottom: 0
}

.grayscale-block {
  height: 88px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: #fff
}

.grayscale-block._10 {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  opacity: .1
}

.grayscale-block._30 {
  opacity: .3
}

.grayscale-block._40 {
  opacity: .4
}

.grayscale-block._60 {
  opacity: .6
}

.grayscale-block._90 {
  opacity: .9
}

.grayscale-block._70 {
  opacity: .7
}

.grayscale-block._80 {
  opacity: .8
}

.grayscale-block._50 {
  opacity: .5
}

.grayscale-block._100 {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px
}

.grayscale-block._20 {
  opacity: .2
}

.headings-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.button-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 176px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid hsla(0,0%,100%,.1)
}

.heading-block {
  margin-bottom: 24px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.style-guide-block-title {
  padding: 32px 104px;
  background-color: #1c1e27
}

.color-block-wrapper {
  width: 20%;
  margin-right: 28px;
  margin-left: 28px;
  border-radius: 4px
}

.greyscale-block-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  border-radius: 4px
}

.buttons-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-bottom: 32px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.filled-btn {
  margin-top: 16px;
  margin-right: 16px;
  padding: 10px 20px;
  border: 2px solid #3884ff;
  border-radius: 4px;
  background-color: #3884ff;
  -webkit-transition: .2s;
  transition: .2s;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
  text-align: center;
  letter-spacing: .4px;
  text-decoration: none;
  text-transform: capitalize
}

.filled-btn:hover {
  background-color: transparent
}

.filled-btn.no-margin-top {
  margin-top: 0
}

.filled-btn.no-margin-top.no-margin-right {
  margin-right: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 6px;
  background-color: #3884ff;
  box-shadow: 1px 1px 3px 0 rgba(0,0,0,.44);
  font-family: Inter,sans-serif;
  font-weight: 600;
  text-align: center
}

.filled-btn.no-margin-top.no-margin-right:hover {
  color: #fff
}

.filled-btn.full-width {
  width: 100%;
  margin-top: 0;
  margin-right: 0
}

.filled-btn.utility {
  margin-top: 32px;
  margin-right: 0
}

.filled-btn.pricing-table {
  margin-top: 0;
  margin-right: 0
}

.filled-btn.transparent {
  background-color: transparent
}

.filled-btn.transparent:hover {
  background-color: #3884ff
}

.filled-btn.transparent.no-margin {
  margin-top: 0;
  margin-right: 0
}

.filled-btn.transparent.no-margin-top {
  margin-right: 24px
}

.style-guide-title {
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  text-align: center
}

.style-guide-title.margin-bottom {
  margin-bottom: 24px
}

.style-guide-block-wrapper {
  overflow: hidden;
  margin-bottom: 80px;
  border: 1px solid transparent;
  border-radius: 16px
}

.style-guide-block-wrapper.last {
  margin-bottom: 0
}

.greyscales-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 56px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.style-guide-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 80px 104px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #1c1e27
}

.style-guide-block.block {
  display: block
}

.color-title {
  margin-top: 10px;
  color: #fff;
  font-weight: 400;
  text-align: center;
  letter-spacing: .5px;
  text-transform: uppercase
}

.color-title.margin-bottom {
  margin-bottom: 10px
}

.colors-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.colors-wrapper.last {
  margin-bottom: 0
}

.section-bigger {
  z-index: 1;
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: transparent
}

.section-bigger.medium {
  padding-top: 80px;
  padding-bottom: 80px
}

.section-bigger.testimonial-bg {
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 80px;
  padding-bottom: 80px
}

.section-bigger.with-header {
  padding-top: 160px;
  background-color: #20222b
}

.section-bigger.with-header.grey-bg {
  background-color: #1d1e22
}

.section-bigger.video-bg {
  position: relative;
  min-height: 720px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 320px;
  padding-bottom: 320px
}

.section-bigger.about-video-bg {
  position: relative;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 120px;
  padding-bottom: 120px
}

.section-bigger.no-padding-top {
  padding-top: 0
}

.section-bigger.cta-v3-animation {
  padding-top: 61px;
  padding-bottom: 0;
  background-color: transparent
}

.section-bigger.overflow-hidden {
  overflow: hidden
}

.button-block-wrapper {
  width: 33.334%;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 4px
}

.color-block {
  height: 88px;
  border: 1px solid hsla(0,0%,100%,.1);
  border-radius: 4px
}

.color-block.paragraph {
  background-color: #c2c3c5
}

.color-block.white {
  background-color: #fff
}

.color-block.vulcan {
  background-color: #1f2329
}

.color-block.paragraphs {
  background-color: #5b5d63
}

.color-block.royal-blue {
  background-color: #3884ff
}

.color-block.vulcan-shade-1 {
  background-color: #1d1e22
}

.color-block.vulcan-shade-2 {
  background-color: #1c1e27
}

.color-block.vulcan-shade-3 {
  background-color: #20222b
}

.heading-subtitle {
  padding-left: 4px;
  color: #8f9193;
  font-size: 14px;
  line-height: 20px
}

.heading-subtitle.no-padding {
  padding-left: 0
}

.hero-section {
  padding-top: 180px;
  padding-bottom: 120px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.hero-section.grey {
  background-color: #1d1e22
}

.hero-section.grey.relative {
  position: relative;
  overflow: hidden;
  margin-top: 0;
  padding: 4px 0;
  border-radius: 0;
  background-color: transparent;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 0;
  background-size: cover
}

.hero-section.grey.relative.home {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-image: none;
  background-size: auto
}

.nav-link-wrap {
  position: relative;
  z-index: auto;
  overflow: visible;
  margin-right: 8px;
  padding: 24px 8px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  -ms-grid-row-align: auto;
  align-self: auto;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  text-align: left;
  text-decoration: none;
  text-transform: capitalize;
  -o-object-fit: fill;
  object-fit: fill
}

.nav-link-wrap:hover {
  opacity: 1
}

.nav-link-wrap.w--current:hover {
  text-shadow: 0 0 3px #000,-1px -1px 6px rgba(190,37,190,.81),1px 1px 3px rgba(56,132,255,.7)
}

.nav-link-wrap.w--open {
  z-index: 999
}

.nav-link-wrap.dropdown {
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  cursor: pointer
}

.nav-link-wrap.last.w--current {
  margin-right: 32px
}

.nav-link-wrap.last.authonly {
  position: relative
}

.nav-link-wrap.nonauth {
  -webkit-transition: .2s;
  transition: .2s
}

.nav-link-wrap.nonauth:hover {
  color: #cbd6ec
}

.nav-link-wrap.dropdown-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.menu-button {
  position: relative;
  margin-right: -16px;
  padding: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  background-color: transparent
}

.menu-button.w--open {
  background-color: transparent
}

.navbar {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9999;
  height: 80px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-style: solid none none;
  border-width: 4px 1px 1px;
  border-color: #da42b1 #000 #000;
  background-color: #1f2329
}

.brand {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #fff
}

.brand.margin-bottom {
  margin-bottom: 16px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.brand.margin-bottom.w--current {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start
}

.nav-menu {
  position: relative;
  z-index: 999;
  overflow: visible;
  height: auto
}

.hero-left {
  z-index: 2;
  width: 60%;
  padding-right: 7.333%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column
}

.hero-right {
  position: relative;
  z-index: 1;
  display: -ms-grid;
  display: grid;
  width: 50%;
  margin-top: -48px;
  padding-top: 0;
  padding-bottom: 0;
  -ms-grid-row-align: auto;
  align-self: auto;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto auto auto;
  grid-template-rows: auto auto auto;
  opacity: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: none;
  perspective: none;
  -webkit-transform: perspective(1039px) rotate(0);
  transform: perspective(1039px) rotate(0)
}

.arrow-btn {
  display: inline-block;
  margin-top: 24px;
  margin-right: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none;
  text-transform: uppercase
}

.arrow-btn.left {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start
}

.arrow-btn.right {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row
}

.nav-links-wrapper {
  position: relative;
  z-index: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.half-div {
  width: 50%;
  padding-right: 8.333%
}

.half-div.featured-projects {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 50vh;
  padding-top: 0;
  padding-bottom: 0;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  text-decoration: none
}

.half-div.no-padding-right {
  padding-right: 0
}

.project-rich-text img {
  margin-top: 32px
}

.project-rich-text figcaption {
  margin-bottom: 32px
}

.featured-work-link-block {
  width: 50%
}

.featured-work-link-block.featured-projects {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  min-height: 50vh;
  padding-top: 0;
  padding-bottom: 0;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  text-decoration: none
}

.nav-menu-content {
  position: relative;
  left: auto;
  top: 0;
  right: 0;
  bottom: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.nav-btn-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-left: 16px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.close-overlay-button {
  position: absolute;
  display: none;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  text-decoration: none;
  cursor: pointer
}

.footer {
  padding-top: 24px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #1d1e22
}

.footer.vulcan {
  background-color: #1f2329
}

.copyright-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.copyright-text {
  color: #c2c3c5;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: .4px;
  text-decoration: none
}

.copyright-text.white {
  font-family: Inter,sans-serif;
  font-weight: 400;
  color: #fff
}

.copyright-link {
  color: #fff;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer
}

.nav-link-wrap-2 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transform: translate(0,0);
  -ms-transform: translate(0,0);
  transform: translate(0,0);
  -webkit-transition: -webkit-transform .4s cubic-bezier(.77, 0, .175, 1);
  transition: transform .4s cubic-bezier(.77, 0, .175, 1);
  transition: transform .4s cubic-bezier(.77, 0, .175, 1),-webkit-transform .4s cubic-bezier(.77, 0, .175, 1);
  font-family: Questrial;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
  letter-spacing: .6px;
  text-decoration: none;
  text-transform: uppercase
}

.nav-link-wrap-2:hover {
  -webkit-transform: translate(20px,0);
  -ms-transform: translate(20px,0);
  transform: translate(20px,0)
}

.muted-text {
  display: inline-block;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: 'Space Grotesk',sans-serif;
  color: #5b5d63;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  text-decoration: none
}

.text-field {
  height: 48px;
  margin-bottom: 0;
  padding: 10px 16px;
  border: 2px solid rgba(56,132,255,0);
  border-radius: 8px;
  background-color: #20222b;
  -webkit-transition: 250ms;
  transition: 250ms;
  color: #fff;
  font-size: 16px
}

.text-field:hover {
  border-color: #3884ff
}

.text-field:focus {
  border-color: #3884ff;
  background-color: #1d1e22
}

.text-field::-webkit-input-placeholder {
  color: #c2c3c5;
  font-size: 16px;
  font-weight: 300
}

.text-field:-ms-input-placeholder {
  color: #c2c3c5;
  font-size: 16px;
  font-weight: 300
}

.text-field::-ms-input-placeholder {
  color: #c2c3c5;
  font-size: 16px;
  font-weight: 300
}

.text-field::placeholder {
  color: #c2c3c5;
  font-size: 16px;
  font-weight: 300
}

.text-field.margin-top {
  margin-top: 24px
}

.text-field.big {
  height: 56px
}

.text-field.min-height {
  height: auto;
  min-height: 120px
}

.text-field.min-height.upload-field {
  border: 2px dashed #20222b;
  background-color: transparent;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f07342772da0_max%20upload%20size.svg");
  background-position: 50% 50%;
  background-size: 80px;
  background-repeat: no-repeat
}

.text-field.select {
  padding-top: 0;
  padding-bottom: 0
}

.text-field.text-area {
  height: 70px
}

.text-field.bigger {
  height: auto;
  min-height: 100px
}

.utility-page-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100vw;
  height: 100vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.utility-page-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 50%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center
}

.utility-icons {
  height: 64px
}

.utility-title {
  margin-top: 32px;
  font-family: 'Space Grotesk',sans-serif;
  font-size: 48px;
  line-height: 54px;
  font-weight: 700
}

.logo {
  height: 30px
}

.logo.in-footer {
  max-height: 48px
}

.service-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 16px;
  line-height: 22px;
  text-decoration: none
}

.page-title {
  margin-top: 0;
  margin-bottom: 48px;
  text-align: center
}

.page-title.section-header {
  margin-bottom: 16px
}

.page-title.section-header.on-integration-page {
  margin-right: 10px
}

.style-guide-title-2 {
  font-size: 30px;
  line-height: 36px;
  text-align: center
}

.section-header {
  margin-bottom: 80px
}

.changelog-text-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.changelog-text {
  margin-bottom: 10px;
  text-align: center
}

.changelog-text.margin-bottom {
  margin-bottom: 48px
}

.subheading {
  display: inline-block;
  margin-bottom: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: Inter,sans-serif;
  color: #3884ff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: .2px;
  text-decoration: none;
  text-transform: uppercase
}

.outlined-btn {
  margin-top: 16px;
  margin-right: 16px;
  padding: 10px 20px;
  border: 2px solid #3884ff;
  border-radius: 6px;
  background-color: transparent;
  -webkit-transition: border-color .3s,color .3s cubic-bezier(.23, 1, .32, 1),background-color .3s;
  transition: border-color .3s,color .3s cubic-bezier(.23, 1, .32, 1),background-color .3s;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  text-align: center;
  letter-spacing: .4px;
  text-decoration: none;
  text-transform: capitalize
}

.outlined-btn:hover {
  border-color: #3884ff;
  background-color: #3884ff;
  color: #fff
}

.outlined-btn.no-margin-top {
  margin-top: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.outlined-btn.no-margin-top.no-margin-right {
  margin-right: 0;
  font-family: Inter,sans-serif;
  text-align: center
}

.outlined-btn.full-width {
  width: 100%;
  margin-right: 0
}

.outlined-btn.full-width.google-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.outlined-btn.to-top-btn {
  position: fixed;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 48px;
  height: 48px;
  margin: 0 24px 24px;
  padding: 0;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px
}

.outlined-btn.no-margin,.outlined-btn.pricing-table {
  margin-top: 0;
  margin-right: 0
}

.filled-btn-arrow {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 16px;
  margin-right: 16px;
  padding: 10px 16px 10px 20px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 2px solid #3884ff;
  border-radius: 4px;
  background-color: #3884ff;
  -webkit-transition: .2s;
  transition: .2s;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  letter-spacing: .4px;
  text-decoration: none;
  text-transform: capitalize
}

.filled-btn-arrow:hover {
  background-color: transparent
}

.filled-btn-arrow.no-margin-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.filled-btn-arrow.no-margin-top.no-margin-right {
  margin-right: 0;
  text-align: center
}

.filled-btn-arrow.no-margin-top.no-margin-right.alt-cta {
  max-width: 206px
}

.filled-btn-arrow.no-margin-top.no-margin-right.blank {
  padding-top: 24px;
  padding-left: 0;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  border-style: none;
  background-color: transparent;
  color: #3884ff
}

.filled-btn-arrow.no-margin-top.no-margin-right.blank.inverted {
  margin-bottom: 8px;
  padding-right: 0;
  padding-bottom: 0;
  border-bottom-style: solid;
  border-radius: 0
}

.filled-btn-arrow.no-margin-top.hero-button {
  margin-right: 32px;
  padding: 16px 24px;
  box-shadow: 1px 1px 12px 0 rgba(0,0,0,.27)
}

.filled-btn-arrow.no-margin-top.inline {
  display: inline-block
}

.filled-btn-arrow.inline {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start
}

.filled-btn-arrow.transparent {
  background-color: transparent
}

.filled-btn-arrow.transparent:hover {
  background-color: #3884ff
}

.filled-btn-arrow-text {
  display: block;
  margin-right: 8px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-transition: 250ms;
  transition: 250ms;
  font-weight: 600
}

.filled-btn-arrow-text.main-cta {
  font-size: 18px
}

.filled-btn-arrow-text.filled-btn-arrow.full-width {
  display: block;
  width: 100%;
  border-color: rgba(56,132,255,.8);
  background-color: #3884ff
}

.filled-btn-arrow-text.filled-btn-arrow.full-width:hover {
  border-color: #3884ff;
  background-color: #3884ff
}

.filled-btn-arrow-icon {
  width: 21px;
  height: auto;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  -webkit-transform: translate(0,0);
  -ms-transform: translate(0,0);
  transform: translate(0,0)
}

.filled-btn-arrow-icon.in-blog-list-view {
  display: block;
  height: 8px;
  margin-top: 2px
}

.filled-btn-arrow-icon.moved {
  -webkit-transform: translate(0,-2px);
  -ms-transform: translate(0,-2px);
  transform: translate(0,-2px)
}

.btn-arrow {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 16px;
  margin-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  letter-spacing: .4px;
  text-decoration: none;
  text-transform: capitalize
}

.btn-arrow.no-margin-top {
  margin-top: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.btn-arrow.no-margin-top.no-margin-right {
  margin-right: 0;
  text-align: center
}

.btn-arrow.in-blog-list-view {
  position: absolute;
  bottom: 10px;
  margin-top: 0;
  margin-right: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  line-height: 20px
}

.btn-arrow.in-job-listing-card {
  margin-top: 40px
}

.btn-arrow-text {
  margin-right: 8px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.page-header {
  padding-top: 120px;
  padding-bottom: 80px;
  background-color: #20222b
}

.page-header.relative {
  position: relative;
  background-color: transparent
}

.transparent-nav {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 80px;
  background-color: transparent
}

.section-title {
  max-width: 50%;
  margin: 0 auto 16px;
  font-size: 42px;
  line-height: 48px
}

.section-title.no-margin-bottom {
  margin-bottom: 0
}

.section-title.center {
  margin-bottom: 24px;
  text-align: center
}

.section-title.center.no-margin-bottom {
  margin-bottom: 0
}

.section-title.in-half-div {
  max-width: none;
  margin-bottom: 24px;
  font-size: 54px;
  line-height: 60px
}

.section-title.in-one-third-div,.section-title.no-max-width {
  max-width: none;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 54px
}

.section-title.on-intro-page {
  max-width: none;
  font-size: 54px;
  line-height: 60px
}

.section-subtitle {
  font-family: 'Space Grotesk',sans-serif;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  text-align: center
}

.components-header {
  margin-bottom: 32px;
  padding: 24px 32px;
  border-radius: 8px;
  background-color: #1d1e22
}

.hero-title {
  max-width: 100%;
  margin-top: 0;
  direction: ltr;
  letter-spacing: normal;
  text-transform: none;
  text-shadow: 1px 1px 12px rgba(0,0,0,.41)
}

.hero-title.center {
  max-width: 680px;
  margin-right: auto;
  margin-left: auto;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  text-align: center;
  text-shadow: none;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent
}

.hero-title.medium {
  font-size: 60px;
  line-height: 66px
}

.hero-title.color {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  text-shadow: none;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent
}

.hero-btn-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 72px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.hero-btn-container.center {
  margin-top: 48px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.hero-btn-container.left {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start
}

.hero-btn-container.left.feature-page {
  margin-top: 40px
}

.text-btn {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 16px;
  margin-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: border-color .3s,color .3s cubic-bezier(.23, 1, .32, 1),background-color .3s;
  transition: border-color .3s,color .3s cubic-bezier(.23, 1, .32, 1),background-color .3s;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  letter-spacing: .4px;
  text-decoration: none;
  text-transform: capitalize
}

.text-btn.no-margin-top {
  margin-top: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  text-decoration: none
}

.text-btn-icon {
  width: auto;
  height: 18px;
  margin-right: 8px
}

.hero-top {
  z-index: 2;
  width: 50%;
  margin-bottom: 80px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column
}

.hero-bottom {
  z-index: 0;
  width: 100%
}

.inline-form {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.submit-btn {
  margin-top: 16px;
  margin-right: 16px;
  padding: 10px 20px;
  border: 2px solid #3884ff;
  border-radius: 4px;
  background-color: #3884ff;
  -webkit-transition: border-color .3s,color .3s cubic-bezier(.23, 1, .32, 1),background-color .3s;
  transition: border-color .3s,color .3s cubic-bezier(.23, 1, .32, 1),background-color .3s;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  letter-spacing: .4px;
  text-decoration: none;
  text-transform: capitalize
}

.submit-btn:hover {
  border-color: #fff;
  background-color: #fff;
  color: #3884ff
}

.submit-btn.no-margin-top {
  height: 56px;
  margin-top: 0;
  margin-left: 24px
}

.hero-email-form {
  margin-top: 48px;
  margin-bottom: 0
}

.features-grid {
  display: -ms-grid;
  display: grid;
  margin-top: 48px;
  grid-auto-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.feature-block {
  padding: 16px;
  border: 1px solid #1d1e22;
  border-radius: 8px;
  background-color: #1d1e22;
  -webkit-transition: .2s;
  transition: .2s
}

.feature-block:hover {
  box-shadow: none
}

.feature-block.no-bg {
  background-color: transparent
}

.feature-block.no-bg.no-padding {
  padding: 0
}

.feature-block.rainbow-div {
  margin-top: 0;
  padding-top: 16px;
  padding-bottom: 16px
}

.feature-block.link {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: #1c1e27;
  box-shadow: 0 1px 0 1px #0c0b0b,0 3px 3px 1px #111314;
  font-weight: 500
}

.feature-block.link.margin {
  margin-bottom: 16px
}

.feature-block.link.jetboost-filter-active {
  border-color: #16181f;
  background-color: #16181f;
  box-shadow: none;
  color: #3884ff
}

.feature-block.link.reset {
  margin-top: 16px;
  color: #ff194a
}

.feature-block.link.reset:active {
  border-color: #16181f;
  background-color: #16181f;
  box-shadow: none
}

.feature-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 16px
}

.feature-title {
  margin-bottom: 0;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: .2px
}

.feature-title.link {
  font-weight: 500
}

.feature-title.link.error {
  color: #ff194a
}

.feature-grid {
  position: relative;
  display: -ms-grid;
  display: grid;
  padding-top: 110px;
  padding-right: 0;
  padding-bottom: 110px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 60px;
  grid-template-areas: ".";
  -ms-grid-columns: 1fr 16px 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.feature-grid.left {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

.feature-grid.feature {
  padding-top: 0;
  padding-bottom: 0;
  grid-column-gap: 60px;
  grid-row-gap: 60px
}

.feature-title-large {
  max-width: 530px;
  margin-top: 0;
  margin-bottom: 16px;
  text-align: left;
  text-shadow: 1px 1px 12px rgba(0,0,0,.4)
}

.feature-title-large.center {
  max-width: 610px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  text-shadow: 1px 1px 12px rgba(0,0,0,.39)
}

.feature-title-large.left {
  max-width: none;
  margin-right: 0;
  margin-left: 0;
  font-size: 3rem
}

.feature-title-large.use-case-title {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 20px
}

.features-text-block {
  z-index: 2;
  margin-bottom: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column
}

.features-text-block.left {
  padding-right: 60px;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  -ms-grid-row-align: auto;
  align-self: auto;
  -webkit-box-ordinal-group: 1;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto
}

.features-text-block.right {
  padding-left: 60px
}

.features-img-block {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin-right: 0;
  border-radius: 6px;
  -o-object-fit: cover;
  object-fit: cover
}

.features-img-block.right {
  left: -38%;
  right: 0
}

.features-img-block.right50 {
  left: 50%;
  right: 0
}

.features-img-block.left50 {
  left: -50%
}

.feature-tabs {
  display: block;
  width: 100%;
  padding: 16px 32px;
  border-top: 4px solid #20222b;
  background-color: #1f2329
}

.feature-tabs.w--current {
  background-color: transparent
}

.feature-nav-tabs-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 48px
}

.feature-text {
  color: #c2c3c5
}

.tab-progress-bar {
  position: absolute;
  left: 0;
  top: -4px;
  z-index: 1;
  width: 100%;
  height: 4px;
  background-color: #3884ff
}

.tab-image {
  max-width: 66.6667%;
  border-radius: 8px
}

.tab-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.feature-tabs-wrapper {
  margin-top: 48px
}

.metrics-title {
  margin-bottom: 10px;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 48px;
  line-height: 54px;
  font-weight: 700;
  text-align: center
}

.metrics-text {
  margin-bottom: 10px;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  text-align: center
}

.metric-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-right: 16px;
  margin-left: 16px;
  padding: 40px 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: #1d1e22
}

.metric-block.stack-row {
  margin-right: 0;
  margin-bottom: 24px;
  margin-left: 0
}

.metric-icon-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 80px;
  height: 80px;
  margin-bottom: 32px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: #3884ff
}

.metric-icon {
  width: 32px;
  height: 32px
}

.metric-icon.offset {
  margin-right: -4px
}

.metrics {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  justify-items: stretch;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.half-section-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.half-section-flex.center-horizontal {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.metric-row {
  margin-right: 12px;
  margin-left: 12px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.metric-row.horizontal {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 0;
  margin-left: 0
}

.testimonial-bg-img-block {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.testimonial-bg-img {
  width: 100%;
  max-width: none
}

.testimonial-card {
  position: relative;
  z-index: 1;
  min-height: 280px;
  margin-right: 80px;
  border-radius: 8px
}

.testimonial-avatar-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 32px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.testimonial-avatar {
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 50%
}

.testimonial-avatar.avatar-1 {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f06a8a772d58_avatar-2.jpg");
  background-position: 50% 50%;
  background-size: cover
}

.testimonial-avatar.avatar-2 {
  margin-right: 16px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f0c191772d57_avatar-3.jpg");
  background-position: 50% 50%;
  background-size: cover
}

.testimonial-avatar.avatar-3 {
  margin-right: 16px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f032c1772d5f_man-avatar-4.jpg");
  background-position: 50% 50%;
  background-size: cover
}

.testimonial-avatar.avatar-4 {
  margin-right: 16px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f0420c772d61_woman-avatar-1.jpg");
  background-position: 50% 50%;
  background-size: cover
}

.testimonial-avatar.avatar-5 {
  margin-right: 16px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f0d5ca772d62_man-avatar-3.jpg");
  background-position: 50% 50%;
  background-size: cover
}

.testimonial-name {
  font-family: 'Space Grotesk',sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500
}

.testimonial-name-subline {
  font-family: 'Space Grotesk',sans-serif;
  color: #c2c3c5;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500
}

.testimonial-stars {
  margin-bottom: 16px
}

.testimonial-slider {
  z-index: 1;
  height: 100%;
  max-width: 41.6667%;
  margin-left: 8.3334%;
  padding: 40px;
  border-radius: 8px;
  background-color: rgba(13,15,25,.95);
  background-image: none;
  background-position: 0 0;
  background-size: auto;
  background-repeat: repeat
}

.testimonial-paragraph.min-height {
  min-height: 130px
}

.testimonial-slide-nav {
  left: 40px;
  right: auto;
  bottom: 40px;
  padding-top: 20px;
  font-size: 10px;
  text-align: left
}

.testimonial-slide-nav.hide {
  display: none
}

.testimonial-slider-arrow-right {
  top: auto;
  right: 40px;
  bottom: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 24px;
  height: 24px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.testimonial-slider-arrow-left {
  left: auto;
  top: auto;
  right: 80px;
  bottom: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 0;
  margin-left: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  opacity: .5;
  -webkit-transition: opacity .3s;
  transition: opacity .3s
}

.testimonial-slider-arrow-left:hover {
  opacity: 1
}

.rating-icons {
  width: 24px;
  height: 24px
}

.component-section {
  z-index: 1;
  padding-top: 120px;
  background-color: #1f2329
}

.testimonial-slider-v2 {
  z-index: 1;
  height: 100%;
  margin-top: 48px;
  padding-bottom: 72px;
  background-color: transparent
}

.testimonial-card-v2 {
  position: relative;
  z-index: 1;
  padding: 40px 32px 96px;
  border-radius: 32px 32px 50px 50px;
  background-color: #1d1e22
}

.testimonial-avatar-block-v2 {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 12px 16px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50px;
  background-color: #1c1e27
}

.testimonial-card-wrap {
  position: relative;
  z-index: 1;
  width: 33.3334%;
  padding-right: 16px;
  padding-left: 16px
}

.testimonial-slider-arrow-right-v2 {
  top: auto;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 24px;
  height: 24px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.testimonial-slider-arrow-left-v2 {
  left: auto;
  top: auto;
  right: 40px;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 24px;
  height: 24px;
  margin-right: 0;
  margin-left: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  opacity: .5;
  -webkit-transition: opacity .3s;
  transition: opacity .3s
}

.testimonial-slider-arrow-left-v2:hover {
  opacity: 1
}

.testimonial-name-subline-v2 {
  font-family: 'Space Grotesk',sans-serif;
  color: #c2c3c5;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500
}

.pricing-price {
  position: static;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 32px;
  line-height: 54px;
  font-weight: 700;
  text-align: center;
  text-transform: capitalize
}

.pricing-price.v2 {
  font-size: 36px;
  line-height: 42px
}

.pricing-price.enterprise {
  margin-top: -9px;
  margin-bottom: -9px;
  padding-top: 8px;
  padding-bottom: 0;
  color: #83b0fa;
  font-size: 20px;
  line-height: 64px;
  letter-spacing: 0;
  text-transform: capitalize
}

.pricing-card-content {
  display: block;
  width: 100%;
  padding-right: 0;
  padding-left: 0
}

.pricing-card-content.middle {
  padding-right: 0;
  padding-left: 0
}

.pricing-card-header {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 24px 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.pricing-card-header.table {
  z-index: 2;
  padding: 32px 32px 16px;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-radius: 16px;
  background-color: #1d1e22
}

.pricing-card-header.table.middle {
  border-radius: 0;
  background-color: #20222b
}

.pricing-card-wrapper {
  display: block;
  padding-right: 0;
  padding-left: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.pricing-title {
  z-index: 4;
  margin-bottom: 8px;
  font-family: Inter,sans-serif;
  font-size: 18px;
  line-height: 34px;
  font-weight: 700;
  text-align: left;
  text-decoration: none;
  text-transform: capitalize
}

.pricing-title.table {
  margin-bottom: 10px
}

.pricing-title.plan-row-header {
  margin-top: 24px;
  font-weight: 800
}

.pricing-card {
  position: relative;
  border-radius: 16px 0 0 16px;
  background-color: #1d1e22;
  box-shadow: 0 8px 20px 1px rgba(11,16,51,.15);
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  -webkit-transition: box-shadow .3s,-webkit-transform .3s;
  transition: transform .3s,box-shadow .3s,-webkit-transform .3s;
  cursor: default
}

.pricing-card.middle {
  margin-top: -24px;
  padding-top: 24px;
  padding-bottom: 24px;
  border: 4px solid #3884ff;
  background-color: #1c1e27
}

.pricing-card.middle.rainbow-div {
  z-index: 999;
  border-style: none
}

.pricing-card.busines {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0
}

.pricing-card.enterprise {
  border-radius: 0 16px 16px 0
}

.toggle-text {
  position: relative;
  z-index: 1;
  display: inline-block;
  width: 50%;
  padding-top: 16px;
  padding-bottom: 16px;
  font-family: 'Space Grotesk',sans-serif;
  color: rgba(11,16,51,.5);
  font-weight: 500;
  text-align: center;
  cursor: pointer
}

.toggle-text.monthly {
  padding-right: 8px;
  color: #fff
}

.toggle-text.annually {
  padding-left: 8px;
  font-family: Inter,sans-serif;
  color: #fff
}

.toggle-bg {
  position: relative;
  width: 240px;
  height: 56px;
  border-radius: 8px;
  background-color: #1d1e22
}

.toggle-bg.v2 {
  margin-right: 0;
  margin-left: 0
}

.toggle-bg.table {
  width: 192px;
  margin-right: 0;
  margin-left: 0;
  background-color: #20222b
}

.pricing-small-text {
  color: #cbd6ec;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize
}

.pricing-small-text.v2 {
  line-height: 16px;
  font-weight: 700;
  text-align: left
}

.pricing-small-text.v2.custom-pricing {
  color: #5b5d63;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600
}

.pricing-small-text.plan-desc {
  font-size: 14px
}

.pricing-small-text.plan {
  text-align: left
}

.pricing-card-btn-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-right: 0;
  margin-left: 0;
  padding-top: 32px;
  padding-bottom: 24px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.pricing-card-btn-container.table {
  position: relative;
  margin-right: 0;
  margin-left: 0;
  padding-bottom: 32px
}

.toggle-btn {
  position: absolute;
  left: 8px;
  top: 8px;
  bottom: 8px;
  z-index: 0;
  display: block;
  width: 112px;
  height: 40px;
  border-radius: 4px;
  background-color: #20222b;
  background-image: linear-gradient(339deg,#1d1e22,#384455);
  box-shadow: 0 1px 3px 0 #000
}

.toggle-btn.table {
  width: 88px;
  background-color: hsla(0,0%,100%,.1)
}

.pricing-row-text {
  width: 100%;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #fff;
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  text-align: center;
  text-transform: capitalize
}

.pricing-row-text.muted {
  color: #5b5d63
}

.pricing-row-text.title {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.pricing-row-text.header,.pricing-row-text.left-text {
  text-align: left
}

.pricing-icon {
  width: 16px;
  height: 16px;
  margin-right: 16px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6011b669b73749fa697fa611_check.svg");
  background-position: 50% 50%;
  background-size: 16px;
  background-repeat: no-repeat
}

.pricing-icon.not-included {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f06bf5772d67_Cross-Mute.svg");
  background-size: 12px
}

.pricing-icon.table {
  width: 100%;
  margin-top: 2px;
  margin-right: 0;
  margin-bottom: 2px;
  -webkit-box-ordinal-group: 1;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6011b669b73749fa697fa611_check.svg")
}

.pricing-icon.table.not-included {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/60100d5a4d9bbec49c44cf10_x.svg");
  background-size: 16px;
  opacity: .48
}

.toggle-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.toggle-wrapper.v2 {
  margin-top: 48px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start
}

.toggle-wrapper.v2.mobile {
  display: none
}

.toggle-wrapper.table {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  width: 25%;
  padding: 32px 16px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  background-color: #1d1e22
}

.pricing-card-row {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 2px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid hsla(0,0%,100%,.08)
}

.pricing-card-row.last {
  margin-bottom: 32px;
  border-bottom-style: none
}

.pricing-card-row.center {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.pricing-card-row.mobile-center {
  display: block
}

.pricing-columns {
  margin-bottom: 100px
}

.pricing-columns.annually,.pricing-columns.monthly {
  display: block;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.pricing-card-price-block {
  position: relative;
  margin-top: -8px;
  margin-right: -8px;
  margin-bottom: 8px;
  padding-bottom: 0
}

.pricing-card-price-block.table {
  margin-right: 10px
}

.pricing-currency {
  position: absolute;
  left: -15px;
  top: 9px;
  font-family: Inter,sans-serif;
  color: #3884ff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center
}

.pricing-currency.v2 {
  left: -12px;
  top: 0;
  font-size: 16px;
  line-height: 22px
}

.pricing-label {
  position: absolute;
  left: 50%;
  top: -13px;
  display: block;
  padding: 4px 10px;
  border-radius: 20px;
  background-color: #3884ff;
  background-image: -webkit-gradient(linear,right top,left top,from(#d1318c),to(#55278a));
  background-image: linear-gradient(270deg,#d1318c,#55278a);
  -webkit-transform: translate(-50%,0);
  -ms-transform: translate(-50%,0);
  transform: translate(-50%,0);
  font-family: Inter,sans-serif;
  font-size: 11px;
  line-height: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase
}

.pricing-label.table {
  left: auto;
  top: 32px;
  right: 32px;
  border-radius: 4px;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

.pricing-wrapper-v2 {
  width: 66.6667%;
  margin-top: -32px
}

.one-third-div {
  width: 33.3334%;
  padding-right: 32px
}

.one-third-div.no-padding-right {
  padding-right: 0
}

.one-third-div.on-intro-page {
  position: relative;
  z-index: 1;
  margin-top: -24px
}

.pricing-v2-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.pricing-discount-label {
  position: absolute;
  top: 32px;
  right: 40px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: hsla(0,0%,100%,.1);
  font-family: 'Space Grotesk',sans-serif;
  font-weight: 600;
  letter-spacing: .4px
}

.pricing-discount-label.in-popular {
  top: 8px
}

.pricing-table-content {
  position: relative;
  z-index: 1;
  padding-right: 32px;
  padding-left: 32px
}

.pricing-table-section-title {
  padding-left: 32px;
  font-family: Inter,sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600
}

.pricing-table-price-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 16px;
  padding-left: 16px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.pricing-table-price-block.custom-pricing {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0
}

.highlighted-pricing-table-row {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  z-index: 0;
  width: 25%;
  background-color: #20222b
}

.video-play-btn {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 80px;
  height: 80px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 4px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 80px;
  background-color: #3884ff
}

.video-play-btn.smaller {
  width: 56px;
  height: 56px
}

.video-play-icon {
  width: 20px;
  height: auto
}

.video-play-icon.smaller {
  width: 16px
}

.video-bg-circle {
  position: absolute;
  left: -12px;
  top: -12px;
  right: -12px;
  bottom: -12px;
  z-index: -1;
  border-radius: 100px;
  background-color: rgba(48,63,225,.5)
}

.video-bg-circle.smaller {
  left: -8px;
  top: -8px;
  right: -8px;
  bottom: -8px
}

.video-bg-img {
  width: 100%;
  max-width: none
}

.video-bg-img-block {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.video-bg-overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(13,15,25,.3)
}

.promo-video-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 320px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 16px;
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(13,15,25,.3)),to(rgba(13,15,25,.3))),url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f0603d772da1_young-tech-worker-talking-at-meeting(1).jpg");
  background-image: linear-gradient(180deg,rgba(13,15,25,.3),rgba(13,15,25,.3)),url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f0603d772da1_young-tech-worker-talking-at-meeting(1).jpg");
  background-position: 0 0,50% 50%;
  background-size: auto,cover
}

.video-feature-columns {
  margin-top: 48px
}

.faq-wrapper {
  width: 50%
}

.faq-wrapper.full-width {
  width: 100%;
  margin-top: 48px
}

.faq-dropdown {
  display: block;
  overflow: hidden;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #1d1e22;
  -webkit-transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s,-webkit-transform .3s
}

.faq-dropdown:hover {
  -webkit-transform: translate(0,-2px);
  -ms-transform: translate(0,-2px);
  transform: translate(0,-2px)
}

.faq-dropdown-toggle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 12px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500
}

.faq-dropdown-toggle.full-width {
  padding: 16px
}

.faq-icon-block {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 32px;
  height: 32px;
  margin-right: 16px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 4px;
  background-color: #20222b
}

.faq-flex-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.faq-dropdown-list {
  position: static;
  background-color: #1d1e22
}

.faq-dropdown-list.w--open {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px
}

.faq-icon-line {
  width: 16px;
  height: 2px;
  border-radius: 4px;
  background-color: #fff
}

.faq-icon-line.rotate {
  position: absolute;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg)
}

.faq-paragraph {
  margin-bottom: 0;
  padding-right: 24px;
  padding-bottom: 24px;
  padding-left: 64px
}

.faq-title {
  max-width: 100%;
  white-space: normal
}

.faq-title.large {
  font-size: 18px;
  line-height: 24px
}

.blog-listing-grid {
  display: block;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.blog-post-listing-grid {
  display: -ms-grid;
  display: grid;
  margin-top: 48px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-auto-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.blog-post-wrapper {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 8px
}

.blog-post-wrapper.on-team-page {
  width: 50%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.blog-post-listing-content {
  position: relative;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 240px;
  padding: 20px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  border-radius: 8px;
  text-decoration: none
}

.blog-listing-title {
  z-index: 1;
  margin-bottom: 0;
  color: #fff;
  font-size: 18px;
  line-height: 22px;
  font-weight: 600
}

.blog-listing-title.v2 {
  font-size: 24px;
  line-height: 30px
}

.blog-listing-title.in-sidebar {
  font-size: 16px;
  line-height: 20px
}

.page-header-img-overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: -24px;
  z-index: 1;
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(13,15,25,.05)),color-stop(50%,rgba(13,15,25,.5)),color-stop(103%,#0d0f19));
  background-image: linear-gradient(180deg,rgba(13,15,25,.05),rgba(13,15,25,.5) 50%,#0d0f19 103%)
}

.page-header-img-overlay.list-view {
  bottom: 0;
  background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(13,15,25,.5)),to(rgba(13,15,25,.5)));
  background-image: linear-gradient(180deg,rgba(13,15,25,.5),rgba(13,15,25,.5))
}

.page-header-img-overlay.no-overflow {
  bottom: 0
}

.blog-info-block {
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.blog-category-label {
  display: inline-block;
  margin-right: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500
}

.blog-category-label.list-view {
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 2
}

.blog-category-label.on-blog-page {
  display: block;
  margin-right: 0;
  margin-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 16px;
  line-height: 22px
}

.blog-category-label.margin-top {
  margin-top: 10px
}

.blog-date-and-author-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 12px;
  line-height: 15px;
  font-weight: 500
}

.blog-date-and-author-block.on-blog-page,.blog-date-and-author-block.on-job-listing-page {
  padding: 16px 24px;
  border-radius: 40px;
  background-color: hsla(0,0%,100%,.1);
  font-size: 16px;
  line-height: 22px
}

.blog-date-and-author-block.on-job-listing-page.inline {
  display: inline-block;
  margin-bottom: 24px
}

.blog-date-and-author-text {
  display: inline-block;
  margin-right: 4px;
  font-family: 'Space Grotesk',sans-serif;
  font-weight: 600
}

.blog-date-and-author-text.mute {
  color: hsla(0,0%,100%,.75)
}

.blog-date-and-author-text.on-blog-page {
  margin-right: 6px;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-weight: 500
}

.blog-date-and-author-text.on-blog-page.last {
  margin-right: 0
}

.featured-label {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 4px 8px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 4px;
  background-color: #3884ff;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: .4px
}

.featured-label.list-view {
  left: 16px;
  top: 48px;
  right: auto;
  z-index: 2
}

.featured-label.list-view.in-sidebar {
  left: 10px;
  top: 10px
}

.empty-state {
  padding: 16px;
  border-radius: 4px;
  background-color: #1d1e22;
  font-family: 'Space Grotesk',sans-serif;
  font-weight: 500
}

.empty-state.center {
  text-align: center
}

.empty-state.dark {
  background-color: #1f2329
}

.btn-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 48px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.btn-container.center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.blog-post-img {
  position: relative;
  z-index: 0;
  min-height: 240px;
  -o-object-fit: cover;
  object-fit: cover
}

.blog-post-img.v2 {
  min-height: 384px;
  -o-object-fit: cover;
  object-fit: cover
}

.blog-post-img.list-view {
  min-height: 180px;
  -o-object-fit: cover;
  object-fit: cover
}

.blog-post-listing-img-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0
}

.blog-post-listing-img-wrapper.flex-center {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.blog-post-listing-img-wrapper.list-view {
  position: absolute;
  right: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 41.6667%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.blog-post-listing-img-wrapper.list-view.in-sidebar {
  position: relative
}

.blog-info-wrap {
  position: relative;
  z-index: 1
}

.blog-info-wrap.list-view {
  position: absolute;
  left: 41.6667%;
  top: 0;
  bottom: 0;
  padding: 24px 24px 48px
}

.blog-info-wrap.list-view.in-sidebar {
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px
}

.blog-listing-grid-v2 {
  display: -ms-grid;
  display: grid;
  margin-top: 48px;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.blog-post-listing-grid-v2 {
  display: -ms-grid;
  display: grid;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-auto-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.blog-post-listing-content-v2 {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 384px;
  padding: 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  border-radius: 8px;
  text-decoration: none
}

.blog-post-listing-content-v2.margin-bottom {
  margin-bottom: 24px
}

.blog-post-list-view-content {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 180px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  border-radius: 8px;
  background-color: #1d1e22;
  text-decoration: none
}

.blog-post-list-view-content.in-sidebar {
  max-height: 180px;
  min-height: auto
}

.blog-list-half-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.blog-list-half-collection {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.cta-block {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 80px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  border-radius: 24px;
  background-color: #20222b
}

.cta-block.v3 {
  margin-top: 40px;
  margin-bottom: 140px;
  padding-bottom: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent
}

.cta-block.v2 {
  padding-right: 80px;
  padding-left: 80px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.cta-block.hiring {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.cta-title {
  max-width: 680px;
  margin: 32px auto 16px;
  background-color: transparent;
  -webkit-filter: blur(0px);
  filter: blur(0px);
  -webkit-transition: opacity .2s;
  transition: opacity .2s;
  font-family: Inter,sans-serif;
  font-size: 48px;
  line-height: 54px;
  font-weight: 900;
  text-align: center;
  text-decoration: none;
  cursor: auto
}

.cta-title.v2 {
  max-width: 100%;
  margin-left: 0;
  text-align: left
}

.cta-img {
  position: relative;
  bottom: -152px;
  display: block;
  max-width: 80%;
  margin-top: -102px;
  border-radius: 8px
}

.cta-img.v2 {
  bottom: auto;
  margin-top: 0
}

.faq-full-width-wrapper {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.integration-grid {
  display: -ms-grid;
  display: grid;
  margin-top: 48px;
  justify-items: stretch;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.integration-block {
  width: 100%;
  height: 100%;
  padding: 32px;
  border-radius: 8px;
  background-color: #1d1e22;
  text-decoration: none
}

.integration-avatar {
  width: 56px;
  height: 56px
}

.integration-title {
  margin-left: 16px;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  letter-spacing: .2px
}

.integration-flex-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 24px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.brand-wrapper {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.hiring-label {
  display: inline-block;
  margin-left: 16px;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: #3884ff;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600
}

.hiring-label.in-cta {
  margin-bottom: 16px
}

.page-header-title {
  margin-top: 0;
  margin-bottom: 48px;
  text-align: center
}

.page-header-title.no-margin-bottom {
  margin-bottom: 0
}

.page-header-flex-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 50%;
  margin-right: auto;
  margin-bottom: 64px;
  margin-left: auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.page-header-flex-wrap.no-margin-bottom {
  margin-bottom: 0
}

.page-header-img {
  display: block
}

.container-small {
  position: relative;
  z-index: 1;
  overflow: hidden;
  max-width: 83.33333333333334%;
  margin-right: auto;
  margin-left: auto
}

.container-small.show-overflow {
  overflow: visible
}

.container-small.not-relative {
  position: static
}

.page-header-cut-out {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  height: 20%;
  background-color: #1f2329
}

.blog-post-recommended-grid {
  display: -ms-grid;
  display: grid;
  margin-top: 48px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-auto-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.page-header-img-container {
  position: relative;
  z-index: 1;
  overflow: hidden;
  width: 100%;
  max-height: 640px;
  max-width: 83.33333333333334%;
  margin-right: auto;
  margin-left: auto;
  border-radius: 24px;
  background-color: #1c1e27;
  -o-object-fit: cover;
  object-fit: cover
}

.about-paragraph {
  margin-bottom: 0
}

.team-members-collection-list {
  margin-top: 48px
}

.team-member-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  padding: 16px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-items: start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 90px 1fr;
  grid-template-columns: 90px 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-radius: 8px;
  background-color: #1d1e22;
  -webkit-transition: .2s;
  transition: .2s
}

.team-member-card:hover {
  box-shadow: none
}

.team-members-flex-wrap {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.team-member-card-wrap {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.team-member-avatar {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  -o-object-fit: cover;
  object-fit: cover
}

.team-member-avatar.on-team-page {
  width: 120px;
  height: 120px
}

.team-member-title {
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700;
  text-align: left
}

.team-member-title.link:hover {
  text-decoration: underline
}

.team-member-job-title {
  margin-bottom: 14px;
  font-family: Inter,sans-serif;
  color: #c2c3c5;
  font-weight: 500;
  text-align: left
}

.team-member-job-title.on-member-page {
  font-size: 24px;
  line-height: 30px
}

.team-member-social-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 48px;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around
}

.team-member-social {
  width: 48px;
  height: 48px;
  margin-right: 4px;
  margin-left: 4px;
  border-radius: 4px;
  background-color: #20222b;
  -webkit-transition: background-color .3s,-webkit-transform .3s;
  transition: transform .3s,background-color .3s,-webkit-transform .3s
}

.team-member-social:hover {
  background-color: #1c1e27;
  -webkit-transform: translate(0,-4px);
  -ms-transform: translate(0,-4px);
  transform: translate(0,-4px)
}

.team-member-social.fb {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f0a685772d7c_facebook-icon-white.svg");
  background-position: 50% 50%;
  background-size: 20px;
  background-repeat: no-repeat
}

.team-member-social.twitter {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f03433772d7b_twitter-icon-white.svg");
  background-position: 50% 50%;
  background-size: 20px;
  background-repeat: no-repeat
}

.team-member-social.insta {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f03eb6772d7d_instagram-icon-white.svg");
  background-position: 50% 50%;
  background-size: 20px;
  background-repeat: no-repeat
}

.about-bg-video {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%
}

.about-quote-block {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.about-quote-card {
  position: relative;
  z-index: 1;
  padding: 48px;
  border-radius: 8px;
  background-color: rgba(13,15,25,.95)
}

.about-quote-avatar {
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  border-radius: 80px
}

.about-quote {
  margin-top: 0;
  margin-bottom: 48px;
  padding: 0;
  border-left-style: none;
  background-color: transparent;
  font-family: 'Space Grotesk',sans-serif;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500
}

.about-quote-author-title {
  font-family: 'Space Grotesk',sans-serif;
  font-size: 18px;
  line-height: 24px
}

.about-quote-author-title.mute {
  color: #c2c3c5;
  font-size: 16px;
  line-height: 22px
}

.companies-flex-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.companies-half-grid {
  display: -ms-grid;
  display: grid;
  width: 75%;
  padding-left: 8.3334%;
  -ms-grid-row-align: center;
  align-self: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.company-grid-img {
  max-height: 40px
}

.companies-grid {
  display: -ms-grid;
  display: grid;
  width: 100%;
  margin-top: 48px;
  -ms-grid-row-align: center;
  align-self: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 48px;
  grid-row-gap: 48px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.job-listing-card {
  display: block;
  margin-bottom: 24px;
  padding: 40px;
  border-radius: 8px;
  background-color: #1d1e22;
  -webkit-transition: background-color .3s;
  transition: background-color .3s
}

.job-listing-card:hover {
  background-color: #1c1e27
}

.job-listing-info-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.job-listing-title {
  margin-top: 10px;
  margin-bottom: 16px;
  color: #fff;
  font-size: 30px;
  line-height: 36px
}

.job-listing-info-icon {
  width: 20px;
  margin-right: 10px;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch
}

.job-listing-info-text {
  display: inline-block;
  margin-right: 24px;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500
}

.job-listing-info-text.last {
  margin-right: 0
}

.cta-paragraph {
  max-width: 50%;
  margin: 16px auto 0;
  text-align: center
}

.job-listing-info-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch
}

.success-message {
  padding: 16px;
  color: #fff;
  font-weight: 600
}

.success-message.soft {
  padding: 16px;
  background-color: #fff;
  color: #304ffe
}

.text-field-wrap {
  margin-bottom: 24px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.text-field-wrap.small-margin-bottom {
  margin-bottom: 16px
}

.text-field-wrap.large-margin-bottom {
  margin-bottom: 48px
}

.extra-form-actions-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 24px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 500
}

.extra-form-actions-wrapper.margin-top {
  margin-top: 16px
}

.extra-form-actions-wrapper.margin-top.center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.extra-form-actions-wrapper.margin-top.center.no-margin-bottom {
  margin-bottom: 0
}

.checkbox {
  width: 20px;
  height: 20px;
  margin-top: 0;
  margin-right: 10px;
  margin-left: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border: 1px solid #3884ff;
  background-color: #1d1e22;
  -webkit-transition: border-color .2s,background-color .2s;
  transition: border-color .2s,background-color .2s;
  color: #fff
}

.checkbox.w--redirected-checked {
  border-width: 2px;
  border-color: #304ffe;
  background-color: #304ffe;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f03713772d8b_thick-check-white.png");
  background-size: 12px
}

.checkbox.small {
  width: 20px;
  height: 20px
}

.checkbox.small.w--redirected-checked {
  background-color: #3884ff
}

.utility-page-wrapper-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 80%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.utility-page-wrapper-content.with-card {
  width: 100vw;
  margin-bottom: 0;
  padding: 80px 32px
}

.form-help-text {
  font-size: 12px;
  line-height: 20px;
  text-align: center
}

.error-message {
  max-width: 720px;
  margin-top: 24px;
  margin-right: auto;
  margin-left: auto;
  padding: 16px;
  border: 2px solid #ff194a;
  background-color: transparent;
  color: #fff;
  font-weight: 600;
  text-align: center
}

.error-message.soft {
  background-color: rgba(255,25,74,.1);
  text-align: center
}

.utility-page-form {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  border-radius: 16px;
  background-color: #1d1e22
}

.utility-page-form.card {
  min-width: 33.3334%;
  padding: 40px;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch
}

.utility-page-form.card.max-width {
  width: 100%;
  max-width: 460px;
  min-width: 320px;
  background-color: #1d1e22
}

.field-label__form {
  margin-bottom: 8px;
  font-weight: 600
}

.utility-page-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  min-height: 100vh;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.utility-logo {
  height: 40px;
  margin-bottom: 48px
}

.text-link {
  color: #3884ff;
  font-size: 12px;
  line-height: 18px
}

.text-link.muted {
  color: #5b5d63
}

.checkbox-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 32px;
  padding-left: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-family: 'Space Grotesk',sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 700
}

.checkbox-wrap.no-margin-bottom {
  margin-bottom: 0
}

.utility-card-title {
  margin-top: 0;
  margin-bottom: 32px;
  font-family: 'Space Grotesk',sans-serif;
  font-size: 36px;
  line-height: 42px;
  font-weight: 700;
  text-align: center
}

.google-btn-icon {
  display: block;
  width: 16px;
  margin-right: 10px
}

.text-field-flex-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.text-field-spacer {
  width: 24px
}

.terms-agree-link {
  font-family: 'Space Grotesk',sans-serif;
  color: #3884ff;
  font-weight: 700
}

.form-helper-text {
  margin-bottom: 48px;
  text-align: center
}

.lottie-success {
  width: 120px;
  margin-right: auto;
  margin-bottom: 24px;
  margin-left: auto
}

.coming-soon-bg {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f03747772d8f_coming%20soon%20bg.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat
}

.coming-soon-page-content {
  max-width: 50%
}

.coming-soon-title {
  margin-top: 0;
  margin-bottom: 16px;
  font-family: 'Space Grotesk',sans-serif;
  font-size: 48px;
  line-height: 54px;
  font-weight: 700;
  text-align: center
}

.dropdown-icon {
  display: block;
  width: 10px;
  margin-top: 2px;
  margin-left: 8px
}

.dropdown-link {
  display: block;
  padding: 12px 20px 12px 12px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 6px;
  -webkit-transition: background-color .3s,color .3s;
  transition: background-color .3s,color .3s;
  font-family: Inter,sans-serif;
  color: #cbd6ec;
  font-weight: 500;
  text-align: left;
  cursor: pointer
}

.dropdown-link:hover {
  background-color: hsla(0,0%,100%,.08)
}

.dropdown-link.navbar-link,.dropdown-link.navbar-link.w--current {
  color: #fff
}

.custom-dropdown-list {
  position: absolute;
  left: auto;
  top: 100%;
  z-index: 999;
  overflow: hidden;
  max-width: 220px;
  min-width: 160px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-radius: 6px;
  background-color: #1d1e22;
  box-shadow: 0 16px 30px 0 rgba(13,15,25,.5)
}

.custom-dropdown-list.w--open {
  padding: 8px;
  background-color: #1d1e22;
  box-shadow: 0 8px 20px 0 rgba(0,0,0,.36);
  -webkit-transform: translate(0,-14px);
  -ms-transform: translate(0,-14px);
  transform: translate(0,-14px)
}

.dropdown-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.cookie-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 640px;
  margin-right: 24px;
  margin-bottom: 24px;
  margin-left: 24px;
  padding: 32px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: #1d1e22;
  box-shadow: 0 16px 30px 0 rgba(13,15,25,.5);
  font-family: 'Space Grotesk',sans-serif;
  font-weight: 500;
  white-space: normal
}

.cookie-link {
  font-family: 'Space Grotesk',sans-serif;
  text-decoration: underline
}

.cookie-text {
  margin-right: 16px
}

.to-top-container {
  position: relative;
  z-index: 1
}

.to-top-icon {
  height: 20px
}

.contact-form {
  margin-top: 48px;
  margin-bottom: 0;
  padding: 40px;
  border-radius: 16px;
  background-color: #1d1e22
}

.map {
  width: 100%;
  margin-top: 80px
}

.contact-utility-link {
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-weight: 500
}

.contact-info-flex-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center
}

.contact-info-block {
  padding: 24px;
  border-radius: 80px;
  background-color: #20222b
}

.contact-info-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 16px;
  padding-left: 16px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.contact-info-content.center {
  border-right: 1px solid #5b5d63;
  border-left: 1px solid #5b5d63
}

.contact-info-icon {
  width: 20px;
  margin-right: 10px;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch
}

.contact-info-text {
  display: inline-block;
  margin-right: 24px;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500
}

.helper-text {
  font-family: 'Space Grotesk',sans-serif;
  font-weight: 400
}

.helper-text.big {
  font-size: 24px;
  line-height: 30px;
  font-weight: 500
}

.helper-text.big.center {
  text-align: center
}

.helper-text.big.center.max-width {
  max-width: 75%;
  margin-right: auto;
  margin-left: auto
}

.helper-underline {
  text-decoration: underline
}

.pagination {
  margin-top: 24px
}

.blog-post-by-author {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 48px;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-auto-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.blog-post-listing-content-by-author {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 384px;
  padding: 32px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  border-radius: 8px;
  text-decoration: none
}

.blog-post-team-wrapper {
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 16px
}

.integration-title-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.integration-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 24px
}

.blog-list-page-grid {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 48px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr 0.5fr;
  grid-template-columns: 1fr 0.5fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.blog-list-page-right {
  position: -webkit-sticky;
  position: sticky;
  top: 104px
}

.blog-sidebar-block {
  margin-bottom: 24px
}

.blog-sidebar-title {
  margin-bottom: 16px;
  font-family: 'Space Grotesk',sans-serif;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700
}

.blog-cat-collection {
  display: inline-block
}

.social-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.social-block-link {
  width: 48px;
  height: 48px;
  margin-right: 4px;
  margin-left: 4px;
  border-radius: 4px;
  background-color: #20222b;
  -webkit-transition: background-color .3s,-webkit-transform .3s;
  transition: transform .3s,background-color .3s,-webkit-transform .3s
}

.social-block-link:hover {
  background-color: #1c1e27;
  -webkit-transform: translate(0,-4px);
  -ms-transform: translate(0,-4px);
  transform: translate(0,-4px)
}

.social-block-link.fb {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f0a685772d7c_facebook-icon-white.svg");
  background-position: 50% 50%;
  background-size: 20px;
  background-repeat: no-repeat
}

.social-block-link.twitter {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f03433772d7b_twitter-icon-white.svg");
  background-position: 50% 50%;
  background-size: 20px;
  background-repeat: no-repeat
}

.social-block-link.insta {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f03eb6772d7d_instagram-icon-white.svg");
  background-position: 50% 50%;
  background-size: 20px;
  background-repeat: no-repeat
}

.crooked-section {
  position: absolute;
  left: -1px;
  right: -1px;
  bottom: -1px;
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 50%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.footer-top-block {
  padding-top: 24px;
  padding-bottom: 24px
}

.footer-grid {
  display: -ms-grid;
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 48px;
  grid-row-gap: 48px;
  -ms-grid-columns: 1.25fr 0.75fr 0.75fr 1fr;
  grid-template-columns: 1.25fr 0.75fr 0.75fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.footer-grid-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column
}

.footer-text {
  margin-bottom: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  font-size: 14px;
  line-height: 20px
}

.footer-bottom-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid hsla(0,0%,100%,.1)
}

.footer-title {
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 30px;
  font-weight: 800
}

.footer-link {
  padding-top: 4px;
  padding-bottom: 4px;
  -webkit-transition: color .3s;
  transition: color .3s;
  color: #c2c3c5;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400
}

.footer-link:hover {
  color: #fff
}

.footer-link.footer-cta {
  margin-top: 23px;
  margin-right: 24px;
  padding-right: 0;
  padding-bottom: 0;
  border-bottom: 2px solid #3884ff;
  color: #fff
}

.footer-link.footer-cta.w--current {
  margin-top: 18px;
  margin-right: 24px;
  padding-right: 0;
  padding-bottom: 0;
  border-style: none none solid;
  border-width: 1px 1px 2px;
  border-color: #000 #000 #3884ff;
  color: #fff;
  font-weight: 600;
  text-decoration: none
}

.footer-flex {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column
}

.intro-list {
  display: -ms-grid;
  display: grid;
  margin-top: 48px;
  grid-auto-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.footer-address-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.footer-address-block.aling-top {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.footer-address-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px
}

.footer-address-text {
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-weight: 400
}

.intro-hero-section {
  z-index: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  padding-top: 180px;
  padding-bottom: 120px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #1f2329
}

.perspective-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100vw;
  height: 100vh;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  background-color: transparent;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  -webkit-perspective-origin: 100% 100%;
  perspective-origin: 100% 100%;
  font-weight: 400
}

.perspective-block {
  position: relative;
  top: 8%;
  right: -45%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  width: 100vw;
  height: 100vh;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-transform: rotateX(30deg) rotateY(0) rotateZ(30deg);
  transform: rotateX(30deg) rotateY(0) rotateZ(30deg);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d
}

.perspective-row {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.website-placeholder {
  position: relative;
  width: 33vw;
  margin-right: 1vw;
  margin-bottom: 3.5vh;
  box-shadow: none
}

.website-placeholder.offset {
  margin-right: -5.5vw;
  margin-left: 8vw
}

.website-thumbnail {
  position: relative;
  z-index: 1;
  -webkit-transition: -webkit-transform .6s cubic-bezier(.23, 1, .32, 1);
  transition: transform .6s cubic-bezier(.23, 1, .32, 1);
  transition: transform .6s cubic-bezier(.23, 1, .32, 1),-webkit-transform .6s cubic-bezier(.23, 1, .32, 1);
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d
}

.website-thumbnail:hover {
  -webkit-transform: translate3d(0,0,20px);
  transform: translate3d(0,0,20px)
}

.thumbnail-shadow {
  position: absolute;
  left: -8px;
  top: -8px;
  right: -8px;
  bottom: -8px;
  z-index: 0;
  display: block;
  background-color: rgba(7,8,11,.75);
  -webkit-filter: blur(12px);
  filter: blur(12px);
  -webkit-transform: translate(20px,12px);
  -ms-transform: translate(20px,12px);
  transform: translate(20px,12px)
}

.intro-features-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 48px
}

.intro-features-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 24px;
  padding-left: 24px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-right: 1px solid hsla(0,0%,100%,.1)
}

.intro-features-block.last {
  border-right-style: none
}

.intro-features-block.first {
  padding-left: 0;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.intro-number {
  font-family: 'Space Grotesk',sans-serif;
  font-size: 36px;
  line-height: 42px;
  font-weight: 700
}

.intro-title {
  font-family: 'Space Grotesk',sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  text-align: center
}

.intro-section-block {
  padding: 24px;
  border-radius: 16px;
  background-color: #1d1e22;
  -webkit-transition: box-shadow .3s,-webkit-transform .3s;
  transition: box-shadow .3s,transform .3s,-webkit-transform .3s
}

.intro-section-block:hover {
  box-shadow: 0 16px 30px 0 rgba(7,8,11,.5);
  -webkit-transform: translate(0,-10px);
  -ms-transform: translate(0,-10px);
  transform: translate(0,-10px)
}

.intro-section-img {
  border-radius: 8px
}

.intro-section-title {
  margin-top: 16px;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  text-align: center
}

.license-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 80px;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.license-left-block {
  position: -webkit-sticky;
  position: sticky;
  top: 104px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 50%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column
}

.license-right-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 50%;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.license-title {
  margin-bottom: 16px;
  font-family: 'Space Grotesk',sans-serif;
  font-size: 24px;
  line-height: 30px;
  font-weight: 700
}

.license-link {
  padding-top: 4px;
  padding-bottom: 4px;
  font-family: 'Space Grotesk',sans-serif;
  font-weight: 500
}

.license-img-block {
  max-width: 25%;
  padding-top: 16px;
  padding-right: 16px
}

.license-img-block.full {
  max-width: 100%;
  padding-top: 0;
  padding-right: 0
}

.support-video.padding-bottom {
  margin-bottom: 48px
}

.pricing-table-wrapper {
  position: relative;
  border-radius: 16px;
  background-color: #1d1e22
}

.pricing-table-header {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  z-index: 2;
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #1d1e22
}

.pricing-table-header-cols {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-top-right-radius: 16px
}

.pricing-table-cols {
  padding-right: 0;
  padding-left: 0
}

.pricing-table-category-title {
  margin-bottom: 10px;
  padding-top: 12px;
  padding-bottom: 12px
}

.pricing-table-row {
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.pricing-table-row-title {
  position: relative;
  z-index: 1;
  width: 25%;
  padding-right: 32px;
  padding-left: 32px
}

.pricing-table-row-cols {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.pricing-table-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.footer-empty-cell {
  width: 25%
}

.legal-title {
  margin-bottom: 10px;
  font-family: 'Space Grotesk',sans-serif;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  text-align: center
}

.page-height-indicator {
  position: fixed;
  top: 80px;
  z-index: 999;
  width: 100%;
  height: 4px;
  background-color: #3884ff;
  -webkit-perspective-origin: 0% 50%;
  perspective-origin: 0% 50%
}

.hero-img {
  border-radius: 8px
}

.text-block {
  font-family: Inter,sans-serif;
  font-weight: 500
}

.text-block-2 {
  font-family: Inter,sans-serif
}

.body {
  overflow: visible;
  margin-top: 0;
  background-color: #1f2329;
  background-image: radial-gradient(circle farthest-corner at 100% 100%,#1f2329,#1f2329 100%,#1c4991)
}

.paragraph-hero-center {
  max-width: 530px;
  margin: 24px auto 0;
  color: #cbd6ec;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0,0,0,.36)
}

.paragraph-hero-center.center {
  margin-top: 24px;
  margin-right: auto;
  margin-left: auto;
  text-align: center
}

.text-block-3 {
  border-bottom: 2px solid #3884ff;
  font-family: Inter,sans-serif;
  font-size: 18px;
  font-weight: 600
}

.text-block-3.navtext {
  margin-top: 2px;
  font-size: 16px
}

.customer-doc {
  position: relative;
  width: 220px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 1px 12px 0 rgba(0,0,0,.32);
  -webkit-transform: translate(10px,0);
  -ms-transform: translate(10px,0);
  transform: translate(10px,0)
}

.customer-doc.offset-top {
  width: 230px;
  margin-top: 24px;
  -webkit-transform: translate(-44px,0);
  -ms-transform: translate(-44px,0);
  transform: translate(-44px,0)
}

.customer-doc.offset-top.adobe {
  width: 230px;
  -webkit-transform: translate(33px,0);
  -ms-transform: translate(33px,0);
  transform: translate(33px,0)
}

.customer-doc.offset-top.ebay {
  width: 230px;
  -webkit-transform: translate(-10px,0);
  -ms-transform: translate(-10px,0);
  transform: translate(-10px,0)
}

.customer-doc.unity {
  width: 230px;
  -webkit-transform: translate(33px,0);
  -ms-transform: translate(33px,0);
  transform: translate(33px,0)
}

.customer-doc.airbyte {
  -webkit-transform: translate(-10px,0);
  -ms-transform: translate(-10px,0);
  transform: translate(-10px,0)
}

.customer-doc.five {
  width: 230px;
  -webkit-transform: translate(-44px,0);
  -ms-transform: translate(-44px,0);
  transform: translate(-44px,0)
}

.customer-doc.rainbow-div {
  z-index: 2;
  margin-top: 0;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

.customer-doc.rainbow-div:hover {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1)
}

.customer-doc.rainbow-div.first {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translate(29px,43px);
  -ms-transform: translate(29px,43px);
  transform: translate(29px,43px)
}

.customer-doc.rainbow-div.first.background {
  -webkit-transform: translate(148px,167px);
  -ms-transform: translate(148px,167px);
  transform: translate(148px,167px)
}

.customer-doc.rainbow-div.second {
  -webkit-transform: translate(67px,81px);
  -ms-transform: translate(67px,81px);
  transform: translate(67px,81px)
}

.customer-doc.rainbow-div.third {
  -webkit-transform: translate(14px,-48px);
  -ms-transform: translate(14px,-48px);
  transform: translate(14px,-48px)
}

.customer-doc.rainbow-div.fourth {
  -webkit-transform: translate(14px,-38px);
  -ms-transform: translate(14px,-38px);
  transform: translate(14px,-38px)
}

.customer-doc.rainbow-div.background {
  -webkit-transform: translate(-52px,252px);
  -ms-transform: translate(-52px,252px);
  transform: translate(-52px,252px)
}

.customer-doc.rainbow-div.background.second {
  -webkit-transform: translate(67px,252px);
  -ms-transform: translate(67px,252px);
  transform: translate(67px,252px)
}

.customer-doc.rainbow-div.background.offset {
  -webkit-transform: translate(33px,205px);
  -ms-transform: translate(33px,205px);
  transform: translate(33px,205px)
}

.customer-doc.rainbow-div.first-bg {
  box-shadow: none;
  -webkit-transform: translate(14px,-10px);
  -ms-transform: translate(14px,-10px);
  transform: translate(14px,-10px)
}

.customer-doc.rainbow-div.first-bg.muted {
  -webkit-transform: translate(-71px,-190px);
  -ms-transform: translate(-71px,-190px);
  transform: translate(-71px,-190px)
}

.customer-doc.rainbow-div.second-bg {
  box-shadow: none;
  -webkit-transform: translate(0,-124px);
  -ms-transform: translate(0,-124px);
  transform: translate(0,-124px)
}

.customer-doc.rainbow-div.second-bg.muted {
  -webkit-transform: translate(-43px,-224px);
  -ms-transform: translate(-43px,-224px);
  transform: translate(-43px,-224px)
}

.customer-doc.rainbow-div.third-bg {
  box-shadow: none;
  -webkit-transform: translate(133px,52px);
  -ms-transform: translate(133px,52px);
  transform: translate(133px,52px)
}

.customer-doc.rainbow-div.third-bg.muted {
  -webkit-transform: translate(229px,90px);
  -ms-transform: translate(229px,90px);
  transform: translate(229px,90px)
}

.customer-doc.rainbow-div.fourth-bg {
  box-shadow: none;
  -webkit-transform: translate(95px,-71px);
  -ms-transform: translate(95px,-71px);
  transform: translate(95px,-71px)
}

.customer-doc.rainbow-div.fourth-bg.mute {
  -webkit-transform: translate(176px,19px);
  -ms-transform: translate(176px,19px);
  transform: translate(176px,19px)
}

.heading.example-heading {
  margin-top: 0;
  margin-bottom: 0;
  font-family: Inter,sans-serif;
  color: #1f2329;
  font-size: 16px;
  line-height: 22px
}

.text-block-4 {
  color: #5b5d63
}

.div-block-2 {
  position: relative;
  height: 80px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-color: #e9effa;
  color: #1d1e22
}

.div-block-4 {
  position: absolute;
  left: 50%;
  top: 46px;
  overflow: visible;
  width: 50px;
  height: 50px;
  margin-left: -25px;
  border-radius: 999px;
  box-shadow: 0 1px 12px 0 rgba(0,0,0,.09);
  -o-object-fit: none;
  object-fit: none
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 999px
}

.grid {
  padding: 16px;
  -ms-grid-columns: 1fr 48px;
  grid-template-columns: 1fr 48px;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.image-feature-home {
  box-shadow: -1px 0 11px 0 rgba(0,0,0,.3);
  opacity: 1
}

.paragraph-580px {
  max-width: 580px;
  color: #cbd6ec;
  font-size: 18px;
  line-height: 26px;
  font-weight: 300;
  text-align: left;
  text-shadow: 1px 1px 3px rgba(0,0,0,.22)
}

.paragraph-580px.center {
  margin-right: auto;
  margin-bottom: 48px;
  margin-left: auto;
  font-weight: 300;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0,0,0,.52)
}

.paragraph-580px.left-660px {
  max-width: 660px;
  float: none
}

.paragraph-580px.bulletpoint {
  margin-bottom: 15px
}

.paragraph-580px.bookdemo {
  margin-top: 26px;
  margin-bottom: 26px
}

.grid-micro-features {
  display: -ms-grid;
  display: grid;
  margin-top: 32px;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.paragraph-4 {
  margin-top: 4px;
  margin-bottom: 0
}

.div-block-5 {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 16px 1fr;
  grid-template-columns: 16px 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.div-block-5.link {
  grid-column-gap: 16px
}

.feature-wrapper {
  margin-top: 128px;
  margin-bottom: 128px
}

.feature-center {
  text-align: left
}

.feature-center.page-intro {
  padding-top: 160px;
  padding-bottom: 48px
}

.div-block-6 {
  max-width: 1280px;
  margin-top: 64px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 0;
  padding-right: 48px;
  padding-left: 48px;
  text-align: center
}

.longer-grid {
  padding-top: 56px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.longer-grid.principles {
  padding-top: 0;
  -webkit-box-align: start;
  -webkit-align-items: start;
  -ms-flex-align: start;
  align-items: start;
  -webkit-align-content: space-between;
  -ms-flex-line-pack: justify;
  align-content: space-between;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr
}

.rainbow-div {
  display: block;
  margin-top: 48px;
  padding: 8px 16px 9px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 26px 1fr 36px;
  grid-template-columns: 26px 1fr 36px;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-radius: 4px;
  background-color: #1d1e22;
  box-shadow: -1px 1px 5px 0 rgba(49,179,146,.46),-1px -1px 5px 0 rgba(169,54,223,.61),1px 1px 5px 0 rgba(56,132,255,.49);
  -webkit-transition: 440ms;
  transition: 440ms
}

.rainbow-div:hover {
  box-shadow: -1px 1px 5px 0 rgba(49,179,146,.46),1px -1px 5px 0 rgba(169,54,223,.61),0 1px 5px 0 rgba(56,132,255,.49);
  -webkit-transform: scale(1.03);
  -ms-transform: scale(1.03);
  transform: scale(1.03)
}

.rainbow-div.callout {
  display: -ms-grid;
  display: grid;
  margin-right: auto;
  margin-left: auto;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 26px 1fr 240px;
  grid-template-columns: 26px 1fr 240px;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  box-shadow: 0 1px 12px 0 rgba(0,0,0,.34)
}

.rainbow-div.huge {
  position: relative;
  z-index: 99;
  display: none;
  margin-top: 0;
  padding: 20px 24px;
  box-shadow: none
}

.rainbow-div.huge:hover {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

.rainbow-div.success {
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 23px;
  padding-bottom: 23px;
  text-align: center
}

.rainbow-div.success.errort {
  background-color: #ec334e;
  box-shadow: none
}

.rainbow-div.customer-doc {
  width: 100%;
  padding-right: 8px;
  padding-left: 8px;
  -webkit-transform: translate(0,0);
  -ms-transform: translate(0,0);
  transform: translate(0,0)
}

.rainbow-div.customer-doc.row-2 {
  -webkit-transform: translate(-38px,0);
  -ms-transform: translate(-38px,0);
  transform: translate(-38px,0)
}

.rainbow-div.customer-doc.row-2-left {
  -webkit-transform: translate(-32px,0);
  -ms-transform: translate(-32px,0);
  transform: translate(-32px,0)
}

.rainbow-div.customer-doc.middle-bottom {
  -webkit-transform: translate(0,0);
  -ms-transform: translate(0,0);
  transform: translate(0,0)
}

.rainbow-div.customer-doc.row-left {
  -webkit-transform: translate(43px,0);
  -ms-transform: translate(43px,0);
  transform: translate(43px,0)
}

.rainbow-div.customer-doc.bottom-row {
  -webkit-transform: translate(-110px,0);
  -ms-transform: translate(-110px,0);
  transform: translate(-110px,0)
}

.rainbow-div.customer-doc.bottom-right {
  -webkit-transform: translate(90px,0);
  -ms-transform: translate(90px,0);
  transform: translate(90px,0)
}

.rainbow-div.customer-doc.second-row {
  -webkit-transform: translate(110px,0);
  -ms-transform: translate(110px,0);
  transform: translate(110px,0)
}

.rainbow-div.customer-doc.second-left {
  -webkit-transform: translate(-110px,0);
  -ms-transform: translate(-110px,0);
  transform: translate(-110px,0)
}

.text-callout {
  color: #fff;
  font-weight: 400
}

.background-gradient {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-image: radial-gradient(circle farthest-side at 100% 100%,rgba(56,132,255,.61),rgba(31,35,41,0) 59%,rgba(31,35,41,0))
}

.image-callout {
  height: 24px
}

.rainbow-link {
  margin-top: 46px;
  -webkit-transition: .2s;
  transition: .2s
}

.rainbow-link:hover {
  box-shadow: 1px 1px 3px 0 rgba(0,0,0,.4);
  -webkit-transform: scale(1.02);
  -ms-transform: scale(1.02);
  transform: scale(1.02)
}

.rainbow-link.ranbow-div {
  display: block
}

.grid-3 {
  grid-row-gap: 0px
}

.div-block-8 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.social-links {
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.team-social-link {
  margin-right: 24px;
  opacity: .51
}

.team-social-link:hover {
  opacity: 1
}

.div-block-9 {
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 48px 1fr 32px;
  grid-template-columns: 48px 1fr 32px;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.background-video {
  width: 100%;
  max-width: 1280px;
  min-height: 720px;
  padding-top: 0;
  border-radius: 6px
}

.image-5 {
  width: 80px;
  height: 80px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  border-radius: 5px
}

.gitbook-icons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 180px;
  max-width: 180px;
  min-width: 180px;
  padding: 30px 12px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 999px;
  background-color: #fff;
  background-image: -webkit-gradient(linear,left top,left bottom,from(#fff),to(#ced8eb));
  background-image: linear-gradient(180deg,#fff,#ced8eb);
  box-shadow: 1px 1px 0 0 #6481af,0 0 24px 0 rgba(0,0,0,.49);
  text-align: center
}

.grid-4 {
  margin: 16px;
  justify-items: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr
}

.grid-5 {
  padding: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-grid-columns: 32px 1fr;
  grid-template-columns: 32px 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.image-6 {
  border-radius: 999px
}

.heading-2 {
  margin-top: 0;
  margin-bottom: 0;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 18px
}

.text-block-6 {
  color: #cbd6ec
}

.underlaid-logos {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  display: -ms-grid;
  display: grid;
  justify-items: center;
  -webkit-box-align: start;
  -webkit-align-items: start;
  -ms-flex-align: start;
  align-items: start;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  opacity: .17
}

.grid-6 {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: auto;
  z-index: -1;
  margin-top: 129px;
  grid-row-gap: 48px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: 60px 60px;
  grid-template-rows: 60px 60px;
  opacity: .49;
  -webkit-transform: scale(.9) skew(0deg,0deg) perspective(137px);
  transform: scale(.9) skew(0deg,0deg) perspective(137px)
}

.grid-6.base {
  grid-row-gap: 96px;
  opacity: .16;
  -webkit-filter: blur(1px);
  filter: blur(1px);
  -webkit-transform: scale(.86) skew(0deg,0deg) perspective(137px);
  transform: scale(.86) skew(0deg,0deg) perspective(137px)
}

.div-block-10 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 910px;
  margin-top: 48px;
  margin-right: auto;
  margin-left: auto;
  padding: 48px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  border-radius: 6px;
  background-color: #fff
}

.heading-3 {
  max-width: 500px;
  font-family: Inter,sans-serif;
  color: #1f2329;
  font-size: 24px;
  line-height: 29px;
  font-weight: 800
}

.paragraph-5 {
  max-width: 490px;
  margin-bottom: 24px;
  color: #5b5d63
}

.grid-examples-home {
  margin-top: 64px;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr
}

.wrapper-example__home {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 20px 24px 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-radius: 6px;
  background-color: #fff;
  background-image: radial-gradient(circle farthest-corner at 100% 100%,#dce4f5,#fff);
  box-shadow: 1px 1px 12px 0 rgba(0,0,0,.4)
}

.wrapper-example__home.background-dark-faq {
  padding-bottom: 20px;
  background-color: #1f2329;
  background-image: radial-gradient(circle farthest-corner at 100% 100%,#343c4d,rgba(32,34,36,0))
}

.heading-example__home {
  margin-top: 0;
  font-family: Inter,sans-serif;
  color: #1f2329;
  font-size: 24px;
  font-weight: 800
}

.heading-example__home.something-else {
  color: #fff
}

.heading-example__home.something-else.faq-header {
  margin-bottom: 0;
  font-size: 20px;
  line-height: 1.3em;
  font-weight: 700
}

.heading-example__home.white {
  color: #fff
}

.paragraph-example__home {
  margin-bottom: 0;
  color: #5b5d63
}

.paragraph-example__home.light-blue,.paragraph-example__home.something-else {
  color: #cbd6ec
}

.something-else {
  margin-right: 0;
  padding-right: 0;
  color: #fff
}

.text-block-7 {
  margin-right: 8px;
  padding-right: 0;
  border-bottom: 2px #3884ff;
  color: #fff
}

.section-examples-home {
  padding-top: 80px;
  font-family: system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif
}

.heading-5 {
  font-family: Inter,sans-serif
}

.grid-8 {
  padding: 24px 16px;
  grid-column-gap: 24px;
  grid-row-gap: 4px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr
}

.price-cards {
  margin-top: 96px;
  margin-right: 0;
  margin-left: 0;
  grid-column-gap: 0px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.plan-card {
  padding-right: 16px;
  padding-left: 16px;
  background-color: #1f2329;
  background-image: radial-gradient(circle farthest-side at 100% 100%,#282f3d,#1d1e22 41%,#1d1e22)
}

.plan-card.rainbow-div {
  position: relative;
  z-index: 999;
  width: 100%;
  margin-top: -24px;
  margin-bottom: -24px;
  padding-top: 24px
}

.plan-card.business {
  position: relative;
  z-index: 99;
  background-color: #1d1e22;
  background-image: radial-gradient(circle farthest-corner at 100% 100%,#242c38,#1d1e22 43%,#1d1e22);
  box-shadow: 0 0 12px 0 rgba(0,0,0,.63)
}

.plan-card.last {
  position: relative;
  z-index: 99;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  box-shadow: 1px 0 12px 0 rgba(0,0,0,.6)
}

.plan-card.first {
  box-shadow: -1px 0 12px 0 rgba(0,0,0,.42)
}

.section-3 {
  margin: 179px auto 96px
}

.grid-9 {
  display: -ms-grid;
  display: grid;
  justify-items: stretch;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 3.75fr 542px;
  grid-template-columns: 3.75fr 542px;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.left-hero.margin-bottom {
  margin-bottom: 60px
}

.grid-companies {
  grid-column-gap: 48px;
  grid-row-gap: 48px;
  -ms-grid-columns: 230px 1fr;
  grid-template-columns: 230px 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.grid-11 {
  margin-left: 24px;
  -webkit-box-pack: stretch;
  -webkit-justify-content: stretch;
  -ms-flex-pack: stretch;
  justify-content: stretch;
  justify-items: stretch;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-content: start;
  -ms-flex-line-pack: start;
  align-content: start;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.explore-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 1px 1px 12px 0 rgba(0,0,0,.35)
}

.explore-header {
  color: #fff;
  font-size: 20px;
  font-weight: 700
}

.explore-desc {
  margin-bottom: 0;
  padding-top: 10px;
  color: #cbd6ec;
  font-size: 14px
}

.explore-item-footer {
  display: -ms-grid;
  display: grid;
  padding: 16px 24px 17px;
  grid-auto-columns: 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 16px;
  -ms-grid-columns: 24px 1fr;
  grid-template-columns: 24px 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #f3f5fa
}

.explore-attr {
  color: #0d2853;
  font-weight: 600
}

.explore-item-content {
  display: -ms-grid;
  display: grid;
  height: 100%;
  margin-bottom: 0;
  padding: 24px;
  grid-auto-columns: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 16px;
  -ms-grid-columns: 48px 1fr 18px;
  grid-template-columns: 48px 1fr 18px;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  background-color: #1c1e27
}

.body-2 {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px
}

.explore-image {
  border-radius: 999px
}

.collection-list__powered-by {
  display: -ms-grid;
  display: grid;
  width: 100%;
  margin-bottom: 16px;
  -webkit-box-pack: stretch;
  -webkit-justify-content: stretch;
  -ms-flex-pack: stretch;
  justify-content: stretch;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  grid-auto-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.grid-12 {
  display: block
}

.logo__explore {
  border-radius: 0
}

.collection-list-2 {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.collection-item-4px-colorbg {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  min-width: 300px;
  margin-bottom: 24px;
  padding: 4px;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-align-content: space-around;
  -ms-flex-line-pack: distribute;
  align-content: space-around;
  border-radius: 6px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 60%;
  background-size: auto;
  -webkit-transition: .2s;
  transition: .2s;
  -o-object-fit: fill;
  object-fit: fill
}

.collection-item-4px-colorbg:nth-child(even) {
  background-position: 100% 13%
}

.collection-item-4px-colorbg:hover {
  box-shadow: 0 1px 20px 0 hsla(0,0%,100%,.6)
}

.collection-item-4px-colorbg.user-stories {
  position: static;
  width: auto;
  max-height: 590px;
  min-width: auto;
  margin-bottom: 60px;
  padding: 0;
  border: 1px solid #cbd6ec;
  background-image: none;
  background-size: auto
}

.collection-item-4px-colorbg.user-stories:hover {
  box-shadow: 0 1px 20px 0 hsla(0,0%,100%,.6)
}

.collection-item-4px-colorbg.no-margin {
  margin-bottom: 0
}

.collection-item-4px-colorbg.no-margin:nth-child(even) {
  background-position: 0 20%
}

.collection-item-4px-colorbg.no-margin.no-hover:hover {
  box-shadow: none
}

.collection-item-4px-colorbg.customers-home {
  display: block;
  min-width: auto;
  margin-right: 24px;
  margin-bottom: 0
}

.collection-item-4px-colorbg.examples-home {
  display: block;
  min-width: auto;
  margin-bottom: 0
}

.avatar {
  position: relative;
  width: 90px;
  height: 90px;
  margin-right: 16px
}

.avatar-overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  background-image: linear-gradient(168deg,hsla(0,0%,100%,0),rgba(209,40,187,.16) 51%,rgba(56,73,255,.34))
}

.body-3 {
  background-color: transparent
}

.text-block-8 {
  padding-top: 0;
  color: #3884ff;
  font-size: 13px
}

.wrapper-city__team {
  display: -ms-grid;
  display: grid;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 4px;
  grid-row-gap: 16px;
  -ms-grid-columns: 16px 1fr;
  grid-template-columns: 16px 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.huge-title {
  font-family: Inter,sans-serif;
  font-size: 74px
}

.paragraph-light-blue {
  margin-bottom: 8px;
  color: #cbd6ec
}

.section-callout__home {
  display: block
}

.container710 {
  max-width: 710px;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

.container710.flex {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.background-color__hero-home {
  width: 100%;
  padding-top: 100px;
  padding-bottom: 140px;
  background-color: transparent
}

.image-10 {
  width: 80%;
  height: auto;
  border-radius: 5px
}

.container-3 {
  max-width: 1280px;
  padding-right: 48px;
  padding-left: 48px
}

.grid-2-col {
  width: 100%;
  grid-column-gap: 48px;
  -ms-grid-columns: 1fr 2.5fr;
  grid-template-columns: 1fr 2.5fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.split-heading {
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  margin-top: 0;
  font-family: Inter,sans-serif;
  font-size: 24px;
  font-weight: 900;
  text-align: right;
  letter-spacing: 4px;
  text-transform: uppercase
}

.webinar-block {
  display: -ms-grid;
  display: grid;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
  padding: 24px 24px 24px 48px;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 16px;
  -ms-grid-columns: 277px 1.5fr;
  grid-template-columns: 277px 1.5fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-radius: 4px;
  background-color: #1f2329;
  box-shadow: 1px 1px 12px 0 rgba(0,0,0,.27)
}

.heading__webinars {
  margin-bottom: 12px;
  font-size: 24px
}

.heading__webinars.center {
  text-align: center
}

.paragraph__webinar {
  margin-bottom: 8px;
  color: #cbd6ec;
  font-size: 18px;
  line-height: 26px
}

.paragraph__webinar.date-para {
  display: inline;
  margin-bottom: 16px;
  padding-top: 0;
  color: #fff;
  font-weight: 600
}

.paragraph__webinar.white {
  color: #fff
}

.image-11 {
  position: relative;
  top: -178px;
  right: 29px;
  display: block;
  width: 120px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%
}

.form {
  padding: 48px;
  border-radius: 8px;
  background-color: #1d1e22;
  box-shadow: 1px 1px 24px 0 rgba(0,0,0,.36)
}

.form-grid {
  display: -ms-grid;
  display: grid;
  margin-bottom: 32px;
  grid-auto-columns: 1fr;
  grid-column-gap: 48px;
  grid-row-gap: 32px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.form-grid.no-margin {
  margin-bottom: 0
}

.select-field {
  overflow: hidden;
  height: 48px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px 16px;
  border: 2px rgba(56,132,255,0);
  border-radius: 8px;
  background-color: #20222b;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/60ed81b3bdd8e35cb1923554_chevron-down-solid%20(1).svg");
  background-position: 95% 50%;
  background-size: 12px 12px;
  background-repeat: no-repeat;
  color: #c2c3c5;
  font-size: 16px;
  font-weight: 300
}

.select-field:hover {
  border-color: #3884ff
}

.select-field.multiple-answers {
  display: none;
  height: auto
}

.form-block {
  margin-bottom: 0
}

.success-message-2 {
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  background-color: #3884ff
}

.error-message-2 {
  max-width: 720px;
  margin-top: 24px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #e93550;
  text-align: center
}

.collection-list__jobs {
  display: -ms-grid;
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.heading__item-jobs {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 22px
}

.timezone {
  margin-bottom: 24px;
  color: #3884ff;
  font-weight: 500
}

.paragraph-9 {
  color: #cbd6ec
}

.text-apply__job {
  display: inline-block;
  border-bottom: 2px solid #3884ff;
  color: #fff;
  text-align: left
}

.link-offer__job {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 24px 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #1d1e22;
  -webkit-transition: .2s;
  transition: .2s
}

.link-offer__job:hover {
  box-shadow: 0 1px 20px 0 hsla(0,0%,100%,.6)
}

.div-block-15 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 680px;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 12px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 0;
  background-size: cover;
  box-shadow: 1px 1px 24px 0 rgba(0,0,0,.29);
  background-clip: border-box;
  -webkit-text-fill-color: inherit
}

.background-video-2 {
  width: 90%;
  height: 90%;
  margin: auto;
  border-radius: 4px;
  box-shadow: 1px 1px 12px 0 rgba(0,0,0,.26)
}

.background-video-3 {
  width: 90%;
  height: 90%
}

.wrapper-video-home {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 720px;
  margin-top: 48px;
  padding-top: 55px;
  padding-bottom: 55px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 0;
  background-size: cover;
  box-shadow: 1px 1px 24px 0 rgba(0,0,0,.27)
}

.background-video-home {
  position: relative;
  z-index: 1;
  width: 90%;
  height: 90%;
  min-height: 650px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  border-radius: 8px;
  box-shadow: 1px 1px 24px 0 rgba(0,0,0,.32)
}

.div-block-17 {
  padding-top: 64px;
  padding-bottom: 64px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.div-block-18 {
  position: absolute;
  left: 0;
  top: auto;
  right: auto;
  bottom: 0;
  z-index: 0;
  display: -ms-grid;
  display: grid;
  width: 50%;
  max-width: 640px;
  margin-bottom: 23px;
  margin-left: 24px;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  -ms-grid-rows: 1fr 1fr 1fr auto;
  grid-template-rows: 1fr 1fr 1fr auto;
  opacity: .43
}

.div-block-18.right {
  left: auto;
  top: auto;
  right: 0;
  bottom: 0;
  z-index: auto;
  width: 45%;
  margin-right: 24px;
  margin-left: 0;
  padding-right: 0
}

.div-block-18.offset {
  left: auto;
  top: auto;
  right: 0;
  bottom: 0;
  margin-right: 24px;
  margin-left: 0;
  padding-right: 0;
  grid-column-gap: 16px;
  grid-row-gap: 16px
}

.grid-14 {
  justify-items: stretch;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-column-gap: 16px;
  -ms-grid-columns: 32px 1fr;
  grid-template-columns: 32px 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.heading-8 {
  margin-top: 0;
  margin-bottom: 0;
  font-family: Inter,sans-serif;
  font-size: 14px;
  font-weight: 700
}

.text-block-10 {
  color: #cbd6ec;
  font-size: 14px;
  font-weight: 300
}

.customer-avatar {
  border-radius: 999px
}

.text-block-11 {
  padding-top: 16px;
  opacity: .84;
  color: #cbd6ec;
  text-align: center
}

.pagination__powered-by {
  display: none;
  margin-top: 0;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

.next {
  position: relative;
  margin-right: 0;
  margin-left: 0
}

.previous {
  margin-right: 0;
  margin-left: 0
}

.wrapper-categories__powered-by {
  position: -webkit-sticky;
  position: sticky;
  top: 100px
}

.bold-text {
  font-size: 20px;
  line-height: 30px
}

.section-logos-home {
  margin-top: 128px
}

.logo-title {
  margin-top: 8px;
  color: #cbd6ec;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase
}

.grid-logos-customers {
  width: 90%;
  margin: 16px auto;
  justify-items: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-column-gap: 32px;
  grid-row-gap: 64px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.client-logo {
  max-height: 60px;
  max-width: 80%
}

.client-logo.flatfile {
  max-height: 50px
}

.paragraph-grid {
  margin-bottom: 24px;
  color: #cbd6ec;
  font-size: 1.15rem;
  line-height: 1.5em
}

.purple-header {
  margin-top: 0;
  margin-bottom: 24px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 15%;
  background-size: cover;
  font-size: 3.5rem;
  line-height: 1.2em;
  font-weight: 900;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent
}

.purple-header.powered-by-gitbook {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/60394fb984b7a85f965cc2b9_BlueBackground.png")
}

.purple-header.purple-header-small {
  font-size: 80px;
  line-height: 80px
}

.purple-header.blog,.purple-header.no-margin {
  margin-bottom: 0
}

.heading-10 {
  margin-top: 24px
}

.bold-text-2,.bold-text-3,.bold-text-4 {
  color: #cbd6ec
}

.grid-values {
  grid-column-gap: 32px;
  grid-row-gap: 32px
}

.principle-title {
  font-size: 18px;
  font-weight: 700
}

.principle-block {
  padding: 24px;
  border-radius: 8px;
  background-color: #1d1e22;
  -webkit-transition: .2s;
  transition: .2s
}

.principle-block:hover {
  box-shadow: none
}

.colourful-callout {
  margin-right: auto;
  margin-left: auto;
  padding: 32px;
  border-radius: 12px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 0;
  background-size: cover
}

.colourful-callout.bottom {
  margin-bottom: 0;
  padding: 48px;
  border-radius: 12px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/60394fb984b7a85f965cc2b9_BlueBackground.png")
}

.colourful-callout.explore {
  position: relative;
  margin: -64px 0 0;
  padding: 4px;
  border-radius: 8px;
  background-position: 0 50%;
  box-shadow: 1px 1px 12px 0 rgba(0,0,0,.34)
}

.colourful-callout.colourful-callout-compact {
  width: 100%;
  margin-top: 60px;
  padding: 16px
}

.team-section {
  margin-top: 64px
}

.callout-content {
  margin-bottom: 0;
  padding: 16px;
  -ms-grid-columns: 1fr 220px;
  grid-template-columns: 1fr 220px;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-radius: 8px;
  background-color: #1d1e22
}

.callout-content.bottom {
  padding-top: 48px;
  padding-bottom: 48px
}

.callout-content.callout-content-small {
  padding: 16px
}

.callout-heading {
  font-family: Inter,sans-serif
}

.callout-text {
  color: #cbd6ec
}

.bottom-callout {
  padding-top: 60px;
  padding-bottom: 60px
}

.image-example__home {
  height: 100px;
  margin-bottom: 16px;
  margin-left: -12px
}

.image-14 {
  width: auto;
  height: 160px;
  max-width: none
}

.image-15 {
  width: 18px
}

.pagination-3 {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

.feature-border {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #3884ff;
  border-radius: 3px
}

.collection-list-wrapper-2 {
  margin-bottom: 48px
}

.form-block-2 {
  position: relative;
  left: 19px
}

.grid-16 {
  margin-top: 16px;
  margin-bottom: 16px;
  grid-column-gap: 28px;
  grid-row-gap: 5px;
  grid-template-areas: "Area-3 Area-4 Area-5" "Area . ." "Area-2 . .";
  -ms-grid-columns: 1fr 28px 3.75fr 28px 1fr 28px 1fr;
  grid-template-columns: 1fr 3.75fr 1fr 1fr;
  -ms-grid-rows: auto 5px auto;
  grid-template-rows: auto auto
}

.webinar-grid {
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr
}

.nav-dropdown {
  position: absolute;
  left: -24px;
  z-index: 999;
  background-color: #1d1e22
}

.link-block-2 {
  display: block;
  padding: 24px
}

.dropdown-2 {
  z-index: 999
}

.navbar-2 {
  position: fixed;
  display: block;
  width: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent
}

.dropdown-list {
  z-index: 999
}

.dropdown-list.w--open {
  position: absolute;
  width: 190px
}

.arrow-dropdown__navbar {
  width: 12px;
  height: 18px;
  margin-left: 8px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

.contact-sales-columns-left {
  padding-right: 10px;
  padding-left: 0
}

.contact-sales-columns-right {
  padding-right: 0
}

.div-block-21 {
  font-size: 142px;
  line-height: 160px
}

.image-120px-round {
  display: block;
  width: 120px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 999px
}

.container {
  max-width: 1328px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 48px;
  padding-left: 48px
}

.container.nav-flex {
  position: relative;
  z-index: 999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.container.hero-flex-horizontal {
  position: relative;
  z-index: 9;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10vh 48px 12vh;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
  -webkit-perspective: 1000px;
  perspective: 1000px
}

.container.hero-flex-vertical {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.container.final-cta {
  margin-top: 160px;
  margin-bottom: 0;
  padding-bottom: 0
}

.container.height-100 {
  height: 100%
}

.container._710px {
  max-width: 758px
}

.background-gradient-body {
  z-index: -1;
  background-image: radial-gradient(circle farthest-side at 100% 100%,rgba(56,132,255,.61),rgba(31,35,41,0) 59%,rgba(31,35,41,0))
}

.section {
  padding-top: 60px;
  padding-bottom: 60px
}

.section.padding-top {
  padding-top: 120px
}

.section.padding-top.hidden {
  display: none
}

.section.padding120top {
  padding-top: 120px
}

.section.no-padding-top {
  padding-top: 0
}

.section.no-padding-top.padding-bottom30 {
  padding-bottom: 30px
}

.section.padding120bottom {
  padding-bottom: 120px
}

.section.padding120 {
  padding-top: 120px;
  padding-bottom: 120px
}

.section.padding120.overflow-hidden {
  overflow: hidden
}

.section.blog {
  padding-bottom: 40px
}

.section.blog-feature {
  padding-top: 0;
  padding-bottom: 80px
}

.nav-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.form-webinar {
  padding: 32px 48px;
  border-radius: 8px;
  background-color: #1d1e22;
  box-shadow: 1px 1px 24px 0 rgba(0,0,0,.36)
}

.wrapper-text-form__webinar {
  padding-bottom: 60px
}

.grid-webinar-form {
  display: -ms-grid;
  display: grid;
  padding-right: 80px;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 40px;
  -ms-grid-columns: 1fr 380px;
  grid-template-columns: 1fr 380px;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.image-48px-round {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover
}

.image-48px-round.margin-bottom-8 {
  margin-bottom: 8px
}

.wrapper-image__text-webinar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 24px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 18px;
  line-height: 24px
}

.wrapper-image__text-webinar.webinar {
  margin-top: 16px;
  margin-bottom: 0
}

.text-name__webinar {
  font-weight: 600
}

.form-block__webinar {
  margin-bottom: 0
}

.wrapper-name-position__webinar {
  margin-left: 16px
}

.paragraph-sucess-form__webinar.date-para {
  margin-bottom: 16px;
  color: #3884ff;
  font-weight: 600
}

.purple-header.smaller {
  font-size: 2rem;
  line-height: 1.3em
}

.heading-webinar {
  margin-top: 8px;
  margin-bottom: 30px;
  font-weight: 800
}

.btn {
  margin-top: 16px;
  padding: 10px 16px 10px 20px;
  border: 2px solid #2f74e4;
  border-radius: 4px;
  background-color: #2f74e4;
  -webkit-transition: 250ms;
  transition: 250ms;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: .4px;
  text-transform: capitalize
}

.btn:hover {
  border-color: #3884ff;
  background-color: #3884ff;
  box-shadow: 1px 0 3px 0 #000
}

.btn.full-width {
  width: 100%
}

.btn.full-width.no-margin,.btn.no-margin {
  margin-top: 0
}

.btn.color-bg {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 50%;
  background-size: auto;
  background-repeat: no-repeat
}

.btn.color-bg:hover {
  background-position: 72% 50%
}

.grid-webinar {
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  -ms-grid-columns: 1fr 2fr;
  grid-template-columns: 1fr 2fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.wrapper-side-infos__webinar {
  position: relative;
  padding: 24px;
  border: 1px solid #3884ff;
  border-radius: 8px;
  background-color: #1f2329
}

.heading-side-info__webinar {
  margin-bottom: 12px;
  font-weight: 600;
  text-transform: uppercase
}

.background-side-info__webinar {
  position: absolute;
  left: -8px;
  top: 8px;
  right: 8px;
  bottom: -8px;
  z-index: -1;
  border-radius: 9px;
  background-color: #3884ff
}

.rich-text__webinar h3 {
  margin-top: 0
}

.rich-text__webinar p {
  color: #fff
}

.rich-text__webinar h2 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 1.3em
}

.wrapper-callout-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 48px 1fr 32px;
  grid-template-columns: 48px 1fr 32px;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.paragraph-white {
  color: #fff
}

.success-message {
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: transparent;
  font-family: Inter,sans-serif
}

.error-message {
  border-color: #ff194a;
  border-radius: 8px;
  font-family: Inter,sans-serif
}

.wrapper-580px {
  max-width: 610px;
  margin-right: auto;
  margin-left: auto
}

.wrapper-feature__powered-by {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.icon__powered-by {
  width: 16px;
  margin-right: 16px
}

.wrapper-heading__pricing {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.paragraph-560px-center {
  max-width: 560px;
  margin-bottom: 0;
  color: #cbd6ec;
  font-size: 18px;
  line-height: 26px;
  font-weight: 300;
  text-align: left;
  text-shadow: 1px 1px 3px rgba(0,0,0,.22)
}

.paragraph-560px-center.center {
  margin-right: auto;
  margin-bottom: 48px;
  margin-left: auto;
  font-weight: 300;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0,0,0,.52)
}

.paragraph-560px-center.left-660px {
  max-width: 660px;
  margin-right: 0;
  margin-bottom: 10px;
  margin-left: 0;
  float: none;
  font-size: 18px;
  line-height: 28px
}

.paragraph-560px-center.bulletpoint {
  margin-bottom: 15px
}

.paragraph-560px-center.bookdemo {
  margin-top: 26px;
  margin-bottom: 26px
}

.wrapper-60 {
  width: 60%
}

.rich-text__grid-2-col p {
  color: #cbd6ec;
  font-size: 1.15rem;
  line-height: 1.5em
}

.rich-text__grid-2-col h2 {
  margin-top: 24px;
  font-size: 2rem;
  line-height: 1.25em
}

.wrapper-heading__values {
  max-width: 900px;
  margin-right: auto;
  margin-bottom: 60px;
  margin-left: auto;
  text-align: center
}

.heading__about {
  margin-bottom: 24px
}

.wrapper-apply__job {
  display: inline-block
}

.anchor {
  position: relative;
  top: -60px
}

.wrapper-radio-field {
  margin-bottom: 8px;
  padding-left: 24px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.radio-button {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  margin-left: -24px;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  border-color: #cbd6ec
}

.radio-button.w--redirected-checked {
  border-width: 3px;
  border-color: #3884ff
}

.radio-button-label {
  color: #cbd6ec
}

.wrapper-checkbox-field {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 12px;
  padding-left: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.wrapper-checkbox-field.last-item {
  margin-bottom: 0
}

.checkbox-field {
  width: 20px;
  height: 20px;
  margin-top: 0;
  margin-left: 0;
  border-color: #3884ff;
  border-radius: 4px;
  -webkit-transition: box-shadow .2s;
  transition: box-shadow .2s;
  cursor: pointer
}

.checkbox-field.w--redirected-checked {
  width: 20px;
  height: 20px;
  border-color: #3884ff;
  border-radius: 4px;
  background-color: transparent;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/60d5d0378e5a2dd5bff19c80_check-solid.svg");
  background-size: 14px 14px;
  box-shadow: 0 0 3px 1px #3884ff
}

.checkbox-field.w--redirected-focus {
  box-shadow: 0 0 3px 1px #3884ff
}

.checkbox-label {
  margin-left: 12px;
  cursor: pointer
}

.wrapper-all-checkbox {
  margin-top: 16px
}

.wrapper-90--desktop {
  width: 90%;
  margin-right: auto;
  margin-left: auto
}

.grid-contact {
  grid-auto-flow: column;
  grid-column-gap: 120px;
  grid-row-gap: 60px;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.div-block-22 {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto
}

.hidden {
  display: none
}

.wrapper-list {
  margin-bottom: 0;
  padding-left: 30px
}

.collection-list__categories {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.div-center {
  text-align: center
}

.collection-item__user-stories {
  margin-bottom: 60px
}

.collection-item__user-stories.last {
  margin-bottom: 120px
}

.wrapper-content__user-stories {
  display: -ms-grid;
  display: grid;
  overflow: hidden;
  width: 100%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-radius: 6px;
  background-color: #1f2329;
  -webkit-transition: .2s;
  transition: .2s;
  color: #fff
}

.wrapper-content__user-stories:hover {
  box-shadow: none
}

.image__user-stories {
  border-radius: 0;
  -o-object-fit: cover;
  object-fit: cover
}

.wrapper-text__user-stories {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 60px 30px 90px
}

.wrapper-text__user-stories.padding-left {
  padding-left: 30px
}

.wrapper-text__user-stories.padding-right {
  padding-right: 30px
}

.logo-customer {
  width: 78px
}

.heading-card__user-stories {
  margin-top: 12px;
  font-size: 28px
}

.heading-card__user-stories.no-margin-top {
  margin-top: 0
}

.text-testimonial__user-stories {
  padding: 20px;
  border: 1px solid #cbd6ec;
  border-radius: 11px 11px 11px 0;
  color: #cbd6ec;
  font-style: italic;
  font-weight: 400
}

.wrapper-image-customer__user-stories {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 12px
}

.image-customer {
  width: 48px;
  height: 48px;
  margin-right: 8px;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover
}

.name-customer {
  font-size: 18px;
  line-height: 22px;
  font-weight: 500
}

.role-customer {
  color: #cbd6ec;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase
}

.container1140 {
  max-width: 1188px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 24px;
  padding-left: 24px
}

.container1140.nav-flex {
  position: relative;
  z-index: 999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.container1140.hero-flex-horizontal {
  position: relative;
  z-index: 9;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10vh 48px 12vh;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 8px;
  background-color: transparent;
  -webkit-perspective: 1000px;
  perspective: 1000px
}

.container1140.hero-flex-vertical {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.container1140.final-cta {
  margin-top: 160px;
  margin-bottom: 0;
  padding-bottom: 0
}

.container1140.height-100 {
  height: 100%
}

.container1140._710px {
  max-width: 758px
}

.customer-readmore {
  margin-right: 8px
}

.wrapper-customer-readmore {
  position: absolute;
  left: auto;
  top: auto;
  right: 30px;
  bottom: 30px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #da42b1;
  font-size: 18px
}

.wrapper-customer-readmore.white {
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border-radius: 100%;
  opacity: 1;
  color: #fff
}

.wrapper-customer-readmore.color {
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 10%;
  background-size: auto;
  opacity: 0;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent
}

.arrow {
  width: 12px;
  height: 17px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

.grid-customers__user-stories {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.collection-item-grid__user-stories {
  padding: 30px;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 4px;
  background-color: #1f2329;
  -webkit-transition: .2s;
  transition: .2s;
  text-align: center
}

.logo-customer-grid {
  height: 30px;
  margin-bottom: 12px
}

.small-card__customer-stories {
  margin-top: 120px
}

.customer-logo__home {
  display: -ms-grid;
  display: grid;
  justify-items: center;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 24px;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.logo-home {
  max-height: 40px
}

.logo-home.in-footer {
  max-height: 48px
}

.wrapper-700px-center {
  max-width: 700px;
  margin-right: auto;
  margin-left: auto;
  text-align: center
}

.container900 {
  max-width: 948px;
  padding-right: 24px;
  padding-left: 24px
}

.explore-slide {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap
}

.wrapper-company-explore__home {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 200px;
  height: 100%;
  min-height: 140px;
  padding: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-radius: 6px;
  background-color: #1f2329;
  color: #fff;
  font-weight: 400
}

.logo-explore__home {
  height: 50px;
  max-width: 120px;
  margin-bottom: 12px;
  border-radius: 0;
  -o-object-fit: contain;
  object-fit: contain
}

.explore-slider {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  padding-top: 20px;
  padding-bottom: 20px
}

.explore-slider._1 {
  margin-left: -100px
}

.wrapper-content-customers__home {
  margin-bottom: 40px
}

.paragraph {
  max-width: 650px;
  color: #7b88a8;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400
}

.tab-grid {
  width: 100%;
  height: 100%;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.tab-h1 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #2d3958;
  font-size: 38px;
  line-height: 1.1;
  letter-spacing: -.03em
}

.tab-panel {
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 60px 100px -50px rgba(21,28,52,.31)
}

.tabs-content {
  width: 50%;
  padding: 20px 20px 20px 40px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

.tabs-menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 50%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.load-bar-base {
  position: absolute;
  left: 0;
  top: auto;
  right: 0;
  bottom: 0;
  height: 2px;
  margin-right: 30px;
  margin-left: 30px;
  border-radius: 500px;
  background-color: #c2c3c5
}

.load-bar-base.heading {
  position: static
}

.link-arrow {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
  padding-top: 18px;
  padding-bottom: 18px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 600;
  text-decoration: none
}

.tab-image-2 {
  width: 44px;
  margin-right: 12px
}

.animation-block {
  border-radius: 25px
}

.standard-tab {
  margin-bottom: 24px;
  padding-bottom: 16px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
  opacity: .7;
  color: #fff
}

.standard-tab.w--current {
  position: relative;
  width: auto;
  background-color: transparent;
  opacity: 1;
  color: #fff
}

.text-block-5 {
  margin-right: 14px
}

.load-bar {
  width: 0%;
  height: 2px;
  border-radius: 500px;
  background-color: #3884ff;
  background-image: none
}

.content-block {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 40px;
  padding-left: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  text-align: left
}

.colourful-callout-bg {
  display: none;
  height: 100%;
  padding: 4px;
  border-radius: 8px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 0;
  background-size: cover
}

.colourful-callout-bg.bottom {
  margin-bottom: 0;
  padding: 48px;
  border-radius: 12px;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/60394fb984b7a85f965cc2b9_BlueBackground.png")
}

.colourful-callout-bg.explore {
  position: relative;
  margin: -44px 0 0;
  padding: 4px;
  border-radius: 8px;
  background-position: 0 50%;
  box-shadow: 1px 1px 12px 0 rgba(0,0,0,.34)
}

.colourful-callout-bg.colourful-callout-compact {
  width: 100%;
  margin-top: 60px;
  padding: 16px
}

.wrapper-content-post__blog {
  overflow: hidden;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-radius: 6px;
  background-color: #1f2329
}

.wrapper-content-post__blog.feature {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.image-feature__blog {
  width: 100%;
  max-height: 380px;
  border-radius: 0;
  -o-object-fit: cover;
  object-fit: cover
}

.wrapper-text-feature__blog {
  margin-top: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  color: #fff
}

.info-blog-post__blog {
  margin-bottom: 0;
  color: #fff;
  font-weight: 400
}

.heading-feature__blog {
  margin-top: 0
}

.subheading-feature__blog {
  color: #fff;
  font-weight: 400
}

.grid-blog-post__blog {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 48px;
  grid-row-gap: 48px;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.wrapper-blog-post__blog {
  border-radius: 6px;
  background-color: #1f2329
}

.image-blog-post__blog {
  width: 100%;
  max-height: 300px;
  border-radius: 0;
  -o-object-fit: cover;
  object-fit: cover
}

.heading-blog-post__blog {
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 1.5rem;
  line-height: 1.25em;
  font-weight: 600
}

.subheading-blog-post__blog {
  margin-bottom: 0;
  color: #fff;
  font-weight: 400
}

.example__home {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  padding: 20px 24px 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-radius: 6px;
  background-color: #1f2329;
  color: #fff;
  font-weight: 400
}

.wrapper-customers-logo__home {
  padding: 20px 24px;
  border-radius: 4px;
  background-color: #1d1e22;
  text-align: center
}

.text-customers__home {
  display: block;
  margin-bottom: 16px;
  color: #fff;
  font-weight: 400
}

.text-customers__home.no-margin {
  margin-bottom: 0
}

.wrapper-author__blog-post {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 24px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center
}

.heading__blog-post {
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 2.5rem;
  line-height: 1.2em;
  font-weight: 800;
  text-align: center
}

.wrapper-author-date__blog-post {
  margin-left: 8px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

.author-name__blog-post {
  margin-bottom: 0;
  color: #fff;
  line-height: 22px;
  font-weight: 700
}

.main-image__blog-post {
  width: 100%;
  max-height: 500px;
  margin-bottom: 48px;
  border-radius: 6px;
  -o-object-fit: cover;
  object-fit: cover
}

.post-summary__blog-post {
  font-size: 18px;
  line-height: 1.4em;
  font-style: italic
}

.divider {
  width: 100%;
  height: 2px;
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 500px;
  background-image: -webkit-gradient(linear,left top,right top,from(#6366e0),to(#da42b1));
  background-image: linear-gradient(90deg,#6366e0,#da42b1);
  background-position: 0 0
}

.rich-text__blog-post p {
  margin-bottom: 12px;
  color: #fff
}

.rich-text__blog-post h4 {
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 1.5rem;
  font-weight: 700
}

.rich-text__blog-post h3 {
  margin-bottom: 12px;
  font-size: 1.8rem;
  font-weight: 700
}

.rich-text__blog-post ul {
  margin-bottom: 12px
}

.rich-text__blog-post blockquote {
  border-left-width: 2px;
  border-left-color: #da42b1;
  background-color: transparent;
  font-family: Inter,sans-serif;
  font-size: 1.1rem;
  line-height: 1.4em;
  font-style: normal
}

.rich-text__blog-post h2 {
  font-size: 2rem
}

.grid-changelog {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.wrapper-item__changelog {
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-radius: 6px;
  background-color: #1f2329;
  color: #fff;
  font-weight: 400
}

.wrapper-content__changelog {
  padding: 20px 24px
}

.wrapper-content__changelog.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.heading-item__changelog {
  margin-top: 8px;
  margin-bottom: 8px;
  font-size: 1.8rem;
  font-weight: 600
}

.date-release__changelog {
  color: #c2c3c5
}

.image-item__changelog {
  width: 100%;
  max-height: 300px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  -o-object-fit: cover;
  object-fit: cover
}

.divider-hero-home {
  width: 100%;
  height: 4px;
  background-image: -webkit-gradient(linear,left top,right top,from(#7669ed),to(#65b7d3));
  background-image: linear-gradient(90deg,#7669ed,#65b7d3);
  background-position: 0 0
}

.divider-2 {
  width: 100%;
  height: 2px;
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 500px;
  background-image: -webkit-gradient(linear,left top,right top,from(#6366e0),to(#da42b1));
  background-image: linear-gradient(90deg,#6366e0,#da42b1);
  background-position: 0 0
}

.wrapper-text-customers__home {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.wrapper-btn-customer__home {
  margin-right: 60px
}

.faq-question-wrap {
  cursor: pointer
}

.faq-question-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 24px;
  padding-bottom: 24px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer
}

.question-title {
  margin-right: 10px;
  letter-spacing: -.03em
}

.faq-circle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 40px;
  height: 40px;
  min-height: 40px;
  min-width: 40px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 100%;
  background-color: #f3f3f3
}

.plus-icon {
  width: 20px;
  height: 20px
}

.faq-content {
  overflow: hidden;
  margin-top: 14px;
  margin-bottom: 14px
}

.faq-paragraph-2 {
  margin-bottom: 0;
  color: #fff;
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: -.03em
}

.div-block {
  width: 100%;
  height: 1px
}

.grid-features__home {
  display: -ms-grid;
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.feature__home {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  padding: 52px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  border-radius: 6px;
  background-image: linear-gradient(135deg,#1f2329,rgba(31,35,41,.5) 80%);
  box-shadow: 0 1px 20px 1px rgba(20,21,24,.5);
  -webkit-transition: .3s;
  transition: .3s;
  color: #fff;
  font-weight: 400
}

.feature__home:hover {
  box-shadow: none
}

.icon-feature__home {
  width: 24px;
  height: 24px;
  margin-bottom: 12px;
  -o-object-fit: cover;
  object-fit: cover
}

.wrapper-700px-left {
  max-width: 700px
}

.paragraph-hero-left {
  max-width: 530px;
  margin-top: 24px;
  margin-bottom: 0;
  color: #cbd6ec;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0,0,0,.36)
}

.paragraph-hero-left.center {
  margin-top: 24px;
  margin-right: auto;
  margin-left: auto;
  text-align: center
}

.tabs__uses-cases {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.faq-plus-wrap {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 30px;
  height: 30px;
  min-height: 30px;
  min-width: 30px;
  margin-right: 15px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff
}

.faq-plus-l {
  position: absolute;
  width: 2px;
  height: 14px;
  border-radius: 500px;
  background-color: #1f2329
}

.faq-plus {
  width: 14px;
  height: 2px;
  border-radius: 500px;
  background-color: #1f2329
}

.faq-question {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer
}

.link {
  color: #2aa8ff;
  font-weight: 600
}

.faq-answer-text {
  margin-bottom: 30px;
  color: #fff;
  font-size: 1.05rem;
  line-height: 1.5em
}

.faq-answer {
  overflow: hidden;
  padding-left: 45px;
  border-bottom: 1px solid rgba(203,214,236,.08)
}

.wrapper-plus__faq {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.wrapper-faq__pricing {
  margin-top: 64px
}

.lottie-use-case {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 30px
}

.lottie-use-case.blue {
  z-index: 1
}

.lottie-use-case.grey {
  z-index: 0
}

.wrapper-heading__tab {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 8px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.paragraph__tab {
  overflow: hidden;
  color: #fff;
  font-weight: 300
}

.wrapper-lottie {
  position: relative;
  display: none;
  width: 30px;
  height: 30px;
  margin-right: 8px;
  padding: 2px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.play-use-case {
  width: 12px;
  height: 18px
}

.play-button {
  width: 30px;
  height: 30px;
  min-height: 30px;
  min-width: 30px;
  margin-right: 8px
}

.play-button.blue {
  z-index: 1
}

.play-button.grey {
  z-index: 0
}

.shoutout-script {
  background-color: transparent
}

.rainbow-div-2 {
  display: block;
  margin-top: 48px;
  padding: 8px 16px 9px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 26px 1fr 36px;
  grid-template-columns: 26px 1fr 36px;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-radius: 4px;
  background-color: #1d1e22;
  box-shadow: -1px 1px 5px 0 rgba(49,179,146,.46),-1px -1px 5px 0 rgba(169,54,223,.61),1px 1px 5px 0 rgba(56,132,255,.49);
  -webkit-transition: 440ms;
  transition: 440ms
}

.rainbow-div-2:hover {
  box-shadow: -1px 1px 5px 0 rgba(49,179,146,.46),1px -1px 5px 0 rgba(169,54,223,.61),0 1px 5px 0 rgba(56,132,255,.49);
  -webkit-transform: scale(1.03);
  -ms-transform: scale(1.03);
  transform: scale(1.03)
}

.rainbow-div-2.huge {
  position: relative;
  z-index: 99;
  display: none;
  margin-top: 0;
  padding: 20px 24px;
  box-shadow: none
}

.rainbow-div-2.huge:hover {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

.wrapper-customers-logo__home-2 {
  padding: 20px 24px;
  border-radius: 4px;
  background-color: #1d1e22;
  text-align: center
}

.text-callout-2 {
  color: #fff;
  font-weight: 400
}

.text-customers__home-2 {
  display: block;
  margin-bottom: 12px;
  color: #fff;
  font-weight: 400
}

.grid-hero__feature {
  grid-column-gap: 60px;
  grid-row-gap: 48px;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.outlined-btn-2 {
  margin-top: 16px;
  margin-right: 16px;
  padding: 10px 20px;
  border: 2px solid #3884ff;
  border-radius: 4px;
  background-color: transparent;
  -webkit-transition: border-color .3s,color .3s cubic-bezier(.23, 1, .32, 1),background-color .3s;
  transition: border-color .3s,color .3s cubic-bezier(.23, 1, .32, 1),background-color .3s;
  font-family: Inter,sans-serif;
  color: #fff;
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  text-align: center;
  letter-spacing: .4px;
  text-decoration: none;
  text-transform: capitalize
}

.outlined-btn-2:hover {
  border-color: #3884ff;
  background-color: #3884ff;
  color: #fff
}

.outlined-btn-2.no-margin-top {
  margin-top: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

.callout-content-2 {
  margin-bottom: 0;
  padding: 16px;
  -ms-grid-columns: 1fr 220px;
  grid-template-columns: 1fr 220px;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
  border-radius: 8px;
  background-color: #1d1e22
}

.callout-text-2 {
  color: #cbd6ec
}

.dropdown {
  position: relative
}

.wrapper-dropdown-list {
  padding: 8px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  border: 1px rgba(203,214,236,.5);
  border-radius: 6px;
  background-color: #1d1e22;
  box-shadow: none
}

.wrapper-dropdown-list._2-col {
  left: -130%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.wrapper-dropdown-list.padding-less {
  padding-top: 8px
}

.text-dropdown__nav-bar {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-right: 12px;
  padding-left: 12px;
  font-weight: 600
}

.divider-nav-bar {
  display: block;
  width: 1px;
  height: 200px;
  margin: auto 16px;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch;
  background-color: rgba(203,214,236,.5)
}

.wrapper-dropdowns-2-col__nav-bar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex
}

.nav-link-wrap-dropdown {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  overflow: visible;
  margin-right: 8px;
  padding: 24px 8px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  color: #fff;
  line-height: 22px;
  font-weight: 500;
  text-decoration: none;
  text-transform: capitalize;
  -o-object-fit: fill;
  object-fit: fill
}

.nav-link-wrap-dropdown:hover {
  opacity: 1
}

.nav-link-wrap-dropdown.w--current:hover {
  text-shadow: 0 0 3px #000,-1px -1px 6px rgba(190,37,190,.81),1px 1px 3px rgba(56,132,255,.7)
}

.nav-link-wrap-dropdown.w--open {
  z-index: 999
}

.nav-link-wrap-dropdown.dropdown {
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  cursor: pointer
}

.nav-link-wrap-dropdown.last.w--current {
  margin-right: 32px
}

.nav-link-wrap-dropdown.last.authonly {
  position: relative
}

.nav-link-wrap-dropdown.dropdown-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.wrapper-links__nav-bar {
  margin-right: 16px
}

.wrapper-field {
  margin-bottom: 16px
}

.wrapper-field.last {
  margin-bottom: 0
}

.jetboost-infinite-loader-pd6m {
  display: none
}

.wrapper-dropdown-list-bg {
  padding: 4px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  border-radius: 6px;
  background-color: transparent;
  background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/603408f80d379f66929884cf_PurpleBackground%20(1).png");
  background-position: 0 0;
  background-size: auto
}

.wrapper-dropdown-list-bg._2-col {
  left: -130%
}

.wrapper-dropdown-list-bg._2-col.no-position-left {
  left: auto
}

.wrapper-dropdown-list-bg.padding-less {
  padding-top: 8px
}

.pagination-hidden {
  display: none
}

.image-feature__home {
  width: 100px;
  margin-bottom: 12px;
  margin-left: -8px
}

.image__tabs {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover
}

.grid-micro-features {
  width: 100%
}

.icon__powered-by {
  height: 16px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

.collection-item-simple-border {
  position: relative;
  width: 100%;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  -webkit-align-content: space-around;
  -ms-flex-line-pack: distribute;
  align-content: space-around;
  border: 1px solid #cbd6ec;
  border-radius: 6px;
  -webkit-transition: .2s;
  transition: .2s
}

.collection-item-simple-border:nth-child(even) {
  background-position: 100% 13%
}

.collection-item-simple-border:hover {
  box-shadow: 0 1px 20px 0 hsla(0,0%,100%,.6)
}

.collection-item-simple-border.user-stories {
  position: static;
  width: auto;
  max-height: 590px;
  min-width: auto;
  margin-bottom: 60px;
  padding: 0;
  border: 1px solid #cbd6ec
}

.collection-item-simple-border.user-stories:hover {
  box-shadow: 0 1px 20px 0 hsla(0,0%,100%,.6)
}

.collection-item-simple-border.no-margin {
  margin-bottom: 0
}

.collection-item-simple-border.no-margin:nth-child(even) {
  background-position: 0 20%
}

.collection-item-simple-border.no-margin.no-hover:hover {
  box-shadow: none
}

.collection-item-simple-border.customers-home {
  display: block;
  min-width: auto;
  margin-right: 24px;
  margin-bottom: 0
}

.collection-item-simple-border.examples-home {
  display: block;
  min-width: auto;
  margin-bottom: 0
}

.wrapper-pagination-custom {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 24px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center
}

.wrapper-social-sharing {
  position: -webkit-sticky;
  position: sticky;
  top: 120px;
  display: block;
  margin-left: -88px;
  padding-top: 6px
}

.text__social-sharing {
  margin-bottom: 12px
}

.share-button {
  position: relative;
  width: 48px;
  height: 48px;
  margin-bottom: 12px;
  padding: 12px;
  border: 1px solid #cbd6ec;
  border-radius: 50%;
  -webkit-transition: .2s;
  transition: .2s;
  cursor: pointer
}

.share-button:hover {
  background-color: #cbd6ec;
  color: #1e2530
}

.clipboard {
  position: relative;
  width: 48px;
  height: 48px;
  padding: 12px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #cbd6ec;
  border-radius: 50%;
  -webkit-transition: .2s;
  transition: .2s;
  cursor: pointer
}

.clipboard:hover {
  background-color: #cbd6ec;
  color: #1e2530
}

.copy-icon {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center
}

.check-icon {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: none;
  padding: 12px
}

.html-embed-share-button {
  overflow: hidden;
  max-height: 48px;
  max-width: 48px;
  font-size: 6px
}

.wrapper-content__blog-post {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 710px;
  margin-right: auto;
  margin-left: auto
}

.is-hidden {
  display: none
}

.image-516-copy {
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 50%;
  background-image: url("https://d3e54v103j8qbb.cloudfront.net/img/background-image.svg");
  background-position: 50% 50%;
  background-size: cover
}

.blog__bio_link-block {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 5px;
  padding: 4px;
  border-radius: 2px;
  background-color: #161616;
  color: #fff9f4
}

.lead-magnet {
  position: static;
  display: block;
  max-width: 731px;
  margin-right: auto;
  margin-bottom: 15px;
  margin-left: auto
}

.blog-post-author-desc-name {
  display: inline-block;
  height: auto;
  margin-right: 10px;
  margin-left: 0;
  padding-bottom: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  font-size: 18px;
  line-height: 120%;
  font-weight: 700;
  text-align: left;
  text-decoration: none
}

.blog-post-author-desc {
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 0;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 16px;
  line-height: 150%;
  text-align: left
}

.div-block-233 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 28px;
  margin-bottom: 4px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  line-height: 200%
}

.wrapper-blog-post-content {
  position: relative;
  z-index: 1999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 731px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start
}

.blog__bio-links-list {
  display: inline-block;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  -webkit-box-pack: stretch;
  -webkit-justify-content: stretch;
  -ms-flex-pack: stretch;
  justify-content: stretch;
  justify-items: start;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  line-height: 100%;
  list-style-type: none
}

.rich-text-blog {
  display: block;
  margin-bottom: 24px;
  clear: none;
  font-size: 18px;
  text-align: left
}

.blog-post-intro {
  padding-bottom: 20px;
  font-size: 22px;
  line-height: 150%;
  text-align: left;
  letter-spacing: -1px
}

.image-539 {
  display: block;
  max-width: none
}

.blog__bio_link-icon {
  display: block
}

.wrapper-text__blog-post {
  width: 100%;
  max-width: 731px
}

.list-item {
  display: block;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
  line-height: 100%
}

.blog-post-author-desc-text {
  display: block;
  width: 731px;
  margin-right: 0;
  margin-left: 0;
  padding-bottom: 0;
  padding-left: 0;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 23px;
  line-height: 170%;
  text-align: left
}

.blog-post-author-desc-content {
  display: none;
  margin-top: 45px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 45px;
  padding-bottom: 0;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-top: 2px solid #161616;
  font-size: 23px;
  line-height: 170%;
  text-align: left
}

.clipboard-2 {
  position: relative;
  width: 48px;
  height: 48px;
  padding: 12px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 50%;
  -webkit-transition: .2s;
  transition: .2s;
  cursor: pointer
}

.clipboard-2:hover {
  background-color: #000;
  color: #fff
}

.blue-bg {
  height: 100%;
  background-color: #1f2329
}

.customer-logo-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  justify-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr;
  grid-template-columns: 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto
}

.collection-item-width33 {
  margin-top: 16px
}

@media screen and (min-width: 1280px) {
  .filled-btn.no-margin-top.no-margin-right {
      position:static
  }

  .half-div {
      position: relative;
      z-index: 1
  }

  .outlined-btn.no-margin-top.no-margin-right {
      position: static
  }

  .paragraph-580px.bookdemo {
      margin-bottom: 26px
  }

  .grid-8 {
      grid-template-areas: ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . ." ". . Area"
  }

  .explore-item {
      background-color: #1c1e27
  }

  .explore-desc {
      font-size: 16px
  }

  .pagination-3 {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end
  }

  .paragraph-560px-center.bookdemo {
      margin-bottom: 26px
  }
}

@media screen and (min-width: 1440px) {
  .container-div {
      position:static;
      padding-right: 0;
      padding-left: 0;
      font-family: Inter,sans-serif;
      font-weight: 400;
      white-space: normal;
      background-clip: border-box;
      -webkit-text-fill-color: inherit;
      cursor: auto;
      -o-object-fit: fill;
      object-fit: fill
  }

  .filled-btn.no-margin-top.no-margin-right:hover {
      color: #fff
  }

  .section-bigger {
      background-color: transparent
  }

  .section-bigger.with-header {
      padding-top: 53px;
      background-color: transparent
  }

  .copyright-text {
      font-size: 12px;
      line-height: 18px
  }

  .outlined-btn.no-margin-top.no-margin-right {
      font-family: Inter,sans-serif;
      font-weight: 700
  }

  .outlined-btn.pricing-table {
      font-family: Inter,sans-serif
  }

  .page-header.relative {
      background-color: transparent
  }

  .pricing-price {
      margin-top: 9px;
      font-family: Inter,sans-serif;
      font-size: 32px;
      font-weight: 700
  }

  .pricing-price.enterprise {
      margin-top: 0;
      font-size: 21px;
      line-height: 50px;
      letter-spacing: 2px;
      text-transform: uppercase
  }

  .pricing-card-content.middle {
      padding-right: 24px;
      padding-left: 24px
  }

  .pricing-card-wrapper {
      padding-bottom: 30px;
      -webkit-align-self: stretch;
      -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch
  }

  .pricing-card {
      background-image: radial-gradient(circle farthest-corner at 100% 100%,#262a33,#1d1e22)
  }

  .pricing-card.middle {
      padding-top: 12px;
      border-style: none
  }

  .pricing-card.middle.rainbow-div {
      padding-right: 0;
      padding-left: 0;
      background-image: radial-gradient(circle farthest-corner at 100% 100%,#262a33,#1d1e22)
  }

  .toggle-text.monthly {
      font-family: Inter,sans-serif;
      color: #fff
  }

  .toggle-text.annually {
      font-family: Inter,sans-serif;
      font-weight: 500
  }

  .pricing-small-text {
      font-size: 14px
  }

  .pricing-small-text.plan-desc {
      margin-bottom: 16px;
      padding-right: 16px;
      padding-left: 16px
  }

  .toggle-btn {
      background-color: rgba(56,132,255,.69);
      background-image: linear-gradient(246deg,#384455,#1d1e22);
      box-shadow: 0 0 3px 0 #3f6fbb
  }

  .pricing-row-text {
      font-size: 14px;
      line-height: 18px
  }

  .pricing-icon {
      background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/6011b669b73749fa697fa611_check.svg")
  }

  .toggle-wrapper {
      margin-bottom: 80px
  }

  .pricing-columns.monthly {
      overflow: visible;
      padding-bottom: 0
  }

  .pricing-columns.annually {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex
  }

  .pricing-currency {
      margin-top: 16px;
      font-family: Inter,sans-serif;
      color: #3884ff
  }

  .pricing-label {
      top: -14px;
      border-radius: 20px;
      background-image: linear-gradient(172deg,#e235a8,#582497 70%,#1f3ac0);
      box-shadow: 1px 1px 3px 0 rgba(0,0,0,.43),0 0 8px 0 rgba(223,81,209,.68);
      font-family: Inter,sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 1px;
      text-shadow: 1px 1px 6px rgba(0,0,0,.16)
  }

  .pricing-table-section-title {
      font-family: Inter,sans-serif;
      font-weight: 800
  }

  .cta-block.hiring {
      background-color: transparent
  }

  .team-member-card {
      grid-auto-columns: 1fr
  }

  .team-member-avatar {
      border-radius: 5px
  }

  .team-member-job-title {
      padding-bottom: 4px
  }

  .team-member-social {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      margin-right: 0;
      margin-left: 0
  }

  .pricing-table-wrapper {
      max-width: 1280px;
      margin-right: auto;
      margin-bottom: 96px;
      margin-left: auto;
      padding-right: 48px;
      padding-left: 48px
  }

  .pricing-table-text {
      color: #cbd6ec
  }

  .paragraph-580px.left-660px {
      max-width: 630px
  }

  .div-block-5.extended {
      -webkit-box-align: start;
      -webkit-align-items: start;
      -ms-flex-align: start;
      align-items: start;
      grid-column-gap: 16px;
      -ms-grid-columns: 24px 1fr;
      grid-template-columns: 24px 1fr
  }

  .longer-grid.principles {
      max-width: 1280px;
      margin-top: 10px;
      margin-right: auto;
      margin-left: auto;
      padding-right: 48px;
      padding-left: 48px
  }

  .rainbow-div.callout {
      display: -ms-grid;
      display: grid;
      max-width: 1280px;
      margin-right: auto;
      margin-bottom: 48px;
      margin-left: auto;
      padding: 24px;
      justify-items: stretch;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      grid-auto-columns: 1fr;
      grid-column-gap: 16px;
      grid-row-gap: 16px;
      -ms-grid-columns: 48px 1fr 220px;
      grid-template-columns: 48px 1fr 220px;
      -ms-grid-rows: auto;
      grid-template-rows: auto;
      background-image: radial-gradient(circle closest-side at 100% 100%,#262a33,#1f2329);
      box-shadow: 1px 1px 12px 0 rgba(0,0,0,.28)
  }

  .rainbow-div.callout:hover {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1)
  }

  .background-gradient {
      opacity: .41
  }

  .team-social-link {
      margin-right: 24px;
      margin-left: 0
  }

  .grid-examples-home.faq-grid {
      margin-bottom: 48px;
      grid-row-gap: 32px;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .wrapper-example__home.background-dark-faq {
      background-image: radial-gradient(circle farthest-corner at 100% 100%,#343c4d,rgba(32,34,36,0))
  }

  .wrapper-example__home.background-dark-faq.faq {
      padding-top: 24px;
      padding-right: 24px;
      padding-bottom: 24px;
      background-color: #1d1e22;
      background-image: none;
      box-shadow: 1px 1px 12px 0 rgba(0,0,0,.25)
  }

  .heading-example__home.something-else.faq-header {
      font-size: 18px;
      line-height: 33px
  }

  .heading-5 {
      margin-top: 0;
      margin-bottom: 0;
      font-family: Inter,sans-serif
  }

  .paragraph-7 {
      margin-bottom: 0;
      padding-top: 9px;
      color: #cbd6ec
  }

  .column {
      -webkit-align-self: flex-start;
      -ms-flex-item-align: start;
      align-self: flex-start
  }

  .left-hero.margin-bottom {
      margin-bottom: 60px
  }

  .avatar-overlay {
      border-radius: 5px
  }

  .body-3 {
      background-color: #1f2329
  }

  .social-image {
      width: 16px;
      margin-top: 6px
  }

  .div-block-12 {
      max-width: 1280px;
      margin-right: auto;
      margin-left: auto;
      padding-right: 48px;
      padding-left: 48px
  }

  .text-block-8 {
      color: #3884ff
  }

  .wrapper-city__team {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .image-8 {
      height: 16px;
      margin-right: 8px
  }

  .huge-title {
      background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/602c4d85be8c7c55b5a20196_hero.png"),linear-gradient(175deg,#3884ff,#4ec5c9 49%,#b22588);
      background-position: 0 0,0 0;
      background-size: auto,auto;
      font-family: Inter,sans-serif;
      font-size: 150px;
      line-height: 150px;
      font-weight: 900;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent
  }

  .about-grid {
      max-width: 1280px;
      margin-top: 120px;
      margin-right: auto;
      margin-left: auto;
      padding-right: 48px;
      padding-left: 48px;
      -ms-grid-columns: 1fr 3fr;
      grid-template-columns: 1fr 3fr;
      -ms-grid-rows: auto;
      grid-template-rows: auto
  }

  .small-heading {
      margin-top: 0;
      padding-right: 24px;
      font-family: Inter,sans-serif;
      font-size: 24px;
      text-align: right
  }

  .about-para {
      color: #cbd6ec;
      font-size: 21px;
      line-height: 32px
  }

  .grid-text {
      padding-left: 40px;
      border-left: 1px solid #3884ff
  }

  .paragraph-light-blue {
      display: block;
      margin-top: 0;
      color: #cbd6ec;
      font-size: 16px
  }

  .image-9 {
      width: 30px;
      margin-top: 0
  }

  .grid-values {
      grid-row-gap: 32px
  }

  .container {
      position: static;
      padding-right: 0;
      padding-left: 0;
      font-family: Inter,sans-serif;
      font-weight: 400;
      white-space: normal;
      background-clip: border-box;
      -webkit-text-fill-color: inherit;
      cursor: auto;
      -o-object-fit: fill;
      object-fit: fill
  }

  .background-gradient-body {
      opacity: .41
  }

  .paragraph-560px-center.left-660px {
      max-width: 630px
  }

  .container1140 {
      position: static;
      padding-right: 0;
      padding-left: 0;
      font-family: Inter,sans-serif;
      font-weight: 400;
      white-space: normal;
      background-clip: border-box;
      -webkit-text-fill-color: inherit;
      cursor: auto;
      -o-object-fit: fill;
      object-fit: fill
  }
}

@media screen and (min-width: 1920px) {
  .button-subtitle {
      font-size:16px;
      line-height: 22px
  }

  .container-div.hero-flex-horizontal {
      max-width: 1650px
  }

  .filled-btn.no-margin-top {
      margin-top: 0
  }

  .hero-section.grey.relative {
      font-family: Inter,sans-serif
  }

  .hero-right {
      display: -ms-grid;
      display: grid;
      grid-auto-columns: 1fr;
      grid-column-gap: 16px;
      grid-row-gap: 16px;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      -ms-grid-rows: auto auto;
      grid-template-rows: auto auto
  }

  .project-rich-text p {
      font-size: 16px;
      line-height: 22px
  }

  .copyright-text {
      font-size: 14px;
      line-height: 22px
  }

  .muted-text,.subheading {
      font-size: 14px;
      line-height: 20px
  }

  .hero-title {
      font-size: 60px;
      line-height: 64px
  }

  .text-btn-icon {
      color: #f3f3f3
  }

  .feature-title {
      font-size: 18px
  }

  .feature-grid {
      max-width: 1650px;
      margin-top: 155px
  }

  .features-img-block {
      left: 55%
  }

  .paragraph-hero-center {
      max-width: 600px;
      font-size: 24px
  }

  .text-block-3 {
      font-family: Inter,sans-serif;
      font-weight: 600
  }

  .customer-doc {
      position: relative;
      width: 220px;
      margin-top: 0;
      margin-right: 0;
      margin-left: 0;
      padding: 0;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 1px 10px 0 rgba(0,0,0,.59);
      color: #1f2329
  }

  .customer-doc.offset-top {
      margin-top: 24px
  }

  .customer-doc.rainbow-div.first {
      padding: 9px 16px;
      background-color: #1d1e22
  }

  .customer-doc.rainbow-div.first-bg,.customer-doc.rainbow-div.fourth,.customer-doc.rainbow-div.fourth-bg,.customer-doc.rainbow-div.second,.customer-doc.rainbow-div.second-bg,.customer-doc.rainbow-div.third,.customer-doc.rainbow-div.third-bg,.customer-doc.rainbow-div.third-bg.muted {
      padding: 8px 16px;
      background-color: #1d1e22
  }

  .heading {
      font-family: Inter,sans-serif;
      font-size: 18px;
      font-weight: 700
  }

  .heading.example-heading {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 16px;
      line-height: 22px
  }

  .text-block-4 {
      color: #5b5d63;
      font-weight: 400
  }

  .div-block-2 {
      position: relative;
      background-color: #1d1e22
  }

  .div-block-3 {
      position: relative;
      padding: 16px
  }

  .div-block-4 {
      position: absolute;
      left: 50%;
      top: 31px;
      width: 50px;
      height: 50px;
      margin-top: 11px;
      margin-left: -25px;
      padding-bottom: 0;
      border: 1px #000;
      border-radius: 999px;
      background-color: #fff;
      text-align: left
  }

  .image {
      border-radius: 999px;
      box-shadow: 1px 1px 12px 0 rgba(0,0,0,.14)
  }

  .grid {
      -ms-grid-columns: 1fr 48px;
      grid-template-columns: 1fr 48px;
      -ms-grid-rows: auto;
      grid-template-rows: auto
  }

  .image-2 {
      opacity: .55
  }

  .paragraph-580px.center {
      font-size: 22px;
      line-height: 32px
  }

  .div-block-5 {
      grid-column-gap: 16px;
      -ms-grid-columns: 24px 1fr;
      grid-template-columns: 24px 1fr
  }

  .div-block-6,.feature-center {
      max-width: 1650px
  }

  .background-video {
      max-width: 1650px;
      min-height: 860px
  }

  .grid-5 {
      color: #fff
  }

  .container.hero-flex-horizontal {
      max-width: 1650px
  }

  .paragraph-560px-center.center {
      font-size: 22px;
      line-height: 32px
  }

  .container1140.hero-flex-horizontal {
      max-width: 1650px
  }

  .paragraph-hero-left {
      max-width: 600px;
      font-size: 24px
  }
}

@media screen and (max-width: 991px) {
  .container-div.hero-flex-horizontal {
      -webkit-box-orient:vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch
  }

  .heading-block {
      margin-bottom: 16px
  }

  .style-guide-block-title {
      padding-right: 88px;
      padding-left: 88px
  }

  .color-block-wrapper {
      width: 25%;
      margin-right: 20px;
      margin-left: 20px
  }

  .buttons-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .style-guide-title {
      font-size: 22px;
      line-height: 30px
  }

  .style-guide-block-wrapper {
      margin-bottom: 64px
  }

  .style-guide-block {
      padding: 64px 88px
  }

  .color-title {
      font-size: 12px
  }

  .colors-wrapper {
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end
  }

  .section-bigger {
      padding-top: 96px;
      padding-bottom: 96px
  }

  .section-bigger.medium {
      padding-top: 64px;
      padding-bottom: 64px
  }

  .section-bigger.with-header {
      padding-top: 80px
  }

  .section-bigger.video-bg {
      min-height: 400px;
      padding-top: 160px;
      padding-bottom: 160px
  }

  .section-bigger.about-video-bg {
      min-height: 400px
  }

  .button-block-wrapper {
      width: 100%;
      margin-right: 8px;
      margin-bottom: 24px;
      margin-left: 8px
  }

  .hero-section {
      padding-top: 160px
  }

  .nav-link-wrap {
      width: 100%;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 0
  }

  .nav-link-wrap.w--current {
      padding-left: 0
  }

  .nav-link-wrap.dropdown {
      position: relative;
      display: block;
      padding-bottom: 0;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch
  }

  .nav-link-wrap.nonauth {
      margin-top: 8px
  }

  .menu-button {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      background-color: transparent
  }

  .nav-menu {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      overflow: auto;
      width: 100vw;
      max-height: 100vh;
      padding: 0 32px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      background-color: #20222b
  }

  .hero-left {
      width: 100%;
      margin-bottom: 64px;
      padding-right: 0;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center
  }

  .hero-right {
      width: 100%
  }

  .hero-right.first-on-mobile {
      margin-bottom: 48px;
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1
  }

  .nav-links-wrapper {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch
  }

  .half-div.sticky-on-tablet {
      position: -webkit-sticky;
      position: sticky;
      top: 32px
  }

  .half-div.full-width-on-mobile {
      width: 100%;
      padding-right: 0
  }

  .featured-work-link-block.featured-projects {
      min-height: 40vh
  }

  .nav-menu-content {
      margin-top: 56px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start
  }

  .nav-btn-wrapper {
      margin-top: 16px;
      margin-left: 0
  }

  .close-overlay-button {
      top: -40px;
      right: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      padding: 20px;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      line-height: 22px
  }

  .nav-link-wrap-2 {
      float: left
  }

  .burger-icon {
      height: 16px
  }

  .logo {
      height: 24px
  }

  .page-title {
      font-size: 42px;
      line-height: 48px
  }

  .style-guide-title-2 {
      font-size: 22px;
      line-height: 30px
  }

  .subheading {
      font-size: 16px;
      line-height: 22px
  }

  .outlined-btn.no-margin-top.no-margin-right {
      font-size: 14px
  }

  .filled-btn-arrow {
      max-width: 200px;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between
  }

  .filled-btn-arrow.no-margin-top {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between
  }

  .filled-btn-arrow.no-margin-top.hero-button.no-max-width {
      max-width: none
  }

  .filled-btn-arrow.no-margin-top.authonly.margin-bottom,.filled-btn-arrow.no-margin-top.nonauth.margin-bottom {
      margin-bottom: 16px
  }

  .page-header {
      padding-top: 96px;
      padding-bottom: 64px
  }

  .section-title {
      max-width: 75%;
      font-size: 36px;
      line-height: 42px
  }

  .section-title.in-half-div {
      font-size: 48px;
      line-height: 48px
  }

  .section-subtitle {
      font-size: 22px;
      line-height: 28px;
      text-align: center
  }

  .components-header {
      margin-bottom: 24px
  }

  .hero-top {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      margin-bottom: 64px;
      padding-right: 0;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .hero-bottom {
      width: 100%
  }

  .features-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      -ms-grid-rows: auto auto auto;
      grid-template-rows: auto auto auto
  }

  .feature-grid {
      padding-top: 64px;
      padding-bottom: 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -webkit-flex-direction: column-reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
      grid-auto-columns: 1fr;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .feature-grid.feature {
      grid-auto-columns: 1fr;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto;
      grid-template-rows: auto
  }

  .feature-grid.feature.margin-top {
      margin-top: 48px
  }

  .feature-title-large {
      margin-left: 0
  }

  .feature-title-large.left {
      font-size: 2.5rem
  }

  .features-text-block {
      width: 100%;
      margin-top: 18px;
      padding-right: 0;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center
  }

  .features-text-block.left {
      margin-bottom: 0;
      padding-right: 0
  }

  .features-text-block.right {
      margin-bottom: 0;
      padding-left: 0
  }

  .features-img-block {
      position: static;
      min-height: auto
  }

  .features-img-block.left50 {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1
  }

  .metric-block.stack-row {
      margin-top: 0
  }

  .metrics {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      -ms-grid-rows: auto auto auto;
      grid-template-rows: auto auto auto
  }

  .half-section-flex.center-horizontal.flex-vertical-on-mobile {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .metric-row.horizontal {
      margin-top: 16px;
      margin-bottom: 16px
  }

  .close-menu-icon {
      margin-left: 4px
  }

  .testimonial-bg-img {
      position: absolute;
      width: auto;
      height: 70vw
  }

  .testimonial-card {
      min-height: 224px
  }

  .testimonial-avatar-block {
      margin-bottom: 16px
  }

  .testimonial-avatar {
      width: 56px;
      height: 56px;
      margin-right: 10px
  }

  .testimonial-name {
      font-size: 16px;
      line-height: 22px
  }

  .testimonial-name-subline {
      font-size: 14px;
      line-height: 20px
  }

  .testimonial-stars {
      margin-bottom: 10px
  }

  .testimonial-slider {
      max-width: 100%;
      margin-left: 0;
      background-position: 104% 12%;
      background-size: 15%
  }

  .testimonial-paragraph.min-height {
      min-height: 96px
  }

  .rating-icons {
      width: 20px;
      height: 20px
  }

  .component-section {
      padding-top: 96px;
      padding-bottom: 96px
  }

  .testimonial-slider-v2 {
      max-width: 100%;
      margin-left: 0;
      padding-top: 0;
      padding-right: 0;
      padding-left: 0;
      background-image: none
  }

  .testimonial-card-wrap {
      width: 50%
  }

  .testimonial-name-subline-v2 {
      font-size: 14px;
      line-height: 20px
  }

  .pricing-price {
      font-size: 44px;
      line-height: 50px
  }

  .pricing-card-content {
      padding-right: 24px;
      padding-left: 24px
  }

  .pricing-card-content.middle {
      padding-right: 20px;
      padding-left: 20px
  }

  .pricing-card-header.table.middle {
      background-color: transparent
  }

  .pricing-card-wrapper {
      padding-right: 8px;
      padding-left: 8px
  }

  .pricing-title {
      font-size: 20px;
      line-height: 24px
  }

  .toggle-bg.pricing {
      margin-top: 24px
  }

  .pricing-row-text.title {
      font-size: 16px;
      font-weight: 500
  }

  .pricing-icon {
      width: 12px;
      height: 12px;
      margin-right: 12px;
      background-size: 12px
  }

  .pricing-icon.not-included {
      background-size: 10px
  }

  .toggle-wrapper.table {
      width: 100%;
      border-radius: 16px
  }

  .pricing-card-row {
      border-bottom-style: none
  }

  .pricing-card-row.last {
      margin-bottom: 0
  }

  .pricing-card-row.mobile-center {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center
  }

  .pricing-columns {
      margin-top: 72px;
      padding-right: 0;
      padding-left: 0
  }

  .pricing-currency {
      font-size: 16px;
      line-height: 22px
  }

  .pricing-wrapper-v2 {
      padding-left: 16px
  }

  .one-third-div {
      padding-right: 0
  }

  .one-third-div.no-padding-right.full-width-mobile {
      width: 100%
  }

  .one-third-div.on-intro-page {
      width: 100%;
      margin-top: 0
  }

  .pricing-table-content {
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid hsla(0,0%,100%,.08)
  }

  .pricing-table-section-title {
      padding-left: 0
  }

  .highlighted-pricing-table-row {
      left: 33.334%;
      display: none;
      width: 33.334%
  }

  .video-bg-img {
      position: absolute;
      width: auto;
      height: 70vw
  }

  .promo-video-wrapper {
      min-height: 480px;
      margin-top: 80px
  }

  .blog-post-listing-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      -ms-grid-rows: auto auto auto;
      grid-template-rows: auto auto auto
  }

  .blog-post-listing-content {
      min-height: 280px
  }

  .blog-listing-title.in-sidebar {
      font-size: 18px;
      line-height: 24px
  }

  .btn-container.center {
      margin-top: 40px
  }

  .blog-post-img {
      min-height: 280px;
      -o-object-fit: cover;
      object-fit: cover
  }

  .blog-post-img.v2 {
      min-height: 440px
  }

  .blog-listing-grid-v2,.blog-post-listing-grid-v2 {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto;
      grid-template-rows: auto auto
  }

  .blog-post-listing-content-v2 {
      min-height: 440px
  }

  .blog-list-half-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .blog-list-half-collection {
      width: 100%;
      margin-top: 48px
  }

  .cta-block.v2 {
      padding: 56px
  }

  .cta-title {
      max-width: 100%;
      font-size: 42px;
      line-height: 48px
  }

  .cta-img {
      max-width: 66.6667%
  }

  .cta-img.v2 {
      max-width: 50%
  }

  .integration-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      -ms-grid-rows: auto auto auto;
      grid-template-rows: auto auto auto
  }

  .hiring-label {
      font-size: 12px;
      line-height: 18px
  }

  .page-header-title {
      font-size: 42px;
      line-height: 48px
  }

  .page-header-flex-wrap {
      max-width: 66.6667%
  }

  .container-small.show-overflow.full-width-on-mobile {
      max-width: 100%
  }

  .blog-post-recommended-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      -ms-grid-rows: auto;
      grid-template-rows: auto
  }

  .page-header-img-container {
      max-height: 360px;
      border-radius: 20px
  }

  .team-member-card {
      -ms-grid-columns: 45px 1fr;
      grid-template-columns: 45px 1fr
  }

  .team-members-flex-wrap {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .team-member-job-title {
      margin-bottom: 8px
  }

  .about-quote-avatar {
      width: 64px;
      height: 64px
  }

  .about-quote {
      font-size: 22px;
      line-height: 28px
  }

  .about-quote-author-title {
      font-size: 16px;
      line-height: 22px
  }

  .about-quote-author-title.mute {
      font-size: 14px;
      line-height: 20px
  }

  .companies-flex-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .companies-grid,.companies-half-grid {
      width: 100%;
      margin-top: 48px;
      padding-left: 0
  }

  .cta-paragraph {
      max-width: 66.667%
  }

  .utility-page-form.card {
      min-width: 50%
  }

  .utility-logo {
      margin-bottom: 64px
  }

  .utility-card-title {
      font-size: 34px;
      line-height: 40px
  }

  .coming-soon-page-content {
      max-width: 75%
  }

  .coming-soon-title {
      font-size: 42px;
      line-height: 48px
  }

  .dropdown-link {
      padding-top: 16px;
      padding-bottom: 16px
  }

  .dropdown-link:hover {
      background-color: #20222b
  }

  .dropdown-link.navbar-link {
      padding-left: 0
  }

  .custom-dropdown-list {
      position: static;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      max-width: none;
      min-width: auto;
      background-color: #1d1e22;
      box-shadow: none
  }

  .dropdown-flex {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      padding-bottom: 16px;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .cookie-bar {
      right: 0;
      width: auto;
      max-width: none
  }

  .contact-info-block {
      padding: 16px
  }

  .contact-info-content {
      padding-right: 12px;
      padding-left: 12px
  }

  .contact-info-text {
      font-size: 12px;
      line-height: 18px
  }

  .blog-post-by-author {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      -ms-grid-rows: auto;
      grid-template-rows: auto
  }

  .blog-post-listing-content-by-author {
      min-height: 440px
  }

  .integration-title-flex {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
  }

  .integration-icon {
      width: 64px;
      height: 64px;
      margin-bottom: 16px
  }

  .blog-list-page-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto;
      grid-template-rows: auto auto
  }

  .blog-list-page-right {
      position: static;
      margin-top: 48px
  }

  .footer-top-block {
      -webkit-align-self: stretch;
      -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch
  }

  .footer-grid {
      display: block
  }

  .footer-title {
      margin-top: 32px
  }

  .intro-hero-section {
      padding-top: 96px;
      padding-bottom: 96px
  }

  .perspective-wrapper {
      background-image: url("https://assets-global.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f048d0772ddb_intro%20mobile%20bg.jpg");
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat
  }

  .perspective-block {
      right: -100%;
      display: none;
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      transform: rotate(0)
  }

  .website-placeholder.offset {
      box-shadow: none
  }

  .pricing-table-wrapper {
      overflow: visible
  }

  .pricing-table-header {
      top: 56px;
      z-index: 2;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      background-color: #1d1e22
  }

  .pricing-table-header-cols {
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px
  }

  .pricing-table-category-title {
      background-color: #20222b;
      text-align: center
  }

  .pricing-table-row {
      margin-bottom: 24px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch
  }

  .pricing-table-row-title {
      width: 100%;
      background-color: hsla(0,0%,100%,.01)
  }

  .pricing-table-footer {
      position: -webkit-sticky;
      position: sticky;
      top: 24px;
      z-index: 2;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
      background-color: #1d1e22
  }

  .footer-empty-cell {
      display: none
  }

  .legal-title {
      font-size: 22px;
      line-height: 30px
  }

  .paragraph-hero-center.center {
      max-width: 430px;
      font-size: 16px;
      line-height: 24px
  }

  .image-feature-home {
      display: block;
      width: 100%;
      margin-right: auto;
      margin-left: auto
  }

  .paragraph-580px {
      margin-left: 0
  }

  .feature-wrapper {
      margin-top: 2px;
      margin-bottom: 0
  }

  .grid-examples-home,.longer-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .price-cards {
      margin-top: 0;
      grid-column-gap: 24px;
      grid-row-gap: 24px;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .plan-card {
      border-radius: 4px
  }

  .plan-card.rainbow-div {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 0
  }

  .plan-card.rainbow-div:hover {
      -webkit-transform: none;
      -ms-transform: none;
      transform: none
  }

  .grid-9 {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .left-hero {
      padding-left: 0;
      -webkit-align-self: flex-start;
      -ms-flex-item-align: start;
      align-self: flex-start
  }

  .grid-companies {
      padding-right: 0;
      padding-left: 0;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .collection-list__powered-by {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .avatar {
      width: 60px;
      height: 60px
  }

  .avatar-overlay {
      display: none
  }

  .container710 {
      padding-right: 20px;
      padding-left: 20px
  }

  .image-10 {
      width: 100%
  }

  .grid-2-col {
      display: block
  }

  .split-heading {
      text-align: left
  }

  .form-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .collection-list__jobs {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .wrapper-video-home {
      min-height: 540px
  }

  .background-video-home {
      min-height: 490px
  }

  .div-block-17 {
      padding-right: 0;
      padding-left: 0
  }

  .div-block-18.offset {
      display: none
  }

  .wrapper-categories__powered-by {
      position: static
  }

  .grid-logos-customers {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .grid-logos-customers._3-col {
      -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr
  }

  .grid-values {
      padding-right: 0;
      padding-left: 0
  }

  .colourful-callout.bottom {
      padding: 24px
  }

  .colourful-callout.colourful-callout-compact {
      margin-top: 30px
  }

  .container.hero-flex-horizontal {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch
  }

  .section.padding-top {
      padding-top: 80px;
      padding-bottom: 0
  }

  .section.padding120top {
      padding-top: 60px
  }

  .section.padding120top.mobile-padding {
      padding-bottom: 40px
  }

  .section.padding120bottom {
      padding-top: 60px
  }

  .section.padding120 {
      padding-top: 60px;
      padding-bottom: 60px
  }

  .section.padding120.margin-top {
      margin-top: 48px
  }

  .section.mobile {
      padding-top: 40px;
      padding-bottom: 40px
  }

  .section.mobile-hidden {
      display: none
  }

  .grid-webinar-form {
      padding-right: 0;
      grid-auto-flow: row;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .grid-webinar {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .wrapper-heading__pricing {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .paragraph-560px-center {
      max-width: none;
      margin-left: 0
  }

  .wrapper-60,.wrapper-90--desktop {
      width: auto
  }

  .grid-contact {
      grid-auto-flow: row
  }

  .wrapper-list {
      margin-bottom: 30px
  }

  .collection-list__categories {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .wrapper-content__user-stories {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .image__user-stories {
      width: 100%;
      max-height: 300px;
      -o-object-position: 50% 50%;
      object-position: 50% 50%
  }

  .wrapper-text__user-stories {
      padding-top: 30px
  }

  .heading-card__user-stories {
      font-size: 24px;
      line-height: 1.3em
  }

  .container1140.hero-flex-horizontal {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch
  }

  .grid-customers__user-stories {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .small-card__customer-stories {
      margin-top: 100px
  }

  .customer-logo__home {
      grid-auto-flow: row;
      -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr
  }

  .logo-home {
      height: 30px
  }

  .wrapper-content-customers__home {
      margin-bottom: 20px
  }

  .tab-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto;
      grid-template-rows: auto auto
  }

  .tabs-content {
      width: auto;
      padding-left: 20px
  }

  .tabs-menu {
      width: auto
  }

  .load-bar-base {
      margin-right: 20px;
      margin-left: 20px
  }

  .standard-tab {
      padding-right: 20px;
      padding-left: 20px
  }

  .content-block {
      padding: 20px 10px
  }

  .colourful-callout-bg.bottom {
      padding-top: 24px;
      padding-right: 24px;
      padding-left: 24px
  }

  .colourful-callout-bg.colourful-callout-compact {
      margin-top: 30px
  }

  .wrapper-content-post__blog.feature {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .image-feature__blog {
      max-height: 300px
  }

  .grid-blog-post__blog,.grid-changelog {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .wrapper-text-customers__home {
      margin-bottom: 40px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start
  }

  .wrapper-btn-customer__home {
      margin-right: 0
  }

  .faq-question-wrap {
      padding-right: 20px;
      padding-left: 20px
  }

  .grid-features__home {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .feature__home {
      padding: 36px
  }

  .paragraph-hero-left.center {
      max-width: 430px;
      font-size: 16px;
      line-height: 24px
  }

  .tabs__uses-cases {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .grid-hero__feature {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .image-hero__feature {
      display: none
  }

  .dropdown.margin-bottom-navbar-mobile {
      margin-bottom: 16px
  }

  .wrapper-dropdown-list._2-col {
      padding: 0;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      background-color: transparent
  }

  .wrapper-dropdown-list.navbar-wrapper {
      padding-left: 0;
      background-color: transparent
  }

  .text-dropdown__nav-bar {
      padding-right: 0;
      padding-left: 0;
      font-weight: 500
  }

  .divider-nav-bar {
      margin-right: 32px;
      margin-left: 32px
  }

  .wrapper-dropdown__nav-bar,.wrapper-dropdown__nav-bar.last {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1
  }

  .nav-link-wrap-dropdown {
      width: 100%;
      padding-top: 16px;
      padding-bottom: 16px;
      padding-left: 0
  }

  .nav-link-wrap-dropdown.w--open {
      padding-left: 0
  }

  .nav-link-wrap-dropdown.dropdown {
      position: relative;
      display: block;
      padding-bottom: 0;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch
  }

  .wrapper-dropdown-list-bg._2-col {
      position: static
  }

  .wrapper-dropdown-list-bg._2-col.w--open {
      left: 0;
      padding: 0;
      background-image: none;
      background-size: auto
  }

  .block-feature {
      display: none
  }

  .image-feature__home {
      width: 80px
  }

  .collection-item-simple-border.user-stories {
      max-height: none
  }

  .wrapper-social-sharing {
      position: -webkit-sticky;
      position: sticky;
      top: 120px;
      margin-right: 32px;
      margin-left: 0
  }

  .lead-magnet {
      max-width: 100%
  }

  .blog-post-author-desc,.blog-post-author-desc-name {
      width: auto
  }

  .wrapper-blog-post-content {
      max-width: none;
      padding-right: 20px;
      padding-left: 20px
  }

  .rich-text-blog {
      padding-left: 0
  }

  .blog-post-intro {
      width: auto
  }

  .wrapper-text__blog-post {
      max-width: none
  }

  .blog-post-author-desc-content,.blog-post-author-desc-text {
      width: auto
  }

  .customer-logo-flex {
      grid-auto-flow: row;
      -ms-grid-columns: 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr
  }
}

@media screen and (max-width: 767px) {
  h1 {
      font-size:2.75rem
  }

  h2 {
      font-size: 2.5rem
  }

  h3 {
      font-size: 2rem
  }

  h4 {
      font-size: 1.5rem
  }

  h5 {
      font-size: 1.25rem
  }

  h6 {
      font-size: 1.2rem
  }

  .container-div {
      padding-right: 0;
      padding-left: 0
  }

  .style-guide-block-title {
      padding: 16px 72px
  }

  .color-block-wrapper {
      width: 100%;
      margin: 16px 0
  }

  .buttons-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .filled-btn.pricing-table {
      padding: 8px 16px;
      font-size: 14px;
      line-height: 20px
  }

  .style-guide-title {
      font-size: 18px;
      line-height: 24px
  }

  .style-guide-block-wrapper {
      margin-bottom: 48px
  }

  .style-guide-block {
      padding: 48px 72px
  }

  .colors-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .section-bigger {
      padding-top: 72px;
      padding-bottom: 72px
  }

  .section-bigger.medium {
      padding-top: 48px;
      padding-bottom: 48px
  }

  .section-bigger.with-header {
      padding-top: 56px
  }

  .button-block-wrapper {
      width: 100%;
      margin-bottom: 32px
  }

  .hero-section {
      padding-top: 120px;
      padding-bottom: 96px;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .nav-link-wrap {
      padding-top: 16px;
      padding-bottom: 16px
  }

  .brand {
      padding-left: 0
  }

  .nav-menu {
      background-color: #1c1e27
  }

  .half-div {
      width: 100%;
      margin-bottom: 48px;
      padding-right: 0
  }

  .half-div.sticky-on-tablet {
      position: static
  }

  .project-rich-text p {
      font-size: 12px;
      line-height: 18px;
      letter-spacing: .2px
  }

  .footer {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .copyright-text {
      margin-bottom: 8px
  }

  .utility-title {
      font-size: 26px;
      line-height: 32px
  }

  .page-title {
      font-size: 36px;
      line-height: 42px
  }

  .page-title.section-header.on-integration-page {
      margin-right: 0;
      margin-bottom: 0
  }

  .page-title.section-header.on-blog-list-page {
      margin-top: 16px;
      margin-right: 0;
      margin-bottom: 0
  }

  .style-guide-title-2 {
      font-size: 18px;
      line-height: 24px
  }

  .changelog-text-container {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .outlined-btn.pricing-table {
      padding: 8px 16px;
      font-size: 14px;
      line-height: 20px
  }

  .page-header {
      padding-top: 72px;
      padding-bottom: 48px
  }

  .page-header.relative {
      padding-top: 96px
  }

  .section-title {
      max-width: 100%
  }

  .section-title.in-half-div {
      font-size: 42px;
      line-height: 48px
  }

  .section-subtitle {
      font-size: 20px;
      line-height: 26px
  }

  .components-header {
      margin-bottom: 16px
  }

  .hero-title {
      max-width: 100%;
      font-size: 54px;
      line-height: 60px
  }

  .hero-btn-container {
      margin-top: 40px;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row
  }

  .inline-form.flex-vertical-mobile {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch
  }

  .submit-btn.no-margin-top.full-width-mobile {
      margin-right: 0;
      margin-left: 0
  }

  .feature-grid {
      padding-top: 0;
      padding-bottom: 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .feature-title-large.center.cta-bottom {
      font-size: 1.8rem
  }

  .features-text-block.left {
      padding-right: 0
  }

  .features-text-block.right {
      padding-left: 0;
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1
  }

  .feature-tabs {
      border-left: 6px solid #20222b;
      border-top-style: none
  }

  .feature-tabs.w--current {
      border-left-color: #3884ff
  }

  .feature-nav-tabs-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .tab-progress-bar {
      display: none
  }

  .tab-image {
      max-width: 100%
  }

  .metric-block {
      margin-right: 0;
      margin-bottom: 24px;
      margin-left: 0
  }

  .metrics {
      width: 100%
  }

  .half-section-flex {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .metric-row {
      width: 100%;
      margin-right: 0;
      margin-left: 0
  }

  .metric-row.horizontal {
      margin-top: 0;
      margin-bottom: 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .testimonial-bg-img {
      height: 99vw
  }

  .testimonial-slider {
      background-size: 18%
  }

  .testimonial-paragraph.min-height {
      min-height: auto
  }

  .component-section {
      padding-top: 72px;
      padding-bottom: 72px
  }

  .testimonial-slider-v2 {
      padding-bottom: 48px;
      background-image: none
  }

  .testimonial-card-wrap {
      width: 100%
  }

  .pricing-price.v2 {
      font-size: 32px;
      line-height: 38px
  }

  .pricing-card-content {
      padding-right: 40px;
      padding-left: 40px
  }

  .pricing-card-content.middle {
      padding-right: 36px;
      padding-left: 36px
  }

  .pricing-card-header {
      z-index: 0;
      padding-top: 40px;
      padding-bottom: 40px
  }

  .pricing-card-wrapper {
      padding-right: 10%;
      padding-left: 10%
  }

  .pricing-title {
      margin-bottom: 16px
  }

  .pricing-card {
      margin-top: 48px;
      margin-bottom: 0
  }

  .pricing-card.middle {
      margin-top: 48px
  }

  .toggle-bg.v2 {
      margin-right: 24px;
      margin-left: 24px
  }

  .pricing-card-btn-container.table {
      padding-top: 24px;
      padding-bottom: 24px
  }

  .pricing-icon {
      width: 16px;
      height: 16px;
      margin-right: 16px;
      background-size: 16px
  }

  .toggle-wrapper {
      position: -webkit-sticky;
      position: sticky;
      top: 56px;
      z-index: 2;
      margin-top: 8px;
      margin-right: -24px;
      margin-left: -24px;
      padding-top: 24px;
      padding-bottom: 24px;
      background-color: #1f2329
  }

  .toggle-wrapper.v2 {
      position: -webkit-sticky;
      position: sticky;
      top: 56px;
      display: none;
      margin-top: 0;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center
  }

  .toggle-wrapper.v2.mobile {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100vw;
      margin-bottom: 48px
  }

  .pricing-columns {
      margin-top: 48px;
      margin-bottom: 60px
  }

  .pricing-currency.v2 {
      font-size: 14px;
      line-height: 20px
  }

  .pricing-label.table {
      top: 0
  }

  .pricing-wrapper-v2 {
      width: 100%;
      padding-left: 0
  }

  .one-third-div {
      width: 100%;
      margin-bottom: 0;
      padding-right: 0
  }

  .pricing-v2-flex {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .video-play-btn {
      width: 64px;
      height: 64px
  }

  .video-play-icon {
      width: 18px
  }

  .video-bg-circle {
      left: -10px;
      top: -10px;
      right: -10px;
      bottom: -10px
  }

  .video-bg-img {
      height: 99vw
  }

  .promo-video-wrapper {
      min-height: 360px
  }

  .video-feature-col {
      padding-bottom: 32px
  }

  .faq-wrapper {
      width: 100%
  }

  .faq-dropdown-toggle.full-width {
      padding: 12px
  }

  .faq-flex-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .faq-title.large {
      font-size: 16px;
      line-height: 22px
  }

  .blog-listing-grid {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .blog-post-listing-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto auto auto auto auto;
      grid-template-rows: auto auto auto auto auto auto
  }

  .blog-category-label.on-blog-page,.blog-date-and-author-block.on-blog-page,.blog-date-and-author-block.on-job-listing-page {
      font-size: 14px;
      line-height: 20px
  }

  .blog-date-and-author-text.on-blog-page {
      margin-right: 4px
  }

  .blog-post-img.v2 {
      min-height: 320px
  }

  .blog-listing-grid-v2 {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .blog-post-listing-grid-v2 {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto auto;
      grid-template-rows: auto auto auto
  }

  .blog-post-listing-content-v2 {
      min-height: 320px
  }

  .blog-list-half-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .cta-block {
      padding: 48px;
      border-radius: 16px
  }

  .cta-block.v3 {
      padding-top: 48px
  }

  .cta-block.v2 {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .cta-title {
      max-width: 100%;
      font-size: 36px;
      line-height: 42px
  }

  .cta-img,.cta-img.v2 {
      max-width: 100%
  }

  .faq-full-width-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .integration-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto auto auto auto auto;
      grid-template-rows: auto auto auto auto auto auto
  }

  .page-header-title {
      font-size: 36px;
      line-height: 42px
  }

  .container-small,.page-header-flex-wrap {
      max-width: 100%
  }

  .blog-post-recommended-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto;
      grid-template-rows: auto auto
  }

  .page-header-img-container {
      max-width: 100%;
      border-radius: 16px
  }

  .team-member-card {
      grid-auto-columns: 1fr;
      grid-column-gap: 16px;
      grid-row-gap: 32px;
      -ms-grid-columns: 45px 1fr;
      grid-template-columns: 45px 1fr;
      -ms-grid-rows: auto;
      grid-template-rows: auto
  }

  .team-members-flex-wrap {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .team-member-title {
      font-size: 22px;
      line-height: 28px
  }

  .team-member-job-title {
      font-size: 14px;
      line-height: 20px
  }

  .team-member-social-block {
      margin-top: 32px
  }

  .team-member-social {
      width: 40px;
      height: 40px
  }

  .team-member-social.fb,.team-member-social.insta,.team-member-social.twitter {
      background-size: 16px
  }

  .companies-flex-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .companies-grid,.companies-half-grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      -ms-grid-rows: auto auto auto;
      grid-template-rows: auto auto auto
  }

  .job-listing-card {
      padding: 32px
  }

  .job-listing-title {
      font-size: 24px;
      line-height: 30px
  }

  .cta-paragraph {
      max-width: 100%
  }

  .utility-page-form.card {
      min-width: 80%
  }

  .utility-logo {
      height: 32px;
      margin-bottom: 48px
  }

  .utility-card-title {
      font-size: 32px;
      line-height: 38px
  }

  .text-field-flex-wrap {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .text-field-spacer {
      display: none
  }

  .lottie-success {
      width: 80px
  }

  .coming-soon-title {
      font-size: 36px;
      line-height: 42px
  }

  .contact-form {
      margin-top: 32px;
      padding: 24px
  }

  .contact-info-flex-wrap {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .contact-info-block {
      border-radius: 16px
  }

  .contact-info-content {
      padding: 12px 0
  }

  .contact-info-content.center {
      border-right-style: none;
      border-left-style: none
  }

  .blog-post-by-author {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto;
      grid-template-rows: auto auto
  }

  .blog-post-listing-content-by-author {
      min-height: 320px
  }

  .integration-title-flex {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center
  }

  .blog-list-page-right,.integration-icon {
      margin-top: 24px
  }

  .social-block-link {
      width: 40px;
      height: 40px
  }

  .social-block-link.fb,.social-block-link.insta,.social-block-link.twitter {
      background-size: 16px
  }

  .footer-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto auto auto;
      grid-template-rows: auto auto auto auto
  }

  .footer-link {
      -webkit-transition: color .3s;
      transition: color .3s
  }

  .footer-link:hover {
      color: #fff
  }

  .intro-list {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .intro-hero-section {
      padding-top: 72px;
      padding-bottom: 72px
  }

  .license-wrap {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .license-left-block {
      position: static;
      width: 100%;
      margin-bottom: 24px
  }

  .license-right-block {
      width: 100%
  }

  .pricing-table-text {
      font-size: 12px;
      line-height: 18px
  }

  .legal-title {
      font-size: 18px;
      line-height: 24px
  }

  .paragraph-580px.left-660px {
      font-size: 16px;
      line-height: 24px
  }

  .grid-examples-home,.grid-examples-home.faq-grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .heading-example__home.something-else.faq-header {
      font-size: 16px
  }

  .paragraph-example__home.something-else {
      padding-right: 24px
  }

  .price-cards {
      grid-row-gap: 36px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .plan-card.rainbow-div {
      margin-left: 0
  }

  .plan-card.rainbow-div:hover {
      -webkit-transform: none;
      -ms-transform: none;
      transform: none
  }

  .plan-card.business {
      margin-right: 0
  }

  .plan-card.last {
      margin-left: 0
  }

  .plan-card.first {
      margin-right: 0
  }

  .left-hero {
      padding-left: 0
  }

  .left-hero.margin-bottom {
      margin-bottom: 40px
  }

  .grid-companies {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .explore-item {
      display: block
  }

  .background-color__hero-home {
      padding-top: 80px;
      padding-bottom: 120px
  }

  .split-heading {
      position: static
  }

  .form {
      padding: 32px
  }

  .collection-list__jobs {
      display: block
  }

  .collection-item__jobs {
      margin-bottom: 32px
  }

  .grid-logos-customers {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .paragraph-grid {
      font-size: 1.05rem
  }

  .grid-values {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .callout-content {
      display: block
  }

  .callout-content.bottom {
      padding-top: 24px;
      padding-bottom: 24px
  }

  .callout-text {
      padding-bottom: 24px
  }

  .image-example__home {
      height: 80px
  }

  .container {
      padding-right: 20px;
      padding-left: 20px
  }

  .section.padding-top {
      padding-top: 60px
  }

  .section.padding-top.margin-top {
      margin-top: 48px
  }

  .section.padding120top {
      padding-top: 60px
  }

  .section.padding120bottom {
      padding-top: 60px;
      padding-bottom: 60px
  }

  .section.padding120 {
      padding-top: 60px
  }

  .text-name__webinar,.text-position__webinar {
      font-size: 16px
  }

  .heading-webinar {
      margin-bottom: 0
  }

  .wrapper-heading__pricing {
      margin-bottom: 24px
  }

  .paragraph-560px-center.center {
      display: none
  }

  .paragraph-560px-center.left-660px {
      font-size: 14px;
      line-height: 21px
  }

  .rich-text__grid-2-col p {
      font-size: 1.05rem
  }

  .rich-text__grid-2-col h2 {
      font-size: 1.8rem
  }

  .collection-list__categories {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .heading-card__user-stories {
      font-size: 22px
  }

  .text-testimonial__user-stories {
      padding: 16px
  }

  .container1140 {
      padding-right: 20px;
      padding-left: 20px
  }

  .grid-customers__user-stories {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .tabs-content {
      padding-right: 0;
      padding-left: 0
  }

  .tabs-menu {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
  }

  .load-bar-base {
      max-width: none;
      margin-right: 0;
      margin-left: 0
  }

  .standard-tab {
      padding-right: 0;
      padding-left: 0;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start
  }

  .wrapper-text-feature__blog {
      margin-top: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      padding-left: 20px
  }

  .image-blog-post__blog {
      max-height: 240px
  }

  .heading-blog-post__blog {
      font-size: 1.4rem
  }

  .heading__blog-post {
      font-size: 2rem
  }

  .grid-changelog {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .heading-item__changelog {
      font-size: 1.6rem
  }

  .summary-item__changelog {
      font-size: 15px
  }

  .image-item__changelog {
      display: none
  }

  .grid-features__home {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .faq-plus-wrap {
      width: 24px;
      height: 24px;
      min-height: 24px;
      min-width: 24px
  }

  .faq-plus-l {
      height: 12px
  }

  .faq-plus {
      width: 12px
  }

  .faq-question.bigger {
      height: 90px
  }

  .faq-answer-text {
      font-size: 1rem
  }

  .faq-answer {
      padding-left: 0
  }

  .wrapper-faq__pricing {
      margin-top: 48px
  }

  .callout-content-2 {
      display: block
  }

  .callout-text-2 {
      padding-bottom: 24px
  }

  .wrapper-dropdown-list._2-col {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .divider-nav-bar {
      display: none
  }

  .wrapper-dropdown__nav-bar.last {
      margin-top: 16px
  }

  .nav-link-wrap-dropdown {
      padding-top: 16px;
      padding-bottom: 16px
  }

  .wrapper-social-sharing {
      position: static;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      width: 100%;
      margin-top: 45px;
      margin-right: 0;
      padding-top: 0;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1
  }

  .wrapper-icons__social-sharing {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex
  }

  .share-button {
      margin-right: 12px
  }

  .wrapper-blog-post-content {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .blog-post-intro {
      font-size: 20px
  }

  .image-539 {
      max-width: 100%
  }

  .blog-post-author-desc-content {
      display: none;
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1
  }

  .blog-post-author-desc-content.mobile {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex
  }

  .customer-logo-flex {
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      justify-content: space-around
  }

  .collection-item-width33 {
      width: 33%
  }
}

@media screen and (max-width: 479px) {
  h1 {
      font-size:2.5rem
  }

  h2 {
      font-size: 2.25rem
  }

  h3 {
      font-size: 1.8rem
  }

  .container-div,.container-div.hero-flex-horizontal {
      padding-right: 0;
      padding-left: 0
  }

  .container-div.hero-flex {
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto
  }

  .filled-btn.no-margin-top.no-margin-right.close-cookie-bar {
      width: 100%
  }

  .filled-btn.no-margin-top.full-width-phone {
      width: 100%;
      margin-right: 0
  }

  .filled-btn.pricing-table {
      font-size: 12px;
      line-height: 18px
  }

  .style-guide-block {
      padding-right: 48px;
      padding-left: 48px
  }

  .section-bigger {
      padding-top: 48px;
      padding-bottom: 48px
  }

  .section-bigger.medium {
      padding-top: 32px;
      padding-bottom: 32px
  }

  .section-bigger.with-header {
      padding-top: 32px
  }

  .section-bigger.video-bg {
      min-height: 240px;
      padding-top: 80px;
      padding-bottom: 80px
  }

  .section-bigger.about-video-bg {
      padding-top: 80px;
      padding-bottom: 80px
  }

  .hero-section {
      padding-top: 96px;
      padding-bottom: 72px
  }

  .nav-link-wrap {
      margin-right: 0;
      padding-top: 10px;
      padding-bottom: 10px
  }

  .nav-menu {
      width: 100vw;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .hero-left {
      margin-bottom: 40px
  }

  .nav-links-wrapper {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .featured-work-link-block.featured-projects {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .copyright-link {
      font-weight: 400
  }

  .nav-link-wrap-2 {
      margin-bottom: 8px;
      float: left;
      clear: left
  }

  .text-field {
      border-radius: 0
  }

  .text-field.bigger {
      min-height: 140px
  }

  .logo {
      height: 20px
  }

  .page-title {
      font-size: 30px;
      line-height: 36px
  }

  .outlined-btn.pricing-table {
      font-size: 12px;
      line-height: 18px
  }

  .filled-btn-arrow.no-margin-top.hero-button {
      margin-right: 0;
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center
  }

  .filled-btn-arrow-text {
      font-size: 14px
  }

  .filled-btn-arrow-text.main-cta {
      font-size: 16px;
      line-height: 20px
  }

  .section-subtitle {
      font-size: 18px;
      line-height: 24px
  }

  .hero-title {
      font-size: 48px;
      line-height: 54px
  }

  .hero-title.center,.hero-title.color {
      font-size: 32px;
      line-height: 37px
  }

  .hero-btn-container {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .hero-btn-container.center {
      margin-top: 24px;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .text-btn.no-margin-top {
      margin-top: 16px
  }

  .text-btn.no-margin-top.full-width-phone {
      width: 100%;
      margin-right: 0
  }

  .hero-top {
      margin-bottom: 40px
  }

  .features-grid {
      grid-column-gap: 0px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto auto auto auto auto;
      grid-template-rows: auto auto auto auto auto auto
  }

  .feature-block {
      width: 100%;
      padding-top: 12px;
      padding-bottom: 12px
  }

  .feature-grid {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -webkit-flex-direction: column-reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse
  }

  .feature-grid.first {
      margin-top: 32px
  }

  .feature-title-large.center {
      font-size: 2rem
  }

  .features-text-block {
      margin-bottom: 40px
  }

  .features-img-block {
      position: static;
      min-height: auto
  }

  .metrics {
      grid-column-gap: 0px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto auto auto auto auto;
      grid-template-rows: auto auto auto auto auto auto
  }

  .testimonial-bg-img {
      height: 100%
  }

  .testimonial-card {
      min-height: 272px
  }

  .testimonial-avatar-block {
      margin-top: 8px
  }

  .testimonial-avatar {
      width: 48px;
      height: 48px
  }

  .testimonial-name {
      font-size: 14px;
      line-height: 20px
  }

  .testimonial-name-subline {
      font-size: 12px;
      line-height: 18px
  }

  .testimonial-slider {
      padding: 24px;
      background-position: 113% 12%;
      background-size: 36%
  }

  .testimonial-slide-nav {
      left: 24px;
      bottom: 24px
  }

  .testimonial-slider-arrow-right {
      right: 24px;
      bottom: 24px
  }

  .testimonial-slider-arrow-left {
      right: 64px;
      bottom: 24px
  }

  .component-section {
      padding-top: 48px;
      padding-bottom: 48px
  }

  .testimonial-slider-v2 {
      padding-bottom: 72px;
      background-image: none
  }

  .testimonial-card-wrap {
      padding-right: 8px;
      padding-left: 8px
  }

  .testimonial-slider-arrow-right-v2 {
      right: 24px;
      bottom: 24px
  }

  .testimonial-slider-arrow-left-v2 {
      right: 64px;
      bottom: 24px
  }

  .testimonial-name-subline-v2 {
      font-size: 12px;
      line-height: 18px
  }

  .pricing-price.v2 {
      font-size: 24px;
      line-height: 30px
  }

  .pricing-card-content {
      padding-right: 20px;
      padding-left: 20px
  }

  .pricing-card-content.middle {
      padding-right: 16px;
      padding-left: 16px
  }

  .pricing-card-header {
      margin-bottom: 0;
      padding-top: 24px;
      padding-bottom: 24px
  }

  .pricing-card-header.table {
      padding-right: 8px;
      padding-bottom: 8px;
      padding-left: 8px;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .pricing-card-wrapper {
      padding-right: 0;
      padding-left: 0
  }

  .pricing-title.table {
      font-size: 14px;
      line-height: 18px
  }

  .pricing-card,.pricing-card.middle {
      margin-top: 32px
  }

  .pricing-small-text.v2.custom-pricing {
      font-size: 12px;
      line-height: 18px;
      text-align: center
  }

  .pricing-card-btn-container.table {
      padding: 16px 8px
  }

  .pricing-row-text {
      font-size: 14px
  }

  .pricing-columns {
      margin-bottom: 40px
  }

  .pricing-label.table {
      right: auto;
      padding-right: 8px;
      padding-left: 8px;
      font-size: 10px;
      line-height: 16px
  }

  .pricing-table-content {
      padding-right: 8px;
      padding-left: 8px
  }

  .pricing-table-price-block {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .video-play-btn {
      width: 56px;
      height: 56px
  }

  .video-play-icon {
      width: 16px
  }

  .video-bg-circle {
      left: -8px;
      top: -8px;
      right: -8px;
      bottom: -8px
  }

  .video-bg-img {
      height: 100%
  }

  .promo-video-wrapper {
      min-height: 240px;
      margin-top: 0
  }

  .blog-post-wrapper {
      margin-bottom: 16px
  }

  .blog-listing-title.in-sidebar {
      font-size: 16px;
      line-height: 22px
  }

  .page-header-img-overlay.list-view {
      bottom: 0
  }

  .blog-info-block {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start
  }

  .blog-category-label {
      margin-bottom: 10px
  }

  .blog-date-and-author-block.on-blog-page {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      border-radius: 8px
  }

  .blog-date-and-author-block.on-job-listing-page {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      border-radius: 8px;
      background-color: hsla(0,0%,100%,.08)
  }

  .blog-date-and-author-text.on-blog-page {
      margin-right: 0
  }

  .blog-post-img {
      max-width: 100%;
      min-height: 280px;
      -o-object-fit: cover;
      object-fit: cover
  }

  .blog-post-img.v2 {
      min-height: 320px
  }

  .blog-post-img.list-view {
      min-height: 240px
  }

  .blog-post-listing-img-wrapper.list-view {
      position: relative;
      width: 100%
  }

  .blog-post-listing-img-wrapper.list-view.in-sidebar {
      height: 180px
  }

  .blog-info-wrap.list-view {
      position: static;
      padding-bottom: 56px
  }

  .blog-post-listing-grid-v2 {
      -ms-grid-rows: auto auto;
      grid-template-rows: auto auto
  }

  .blog-post-listing-content-v2 {
      padding: 24px
  }

  .blog-post-list-view-content {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex
  }

  .blog-post-list-view-content.in-sidebar {
      max-height: none
  }

  .cta-block {
      padding: 32px
  }

  .cta-block.v3 {
      padding-right: 16px;
      padding-left: 16px
  }

  .cta-block.v2 {
      padding: 32px
  }

  .cta-title {
      font-size: 23px;
      line-height: 30px
  }

  .cta-img {
      bottom: -24px;
      margin-top: 0
  }

  .hiring-label {
      margin-left: 12px;
      padding-right: 8px;
      padding-left: 8px;
      font-size: 10px;
      line-height: 16px
  }

  .page-header-title {
      font-size: 30px;
      line-height: 36px
  }

  .blog-post-recommended-grid {
      grid-column-gap: 16px;
      grid-row-gap: 16px
  }

  .page-header-img-container {
      max-height: 200px;
      border-radius: 12px
  }

  .team-member-card-wrap {
      width: 100%
  }

  .companies-grid,.companies-half-grid {
      grid-column-gap: 32px;
      grid-row-gap: 32px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto auto auto auto auto;
      grid-template-rows: auto auto auto auto auto auto
  }

  .job-listing-info-block {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start
  }

  .job-listing-info-icon {
      width: 16px;
      margin-right: 8px
  }

  .job-listing-info-text {
      margin-right: 0
  }

  .job-listing-info-content {
      margin-bottom: 10px;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1
  }

  .job-listing-info-content.last {
      margin-bottom: 0
  }

  .extra-form-actions-wrapper {
      font-size: 12px;
      line-height: 20px
  }

  .utility-page-form.card.max-width {
      min-width: 280px
  }

  .field-label__form {
      margin-top: 0
  }

  .utility-card-title {
      font-size: 30px;
      line-height: 36px
  }

  .coming-soon-page-content {
      max-width: 100%
  }

  .coming-soon-title {
      font-size: 30px;
      line-height: 36px
  }

  .cookie-bar {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .cookie-text {
      margin-right: 0;
      margin-bottom: 16px
  }

  .contact-info-flex-wrap {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start
  }

  .contact-info-content {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1
  }

  .contact-info-icon {
      width: 16px;
      margin-right: 8px
  }

  .blog-post-by-author {
      grid-column-gap: 16px;
      grid-row-gap: 16px
  }

  .blog-post-listing-content-by-author {
      padding: 24px
  }

  .integration-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 10px
  }

  .crooked-section {
      height: 40%
  }

  .footer-grid,.footer-grid-block {
      display: block
  }

  .footer-title {
      margin-top: 32px
  }

  .footer-link {
      display: block
  }

  .intro-hero-section {
      padding-top: 48px;
      padding-bottom: 48px
  }

  .intro-features-wrap {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center
  }

  .intro-features-block {
      padding-top: 12px;
      padding-bottom: 12px;
      -webkit-align-self: stretch;
      -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch;
      border-bottom: 1px solid hsla(0,0%,100%,.1);
      border-right-style: none
  }

  .intro-features-block.last {
      border-bottom-style: none
  }

  .intro-features-block.first {
      padding-left: 24px;
      -webkit-align-self: stretch;
      -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch
  }

  .pricing-table-row {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end
  }

  .pricing-table-text {
      display: none
  }

  .text-block-3 {
      font-size: 16px;
      line-height: 20px
  }

  .image-feature-home {
      display: block;
      width: 100%
  }

  .grid-micro-features {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .longer-grid {
      display: block;
      width: 100%
  }

  .rainbow-div.callout {
      display: block;
      padding-bottom: 20px
  }

  .text-callout {
      padding-top: 0;
      padding-bottom: 16px
  }

  .image-callout {
      display: none
  }

  .grid-3 {
      display: block
  }

  .social-links {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center
  }

  .div-block-9 {
      display: block
  }

  .wrapper-example__home {
      margin-bottom: 40px;
      padding-right: 16px;
      padding-left: 16px
  }

  .paragraph-example__home {
      margin-top: 14px;
      line-height: 22px
  }

  .section-examples-home {
      padding-top: 36px
  }

  .heading-5 {
      margin-top: 18px;
      font-size: 16px;
      line-height: 24px
  }

  .paragraph-7 {
      margin-bottom: 18px
  }

  .grid-8 {
      display: none
  }

  .price-cards {
      display: block
  }

  .plan-card.rainbow-div {
      margin-left: 0
  }

  .plan-card.business {
      margin-top: 30px;
      margin-right: 0
  }

  .plan-card.last {
      margin-top: 29px;
      margin-left: 0
  }

  .plan-card.first {
      margin-right: 0;
      margin-bottom: 33px
  }

  .section-3 {
      margin-top: 85px;
      margin-bottom: 37px
  }

  .grid-9 {
      padding-right: 0;
      padding-left: 0
  }

  .explore-item-content {
      display: -ms-grid;
      display: grid;
      grid-auto-columns: 1fr;
      grid-column-gap: 32px;
      grid-row-gap: 16px;
      -ms-grid-columns: 48px 1fr 18px;
      grid-template-columns: 48px 1fr 18px;
      -ms-grid-rows: auto auto;
      grid-template-rows: auto auto
  }

  .collection-item-4px-colorbg {
      min-width: auto
  }

  .avatar {
      display: block;
      width: 48px;
      height: 48px;
      margin-right: 0;
      -webkit-align-self: flex-start;
      -ms-flex-item-align: start;
      align-self: flex-start
  }

  .background-color__hero-home {
      padding-top: 60px;
      padding-bottom: 100px
  }

  .form {
      padding: 16px
  }

  .wrapper-video-home {
      display: none;
      min-height: 140px
  }

  .background-video-home {
      min-height: 160px
  }

  .div-block-17 {
      width: 90%;
      padding-top: 13px;
      padding-right: 0;
      padding-left: 0
  }

  .div-block-18.offset {
      display: none
  }

  .bold-text {
      display: block;
      margin-bottom: 16px
  }

  .arrow-callout {
      display: inline-block;
      margin-bottom: 0;
      float: none;
      clear: none;
      text-align: right
  }

  .div-block-20 {
      display: none
  }

  .logo-title {
      font-size: 11px
  }

  .grid-logos-customers {
      grid-column-gap: 16px;
      grid-row-gap: 32px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto;
      grid-template-rows: auto
  }

  .grid-logos-customers._3-col {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr
  }

  .client-logo {
      max-height: 50px;
      max-width: 130px
  }

  .client-logo.shift {
      max-height: 30px
  }

  .client-logo.mattermost {
      max-width: 190px
  }

  .grid-values {
      display: -ms-grid;
      display: grid;
      padding-right: 0;
      padding-left: 0;
      grid-auto-columns: 1fr;
      grid-column-gap: 32px;
      grid-row-gap: 32px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: auto auto;
      grid-template-rows: auto auto
  }

  .principle-block {
      width: 100%
  }

  .colourful-callout {
      padding: 12px
  }

  .colourful-callout.bottom {
      padding: 10px
  }

  .colourful-callout.explore {
      width: 100%
  }

  .callout-content {
      display: block;
      padding: 10px 16px 24px
  }

  .callout-text {
      margin-bottom: 24px
  }

  .container.hero-flex-horizontal {
      padding-right: 0;
      padding-left: 0
  }

  .container.hero-flex {
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto
  }

  .section {
      padding-top: 40px;
      padding-bottom: 40px
  }

  .section.padding-top,.section.padding120top {
      padding-top: 40px
  }

  .section.padding120top.mobile-padding {
      padding-bottom: 0
  }

  .section.padding120,.section.padding120bottom {
      padding-top: 40px
  }

  .form-webinar {
      padding: 24px
  }

  .purple-header {
      font-size: 3rem;
      padding-right: 0;
      padding-left: 0
  }

  .wrapper-callout-content {
      display: block
  }

  .paragraph-560px-center {
      font-size: 16px;
      line-height: 24px
  }

  .paragraph-560px-center.center {
      margin-bottom: 2px;
      font-size: 14px;
      line-height: 22px;
      text-align: left
  }

  .wrapper-text__user-stories {
      padding-right: 20px;
      padding-bottom: 80px;
      padding-left: 20px
  }

  .heading-card__user-stories {
      font-size: 20px
  }

  .wrapper-image-customer__user-stories {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column
  }

  .image-customer {
      display: none
  }

  .container1140.hero-flex-horizontal {
      padding-right: 0;
      padding-left: 0
  }

  .container1140.hero-flex {
      -webkit-box-flex: 0;
      -webkit-flex: 0 auto;
      -ms-flex: 0 auto;
      flex: 0 auto
  }

  .small-card__customer-stories {
      margin-top: 80px
  }

  .customer-logo__home {
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .logo-home {
      height: 20px
  }

  .logo-home.mobile {
      height: auto
  }

  .collection-list-wrapper__customer-logo-home {
      grid-auto-flow: row dense
  }

  .tab-panel {
      padding-right: 10px;
      padding-left: 10px
  }

  .tabs-content {
      padding-top: 20px
  }

  .content-block {
      padding-bottom: 10px
  }

  .colourful-callout-bg {
      padding: 12px
  }

  .colourful-callout-bg.bottom {
      padding-top: 10px;
      padding-right: 10px;
      padding-left: 10px
  }

  .colourful-callout-bg.explore {
      width: 100%
  }

  .heading-blog-post__blog {
      font-size: 1.3rem
  }

  .subheading-blog-post__blog {
      display: none
  }

  .wrapper-customers-logo__home {
      padding: 12px
  }

  .heading__blog-post {
      font-size: 1.8rem
  }

  .main-image__blog-post {
      margin-bottom: 32px
  }

  .question-title {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1
  }

  .feature__home {
      padding: 24px
  }

  .paragraph-hero-left.center {
      font-size: 14px;
      line-height: 19px
  }

  .text-callout-2 {
      padding-top: 0;
      padding-bottom: 16px
  }

  .callout-content-2 {
      display: block;
      padding: 10px 16px 24px
  }

  .callout-text-2 {
      margin-bottom: 24px
  }

  .nav-link-wrap-dropdown {
      margin-right: 0;
      padding-top: 10px;
      padding-bottom: 10px
  }

  .image-feature__home {
      width: 60px
  }

  .collection-item-simple-border {
      min-width: auto
  }

  .wrapper-social-sharing {
      padding-left: 0;
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1
  }

  .image-516-copy {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center
  }

  .blog-post-author-desc {
      text-align: center
  }

  .div-block-233 {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center
  }

  .rich-text-blog {
      font-size: 1rem
  }

  .blog-post-author-desc-text {
      padding-top: 15px;
      padding-left: 0;
      text-align: center
  }

  .blog-post-author-desc-content {
      display: none;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start
  }

  .blog-post-author-desc-content.mobile {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
      text-align: center
  }

  .customer-logo-flex {
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr
  }

  .collection-item-width33 {
      width: 40%
  }
}

#w-node-_07f08f86-952c-d4fe-cfbb-dd9ab1aedbbb-f7a47958,#w-node-_17bce64f-8be4-dcfc-bc83-1f9041747105-5f6a92a7,#w-node-ad3f80a9-4b16-2b7d-b7b5-971930a32790-932a18f0 {
  -ms-grid-column-align: center;
  justify-self: center
}

#w-node-_0783c705-fc9f-1602-91b2-cc82dae4450b-932a18f0,#w-node-_0783c705-fc9f-1602-91b2-cc82dae44510-932a18f0,#w-node-_0783c705-fc9f-1602-91b2-cc82dae44515-932a18f0,#w-node-_0783c705-fc9f-1602-91b2-cc82dae4451a-932a18f0,#w-node-_07f08f86-952c-d4fe-cfbb-dd9ab1aedbc1-f7a47958,#w-node-_31c04aa6-7cb2-4700-17e1-388cdfe6ecb7-932a18f0,#w-node-_42b1df17-4194-5a6e-3d94-5cc15fb768c9-932a18f0,#w-node-_42b1df17-4194-5a6e-3d94-5cc15fb768cc-932a18f0,#w-node-_42b1df17-4194-5a6e-3d94-5cc15fb768d1-932a18f0,#w-node-_42b1df17-4194-5a6e-3d94-5cc15fb768d6-932a18f0,#w-node-_42b1df17-4194-5a6e-3d94-5cc15fb768db-932a18f0,#w-node-_49c7f139-b409-b876-bf72-5aa31dd6d44e-f7a47958,#w-node-_4eb059cf-de91-2cb1-b0b2-b9b35c80a786-f7a47958,#w-node-_506e1688-020c-0ff1-a7fb-225486d803a1-5f6a92a7,#w-node-_8bda24bc-b790-b51d-df65-db0745ffbb84-5f6a92a7,#w-node-_918f6851-dba6-51e6-0f6b-7e81eca3d6da-5f6a92a7,#w-node-a4ec150a-e33f-7657-ca77-6f6852d84539-3d2a1946,#w-node-b078f248-67bd-f9ac-ba1e-c5f333e763f7-5f6a92a7,#w-node-b7207c5d-2c7a-2eb4-191a-86dad3776225-932a18f0,#w-node-b7207c5d-2c7a-2eb4-191a-86dad377622c-932a18f0,#w-node-b7207c5d-2c7a-2eb4-191a-86dad3776233-932a18f0,#w-node-b7207c5d-2c7a-2eb4-191a-86dad377623a-932a18f0 {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

#w-node-_0783c705-fc9f-1602-91b2-cc82dae4450a-932a18f0,#w-node-_0783c705-fc9f-1602-91b2-cc82dae4450f-932a18f0,#w-node-_0783c705-fc9f-1602-91b2-cc82dae44514-932a18f0,#w-node-_0783c705-fc9f-1602-91b2-cc82dae44519-932a18f0,#w-node-_14cf62e1-f547-7124-d100-6987e2d01139-9a2a1916,#w-node-_2126383d-c027-c4e2-8fe5-a613df7f5e9a-9a2a1916,#w-node-_23f3546d-7f77-8cbb-5054-de3aed9604b6-9a2a1916,#w-node-_42b1df17-4194-5a6e-3d94-5cc15fb768cb-932a18f0,#w-node-_42b1df17-4194-5a6e-3d94-5cc15fb768d0-932a18f0,#w-node-_42b1df17-4194-5a6e-3d94-5cc15fb768d5-932a18f0,#w-node-_42b1df17-4194-5a6e-3d94-5cc15fb768da-932a18f0,#w-node-_49c7f139-b409-b876-bf72-5aa31dd6d44d-f7a47958,#w-node-_4eb059cf-de91-2cb1-b0b2-b9b35c80a785-f7a47958,#w-node-_506e1688-020c-0ff1-a7fb-225486d803a0-5f6a92a7,#w-node-_770a83e2-74d2-959f-a940-99a83f806026-9a2a1916,#w-node-_918f6851-dba6-51e6-0f6b-7e81eca3d6d9-5f6a92a7,#w-node-a4ec150a-e33f-7657-ca77-6f6852d84538-3d2a1946,#w-node-a4ec150a-e33f-7657-ca77-6f6852d84540-3d2a1946,#w-node-aa37ac77-d916-3cb1-b4d8-aa3331f07870-9a2a1916,#w-node-b078f248-67bd-f9ac-ba1e-c5f333e763f6-5f6a92a7,#w-node-b7207c5d-2c7a-2eb4-191a-86dad3776224-932a18f0,#w-node-b7207c5d-2c7a-2eb4-191a-86dad377622b-932a18f0,#w-node-b7207c5d-2c7a-2eb4-191a-86dad3776232-932a18f0,#w-node-b7207c5d-2c7a-2eb4-191a-86dad3776239-932a18f0,#w-node-ce20c082-ac8e-df6f-f785-e543e8f864d2-9a2a1916,#w-node-e53590af-bb84-2b50-5671-b83150f4929f-9a2a1916,#w-node-f3ce7fc9-46cd-8e16-5479-42feb1936d81-9a2a1916 {
  -ms-grid-column-align: start;
  justify-self: start;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

#w-node-_0783c705-fc9f-1602-91b2-cc82dae44501-932a18f0,#w-node-_0dcf91b8-1ec4-65a5-8587-1915b2d23fd4-eb250863,#w-node-_37030735-a151-1f9d-594b-84c0248467e1-5110a2c6,#w-node-_6c1feadf-fef4-24dc-e2cf-2d07712c5ff5-fb2a194d,#w-node-c4572f7e-5861-90e9-e840-c4308bedb71c-6ed03f11,#w-node-de855d56-5fc5-7602-22bc-78dba49f97a6-e02a194a {
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1;
  -ms-grid-column: span 1;
  grid-column-start: span 1;
  -ms-grid-column-span: 1;
  grid-column-end: span 1
}

#w-node-_14cf62e1-f547-7124-d100-6987e2d0113a-9a2a1916,#w-node-_2126383d-c027-c4e2-8fe5-a613df7f5e9b-9a2a1916,#w-node-_23f3546d-7f77-8cbb-5054-de3aed9604b7-9a2a1916,#w-node-_26fb4f54-b58c-c5a9-e703-76fec8e85355-a22a1948,#w-node-_319adbb9-8488-0292-6e94-606410288395-8afba571,#w-node-_7795b330-993d-36b0-1f20-7fc095ff2174-a22a1948,#w-node-aa37ac77-d916-3cb1-b4d8-aa3331f07871-9a2a1916,#w-node-ce20c082-ac8e-df6f-f785-e543e8f864d3-9a2a1916,#w-node-div-block-7-9a2a1916,#w-node-e53590af-bb84-2b50-5671-b83150f492a0-9a2a1916,#w-node-f3ce7fc9-46cd-8e16-5479-42feb1936d82-9a2a1916 {
  -ms-grid-column: span 2;
  grid-column-start: span 2;
  -ms-grid-column-span: 2;
  grid-column-end: span 2;
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1
}

#w-node-_37030735-a151-1f9d-594b-84c0248467d2-5110a2c6,#w-node-a4ec150a-e33f-7657-ca77-6f6852d84535-3d2a1946,#w-node-bf780d0d-a6db-88a4-a6be-98a7cab3cc04-d02a1947,#w-node-c4572f7e-5861-90e9-e840-c4308bedb70d-6ed03f11,#w-node-de5b4185-9ac5-c471-8e56-f7d53b30fa1e-9a2a1916,#w-node-e63ef7f2-527d-6ae8-7610-17a1dd53b372-a72a1943,#w-node-ea9e7cee-40e6-f02e-18b3-c027021c554e-d02a1947,#w-node-f1e4409d-0584-95f3-e394-dd201de3840a-4ffb1962,#w-node-f9547167-2009-0c00-f1b2-0df06f292f87-e02a194a {
  -webkit-align-self: start;
  -ms-flex-item-align: start;
  -ms-grid-row-align: start;
  align-self: start
}

#w-node-_14cf62e1-f547-7124-d100-6987e2d01137-9a2a1916,#w-node-_2126383d-c027-c4e2-8fe5-a613df7f5e98-9a2a1916,#w-node-_23f3546d-7f77-8cbb-5054-de3aed9604b4-9a2a1916,#w-node-_27fc0a9c-9a56-6454-b400-285cd501ba27-1beca73c,#w-node-_5e629e0b-e936-3d56-e33b-c653a2f405e3-1beca73c,#w-node-_5f8ad74a-ef8f-0544-c5b3-d69e531a124f-982a1944,#w-node-_770a83e2-74d2-959f-a940-99a83f806024-9a2a1916,#w-node-_8173ea41-54a2-0e73-a62b-31b857d3d7fc-982a1944,#w-node-aa37ac77-d916-3cb1-b4d8-aa3331f0786e-9a2a1916,#w-node-c005dd71-63d6-f5b8-60f3-e3dfb3fef7c8-1beca73c,#w-node-ce20c082-ac8e-df6f-f785-e543e8f864d0-9a2a1916,#w-node-d6f98bdd-d6a2-2f2e-5eb3-98068ac851cc-1beca73c,#w-node-d8c6b5a1-c290-38a7-aa50-436c24850bb3-1beca73c,#w-node-e53590af-bb84-2b50-5671-b83150f4929d-9a2a1916,#w-node-f3ce7fc9-46cd-8e16-5479-42feb1936d7f-9a2a1916,#w-node-f7e36af0-2f95-c73d-e3d9-dcc323f58046-1beca73c {
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch
}

#w-node-_593409e0-540b-6921-ee4a-763fbf1f1f24-5f6a92a7,#w-node-_5d9731f0-17c9-1928-916c-f7475bd94410-f7a47958,#w-node-_8d46ddaf-dc37-07a9-5af7-aec1f507fd71-f507fd68,#w-node-c83fd2c9-64d4-7bba-d319-cb304e795fff-0640600a,#w-node-eca2a932-ad14-dfdb-0c90-71196e0aa85b-6d804ed9 {
  -ms-grid-column-align: end;
  justify-self: end;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

#w-node-_6fec20e5-9ad5-1bbe-6da4-ac18d09c0f4b-982a1944,#w-node-_909da1e9-a767-52b0-c69b-859d7968e33a-3d2a1946,#w-node-_98d49dd6-00a2-f2ea-4464-5938514e5a07-982a1944,#w-node-_9928dbb0-e0e2-72f9-c52b-4872ce49a8cc-982a1944,#w-node-ad1ef5fe-115a-f98c-8fba-5dab7649afed-a72a1943,#w-node-c5039557-e6e6-234a-c4ce-24f415736d8a-982a1944,#w-node-f1e4409d-0584-95f3-e394-dd201de3841c-4ffb1962 {
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  -ms-grid-row-align: stretch;
  align-self: stretch;
  -ms-grid-column-align: stretch;
  justify-self: stretch
}

#w-node-ad1ef5fe-115a-f98c-8fba-5dab7649aff2-a72a1943 {
  -webkit-align-self: start;
  -ms-flex-item-align: start;
  -ms-grid-row-align: start;
  align-self: start;
  -ms-grid-column-align: center;
  justify-self: center
}

#w-node-_6ce50c3c-6041-13c7-d8f7-1c12f58c1da2-a72a1943 {
  -ms-grid-column-align: end;
  justify-self: end;
  -webkit-align-self: start;
  -ms-flex-item-align: start;
  -ms-grid-row-align: start;
  align-self: start
}

#w-node-_0955685d-c7b6-607d-27d7-d53833bf287a-982a1944,#w-node-_1da1dd79-b958-65e8-9d22-07e07d713993-982a1944,#w-node-_469ea0e3-8986-ab1d-c4f7-c7be907f65e4-982a1944,#w-node-a8fdbc5a-808a-8d8b-1e57-2a1cfa94977e-982a1944,#w-node-b8253050-b213-5c02-ad79-50058d4f4426-982a1944 {
  -ms-grid-column: span 5;
  grid-column-start: span 5;
  -ms-grid-column-span: 5;
  grid-column-end: span 5;
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1
}

#w-node-_035157ed-0485-3dfc-501b-3c6dbf3e18e2-982a1944,#w-node-_07751943-e2d5-575d-7476-9ab2ec2b87ce-982a1944,#w-node-_0e162bbe-f1db-54f6-38a7-c9cf88bdaca2-982a1944,#w-node-_0e3c6b3a-139e-8306-7c86-b1122febdfbd-982a1944,#w-node-_11be1b7c-2064-7a7a-902d-74ff1ab6a212-982a1944,#w-node-_13e32b68-b0f1-9a0b-5aea-ef2cc090bf6c-982a1944,#w-node-_1491981a-efbe-895e-6c81-a1efef5e2788-982a1944,#w-node-_16dd480b-4019-7b73-ca30-254c6f169b9a-982a1944,#w-node-_18e86962-0398-4751-f5f2-196032f8afd7-982a1944,#w-node-_25a7403b-f7f8-92fd-f90a-c31b3adda34f-982a1944,#w-node-_36d42fd0-272f-5d7a-37d6-45c7bbd25453-982a1944,#w-node-_3bba7bd9-1814-097d-2dda-30a5d38624e3-982a1944,#w-node-_3db47d1c-7c90-db4f-8f95-2eaecbdb1d81-982a1944,#w-node-_3e394392-a0bf-6c29-4f75-027b191f78a6-982a1944,#w-node-_3f50e376-b09d-7415-46af-27f7e49e0332-982a1944,#w-node-_556979b9-9c9d-e345-a3f9-9d13de2c817e-982a1944,#w-node-_56e94817-3917-586f-8283-21420a0a2fbd-982a1944,#w-node-_57054210-4879-77a1-c939-f82a391917b7-982a1944,#w-node-_62cc3d2f-21dd-8136-8195-072316856f97-982a1944,#w-node-_631ad140-c723-4d7b-054b-07075e18b5e5-982a1944,#w-node-_6a1ff66e-40e6-8e39-97c6-3c54eeb913dc-982a1944,#w-node-_6a459c72-7f5d-322f-5501-29a4f89754a1-982a1944,#w-node-_6e6311e0-b5aa-a6a3-a66a-09f0488f90ab-982a1944,#w-node-_6fbd9d0d-8035-2618-4657-e6d280128923-982a1944,#w-node-_71aa2558-20b9-f5ec-fc5a-d1d1eaf0705e-982a1944,#w-node-_7338ac56-bc0b-c6f0-90a4-e13f9f670b65-982a1944,#w-node-_741cd87a-dc3a-df71-2c5f-6f44b36dc38b-982a1944,#w-node-_841621ba-e8f7-5d58-7997-6ffc784f7b47-982a1944,#w-node-_85b75930-e820-d303-f6f7-7808a7b8a354-982a1944,#w-node-_871b412e-11e2-b5e2-be0b-8ed9bd7ebb0b-982a1944,#w-node-_8d4e8da5-85e9-7d28-873a-44f512cea5d0-982a1944,#w-node-_94087f29-448d-c775-19a8-39bac2cabfc6-982a1944,#w-node-_9501cd01-71e5-2e2a-85fa-c4b9c241cf63-982a1944,#w-node-_95f767f2-a660-cfad-2d1b-6d9d7dafab91-982a1944,#w-node-afcafe9d-76b8-d194-baf2-6feb1bf3a79e-d02a1947,#w-node-afcafe9d-76b8-d194-baf2-6feb1bf3a79e-eb250863,#w-node-b5a96906-5724-0cde-3497-a536f072a72d-982a1944,#w-node-b7f6c321-bb16-6566-239e-39b2c208c0e5-982a1944,#w-node-bdd7d499-cbba-e85f-597a-e1f7330d0bbb-982a1944,#w-node-bf737c81-a102-ad58-eaf0-5fd443af1e20-982a1944,#w-node-c1084393-5e97-77e0-7aef-26b8f64978cc-982a1944,#w-node-cd5f6f12-619f-856e-777f-05e99ef0a971-982a1944,#w-node-ce7bfb0d-2af2-f880-ba79-5c5e706464f5-982a1944,#w-node-d1950504-05ed-ade2-004e-81a4d7be1254-982a1944,#w-node-d9cdd71c-9764-f1be-5c3a-37500c0b5f13-982a1944,#w-node-dae0ce8c-1262-9ede-5dc3-156e71b02e53-982a1944,#w-node-dbb1baa2-2c62-691c-7d90-be5b71dfa5fc-982a1944,#w-node-df51ae7c-963c-9216-d9ee-fe880014154a-982a1944,#w-node-dfc07264-0c9f-5968-a7c1-b07879f7ec5d-982a1944,#w-node-e112db5f-fd71-0939-1c91-3d2e5b034c12-982a1944,#w-node-e434fb55-50c3-59f6-5cce-6882625df9f6-982a1944,#w-node-eab158b3-80fc-e068-6bfd-48f973c619a7-982a1944,#w-node-eccaa55c-0a6e-ba5f-203c-0061b7954ad0-982a1944,#w-node-f1c1b8af-c7c2-80fb-fcf2-de30e98b91ab-982a1944,#w-node-f7face04-6aaf-f095-6fb9-31016e781eeb-982a1944 {
  -ms-grid-column-align: stretch;
  justify-self: stretch
}

#w-node-_0de553c6-4bcb-3891-10bb-c1bb22ac9645-982a1944,#w-node-_104f3f78-d359-609d-4107-fa5072e13816-982a1944,#w-node-_15ac7db3-1458-7dc3-b892-672adc3096bc-982a1944,#w-node-_32452149-76b0-569a-e684-acd086416185-982a1944,#w-node-_3e3f74e0-7b1c-ef8f-d629-3d63753ab66c-982a1944,#w-node-_406ab2e6-7aa0-3ca3-5f1a-4d4dfa5ebbb9-982a1944,#w-node-_424c27db-c21d-a56f-0abb-3a8c10e98c4a-982a1944,#w-node-_480b51a7-c554-0929-febd-fe4a38af189f-982a1944,#w-node-_52d5edcf-4e7d-2176-7df8-cd8b3db85780-982a1944,#w-node-_56f6c88c-25ee-d328-312a-b0e858fe7449-982a1944,#w-node-_59cf85f1-b76b-3424-a0fb-8be25bd99e1f-982a1944,#w-node-_6aa0da45-c790-ad0c-3927-260a9b5fdc62-982a1944,#w-node-_725525db-6321-38c9-8d16-0750c8226ea7-982a1944,#w-node-_72f0544e-c2a1-4fd7-0455-9def3e80d333-982a1944,#w-node-_750cbce0-5588-3efd-13ed-97d8c0d76e64-982a1944,#w-node-_765aad7a-8612-0dad-02a9-8cd351775575-982a1944,#w-node-_77980eea-c31b-401a-20fa-715ef812653c-982a1944,#w-node-_81c8024c-21c1-3bc2-c7db-e9dbfdf49097-982a1944,#w-node-_8402392c-1e4f-1497-c340-c2adc29d2cee-982a1944,#w-node-_85c8a6eb-f245-5b95-29ba-edd8f37c7e9f-982a1944,#w-node-_8b23491e-b54c-53b4-83db-69d64dab30ce-982a1944,#w-node-_902a7746-2414-c788-7541-4b5a24f58fe7-982a1944,#w-node-_96ffbe72-564e-ff81-6c40-e3032e2280e9-982a1944,#w-node-_9b2ca4a3-6017-659c-4ba7-e1433833f3a1-982a1944,#w-node-a52a7ecf-d115-dde0-b489-17895b362b36-982a1944,#w-node-a7ccbc39-ad3d-e444-f216-757b9ec14f83-982a1944,#w-node-a7d1a8f1-943c-b3c2-15fa-f5e253e8ec7c-982a1944,#w-node-a96eb3c9-f496-1894-5bd9-fb75a0096dcc-982a1944,#w-node-ba788018-4ff8-04d7-ba59-a91408cda732-982a1944,#w-node-bfcc83d2-a66c-b159-1149-f98d3238f1ec-982a1944,#w-node-d17a2a2e-76c9-95f1-9daf-66c52a5dfaf7-982a1944,#w-node-d1e2621d-ecf4-ae22-6b0a-1470299e92f3-982a1944,#w-node-d4c4a6ec-ab74-3d70-4195-bb4a1ef705fc-982a1944,#w-node-d89d1b87-7723-27e1-b56e-c09d27b40396-982a1944,#w-node-ec492628-5f93-9d05-f1a6-cb1bf28aeded-982a1944,#w-node-f8409790-91cf-5f39-0a98-a72ec2dc0276-982a1944,#w-node-fa11ab8b-929a-a3e7-2131-6fbab6404430-982a1944 {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  -ms-grid-column-align: stretch;
  justify-self: stretch
}

#w-node-a4ec150a-e33f-7657-ca77-6f6852d84541-3d2a1946 {
  -ms-grid-row-align: center;
  align-self: center;
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1;
  -ms-grid-column: span 1;
  grid-column-start: span 1;
  -ms-grid-column-span: 1;
  grid-column-end: span 1
}

#w-node-b31d0415-df9a-0f64-b869-3f7a50597140-d02a1947 {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
  -ms-grid-column-align: center;
  justify-self: center
}

#w-node-ea9e7cee-40e6-f02e-18b3-c027021c5550-d02a1947 {
  -ms-grid-column-align: stretch;
  justify-self: stretch;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

#w-node-_890d2fc2-dcca-6957-622c-80128dabeeed-eb250863,#w-node-ea9e7cee-40e6-f02e-18b3-c027021c5551-d02a1947 {
  -ms-grid-column-align: center;
  justify-self: center;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

#w-node-_170b0222-cc12-3c43-a5f5-c78f350d35c7-0c2a1949 {
  -ms-grid-column: span 1;
  grid-column-start: span 1;
  -ms-grid-column-span: 1;
  grid-column-end: span 1;
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1
}

#w-node-_37030735-a151-1f9d-594b-84c0248467b8-5110a2c6,#w-node-_890d2fc2-dcca-6957-622c-80128dabeeed-e02a194a,#w-node-c4572f7e-5861-90e9-e840-c4308bedb6f3-6ed03f11 {
  -ms-grid-column-align: auto;
  justify-self: auto;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center
}

#w-node-_0dcf91b8-1ec4-65a5-8587-1915b2d23fd4-e02a194a,#w-node-_37030735-a151-1f9d-594b-84c0248467bd-5110a2c6,#w-node-c4572f7e-5861-90e9-e840-c4308bedb6f8-6ed03f11 {
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1;
  -ms-grid-column: span 1;
  grid-column-start: span 1;
  -ms-grid-column-span: 1;
  grid-column-end: span 1;
  -ms-grid-row-align: center;
  align-self: center
}

#w-node-ffa3d42f-c917-6630-388c-6e0111cbabfe-7d2a194b,#w-node-ffa3d42f-c917-6630-388c-6e0111cbabfe-cba0e198,#w-node-ffa3d42f-c917-6630-388c-6e0111cbabfe-fb2a194d {
  -ms-grid-row-align: start;
  align-self: start;
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1;
  -ms-grid-column: span 1;
  grid-column-start: span 1;
  -ms-grid-column-span: 1;
  grid-column-end: span 1
}

#w-node-_3086395a-0dbd-cc00-d587-1fdc01089cc5-7d2a194b,#w-node-_42fbdfb0-5dd2-6d0d-6f87-c1c9ab42bf23-cba0e198,#w-node-_42fbdfb0-5dd2-6d0d-6f87-c1c9ab42bf23-fb2a194d,#w-node-_43cc9ea7-9b2c-753f-8e4f-e094bdd18aa4-fb2a194d,#w-node-_856a267a-027e-b28a-e877-ca90d1a925bb-cba0e198,#w-node-_856a267a-027e-b28a-e877-ca90d1a925bb-fb2a194d,#w-node-bb9aa27d-3b41-4da9-9c72-6dea1f74d1ec-7d2a194b,#w-node-bb9aa27d-3b41-4da9-9c72-6dea1f74d203-7d2a194b,#w-node-bc25499a-960b-86b2-d3df-b2206c13392a-cba0e198 {
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1;
  -ms-grid-column: span 2;
  grid-column-start: span 2;
  -ms-grid-column-span: 2;
  grid-column-end: span 2
}

#w-node-_6fa6ac8b-c5b2-514b-0ed7-e46d251aca5d-5f6a92a7 {
  -ms-grid-row: span 1;
  grid-row-start: span 1;
  -ms-grid-row-span: 1;
  grid-row-end: span 1;
  -ms-grid-column: span 1;
  grid-column-start: span 1;
  -ms-grid-column-span: 1;
  grid-column-end: span 1;
  -ms-grid-row-align: start;
  align-self: start
}

@media screen and (min-width: 1440px) {
  #w-node-_14cf62e1-f547-7124-d100-6987e2d01139-9a2a1916,#w-node-_2126383d-c027-c4e2-8fe5-a613df7f5e9a-9a2a1916,#w-node-_23f3546d-7f77-8cbb-5054-de3aed9604b6-9a2a1916,#w-node-_770a83e2-74d2-959f-a940-99a83f806026-9a2a1916,#w-node-aa37ac77-d916-3cb1-b4d8-aa3331f07870-9a2a1916,#w-node-ce20c082-ac8e-df6f-f785-e543e8f864d2-9a2a1916,#w-node-e53590af-bb84-2b50-5671-b83150f4929f-9a2a1916,#w-node-f3ce7fc9-46cd-8e16-5479-42feb1936d81-9a2a1916 {
      -webkit-align-self:start;
      -ms-flex-item-align: start;
      -ms-grid-row-align: start;
      align-self: start
  }

  #w-node-_14cf62e1-f547-7124-d100-6987e2d0113a-9a2a1916,#w-node-_2126383d-c027-c4e2-8fe5-a613df7f5e9b-9a2a1916,#w-node-_23f3546d-7f77-8cbb-5054-de3aed9604b7-9a2a1916,#w-node-aa37ac77-d916-3cb1-b4d8-aa3331f07871-9a2a1916,#w-node-ce20c082-ac8e-df6f-f785-e543e8f864d3-9a2a1916,#w-node-div-block-7-9a2a1916,#w-node-e53590af-bb84-2b50-5671-b83150f492a0-9a2a1916,#w-node-f3ce7fc9-46cd-8e16-5479-42feb1936d82-9a2a1916 {
      -ms-grid-column: span 2;
      grid-column-start: span 2;
      -ms-grid-column-span: 2;
      grid-column-end: span 2;
      -ms-grid-row: span 1;
      grid-row-start: span 1;
      -ms-grid-row-span: 1;
      grid-row-end: span 1
  }

  #w-node-_14cf62e1-f547-7124-d100-6987e2d01137-9a2a1916,#w-node-_2126383d-c027-c4e2-8fe5-a613df7f5e98-9a2a1916,#w-node-_23f3546d-7f77-8cbb-5054-de3aed9604b4-9a2a1916,#w-node-aa37ac77-d916-3cb1-b4d8-aa3331f0786e-9a2a1916,#w-node-ce20c082-ac8e-df6f-f785-e543e8f864d0-9a2a1916,#w-node-e53590af-bb84-2b50-5671-b83150f4929d-9a2a1916,#w-node-f3ce7fc9-46cd-8e16-5479-42feb1936d7f-9a2a1916 {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center
  }

  #w-node-_593409e0-540b-6921-ee4a-763fbf1f1f24-5f6a92a7,#w-node-_5d9731f0-17c9-1928-916c-f7475bd94410-f7a47958,#w-node-_8d46ddaf-dc37-07a9-5af7-aec1f507fd71-f507fd68,#w-node-c83fd2c9-64d4-7bba-d319-cb304e795fff-0640600a,#w-node-eca2a932-ad14-dfdb-0c90-71196e0aa85b-6d804ed9 {
      -ms-grid-column-align: end;
      justify-self: end
  }
}

@media screen and (min-width: 1280px) {
  #w-node-_424c27db-c21d-a56f-0abb-3a8c10e98c4a-982a1944,#w-node-_59cf85f1-b76b-3424-a0fb-8be25bd99e1f-982a1944 {
      -webkit-align-self:center;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
      -ms-grid-column-align: stretch;
      justify-self: stretch
  }

  #w-node-_035157ed-0485-3dfc-501b-3c6dbf3e18e2-982a1944,#w-node-_0e162bbe-f1db-54f6-38a7-c9cf88bdaca2-982a1944,#w-node-_1491981a-efbe-895e-6c81-a1efef5e2788-982a1944,#w-node-_25a7403b-f7f8-92fd-f90a-c31b3adda34f-982a1944,#w-node-_3db47d1c-7c90-db4f-8f95-2eaecbdb1d81-982a1944,#w-node-_3e394392-a0bf-6c29-4f75-027b191f78a6-982a1944,#w-node-_3f50e376-b09d-7415-46af-27f7e49e0332-982a1944,#w-node-_556979b9-9c9d-e345-a3f9-9d13de2c817e-982a1944,#w-node-_57054210-4879-77a1-c939-f82a391917b7-982a1944,#w-node-_631ad140-c723-4d7b-054b-07075e18b5e5-982a1944,#w-node-_6a459c72-7f5d-322f-5501-29a4f89754a1-982a1944,#w-node-_6e6311e0-b5aa-a6a3-a66a-09f0488f90ab-982a1944,#w-node-_6fbd9d0d-8035-2618-4657-e6d280128923-982a1944,#w-node-_71aa2558-20b9-f5ec-fc5a-d1d1eaf0705e-982a1944,#w-node-_741cd87a-dc3a-df71-2c5f-6f44b36dc38b-982a1944,#w-node-_871b412e-11e2-b5e2-be0b-8ed9bd7ebb0b-982a1944,#w-node-_9501cd01-71e5-2e2a-85fa-c4b9c241cf63-982a1944,#w-node-_95f767f2-a660-cfad-2d1b-6d9d7dafab91-982a1944,#w-node-c1084393-5e97-77e0-7aef-26b8f64978cc-982a1944,#w-node-cd5f6f12-619f-856e-777f-05e99ef0a971-982a1944,#w-node-ce7bfb0d-2af2-f880-ba79-5c5e706464f5-982a1944,#w-node-dae0ce8c-1262-9ede-5dc3-156e71b02e53-982a1944,#w-node-eab158b3-80fc-e068-6bfd-48f973c619a7-982a1944,#w-node-eccaa55c-0a6e-ba5f-203c-0061b7954ad0-982a1944,#w-node-f7face04-6aaf-f095-6fb9-31016e781eeb-982a1944 {
      -ms-grid-column-align: stretch;
      justify-self: stretch
  }

  #w-node-a8fdbc5a-808a-8d8b-1e57-2a1cfa94977e-982a1944 {
      -ms-grid-column: span 5;
      grid-column-start: span 5;
      -ms-grid-column-span: 5;
      grid-column-end: span 5;
      -ms-grid-row: span 1;
      grid-row-start: span 1;
      -ms-grid-row-span: 1;
      grid-row-end: span 1
  }
}

@media screen and (max-width: 991px) {
  #w-node-_26fb4f54-b58c-c5a9-e703-76fec8e85355-a22a1948,#w-node-_7795b330-993d-36b0-1f20-7fc095ff2174-a22a1948 {
      -ms-grid-column:span 1;
      grid-column-start: span 1;
      -ms-grid-column-span: 1;
      grid-column-end: span 1;
      -ms-grid-row: span 1;
      grid-row-start: span 1;
      -ms-grid-row-span: 1;
      grid-row-end: span 1
  }

  #w-node-_3086395a-0dbd-cc00-d587-1fdc01089cc5-7d2a194b,#w-node-_42fbdfb0-5dd2-6d0d-6f87-c1c9ab42bf23-cba0e198,#w-node-_42fbdfb0-5dd2-6d0d-6f87-c1c9ab42bf23-fb2a194d,#w-node-_43cc9ea7-9b2c-753f-8e4f-e094bdd18aa4-fb2a194d,#w-node-_856a267a-027e-b28a-e877-ca90d1a925bb-cba0e198,#w-node-_856a267a-027e-b28a-e877-ca90d1a925bb-fb2a194d,#w-node-bb9aa27d-3b41-4da9-9c72-6dea1f74d1ec-7d2a194b,#w-node-bb9aa27d-3b41-4da9-9c72-6dea1f74d203-7d2a194b,#w-node-bc25499a-960b-86b2-d3df-b2206c13392a-cba0e198 {
      -ms-grid-row: span 1;
      grid-row-start: span 1;
      -ms-grid-row-span: 1;
      grid-row-end: span 1;
      -ms-grid-column: span 1;
      grid-column-start: span 1;
      -ms-grid-column-span: 1;
      grid-column-end: span 1
  }

  #w-node-_27fc0a9c-9a56-6454-b400-285cd501ba28-1beca73c,#w-node-d6f98bdd-d6a2-2f2e-5eb3-98068ac851be-1beca73c {
      -webkit-box-ordinal-group: 10000;
      -webkit-order: 9999;
      -ms-flex-order: 9999;
      order: 9999
  }

  #w-node-_03d1320e-fdee-2557-4cad-358ff57e964e-5f6a92a7 {
      -webkit-box-ordinal-group: -9998;
      -webkit-order: -9999;
      -ms-flex-order: -9999;
      order: -9999
  }
}

@media screen and (max-width: 479px) {
  #w-node-_770a83e2-74d2-959f-a940-99a83f806024-9a2a1916 {
      -ms-grid-column-align:stretch;
      justify-self: stretch;
      -webkit-align-self: stretch;
      -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch
  }

  #w-node-_5d071e54-7785-95aa-08df-e1aa76c5d9ea-a72a1943 {
      -ms-grid-column: 1;
      grid-column-start: 1;
      -ms-grid-column-span: 3;
      grid-column-end: 4;
      -ms-grid-row: 2;
      grid-row-start: 2;
      -ms-grid-row-span: 1;
      grid-row-end: 3
  }

  #w-node-_6ce50c3c-6041-13c7-d8f7-1c12f58c1da2-a72a1943 {
      -ms-grid-column-align: end;
      justify-self: end;
      -ms-grid-row-align: start;
      align-self: start;
      -ms-grid-column-span: 2;
      grid-column-end: span 2;
      -ms-grid-column: span 2;
      grid-column-start: span 2;
      -ms-grid-row-span: 1;
      grid-row-end: span 1;
      -ms-grid-row: span 1;
      grid-row-start: span 1
  }
}

@font-face {
  font-family: 'Space Grotesk';
  src: url('https://assets.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f017c4772cb9_SpaceGrotesk-SemiBold.otf') format('opentype');
  font-weight: 600;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'Space Grotesk';
  src: url('https://assets.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f02ad1772cb8_SpaceGrotesk-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'Space Grotesk';
  src: url('https://assets.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f0e8ff772cba_SpaceGrotesk-Medium.otf') format('opentype');
  font-weight: 500;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'Space Grotesk';
  src: url('https://assets.website-files.com/600ead1452cf056d0e52dbed/600ead145d96f05b5e772d68_SpaceGrotesk-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}




`


export const CssNamedColors = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgrey: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslateblue: "#8470ff",
  lightslategray: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  violetred: "#d02090",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32",
  transparent: "rgba(0,0,0,0)"
};