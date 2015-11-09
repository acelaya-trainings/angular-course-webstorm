var CaesarEncoder = function () {
	this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
};

CaesarEncoder.prototype.encode = function (string, code) {
	var letters = string.split(''),
        encodedString = '';

    letters.forEach(function (letter, index) {
        var alphabetIndex = this.alphabet.indexOf(letter);

        if (alphabetIndex >= 0) {
            var newIndex = alphabetIndex + code;
            if (newIndex >= this.alphabet.length) {
                newIndex = newIndex - this.alphabet.length;
            }

            encodedString += this.alphabet[newIndex];
        } else {
            encodedString += letter;
        }
    }, this);

    return encodedString;
};

CaesarEncoder.prototype.decode = function (string, code) {
    var letters = string.split(''),
        decodedString = '';

    letters.forEach(function (letter, index) {
        var alphabetIndex = this.alphabet.indexOf(letter);

        if (alphabetIndex >= 0) {
            var newIndex = alphabetIndex - code;
            if (newIndex < 0) {
                newIndex = newIndex + this.alphabet.length;
            }

            decodedString += this.alphabet[newIndex];
        } else {
            decodedString += letter;
        }
    }, this);

    return decodedString;
};
