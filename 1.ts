export function solution(number: number): string {
  let arrayOfNumbers = number.toString().split("");
  let rome = "";

  let indexOfThousands, indexOfHundreds, indexOfTens, indexOfUnits;
  if (number > 0 && number < 10) {
    indexOfUnits = 0;
  } else if (number > 9 && number < 100) {
    indexOfTens = 0;
    indexOfUnits = 1;
  } else if (number > 99 && number < 1000) {
    indexOfHundreds = 0;
    indexOfTens = 1;
    indexOfUnits = 2;
  } else if (number > 999) {
    indexOfThousands = 0;
    indexOfHundreds = 1;
    indexOfTens = 2;
    indexOfUnits = 3;
  }

  let units = arrayOfNumbers[indexOfUnits];
  let tens = arrayOfNumbers[indexOfTens];
  let hundreds = arrayOfNumbers[indexOfHundreds];
  let thousands = arrayOfNumbers[indexOfThousands];

  switch (units) {
    case "1":
      units = "I";
      break;

    case "2":
      units = "II";
      break;

    case "3":
      units = "III";
      break;

    case "4":
      units = "IV";
      break;

    case "5":
      units = "V";
      break;

    case "6":
      units = "VI";
      break;

    case "7":
      units = "VII";
      break;

    case "8":
      units = "VIII";
      break;

    case "9":
      units = "IX";
      break;

    case "0":
      units = "";
      break;
  }

  if (indexOfThousands === 0) {
    switch (thousands) {
      case "1":
        thousands = "M";
        break;
      case "2":
        thousands = "MM";
        break;
        
    }
  } else {
    thousands = "";
  }

  if (indexOfHundreds === 0 || indexOfHundreds === 1) {
    switch (hundreds) {
      case "1":
        hundreds = "C";
        break;

      case "2":
        hundreds = "CC";
        break;

      case "3":
        hundreds = "CCC";
        break;

      case "4":
        hundreds = "CD";
        break;

      case "5":
        hundreds = "D";
        break;

      case "6":
        hundreds = "DC";
        break;

      case "7":
        hundreds = "DCC";
        break;

      case "8":
        hundreds = "DCCC";
        break;

      case "9":
        hundreds = "CM";
        break;

      case "0":
        hundreds = "";
        break;
    }
  } else {
    hundreds = "";
  }

  if (indexOfTens === 0 || indexOfTens === 1 || indexOfTens===2) {
    switch (tens) {
      case "1":
        tens = "X";
        break;

      case "2":
        tens = "XX";
        break;

      case "3":
        tens = "XXX";
        break;

      case "4":
        tens = "XL";
        break;

      case "5":
        tens = "L";
        break;

      case "6":
        tens = "LX";
        break;

      case "7":
        tens = "LXX";
        break;

      case "8":
        tens = "lXXX";
        break;

      case "9":
        tens = "XC";
        break;

      case "0":
        tens = "";
        break;
    }
  } else {
    tens = "";
  }
  // convert the number to a roman numeral

  rome = thousands + hundreds + tens + units;

  return rome;
}
