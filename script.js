  const imagens = [
    "media/image1.jpeg",
    "media/image2.jpeg",
    "media/image3.jpeg",
    "media/image4.jpeg",
    "media/image5.jpeg",
    "media/image6.jpeg",
    "media/image7.jpeg",
    "media/image8.jpeg",
    "media/image9.jpeg",
    "media/image10.jpeg",
    "media/image11.jpeg",
    "media/image12.jpeg",
    "media/image13.jpeg",
    "media/image14.jpeg",
    "media/image15.jpeg",
    "media/image16.jpeg",
    "media/image17.jpeg",
    "media/image18.jpeg",
    "media/image19.jpeg",
    "media/image20.jpeg",
    "media/image21.jpeg",
];

const foto = document.getElementById("foto");
let imagemAtual = "media/image1.jpeg";

function trocarImagem() {
    foto.style.opacity = "0";

    setTimeout(() => {
        let novaImagem;

        do {
            novaImagem = imagens[Math.floor(Math.random() * imagens.length)];
        } while (novaImagem === imagemAtual);

        const imgPreload = new Image();

        imgPreload.onload = () => {
            foto.src = novaImagem;
            imagemAtual = novaImagem;

            requestAnimationFrame(() => {
                foto.style.opacity = "1";
            });
        };

        imgPreload.src = novaImagem;

    }, 900);
}

setInterval(trocarImagem, 4000);
const frases = [
    "Eu te amo",          // Português
    "I love you",         // Inglês
    "Je t'aime",          // Francês
    "Ti amo",             // Italiano
    "Ich liebe dich",     // Alemão
    "Te quiero",          // Espanhol
    "Ik hou van jou",     // Holandês
    "Eu te iubesc",       // Romeno
    "Szeretlek",          // Húngaro
    "Kocham cię",         // Polonês
    "Miluji tě",          // Tcheco
    "Ľúbim ťa",           // Eslovaco
    "Volim te",           // Croata
    "Ljubim te",          // Esloveno
    "Jag älskar dig",     // Sueco
    "Jeg elsker deg",     // Norueguês
    "Jeg elsker dig",     // Dinamarquês
    "Minä rakastan sinua",// Finlandês
    "Ég elska þig",       // Islandês
    "S'agapo",            // Grego transliterado
    "Seni seviyorum",     // Turco
    "Ya tebya lyublyu",   // Russo transliterado
    "Te dua",             // Albanês
    "Anh yêu em",         // Vietnamita
    "Mahal kita",         // Filipino
    "Aku cinta padamu",   // Indonésio
    "Saya cinta kamu",    // Indonésio
    "Saya sayang awak",   // Malaio
    "Nakupenda",          // Suaíli
    "Ek het jou lief",    // Africâner
    "Mi amas vin",        // Esperanto
    "Aloha wau ia oe",    // Havaiano
    "Te aroha ahau ki a koe", // Maori
    "Tá grá agam duit",   // Irlandês
    "Rwy'n dy garu di",   // Galês
    "Mon renmen ou"       // Crioulo haitiano
];

for(let i=0;i<80;i++){

    const span = document.createElement("span");

    span.classList.add("amo");
    span.innerText = frases[Math.floor(Math.random()*frases.length)];

    span.style.left = Math.random()*100+"%";
    span.style.animationDuration =
        (10 + Math.random()*20)+"s";

    document.getElementById("fundo").appendChild(span);
}

const memorias = [  "Do seu abraço ❤️",
    "Do seu cheiro ❤️",
    "Da sua risada ❤️",
    "Do seu toque ❤️",
    "Dos seus olhos ❤️",
    "Da sua voz ❤️",
    "Do seu beijo ❤️",
    "Das nossas conversas ❤️",
    "Do nosso carinho ❤️",
    "Do seu cafuné ❤️",

    "Das nossas fotos juntos ❤️",
    "Da sua companhia ❤️",
    "Do seu sorriso ❤️",
    "Do jeito que você fala meu nome ❤️",
    "Dos nossos passeios ❤️",
    "Da sua presença ❤️",
    "Do seu carinho ❤️",
    "Das nossas brincadeiras ❤️",
    "De simplesmente estar perto de você ❤️",

    "Das suas bochechas ❤️",
    "Do nosso gosto musical ❤️",
    "De acordar ao seu lado❤️",
    "Mi Bombo ❤️",
    "Minha Jeca Tatu ❤️",
    "Do jeito que você esfrega como um gato ❤️",
    "Da sua forma de dormir ❤️",
    "Dos nossos planos juntos ❤️",

    "De te fazer rir ❤️",
    "MInha Gansa ❤️",
    "De te abraçar sem motivo ❤️",
    "Do seu olhar quando está feliz ❤️",
    "Do nosso filho bichento ❤️",
    "De poder chamar você de minha ❤️",
    "Da sua existência na minha vida ❤️"

];

function mostrarMemoria(){

    const sorteio =
        memorias[Math.floor(Math.random()*memorias.length)];

    document.getElementById("memoria").innerHTML = sorteio;
}
