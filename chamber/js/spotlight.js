
const api = "json/data.json";

async function displayBusiness() {
    const response = await fetch(api);

    if (response.ok) {
        const businesses = await response.json();
        // console.table(businesses);
        // displayBusinesses(businesses);
        displayEvent(businesses);
        displaySportligth(businesses);
        displaySport2(businesses);
        displaySport3(businesses);
    }
}

function displayEvent(business) {

    const event = document.querySelector('.event');
    let h3 = document.querySelector('h3');
    let logo = document.createElement('img');
    let p = document.createElement('p');

    h3.innerHTML = `${business.companies[0].name}`;
    p.innerHTML = `On the 1st July to 30 July, Hubtel is doing free delivery when you order with the Hubtel mobile app.`

    logo.setAttribute('src', business.companies[0].icon);
    logo.setAttribute('alt', `logo of ${business.companies[0].name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '100px');

    event.appendChild(h3);
    event.appendChild(logo);
    event.appendChild(p);

}

function displaySportligth(business) {
    const sport1 = document.querySelector('#sport1');
    let heading1 = document.querySelector('#sport1 h3');
    let p1 = document.querySelector('#sport1 p');
    let logo1 = document.createElement('img');

    heading1.innerHTML = `${business.companies[8].name}`;

    p1.innerHTML = `Asaase Radio launch this coming Thurday at kingway ST`;

    logo1.setAttribute('src', business.companies[8].icon);
    logo1.setAttribute('alt', `logo of ${business.companies[8].name}`);
    logo1.setAttribute('loading', 'lazy');
    logo1.setAttribute('width', '100px');

    sport1.appendChild(logo1);
    sport1.appendChild(p1);

}

function displaySport2(business) {
    const sport2 = document.querySelector('#sport2');
    let heading2 = document.querySelector('#sport2 h3');
    let p2 = document.querySelector('#sport2 p');
    let logo2 = document.createElement('img');

    heading2.innerHTML = `${business.companies[0].name}`;
    p2.innerHTML = `Lorem m dolor sit amet consectetur adipisicing elit. Nemo`;

    logo2.setAttribute('src', business.companies[0].icon);
    logo2.setAttribute('alt', `logo of ${business.companies[0].name}`);
    logo2.setAttribute('loading', 'lazy');
    logo2.setAttribute('width', '100px');

    sport2.appendChild(logo2);
    sport2.appendChild(p2);

}

function displaySport3(business) {
    const sport3 = document.querySelector('#sport3');
    let heading3 = document.querySelector('#sport3 h3');
    let p3 = document.querySelector('#sport3 p');
    let logo3 = document.createElement('img');

    heading3.innerHTML = `${business.companies[0].name}`;

    p3.innerHTML = `m dolor sit amet consectetur adipisicing elit. Nemo`;

    logo3.setAttribute('src', business.companies[0].icon);
    logo3.setAttribute('alt', `logo of ${business.companies[0].name}`);
    logo3.setAttribute('loading', 'lazy');
    logo3.setAttribute('width', '100px');

    sport3.appendChild(logo3);
    sport3.appendChild(p3);

}

displayBusiness();