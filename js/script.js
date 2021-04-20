// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.
// Ho allegato lo zip con lo screenshot e le immagini da utilizzare.
var app = new Vue(
    {
    el: '#root',
    data: {
        // courentImage -> è il numero associato all'index di images
        courentImage: 0,
        // images -> array di immagini
        images: [
            'img/campagna.jpg',
            'img/cascate.webp',
            'img/fiori.jpeg',
            'img/montagne.webp'
        ], 
    },    
    methods: {
        // nextImg -> funzione che al click di chevron-right aumenta di 1 il courentImage (passando all'immagine successiva)
        nextImg() {
            const nextImgIndex = this.courentImage + 1;

            // se al click courentImage supera la lunghezza dell'array allora courentImage torna a 0
            if( nextImgIndex > this.images.length - 1) {
                this.courentImage = 0;
            } else {
                // altrimenti al click aumenta di 1
                this.courentImage = nextImgIndex;
            }
        },
        // prevImg -> funzione che al click di chevron-left diminuisce di 1 il courentImage (passando all'immagine precedente)
        prevImg() {
            const prevImgIndex = this.courentImage - 1;

            // se courentImage è minore di 0 torna alla lunghezza dell'array meno 1
            if(prevImgIndex < 0) {
                this.courentImage = this.images.length -1;
            } else {
                // altrimenti, al click diminuisce di 1 
                this.courentImage = prevImgIndex;
            }
        }
    },
    created() {
        // ogni 3 secondi l'immagine passa alla successiva
        setInterval(() => {
            this.nextImg();
        }, 3000)
    }
});