import { message,log } from "./trial.mjs";
// somevalue is the name given for the value exported
// do not curley braces
import somevalue from './trial.mjs'
console.log(message);
console.log(somevalue);

import * as util  from "./trial.mjs";
console.log(util.message);
console.log(util.default); // only one so call default

log();

