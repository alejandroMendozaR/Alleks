let bandera = localStorage.getItem("bandera");

listaUsuarios=JSON.parse(localStorage.getItem("lista"));

document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login');
    loginButton.addEventListener('click', login);
    
});

function login() {
    const email = document.getElementById('REmail').value;
    const password = document.getElementById('Rpass').value;


    listaUsuarios.forEach((user, index) => {
        if (user.email ===email.trim() && user.password === password.trim()) {
            alert('Inicio de sesión exitoso');
            console.log('datos:', user);
            
            bandera=true;
            indexUser = index;
            localStorage.setItem("bandera", bandera);
            localStorage.setItem("indexUser", indexUser);
            indexUser = index;
        } else {
            alert('Email o contraseña incorrectos');
        }
    });



}

let btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", () => {
    window.history.back();
});

window.addEventListener('load', () => {
    if(bandera){
        window.history.back();  
    }
})