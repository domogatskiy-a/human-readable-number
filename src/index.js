function digToText(digit, dozens = false) {
    if(!dozens){

        
        switch (digit){
            case '0': return 'zero';
            case '1': return 'one';
            case '2': return 'two';
            case '3': return 'three';
            case '4': return 'four';
            case '5': return 'five';
            case '6': return 'six';
            case '7': return 'seven';
            case '8': return 'eight';
            case '9': return 'nine';
            case '10': return 'ten';
            case '11': return 'eleven';
            case '12': return 'twelve';
            case '13': return 'thirteen';
            case '14': return 'fourteen';
            case '15': return 'fifteen';
            case '16': return 'sixteen';
            case '17': return 'seventeen';
            case '18': return 'eighteen';
            case '19': return 'nineteen';
        }
        
    }else{
        

        switch (digit){
        case '2': return 'twenty';
        case '3': return 'thirty';
        case '4': return 'forty';
        case '5': return 'fifty';
        case '6': return 'sixty';
        case '7': return 'seventy';
        case '8': return 'eighty';
        case '9': return 'ninety';
        }
    }
}

module.exports = function toReadable (number) {
    const arrNum = ('' + number).split('');
    let resultSt = '',
        i = 0;
    if (arrNum.length == 3){
        resultSt += digToText(arrNum[i]) + ' hundred';
        console.log(i, resultSt, arrNum);
        i++;
    }
    if (arrNum.length >= 2){
        if (arrNum[i] == '1'){
            resultSt += ' ' + digToText(arrNum[i]+arrNum[i+1]);
            console.log(i, resultSt, arrNum);
            i += 2;
        } else {
            if(arrNum[i] != '0'){
                resultSt += ' ' + digToText(arrNum[i], true);
                console.log(i, resultSt, arrNum);
            }
            i++;
        }
    }
    if (arrNum.length - i > 0 && arrNum[i] != '0' 
        || arrNum.length == 1 && arrNum[i] == '0'){
        resultSt += ' ' + digToText(arrNum[i]);
        console.log(i, resultSt, arrNum);
    }
    
  return resultSt.trim();
}



console.log(module.exports(9));
