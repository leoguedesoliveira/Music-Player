let musica = document.querySelector('audio');

let duracaoMusica = (document.querySelector('.fim'));

duracaoMusica.textContent = formatarSegundos(Math.floor(musica.duration));



document.querySelector('.btn-play').addEventListener('click', tocarMusica);

document.querySelector('.btn-pause').addEventListener('click', pausarMusica);




musica.addEventListener('timeupdate', atualizarBarra)

function tocarMusica(){
    musica.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none'
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.btn-pause').style.display = 'none';
    document.querySelector('.btn-play').style.display = 'block'
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = formatarSegundos(Math.floor(musica.currentTime))
}

function formatarSegundos(segundos){
    let campoMinuto = Math.floor(segundos/60);
    let campoSegundo = segundos % 60;
    if(campoSegundo < 10){
        campoSegundo = '0' + campoSegundo;
    }

    return campoMinuto+ ':' +campoSegundo;
}
