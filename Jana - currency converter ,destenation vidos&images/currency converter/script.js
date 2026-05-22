function convertCurrency() {
  var from = document.getElementById('fromCurrency').value;
  var to = document.getElementById('toCurrency').value;
  var amount = document.getElementById('amount').value;
  var resultDiv = document.getElementById('result');

  if (amount === "" || amount <= 0) {
    resultDiv.innerText = "Please enter a valid amount.";
    resultDiv.classList.add("show-result");
    return;
  }

  var rates = {
    "EGP": { "USD": 0.032, "EUR": 0.030, "GBP": 0.026 },
    "USD": { "EGP": 31.00, "EUR": 0.93, "GBP": 0.80 },
    "EUR": { "EGP": 33.00, "USD": 1.08, "GBP": 0.86 },
    "GBP": { "EGP": 39.00, "USD": 1.25, "EUR": 1.16 }
  };

  if (from === to) {
    resultDiv.innerText = "Please select different currencies.";
  } else {
    var converted = amount * rates[from][to];
    resultDiv.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
  }

  resultDiv.classList.add("show-result");
}

const toggleButton = document.getElementById("toggleMode");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


// befor the header and the footer

// function convertCurrency() {
//   var from = document.getElementById('fromCurrency').value;
//   var to = document.getElementById('toCurrency').value;
//   var amount = document.getElementById('amount').value;
//   var resultDiv = document.getElementById('result');

//   if (amount === "" || amount <= 0) {
//     resultDiv.innerText = "Please enter a valid amount.";
//     resultDiv.classList.add("show-result");
//     return;
//   }

//   var rates = {
//     "EGP": { "USD": 0.032, "EUR": 0.030, "GBP": 0.026 },
//     "USD": { "EGP": 31.00, "EUR": 0.93, "GBP": 0.80 },
//     "EUR": { "EGP": 33.00, "USD": 1.08, "GBP": 0.86 },
//     "GBP": { "EGP": 39.00, "USD": 1.25, "EUR": 1.16 }
//   };

//   if (from === to) {
//     resultDiv.innerText = "Please select different currencies.";
//   } else {
//     var converted = amount * rates[from][to];
//     resultDiv.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
//   }
//   resultDiv.classList.add("show-result");
// }

// const toggleButton = document.getElementById("toggleMode");
// toggleButton.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
//   document.getElementsByTagName("h1")
// });
