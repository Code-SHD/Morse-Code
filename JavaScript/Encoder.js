const morse_code = {
    'A': '.-', 
    'B': '-...', 
    'C': '-.-.', 
    'D': '-..', 
    'E': '.', 
    'F': '..-.', 
    'G': '--.', 
    'H': '....', 
    'I': '..', 
    'J': '.---', 
    'K': '-.-', 
    'L': '.-..', 
    'M': '--', 
    'N': '-.', 
    'O': '---', 
    'P': '.--.', 
    'Q': '--.-', 
    'R': '.-.', 
    'S': '...', 
    'T': '-', 
    'U': '..-', 
    'V': '...-', 
    'W': '.--', 
    'X': '-..-', 
    'Y': '-.--', 
    'Z': '--..', 
    '0': '-----', 
    '1': '.----', 
    '2': '..---', 
    '3': '...--', 
    '4': '....-', 
    '5': '.....', 
    '6': '-....', 
    '7': '--...', 
    '8': '---..', 
    '9': '----.', 
    '.': '.-.-.-', 
    ',': '--..--', 
    '?': '..--..', 
    '!': '-.-.--', 
    '/': '-..-.', 
    ':': '---...', 
    ';': '-.-.-.', 
    '=': '-...-', 
    '+': '.-.-.', 
    '-': '-....-', 
    '_': '..--.-', 
    '"': '.-..-.', 
    '$': '...-..-', 
    '&': '.-...', 
    '@': '.--.-.'
};

function encoder(data) {
    let encoded_data = "";
    data = data.toUpperCase().split('');
    for (let i = 0; i < data.length; i++) {
        encoded_data += morse_code[data[i]];
        encoded_data += " ";
    }
    return encoded_data;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('string: ', (In) => {
  console.log(encoder(In));
  rl.close();
});
