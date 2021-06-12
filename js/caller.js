function call(usCred, provCred, timesCred, lengCred, notWantCred) {
    var ver = document.getElementById("algo_version").value;
  var out = window["func"+ver](usCred, provCred, timesCred, lengCred, notWantCred);
  
    document.getElementById("outText").value = out;
    copyToClip();
}

function masterCall() {
    var j = Math.floor((Math.random() * 40) + 1);
    var usCred = "";
    var provCred = "";
    for (i = 0; i < j; i++) { 
        usCred += Math.floor((Math.random() * (126 - 33)) + 33);
    }
    j = Math.floor((Math.random() * 40) + 1);
    for (i = 0; i < j; i++) { 
        provCred += Math.floor((Math.random() * (126 - 33)) + 33);
    }
     var out = func0(usCred, provCred, "", "", "");
  
    document.getElementById("outText").value = out;
    copyToClip();
}

function togglePass(fieldID, toggleID) {
    var x = document.getElementById(fieldID);
    var toggle = document.getElementById(toggleID);
    if (x.type === "password") {
        x.type = "text";
        toggle.src = "media/open-eye.png";
    } else {
        x.type = "password";
        toggle.src = "media/closed-eye.png";
    }
}
function copyToClip() {
    /* Get the text field */
    var copyText = document.getElementById("outText");
    var typeToReturn = copyText.type;
    copyText.type = "text";

    /* Select the text field */
    copyText.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
//             alert("Copied the text: " + copyText.value);
    copyText.type = typeToReturn;
    if (typeToReturn != "text") {
        copyText.value = "";
    }
}
