{
  const welcome = () => {
    console.log(`Hello to my money exchange
    Enjoy ;)`);
  };
  welcome();
}
{
  const calculateResult = (amount, currency) => {
    const USD = 4.4;
    const EUR = 4.6;
    const GBP = 5.0;
    switch (currency) {
      case "USD":
        return amount / USD;
      case "EUR":
        return amount / EUR;
      case "GBP":
        return amount / GBP;
    }
  };
  const updateResultText = (amount, result, currency) => {
    const yourcurrencyElement = document.querySelector(".js-yourcurrency");
    yourcurrencyElement.innerHTML = `${amount.toFixed(
      2
    )} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
  };

  const OnFormSubmit = (event) => {
    event.preventDefault();
    const writeamount = document.querySelector(".js-amount");
    const exchangerate = document.querySelector(".js-selectRate");
    const amount = +writeamount.value;
    const currency = exchangerate.value;
    const result = calculateResult(amount, currency);
    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formelement = document.querySelector(".js-form");
    formelement.addEventListener("submit", OnFormSubmit);
  };
  init();

  const reset = () => {
    const resetElement = document.querySelector(".js-reset");
    const yourcurrencyElement = document.querySelector(".js-yourcurrency");
    resetElement.addEventListener("click", () => {
      yourcurrencyElement.innerHTML = "N/a";
    });
  };
  reset();
}
