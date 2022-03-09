import { useEffect, useState } from "react";
import { DefaultCssTemplate } from '../../inputcss';
var extractor = require('css-color-extractor');


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

  useEffect(() => {
    let tempCss = inputCss;
    let tempColorsArr: any = [];
    let tempColors = extractor.fromCss(tempCss).filter((colorVal: any) => colorVal !== '0');

    console.log("tempColors", tempColors);

    tempColors.forEach((colorVal: any, index: number) => {
      let color = colorVal.replace(/\s/g, '');
      let currCssVar = `--color__${index + 1}`;
      let colorName = `var(${currCssVar})`;
      let matchColorLen = (countMatch(tempCss, color) || []).length
      let tempColorObj = {}
      tempColorObj['key'] = currCssVar;
      tempColorObj['value'] = colorVal;
      tempColorObj['count'] = matchColorLen;
      tempColorsArr.push(tempColorObj);
      tempCss = replaceAll(tempCss, color, colorName);
    });

    console.log(" NEW CSS ")
    console.log(tempCss)

    tempColorsArr.sort(sortColorBasedOnCount);
    setOutputCss(tempCss);
    setColorArr(tempColorsArr);
    return () => { }
  }, [inputCss])



  return (
    <>

      {/* Text box for input css */}

      <div className="split left">
        <textarea
          className="inputcss-textarea"
          value={inputCss}
          onChange={(e) => setInputCss(e.target.value)}
        />
      </div>
      <div className="split right">
        <pre>
          <code className="language-css">
            :root &#123;
            {colorArr.map((color: any, index) => {
              return (
                <div key={index}>
                  {color.key} : {color.value};         /* {color.count} */
                </div>
              )
            })}
            &#125;
            <br />
            {JSON.parse(JSON.stringify(outputCss, null, 2))}
          </code>
        </pre>


      </div>



    </>
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