// select the elements to manipulate (output to)
const datefield = document.querySelector("#currentDate");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = fulldate;

// get the the span element
const yrSpan = document.querySelector('#year');
// get the current year
const currentYr = new Date().getFullYear();
// set the year span element's text to the current year
yrSpan.textContent = currentYr;

document.getElementById("modify").innerHTML = document.lastModified;

function myFunction() {
	var x = document.querySelector(".navigation");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}