const message="Juego de piedra papel o tijera\nSelecciona entre las tres opciones ingresando su numero\n Piedra=0\n Papel=1\n Tijera=2"
user_input=window.prompt(message)

cpu_input=random(0,2)

window.alert(validarGanador(user_input,cpu_input));

function validarGanador(user,cpu){
    var input_u=comberNumPal(user);
    var input_c=comberNumPal(cpu);
    
    const input_res=input_u+input_c;
    console.log(input_res);

    switch(input_res){
        case 'piedratijera':
        case 'tijerapapel':
        case 'tijerapiedra':
            return `Gana el usuario\nUsuario=${input_u}\nPC=${input_c}`;
        case 'piedrapiedra':
        case 'papelpapel':
        case 'tijeratijera':
            return `Empate elijieron ${input_u}`;
        case 'piedrapapel':
        case 'papeltijera':
        case 'tijerapiedra':
            return `Gana la PC\nUsuario=${input_u}\nPC=${input_c}`;
        default:
            return `La opcion ${input_u} no se reconoce`;
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