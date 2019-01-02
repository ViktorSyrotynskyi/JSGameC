var game = document.getElementById('game');
var mas=[];
var mas2=[];

var w_th = 10;
var h_ht = 10;

var posx;
var posy;

var posXchoice;
var posYchoice;

var Confirm = document.getElementById('ac');



for (var i=0; i<w_th*h_ht; i++){
   game.innerHTML+= '<div class="block"></div>';
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function createHex() {
    for (var i=0; i<w_th; i++){
        mas[i]=[];
        for (var j=0; j<h_ht; j++){
            mas[i][j]=0;
        }
    }
}
createHex();


function createAnemy() {
    
    posx = getRndInteger(0, 3);
    posy = Math.floor(Math.random() * 10);
   
//    posx = 1;
//    posy = 3;
    
    for (var i=0; i<w_th; i++){
        mas2[i]=[];
        for (var j=0; j<h_ht; j++){
            mas2[i][j]=0;
        }
    }
    mas2[posx][posy]=1;
    console.log(posx);
    console.log(posy);
    
    var idDoc = Number(String(posx)+String(posy));
    document.getElementsByClassName('block')[idDoc].id = 'enemy';
}
createAnemy();

game.onclick = function(event) {
    posXchoice = event.layerX;
    posYchoice = event.layerY;
    console.log(posXchoice);
    console.log(posYchoice);
    
    posXchoice= Math.floor(posXchoice/50);
    posYchoice= Math.floor(posYchoice/50);
    
    mas[posYchoice][posXchoice]=1;
    var idDoc = Number(String(posYchoice)+String(posXchoice));
    document.getElementsByClassName('block')[idDoc].id = 'accept';
    console.log(mas);
  
 }





function checkDirection(direction) {
    if (posy==0 && posx==0) {
     return direction = getRndInteger(7, 11);
    } 
    if (posx==0 && (posy>=1 && posy<=h_ht-2)) {
       return direction = getRndInteger(7, 15);
    } 
    if (posy==h_ht-1 && posx==0) {
       return direction = getRndInteger(11, 15);
    }
    if ((posx>=1 && posx<=w_th-2) && posy==0) {
     return direction = getRndInteger(3, 11);
    } 
    if (posx==w_th-1 && posy==0) {
       return direction = getRndInteger(3, 7);
    }
    if ((posx>=1 && posx<=w_th-2) && posy==w_th-1 && (direction>=4 && direction<=10)) {
     return direction = getRndInteger(11, 16);
    } 
    if (posx==w_th-1 && posy==h_ht-1 && (direction>=4 && direction<=14)) {
       return direction = getRndInteger(15, 16);
    }
    return direction;
}


function checkSpead(speed, direction) {
    if (posy==1 && posx==0 && direction>=13 && direction<=15){
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posy==h_ht-2 && posx==0 && (direction>=7 && direction<=9)) {
        return speed = Math.floor((Math.random() * 100)/2); 
    }
    if (posy==0 && posx==1 && (direction>=3 && direction<=5)){
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posy==1 && posx==1  && ((direction>=1 && direction<=5) ||(direction>=13 && direction<=16))){
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posx==1 && (posy>=2 && posy<=h_ht-3) && (direction>=1 && direction<=5)) {
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posy==1 && (posx>=2 && posx<=w_th-3) && (direction==1 ||(direction>=13 && direction<=16))){
        return speed = Math.floor((Math.random() * 100)/2);
    }
    
    if (posy==1 &&  posx==w_th-2 && (direction==1 ||(direction>=9 && direction<=16))){
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posy==1 &&  posx==w_th-1 && (direction==1 ||(direction>=15 && direction<=16))){
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if ((posx==1 && posy==h_ht-2) && (direction>=1 && direction<=9)) {
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if ((posx==1 && posy==h_ht-1) && (direction>=1 && direction<=3)) {
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posy==h_ht-2 && (posx>=2 && posx<=w_th-3) && (direction>=5 && direction<=9)) {
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posy==h_ht-2 && posx==w_th-2 && (direction>=5 && direction<=13)) {
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posy==h_ht-2 && posx==w_th-1 && (direction>=5 && direction<=7)) {
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posy==0 && posx==w_th-2 && (direction>=9 && direction<=11)) {
        return speed = Math.floor((Math.random() * 100)/2);
    }
    if (posy==h_ht-1 && posx==w_th-2 && (direction>=11 && direction<=13)) {
        return speed = Math.floor((Math.random() * 100)/2);
    }
     if ((posy>=2 && posy<=h_ht-3) && posx==w_th-2 && (direction>=9 && direction<=13)) {
        return speed = Math.floor((Math.random() * 100)/2);
    }
    return speed;
}


function enemyMove(){
    var speed = Math.floor(Math.random() * 100);
//    var speed = 70;
    var direction = getRndInteger(1, 14);
//    var direction = 1;

    
    direction = checkDirection(direction);
    speed = checkSpead(speed, direction);
    
   
    
    for (var i=0; i<10; i++){
        
        for (var j=0; j<10; j++){
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==1){
                mas2[i][j]=0;
                mas2[posx-2][posy-2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==1){
                mas2[i][j]=0;
                mas2[posx-1][posy-1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==2){
                mas2[i][j]=0;
                mas2[posx-2][posy-1]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==2){
                mas2[i][j]=0;
                mas2[posx-1][posy-1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==3){
                mas2[i][j]=0;
                mas2[posx-2][posy]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==3){
                mas2[i][j]=0;
                mas2[posx-1][posy]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==4){
                mas2[i][j]=0;
                mas2[posx-2][posy+1]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==4){
                mas2[i][j]=0;
                mas2[posx-1][posy+1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==5){
                mas2[i][j]=0;
                mas2[posx-2][posy+2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==5){
                mas2[i][j]=0;
                mas2[posx-1][posy+1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==6){
                mas2[i][j]=0;
                mas2[posx-1][posy+2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==6){
                mas2[i][j]=0;
                mas2[posx-1][posy+1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==7){
                mas2[i][j]=0;
                mas2[posx][posy+2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==7){
                mas2[i][j]=0;
                mas2[posx][posy+1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==8){
                mas2[i][j]=0;
                mas2[posx+1][posy+2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==8){
                mas2[i][j]=0;
                mas2[posx+1][posy+1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==9){
                mas2[i][j]=0;
                mas2[posx+2][posy+2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==9){
                mas2[i][j]=0;
                mas2[posx+1][posy+1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==10){
                mas2[i][j]=0;
                mas2[posx+2][posy+1]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==10){
                mas2[i][j]=0;
                mas2[posx+1][posy+1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==11){
                mas2[i][j]=0;
                mas2[posx+2][posy]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==11){
                mas2[i][j]=0;
                mas2[posx+1][posy]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==12){
                mas2[i][j]=0;
                mas2[posx+2][posy-1]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==12){
                mas2[i][j]=0;
                mas2[posx+1][posy-1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==13){
                mas2[i][j]=0;
                mas2[posx+2][posy-2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==13){
                mas2[i][j]=0;
                mas2[posx+1][posy-1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==14){
                mas2[i][j]=0;
                mas2[posx+1][posy-2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==14){
                mas2[i][j]=0;
                mas2[posx+1][posy-1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==15){
                mas2[i][j]=0;
                mas2[posx][posy-2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==15){
                mas2[i][j]=0;
                mas2[posx][posy-1]=1;
            }
            if (mas2[i][j]==1 && speed>=60 && speed<100 && direction==16){
                mas2[i][j]=0;
                mas2[posx-1][posy-2]=1;
            }else if(mas2[i][j]==1 && speed>=30 && speed<60 && direction==16){
                mas2[i][j]=0;
                mas2[posx-1][posy-1]=1;
            }
        }
    }
    console.log(mas2);
    console.log(direction);
    console.log(speed);
    
}

enemyMove();

Confirm.onclick = function() {
//    var wind = Math.floor(Math.random() * 100); 
    var wind = 40 
//    var move = getRndInteger(0, 16);
    var move = 1
    
    if (wind>30 && wind<=60 && move==1) {
        mas[posYV][posXV]=0;
        mas[posYV-2][posXV-2]=1;
    }
    console.log(posXV);
    console.log(posYV);
}
