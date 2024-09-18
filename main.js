let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let btnLimpiar = document.getElementById('limpiar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;

    }

    contrasena.value = password;

    validarContraseña(password);


}


function validarContraseña(password) {
    const esFuerte = password.length >= 8 &&
                     /[A-Z]/.test(password) && 
                     /[a-z]/.test(password) && 
                     /[0-9]/.test(password) && 
                     /[_\-?@/!%^*]/.test(password);

    if (esFuerte) {
        contrasena.style.border = '3px solid green'; 
    } else {
        contrasena.style.border = '3px solid red'; 
    }
}


btnLimpiar.addEventListener('click', () => {
    cantidad.value = '';
    contrasena.value = '';
});

