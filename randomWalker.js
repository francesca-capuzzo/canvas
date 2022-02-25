const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d'); 


const sprites = [];

for (let i = 0; i < 50; i++) {                                
    const x = Math.random() * (canvas.width - 2);              
    const y = Math.random() * (canvas.height - 2);

    const w = (Math.random() * 99) + 1;                       
    const h = (Math.random() * 99) + 1;

    // const sX = Math.random() * 10;                        
    // const sY = Math.random() * 10;
    // const sX = MathC.randomIntegerFromInterval(-1, 1);               
    // const sY = MathC.randomIntegerFromInterval(-1, 1);
    const sX = MathC.randomFloatFromInterval(-1, 1);                       
    const sY = MathC.randomFloatFromInterval(-1, 1);

    const c = generateRandomColor();                          

    // const sprite = new Sprite(x, y, w, h, sX, sY, c);
    // const sprite = new Sprite(x, y, 2, 2, sX, sY, c);
    // const sprite = new Sprite(x, y, 2, 2, 1, 1, c);
    const sprite = new Sprite(canvas.width/2, canvas.height/2, 2, 2, sX, sY, c);
    sprites.push(sprite)
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
    //context.clearRect(0, 0, canvas.width, canvas.height);
    for (const sprite of sprites) {
        sprite.draw(context);
        sprite.updateRandom(canvas);
    }
}, 30);