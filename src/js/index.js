const box = document.getElementById('box');

gsap.to(box, {
  duration: 1, // Duração da animação em segundos
  width: 200, // Largura final
  height: 200, // Altura final
  repeat: -1, // Repetir a animação infinitamente
  yoyo: true, // Inverter a animação no fim
  ease: 'power1.inOut' // Easing da animação
});

const textElement = document.getElementById('quemsoueu');
const text = textElement.textContent;
textElement.textContent = ''; // Limpar o texto inicial

let currentChar = 0;

function type() {
  textElement.textContent += text[currentChar];
  currentChar++;
  if (currentChar < text.length) {
    gsap.delayedCall(0.1, type); // Chama a função novamente após 0.1 segundo
  }
}

type();
/*const downloadButton = document.getElementById('curriculo');

  downloadButton.addEventListener('click', () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'C:/xampp/htdocs/portfolio/src/curriculo'; // Substitua pelo caminho real do seu arquivo
    downloadLink.download = 'curriculo_taiane'; // Substitua pelo nome desejado para o arquivo
    downloadLink.click();
  });*/
