const fibonacci = function(n) {
	if(n<0){
		return "OOPS";
	}
	let arr = [];
	arr[0]=0;
	arr[1]=1;
	for (var i = 2; i <=n; i++){
		arr[i] = arr[i-1] + arr[i-2];
	}
	return arr[n];
};

// Do not edit below this line
module.exports = fibonacci;
