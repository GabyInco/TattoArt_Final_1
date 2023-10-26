// Validacion de Formulario Registro //

const formRegister = document.querySelector('#registro');
const ValidacionUsuario = (event) => {

    event.preventDefault();

    const Nombre = document.querySelector('#Nombre');
    const Apellido = document.querySelector('#Apellido');
    const Usuario = document.querySelector('#Usuario');
    const Clave = document.querySelector('#Clave');
    const Correo = document.querySelector('#Correo');

    let validation = true;

    if (Nombre.value === '') {
        Nombre.classList.add("errornom");
        const divError = document.querySelector('#errornom-nombre');
        divError.textContent = 'El nombre no puede quedar vacio';
        validation = false;

    }
    if (Apellido.value === '') {
        Apellido.classList.add('error');
        const divError = document.querySelector('#error-apellido');
        divError.textContent = 'el apellido no puede quedar vacio';
        validation = false;
    }
    if (Usuario.value === '') {
        Usuario.classList.add('errorUsu');
        const divError = document.querySelector('#errorUsu-Usuario');
        divError.textContent = 'Debes completar el Nombre de Usuario';
        validation = false;

    } if (Usuario.value != '') {
        const ValidUsu = /^[a-zA-Z0-9_]{4,8}$/;
        const UsusOk = ValidUsu.test(Usuario.value);
        if (UsusOk === false) {
            Usuario.classList.add('errorUsu');
            const divError = document.querySelector('#errorUsu-Usuario');
            divError.textContent = 'Error... El usuario debe ser alfanumerico y contener entre 4 y 8 caracteres';
            validation = false;
        }

    } if (Clave.value === '') {
        Clave.classList.add("errorClave");
        const divError = document.querySelector('#errorClave-Clave');
        divError.textContent = 'Debes completar la clave';
        validation = false;

    } if (Clave.value != '') {
        const ValidClave = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
        const ClaveOk = ValidClave.test(Clave.value);
        if (ClaveOk === false) {
            Clave.classList.add("errorClave");
            const divError = document.querySelector('#errorClave-Clave');
            divError.textContent = 'La clave debe contener dos numeros, dos simboles y una letra mayuscula';
            validation = false;
        }
    } if (Correo.value === '') {
        Correo.classList.add('errorMail');
        const divError = document.querySelector('#errorMail-Correo');
        divError.textContent = 'el Correo deble completarse.';
        validation = false;

    } if (Correo.value != '') {
        const ValidEmail = /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig;
        const EmailOk = ValidEmail.test(Correo.value);
        if (EmailOk === false) {
            Correo.classList.add('errorMail');
            const divError = document.querySelector('#errorMail-Correo');
            divError.textContent = 'Formato de Email invalido.';
            validation = false;
        }

    }

    if (validation) {
        formRegister.submit();
        alert("Felicitaciones, te has registrado correctamente¡¡¡")

        let Persona = {
            'Nombre': Nombre.value,
            'Apellido': Apellido.value,
            'Usuario': Usuario.value,
            "Clave": Clave.value,
            'Correo': Correo.value,
        }
        localStorage.setItem('Presona', JSON.stringify(Persona));
    }
}

formRegister.addEventListener('submit', ValidacionUsuario);

