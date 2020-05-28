/* Programación orientada a objetos
----------------------------------------------------------------
Vamos a crear varios objetos, sus propiedades y varios métodos para ver esas propiedades

Los objetos estarán relacionados con marcas de móviles
*/

//Primero creamos el objeto de la marca Samsung

var samsung = {
    //propiedades del modelo S20 de Samsung Galaxy
    modelo : 'GalaxyS20',
    anyo : 2020,
    color : 'Cosmic Grey',

    //Definimos un método para ver las propiedades del Samsung que hemos elegido
    detalles : function () {
    console.log(` Me gusta el Samsung ${this.modelo} del año ${this.anyo} y en color ${this.color} `);
    document.write(` Me gusta el Samsung ${this.modelo} del año ${this.anyo} y en color ${this.color} `);
    }
};

    //Así es como podemos ver en consola cada propiedad del Samsung Galaxy S20:
    samsung.modelo;
    samsung.anyo;
    samsung.color;
    // Para poder ver el método para este modelo de Samsung:
    samsung.detalles ();

    //El objeto ahora es un móvil de la marca LG, cuya variable voy a vrear como "elege" para evitar posibles confusiones

var elege = {

    // Propiedades del móvil LG seleccionado
    modelo : 'G7 fit',
    anyo : 2018,
    color : 'negro',

    //Método para ver las propiedades del Samsung que hemos elegido: utilizando "this" no nos devuelve las propiedades:
    detalles : function () {
    console.log(` Me gusta el LG ${this.modelo} del año ${this.anyo} y en color ${this.color} `);
    document.write(` Me gusta el Samsung ${samsung.modelo} del año ${samsung.anyo} y en color ${samsung.color} `);
    }

};

    // Para poder ver el método para este modelo de LG:
    elege.detalles ();


    //El móvil del que vamos a definir propiedades ahora es un iPhone
    var iphone = {

        modelo : '11 Pro',
        anyo : 2019,
        color : 'verde noche',
    
        //Definimos un método para ver las propiedades del iPhone 11 Pro
        detalles : function () {
        console.log(` Me gusta el iPhone ${this.modelo} del año ${this.anyo} y en color ${this.color} `);
        document.write(` Me gusta el Samsung ${this.modelo} del año ${this.anyo} y en color ${this.color} `);
        }
    };

    // El método para poder ver todas las propiedades de este modelo de iPhone:
    iphone.detalles ();
