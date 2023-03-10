morse_code = {
    '.-': 'A', 
    '-...': 'B', 
    '-.-.': 'C', 
    '-..': 'D', 
    '.': 'E', 
    '..-.': 'F', 
    '--.': 'G', 
    '....': 'H', 
    '..': 'I', 
    '.---': 'J', 
    '-.-': 'K', 
    '.-..': 'L', 
    '--': 'M', 
    '-.': 'N', 
    '---': 'O', 
    '.--.': 'P', 
    '--.-': 'Q', 
    '.-.': 'R', 
    '...': 'S', 
    '-': 'T', 
    '..-': 'U', 
    '...-': 'V', 
    '.--': 'W', 
    '-..-': 'X', 
    '-.--': 'Y', 
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '.----.': "'",
    '-.-.--': '!',
    '-..-.': '/',
    '-.--.': '(',
    '-.--.-': ')',
    '.-...': '&',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '.-.-.': '+',
    '-....-': '-',
    '..--.-': '_',
    '.-..-.': '"',
    '...-..-': '$',
    '.--.-.': '@'
}


def decoder(data):
    decoded_data = ""
    data = data.split()
    for i in range(len(data)):
        decoded_data += morse_code[data[i]]
    return decoded_data

In = input("morse code: ")
print(decoder(In))
