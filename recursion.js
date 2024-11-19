/** product: calculate the product of an array of numbers. */

function product(nums) {
	if (nums.length === 0) return 1;

	return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, out = 0, i = 0) {
	if (i === words.length) return out;

	out = words[i].length > out ? words[i].length : out;
	return longest(words, out, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, out = [], i = 0) {
	if (i >= str.length) return out.join("");
	out.push(str[i]);
	return everyOther(str, out, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
	let leftIdx = i;
	let rightIdx = str.length - i - 1;
	if (str[leftIdx] !== str[rightIdx]) return false;
	if (leftIdx >= rightIdx) return true;
	return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
	if (i === arr.length) return -1;
	if (arr[i] === val) return i;
	return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out = [], i = 0) {
	if (i === str.length) return out.join("");
	out.unshift(str[i]);
	return revString(str, out, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out = []) {
	for (let o in obj) {
		if (typeof obj[o] === "string") {
			out.push(obj[o]);
		} else if (typeof obj[o] === "object") {
			gatherStrings(obj[o], out);
		}
	}
	return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
	if (left > right) {
		return -1;
	}
	let middle = Math.floor((right + left) / 2);
	if (arr[middle] === val) {
		return middle;
	}
	if (arr[middle] > val) {
		return binarySearch(arr, val, left, middle - 1);
	}
	return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
