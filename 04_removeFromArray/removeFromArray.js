const removeFromArray = function(array, ...elems) {
	let newArray = [];


	for (var j = 0 ; j < array.length; j++) {
		let b = true;
		for(var i = 0; i < elems.length; i++){
			b = (array[j] != elem[i]) && b
		}
		if (b) {
				newArray.push(array[j]);
		}
	}
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
