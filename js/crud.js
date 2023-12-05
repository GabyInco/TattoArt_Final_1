const API_SERVER = 'http://127.0.0.1:8000/';

// Función para realizar la petición fetch
async function fetchData(url, method, data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(url, options);
    return await response.json();
}

async function fetchDataWithFile(url, method, formData) {
    const options = {
        method: method,
        body: formData,
    };

    const response = await fetch(url, options);
    return await response.json();
}

document.getElementById('sigUp').addEventListener('click'), async function () {
    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido').value;
    const usuario = document.querySelector('#usuario').value;
    const clave = document.querySelector('#clave').value;
    const correo = document.querySelector('#correo').value;

    //manejo de archivos
    /*  const bannerFileInput = document.querySelector('#banner-form');
     const banner = bannerFileInput.files[0]; */

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('usuario', usuario);
    formData.append('clave', clave);
    formData.append('correo', correo);
    let result = null;
    if (usuario.value !== "") {
        result = await fetchDataWithFile(`${API_SERVER}/api/create_Usuario/`, 'POST', formData); //CREA
    } else {
        result = alert("Usuario no valido")
    }
}
/* const formMovie = document.querySelector('#form-movie');
idMovie.value = ''
formMovie.reset();
alert(result.message); */

/*     showMoviesTable();
});
