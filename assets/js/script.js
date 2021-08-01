class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    datosPropietario() {
        return `Propietario: ${this._nombre}. Domicilio: ${this._direccion}. Telefono de contacto: ${this._telefono}`;
    }
}

class Animal extends Propietario {
    constructor(propietario, direccion, telefono, tipo) {
        super(propietario, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return `El animal es tipo: ${this._tipo}`;
    }
}

class Mascota extends Animal {
    constructor(propietario, direccion, telefono, tipo,nombre, enfermedad) {
        super(propietario, direccion, telefono, tipo);
        this._nombreMascota = nombre;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }
    set nombreMascota(nombre) {
        this._nombreMascota = nombre;
    }
    get enfermedad() {
        return this._enfermedad;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
}



document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const propietario = document.getElementById('propietario').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;
    const tipo = document.getElementById('tipo').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const enfermedad = document.getElementById('enfermedad').value;


    if (tipo == 'perro') {
        let perro = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad);
        mensajeFinal(perro);
    }else if(tipo=='gato'){
        let gato = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad);
        mensajeFinal(gato);
    }else{
        let conejo = new Mascota(propietario,direccion,telefono,tipo,nombreMascota,enfermedad);
        mensajeFinal(conejo);
    }


})



var mensajeFinal = (mascota) => {
    const ul= document.getElementById('resultado').getElementsByTagName('ul')[0];


    let datosPropietario=document.createElement("li");
    datosPropietario.appendChild(document.createTextNode(mascota.datosPropietario()));
    ul.appendChild(datosPropietario);

    let datosMascota=document.createElement("li");
    datosMascota.appendChild(document.createTextNode(mascota.tipo));
    
    datosMascota.appendChild(document.createTextNode(`, de Nombre: ${mascota.nombreMascota} y el Motivo de la Consulta: ${mascota.enfermedad}`));
    ul.appendChild(datosMascota);



}


