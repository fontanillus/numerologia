let queryStrings = new URLSearchParams(window.location.search);
let parametroGet = Object.fromEntries(queryStrings.entries());
console.log(parametroGet);
