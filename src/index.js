import _ from 'lodash';
import './style.css';
import printMe from './print';
if (process.env.NODE_ENV !== 'production') {
  console.log('-----------dev environment----------');
}
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var picWrapper = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' eee');
  element.classList.add('hello');

  btn.innerHTML = 'Click me and check the console change!';
  btn.onclick = printMe;

  picWrapper.classList.add('img-wrapper');

  element.appendChild(btn);
  element.appendChild(picWrapper);

  return element;
}

document.body.appendChild(component());