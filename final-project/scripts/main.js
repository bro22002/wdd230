// function for humburger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    // console.log("It worked"); // testing purpose
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// get the current date in full
const dateNow = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(dateNow);
document.querySelector("#currentDate").innerHTML = fullDate;

// display the current year in the footer
document.querySelector("#year").innerHTML = new Date().getFullYear();

// display the last modification date in the footer using the lastModified module
document.querySelector("#modify").innerHTML = document.lastModified;