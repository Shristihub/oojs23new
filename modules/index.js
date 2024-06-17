// somevalue is the name given for the value exported
import {message} from './demo2.js'
import somevalue from './demo2.js'

const div = document.createElement('div');
const header = document.createElement('h1');
header.textContent = message;
header.textContent = somevalue;
div.appendChild(header)
document.body.appendChild(div);
