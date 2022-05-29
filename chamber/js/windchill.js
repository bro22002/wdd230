let t = parseFloat(document.querySelector("#temp").innerHTML);

let s = parseFloat(document.querySelector("#input").innerHTML);
const output = document.querySelector("#output");

let windchill = "";

if (t <= 10 && s > 4.8) {
  windchill = windChill(t, s);
  windchill = `${windchill}&#176;C`;
} else {
  windchill = "N/A";
}

function windChill(t, s) {
  f = 3.574 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4725 * t * s ** 0.16;
  return f.toFixed(1);
}

document.querySelector("#output").innerHTML = windchill;
