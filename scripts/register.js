let bandera = localStorage.getItem("bandera");
listaUsuarios=JSON.parse(localStorage.getItem("lista"));

function register() {
    const username = document.getElementById('user').value;
    const email = document.getElementById('correo').value;
    const rPassword = document.getElementById('password').value;
    const passConfirm = document.getElementById('confPass').value;

    let banderaInterna = false;

    for(let i=0; i<listaUsuarios.length; i++){
        console.log(listaUsuarios[i])
        if(listaUsuarios[i].user == username.trim()){
            alert("Ese usuario ya existe");
            console.log(' usuario ya exist')
            i=listaUsuarios.length+1;
        }else{
            banderaInterna=true;
        }
    }
    const user = {
        user: username,
        email: email,
        password: rPassword
    };

    console.log(user);


    if (username && email && rPassword && banderaInterna && rPassword.trim() == passConfirm.trim()) {
        
        listaUsuarios.push(user)
        localStorage.setItem("lista", JSON.stringify(listaUsuarios));
        alert('Usuario registrado con éxito');
        console.log('datos:', JSON.stringify(user));
        bandera=true;
        localStorage.setItem("bandera", bandera);
        window.history.back();
    } else {
        alert('Por favor, complete todos los campos y asegurese de que las contrasesñas coincidan');
    }
}

let btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", () => {
    window.history.back();
});