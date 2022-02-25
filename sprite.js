//CLASSE RETTANGOLO/QUADRATO
class Sprite{
    constructor(x, y, w, h, speedX, speedY, color){          //prende x, y, width, height DI BASE  e aggiungo in seguito SPEED e COLOR per renderla più generica
        this.x = x; 
        this.y = y;
        this.w = w;
        this.h = h;
        // this.speedX = 5;                                   //'speed' = 'movement' nello script js
        // this.speedY = 5;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    draw(context){                                           //senza il context non può disegnare --> funzione che disegna
        context.fillStyle = this.color;         
        context.fillRect(this.x, this.y, this.w, this.h);
    }

    update(canvas){                                          //userà la logica del setInterval che muoverà l'oggetto
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.w || this.x < 0 ) {                                              
            this.speedX = this.speedX * -1;                                                                  
        }
        if (this.y > canvas.height - this.h || this.y < 0) {
            this.speedY = this.speedY * -1;
        }
    }

    updateRandom(canvas){
        let tempX = MathC.randomFloatFromInterval(-1, 1);
        let tempY = MathC.randomFloatFromInterval(-1, 1);

        if (this.speedX === tempX) {
            this.speedX = MathC.randomFloatFromInterval(-1, 1);
        }
        if (this.speedY === tempY) {
            this.speedY = MathC.randomFloatFromInterval(-1, 1);
        }
    
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;

        if (this.x > canvas.width - this.w || this.x < 0 ) {                                              
            this.speedX = this.speedX * -1;                                                                 
        }
        if (this.y > canvas.height - this.h || this.y < 0) {
            this.speedY = this.speedY * -1;
        }
    }
}




//CLASSE CERCHIO:
class CircleSprite{
    constructor(x, y, radius, speedX, speedY, color){                               
        this.x = x; 
        this.y = y;
        this.radius = radius;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    draw(context){
        context.fillStyle = this.color;     
        context.beginPath();    
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }

    update(canvas){
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        if (this.x > canvas.width - this.radius || this.x < this.radius) {                                              
            this.speedX = this.speedX * -1;                                                                  
        }
        if (this.y > canvas.height - this.radius || this.y < this.radius) {
            this.speedY = this.speedY * -1;
        }
    }
}