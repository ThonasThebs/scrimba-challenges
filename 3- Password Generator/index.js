//when the user clicks the button, generate 2 passwords - one in each field.
// I will need to create a js that fetches a random character from the array and appends it to the password. 15 characters long.


const characters =
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
        "/"];
let password1El = document.getElementById("password1-element");
let password2El = document.getElementById("password2-element");
var slider = document.getElementById("password-length");
var output = document.getElementById("length-number");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}


function generatePassword() {
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < slider.value; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }
    password1El.textContent = password1;
    password2El.textContent = password2;
}

copyPassword1 = () => {
    navigator.clipboard.writeText(password1El.textContent);
    alert("Password copied to clipboard");
}
copyPassword2 = () => {
    navigator.clipboard.writeText(password2El.textContent);
    alert("Password copied to clipboard");
}