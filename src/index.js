import _ from 'lodash';
import './style.css';
import printMe from './print';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var dom = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console change!';
  btn.onclick = printMe; 
  element.appendChild(btn);

  dom.innerHTML = '<img  src="./img/pic.png" width="100px" />';

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