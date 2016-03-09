var plain1 = document.getElementById('plain1');
var cipher1 = document.getElementById('cipher1');
var cipher2 = document.getElementById('cipher2');
var plain2 = document.getElementById('plain2');
var encryptBtn = document.getElementById('encryptBtn');
var decryptBtn = document.getElementById('decryptBtn');
var num = document.getElementById('num');
var error = document.getElementById('error');
var reset = document.getElementById('reset');

function isUpper(ch) {
	return (ch.charCodeAt(0) > 64 && ch.charCodeAt(0) < 91);
}

function isLower(ch) {
	return (ch.charCodeAt(0) > 96 && ch.charCodeAt(0) < 123);
}

encryptBtn.addEventListener("click", function() {
	crypt(parseInt(num.value),plain1,cipher1);
},false);

decryptBtn.addEventListener("click", function() {
	crypt(parseInt(num.value) * -1, cipher2, plain2);
},false);

reset.addEventListener("click", function() {
	plain1.value = " ";
	plain2.value = " ";
	cipher1.value = " ";
	cipher2.value = " ";

},false);

function crypt(k, plain, cipher) {
	var a = [];
	var x;
	if(!k) {
		error.innerHTML = "Please Enter Key First";
		return;
	}

	for(var i = 0; i < plain.value.length; i++) {

		var ch = plain.value.charAt(i);
		x = (ch.charCodeAt(0) + k);
		if (isUpper(ch))  {
			
			if( x > 90 ) {
				x -= 26;
			}

			if(x < 65) {
				x += 26;
			}
			
			a.push(String.fromCharCode(x));
		} else if (isLower(ch))  {
			if( x > 122 ) {
				x -= 26;
			}

			if(x < 97) {
				x += 26;
			}
			
			a.push(String.fromCharCode(x));
		}
	}

	cipher.value = a.join('');
}