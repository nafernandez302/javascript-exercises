const repeatString = function(word, n) {
	let toPrint
	if (n>=0) {
		toPrint = ''
		for (var i = 0; i < n; i++) {
			toPrint = toPrint.concat(word)
		}	
	}
	else{
		toPrint = "ERROR"
	}
	return toPrint
};

// Do not edit below this line
module.exports = repeatString;
