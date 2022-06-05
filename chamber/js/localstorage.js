// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".last-visit");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let newVisits = Number(window.localStorage.getItem("new-visits"));

// determine if this is the first visit or display the number of visits.
// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// increment the number of visits.
numVisits = Date.now();
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

if (numVisits !== 0) {
    // numDays = Math.round(Date.now() - numVisits) / (1000*60*60*24);
    numDays = Math.round((Date.now() - numVisits) / 86400000);
	visitsDisplay.textContent = numDays;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

newVisits = Date.now();
localStorage.setItem("new-visits", newVisits);

// show todays date.
// todayDisplay.textContent = Date.now();
