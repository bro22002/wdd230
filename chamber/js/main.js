// select the elements to manipulate (output to)
const datefield = document.querySelector("#currentDate");
const timestamp = document.querySelector("#hidden");

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

const banner = document.querySelector('#banner');
if (now.getDay() === 1 || now.getDay() === 2) {
	banner.style.display = "block";
}
else {
	banner.style.display = "none";
}

const close = document.querySelector('#close');
close.addEventListener('click', () => {
	banner.style.display = "none";
})