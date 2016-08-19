function update() {
	var str = document.getElementById("text").value;
	var outstr = "";
	for (var i = str.length - 1; i >= 0; i--)
		outstr += str[i];
	document.getElementById("textout").value = outstr;
}