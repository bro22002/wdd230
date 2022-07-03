const url = "json/data.json";
// const cards = document.querySelect('.cards');

async function displayBusiness() {
    const response = await fetch(url);

    if (response.ok) {
        const businesses = await response.json();
        // console.table(businesses);
        displayBusinesses(businesses);
    }
}

function displayBusinesses(business) {
    business.companies.forEach(business => {
        // create elements to add to the document
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('a');
        let website = document.createElement('a');
        let tel = document.createElement('p');

        // change the textContent property of the card elements
        address.innerHTML = `${business.address}`;
        phone.innerHTML = `${business.phone}`;
        website.innerHTML = `${business.website}`;
        h2.innerHTML = `${business.name}`;

        // build the logo
        logo.setAttribute('src', business.icon);
        logo.setAttribute('alt', `logo of ${business.name}`);
        logo.setAttribute('loading', 'lazy');
        website.setAttribute('href', business.website);

        // phone link
        phone.setAttribute('href:', `tel:${business.phone}`);
        // phone.setAttribute('href', business.phone);
        tel.appendChild(phone);

        // add the card elements
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(tel);
        card.appendChild(website);

        // add to the div.class in the HTML
        document.querySelector('div.cards').appendChild(card);
    });
}

displayBusiness();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}