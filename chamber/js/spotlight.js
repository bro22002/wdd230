
const api = "json/data.json";

async function displayBusiness() {
    const response = await fetch(api);

    if (response.ok) {
        const businesses = await response.json();
        // console.table(businesses);
        // displayBusinesses(businesses);
        displayEvent(businesses);
        displaySpotligth(businesses);
        displaySpot2(businesses);
        displaySpot3(businesses);
    }
}

function displayEvent(business) {

    const event = document.querySelector('.event');
    let h3 = document.querySelector('h3');
    let logo = document.createElement('img');
    let p = document.createElement('p');

    h3.innerHTML = `${business.companies[0].name}📆`;
    p.innerHTML = `On the 1st July to 30 July, Hubtel is doing free delivery when you order with the Hubtel mobile app.`

    logo.setAttribute('src', business.companies[0].icon);
    logo.setAttribute('alt', `logo of ${business.companies[0].name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '100px');

    event.appendChild(h3);
    event.appendChild(logo);
    event.appendChild(p);

}

function displaySpotligth(business) {
    const spot1 = document.querySelector('#sport1');
    let heading1 = document.querySelector('#sport1 h3');
    let p1 = document.querySelector('#sport1 p');
    let logo1 = document.createElement('img');

    heading1.innerHTML = `${business.companies[8].name}`;

    p1.innerHTML = `Asaase Radio launch this coming Thurday at kingway ST`;

    logo1.setAttribute('src', business.companies[8].icon);
    logo1.setAttribute('alt', `logo of ${business.companies[8].name}`);
    logo1.setAttribute('loading', 'lazy');
    logo1.setAttribute('width', '100px');

    spot1.appendChild(logo1);
    spot1.appendChild(p1);

}

function displaySpot2(business) {
    const spot2 = document.querySelector('#sport2');
    let heading2 = document.querySelector('#sport2 h3');
    let p2 = document.querySelector('#sport2 p');
    let logo2 = document.createElement('img');
    let site = document.createElement('p');
    let phone = document.createElement('p');

    heading2.innerHTML = `${business.companies[6].name}`;
    p2.innerHTML = `Learn how to code, web design and development`;

    logo2.setAttribute('src', business.companies[6].icon);
    logo2.setAttribute('alt', `logo of ${business.companies[6].name}`);
    logo2.setAttribute('loading', 'lazy');
    logo2.setAttribute('width', '100px');

    site.innerHTML = `${business.companies[6].website.slice(7, length-1)}`;
    // site.innerHTML = `codecoast.com.gh`;
    phone.innerHTML = `${business.companies[6].phone}`;

    spot2.appendChild(logo2);
    spot2.appendChild(p2);
    spot2.appendChild(site);
    spot2.appendChild(phone);
}

function displaySpot3(business) {
    const spot3 = document.querySelector('#sport3');
    let heading3 = document.querySelector('#sport3 h3');
    let p3 = document.querySelector('#sport3 p');
    let logo3 = document.createElement('img');
    let site = document.createElement('p');
    let phone = document.createElement('p');

    heading3.innerHTML = `${business.companies[3].name}`;

    p3.innerHTML = `Need a place to host an event or a place to lodge for the night? We got you, call`;

    logo3.setAttribute('src', business.companies[3].icon);
    logo3.setAttribute('alt', `logo of ${business.companies[3].name}`);
    logo3.setAttribute('loading', 'lazy');
    logo3.setAttribute('width', '100px');

    site.innerHTML = `${business.companies[3].website.slice(8, length-1)}`;
    phone.innerHTML = `${business.companies[3].phone}`;

    spot3.appendChild(logo3);
    spot3.appendChild(p3);
    spot3.appendChild(phone);
    spot3.appendChild(site);

}

displayBusiness();