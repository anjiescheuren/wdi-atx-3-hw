$(function() {
// Create a function romanize that takes a number as an input and
// converts that number into a roman numeral.
// romanize(946) => CMXLIII; romanize(55) => LV; romanize(46) => XLVI
  function romanize(number){
    var matches = {
      0: "",
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V",
      6: "VI",
      7: "VII",
      8: "VIII",
      9: "IX",
      10: "X",
      20: "XX",
      30: "XXX",
      40: "XL",
      50: "L",
      60: "LX",
      70: "LXX",
      80: "LXXX",
      90: "XC",
      100: "C",
      200: "CC",
      300: "CCC",
      400: "CD",
      500: "D",
      600: "DC",
      700: "DCC",
      800: "DCCC",
      900: "CM",
      1000: "M",
      2000: "MM",
      3000: "MMM"
    }

    $(".romanize").click(function() {
    var number = $("#number").val();
    var length = number.length;
    var romanString = "";

    // if (length >= 4) {
    //   var thousandString = (matches[thousand]);
    //   romanString = thousandString;
    // }

    // if (length >= 3) {
    //   var hundredString = (matches[hundred]);
    //   romanString = romanString + hundredString;
    // }

    // if (length >= 2) {
    //   var tenString = (matches[ten]);
    //   romanString = romanString + tenString;
    // }

    // if (length >= 1) {
    //   var singleString = (matches[single]);
    //   romanString = romanString + singleString;
    // }

    for (i = length; i >= 1; i--) {
      var digit;
      switch (i) {
        case 4:
          digit = parseInt(number[length-i] * 1000);
          break;
        case 3:
          digit = parseInt(number[length-i] * 100);
          break;
        case 2:
          digit = parseInt(number[length-i] * 10);
          break;
        case 1:
          digit = parseInt(number[length-i]);
          break;
      }
      var genericString = (matches[digit]);
      romanString = romanString + genericString;
    }
    $(".output").text(romanString);
  })
  }
  romanize(number);
});

