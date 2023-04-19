const elementochute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lag = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak (e) {
    chute = e.results[0] [0] .transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute){
    elementochute.innerHTML = `
        <div> Você Disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', ()=> recognition.start())