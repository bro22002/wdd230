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
        let phone = document.createElement('p');
        let website = document.createElement('a');

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

        // add the card elements
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        // add to the div.class in the HTML
        document.querySelector('div.cards').appendChild(card);
    });
}

displayBusiness();