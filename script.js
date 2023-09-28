{
  const writeamount = document.querySelector(".js-amount");
  const formelement = document.querySelector(".js-form");
  const exchangerate = document.querySelector(".js-selectRate");
  const yourcurrencyElement = document.querySelector(".js-yourcurrency");
  const resetElement = document.querySelector(".js-reset");

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

 const init = () => {
    formelement.addEventListener("submit", (event) => {
        event.preventDefault();
        const amount = +writeamount.value;
        const currency = exchangerate.value;
        const result = calculateResult(amount, currency);
    
        yourcurrencyElement.innerHTML = `${amount.toFixed(
          2
        )} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
      });
    
      resetElement.addEventListener("click", () => {
        writeamount.value = "";
        yourcurrencyElement.innerHTML = "N/a";
      });
 };
 init();
}
