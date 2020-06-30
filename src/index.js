import _ from 'lodash';
import style from './style.css';
import printMe from './print';
import Pic from '../static/img/pic.png';
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var dom = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add(style.bg);

  btn.innerHTML = `<div class="${style.hello}">  Click me and check the console change!</div>`;
  btn.onclick = printMe; 
  element.appendChild(btn);

  dom.innerHTML = `<img  src='${Pic}' width="100px" />`;
  dom.classList.add(style.hello);
  element.appendChild(dom); 
  
  return element;
}

document.body.appendChild(component());


if(module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}