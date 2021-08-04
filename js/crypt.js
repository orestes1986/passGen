function hsore(str, noChar, wantedLength){
	console.log("Hey HSORE " + str);
	// console.log(document.getElementById("charCheck").checked);
	if (document.getElementById("charCheck").checked != true) {
		noChar += "| ~";
	}
	if (wantedLength = 0) {
		wantedLength = 40;
	}
	// console.log(noChar)
	var crpt = new Array([]);
	var outPtt = "";
	// console.log("str: " + str);
	// console.log("str length: " + str.length);
	for (var k = 0; k < str.length; k++) {
		crpt[k] = Math.abs(str.charCodeAt(str.length - 1) * (str.length - 1) - str.charCodeAt(k) * k);
	}
	// console.log("crpt length: " + crpt.length);
	// console.log("Wanted length: " + wantedLength);
	if (crpt.length < wantedLength) {
	// console.log("Too Short!!!!");
		var j = 0;
		var k = 1;
	for (var i = crpt.length; i < wantedLength; i++) {
		if (j + k >= crpt.length) {
			j = 0;
			k++;
			if (k >= crpt.length){
				j = 1;
				k = 1;
			}
		}
		crpt.push((crpt[j] + crpt[j + k]) / 2);
		j++;	
	}
	} else if(crpt.length > wantedLength) {
//	console.log("Too Long!!!!");
	crpt = crpt.splice(0, wantedLength);
	}
//	console.log("crpt length: " + crpt.length);
//	console.log("Wanted length: " + wantedLength);
	for (var m = 0; m < crpt.length; m++) {
	crpt[m] = crpt[m] % (126 - 33) + 33;
	}
	// console.log("crpt before checks: " + crpt);
	crpt = checkForNumsAndSymbs(crpt);
	crpt = checkForNums(crpt);
	crpt = checkForCaps(crpt);
	crpt = checkForLows(crpt);
	crpt = removeUnwantedChars(crpt, noChar);
	// console.log("crpt after checks: " + crpt);
	for (var f = 0; f < crpt.length; f++) {
	outPtt += String.fromCharCode(Math.round(crpt[f]));
	}
//	console.log("crpt: " + crpt);
//	console.log("outPtt: " + outPtt);
	return outPtt;
}
function checkForNumsAndSymbs(scrypton) {
	var numSymFlag = false;
	for (var n = 0; n < 4; n++){
	if((scrypton[n] > 33) && (scrypton[n] < 64)){
		numSymFlag = true;
		break;
	}
	}
	if(numSymFlag === false){
	while((scrypton[3] < 33) || (scrypton[3] > 64)){
		if (scrypton[3] < 33){
			scrypton[3] += 8;
		} else if (scrypton[3] > 64){
			scrypton[3] -= 8;
		}
	}
	}
	var posit = new Array([]);
	numSymFlag = 0;
	var repeat = 0;
	var repeatA = 0;
	while (numSymFlag < 4){
	repeat++;
	if (repeat > 5){
		break;
	}
	posit = new Array([]);
	numSymFlag = 0;
	for(m = 0; m < scrypton.length; m++){
		if ((scrypton[m] > 33) && (scrypton[m] < 64)){
			numSymFlag++;
			posit[posit.length - 1] = m;
		} else if (m == (posit[posit.length - 1] + 3)) {
			repeatA = 0;
			while ((scrypton[m] < 33) || (scrypton[m] > 64)){
				repeatA++;
				if (repeatA > 5){
					break;
				}
				if(scrypton[m] < 33){
					scrypton[m] += 8;
				} else {
					scrypton[m] -= 8;
				}
			}
		}
	}
	}
	return scrypton;
}
function checkForNums(scryptioning) {
	var numFlag = false;
	for (var n = 0; n < 4; n++){
	if((scryptioning[n] > 48) && (scryptioning[n] < 57)){
		numFlag = true;
		break;
	}
	}
	if(numFlag === false){
	while((scryptioning[3] < 48) || (scryptioning[3] > 57)){
		if (scryptioning[3] < 48){
			scryptioning[3] += 8;
		} else if (scryptioning[3] > 57){
			scryptioning[3] -= 8;
		}
	}
	}
	var posit = new Array([]);
	numFlag = 0;
	var repeat = 0;
	var repeatA = 0;
	while (numFlag < 4){
	repeat++;
	if (repeat > 5){
		break;
	}
	posit = new Array([]);
	numFlag = 0;
	for(m = 0; m < scryptioning.length; m++){
		if ((scryptioning[m] > 48) && (scryptioning[m] < 57)){
			numFlag++;
			posit[posit.length - 1] = m;
		} else if (m == (posit[posit.length - 1] + 3)) {
			repeatA = 0;
			while ((scryptioning[m] < 48) || (scryptioning[m] > 57)){
				repeatA++;
				if (repeatA > 5){
					break;
				}
				if(scryptioning[m] < 48){
					scryptioning[m] += 8;
				} else {
					scryptioning[m] -= 8;
				}
			}
		}
	}
	}
	return scryptioning;
}
function checkForLows(scrypt) {
	var lowFlag = false;
	for (n = 0; n < 3; n++){
	if((scrypt[n] > 97) && (scrypt[n] < 122)){
		lowFlag = true;
		break;
	}
	}
	if(lowFlag === false){
	while((scrypt[2] < 97) || (scrypt[2] > 122)){
		if (scrypt[2] < 97){
			scrypt[2] += 8;
		} else if (scrypt[2] > 122){
			scrypt[2] -= 8;
		}
	}
	}
	var posit = new Array([]);
	lowFlag = 0;
	var repeat = 0;
	var repeatA = 0;
	while (lowFlag < 4){
	repeat++;
	if (repeat > 5){
		break;
	}
	posit = new Array([]);
	lowFlag = 0;
	for(m = 0; m < scrypt.length; m++){
		if ((scrypt[m] > 97) && (scrypt[m] < 122)){
			lowFlag++;
			posit[posit.length - 1] = m;
		} else if (m == (posit[posit.length - 1] + 3)) {
			repeatA = 0;
			while ((scrypt[m] < 97) || (scrypt[m] > 122)){
				repeatA++;
				if (repeatA > 5){
					break;
				}
				if(scrypt[m] < 97){
					scrypt[m] += 8;
				} else {
					scrypt[m] -= 8;
				}
			}
		}
	}
	}
	return scrypt;
}
function checkForCaps(crypton) {
	var capFlag = false;
	for (n = 0; n < 3; n++){
	if((crypton[n] > 65) && (crypton[n] < 90)){
		capFlag = true;
		break;
	}
	}
	if(capFlag === false){
	while((crypton[2] < 65) || (crypton[2] > 90)){
		if (crypton[2] < 65){
			crypton[2] += 8;
		} else if (crypton[2] > 90){
			crypton[2] -= 8;
		}
	}
	}
	var posit = new Array([]);
	capFlag = 0;
	var repeat = 0;
	var repeatA = 0;
	while (capFlag < 4){
	repeat++;
	if (repeat > 5){
		break;
	}
	posit = new Array([]);
	capFlag = 0;
	for(m = 0; m < crypton.length; m++){
		if ((crypton[m] > 65) && (crypton[m] < 90)){
			capFlag++;
			posit[posit.length - 1] = m;
		} else if (m == (posit[posit.length - 1] + 3)) {
			repeatA = 0;
			while ((crypton[m] < 65) || (crypton[m] > 90)){
				repeatA++;
				if (repeatA > 5){
					break;
				}
				if(crypton[m] < 65){
					crypton[m] += 8;
				} else {
					crypton[m] -= 8;
				}
			}
		}
	}
	}
	return crypton;	
}
function removeUnwantedChars(crpton, unWant) {
	var flag = false;
	while (flag === false){
	flag = true;
	for (n = 0; n < unWant.length; n++){
		for(m = 0; m < crpton.length; m++){
			if (String.fromCharCode(Math.round(crpton[m])) === unWant[n]){
//				console.log("Found it!!! " + String.fromCharCode(Math.round(crpton[m])));
				flag = false;
				if (crpton[m] < 126){
					crpton[m]++;
				} else {
					crpton[m]--;
				} if (crpton[m] == 125){
					crpton[m] -= 10;
				}
			}
		}
	}
	}
	return crpton;
}
function func0(us, prov, times, leng, notWant) {
	if (us === ""){
	us = "User's insignia";
	}
	if (prov === ""){
	prov = "Service/Provider insignia";
	}
	if ((!(isFinite(times))) || (times === "")) {
		times = 0;
	}
	if ((!(isFinite(leng))) || (leng === "")) {
		leng = wantedLength;
	}

	var strum = us + prov + times + leng;

//	console.log("Hey Func " + strum);
//	console.log("times : " + times);
	notWant += " ";
	for (var j = 0; j <= times; j++){
		strum = hsore(strum, notWant, leng);
	}
	var shtring = "";
	shtring = strum;
//	console.log("my string: " + shtring);
	return shtring;
}
