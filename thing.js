function update() {
	var str = document.getElementById("text").value;
	reverse(str);
	asciiSum(str);
	hex(str);
	binary(str);
	octal(str);
}
function reverse(input){
	var outstr = "";
	for (var i = input.length - 1; i >= 0; i--)
		outstr += input[i];
	document.getElementById("textout").value = outstr;
}


function asciiSum(input){
	var sum = 0;
	for (let i = 0; i < input.length; i++) 
		sum += input.charCodeAt(i);
	document.getElementById("textoutAss").value = sum;
}

function hex(input){
	var arr = [];
	var outstr = "";
	for (let i = 0, l = input.length; i < l; i++) {
		var hex = Number(input.charCodeAt(i)).toString(16) + " ";
		arr.push(hex);
	}
	document.getElementById("textoutHex").value = arr.join('');

}

function binary(input) {
	var output = "";
	for (var i = 0; i < input.length; i++) {
      output += input[i].charCodeAt(0).toString(2) + " ";
  }
  document.getElementById("textoutBin").value = output;

}

function octal(input){
	var arr = [];
	var outstr = "";
	for (let i = 0, l = input.length; i < l; i++) {
		var hex = Number(input.charCodeAt(i)).toString(8) + " ";
		arr.push(hex);
	}
	document.getElementById("textoutOct").value = arr.join('');
}
