const leapYears = function(year) {
	let isLeap;
	if (year%400==0 || (year%100!=0 && year%4==0)) {
		isLeap = true;
	}
	else{
		isLeap = false;
	}
	return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
