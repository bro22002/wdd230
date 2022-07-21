// const templesJson = "json/temples.json";
const cards = document.querySelector(".grid");
let results = null;

// async function to retrieve json data
async function getTemples() {
    try {
        const response = await fetch("json/temples.json");
        if (response.ok) {
            const temples = await response.json();
            console.table(temples); // test the data from the API fetch
            displayTemples(temples);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// fucntion to display temples
function displayTemples(temple) {
    temple.temples.forEach((temple) => {
        // create elements to be added to the html
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let address = document.createElement("p");
        let email = document.createElement("p");
        let phone = document.createElement("p");
        let like = document.createElement("img");

        // change the text content of the created elements
        h2.innerHTML = `${temple.name}`;
        address.innerHTML = `Address: ${temple.address}`;
        phone.innerHTML = `Phone: ${temple.telephone}`;
        email.innerHTML = `Email: ${temple.email}`;

        // create the temple image with setAttribute method
        image.setAttribute("src", temple.image);
        image.setAttribute("alt", temple.name);
        image.setAttribute("loading", "lazy");

        // Add the children to the section
        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(email);

        // Add the created section to the article .grid
        document.querySelector("article.grid").appendChild(card);
    });
}

getTemples();

/******* this section controls the display of the temples in grid / list *******/
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});
