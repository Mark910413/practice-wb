import _ from 'lodash';
import './style.css';
import Pic from './pic.png';

function component() {
  var element = document.createElement('div');
  var img = new Image();
  img.src = Pic;
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  element.appendChild(img); 
  return element;
}

document.body.appendChild(component());


const foo = new Promise((resolve) => {
  setTimeout(() => {
    resolve(111);
  }, 100);
});

console.log([1, 2, 3, 4, 6].includes(1));