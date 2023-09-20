
let writeamount = document.querySelector(".js-amount");
let formelement = document.querySelector(".js-form");
let exchangerate = document.querySelector(".js-input-rate");
let yourcurrencyElement = document.querySelector(".js-yourcurrency");

formelement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = writeamount.value;
    let currency = exchangerate.value;

    let convertedCurrency = amount / currency;

    yourcurrencyElement.innerText = convertedCurrency.toFixed(2);
    console.log(convertedCurrency);
});