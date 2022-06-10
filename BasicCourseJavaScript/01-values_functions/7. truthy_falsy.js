/*lista de valores falsos usamos Boolean()*/
Boolean(0);//el cero es Falso
Boolean(null);
Boolean(NaN);//Not a Number
Boolean(undefined);
Boolean(false);
Boolean("");

/*lista de valores verdaderos*/
Boolean(" ");//string que contenga cualquier caracter incluido espacio
Boolean(2);//numeros diferentes de cero
Boolean({});//conteener objetos
Boolean(function(){});//cualquier funcion es verdadera
Boolean(true);