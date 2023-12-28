const reverseString = function(word) {
	let aux = ''
	let n = word.length-1;
	for (var i = 0; i <=n; i++) {
		aux = aux + word[n-i];
	}
	return aux;
};

// Do not edit below this line
module.exports = reverseString;

