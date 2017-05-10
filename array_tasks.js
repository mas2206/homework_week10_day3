var arrayTasks = {

	concat: function (arr1, arr2) {
		var concatenatedArray = [];
		for (var item of arr1) {
			concatenatedArray.push(item);
		}
		for (var item of arr2) {
			concatenatedArray.push(item);
		}
		return concatenatedArray;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var squaredArray = [];
		for (var number of arr) {
			squaredArray.push(number * number);
		}
		return squaredArray;
	},

	sum: function (arr) {
		var totalSum = 0;
		arr.forEach(function(number) {
			totalSum += number;
		})
		return totalSum;
	},

	findDuplicates: function (arr) {
		//test fails
		var duplicatesArray = [];
		for (var number of arr) {
			if (arr.includes(number) && arr.indexOf(number) != arr.indexOf(number)) {
				duplicatesArray.push(number);
			}
		}
		return duplicatesArray;
	},

	removeAndClone: function (arr, valueToRemove) {
		var clonedArray = [];
		for (var number of arr) {
			if (number != valueToRemove) {
				clonedArray.push(number);
			}
		}
		return clonedArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		//test fails
		indexPositionsArray = [];
		for (var number of arr) {
			if (number === itemToFind) {
				indexPositionsArray.push(arr.indexOf(number));
			}
		}
		return indexPositionsArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		sumEvenNumbersSquared = 0;
		for (var number of arr) {
			if (number % 2 === 0) {
				sumEvenNumbersSquared += (number * number);
			}
		}
		return sumEvenNumbersSquared;
	}

}

module.exports = arrayTasks
