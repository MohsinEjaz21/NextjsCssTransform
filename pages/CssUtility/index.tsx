import { useState } from "react";
import { DefaultCssTemplate } from '../../inputcss';
var extractor = require('css-color-extractor');
var Color = require('easy-color');

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function countMatch(str, find) {
  return str.match(new RegExp(escapeRegExp(find), 'g'));
}

function sortColorBasedOnCount(a, b) {
  var countA = a.count;
  let countB = b.count;
  if (countA < countB) return 1;
  if (countA > countB) return -1;
  return 0;
}

export default function CssTransform() {
  const [inputCss, setInputCss] = useState(DefaultCssTemplate);
  const [outputCss, setOutputCss] = useState('');
  const [colorArr, setColorArr] = useState([]);

  function handleTransform() {
    let tempCss = inputCss;
    let tempColorsArr: any = [];
    let generatedContentArea = document.querySelector('div.right-section > pre');
    if (generatedContentArea) {
      generatedContentArea.style.opacity = '0';
    }



    var options = {
      withoutGrey: false, // set to true to remove rules that only have grey colors
      withoutMonochrome: false, // set to true to remove rules that only have grey, black, or white colors
      colorFormat: 'hexString' // transform colors to one of the following formats: hexString, rgbString, percentString, hslString, hwbString, or keyword
    };
    let tempColors = extractor.fromCss(tempCss).filter((colorVal: any) => colorVal !== '0');

    // console.log("tempColors", tempColors);


    tempColors = tempColors.map((colorVal: any, index: number) => {
      let color = colorVal.replace(/\s/g, '');
      let currCssVar = `--color__${index + 1}`;
      let colorName = `var(${currCssVar})`;
      let matchColorLen = (countMatch(tempCss, color) || []).length
      let tempColorObj = {}

      let parser = new Color(colorVal);
      let rgbColor = parser.toRGBA();
      // You can also add: # 0af, rgb (0, 170, 255), hsl (..., etc ...
      // console.log({ "RGBA": parser.toRGBA(), "color": colorVal });
      // parser.toHEX();

      tempColorObj['key'] = currCssVar;
      tempColorObj['value'] = rgbColor;
      tempColorObj['original'] = colorVal;
      tempColorObj['count'] = matchColorLen;
      tempColorsArr.push(tempColorObj);
      tempCss = replaceAll(tempCss, color, colorName);

      // set Opacity 1 after 200ms
      setTimeout(() => {
        if (generatedContentArea) {
          generatedContentArea.style.opacity = '1';
        }
      }, 200);

      return rgbColor;
    });

    // console.log(" NEW CSS ")
    // console.log(tempCss)

    tempColorsArr.sort(sortColorBasedOnCount);
    setOutputCss(tempCss);
    setColorArr(tempColorsArr);
  }

  // useEffect(() => {
  //   handleTransform()
  //   return () => { }
  // }, [])



  return (
    <div className="container">

      {/* Text box for input css */}
      <div className="svg hide" id="svg"></div>

      <div className="left-section">
        <div className="section-header">
          <div className="heading-primary">
            Enter Yours CSS
          </div>
          <button id="transformBtn" className="btn btn-primary" onClick={handleTransform}>
            Transform (Click Me)
          </button>
        </div>
        <textarea
          className="inputcss-textarea content-area"
          value={inputCss}
          onChange={(e) => setInputCss(e.target.value)}
        />
      </div>
      <div className="right-section" >
        <div className="section-header">
          <div className="heading-primary">
            Dynamic CSS 🎉
          </div>
        </div>

        <pre className="generated-css content-area slideInRight">

          {colorArr && `:root &#123;` && colorArr.map((color: any, index) => {
            return (
              <div key={index}>
                {color.key} : {color.value};         /* {color.count} ---- {color.original} */
              </div>
            )
          })}
          {colorArr.length > 0 && `&#125;`}
          <br />
          {JSON.parse(JSON.stringify(outputCss, null, 2))}
        </pre>


      </div>



    </div>
  )
}


// let colorsStringify = JSON.stringify(tempColorObj, null, 2)
// const tempFormatedColors = colorsStringify.replace(/"([^"]+)":/g, '$1:').split(',').join(';');

{/* {colors.map((color, index) => {
        return (
          <div key={index}>
            <div style={{ backgroundColor: color }}>
              {index} ----  {color}
            </div>
          </div>
        )
      })} */}