function encrypt(text) {
    
    text = text.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat")

    return text
}

function decrypt(text) {

    text = text.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u")

    return text
}

var timeoutId = 0

function warn(text, timeout, query, textQuery) {
    var warnQuery = document.querySelector(query)
    var warnTextQuery = document.querySelector(textQuery)

    warnQuery.style.opacity = 100

    warnTextQuery.textContent = text
    
    clearTimeout(timeoutId)

   timeoutId = setTimeout(() => {

        warnQuery.style.opacity = 0

    }, parseInt(timeout));

}

function checkParameters(element) {
    var text = element.value

    if (!text) {
        warn('O texto não pode estar limpo!', 1000, '#warn', '#warnText')
        return
    }

    if (text != text.toLowerCase()) {
        warn('O texto precisa estar em letras minúsculas!', 1000, '#warn', '#warnText')
        return false
    }

    if (text.match(/[\u00C0-\u017F]/)) {
        warn('O texto não pode ter palavras acentuadas!', 1000, '#warn', '#warnText')
        return false
    }

    return true
}

function showEncryptResult(text) {
    warn(encrypt(text), 10000, '#result', '#resultText')
}

function showDecryptResult(text) {
    warn(encrypt(text), 10000, '#result', '#resultText')
}

function copyResult() {
    navigator.clipboard.writeText(document.querySelector('#resultText').textContent)

    warn('O texto foi copiado com sucesso!', 1000, '#result', '#resultText')
}


var encryptButton = document.getElementById('encryptButton')
var decryptButton = document.getElementById('decryptButton')
var copyButton = document.getElementById('copyButton')
var textElement = document.getElementById('text')

encryptButton.addEventListener('click', event => {
    event.preventDefault()

    if (!checkParameters(textElement)) return

    showEncryptResult(textElement.value)

})

decryptButton.addEventListener('click', event => {
    event.preventDefault()

    if (!checkParameters(textElement)) return
    
    showDecryptResult(textElement.value)

})

copyButton.addEventListener('click', event => {
    event.preventDefault()

    copyResult()
})