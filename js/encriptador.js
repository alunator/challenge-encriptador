// Variables para los elementos del DOM
const textareaInput = document.getElementById('texto');
const textareaOutput = document.getElementById('texto_out');
const btnEncrypt = document.getElementById('enc');
const btnDecrypt = document.getElementById('des');
const btnCopy = document.getElementById('copiar');
const modal = document.getElementById('modal');
const modalButton = document.getElementById('modalButton');

// Reglas de encriptación
const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Función para encriptar el texto
function encrypt(text) {
    let encryptedText = text;
    for (let key in encryptionRules) {
        encryptedText = encryptedText.replaceAll(key, encryptionRules[key]);
    }
    return encryptedText;
}

// Función para desencriptar el texto
function decrypt(text) {
    let decryptedText = text;
    for (let key in encryptionRules) {
        decryptedText = decryptedText.replaceAll(encryptionRules[key], key);
    }
    return decryptedText;
}

// Función para mostrar el modal de error
function showErrorModal() {
    modal.style.display = 'flex';
}

// Función para ocultar el modal de error
function hideErrorModal() {
    modal.style.display = 'none';
}

// Función para manejar los errores en el texto
function handleText(text) {
    if (/[^a-z]/.test(text)) {
        showErrorModal();
        return false;
    }
    hideErrorModal();
    return true;
}

// Evento para el botón de encriptar
btnEncrypt.addEventListener('click', () => {
    const inputText = textareaInput.value;
    if (handleText(inputText)) {
        textareaOutput.value = encrypt(inputText);
        document.getElementById('default').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    }
});

// Evento para el botón de desencriptar
btnDecrypt.addEventListener('click', () => {
    const inputText = textareaInput.value;
    if (handleText(inputText)) {
        textareaOutput.value = decrypt(inputText);
        document.getElementById('default').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    }
});

// Evento para el botón de copiar
btnCopy.addEventListener('click', () => {
    const textToCopy = textareaOutput.value;
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            // Feedback opcional: Podrías mostrar un mensaje al usuario
            console.log('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
});

// Evento para el botón del modal
modalButton.addEventListener('click', () => {
    hideErrorModal();
});

