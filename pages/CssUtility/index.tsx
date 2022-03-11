import { useState } from "react";
import swal from 'sweetalert';
import { CssNamedColors, FakeTemplates } from '../../inputcss';
var extractor = require('css-color-extractor');
var Color = require('easy-color');

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function replaceAll(str, find, replace) {
  return str.replaceAll(find, replace);
}

// function exactMatchReplace(str, find, replace) {
//   return str.replaceAll(new RegExp(escapeRegExp(find), 'g'), replace);
// }

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

  const [inputCss, setInputCss] = useState(FakeTemplates[0]);
  const [outputCss, setOutputCss] = useState('');
  const [colorArr, setColorArr] = useState([]);
  const [fakeTemplateIndex, setFakeTemplateIndex] = useState(0);


  function changeTemplate() {
    let fakeIndex = fakeTemplateIndex;
    if (fakeIndex == FakeTemplates.length - 1) {
      fakeIndex = 0;
    } else {
      fakeIndex++;
    }

    // console.log(fakeIndex);

    setFakeTemplateIndex(fakeIndex);
    setInputCss(FakeTemplates[fakeIndex])
  }

  function handleTransform() {
    let tempCss = inputCss;
    let colorIndex = 1;
    let namedColors = Object.keys(CssNamedColors);
    // Correcting css colors so that only get true colors when extract
    tempCss = tempCss.split('\n').map(line => {

      if (line.indexOf('url(https://1.www.s81c.com/common/v17e/i/buttons/btn-sprite.png) no-repeat 0 0 transparent') > -1) {
        // console.log("here ")

        //     console.log(`
        //   line: ${line}
        //   ${line.indexOf(':')} 
        //   ${line.indexOf('{')}
        //   ${line.indexOf(':hover')}
        //   ${line.indexOf(':active')}
        //   ${line.indexOf(':visited')}
        //   ${line.indexOf(':focus')}
        //   ${line.substring(line.indexOf(':') + 1)}
        // `)
      }

      if (line.indexOf(':') > -1
        && line.indexOf('{') === -1
        && line.indexOf(':hover') === -1
        && line.indexOf(':active') === -1
        && line.indexOf(':visited') === -1
        && line.indexOf(':focus') === -1
      ) {
        let secondPart = line.substring(line.indexOf(':') + 1);

        if (secondPart.indexOf('rgb') > -1 && secondPart.indexOf(',') > -1) {
          line = replaceAll(line, ', ', ',');
          line = replaceAll(line, ' ,', ',');
        }

        namedColors.forEach(color => {
          let regex = new RegExp('\\b' + color + '\\b');
          let regex1 = new RegExp('\\b' + color + '-' + '\\b');
          let regex2 = new RegExp('\\b' + '-' + color + '\\b');

          if (secondPart.match(regex) && !secondPart.match(regex1) && !secondPart.match(regex2)) {
            line = replaceAll(line, color, CssNamedColors[color]);
          }
        })

      }
      return line;
    }).join('\n');;

    // setOutputCss(tempCss);
    // return
    // console.log("tempCss", tempCss);

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

    // tempColors.forEach((colorVal: any, index) => {
    //   console.log(`new_color_${index}`, colorVal);
    // })

    tempColors = tempColors.map((colorVal: any, index: number) => {
      let color = colorVal.replace(/\s/g, '');
      let currCssVar = `--color__${colorIndex}`;
      let colorName = `var(${currCssVar})`;
      let matchColorLen = (countMatch(tempCss, color) || []).length
      let tempColorObj = {}
      let parser = new Color(colorVal);
      let rgbColor = parser.toRGBA();

      let foundColorIndex = tempColorsArr.findIndex(color => color.value == rgbColor.toString())
      if (foundColorIndex > -1) {
        currCssVar = tempColorsArr[foundColorIndex]['key'];
        colorName = `var(${currCssVar})`;
        tempColorsArr[foundColorIndex]['count'] = tempColorsArr[foundColorIndex]['count'] + matchColorLen;
      }
      else {
        tempColorObj['key'] = currCssVar;
        tempColorObj['value'] = rgbColor;
        tempColorObj['original'] = colorVal;
        tempColorObj['count'] = matchColorLen;
        tempColorsArr.push(tempColorObj);
        colorIndex++;
      }

      tempCss = replaceAll(tempCss, color, colorName);
      // tempCss = replaceAll(tempCss, `.${colorName}`, `.${colorVal}`);

      return rgbColor;
    });

    tempCss = replaceAll(tempCss, '@charset "utf-8";', '');

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
            Enter Your CSS 🌸
          </div>


          <div className="action-btns" >
            <button className="btn btn-primary" onClick={changeTemplate}>
              Use Fake CSS
            </button>
            <button className="margin-left-15px btn btn-primary" onClick={() => setInputCss('/* Paste Your Css */ \n\n')}>
              Paste Your Own
            </button>
          </div>


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
          <div className="action-btns" >
            <button className="btn btn-primary" onClick={handleTransform}>
              🌈 Make CSS Beutiful
            </button>
            <button className="margin-left-15px btn btn-primary" onClick={copyToClipBoard}>
              ✅ Copy New CSS
            </button>
          </div>
        </div>

        <pre id="finalContent" className="generated-css content-area slideInRight">
          <div>{colorArr.length > 0 && <>{`/* ColorLength is ${colorArr.length} */`}</>}</div>
          <div>{colorArr.length > 0 && <>{`/* Note Point :: Named colors are transform into 
            respective hex format to avoid color repetition )*/`}</>}</div>

          <div>{colorArr.length > 0 && <>{`/* Original Colors are below */`}</>}</div>
          <br></br>

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
          {colorArr.length > 0 && <div>{` /* Override colors with Rgba */`}</div>}
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



        // line = exactMatchReplace(line, 'black', CssNamedColors.black);

        // if (line.split(':')[0].indexOf('white') < 0) {
        //   line = exactMatchReplace(line, 'white', CssNamedColors.white);
        // }
        // if (line.includes('transparent')) {
        //   line = exactMatchReplace(line, 'transparent', "rgba(0,0,0,0)");
        // }
            // line = line.replace(new RegExp(escapeRegExp(color), 'g'), CssNamedColors[color]);

