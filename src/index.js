const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var str;
    var morse;
    var result = '';
    var j;
    
    var i = 0;
    while (i < expr.length){
        str = expr.slice(i, i+11);
        
        if(str[0] == "*"){
            result += " ";
        }
        else{
            morse = '';
            j = 0;
            while (j < str.length){
                if(str.slice(j,j+2) == 10){
                    morse += '.';
                }
                else if(str.slice(j,j+2) == 11){
                    morse += '-';
                }
                j += 2;
            }
            result += MORSE_TABLE[morse];
        }
          
        i += 10;
    }
    return result;
}

module.exports = {
    decode
}