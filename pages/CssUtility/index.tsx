import { useState } from "react";
import swal from 'sweetalert';
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

function leftPad(number, targetLength) {
  var output = number + '';
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return output;
}

function sortColorBasedOnCount(a, b) {
  var countA = a.count;
  let countB = b.count;
  if (countA < countB) return 1;
  if (countA > countB) return -1;
  return 0;
}

function copyToClipBoard() {
  var copyText = document.getElementById("finalContent");
  navigator.clipboard.writeText(copyText!.innerText)

  // swal for 2s  then close
  swal({
    title: "Copied!",
    text: "Your CSS is copied to clipboard",
    icon: "success",
    timer: 1000,
    buttons: [false]
  });

}

export default function CssTransform() {
  const [inputCss, setInputCss] = useState(DefaultCssTemplate);
  const [outputCss, setOutputCss] = useState('');
  const [colorArr, setColorArr] = useState([]);

  function handleTransform() {
    let tempCss = inputCss;
    let tempColorsArr: any = [];
    let generatedContentArea: any = document.querySelector('div.right-section > pre');
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
      // var formattedNumber = ("0" + index).slice(-2);
      // let currIndex: any = formattedNumber // 01

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
          <button className="btn btn-primary" onClick={copyToClipBoard}>
            Copy CSS
          </button>
        </div>

        <pre id="finalContent" className="generated-css content-area slideInRight">
          <div>{colorArr.length > 0 && <>{`:root {`}</>}</div>
          {colorArr.map((color: any, index) => {
            return (
              <>
                <div key={index} className="color-variables floatLeft">
                  {color.key}: {color.original};
                </div>
                <div >
                     /* {color.count} */
                </div>
                {/* <br /> */}
              </>
            )
          })}

          <br />
          {colorArr.length > 0 && <div>{` /* Override with Rgba */`}</div>}
          <br /><br />
          {colorArr.map((color: any, index) => {
            return (
              <>
                <div key={index} className="color-variables floatLeft">
                  {color.key}: {color.value};
                </div>
                <div >
                     /* {color.count} */
                </div>
                {/* <br /> */}
              </>
            )
          })}
          {colorArr.length > 0 && <>{`}`}</>}
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