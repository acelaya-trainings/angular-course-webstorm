function CodificadorCesar(distance) {
	this.distance = distance;
	this.characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; //, , ];
	this.numOfCharacters = this.characters.length;
}

CodificadorCesar.prototype.encode = function(sourceText) {
	return this.applyCesarCodification(sourceText, this.getForwardCharacterFor);
};

CodificadorCesar.prototype.decode = function(sourceText) {
	return this.applyCesarCodification(sourceText, this.getBackwardCharacterFor);
};

CodificadorCesar.prototype.applyCesarCodification = function(sourceText, nextCaracterFunction) {
	targetText = "";
	for(charIndex = 0; charIndex < sourceText.length; charIndex++) {
		nextChar = sourceText.charAt(charIndex);
		i = this.characters.indexOf(nextChar.toUpperCase());
		if (i > -1) {
			nextChar = nextCaracterFunction.call(this, i);
		}
		targetText += nextChar;
	}
	return targetText;
};

CodificadorCesar.prototype.getForwardCharacterFor = function(i) {
		offset = i + this.distance;
		if (offset >= this.numOfCharacters) {
			offset -= this.numOfCharacters;
		}
		return this.characters[offset];
};

CodificadorCesar.prototype.getBackwardCharacterFor = function(i) {
		offset = i - this.distance;
		if (offset < 0) {
			offset += this.numOfCharacters;
		}
		return this.characters[offset];
};


