module.exports = function toReadable (number) {
  
    let numString = String(number);
            let arrOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
                        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
            let arrTwo = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

            if (number === 0) {
                return 'zero'

            } else if (number < 20) {
                return arrOne[number]

            } else if (numString.length === 2) {
                let firstNum = +numString[0];
                let lastNum = +numString[1];
                return `${arrTwo[firstNum-2]} ${arrOne[lastNum]}`;

            } else {
                let firstNum = +numString[0];
                let lastsNumbers = +numString.slice(1);
                let midleNum = +numString[1];
                let lastNum = +numString[2];

                if (lastNum === 0) {
                    return `${arrOne[firstNum]} hundred`;

                } else if (lastsNumbers < 20) {
                    return `${arrOne[firstNum]} hundred ${arrOne[lastsNumbers]}`;

                } else {
                    return `${arrOne[firstNum]} hundred ${arrTwo[midleNum - 2]} ${arrOne[lastNum]}`
                }
            }


    
}
