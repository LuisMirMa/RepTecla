function llamada(){
    console.log("Hola mundo");
}

function llamadora(call){
    console.log("Dentro de esta funcion llamamos nuestro callback")
    call()
}

llamadora(llamada)



console.log('Este texto va primero')

setTimeout(() =>{
    console.log('Este texto va segundo')
}, 4000)

console.log('Este texto va tercero')

