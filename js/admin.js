let btn = document.querySelector("#btn");
let container = document.querySelector(".container");
let searchBtn = document.querySelector(".bx-search");

//cargarMenu();
//await cargarMenu();

$(function () {
    //ListarSuscripciones();
    cargarMenu();

});


//ListarSuscripciones();

btn.onclick = function () {
    container.classList.toggle("active");
}

searchBtn.onclick = function () {
    container.classList.toggle("active");
}

function cargarMenu(params) {

    fetch('http://155.254.247.10/api/Menu/ListarMenu', {
        method: "GET",
        crossorigin: true,
        Accept: "*/*",
        mode: "no-cors",
        headers:
            { "Content-Type": "aplication/json" }
    }).then(function (response) {
        if (response.ok) {
            console.log(response.json());

        } else {
            console.log('Respuesta de red OK pero respuesta HTTP no OK');
            console.log(response.json());
        }
    })
        .catch(function (error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });


}

async function ObtenerSuscripciones() {
    try {
        return await $.ajax({
            url: "http://155.254.247.10/api/Menu/ListarMenu",
            type: 'json',
            method: 'get',
            crossDomain: true,
            "headers": { "accept": "application/json", "Access-Control-Allow-Origin": "*" },
            error: function (xhr, status) { return; }
        });
    } catch (e) {
        console.log(e.responseText);
        return;
    }
}

function ListarSuscripciones() {
    let cad = '';
    ObtenerSuscripciones().then(function (res) {

        console.log(res);

        //     if (res.Status !== 0) {
        //         console.log(res.Datos);
        //     }
    }).catch(error => {
        callback(null, error);
    });

}

function callback(key, valor) {
    if (valor === "") {
        return;
    }
    if (valor !== null || valor != "") {
        console.log(valor);
    }

    return;
}