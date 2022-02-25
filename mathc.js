class MathC{
    static randomIntegerFromInterval(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static randomFloatFromInterval(min, max, decimal = 3){
        let timeMin = min * (10 ** decimal);                 // se partissi da -1 il mio numero diventa -1000
        let timeMax = max * (10 ** decimal);                 // se partissi da 1 il mio numero diventa 1000
    
        let random = Math.floor(Math.random() * (timeMax - timeMin + 1) + timeMin); 
        let floatRandom = random / (10 ** decimal);          //creo un range più grande di interi e li ri-divido per la potenza per avere 1 e -1 (min e max) compresi 
        return floatRandom;
    }

    static randomInterval(min, max){
        return Math.random() * (max - min + 1) + min; 
    }
}