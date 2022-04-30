// get the the span element
const yrSpan = document.querySelector('#year');
// get the current year
const currentYr = new Date().getFullYear();
// set the year span element's text to the current year
yrSpan.textContent = currentYr;

document.getElementById("modify").innerHTML = document.lastModified;