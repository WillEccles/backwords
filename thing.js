function update() {
	var str = document.getElementById("text").value;
	reverse(str);
	asciiSum(str);
	hex(str);
	palindrome(str);
}

function reverse(input) {
	var outstr = "";
	for (var i = input.length - 1; i >= 0; i--)
		outstr += input[i];
	document.getElementById("textout").value = outstr;
}


function asciiSum(input) {
	var sum = 0;
	for (let i = 0; i < input.length; i++)
		sum += input.charCodeAt(i);
	document.getElementById("textoutAss").value = sum;
}

function hex(input) {
	var arr = [];
	var outstr = "";
	for (let i = 0, l = input.length; i < l; i++) {
		var hex = Number(input.charCodeAt(i)).toString(16);
		arr.push(hex);
	}
	document.getElementById("textoutHex").value = arr.join('');
}

function palindrome(str) {
	var re = /[^A-Za-z0-9]/g;
	str = str.toLowerCase().replace(re, '');
	var len = str.length;
	for (var i = 0; i < len / 2; i++) {
		if (str[i] !== str[len - 1 - i]) {
			return false;
		}
	}
	document.getElementById("textoutPalindrome").value = str;

	return true;
}