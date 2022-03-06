let musicas = [
    {titulo:'Velho da Lancha', artista:'Kalli', src:'musics/Kalli & Kawe - VELHO DA LANCHA 🚤 (Official Video) - (Prod. TerrorDosBeats).mp4', img:'img/velho da lancha.jpg'},
    {titulo:'762', artista:'Bruxo 021', src:'musics/Bruxo “762” 🎤 (Prod. biggie diehl).mp4', img:'img/762.jpg'},
    {titulo:'60K', artista:'Major RD', src:'musics/Major RD - 60K 🐎 (prod. @baratafather).mp4', img:'img/major-rd.jpeg'},
    {titulo:'Vida Cara', artista:'Kalli', src:'musics/Kalli & Bruxo - VIDA CARA 💸 (Official Video) - (Prod. biggie diehl) (1).mp4', img:'img/Vida Cara Kalli x Bruxo021.jpg'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 3;
    }
    renderizarMusica(indexMusica);
    tocarMusica();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 3){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    tocarMusica();
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}