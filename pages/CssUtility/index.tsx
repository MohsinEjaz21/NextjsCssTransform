import { useState } from "react";
import swal from 'sweetalert';
import { CssNamedColors, FakeTemplates } from '../../inputcss';
var extractor = require('css-color-extractor');
var Color = require('easy-color');


export default function CssTransform() {

  const [inputCss, setInputCss] = useState(FakeTemplates[0]);
  const [outputCss, setOutputCss] = useState('');
  const [colorArr, setColorArr] = useState([]);
  const [fakeTemplateIndex, setFakeTemplateIndex] = useState(0);


  function handleTransform() {
    let tempCss = inputCss;
    let colorIndex = 1;
    let namedColors = Object.keys(CssNamedColors);
    // Correcting css colors so that only get true colors when extract

    tempCss = replaceNamedColorWithHex(tempCss, namedColors);

    // setOutputCss(tempCss);
    // return
    // console.log("tempCss", tempCss);

    let tempColorsArr: any = [];
    let generatedContentArea: any = document.querySelector('div.right-section > pre');
    if (generatedContentArea) {
      generatedContentArea.style.opacity = '0';
    }
    let tempColors = removeDuplicateAndSortColors(tempCss);

    // tempColors.forEach((colorVal: any, index) => {
    //   console.log(`new_color_${index}`, colorVal);
    // })

    tempColors = tempColors.map((colorVal: any, index: number) => {
      let color = colorVal.replace(/\s/g, '');
      let currCssVar = `--color__${colorIndex}`;
      let colorName = `var(${currCssVar})`;
      let matchColorLen = (countMatchColors(tempCss, color) || []).length
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

    tempColorsArr.sort(sortColorByCount);
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
            <button className="btn btn-primary" onClick={fakeTemplateChange}>
              Use Fake CSS
            </button>
            <button className="margin-left-15px btn btn-primary" onClick={() => setInputCss('/* Paste Your Css */')} >
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
          <div>{colorArr.length > 0 && <>{outputCssMessage()}</>}</div>
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
          {colorArr.length > 0 && <>{overrideColorMessage()}</>}
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





  function removeDuplicateAndSortColors(tempCss: string) {
    let tempColors = extractor.fromCss(tempCss).filter((colorVal: any) => colorVal !== '0');
    tempColors = makeArrayUnique(tempColors);
    let hexColors = tempColors.filter((colorVal: any) => colorVal.indexOf('#') !== -1);
    let otherThanHexColors = tempColors.filter((colorVal: any) => colorVal.indexOf('#') == -1);
    hexColors.sort((a, b) => b.length - a.length);
    tempColors = [...hexColors, ...otherThanHexColors];
    return tempColors;
  }

  function replaceNamedColorWithHex(tempCss: string, namedColors: string[]) {
    tempCss = tempCss.split('\n').map(line => {
      // tempLogs(line)
      if (line.indexOf(':') > -1
        && line.indexOf('{') === -1
        && line.indexOf(':hover') === -1
        && line.indexOf(':active') === -1
        && line.indexOf(':visited') === -1
        && line.indexOf(':focus') === -1) {
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
        });

      }
      return line;
    }).join('\n');
    return tempCss;
  }

  function fakeTemplateChange() {
    let fakeIndex = fakeTemplateIndex;
    if (fakeIndex == FakeTemplates.length - 1) {
      fakeIndex = 0;
    } else {
      fakeIndex++;
    }
    setFakeTemplateIndex(fakeIndex);
    setInputCss(FakeTemplates[fakeIndex])
  }

  function copyToClipBoard() {
    var copyText = document.getElementById("finalContent");
    navigator.clipboard.writeText(copyText!.innerText)
    swal({
      title: "Copied!",
      text: "Your CSS is copied to clipboard",
      icon: "success",
      timer: 1000,
      buttons: [false]
    });
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function replaceAll(str, find, replace) {
    return str.replaceAll(find, replace);
  }

  function countMatchColors(str, find) {
    return str.match(new RegExp(escapeRegExp(find), 'g'));
  }

  function makeArrayUnique(arr) {
    return arr.filter((item, pos) => arr.indexOf(item) == pos)
  };

  function sortColorByCount(a, b) {
    var countA = a.count;
    let countB = b.count;
    if (countA < countB) return 1;
    if (countA > countB) return -1;
    return 0;
  }

  function outputCssMessage() {
    return <><div className="alert-message">
      {`/* ColorLength is ${colorArr.length} \n Note Point :: Named colors are transform into \n respective hex format to avoid color repetition \n Original Colors are below */ `}
    </div><br /></>
  }

  function overrideColorMessage() {
    return <><div className="alert-message">
      {`/* ======================== \n Override colors with Rgba \n ======================== */ `}
    </div><br /></>
  }

  function tempLogs(line) {
    if (line.indexOf('url(https://1.www.s81c.com/common/v17e/i/buttons/btn-sprite.png) no-repeat 0 0 transparent') > -1) {
      console.log(`
    line: ${line}
    ${line.indexOf(':')} 
    ${line.indexOf('{')}
    ${line.indexOf(':hover')}
    ${line.indexOf(':active')}
    ${line.indexOf(':visited')}
    ${line.indexOf(':focus')}
    ${line.substring(line.indexOf(':') + 1)}
    `)
    }
  }
}
