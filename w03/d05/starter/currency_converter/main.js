$(function() {
  // Write a function dollarsToPounds that takes
  // a dollar number as input and outputs a string
  // of what the pound equivalent is
  // "$NN is £NN"

  function dollarsToPounds(dollarNumber) {
    $(".amount").text("$" + (dollarNumber) + " is \u00A3" + (dollarNumber / 1.4827));
    var from = (dollarNumber);
    var to = "\u00A3";
    var amount = ("\u00A3" + (dollarNumber / 1.4827));
    console.log(from);
    console.log(to);
    console.log(amount);
  }

  // Write a function poundsToDollars that takes
  // a pound number as input and outputs a string
  // of what the dollar equivalent is
  // "£NN is $NN"

  function poundsToDollars(poundNumber) {
    $(".amount").text("\u00A3" + (poundNumber) + " is $" + (poundNumber * 1.4827));
    var from = ("\u00A3" + poundNumber);
    var to = "$";
    var amount = ("$" + (poundNumber * 1.4827));
    console.log(from);
    console.log(to);
    console.log(amount);
  }

  // Write a function currencyConverter that takes
  // 3 arguments: the currency it is converting from,
  // the currency you are converting to, and the amount.
  // It should output the appropriate string

  function currencyConverter(from, to, amount) {
    if (from.includes("$")) {
      dollarsToPounds(from);
    }
    else if (from.includes("\u00A3")) {
      poundsToDollars(from);
    }
  }


  // You can get user input using the prompt function

  $(".dollars").click(function () {
    var dollarNumber = prompt('Enter a Dollar Amount');
    dollarsToPounds(dollarNumber);
    // console.log("$" + (dollarNumber) + " is \u00A3" + (dollarNumber / 1.4827));

  });

  $(".pounds").click(function () {
    var poundNumber = prompt('Enter a Pound Amount');
    poundsToDollars(poundNumber);
    // console.log("\u00A3" + (poundNumber) + " is $" + (poundNumber * 1.4827));
  });

  $(".something").click(function () {
    var somethingNumber = prompt('Enter an Amount');
    currencyConverter(somethingNumber);
    // console.log("$" + (dollarNumber) + " is \u00A3" + (dollarNumber / 1.4827));

  });

  // make sure the output is only 2 decimal places

  // $1.4827 = £1.00
});

