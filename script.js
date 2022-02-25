//la canvas è utilizzata per il disegno e renderizza 2D (base) e webGL (3D)

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');                //--> default per usare la canvas (in 2d);

// context.fillStyle = 'red'                            //colore con cui vogliamo riempire le cose
// context.fillRect(10, 10, 30, 20)                     //riempi un rettangolo --> prende 4 paramentri (x, y, width, height) --> x e y sono i punti sul piano (partendo dall'angolo in alto a sx) e poi w e h le dimensioni

// context.fillStyle = "green";
// context.fillRect(20, 100, 300, 200);

                                                                                       //set interval e request animation frame sono i 2 metodi utilizzati per far muovere gli oggetti nel canva (semplicemente ripulendo e riscrivendo l'oggetto)

function draw(x, y) {                                                                  //pulisce lo schermo dal disegno prima e ridisegna l'oggetto spostato
    context.clearRect(0, 0, canvas.width, canvas.height);                              //clear rect pulisce una parte della canvas ma in questo modo la prendo tutta con x e y = 0 e w e h = alla canvas.w e canvas.h
    // context.fillStyle = 'red';
    // context.fillRect(x, y, 30, 20);
}

draw(10,10);




//RETTANGOLO SI MUOVE SULL'ASSE X: (decommenta)
// let x = 0; 
// let y = 10; 

// setInterval(() => {
//     draw(x,y);
//     // x++;                                                                            //aumenta di 1px alla volta
//     x = x + 5;
//     if (x > canvas.width) {
//         x = 0;                                                                         //questo serve per far fermare l'oggetto alla fine del canvas e non proseguire all'infinito
//     }
// }, 30);




//RETTANGOLO SI MUOVE IN DIAGONALE: (decommenta)
// let x = 0; 
// let y = 0;

// setInterval(() => {
//     draw(x,y);                                                                           
//     x = x + 5;
//     y = y + 5;
//     if (x > canvas.width) {
//         x = 0;                                                                         //questo serve per far fermare l'oggetto alla fine del canvas e non proseguire all'infinito
//     }
//     if (y > canvas.height) {
//         y = 0;                                                                         //questo serve per far fermare l'oggetto alla fine del canvas e non proseguire all'infinito
//     }
// }, 30);




//RETTANGOLO RIMBALZA SULLA WIDTH DEL CANVAS - IN ORIZZONTALE
// let x = 0; 
// let y = 0;
// let movementX = 5;

// setInterval(() => {
//     draw(x,y);                                                                     
//     x = x + movementX;
//     if (x > canvas.width - 30 || x < 0 ) {                                              //-30 perchè considero anche la w del rettangolo 
//         movementX = movementX * -1;                                                     //trasformo il movimento in un numero negativo (da 5 a -5) in modo che rimbalzi e non prosegua all'infinito                 
//     }
// }, 30);




//RETTANGOLO RIMBALZA SULLA HEIGHT DEL CANVAS - IN VERTICALE 
// let x = 0; 
// let y = 0;
// let movementY = 5; 

// setInterval(() => {
//     draw(x,y);                                                                     
//     y = y + movementY;
//     if (y > canvas.height - 20 || y < 0) {                                              //-20 perchè considero anche la h del rettangolo
//         movementY = movementY * -1;
//     }
// }, 30);




//RETTANGOLO RIMBALZA SUI LATI: (decommenta)
// let x = 0; 
// let y = 0;
// let movementX = 5;
// let movementY = 5; 

// setInterval(() => {
//     draw(x,y);                                                                     
//     x = x + movementX;
//     y = y + movementY;
//     if (x > canvas.width - 30 || x < 0 ) {                                              //-30 perchè considero anche la w del rettangolo 
//         movementX = movementX * -1;                                                     //trasformo il movimento in un numero negativo (da 5 a -5) in modo che rimbalzi e non prosegua all'infinito                 
//     }
//     if (y > canvas.height - 20 || y < 0) {                                              //-20 perchè considero anche la h del rettangolo
//         movementY = movementY * -1;
//     }
// }, 30);




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//UTILIZZO LA CLASSE SPRITE:


// const sprite = new Sprite(0, 0, 50, 50, 5, 5, 'magenta');                                                  //creo un quadrato usando la classe Sprite
// const sprite2 = new Sprite(20, 45, 20, 20, 10, 10, 'blue');


// setInterval(() => {
//    context.fillStyle = 'yellow';
//    context.clearRect(0, 0, canvas.width, canvas.height);                                  //se tolgo clearRect non ripulisce e si vede il tragitto compiuto dallo sprite

//    sprite.draw(context);                                                                  //disegno il primo sprite
//    sprite.update(canvas);    

//    sprite2.draw(context);                                                                 //disegno il secondo sprite
//    sprite2.update(canvas);
// }, 30);



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//GENERO RANDOM SPRITES in N NUMERO:

const sprites = [];

for (let i = 0; i < 20; i++) {                                  //cambiando i < 20 con altri valori se ne generato di più:
    const x = Math.random() * (canvas.width - 2);               //creo valori random di x e y per creare sprites diversi e metterli in un array --> il valore dopo il -(meno) utilizza le dimensioni dell'oggetto creato per evitare che esca dal canvas (nell'esempio w e h = 2)
    const y = Math.random() * (canvas.height - 2);

    const w = (Math.random() * 99) + 1;                       //creo valori random di w e h 
    const h = (Math.random() * 99) + 1;

    // const sX = Math.random() * 10;                         //creo valori random di speedX e speedY
    // const sY = Math.random() * 10;
    // const sX = MathC.randomIntegerFromInterval(-1, 1);     //creo valori random di speedX e speedY con le funzioni della classe MathC               
    // const sY = MathC.randomIntegerFromInterval(-1, 1);
    const sX = MathC.randomFloatFromInterval(-1, 1);          //creo valori random di speedX e speedY con le funzioni della classe MathC               
    const sY = MathC.randomFloatFromInterval(-1, 1);

    const c = generateRandomColor();                          //creo colori random con la funzione generateRandomColor()

    // const sprite = new Sprite(x, y, w, h, sX, sY, c);
    // const sprite = new Sprite(x, y, 2, 2, sX, sY, c);
    // const sprite = new Sprite(x, y, 2, 2, 1, 1, c);
    const sprite = new Sprite(canvas.width/2, canvas.height/2, 2, 2, sX, sY, c); //tutti partono dal centro 
    sprites.push(sprite)
}


// function generateRandomColor() {
//     var letters = '0123456789ABCDEF'
//     var color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }


// setInterval(() => {
//     context.fillStyle = 'yellow';
//     context.clearRect(0, 0, canvas.width, canvas.height);
//     for (const sprite of sprites) {
//         sprite.draw(context);
//         sprite.update(canvas);
//     }
// }, 30);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CREO DEI CERCHI ANZICHè RETTANGOLI
//UN ELEMENTO CHE NON è UNA FIGURA CHIUSA, NON VIENE DEFINITO CON IL FILL MA CON IL PATH CHE VIENE POI CHIUSO CON UN fill (interno) o uno stroke (bordo) 



// context.fillStyle = 'red';
// context.beginPath();
// context.arc(50, 50, 30, 0, 2 * Math.PI); //start angle e end angle vanno definiti in radianti --> la funzione arc() prende: x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean)
// context.fill()




const circleSprites = [];

for (let i = 0; i < 50; i++) { 

    const radius = (Math.random() * 99) + 1;                  //calcolo prima il raggio così da usarlo nei limiti di x e y;  

    const x = MathC.randomIntegerFromInterval(radius, canvas.width - radius);             
    const y = MathC.randomIntegerFromInterval(radius, canvas.height - radius);

    const sX = MathC.randomFloatFromInterval(-1, 1);          //creo valori random di speedX e speedY con le funzioni della classe MathC               
    const sY = MathC.randomFloatFromInterval(-1, 1);

    const c = generateRandomColor();                          //creo colori random con la funzione generateRandomColor()

    const sprite = new CircleSprite(x, y, radius, sX, sY, c);
    // const sprite = new CircleSprite(x, y, 2, sX, sY, c);
    // const sprite = new CircleSprite(x, y, 2, 1, 1, c);
    // const sprite = new CircleSprite(canvas.width/2, canvas.height/2, 2, sX, sY, c); //tutti partono dal centro 
    circleSprites.push(sprite)
}



function generateRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



setInterval(() => {
    context.fillStyle = 'yellow';
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (const sprite of circleSprites) {
        sprite.draw(context);
        sprite.update(canvas);
    }
}, 30);