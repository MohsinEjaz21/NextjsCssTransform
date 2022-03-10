import { useState } from "react";
import swal from 'sweetalert';
import { CssNamedColors, DefaultCssTemplate } from '../../inputcss';
var extractor = require('css-color-extractor');
var Color = require('easy-color');

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  // return str.replaceAll(find, replace);
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);

}

function countMatch(str, find) {
  return str.match(new RegExp(escapeRegExp(find), 'g'));
}
const uniqueArray = (arr) => arr.filter(function (item, pos) {
  return arr.indexOf(item) == pos;
})

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
    let namedColors = Object.keys(CssNamedColors);

    tempCss = tempCss.split('\n').map(line => {

      if (line.includes(':') && !line.includes('{')) {
        line = line.replace(new RegExp(escapeRegExp("black"), 'g'), "#000000");

        if (line.split(':')[0].indexOf('white') < 0) {
          line = line.replace(new RegExp(escapeRegExp("white"), 'g'), "#ffffff");
        }
        if (line.includes('transparent')) {
          line = line.replace(new RegExp(escapeRegExp("transparent"), 'g'), "rgba(0,0,0,0)");
        }

        namedColors.forEach(color => {
          if (line.includes(color)) {
            line = line.replace(new RegExp(escapeRegExp(color), 'g'), CssNamedColors[color]);
          }
        })
      }
      return line;
    }).join('\n');;


    let tempColorsArr: any = [];
    let generatedContentArea: any = document.querySelector('div.right-section > pre');
    if (generatedContentArea) {
      generatedContentArea.style.opacity = '0';
    }
    let tempColors = extractor.fromCss(tempCss).filter((colorVal: any) => colorVal !== '0');
    tempColors = uniqueArray(tempColors);
    let hexColors = tempColors.filter((colorVal: any) => colorVal.indexOf('#') !== -1);
    let otherThanHexColors = tempColors.filter((colorVal: any) => colorVal.indexOf('#') == -1);
    hexColors.sort((a, b) => b.length - a.length)
    tempColors = [...hexColors, ...otherThanHexColors];

    tempColors = tempColors.map((colorVal: any, index: number) => {
      let color = colorVal.replace(/\s/g, '');
      let currCssVar = `--color__${index + 1}`;
      let colorName = `var(${currCssVar})`;
      let matchColorLen = (countMatch(tempCss, color) || []).length
      let tempColorObj = {}
      let parser = new Color(colorVal);
      let rgbColor = parser.toRGBA();

      // let findIndex = tempColorsArr.findIndex(color => color.value == rgbColor.toString())
      // if (findIndex > -1) {
      //   currCssVar = tempColorsArr[findIndex]['key'];
      //   colorName = `var(${currCssVar})`;
      //   tempColorsArr[findIndex]['count'] = tempColorsArr[findIndex]['count'] + matchColorLen;
      // }

      // else {
      tempColorObj['key'] = currCssVar;
      tempColorObj['value'] = rgbColor;
      tempColorObj['original'] = colorVal;
      tempColorObj['count'] = matchColorLen;
      tempColorsArr.push(tempColorObj);
      // }

      tempCss = replaceAll(tempCss, color, colorName);
      tempCss = replaceAll(tempCss, `.${colorName}`, `.${colorVal}`);

      return rgbColor;
    });

    setTimeout(() => {
      if (generatedContentArea) {
        generatedContentArea.style.opacity = '1';
      }
    }, 200);

    tempColorsArr.sort(sortColorBasedOnCount);
    setOutputCss(tempCss);
    setColorArr(tempColorsArr);
  }

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
                <div>
                  {` /*  ${color.count} */`}
                </div>
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
                  {` /* ${color.count} */`}
                </div>
              </>
            )
          })}
          {colorArr.length > 0 && <div>{`}`}</div>}
          <br />
          {JSON.parse(JSON.stringify(outputCss, null, 2))}
        </pre>


      </div>



    </div>
  )
}

