
/*
module.exports = function toReadable (number) {
  
}
*/

module.exports = function toReadable (number) {
    
    
    let word = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let wordBig = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety"
    ];
  /*
    if(number <20) {
        return word[number];
    } else if (number >=20 && number <100) {
        if (number%10 == 0) {
            return `${wordBig[Math.floor(number/10)]}`
        } else {
            return `${wordBig[Math.floor(number/10)]} ${word[number%10]}`
        } 
    } else if (number >=100 && number <1000) {
            if (number%100 == 0) {
                return `${word[(number/100)]} hundred`
            } else if (number%10 == 0) {
                return `${word[Math.floor(number/100)]} hundred ${wordBig[(number-(Math.floor(number/100))*100) /10 ]}`
            } else {
            return `${word[Math.floor(number/100)]} hundred ${wordBig[Math.floor((number-(Math.floor(number/100))*100) /10 )]} ${word[((number-(Math.floor(number/100))*100) %10 )]}`
            }
        } else {
            return "number"
        }
        */
/*
        if (number%100 == 0) {
            return `${word[(number/100)]} hundred`;
        } else if (number%10==0) {
            if (number >=100) {
                return `${word[Math.floor((number/100))]} hundred ${wordBig[(number-(Math.floor(number/100))*100)/10]}`;
            } else {
                return `${wordBig[number/10]}`;
            }
        } else if(number <20) {
            return word[number];
        } else if (number >=20 && number <100) {
            return `${wordBig[Math.floor(number/10)]} ${word[(number-(Math.floor(number/10))*10)]}`
        } else if(number >=100) {
            return `${word[Math.floor(number/100)]} hundred 
            ${wordBig[Math.floor((number-((Math.floor(number/100))*100))/10)]} 
            ${word[number-((Math.floor(number/100))*100) - (Math.floor(((number-(Math.floor(number/100))*100))/10))*10]}`
        }
*/     

        let n = number 
        let a100 = Math.floor(n/100);
        let b100 = Math.floor((n-(Math.floor(n/100))*100)/10);
        let c100 = n-(Math.floor(n/100))*100 - (Math.floor((n-Math.floor(n/100)*100)/10))*10;

        let b10 = number-Math.floor(number/10)*10;

        if (number%100 == 0) {
            return `${word[a100]} hundred`;
        } else if (number%10 == 0) {
            if (number >=100) {
                return `${word[a100]} hundred ${wordBig[b100]}`;
            } else {
                return `${wordBig[number/10]}`;
            }
        } else if(number<20) {
            return `${word[number]}`
        } else if (number >=20 && number <100) {
            return `${wordBig[Math.floor(number/10)]} ${word[b10]}`
        } else if(number >=100) {
            if (b100 == 1) {
                return `${word[a100]} hundred ${word[c100+10]}`
            } else {
            return `${word[a100]} hundred ${wordBig[b100]} ${word[c100]}`
            }
        }
}