import _ from 'lodash';


// testing out webpack initial setup of index.js
console.log("testing index.js webpack")



function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());