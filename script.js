const writeamount = document.querySelector(".js-amount");
const formelement = document.querySelector(".js-form");
const exchangerate = document.querySelector(".js-selectRate"); 
const yourcurrencyElement = document.querySelector(".js-yourcurrency");
const resetElement = document.querySelector(".js-reset");

const USD = 4.40;
const EUR = 4.60;
const GBP = 5.00;

formelement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = parseFloat(writeamount.value); 
    const currency = exchangerate.value;
    let result;

    switch (currency) {
        case "USD":
            result = amount / USD;
            break; 

        case "EUR":
            result = amount / EUR;
            break; 
        case "GBP":
            result = amount / GBP;
            break; 
    }

    yourcurrencyElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});

resetElement.addEventListener("click", () => {
    writeamount.value = ""; 
    yourcurrencyElement.innerHTML = "N/a"; 
});
