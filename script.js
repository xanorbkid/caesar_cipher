function encrypt(text, key) {
    if (key < 1 || key > 25) {
        return "Key must be between 1 and 25";
    }

    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            encryptedText += String.fromCharCode((char - 65 + key) % 26 + 65);
        } else if (char >= 97 && char <= 122) {
            encryptedText += String.fromCharCode((char - 97 + key) % 26 + 97);
        } else {
            encryptedText += text.charAt(i);
        }
    }
    return encryptedText;
}

function decrypt(text, key) {
    if (key < 1 || key > 25) {
        return "Key must be between 1 and 25";
    }

    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            decryptedText += String.fromCharCode((char - 65 - key + 26) % 26 + 65);
        } else if (char >= 97 && char <= 122) {
            decryptedText += String.fromCharCode((char - 97 - key + 26) % 26 + 97);
        } else {
            decryptedText += text.charAt(i);
        }
    }
    return decryptedText;
}

document.getElementById('encrypt-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('encrypt-text').value;
    const inputKey = parseInt(document.getElementById('encrypt-key').value);
    const encrypted = encrypt(inputText, inputKey);
    alert("Encrypted Text: " + encrypted);
});

document.getElementById('decrypt-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('decrypt-text').value;
    const inputKey = parseInt(document.getElementById('decrypt-key').value);
    const decrypted = decrypt(inputText, inputKey);
    alert("Decrypted Text: " + decrypted);
});
