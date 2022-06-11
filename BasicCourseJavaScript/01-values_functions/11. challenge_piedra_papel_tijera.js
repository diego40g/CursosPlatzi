const message="Juego de piedra papel o tijera\nSelecciona entre las tres opciones ingresando su numero\n Piedra=0\n Papel=1\n Tijera=2"
user_input=window.prompt(message)

cpu_input=random(0,2)

window.alert(validarGanador(user_input,cpu_input));

function validarGanador(user,cpu){
    var input_u=comberNumPal(user);
    var input_c=comberNumPal(cpu);
    
    if((user==0&&cpu==2)||(user==1&&cpu==2)||(user==2&&cpu==1)){
        return `Gana el usuario\nUsuario=${input_u}\nPC=${input_c}`;
    }else if(user==cpu){
        return `Empate elijieron ${input_u}`;
    }else{
        return `Gana la PC\nUsuario=${input_u}\nPC=${input_c}`;
    }
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function comberNumPal(val){
    if(val==0){
        return"piedra";
    }else if(val==1){
        return"papel";
    }else{
        return"tijera";
    }
}